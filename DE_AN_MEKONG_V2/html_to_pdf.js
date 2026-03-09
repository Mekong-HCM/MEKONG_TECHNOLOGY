/**
 * Convert HTML to PDF using Puppeteer (from mermaid-cli)
 * Usage: node html_to_pdf.js <input.html> <output.pdf>
 */
// Use puppeteer from mermaid-cli installation
const puppeteer = require('C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer');
const fs = require('fs');
const path = require('path');

const inputHtml = process.argv[2];
const outputPdf = process.argv[3];

if (!inputHtml || !outputPdf) {
    console.error('Usage: node html_to_pdf.js <input.html> <output.pdf>');
    process.exit(1);
}

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Read the HTML file and load it
    const htmlContent = fs.readFileSync(inputHtml, 'utf-8');
    console.log(`Loading HTML (${(htmlContent.length / 1024).toFixed(0)} KB)...`);

    await page.setContent(htmlContent, { waitUntil: 'networkidle0', timeout: 60000 });

    // Wait for images to load
    await page.evaluate(async () => {
        const images = document.querySelectorAll('img');
        await Promise.all(Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        }));
    });

    // Remove any CSS @page counter rules to avoid double page numbers
    await page.evaluate(() => {
        const styles = document.querySelectorAll('style');
        styles.forEach(s => {
            s.textContent = s.textContent.replace(/@bottom-center\s*\{[^}]*\}/g, '');
            s.textContent = s.textContent.replace(/@top-center\s*\{[^}]*\}/g, '');
        });
    });

    console.log('Generating PDF...');
    await page.pdf({
        path: outputPdf,
        format: 'A4',
        margin: { top: '2cm', right: '2cm', bottom: '2cm', left: '2cm' },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div style="font-size: 8px; text-align: center; width: 100%; color: #666; margin-top: 10px;">MEKONG TECHNOLOGY — Đề án Công nghệ cao</div>',
        footerTemplate: '<div style="font-size: 9px; text-align: center; width: 100%; color: #666; margin-bottom: 10px;"><span class="pageNumber"></span></div>',
        timeout: 120000
    });

    await browser.close();
    const size = (fs.statSync(outputPdf).size / 1024 / 1024).toFixed(1);
    console.log(`PDF saved: ${outputPdf} (${size} MB)`);
})();
