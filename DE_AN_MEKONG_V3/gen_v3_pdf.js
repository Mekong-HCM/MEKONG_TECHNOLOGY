/**
 * Generate PDF from the HTML file produced by pandoc.
 * Usage: node gen_v3_pdf.js
 */
const fs = require('fs');
const path = require('path');

const DIR        = __dirname;
const TEMP_HTML  = path.join(DIR, '_v3_output.html');
const OUTPUT_PDF = path.join(DIR, 'MEKONG_DE_AN_V3_22M_MASTER.pdf');

(async function main() {
    let puppeteer;
    const paths = [
        'puppeteer',
        'puppeteer-core',
        'C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer',
        'C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer-core'
    ];
    for (const p of paths) {
        try { puppeteer = require(p); break; } catch {}
    }
    if (!puppeteer) { console.error('puppeteer not found!'); process.exit(1); }

    const chromeExe = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    ].find(p => fs.existsSync(p));

    const opts = { headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] };
    if (chromeExe) opts.executablePath = chromeExe;

    console.log('Launching browser...');
    const browser = await puppeteer.launch(opts);
    const page = await browser.newPage();

    const html = fs.readFileSync(TEMP_HTML, 'utf-8');
    console.log(`Loading HTML (${(html.length / 1024).toFixed(0)} KB)...`);

    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 600000 });

    // Wait for images
    await page.evaluate(async () => {
        await Promise.all(
            Array.from(document.images).map(img =>
                img.complete ? Promise.resolve() : new Promise(r => { img.onload = img.onerror = r; })
            )
        );
        // Remove conflicting @page counters from pandoc
        document.querySelectorAll('style').forEach(s => {
            s.textContent = s.textContent
                .replace(/@bottom-center\s*\{[^}]*\}/g, '')
                .replace(/@top-center\s*\{[^}]*\}/g, '');
        });
    });

    console.log('Generating PDF...');
    await page.pdf({
        path: OUTPUT_PDF,
        format: 'A4',
        margin: { top: '2.5cm', right: '2cm', bottom: '2.5cm', left: '2.5cm' },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;color:#666;margin-top:10px;font-family:serif;">MEKONG TECHNOLOGY — Đề án Đầu tư Công nghệ cao (KCNC TP.HCM)</div>',
        footerTemplate: '<div style="font-size:9px;text-align:center;width:100%;color:#666;margin-bottom:10px;font-family:serif;">Trang <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
        timeout: 300000
    });

    await browser.close();

    const sz = (fs.statSync(OUTPUT_PDF).size / 1024 / 1024).toFixed(1);
    console.log(`PDF saved: ${OUTPUT_PDF} (${sz} MB)`);
})();
