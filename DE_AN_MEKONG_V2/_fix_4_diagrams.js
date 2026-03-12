/**
 * _fix_4_diagrams.js — Re-render 4 failed diagrams (004, 046, 059, 071)
 * Timeline diagrams need mermaid v11+ — use gantt as fallback for DOCX PNG
 * Diagram 059 syntax was fixed in MASTER, re-extract and render
 */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const IMG_DIR = 'mermaid_master';
const SRC = 'MEKONG_DE_AN_V2_MASTER.md';

async function main() {
  // Re-extract all diagrams from updated MASTER
  const md = fs.readFileSync(SRC, 'utf8');
  const re = /```mermaid\r?\n([\s\S]*?)```/g;
  const diagrams = [];
  let m;
  let idx = 0;
  while ((m = re.exec(md)) !== null) {
    diagrams.push({ idx, code: m[1].trim() });
    idx++;
  }
  console.log(`Total diagrams: ${diagrams.length}`);

  const targets = [4, 46, 59, 71];
  
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  // Use mermaid v11 which has better timeline support
  const bootstrapHtml = `<!DOCTYPE html>
<html><head>
<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<style>
  body { margin: 0; padding: 20px; background: #fff; font-family: 'Times New Roman', serif; }
  #container { display: inline-block; }
</style>
</head><body>
<div id="container"></div>
<script>
  mermaid.initialize({ startOnLoad: false, theme: 'default' });
  window.renderDiagram = async function(code, id) {
    try {
      const { svg } = await mermaid.render('d' + id, code);
      document.getElementById('container').innerHTML = svg;
      return { ok: true };
    } catch(e) {
      return { ok: false, err: e.message };
    }
  };
</script>
</body></html>`;

  await page.setContent(bootstrapHtml, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForFunction(() => typeof window.renderDiagram === 'function', { timeout: 20000 });
  console.log('Mermaid v11 loaded.');

  for (const t of targets) {
    if (t >= diagrams.length) { console.log(`Diagram ${t} out of range`); continue; }
    const d = diagrams[t];
    const pngFile = path.join(IMG_DIR, `diagram_${String(t).padStart(3, '0')}.png`);
    
    // Update .mmd file
    fs.writeFileSync(path.join(IMG_DIR, `diagram_${String(t).padStart(3, '0')}.mmd`), d.code, 'utf8');

    console.log(`\nRendering diagram ${t}...`);
    console.log(`  Type: ${d.code.split('\n')[0]}`);
    
    const result = await page.evaluate(async (code, id) => {
      return await window.renderDiagram(code, id);
    }, d.code, t);

    if (result.ok) {
      await new Promise(r => setTimeout(r, 500));
      const el = await page.$('#container');
      if (el) {
        const box = await el.boundingBox();
        if (box && box.width > 10) {
          await el.screenshot({ path: pngFile, type: 'png' });
          const size = Math.round(fs.statSync(pngFile).size / 1024);
          console.log(`  OK: ${pngFile} (${size} KB)`);
        } else {
          console.log(`  FAIL: zero bounding box`);
        }
      }
    } else {
      console.log(`  FAIL: ${result.err}`);
      
      // For timeline diagrams that fail, try converting to a simpler format
      if (d.code.startsWith('timeline')) {
        console.log('  Trying fallback: render as styled HTML table...');
        // Create a simple visual representation
        const fallbackHtml = createTimelineImage(d.code);
        await page.setContent(fallbackHtml, { waitUntil: 'load', timeout: 10000 });
        await new Promise(r => setTimeout(r, 500));
        const body = await page.$('body');
        if (body) {
          await body.screenshot({ path: pngFile, type: 'png' });
          const size = Math.round(fs.statSync(pngFile).size / 1024);
          console.log(`  Fallback OK: ${pngFile} (${size} KB)`);
        }
        // Reload mermaid page for next diagram
        await page.setContent(bootstrapHtml, { waitUntil: 'networkidle0', timeout: 30000 });
        await page.waitForFunction(() => typeof window.renderDiagram === 'function', { timeout: 20000 });
      }
    }
  }

  await browser.close();
  console.log('\nDone! Now re-run _convert_master_v2.js step 4-6 to update DOCX/PDF.');
}

function createTimelineImage(code) {
  // Parse timeline into sections
  const lines = code.split('\n');
  let title = '';
  const sections = [];
  let currentSection = null;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('title ')) {
      title = trimmed.substring(6);
    } else if (trimmed.startsWith('section ')) {
      currentSection = { name: trimmed.substring(8), items: [] };
      sections.push(currentSection);
    } else if (currentSection && trimmed.includes(':')) {
      const parts = trimmed.split(':');
      currentSection.items.push({ time: parts[0].trim(), desc: parts.slice(1).join(':').trim() });
    } else if (currentSection && trimmed.length > 0 && !trimmed.startsWith('timeline')) {
      // continuation line
      if (currentSection.items.length > 0) {
        currentSection.items[currentSection.items.length - 1].desc += '<br/>' + trimmed;
      }
    }
  }

  const colors = ['#4a90d9', '#50b356', '#e8a838', '#d94a4a', '#9b59b6', '#1abc9c'];
  let html = `<!DOCTYPE html><html><head><style>
    body { margin: 0; padding: 20px; background: #fff; font-family: 'Times New Roman', serif; max-width: 1200px; }
    h2 { text-align: center; color: #333; font-size: 18px; margin-bottom: 20px; }
    .timeline { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; }
    .section { border: 2px solid #ddd; border-radius: 8px; padding: 12px; min-width: 200px; max-width: 280px; flex: 1; }
    .section-title { font-weight: bold; font-size: 13px; color: #fff; padding: 6px 10px; border-radius: 4px; margin-bottom: 8px; text-align: center; }
    .item { font-size: 11px; padding: 4px 0; border-bottom: 1px dotted #eee; color: #333; }
    .item-time { font-weight: bold; color: #555; }
  </style></head><body>
  <h2>${title}</h2>
  <div class="timeline">`;
  
  sections.forEach((s, i) => {
    const color = colors[i % colors.length];
    html += `<div class="section"><div class="section-title" style="background:${color}">${s.name}</div>`;
    s.items.forEach(item => {
      html += `<div class="item"><span class="item-time">${item.time}</span> ${item.desc}</div>`;
    });
    html += `</div>`;
  });
  
  html += `</div></body></html>`;
  return html;
}

main().catch(e => { console.error(e); process.exit(1); });
