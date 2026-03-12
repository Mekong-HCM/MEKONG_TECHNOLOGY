const fs = require('fs');
const path = require('path');

const TEMP_HTML = path.join(__dirname, 'MAU_1.4_HOAN_TAT.html');
const OUTPUT_PDF = path.join(__dirname, 'MAU_1.4_HOAN_TAT.pdf');
const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
    let puppeteer;
    try {
        puppeteer = require('puppeteer-core');
    } catch {
        puppeteer = require('C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer-core');
    }
    console.log('Launching Chrome...');
    const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: CHROME,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });
    const page = await browser.newPage();
    const html = fs.readFileSync(TEMP_HTML, 'utf-8');
    console.log('Loading HTML (' + (html.length / 1024).toFixed(0) + ' KB)...');
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 60000 });
    // Wait for mermaid diagrams to render
    try {
        await page.waitForFunction(() => {
            const m = document.querySelectorAll('pre.mermaid');
            return m.length === 0 || m[0].querySelector('svg') !== null;
        }, { timeout: 15000 });
        console.log('Mermaid diagrams rendered.');
    } catch { console.log('Mermaid rendering timed out — proceeding.'); }
    console.log('Generating PDF...');
    await page.pdf({
        path: OUTPUT_PDF,
        format: 'A4',
        margin: { top: '2cm', right: '1.5cm', bottom: '2cm', left: '1.5cm' },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div style="font-size:8px; text-align:center; width:100%; color:#666; margin-top:10px;">MAU 1.4 — MEKONG TECHNOLOGY</div>',
        footerTemplate: '<div style="font-size:9px; text-align:center; width:100%; color:#666; margin-bottom:10px;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
        timeout: 120000
    });
    await browser.close();
    const sz = (fs.statSync(OUTPUT_PDF).size / 1024).toFixed(0);
    console.log('PDF created: ' + OUTPUT_PDF + ' (' + sz + ' KB)');
})();
