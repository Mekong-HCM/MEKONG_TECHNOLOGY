const fs = require('fs');
let md = fs.readFileSync('MAU_1.4_HOAN_TAT.md', 'utf8');

let idx = 0;
const re = /```mermaid\r?\n([\s\S]*?)```/g;

md = md.replace(re, (match, code) => {
  idx++;
  if (code.includes('BOD')) return '![Sơ đồ tổ chức](mermaid_docx/org_chart.png)';
  if (code.includes('IoT Gateway')) return '![Quy trình IoT/Robot](mermaid_docx/iot_flow.png)';
  if (code.includes('CAD/CAM')) return '![Quy trình CNC](mermaid_docx/cnc_flow.png)';
  if (code.includes('GPU-as-a-Service')) return '![Quy trình Datacenter](mermaid_docx/dc_flow.png)';
  return match;
});

fs.writeFileSync('MAU_1.4_HOAN_TAT_docx_temp.md', md);
console.log(`Done. Replaced ${idx} mermaid blocks with PNG references.`);
