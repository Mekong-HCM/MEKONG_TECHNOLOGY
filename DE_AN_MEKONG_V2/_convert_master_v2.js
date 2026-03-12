/**
 * _convert_master_v2.js
 * Convert MEKONG_DE_AN_V2_MASTER.md → DOCX + PDF
 * 
 * Strategy:
 *   - Remove any existing page-break divs first (cleanup)
 *   - Add page breaks before # and ## PHẦN headings (once)
 *   - For PDF: pandoc → HTML → inject mermaid CDN → puppeteer PDF
 *   - For DOCX: batch render mermaid PNGs → temp MD → pandoc DOCX
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
const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const PB_DIV = '<div style="page-break-before: always;"></div>';

async function main() {
  console.log('=== MASTER CONVERSION v2 ===\n');

  // --- Step 1: Read + cleanup ---
  console.log('[1/6] Reading source + removing old page breaks...');
  let md = fs.readFileSync(SRC, 'utf8');
  const sizeBefore = Math.round(Buffer.byteLength(md) / 1024);
  
  // Remove all existing page-break divs (and surrounding blank lines)
  md = md.replace(/\r?\n?\r?\n?<div style="page-break-before: always;"><\/div>\r?\n?\r?\n?/g, '\n\n');
  // Fix triple+ blank lines
  md = md.replace(/(\r?\n){3,}/g, '\n\n');
  
  const sizeAfter = Math.round(Buffer.byteLength(md) / 1024);
  console.log(`  Before cleanup: ${sizeBefore} KB → After: ${sizeAfter} KB`);

  // --- Step 2: Add page breaks ---
  console.log('[2/6] Adding page breaks...');
  const lines = md.split(/\r?\n/);
  const newLines = [];
  let firstH1 = false;
  let pbCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Page break before # HEADING (but not ## or ###)
    if (/^# [A-ZÀ-Ỹa-zà-ỹ0-9]/.test(line) && !/^## /.test(line)) {
      if (firstH1) {
        newLines.push('', PB_DIV, '');
        pbCount++;
      }
      firstH1 = true;
    }
    // Page break before ## PHẦN headings
    else if (/^## (PHẦN|Phần)/.test(line)) {
      newLines.push('', PB_DIV, '');
      pbCount++;
    }
    
    newLines.push(line);
  }

  md = newLines.join('\r\n');
  fs.writeFileSync(SRC, md, 'utf8');
  console.log(`  Added ${pbCount} page breaks. Saved to ${SRC}.`);

  // --- Step 3: Batch render mermaid PNGs ---
  console.log('[3/6] Batch rendering mermaid diagrams to PNG...');
  if (!fs.existsSync(IMG_DIR)) fs.mkdirSync(IMG_DIR);

  const mermaidRe = /```mermaid\r?\n([\s\S]*?)```/g;
  let match;
  const diagrams = [];
  let idx = 0;
  while ((match = mermaidRe.exec(md)) !== null) {
    diagrams.push({
      idx,
      code: match[1].trim(),
      pngFile: path.join(IMG_DIR, `diagram_${String(idx).padStart(3, '0')}.png`),
      fullMatch: match[0]
    });
    idx++;
  }
  console.log(`  Found ${diagrams.length} mermaid diagrams.`);

  const puppeteer = require('puppeteer-core');
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  // Strategy: load mermaid.js ONCE in a single page, then render each diagram
  // by replacing the innerHTML and calling mermaid.render()
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  // Load a page with mermaid.js pre-loaded
  const bootstrapHtml = `<!DOCTYPE html>
<html><head>
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<style>
  body { margin: 0; padding: 20px; background: #fff; font-family: 'Times New Roman', serif; }
  #container { display: inline-block; }
</style>
</head><body>
<div id="container"></div>
<script>
  mermaid.initialize({ startOnLoad: false, theme: 'default', flowchart: { htmlLabels: true } });
  window.renderDiagram = async function(code, id) {
    try {
      const { svg } = await mermaid.render('d' + id, code);
      document.getElementById('container').innerHTML = svg;
      return true;
    } catch(e) {
      document.getElementById('container').innerHTML = '<div style="color:red">Error: ' + e.message + '</div>';
      return false;
    }
  };
</script>
</body></html>`;

  await page.setContent(bootstrapHtml, { waitUntil: 'networkidle0', timeout: 30000 });
  // Wait for mermaid to be loaded
  await page.waitForFunction(() => typeof window.renderDiagram === 'function', { timeout: 20000 });
  console.log('  Mermaid.js loaded. Rendering diagrams...');

  let rendered = 0, failed = 0, skipped = 0;
  for (const d of diagrams) {
    try {
      // Skip if PNG already exists and is recent (> 5KB)
      if (fs.existsSync(d.pngFile) && fs.statSync(d.pngFile).size > 2000) {
        skipped++;
        continue;
      }

      const ok = await page.evaluate(async (code, id) => {
        return await window.renderDiagram(code, id);
      }, d.code, d.idx);

      if (ok) {
        await new Promise(r => setTimeout(r, 300));
        const el = await page.$('#container');
        if (el) {
          const box = await el.boundingBox();
          if (box && box.width > 10 && box.height > 10) {
            await el.screenshot({ path: d.pngFile, type: 'png' });
            rendered++;
          } else {
            failed++;
            console.log(`  WARN: diagram ${d.idx} has zero size`);
          }
        }
      } else {
        failed++;
        console.log(`  ERR: diagram ${d.idx} render returned false`);
      }
    } catch (err) {
      failed++;
      console.log(`  ERR diagram ${d.idx}: ${err.message.substring(0, 80)}`);
    }

    // Progress
    const total = rendered + failed + skipped;
    if (total % 10 === 0 || total === diagrams.length) {
      process.stdout.write(`  Progress: ${total}/${diagrams.length} (ok:${rendered} skip:${skipped} fail:${failed})\r`);
    }
  }
  await browser.close();
  console.log(`\n  Result: rendered=${rendered}, skipped=${skipped}, failed=${failed}`);

  // --- Step 4: Create temp MD for DOCX ---
  console.log('[4/6] Creating temp MD for DOCX...');
  let mdDocx = md;
  idx = 0;
  mdDocx = mdDocx.replace(/```mermaid\r?\n([\s\S]*?)```/g, () => {
    const pngFile = path.join(IMG_DIR, `diagram_${String(idx).padStart(3, '0')}.png`);
    idx++;
    if (fs.existsSync(pngFile) && fs.statSync(pngFile).size > 1000) {
      return `![Diagram ${idx}](${pngFile.replace(/\\/g, '/')})`;
    }
    return '*(Diagram not rendered)*';
  });
  fs.writeFileSync(TEMP_MD, mdDocx, 'utf8');
  console.log(`  Created ${TEMP_MD} (${Math.round(Buffer.byteLength(mdDocx) / 1024)} KB)`);

  // --- Step 5: DOCX ---
  console.log('[5/6] Converting to DOCX...');
  try {
    let cmd = `pandoc "${TEMP_MD}" -o "${OUT_DOCX}"`;
    if (fs.existsSync('reference_tnr.docx')) cmd += ' --reference-doc=reference_tnr.docx';
    execSync(cmd, { stdio: 'pipe', timeout: 120000 });
    const docxSize = Math.round(fs.statSync(OUT_DOCX).size / 1024);
    console.log(`  DOCX: ${OUT_DOCX} (${docxSize} KB)`);
  } catch (err) {
    console.log(`  DOCX ERROR: ${err.message.substring(0, 150)}`);
  }

  // --- Step 6: PDF via HTML pipeline ---
  console.log('[6/6] Converting to PDF...');
  try {
    // pandoc → HTML
    execSync(`pandoc "${SRC}" -o "${OUT_HTML}" --standalone --metadata title="MEKONG DE AN V2 MASTER"`, { stdio: 'pipe', timeout: 120000 });

    // inject mermaid.js
    if (fs.existsSync('_inject_mermaid.js')) {
      execSync(`node _inject_mermaid.js "${OUT_HTML}" "${OUT_HTML}"`, { stdio: 'pipe', timeout: 30000 });
    }

    const htmlSize = Math.round(fs.statSync(OUT_HTML).size / 1024);
    console.log(`  HTML: ${htmlSize} KB`);

    // HTML → PDF via puppeteer
    const browser2 = await puppeteer.launch({
      executablePath: CHROME,
      headless: 'new',
      args: ['--no-sandbox', '--disable-gpu']
    });
    const page2 = await browser2.newPage();

    await page2.goto(`file:///${path.resolve(OUT_HTML).replace(/\\/g, '/')}`, {
      waitUntil: 'networkidle0',
      timeout: 180000
    });
    // Extra wait for mermaid rendering
    await new Promise(r => setTimeout(r, 8000));

    await page2.pdf({
      path: OUT_PDF,
      format: 'A4',
      margin: { top: '2cm', bottom: '2cm', left: '1.5cm', right: '1.5cm' },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;font-family:Times New Roman;">Mekong Technology — Đề án Đầu tư KCNC TP.HCM</div>',
      footerTemplate: '<div style="font-size:8px;text-align:center;width:100%;font-family:Times New Roman;">Trang <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
      timeout: 180000
    });
    await browser2.close();

    const pdfSize = Math.round(fs.statSync(OUT_PDF).size / 1024);
    console.log(`  PDF: ${OUT_PDF} (${pdfSize} KB)`);
  } catch (err) {
    console.log(`  PDF ERROR: ${err.message.substring(0, 200)}`);
  }

  console.log('\n=== DONE ===');
}

main().catch(err => { console.error(err.message); process.exit(1); });
