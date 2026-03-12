/**
 * _convert_master.js
 * All-in-one script to convert MEKONG_DE_AN_V2_MASTER.md to DOCX and PDF
 * Steps:
 *   1. Add page breaks before # headings
 *   2. Render mermaid diagrams to PNG (for DOCX)
 *   3. Create temp MD with PNG refs (for DOCX)
 *   4. pandoc → DOCX
 *   5. pandoc → HTML → inject mermaid.js → puppeteer → PDF
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SRC = 'MEKONG_DE_AN_V2_MASTER.md';
const TEMP_MD = 'MEKONG_DE_AN_V2_MASTER_docx_temp.md';
const OUT_DOCX = 'MEKONG_DE_AN_V2_MASTER.docx';
const OUT_HTML = 'MEKONG_DE_AN_V2_MASTER.html';
const OUT_PDF = 'MEKONG_DE_AN_V2_MASTER.pdf';
const IMG_DIR = 'mermaid_master';

async function main() {
  console.log('=== MASTER CONVERSION PIPELINE ===\n');

  // Step 1: Read source
  console.log('[1/6] Reading source...');
  let md = fs.readFileSync(SRC, 'utf8');
  console.log(`  Source: ${SRC} (${Math.round(Buffer.byteLength(md)/1024)} KB)`);

  // Step 2: Add page breaks before # headings (not ## or ###)
  console.log('[2/6] Adding page breaks before # headings...');
  let pbCount = 0;
  const pageBreakDiv = '<div style="page-break-before: always;"></div>';

  // Add page breaks before each top-level # heading (but not the very first one)
  // Pattern: match \n# HEADING (not ## or ###)
  const lines = md.split(/\r?\n/);
  const newLines = [];
  let firstH1Found = false;
  for (let i = 0; i < lines.length; i++) {
    // Match # HEADING but not ## or ### etc.
    if (/^# [A-ZÀ-Ỹa-zà-ỹ]/.test(lines[i]) && !/^## /.test(lines[i])) {
      if (firstH1Found) {
        // Add page break before this heading
        newLines.push('');
        newLines.push(pageBreakDiv);
        newLines.push('');
        pbCount++;
      }
      firstH1Found = true;
    }
    // Also add page break before ## PHẦN headings
    if (/^## PHẦN/.test(lines[i]) || /^## Phần/.test(lines[i])) {
      newLines.push('');
      newLines.push(pageBreakDiv);
      newLines.push('');
      pbCount++;
    }
    newLines.push(lines[i]);
  }
  md = newLines.join('\r\n');
  console.log(`  Added ${pbCount} page breaks.`);

  // Write page-break version back (we'll use this for PDF too)
  const mdWithPB = md;
  fs.writeFileSync(SRC, mdWithPB);
  console.log(`  Updated ${SRC} with page breaks.`);

  // Step 3: Render mermaid to PNG
  console.log('[3/6] Rendering mermaid diagrams to PNG...');
  if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR);

  const mermaidRe = /```mermaid\r?\n([\s\S]*?)```/g;
  let match;
  const diagrams = [];
  let idx = 0;
  while ((match = mermaidRe.exec(md)) !== null) {
    const code = match[1].trim();
    const mmdFile = path.join(IMG_DIR, `diagram_${String(idx).padStart(3,'0')}.mmd`);
    const pngFile = path.join(IMG_DIR, `diagram_${String(idx).padStart(3,'0')}.png`);
    fs.writeFileSync(mmdFile, code, 'utf8');
    diagrams.push({ idx, code, mmdFile, pngFile, fullMatch: match[0] });
    idx++;
  }
  console.log(`  Found ${diagrams.length} mermaid diagrams.`);

  // Render mermaid PNGs using puppeteer-core
  const puppeteer = require('puppeteer-core');
  const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

  // Load mermaid.js once
  const mermaidHtmlTemplate = (code, id) => `<!DOCTYPE html>
<html><head>
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<style>body{margin:0;padding:20px;background:#fff;font-family:'Times New Roman',serif;}</style>
</head><body>
<pre class="mermaid" id="d${id}">${code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
<script>mermaid.initialize({startOnLoad:true,theme:'default',flowchart:{htmlLabels:true}});</script>
</body></html>`;

  let rendered = 0;
  let failed = 0;
  for (const d of diagrams) {
    try {
      // Skip if PNG already exists and is recent
      if (fs.existsSync(d.pngFile)) {
        const stat = fs.statSync(d.pngFile);
        if (stat.size > 1000) { rendered++; continue; }
      }

      const html = mermaidHtmlTemplate(d.code, d.idx);
      await page.setContent(html, { waitUntil: 'networkidle0', timeout: 15000 });
      await page.waitForFunction(() => {
        const el = document.querySelector('.mermaid svg');
        return el && el.getBBox().width > 0;
      }, { timeout: 10000 }).catch(() => {});
      
      // Wait a bit for rendering
      await new Promise(r => setTimeout(r, 500));

      const el = await page.$('.mermaid');
      if (el) {
        await el.screenshot({ path: d.pngFile, type: 'png' });
        rendered++;
      } else {
        failed++;
        console.log(`  WARN: No element for diagram ${d.idx}`);
      }
    } catch (err) {
      failed++;
      console.log(`  ERR diagram ${d.idx}: ${err.message.substring(0,80)}`);
    }
    
    if ((rendered + failed) % 10 === 0) {
      process.stdout.write(`  Progress: ${rendered + failed}/${diagrams.length}\r`);
    }
  }
  await browser.close();
  console.log(`\n  Rendered: ${rendered}, Failed: ${failed}`);

  // Step 4: Create temp MD with PNG refs for DOCX
  console.log('[4/6] Creating temp MD for DOCX...');
  let mdDocx = md;
  idx = 0;
  mdDocx = mdDocx.replace(mermaidRe, (match) => {
    const pngFile = path.join(IMG_DIR, `diagram_${String(idx).padStart(3,'0')}.png`);
    idx++;
    if (fs.existsSync(pngFile) && fs.statSync(pngFile).size > 1000) {
      return `![Diagram ${idx}](${pngFile.replace(/\\/g, '/')})`;
    }
    return '*(Diagram omitted)*';
  });
  fs.writeFileSync(TEMP_MD, mdDocx, 'utf8');
  console.log(`  Created ${TEMP_MD}`);

  // Step 5: DOCX
  console.log('[5/6] Converting to DOCX...');
  try {
    let pandocCmd = `pandoc "${TEMP_MD}" -o "${OUT_DOCX}"`;
    if (fs.existsSync('reference_tnr.docx')) {
      pandocCmd += ' --reference-doc=reference_tnr.docx';
    }
    execSync(pandocCmd, { stdio: 'pipe' });
    const docxSize = Math.round(fs.statSync(OUT_DOCX).size / 1024);
    console.log(`  DOCX: ${OUT_DOCX} (${docxSize} KB)`);
  } catch (err) {
    console.log(`  DOCX ERROR: ${err.message.substring(0,100)}`);
  }

  // Step 6: PDF via HTML pipeline
  console.log('[6/6] Converting to PDF...');
  try {
    // pandoc to HTML
    execSync(`pandoc "${SRC}" -o "${OUT_HTML}" --standalone --metadata title="MEKONG DE AN V2 MASTER"`, { stdio: 'pipe' });
    
    // inject mermaid
    if (fs.existsSync('_inject_mermaid.js')) {
      execSync(`node _inject_mermaid.js "${OUT_HTML}" "${OUT_HTML}"`, { stdio: 'pipe' });
    }

    // HTML to PDF
    if (fs.existsSync('_convert_mau14_pdf.js')) {
      // We need a modified version for MASTER file
      const browser2 = await puppeteer.launch({
        executablePath: CHROME,
        headless: 'new',
        args: ['--no-sandbox']
      });
      const page2 = await browser2.newPage();
      
      const htmlContent = fs.readFileSync(OUT_HTML, 'utf8');
      const htmlSize = Math.round(Buffer.byteLength(htmlContent) / 1024);
      console.log(`  HTML: ${htmlSize} KB`);

      await page2.goto(`file:///${path.resolve(OUT_HTML).replace(/\\/g, '/')}`, {
        waitUntil: 'networkidle0',
        timeout: 120000
      });

      // Wait for mermaid to render
      await new Promise(r => setTimeout(r, 5000));
      
      await page2.pdf({
        path: OUT_PDF,
        format: 'A4',
        margin: { top: '2cm', bottom: '2cm', left: '1.5cm', right: '1.5cm' },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;font-family:Times New Roman;">Mekong Technology — Đề án Đầu tư KCNC TP.HCM</div>',
        footerTemplate: '<div style="font-size:8px;text-align:center;width:100%;font-family:Times New Roman;">Trang <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
        timeout: 120000
      });

      await browser2.close();
      const pdfSize = Math.round(fs.statSync(OUT_PDF).size / 1024);
      console.log(`  PDF: ${OUT_PDF} (${pdfSize} KB)`);
    }
  } catch (err) {
    console.log(`  PDF ERROR: ${err.message.substring(0,200)}`);
  }

  console.log('\n=== DONE ===');
}

main().catch(err => { console.error(err); process.exit(1); });
