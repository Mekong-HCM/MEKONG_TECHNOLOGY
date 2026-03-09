/**
 * Convert the already-generated HTML to PDF using Puppeteer.
 * Separate script to avoid any file lock issues.
 */
const fs = require('fs');
const path = require('path');

const HTML_FILE = path.join(__dirname, '_master_output.html');
const OUTPUT_PDF = path.join(__dirname, 'MEKONG_MASTER_FINAL.pdf');

const puppeteer = require('C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer');

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    
    const html = fs.readFileSync(HTML_FILE, 'utf-8');
    console.log(`Loading HTML (${(html.length/1024).toFixed(0)} KB)...`);
    
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 120000 });
    
    // Strip any @page counter rules from CSS
    await page.evaluate(() => {
        document.querySelectorAll('style').forEach(s => {
            s.textContent = s.textContent.replace(/@bottom-center\s*\{[^}]*\}/g, '');
            s.textContent = s.textContent.replace(/@top-center\s*\{[^}]*\}/g, '');
        });
    });
    
    console.log('Generating PDF...');
    await page.pdf({
        path: OUTPUT_PDF,
        format: 'A4',
        margin: { top: '2cm', right: '2cm', bottom: '2cm', left: '2cm' },
        printBackground: true,
        displayHeaderFooter: true,
        headerTemplate: '<div style="font-size:8px;text-align:center;width:100%;color:#666;margin-top:10px;">MEKONG TECHNOLOGY — De an Cong nghe cao</div>',
        footerTemplate: '<div style="font-size:9px;text-align:center;width:100%;color:#666;margin-bottom:10px;"><span class="pageNumber"></span></div>',
        timeout: 180000
    });
    
    await browser.close();
    
    const sz = (fs.statSync(OUTPUT_PDF).size / 1024 / 1024).toFixed(1);
    console.log(`Done! PDF: ${OUTPUT_PDF} (${sz} MB)`);
    
    // Rename to final name
    const finalPath = path.join(__dirname, 'MEKONG_DE_AN_V2_MASTER.pdf');
    try { fs.unlinkSync(finalPath); } catch {}
    try {
        fs.renameSync(OUTPUT_PDF, finalPath);
        console.log(`Renamed to: ${finalPath}`);
    } catch (e) {
        console.log(`Could not rename (old file locked). PDF is at: ${OUTPUT_PDF}`);
    }
})();
