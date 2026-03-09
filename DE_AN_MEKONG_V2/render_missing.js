/**
 * Render missing Mermaid diagrams (skip already-rendered ones).
 * Uses child_process.spawn to avoid hanging on Windows.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DIR = path.join(__dirname, 'mermaid_master');
const cfgPath = path.join(__dirname, '_mmdc_cfg.json');
const pupPath = path.join(__dirname, '_pup_cfg.json');

fs.writeFileSync(cfgPath, JSON.stringify({ theme: "default", flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" } }));
fs.writeFileSync(pupPath, JSON.stringify({ args: ["--no-sandbox", "--disable-setuid-sandbox"] }));

// Find all .mmd files missing .png
const mmds = fs.readdirSync(DIR).filter(f => f.endsWith('.mmd')).sort();
const missing = mmds.filter(f => {
    const png = path.join(DIR, f.replace('.mmd', '.png'));
    return !fs.existsSync(png) || fs.statSync(png).size < 100;
});

console.log(`Total .mmd: ${mmds.length}, Missing PNGs: ${missing.length}`);

let ok = 0, fail = 0;
for (let i = 0; i < missing.length; i++) {
    const f = missing[i];
    const mmd = path.join(DIR, f);
    const png = path.join(DIR, f.replace('.mmd', '.png'));
    process.stdout.write(`  [${i+1}/${missing.length}] ${f} ...`);
    
    // Try with full options first
    let success = false;
    for (let attempt = 0; attempt < 2; attempt++) {
        try {
            let cmd = `mmdc -i "${mmd}" -o "${png}" -b white`;
            if (attempt === 0) cmd += ` -w 1200 -c "${cfgPath}" -p "${pupPath}"`;
            execSync(cmd, { 
                timeout: 90000, 
                stdio: 'pipe', 
                windowsHide: true
            });
            if (fs.existsSync(png) && fs.statSync(png).size > 100) {
                success = true;
                break;
            }
        } catch (e) {
            // wait before retry using cross-platform approach
            const end = Date.now() + 2000;
            while (Date.now() < end) {}
        }
    }
    
    if (success) { ok++; process.stdout.write(' OK\n'); }
    else { fail++; process.stdout.write(' FAIL\n'); }
}

console.log(`\nDone: ${ok} OK, ${fail} failed out of ${missing.length}`);

// Cleanup
try { fs.unlinkSync(cfgPath); } catch {}
try { fs.unlinkSync(pupPath); } catch {}
