/**
 * Convert MEKONG_DE_AN_V2_MASTER.md to DOCX and PDF with full Mermaid rendering.
 * Uses mmdc for Mermaid->PNG, pandoc for DOCX, Puppeteer for PDF.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const INPUT_FILE = path.join(__dirname, 'MEKONG_DE_AN_V2_MASTER.md');
const MERMAID_DIR = path.join(__dirname, 'mermaid_master');
const TEMP_MD = path.join(__dirname, '_master_converted.md');
const TEMP_HTML = path.join(__dirname, '_master_output.html');
const OUTPUT_DOCX = path.join(__dirname, 'MEKONG_DE_AN_V2_MASTER.docx');
const OUTPUT_PDF = path.join(__dirname, 'MEKONG_DE_AN_V2_MASTER.pdf');

if (!fs.existsSync(MERMAID_DIR)) fs.mkdirSync(MERMAID_DIR);

console.log('='.repeat(60));
console.log('MEKONG MASTER — Convert to DOCX + PDF');
console.log('='.repeat(60));

// 1. Read file
const content = fs.readFileSync(INPUT_FILE, 'utf-8');
console.log(`\n[1/7] File: ${content.length.toLocaleString()} chars`);

// 2. Extract mermaid blocks
const mermaidRegex = /```mermaid\s*\n([\s\S]*?)```/g;
const blocks = [];
let match;
while ((match = mermaidRegex.exec(content)) !== null) {
    blocks.push({ index: blocks.length, start: match.index, end: match.index + match[0].length, code: match[1].trim() });
}
console.log(`   Found ${blocks.length} Mermaid blocks`);

// 3. Sanitize — remove C-style comments
function sanitize(code) {
    return code.replace(/\/\*[\s\S]*?\*\//g, '').split('\n').filter((l, i, a) => i > 0 || l.trim()).join('\n');
}

// 4. Write .mmd files
console.log(`\n[2/7] Writing .mmd files...`);
for (const b of blocks) {
    fs.writeFileSync(path.join(MERMAID_DIR, `d_${String(b.index).padStart(3, '0')}.mmd`), sanitize(b.code), 'utf-8');
}

// 5. Render mermaid diagrams
console.log(`\n[3/7] Rendering ${blocks.length} diagrams...`);
const configPath = path.join(__dirname, '_mmdc_cfg.json');
const puppetPath = path.join(__dirname, '_pup_cfg.json');
fs.writeFileSync(configPath, JSON.stringify({ theme: "default", flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" } }));
fs.writeFileSync(puppetPath, JSON.stringify({ args: ["--no-sandbox", "--disable-setuid-sandbox"] }));

let ok = 0, fail = 0;
for (const b of blocks) {
    const idx = String(b.index).padStart(3, '0');
    const mmd = path.join(MERMAID_DIR, `d_${idx}.mmd`);
    const png = path.join(MERMAID_DIR, `d_${idx}.png`);
    if (fs.existsSync(png) && fs.statSync(png).size > 100) { ok++; process.stdout.write(`  [${b.index+1}/${blocks.length}] Cached\n`); continue; }
    process.stdout.write(`  [${b.index+1}/${blocks.length}] Rendering...`);
    try {
        execSync(`mmdc -i "${mmd}" -o "${png}" -b white -w 1200 -c "${configPath}" -p "${puppetPath}"`, { timeout: 120000, stdio: 'pipe', windowsHide: true });
        if (fs.existsSync(png) && fs.statSync(png).size > 100) { ok++; process.stdout.write(' OK\n'); }
        else { fail++; process.stdout.write(' EMPTY\n'); }
    } catch (e) {
        process.stdout.write(' FAIL\n');
        try { execSync(`mmdc -i "${mmd}" -o "${png}" -b white`, { timeout: 120000, stdio: 'pipe', windowsHide: true }); if (fs.existsSync(png) && fs.statSync(png).size > 100) { ok++; fail--; console.log('    -> Retry OK'); } } catch {}
        fail++;
    }
}
console.log(`\n   Results: ${ok} OK, ${fail} failed`);

// 6. Replace mermaid blocks with images in markdown
console.log(`\n[4/7] Creating modified markdown...`);
let modified = content;
for (let i = blocks.length - 1; i >= 0; i--) {
    const b = blocks[i];
    const idx = String(b.index).padStart(3, '0');
    const png = path.join(MERMAID_DIR, `d_${idx}.png`);
    const rel = `mermaid_master/d_${idx}.png`;
    const repl = (fs.existsSync(png) && fs.statSync(png).size > 100)
        ? `\n![Diagram ${b.index+1}](${rel})\n`
        : `\n\`\`\`\n[Mermaid Diagram ${b.index+1}]\n${b.code.substring(0,200)}\n\`\`\`\n`;
    modified = modified.substring(0, b.start) + repl + modified.substring(b.end);
}
fs.writeFileSync(TEMP_MD, modified, 'utf-8');

// 7. DOCX
console.log(`\n[5/7] Converting to DOCX...`);
try {
    execSync(`pandoc "${TEMP_MD}" -o "${OUTPUT_DOCX}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks+backtick_code_blocks" --to docx --toc --toc-depth=3 --standalone --resource-path "${__dirname}" --wrap=none`, { cwd: __dirname, stdio: 'inherit', timeout: 180000 });
    console.log(`   -> DOCX: ${OUTPUT_DOCX}`);
} catch (e) { console.error(`   DOCX FAILED: ${e.message.substring(0,200)}`); }

// 8. HTML for PDF
const cssPath = path.join(__dirname, '_master_style.css');
fs.writeFileSync(cssPath, `
@page { size: A4; margin: 2cm 2.5cm; }
body { font-family: "Segoe UI", "Noto Sans", "Arial Unicode MS", sans-serif; font-size: 11pt; line-height: 1.6; color: #1a1a1a; }
h1 { font-size: 20pt; color: #1a365d; border-bottom: 2px solid #2b6cb0; padding-bottom: 6pt; page-break-after: avoid; margin-top: 24pt; }
h2 { font-size: 16pt; color: #2b6cb0; border-bottom: 1px solid #bee3f8; padding-bottom: 4pt; page-break-after: avoid; margin-top: 20pt; }
h3 { font-size: 13pt; color: #2c5282; page-break-after: avoid; margin-top: 16pt; }
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

console.log(`\n[6/7] Generating HTML...`);
try {
    execSync(`pandoc "${TEMP_MD}" -o "${TEMP_HTML}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks+backtick_code_blocks" --to html5 --toc --toc-depth=3 --standalone --embed-resources --resource-path "${__dirname}" --metadata title="MEKONG TECHNOLOGY" --css "${cssPath}" --wrap=none`, { cwd: __dirname, stdio: 'inherit', timeout: 180000 });
} catch (e) { console.error(`   HTML FAILED: ${e.message.substring(0,200)}`); }

// 9. PDF via Puppeteer
console.log(`\n[7/7] Converting to PDF (Puppeteer)...`);
const puppeteer = require('C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    const html = fs.readFileSync(TEMP_HTML, 'utf-8');
    console.log(`   Loading HTML (${(html.length/1024).toFixed(0)} KB)...`);
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(async () => {
        document.querySelectorAll('img').forEach(img => { if (!img.complete) img.onload = () => {}; });
        // Remove any CSS @page counter rules
        document.querySelectorAll('style').forEach(s => {
            s.textContent = s.textContent.replace(/@bottom-center\s*\{[^}]*\}/g, '');
            s.textContent = s.textContent.replace(/@top-center\s*\{[^}]*\}/g, '');
        });
    });
    console.log('   Generating PDF...');
    await page.pdf({
        path: OUTPUT_PDF, format: 'A4',
        margin: { top: '2cm', right: '2cm', bottom: '2cm', left: '2cm' },
        printBackground: true, displayHeaderFooter: true,
        headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;color:#666;margin-top:10px;">MEKONG TECHNOLOGY — De an Cong nghe cao</div>',
        footerTemplate: '<div style="font-size:9px;text-align:center;width:100%;color:#666;margin-bottom:10px;"><span class="pageNumber"></span></div>',
        timeout: 180000
    });
    await browser.close();
    const sz = (fs.statSync(OUTPUT_PDF).size/1024/1024).toFixed(1);
    console.log(`   -> PDF: ${OUTPUT_PDF} (${sz} MB)`);

    // Summary
    console.log('\n' + '='.repeat(60));
    if (fs.existsSync(OUTPUT_DOCX)) console.log(`  DOCX: ${(fs.statSync(OUTPUT_DOCX).size/1024/1024).toFixed(1)} MB -> ${OUTPUT_DOCX}`);
    if (fs.existsSync(OUTPUT_PDF)) console.log(`  PDF:  ${sz} MB -> ${OUTPUT_PDF}`);
    console.log(`  Mermaid: ${ok}/${blocks.length} rendered`);
    console.log('='.repeat(60));

    // Cleanup config
    try { fs.unlinkSync(configPath); } catch {}
    try { fs.unlinkSync(puppetPath); } catch {}
})();
