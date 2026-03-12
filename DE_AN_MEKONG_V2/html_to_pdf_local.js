/**
 * Convert _master_output.html to PDF using local Chrome via puppeteer-core
 */
const fs = require('fs');
const path = require('path');

const TEMP_HTML = path.join(__dirname, '_master_output.html');
const OUTPUT_PDF = path.join(__dirname, 'MEKONG_DE_AN_V2_MASTER.pdf');
const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
    let puppeteer;
    try {
        puppeteer = require('puppeteer-core');
    } catch {
        // fallback: use puppeteer-core from mermaid-cli
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
    console.log(`Loading HTML (${(html.length / 1024).toFixed(0)} KB)...`);

    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 120000 });
    
    // Wait for images
    await page.evaluate(() => {
        return Promise.all(
            Array.from(document.images)
                .filter(img => !img.complete)
                .map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))
        );
    });

    console.log('Generating PDF...');
    await page.pdf({
        path: OUTPUT_PDF,
        format: 'A4',
        margin: { top: '2cm', right: '2cm', bottom: '2cm', left: '2cm' },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;color:#666;margin-top:10px;">MEKONG TECHNOLOGY — De an Cong nghe cao</div>',
        footerTemplate: '<div style="font-size:9px;text-align:center;width:100%;color:#666;margin-bottom:10px;"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
        timeout: 300000
    });

    await browser.close();
    const sz = (fs.statSync(OUTPUT_PDF).size / 1024 / 1024).toFixed(1);
    console.log(`PDF: ${OUTPUT_PDF} (${sz} MB)`);
})();
