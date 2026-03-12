const fs = require('fs');
const path = require('path');

const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const DIR = path.join(__dirname, 'mermaid_docx');
const diagrams = ['org_chart', 'iot_flow', 'cnc_flow', 'dc_flow'];

(async () => {
    let puppeteer;
    try { puppeteer = require('puppeteer-core'); }
    catch { puppeteer = require('C:/Users/Dell M4800/AppData/Roaming/npm/node_modules/@mermaid-js/mermaid-cli/node_modules/puppeteer-core'); }

    const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: CHROME,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });

    for (const name of diagrams) {
        const mmdFile = path.join(DIR, name + '.mmd');
        const pngFile = path.join(DIR, name + '.png');
        const mmdContent = fs.readFileSync(mmdFile, 'utf-8');

        const html = `<!DOCTYPE html>
<html><head>
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<style>body{margin:0;padding:20px;background:white;font-family:'Times New Roman',serif;}</style>
</head><body>
<pre class="mermaid">${mmdContent.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
<script>mermaid.initialize({startOnLoad:true,theme:'default',flowchart:{curve:'basis'}});</script>
</body></html>`;

        const page = await browser.newPage();
        await page.setViewport({ width: 1600, height: 1200, deviceScaleFactor: 2 });
        await page.setContent(html, { waitUntil: 'networkidle0', timeout: 30000 });

        try {
            await page.waitForFunction(() => {
                const svg = document.querySelector('svg');
                return svg && svg.getBBox().width > 0;
            }, { timeout: 15000 });
        } catch { console.log(name + ': mermaid timeout, proceeding'); }

        await new Promise(r => setTimeout(r, 1000));

        const el = await page.$('pre.mermaid');
        if (el) {
            await el.screenshot({ path: pngFile, type: 'png', omitBackground: false });
            const sz = (fs.statSync(pngFile).size / 1024).toFixed(0);
            console.log(name + '.png: ' + sz + ' KB');
        } else {
            console.log(name + ': FAILED - no element found');
        }
        await page.close();
    }
    await browser.close();
    console.log('Done.');
})();
