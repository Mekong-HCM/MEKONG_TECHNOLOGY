/**
 * _convert_master_pdf.js — HTML → PDF for MASTER file
 */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const HTML_FILE = 'MEKONG_DE_AN_V2_MASTER.html';
const PDF_FILE = 'MEKONG_DE_AN_V2_MASTER.pdf';

async function main() {
  console.log('Launching Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--lang=vi',
      '--font-render-hinting=none',
      '--disable-features=RendererCodeIntegrity'
    ]
  });

  const page = await browser.newPage();
  const htmlPath = path.resolve(HTML_FILE).replace(/\\/g, '/');
  const htmlSize = Math.round(fs.statSync(HTML_FILE).size / 1024);
  console.log(`Loading HTML: ${htmlSize} KB`);

  await page.goto(`file:///${htmlPath}`, {
    waitUntil: 'networkidle0',
    timeout: 180000
  });

  // Extra wait for 85 mermaid diagrams to render
  console.log('Waiting for mermaid render (10s)...');
  await new Promise(r => setTimeout(r, 10000));

  // Force Vietnamese font rendering
  await page.evaluate(() => {
    document.documentElement.setAttribute('lang', 'vi');
    const style = document.createElement('style');
    style.textContent = `
      * { font-family: 'Times New Roman', 'Times', serif !important; }
      body, p, td, th, li, span, div, h1, h2, h3, h4, h5, h6 {
        font-family: 'Times New Roman', 'Times', serif !important;
        -webkit-font-smoothing: antialiased;
      }
    `;
    document.head.appendChild(style);
  });
  // Short wait for styles to apply
  await new Promise(r => setTimeout(r, 2000));

  console.log('Generating PDF...');
  await page.pdf({
    path: PDF_FILE,
    format: 'A4',
    margin: { top: '2cm', bottom: '2cm', left: '1.5cm', right: '1.5cm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;font-family:Times New Roman;">Mekong Technology — Đề án Đầu tư KCNC TP.HCM</div>',
    footerTemplate: '<div style="font-size:8px;text-align:center;width:100%;font-family:Times New Roman;">Trang <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    timeout: 180000
  });

  await browser.close();
  const pdfSize = Math.round(fs.statSync(PDF_FILE).size / 1024);
  console.log(`PDF: ${PDF_FILE} (${pdfSize} KB)`);
}

main().catch(e => { console.error(e.message); process.exit(1); });
