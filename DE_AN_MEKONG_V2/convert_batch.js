/**
 * Batch render all Mermaid diagrams from MEKONG_DE_AN_V2.md to PNG images
 * Uses a single Puppeteer browser session for all 57 diagrams (fast!)
 * Then creates a modified markdown and calls pandoc for DOCX/PDF conversion.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const INPUT_FILE = path.join(__dirname, 'MEKONG_DE_AN_V2.md');
const MERMAID_DIR = path.join(__dirname, 'mermaid_images');
const TEMP_MD = path.join(__dirname, '_temp_converted.md');
const OUTPUT_DOCX = path.join(__dirname, 'MEKONG_DE_AN_V2.docx');
const OUTPUT_PDF = path.join(__dirname, 'MEKONG_DE_AN_V2.pdf');

// Ensure output dir exists
if (!fs.existsSync(MERMAID_DIR)) fs.mkdirSync(MERMAID_DIR);

// Step 1: Read and extract mermaid blocks
console.log('='.repeat(60));
console.log('MEKONG DE AN V2 — Batch Mermaid Renderer + Converter');
console.log('='.repeat(60));

const content = fs.readFileSync(INPUT_FILE, 'utf-8');
console.log(`\n[1/6] File: ${content.length.toLocaleString()} chars`);

const mermaidRegex = /```mermaid\s*\n([\s\S]*?)```/g;
const blocks = [];
let match;
while ((match = mermaidRegex.exec(content)) !== null) {
    blocks.push({
        index: blocks.length,
        start: match.index,
        end: match.index + match[0].length,
        code: match[1].trim(),
        fullMatch: match[0]
    });
}
console.log(`   Found ${blocks.length} Mermaid blocks`);

// Step 2: Sanitize mermaid code - remove C-style comments
function sanitize(code) {
    // Remove /* ... */ comments
    code = code.replace(/\/\*[\s\S]*?\*\//g, '');
    // Trim empty lines at start
    const lines = code.split('\n');
    while (lines.length > 0 && lines[0].trim() === '') lines.shift();
    return lines.join('\n');
}

// Step 3: Write individual .mmd files
console.log(`\n[2/6] Writing ${blocks.length} .mmd files...`);
for (const block of blocks) {
    const mmdPath = path.join(MERMAID_DIR, `diagram_${String(block.index).padStart(3, '0')}.mmd`);
    fs.writeFileSync(mmdPath, sanitize(block.code), 'utf-8');
}

// Step 4: Render all with mmdc using batch approach
console.log(`\n[3/6] Rendering ${blocks.length} diagrams with mmdc...`);

// Write mermaid config
const configPath = path.join(__dirname, '_mmdc_config.json');
fs.writeFileSync(configPath, JSON.stringify({
    theme: "default",
    themeVariables: { fontSize: "14px" },
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
    sequence: { useMaxWidth: true },
    gantt: { useMaxWidth: true }
}));

const puppeteerPath = path.join(__dirname, '_puppeteer.json');
fs.writeFileSync(puppeteerPath, JSON.stringify({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
}));

let successCount = 0;
let failCount = 0;

for (const block of blocks) {
    const idx = String(block.index).padStart(3, '0');
    const mmdPath = path.join(MERMAID_DIR, `diagram_${idx}.mmd`);
    const pngPath = path.join(MERMAID_DIR, `diagram_${idx}.png`);

    // Skip if already rendered
    if (fs.existsSync(pngPath) && fs.statSync(pngPath).size > 100) {
        process.stdout.write(`  [${block.index + 1}/${blocks.length}] Cached\n`);
        successCount++;
        continue;
    }

    process.stdout.write(`  [${block.index + 1}/${blocks.length}] Rendering...`);
    try {
        execSync(
            `mmdc -i "${mmdPath}" -o "${pngPath}" -b white -w 1200 -c "${configPath}" -p "${puppeteerPath}"`,
            { timeout: 90000, stdio: 'pipe', windowsHide: true }
        );
        if (fs.existsSync(pngPath) && fs.statSync(pngPath).size > 100) {
            process.stdout.write(' OK\n');
            successCount++;
        } else {
            process.stdout.write(' EMPTY\n');
            failCount++;
        }
    } catch (err) {
        process.stdout.write(` FAILED (${err.message.substring(0, 80)})\n`);
        failCount++;
        // Try simpler rendering without config
        try {
            execSync(`mmdc -i "${mmdPath}" -o "${pngPath}" -b white`, {
                timeout: 90000, stdio: 'pipe', windowsHide: true
            });
            if (fs.existsSync(pngPath) && fs.statSync(pngPath).size > 100) {
                console.log(`    -> Retry OK`);
                successCount++;
                failCount--;
            }
        } catch (e2) {
            // Give up on this one
        }
    }
}

console.log(`\n   Results: ${successCount} OK, ${failCount} failed`);

// Step 5: Create modified markdown with image references
console.log(`\n[4/6] Creating modified markdown...`);
let modified = content;
// Process in reverse to maintain positions
for (let i = blocks.length - 1; i >= 0; i--) {
    const block = blocks[i];
    const idx = String(block.index).padStart(3, '0');
    const pngPath = path.join(MERMAID_DIR, `diagram_${idx}.png`);
    const relPath = `mermaid_images/diagram_${idx}.png`;

    let replacement;
    if (fs.existsSync(pngPath) && fs.statSync(pngPath).size > 100) {
        replacement = `\n![Diagram ${block.index + 1}](${relPath})\n`;
    } else {
        // Keep as plain code block (not mermaid so pandoc doesn't choke)
        replacement = `\n\`\`\`\n[Mermaid Diagram ${block.index + 1}]\n${block.code.substring(0, 200)}\n\`\`\`\n`;
    }
    modified = modified.substring(0, block.start) + replacement + modified.substring(block.end);
}

fs.writeFileSync(TEMP_MD, modified, 'utf-8');
console.log(`   Saved: ${TEMP_MD}`);

// Step 6: Convert with pandoc
console.log(`\n[5/6] Converting to DOCX...`);
try {
    execSync(
        `pandoc "${TEMP_MD}" -o "${OUTPUT_DOCX}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks+backtick_code_blocks" --to docx --toc --toc-depth=3 --standalone --resource-path "${__dirname}" --wrap=none`,
        { cwd: __dirname, stdio: 'inherit', timeout: 120000 }
    );
    console.log(`   -> DOCX saved: ${OUTPUT_DOCX}`);
} catch (err) {
    console.error(`   -> DOCX FAILED: ${err.message.substring(0, 200)}`);
}

// Write CSS for PDF
const cssPath = path.join(__dirname, '_pdf_style.css');
fs.writeFileSync(cssPath, `
@page { size: A4; margin: 2cm 2.5cm; }
body { font-family: "Segoe UI", "Noto Sans", "Arial Unicode MS", sans-serif; font-size: 11pt; line-height: 1.6; color: #1a1a1a; max-width: 100%; }
h1 { font-size: 20pt; color: #1a365d; border-bottom: 2px solid #2b6cb0; padding-bottom: 6pt; page-break-after: avoid; }
h2 { font-size: 16pt; color: #2b6cb0; border-bottom: 1px solid #bee3f8; padding-bottom: 4pt; page-break-after: avoid; }
h3 { font-size: 13pt; color: #2c5282; page-break-after: avoid; }
table { border-collapse: collapse; width: 100%; margin: 12pt 0; font-size: 9.5pt; page-break-inside: auto; }
th { background-color: #2b6cb0; color: white; font-weight: bold; padding: 6pt 8pt; text-align: left; border: 1px solid #2b6cb0; }
td { padding: 5pt 8pt; border: 1px solid #cbd5e0; vertical-align: top; }
tr:nth-child(even) { background-color: #f7fafc; }
img { max-width: 100%; height: auto; display: block; margin: 12pt auto; page-break-inside: avoid; }
blockquote { border-left: 3px solid #2b6cb0; padding: 8pt 12pt; margin-left: 0; color: #4a5568; background-color: #ebf8ff; }
code { background-color: #edf2f7; padding: 1pt 4pt; border-radius: 3pt; font-size: 9.5pt; }
pre { background-color: #f7fafc; border: 1px solid #e2e8f0; padding: 10pt; border-radius: 4pt; font-size: 9pt; page-break-inside: avoid; }
strong { color: #1a365d; }
`);

console.log(`\n[6/6] Converting to PDF (weasyprint)...`);
try {
    execSync(
        `pandoc "${TEMP_MD}" -o "${OUTPUT_PDF}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks" --pdf-engine=weasyprint --css "${cssPath}" --toc --toc-depth=3 --resource-path "${__dirname}" --wrap=none`,
        { cwd: __dirname, stdio: 'inherit', timeout: 300000 }
    );
    console.log(`   -> PDF saved: ${OUTPUT_PDF}`);
} catch (err) {
    console.error(`   -> PDF FAILED: ${err.message.substring(0, 200)}`);
    console.log('   -> Trying alternative PDF method...');
    // Generate HTML first, then weasyprint
    const htmlTemp = path.join(__dirname, '_temp_output.html');
    try {
        execSync(
            `pandoc "${TEMP_MD}" -o "${htmlTemp}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks" --to html5 --toc --toc-depth=3 --standalone --css "${cssPath}" --self-contained --resource-path "${__dirname}"`,
            { cwd: __dirname, stdio: 'inherit', timeout: 120000 }
        );
        execSync(
            `python -m weasyprint "${htmlTemp}" "${OUTPUT_PDF}"`,
            { cwd: __dirname, stdio: 'inherit', timeout: 300000 }
        );
        console.log(`   -> PDF saved (alt method): ${OUTPUT_PDF}`);
    } catch (err2) {
        console.error(`   -> Alt PDF also FAILED: ${err2.message.substring(0, 200)}`);
    }
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('RESULTS:');
console.log(`  Mermaid: ${successCount}/${blocks.length} rendered`);
if (fs.existsSync(OUTPUT_DOCX)) {
    const sz = (fs.statSync(OUTPUT_DOCX).size / 1024 / 1024).toFixed(1);
    console.log(`  DOCX: OK (${sz} MB) -> ${OUTPUT_DOCX}`);
} else {
    console.log('  DOCX: NOT CREATED');
}
if (fs.existsSync(OUTPUT_PDF)) {
    const sz = (fs.statSync(OUTPUT_PDF).size / 1024 / 1024).toFixed(1);
    console.log(`  PDF:  OK (${sz} MB) -> ${OUTPUT_PDF}`);
} else {
    console.log('  PDF:  NOT CREATED');
}
console.log('='.repeat(60));

// Cleanup
try { fs.unlinkSync(configPath); } catch {}
try { fs.unlinkSync(puppeteerPath); } catch {}
