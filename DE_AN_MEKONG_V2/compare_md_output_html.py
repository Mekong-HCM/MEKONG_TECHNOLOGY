import re
from bs4 import BeautifulSoup
import json

def main():
    with open('MEKONG_DE_AN_V2_MASTER.md', 'r', encoding='utf-8') as f:
        md_content = f.read()

    try:
        with open('_master_output.html', 'r', encoding='utf-8') as f:
            html_content = f.read()
    except FileNotFoundError:
        print(json.dumps({"error": "_master_output.html not found"}))
        return

    md_headings = re.findall(r'^(#{1,6})\s+(.*)', md_content, re.MULTILINE)
    md_h_text = [h[1].strip() for h in md_headings]
    
    soup = BeautifulSoup(html_content, 'html.parser')
    html_headings = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
    html_h_text = [h.get_text().strip() for h in html_headings]
    
    missing_headings = [h for h in md_h_text if h not in html_h_text]
    
    # Check for unrendered mermaid or broken code blocks
    code_blocks = soup.find_all('code')
    mermaid_blocks = [c for c in code_blocks if 'mermaid' in c.get('class', []) or 'language-mermaid' in c.get('class', [])]
    
    # Check for img tags
    images = soup.find_all('img')
    
    report = {
        "md_headings_count": len(md_h_text),
        "html_headings_count": len(html_h_text),
        "missing_headings": missing_headings,
        "mermaid_blocks_found_in_html": len(mermaid_blocks),
        "images_count": len(images),
        "first_5_image_srcs": [img.get('src') for img in images][:5]
    }
    
    with open('comparison_output_report.json', 'w', encoding='utf-8') as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

if __name__ == '__main__':
    main()
