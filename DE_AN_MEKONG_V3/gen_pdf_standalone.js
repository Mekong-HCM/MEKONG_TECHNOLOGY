/**
 * Standalone PDF generator for V3 MASTER
 * Uses puppeteer to render the pre-built HTML to PDF.
 * More robust: uses 'load' instead of 'networkidle0', better error handling.
 */
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname);
const TEMP_HTML = path.join(BASE, '_v3_output.html');
const OUTPUT_PDF = path.join(BASE, 'MEKONG_DE_AN_V3_22M_MASTER.pdf');

(async () => {
    console.log('=== Standalone PDF Generator ===\n');

    // Find puppeteer
    let puppeteer;
    const paths = [
        'puppeteer',
        'puppeteer-core',
        'C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer',
        'C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer-core'
    ];
    for (const p of paths) {
        try { puppeteer = require(p); console.log(`Puppeteer found: ${p}`); break; } catch {}
    }
    if (!puppeteer) { console.error('Puppeteer not found!'); process.exit(1); }

    // Check HTML exists
    if (!fs.existsSync(TEMP_HTML)) {
        console.error(`HTML not found: ${TEMP_HTML}`);
        process.exit(1);
    }

    const htmlSize = fs.statSync(TEMP_HTML).size;
    console.log(`HTML source: ${(htmlSize / 1024).toFixed(0)} KB`);

    // Find Chrome
    const chromeExe = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    ].find(p => fs.existsSync(p));
    console.log(`Chrome: ${chromeExe || 'bundled'}`);

    // Launch browser with more memory-friendly settings
    const opts = {
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-extensions',
            '--js-flags=--max-old-space-size=4096'
        ]
    };
    if (chromeExe) opts.executablePath = chromeExe;

    console.log('Launching browser...');
    const browser = await puppeteer.launch(opts);
    const page = await browser.newPage();

    // Read HTML and load via file URL instead of setContent (more reliable for large files)
    console.log('Loading HTML via file URL...');
    const fileUrl = 'file:///' + TEMP_HTML.replace(/\\/g, '/');
    await page.goto(fileUrl, { waitUntil: 'load', timeout: 300000 });

    console.log('Waiting for images to load...');
    await page.evaluate(async () => {
        await Promise.all(
            Array.from(document.images).map(img =>
                img.complete ? Promise.resolve() : new Promise(r => { img.onload = img.onerror = r; })
            )
        );
    });

    // Small delay to let rendering settle
    await new Promise(r => setTimeout(r, 3000));

    // Strip @page CSS rules that conflict with puppeteer
    await page.evaluate(() => {
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
        headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;color:#666;margin-top:10px;font-family:serif;">MEKONG TECHNOLOGY \u2014 \u0110\u1ec1 \u00e1n \u0110\u1ea7u t\u01b0 C\u00f4ng ngh\u1ec7 cao (KCNC TP.HCM)</div>',
        footerTemplate: '<div style="font-size:9px;text-align:center;width:100%;color:#666;margin-bottom:10px;font-family:serif;">Trang <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
        timeout: 600000
    });

    const pdfSize = fs.statSync(OUTPUT_PDF).size;
    console.log(`\n-> PDF: ${OUTPUT_PDF}`);
    console.log(`   Size: ${(pdfSize / 1048576).toFixed(1)} MB`);

    await browser.close();
    console.log('\nDone!');
})().catch(err => {
    console.error('FATAL ERROR:', err.message);
    console.error(err.stack);
    process.exit(1);
});
