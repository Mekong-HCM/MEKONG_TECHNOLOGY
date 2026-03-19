/**
 * Convert MAU_1.4_HOAN_TAT.md -> DOCX + PDF
 * - Render Mermaid blocks to PNG
 * - Build HTML with embedded resources
 * - Print PDF via Puppeteer
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIR = __dirname;
const INPUT_MD = path.join(DIR, 'MAU_1.4_HOAN_TAT.md');
const MERMAID_DIR = path.join(DIR, 'mermaid_mau14');
const TEMP_MD = path.join(DIR, '_mau14_converted.md');
const TEMP_HTML = path.join(DIR, '_mau14_output.html');
const CSS_PATH = path.join(DIR, '_mau14_style.css');
const OUTPUT_DOCX = path.join(DIR, 'MAU_1.4_HOAN_TAT.docx');
const OUTPUT_PDF = path.join(DIR, 'MAU_1.4_HOAN_TAT.pdf');

if (!fs.existsSync(INPUT_MD)) {
  console.error(`Khong tim thay file nguon: ${INPUT_MD}`);
  process.exit(1);
}
if (!fs.existsSync(MERMAID_DIR)) fs.mkdirSync(MERMAID_DIR, { recursive: true });

function pad(n) {
  return String(n).padStart(3, '0');
}

function sizeMB(filePath) {
  return (fs.statSync(filePath).size / 1024 / 1024).toFixed(2);
}

function sanitizeMermaid(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{1FA00}-\u{1FAFF}]/gu, '')
    .split('\n')
    .filter((line, idx) => idx > 0 || line.trim())
    .join('\n');
}

function findPuppeteer() {
  const candidates = [
    'puppeteer',
    'puppeteer-core',
    'C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer',
    'C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer-core'
  ];
  for (const p of candidates) {
    try {
      return require(p);
    } catch {
      // continue
    }
  }
  return null;
}

(async function run() {
  console.log('='.repeat(72));
  console.log(' CHUYEN DOI MAU 1.4 -> DOCX + PDF');
  console.log('='.repeat(72));

  const raw = fs.readFileSync(INPUT_MD, 'utf-8');
  const blockRegex = /```mermaid\s*\n([\s\S]*?)```/g;
  const blocks = [];
  let match;
  while ((match = blockRegex.exec(raw)) !== null) {
    blocks.push({
      index: blocks.length,
      start: match.index,
      end: match.index + match[0].length,
      code: match[1].trim()
    });
  }
  console.log(`So block mermaid: ${blocks.length}`);

  const cfgPath = path.join(DIR, '_mau14_mmdc_cfg.json');
  const pupPath = path.join(DIR, '_mau14_pup_cfg.json');
  fs.writeFileSync(
    cfgPath,
    JSON.stringify({ theme: 'default', flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' } }),
    'utf-8'
  );
  fs.writeFileSync(
    pupPath,
    JSON.stringify({
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }),
    'utf-8'
  );

  let rendered = 0;
  let failed = 0;

  for (const b of blocks) {
    const idx = pad(b.index);
    const mmd = path.join(MERMAID_DIR, `diag_${idx}.mmd`);
    const png = path.join(MERMAID_DIR, `diag_${idx}.png`);

    fs.writeFileSync(mmd, sanitizeMermaid(b.code), 'utf-8');
    if (fs.existsSync(png)) fs.unlinkSync(png);

    try {
      execSync(`mmdc -i "${mmd}" -o "${png}" -b white -w 2200 -s 2 -c "${cfgPath}" -p "${pupPath}"`, {
        timeout: 120000,
        stdio: 'pipe',
        windowsHide: true
      });
      if (fs.existsSync(png) && fs.statSync(png).size > 500) {
        rendered += 1;
      } else {
        failed += 1;
      }
    } catch {
      failed += 1;
    }
  }

  console.log(`Mermaid render: ${rendered} OK, ${failed} loi`);

  let converted = raw;
  for (let i = blocks.length - 1; i >= 0; i--) {
    const b = blocks[i];
    const idx = pad(b.index);
    const png = path.join(MERMAID_DIR, `diag_${idx}.png`);
    const rel = `mermaid_mau14/diag_${idx}.png`;
    const replacement = fs.existsSync(png)
      ? `\n![Sơ đồ ${b.index + 1}](${rel})\n`
      : `\n\`\`\`\n[So do ${b.index + 1} khong render duoc]\n\`\`\`\n`;

    converted = converted.slice(0, b.start) + replacement + converted.slice(b.end);
  }

  fs.writeFileSync(TEMP_MD, converted, 'utf-8');

  const css = `
@page { size: A4; margin: 2cm 2.2cm 2.2cm 2.2cm; }
body { font-family: "Times New Roman", serif; font-size: 12pt; line-height: 1.6; color: #111; }
h1 { font-size: 20pt; margin-top: 20pt; margin-bottom: 10pt; }
h2 { font-size: 16pt; margin-top: 18pt; margin-bottom: 8pt; }
h3 { font-size: 14pt; margin-top: 14pt; margin-bottom: 6pt; }
h4 { font-size: 12pt; margin-top: 12pt; margin-bottom: 4pt; }
table { width: 100%; border-collapse: collapse; margin: 12pt 0; font-size: 10.5pt; }
th, td { border: 1px solid #bbb; padding: 6pt; vertical-align: top; }
th { background: #eef3fa; }
img { max-width: 100%; display: block; margin: 10pt auto; page-break-inside: avoid; }
ul, ol { margin: 6pt 0; padding-left: 20pt; }
hr { border: none; border-top: 1.4px solid #365f91; margin: 16pt 0; }
`;
  fs.writeFileSync(CSS_PATH, css.trim(), 'utf-8');

  console.log('Dang tao DOCX...');
  execSync(
    `pandoc "${TEMP_MD}" -o "${OUTPUT_DOCX}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks" --to docx --standalone --resource-path "${DIR}" --metadata title="Mau 1.4"`,
    { cwd: DIR, stdio: 'inherit', timeout: 300000 }
  );

  console.log('Dang tao HTML...');
  execSync(
    `pandoc "${TEMP_MD}" -o "${TEMP_HTML}" --from "markdown+pipe_tables+raw_html+fenced_code_blocks" --to html5 --standalone --embed-resources --resource-path "${DIR}" --css "${CSS_PATH}" --metadata title="Mau 1.4"`,
    { cwd: DIR, stdio: 'inherit', timeout: 300000 }
  );

  const puppeteer = findPuppeteer();
  if (!puppeteer) {
    console.error('Khong tim thay puppeteer. Da tao DOCX va HTML, chua tao duoc PDF.');
    process.exit(1);
  }

  const chromePath = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ].find((p) => fs.existsSync(p));

  const launchOptions = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  };
  if (chromePath) launchOptions.executablePath = chromePath;

  console.log('Dang tao PDF...');
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  const html = fs.readFileSync(TEMP_HTML, 'utf-8');
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 300000 });

  await page.evaluate(async () => {
    await Promise.all(
      Array.from(document.images).map((img) =>
        img.complete ? Promise.resolve() : new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        })
      )
    );
  });

  await page.pdf({
    path: OUTPUT_PDF,
    format: 'A4',
    margin: { top: '2.2cm', right: '2.0cm', bottom: '2.2cm', left: '2.0cm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#666;">Mẫu số 1.4 — Dự án ứng dụng công nghệ cao</div>',
    footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#666;">Trang <span class="pageNumber"></span>/<span class="totalPages"></span></div>'
  });

  await browser.close();

  if (fs.existsSync(cfgPath)) fs.unlinkSync(cfgPath);
  if (fs.existsSync(pupPath)) fs.unlinkSync(pupPath);

  console.log('-'.repeat(72));
  console.log(`DOCX: ${OUTPUT_DOCX} (${sizeMB(OUTPUT_DOCX)} MB)`);
  console.log(`PDF : ${OUTPUT_PDF} (${sizeMB(OUTPUT_PDF)} MB)`);
  console.log('-'.repeat(72));
  console.log('Hoan tat.');
})();