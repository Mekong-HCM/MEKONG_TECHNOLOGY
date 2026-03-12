/**
 * Post-process pandoc HTML to inject mermaid.js CDN and fix mermaid code blocks.
 * Usage: node _inject_mermaid.js input.html output.html
 */
const fs = require('fs');
const path = require('path');

const INPUT  = path.join(__dirname, process.argv[2] || 'MAU_1.4_HOAN_TAT_raw.html');
const OUTPUT = path.join(__dirname, process.argv[3] || 'MAU_1.4_HOAN_TAT.html');

let html = fs.readFileSync(INPUT, 'utf-8');

// 0) Fix lang attribute for Vietnamese
html = html.replace('lang="" xml:lang=""', 'lang="vi" xml:lang="vi"');

// 1) Fix mermaid blocks: pandoc outputs <pre class="mermaid"><code>...</code></pre>
//    Mermaid.js needs <pre class="mermaid">...</pre> (no <code> wrapper)
html = html.replace(/<pre class="mermaid"><code>([\s\S]*?)<\/code><\/pre>/g,
    (_, content) => `<pre class="mermaid">${content}</pre>`
);

// 2) Inject professional CSS styling
const css = `
<style>
  * { font-family: 'Times New Roman', 'Times', 'Noto Serif', serif !important; }
  body { font-family: 'Times New Roman', 'Times', 'Noto Serif', serif; line-height: 1.7; color: #222; max-width: 210mm; margin: 0 auto; padding: 2cm 1.5cm; font-size: 13px; }
  h1 { font-size: 22px; color: #1a365d; border-bottom: 3px solid #2b6cb0; padding-bottom: 8px; margin-top: 2em; }
  h2 { font-size: 18px; color: #2b6cb0; margin-top: 1.8em; }
  h3 { font-size: 15px; color: #2c5282; margin-top: 1.4em; }
  h4 { font-size: 14px; color: #2c5282; margin-top: 1.2em; }
  table { border-collapse: collapse; width: 100%; margin: 1em 0; font-size: 12px; page-break-inside: avoid; }
  th { background: #2b6cb0; color: white; font-weight: 600; padding: 8px 10px; text-align: left; border: 1px solid #2b6cb0; }
  td { padding: 6px 10px; border: 1px solid #cbd5e0; }
  tr:nth-child(even) { background: #f7fafc; }
  pre.mermaid { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 1em; text-align: center; page-break-inside: avoid; }
  ul, ol { margin: 0.5em 0; padding-left: 2em; }
  li { margin-bottom: 0.3em; }
  code { background: #edf2f7; padding: 2px 4px; border-radius: 3px; font-size: 12px; }
  blockquote { border-left: 4px solid #2b6cb0; margin: 1em 0; padding: 0.5em 1em; background: #ebf8ff; }
  .page-break { page-break-before: always; }
  @media print { body { margin: 0; padding: 0; } }
</style>
`;

// 3) Inject mermaid.js CDN + init script before </body>
const mermaidScript = `
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({ startOnLoad: true, theme: 'base', themeVariables: {
    primaryColor: '#e3f2fd', primaryBorderColor: '#2b6cb0', primaryTextColor: '#1a365d',
    lineColor: '#2b6cb0', secondaryColor: '#f7fafc', tertiaryColor: '#ebf8ff'
  }});
</script>
`;

// Inject CSS after <head> or at start
html = html.replace('</head>', css + '</head>');

// Inject mermaid.js before </body>
html = html.replace('</body>', mermaidScript + '</body>');

fs.writeFileSync(OUTPUT, html, 'utf-8');
console.log('Injected mermaid.js + CSS into ' + OUTPUT + ' (' + (html.length / 1024).toFixed(0) + ' KB)');
