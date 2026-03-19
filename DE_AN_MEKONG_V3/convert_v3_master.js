/**
 * MEKONG V3 (22M) — Convert MASTER.md → DOCX + PDF
 * All Mermaid diagrams rendered to PNG images.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIR         = __dirname;
const INPUT_MD    = path.join(DIR, 'MEKONG_DE_AN_V3_22M_MASTER.md');
const MERMAID_DIR = path.join(DIR, 'mermaid_v3');
const TEMP_MD     = path.join(DIR, '_v3_converted.md');
const TEMP_HTML   = path.join(DIR, '_v3_output.html');
const CSS_PATH    = path.join(DIR, '_v3_style.css');
const OUTPUT_DOCX = path.join(DIR, 'MEKONG_DE_AN_V3_22M_MASTER.docx');
const OUTPUT_PDF  = path.join(DIR, 'MEKONG_DE_AN_V3_22M_MASTER.pdf');

if (!fs.existsSync(MERMAID_DIR)) fs.mkdirSync(MERMAID_DIR, { recursive: true });

function pad(n) { return String(n).padStart(3, '0'); }
function sizeMB(p) { return (fs.statSync(p).size / 1024 / 1024).toFixed(1); }

console.log('='.repeat(70));
console.log('  MEKONG V3 (22M) — MASTER -> DOCX + PDF');
console.log('='.repeat(70));

// 1. Read
const rawContent = fs.readFileSync(INPUT_MD, 'utf-8');

function convertAsciiFlowBlocks(md) {
    return md.replace(/```(?:text|txt)?\n([\s\S]*?)```/g, (full, body) => {
        const t = body.trim();
        if (!/(→|->|-->|=>|←|↓|↑)/.test(t)) return full;
        if (/(\{|\}|;|const\s+|function\s+|class\s+|SELECT\s+|INSERT\s+|UPDATE\s+|DELETE\s+)/i.test(t)) return full;

        const flat = t.replace(/\r/g, ' ').replace(/\n+/g, ' ').replace(/\s{2,}/g, ' ').trim();
        const rawNodes = flat.split(/(?:→|->|-->|=>)/).map(s => s.trim()).filter(Boolean);
        if (rawNodes.length < 3) return full;

        const nodes = [];
        for (const n of rawNodes) if (!nodes.includes(n)) nodes.push(n);
        const ids = nodes.map((_, i) => `N${i + 1}`);

        const lines = ['```mermaid', 'flowchart LR'];
        for (let i = 0; i < nodes.length; i++) {
            const escaped = nodes[i].replace(/"/g, "'");
            lines.push(`    ${ids[i]}["${escaped}"]`);
        }
        for (let i = 0; i < rawNodes.length - 1; i++) {
            const a = nodes.indexOf(rawNodes[i]);
            const b = nodes.indexOf(rawNodes[i + 1]);
            if (a >= 0 && b >= 0 && a !== b) lines.push(`    ${ids[a]} --> ${ids[b]}`);
        }
        return `\n${lines.join('\n')}\n`;
    });
}

const content = convertAsciiFlowBlocks(rawContent);
console.log(`\n[1/7] Loaded: ${(rawContent.length/1024).toFixed(0)} KB, ${rawContent.split('\n').length} lines`);

// 2. Extract mermaid
const mermaidRe = /```mermaid\s*\n([\s\S]*?)```/g;
const blocks = [];
let mt;
while ((mt = mermaidRe.exec(content)) !== null) {
    blocks.push({ index: blocks.length, start: mt.index, end: mt.index + mt[0].length, code: mt[1].trim() });
}
console.log(`[2/7] Found ${blocks.length} Mermaid diagrams`);

// 3. Sanitize + write .mmd
function sanitize(code) {
    let s = code.replace(/\/\*[\s\S]*?\*\//g, '');
    // Tránh lỗi Mermaid parse "Unsupported markdown: list" khi label bắt đầu bằng "1.", "2."...
    s = s.replace(/(\["|\|")\s*(\d+)\.\s*/g, '$1Bước $2: ');
    // Strip emoji — mmdc trên Windows không render được emoji trong node labels
    s = s.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{1FA00}-\u{1FAFF}]/gu, '');
    return s.split('\n').filter((l, i) => i > 0 || l.trim()).join('\n');
}
for (const b of blocks) {
    fs.writeFileSync(path.join(MERMAID_DIR, `diag_${pad(b.index)}.mmd`), sanitize(b.code), 'utf-8');
}

// 4. Render mermaid -> PNG
console.log(`\n[3/7] Rendering ${blocks.length} diagrams...`);
const cfgPath = path.join(DIR, '_mmdc_cfg.json');
const pupPath = path.join(DIR, '_pup_cfg.json');
fs.writeFileSync(cfgPath, JSON.stringify({ theme:'default', flowchart:{useMaxWidth:true,htmlLabels:true,curve:'basis'}, gantt:{useMaxWidth:true}, sequence:{useMaxWidth:true} }));
// Use local Chrome — must write without BOM
const pupData = JSON.stringify({
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox','--disable-setuid-sandbox']
});
fs.writeFileSync(pupPath, pupData, { encoding: 'utf-8' });

let okCount = 0, failCount = 0;
for (const b of blocks) {
    const idx = pad(b.index);
    const mmd = path.join(MERMAID_DIR, `diag_${idx}.mmd`);
    const png = path.join(MERMAID_DIR, `diag_${idx}.png`);
    // Always re-render for FHD quality
    if (fs.existsSync(png)) fs.unlinkSync(png);
    process.stdout.write(`  [${b.index+1}/${blocks.length}] Rendering FHD...`);
    let rendered = false;
    for (let att = 0; att < 2 && !rendered; att++) {
        try {
            let cmd = `mmdc -i "${mmd}" -o "${png}" -b white -w 2400 -s 3 -c "${cfgPath}" -p "${pupPath}"`;
            execSync(cmd, { timeout: 120000, stdio: 'pipe', windowsHide: true });
            if (fs.existsSync(png) && fs.statSync(png).size > 200) rendered = true;
        } catch(e) { const end=Date.now()+2000; while(Date.now()<end){} }
    }
    if (rendered) { okCount++; process.stdout.write(` OK (${(fs.statSync(png).size/1024).toFixed(0)} KB)\n`); }
    else { failCount++; process.stdout.write(` FAIL\n`); }
}
console.log(`\n   Result: ${okCount} OK, ${failCount} failed / ${blocks.length} total`);

// 5. Replace mermaid blocks with images
console.log(`\n[4/7] Building image-embedded markdown...`);
let modified = content;
for (let i = blocks.length - 1; i >= 0; i--) {
    const b = blocks[i];
    const idx = pad(b.index);
    const png = path.join(MERMAID_DIR, `diag_${idx}.png`);
    const rel = `mermaid_v3/diag_${idx}.png`;
    const repl = (fs.existsSync(png) && fs.statSync(png).size > 200)
        ? `\n![So do ${b.index+1}](${rel})\n`
        : `\n\`\`\`\n[Bieu do Mermaid ${b.index+1}]\n\`\`\`\n`;
    modified = modified.substring(0, b.start) + repl + modified.substring(b.end);
}
modified = modified.replace(/<!-- === SECTION: .+? === -->\n?/g, '');
modified = modified.replace(/Xem\s+sơ\s+đồ\s+ASCII/gi, 'Xem sơ đồ Mermaid');
fs.writeFileSync(TEMP_MD, modified, 'utf-8');
console.log(`   Saved: _v3_converted.md (${(modified.length/1024).toFixed(0)} KB)`);

// 6. CSS
const CSS = `
@page { size: A4; margin: 2cm 2.5cm 2.5cm 2.5cm; }
body { font-family: "Times New Roman","Noto Serif","Georgia",serif; font-size: 12pt; line-height: 1.7; color: #1a1a1a; text-align: justify; }
h1 { font-size: 22pt; color: #0d2137; border-bottom: 3px solid #1a4a7a; padding-bottom: 8pt; margin-top: 36pt; page-break-after: avoid; text-transform: uppercase; letter-spacing: 0.5pt; }
h2 { font-size: 17pt; color: #1a4a7a; border-bottom: 1.5px solid #b3d4f0; padding-bottom: 5pt; margin-top: 28pt; page-break-after: avoid; }
h3 { font-size: 14pt; color: #1e5a8a; margin-top: 20pt; page-break-after: avoid; }
h4 { font-size: 12pt; color: #1e5a8a; font-style: italic; margin-top: 14pt; page-break-after: avoid; }
table { border-collapse: collapse; width: 100%; margin: 14pt 0; font-size: 10pt; page-break-inside: auto; }
thead { display: table-header-group; }
th { background-color: #1a4a7a; color: #fff; font-weight: bold; padding: 7pt 10pt; text-align: left; border: 1px solid #1a4a7a; }
td { padding: 6pt 10pt; border: 1px solid #cbd5e0; vertical-align: top; }
tr:nth-child(even) { background-color: #f0f5fa; }
img { max-width: 100%; height: auto; display: block; margin: 16pt auto; page-break-inside: avoid; border: 1px solid #e2e8f0; border-radius: 4pt; padding: 4pt; }
blockquote { border-left: 4px solid #1a4a7a; padding: 10pt 16pt; margin: 14pt 0; color: #2d3748; background-color: #edf4fc; page-break-inside: avoid; }
code { background-color: #edf2f7; padding: 2pt 5pt; border-radius: 3pt; font-size: 10pt; font-family: Consolas,monospace; }
pre { background-color: #f7fafc; border: 1px solid #e2e8f0; padding: 12pt; border-radius: 4pt; font-size: 9.5pt; page-break-inside: avoid; }
ul, ol { margin: 8pt 0; padding-left: 24pt; }
li { margin-bottom: 4pt; }
hr { border: none; border-top: 2px solid #1a4a7a; margin: 24pt 0; }
strong { color: #0d2137; }
@media print { body { margin:0; padding:0; } h1,h2,h3,h4 { page-break-after:avoid; } table,img,blockquote,pre { page-break-inside: avoid; } }
`;
fs.writeFileSync(CSS_PATH, CSS.trim(), 'utf-8');

// 7. DOCX
console.log(`\n[5/7] Converting to DOCX...`);
try {
    execSync(`pandoc "${TEMP_MD}" -o "${OUTPUT_DOCX}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks+backtick_code_blocks" --to docx --toc --toc-depth=3 --standalone --resource-path "${DIR}" --wrap=none --metadata title="MEKONG TECHNOLOGY" --metadata lang=vi`, { cwd: DIR, stdio: 'inherit', timeout: 300000 });
    console.log(`   -> DOCX: ${OUTPUT_DOCX} (${sizeMB(OUTPUT_DOCX)} MB)`);
} catch(e) { console.error(`   DOCX FAILED: ${e.message.substring(0,200)}`); }

// 8. HTML
console.log(`\n[6/7] Generating HTML...`);
try {
    execSync(`pandoc "${TEMP_MD}" -o "${TEMP_HTML}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks+backtick_code_blocks" --to html5 --toc --toc-depth=3 --standalone --embed-resources --resource-path "${DIR}" --css "${CSS_PATH}" --metadata title="MEKONG TECHNOLOGY" --metadata lang=vi --wrap=none`, { cwd: DIR, stdio: 'inherit', timeout: 300000 });
    console.log(`   -> HTML: ${TEMP_HTML} (${(fs.statSync(TEMP_HTML).size/1024).toFixed(0)} KB)`);
} catch(e) { console.error(`   HTML FAILED: ${e.message.substring(0,200)}`); }

// 9. PDF
console.log(`\n[7/7] Converting to PDF...`);
(async function generatePDF() {
    let puppeteer;
    const paths = [
        'puppeteer',
        'puppeteer-core',
        'C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer',
        'C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer-core'
    ];
    for (const p of paths) { try { puppeteer = require(p); break; } catch {} }
    if (!puppeteer) { console.error('   puppeteer not found!'); return; }

    const chromeExe = ['C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe','C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'].find(p=>fs.existsSync(p));
    const opts = { headless: 'new', args: ['--no-sandbox','--disable-setuid-sandbox','--disable-gpu'] };
    if (chromeExe) opts.executablePath = chromeExe;

    const browser = await puppeteer.launch(opts);
    const page = await browser.newPage();
    const html = fs.readFileSync(TEMP_HTML, 'utf-8');
    console.log(`   Loading HTML (${(html.length/1024).toFixed(0)} KB)...`);
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 600000 });

    await page.evaluate(async()=>{
        await Promise.all(Array.from(document.images).map(img=>img.complete?Promise.resolve():new Promise(r=>{img.onload=img.onerror=r;})));
        document.querySelectorAll('style').forEach(s=>{
            s.textContent=s.textContent.replace(/@bottom-center\s*\{[^}]*\}/g,'').replace(/@top-center\s*\{[^}]*\}/g,'');
        });
    });

    console.log('   Generating PDF...');
    await page.pdf({
        path: OUTPUT_PDF, format: 'A4',
        margin: { top:'2.5cm', right:'2cm', bottom:'2.5cm', left:'2.5cm' },
        printBackground: true, displayHeaderFooter: true,
        headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;color:#666;margin-top:10px;font-family:serif;">MEKONG TECHNOLOGY — Đề án Đầu tư Công nghệ cao (KCNC TP.HCM)</div>',
        footerTemplate: '<div style="font-size:9px;text-align:center;width:100%;color:#666;margin-bottom:10px;font-family:serif;">Trang <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
        timeout: 300000
    });
    await browser.close();
    console.log(`   -> PDF: ${OUTPUT_PDF} (${sizeMB(OUTPUT_PDF)} MB)`);

    console.log('\n'+'='.repeat(70));
    console.log('  HOAN TAT — MEKONG V3 (22M USD) — FHD Quality');
    console.log('='.repeat(70));
    console.log(`  Mermaid: ${okCount}/${blocks.length} rendered (scale 3x, 2400px)`);
    if (fs.existsSync(OUTPUT_DOCX)) console.log(`  DOCX: ${sizeMB(OUTPUT_DOCX)} MB`);
    if (fs.existsSync(OUTPUT_PDF)) console.log(`  PDF:  ${sizeMB(OUTPUT_PDF)} MB`);
    console.log('='.repeat(70));

    try { fs.unlinkSync(cfgPath); } catch {}
    try { fs.unlinkSync(pupPath); } catch {}
})().catch(err => {
    console.error('PDF error:', err.message);
    try { fs.unlinkSync(cfgPath); } catch {}
    try { fs.unlinkSync(pupPath); } catch {}
});
