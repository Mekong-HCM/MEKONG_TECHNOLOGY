/**
 * _fix_remaining.js — Re-render diagrams 59 and 71
 * Also re-check 46 fallback
 */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const IMG_DIR = 'mermaid_master';
const SRC = 'MEKONG_DE_AN_V2_MASTER.md';

async function main() {
  const md = fs.readFileSync(SRC, 'utf8');
  const re = /```mermaid\r?\n([\s\S]*?)```/g;
  const diagrams = [];
  let m, idx = 0;
  while ((m = re.exec(md)) !== null) {
    diagrams.push({ idx, code: m[1].trim() });
    idx++;
  }
  console.log(`Total diagrams: ${diagrams.length}`);

  // Only process these
  const targets = [59, 71];
  
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // --- Diagram 59: graph TD (syntax was fixed) ---
  console.log('\n--- Diagram 59 (graph TD, syntax fixed) ---');
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 900 });
    const bootstrapHtml = `<!DOCTYPE html>
<html><head>
<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<style>body{margin:0;padding:20px;background:#fff;font-family:'Times New Roman',serif;}#container{display:inline-block;}</style>
</head><body><div id="container"></div>
<script>
mermaid.initialize({startOnLoad:false,theme:'default'});
window.renderDiagram=async function(code,id){
  try{const{svg}=await mermaid.render('d'+id,code);document.getElementById('container').innerHTML=svg;return{ok:true};}
  catch(e){return{ok:false,err:e.message};}
};
</script></body></html>`;
    
    await page.setContent(bootstrapHtml, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.waitForFunction(() => typeof window.renderDiagram === 'function', { timeout: 20000 });
    
    const d = diagrams[59];
    const pngFile = path.join(IMG_DIR, 'diagram_059.png');
    fs.writeFileSync(path.join(IMG_DIR, 'diagram_059.mmd'), d.code, 'utf8');
    console.log(`  Code starts: ${d.code.split('\n')[0]}`);
    
    const result = await page.evaluate(async (code, id) => {
      return await window.renderDiagram(code, id);
    }, d.code, 59);
    
    if (result.ok) {
      await new Promise(r => setTimeout(r, 500));
      const el = await page.$('#container');
      if (el) {
        await el.screenshot({ path: pngFile, type: 'png' });
        console.log(`  OK: ${pngFile} (${Math.round(fs.statSync(pngFile).size/1024)} KB)`);
      }
    } else {
      console.log(`  FAIL: ${result.err}`);
    }
    await page.close();
  }

  // --- Diagram 71: timeline (use fallback HTML) ---
  console.log('\n--- Diagram 71 (timeline → fallback) ---');
  {
    const d = diagrams[71];
    const pngFile = path.join(IMG_DIR, 'diagram_071.png');
    fs.writeFileSync(path.join(IMG_DIR, 'diagram_071.mmd'), d.code, 'utf8');
    console.log(`  Code starts: ${d.code.split('\n')[0]}`);
    
    // First try mermaid v11
    const page2 = await browser.newPage();
    await page2.setViewport({ width: 1400, height: 900 });
    
    const bootstrapHtml2 = `<!DOCTYPE html>
<html><head>
<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<style>body{margin:0;padding:20px;background:#fff;}#container{display:inline-block;}</style>
</head><body><div id="container"></div>
<script>
mermaid.initialize({startOnLoad:false,theme:'default'});
window.renderDiagram=async function(code,id){
  try{const{svg}=await mermaid.render('d'+id,code);document.getElementById('container').innerHTML=svg;return{ok:true};}
  catch(e){return{ok:false,err:e.message};}
};
</script></body></html>`;

    await page2.setContent(bootstrapHtml2, { waitUntil: 'networkidle0', timeout: 30000 });
    await page2.waitForFunction(() => typeof window.renderDiagram === 'function', { timeout: 20000 });
    
    const result = await page2.evaluate(async (code, id) => {
      return await window.renderDiagram(code, id);
    }, d.code, 71);
    
    if (result.ok) {
      await new Promise(r => setTimeout(r, 500));
      const el = await page2.$('#container');
      if (el) {
        await el.screenshot({ path: pngFile, type: 'png' });
        console.log(`  OK (mermaid): ${pngFile} (${Math.round(fs.statSync(pngFile).size/1024)} KB)`);
      }
    } else {
      console.log(`  Mermaid failed: ${result.err}`);
      console.log('  Using fallback HTML...');
      await page2.close();
      
      // Fallback: render as styled HTML
      const page3 = await browser.newPage();
      await page3.setViewport({ width: 1400, height: 600 });
      const fallbackHtml = createTimelineImage(d.code);
      await page3.setContent(fallbackHtml, { waitUntil: 'load', timeout: 15000 });
      await new Promise(r => setTimeout(r, 1000));
      const body = await page3.$('body');
      if (body) {
        await body.screenshot({ path: pngFile, type: 'png' });
        console.log(`  Fallback OK: ${pngFile} (${Math.round(fs.statSync(pngFile).size/1024)} KB)`);
      }
      await page3.close();
    }
  }

  await browser.close();

  // Verify all 4 diagrams
  console.log('\n--- Verification ---');
  for (const t of [4, 46, 59, 71]) {
    const f = path.join(IMG_DIR, `diagram_${String(t).padStart(3,'0')}.png`);
    if (fs.existsSync(f)) {
      console.log(`  diagram_${String(t).padStart(3,'0')}.png: ${Math.round(fs.statSync(f).size/1024)} KB ✓`);
    } else {
      console.log(`  diagram_${String(t).padStart(3,'0')}.png: MISSING ✗`);
    }
  }
  console.log('\nDone!');
}

function createTimelineImage(code) {
  const lines = code.split('\n');
  let title = '';
  const sections = [];
  let currentSection = null;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('title ')) title = trimmed.substring(6);
    else if (trimmed.startsWith('section ')) {
      currentSection = { name: trimmed.substring(8), items: [] };
      sections.push(currentSection);
    } else if (currentSection && trimmed.includes(':')) {
      const parts = trimmed.split(':');
      currentSection.items.push({ time: parts[0].trim(), desc: parts.slice(1).join(':').trim() });
    } else if (currentSection && trimmed.length > 0 && !trimmed.startsWith('timeline')) {
      if (currentSection.items.length > 0) {
        currentSection.items[currentSection.items.length - 1].desc += '<br/>' + trimmed;
      }
    }
  }
  const colors = ['#4a90d9','#50b356','#e8a838','#d94a4a','#9b59b6','#1abc9c'];
  let html = `<!DOCTYPE html><html><head><style>
    body{margin:0;padding:20px;background:#fff;font-family:'Times New Roman',serif;max-width:1200px;}
    h2{text-align:center;color:#333;font-size:18px;margin-bottom:20px;}
    .tl{display:flex;flex-wrap:wrap;gap:15px;justify-content:center;}
    .sec{border:2px solid #ddd;border-radius:8px;padding:12px;min-width:200px;max-width:280px;flex:1;}
    .stitle{font-weight:bold;font-size:13px;color:#fff;padding:6px 10px;border-radius:4px;margin-bottom:8px;text-align:center;}
    .item{font-size:11px;padding:4px 0;border-bottom:1px dotted #eee;color:#333;}
    .itime{font-weight:bold;color:#555;}
  </style></head><body><h2>${title}</h2><div class="tl">`;
  sections.forEach((s,i) => {
    html += `<div class="sec"><div class="stitle" style="background:${colors[i%colors.length]}">${s.name}</div>`;
    s.items.forEach(item => { html += `<div class="item"><span class="itime">${item.time}</span> ${item.desc}</div>`; });
    html += `</div>`;
  });
  html += `</div></body></html>`;
  return html;
}

main().catch(e => { console.error(e.message); process.exit(1); });
