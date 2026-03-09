"""
Convert MEKONG_DE_AN_V2.md to PDF and DOCX with full Mermaid diagram rendering.
Pipeline:
  1. Extract all mermaid code blocks
  2. Render each to PNG via mmdc (mermaid-cli)
  3. Create modified markdown with image references
  4. Use pandoc to produce DOCX
  5. Use pandoc + weasyprint to produce PDF
"""
import os
import re
import subprocess
import sys
import tempfile
import shutil
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
INPUT_FILE = os.path.join(SCRIPT_DIR, "MEKONG_DE_AN_V2.md")
OUTPUT_DOCX = os.path.join(SCRIPT_DIR, "MEKONG_DE_AN_V2.docx")
OUTPUT_PDF = os.path.join(SCRIPT_DIR, "MEKONG_DE_AN_V2.pdf")
MERMAID_DIR = os.path.join(SCRIPT_DIR, "mermaid_images")
TEMP_MD = os.path.join(SCRIPT_DIR, "_temp_converted.md")

# Mermaid config for better rendering
MERMAID_CONFIG = {
    "theme": "default",
    "themeVariables": {
        "fontSize": "14px"
    },
    "flowchart": {
        "useMaxWidth": True,
        "htmlLabels": True,
        "curve": "basis"
    },
    "sequence": {
        "useMaxWidth": True
    },
    "gantt": {
        "useMaxWidth": True
    }
}

# Puppeteer config for mmdc
PUPPETEER_CONFIG = {
    "args": ["--no-sandbox", "--disable-setuid-sandbox"]
}


def ensure_dir(path):
    os.makedirs(path, exist_ok=True)


def extract_mermaid_blocks(content):
    """Extract all mermaid code blocks with their positions."""
    pattern = re.compile(r'```mermaid\s*\n(.*?)```', re.DOTALL)
    blocks = []
    for i, match in enumerate(pattern.finditer(content)):
        blocks.append({
            'index': i,
            'start': match.start(),
            'end': match.end(),
            'code': match.group(1).strip(),
            'full_match': match.group(0)
        })
    return blocks


def sanitize_mermaid(code):
    """Fix common mermaid syntax issues."""
    # Remove C-style comments that mermaid doesn't support
    code = re.sub(r'/\*.*?\*/', '', code, flags=re.DOTALL)
    # Remove lines that are just comments
    lines = code.split('\n')
    cleaned = []
    for line in lines:
        stripped = line.strip()
        # Skip empty lines at start
        if not cleaned and not stripped:
            continue
        cleaned.append(line)
    return '\n'.join(cleaned)


def render_mermaid_block(code, output_path, index, config_path):
    """Render a single mermaid block to PNG."""
    sanitized = sanitize_mermaid(code)

    # Write mermaid code to temp file
    mmd_file = output_path.replace('.png', '.mmd')
    with open(mmd_file, 'w', encoding='utf-8') as f:
        f.write(sanitized)

    try:
        result = subprocess.run(
            [
                'mmdc',
                '-i', mmd_file,
                '-o', output_path,
                '-b', 'white',
                '-w', '1200',
                '-c', config_path,
                '-p', os.path.join(SCRIPT_DIR, '_puppeteer.json'),
            ],
            capture_output=True,
            text=True,
            timeout=120,
            cwd=SCRIPT_DIR,
            shell=True
        )
        if result.returncode != 0:
            print(f"  [WARN] mmdc failed for block {index}: {result.stderr[:300]}")
            # Try with simpler args
            result2 = subprocess.run(
                ['mmdc', '-i', mmd_file, '-o', output_path, '-b', 'white'],
                capture_output=True, text=True, timeout=120, cwd=SCRIPT_DIR, shell=True
            )
            if result2.returncode != 0:
                print(f"  [ERROR] Block {index} failed: {result2.stderr[:300]}")
                return False
        return os.path.exists(output_path)
    except subprocess.TimeoutExpired:
        print(f"  [TIMEOUT] Block {index}")
        return False
    except Exception as e:
        print(f"  [ERROR] Block {index}: {e}")
        return False
    finally:
        # keep .mmd for debugging
        pass


def create_placeholder_image(output_path, text):
    """Create a simple placeholder when rendering fails."""
    # We'll just skip failed diagrams with a note
    return False


def replace_mermaid_with_images(content, blocks, mermaid_dir):
    """Replace mermaid code blocks with image references."""
    # Process in reverse order to preserve positions
    result = content
    for block in reversed(blocks):
        img_path = os.path.join(mermaid_dir, f"diagram_{block['index']:03d}.png")
        rel_path = f"mermaid_images/diagram_{block['index']:03d}.png"

        if os.path.exists(img_path):
            replacement = f'\n![Diagram {block["index"] + 1}]({rel_path})\n'
        else:
            # Keep as code block but change language to text
            replacement = f'\n```\n[Diagram {block["index"] + 1} - Mermaid chart]\n{block["code"][:100]}...\n```\n'

        result = result[:block['start']] + replacement + result[block['end']:]

    return result


def create_pdf_css():
    """Create CSS for PDF rendering with weasyprint."""
    css_path = os.path.join(SCRIPT_DIR, "_pdf_style.css")
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write("""
@page {
    size: A4;
    margin: 2cm 2.5cm;
    @top-center {
        content: "MEKONG TECHNOLOGY — Đề án Công nghệ cao";
        font-size: 8pt;
        color: #666;
    }
    @bottom-center {
        content: counter(page);
        font-size: 9pt;
    }
}

body {
    font-family: "Segoe UI", "Noto Sans", "Arial Unicode MS", sans-serif;
    font-size: 11pt;
    line-height: 1.6;
    color: #1a1a1a;
}

h1 {
    font-size: 20pt;
    color: #1a365d;
    border-bottom: 2px solid #2b6cb0;
    padding-bottom: 6pt;
    page-break-after: avoid;
    margin-top: 24pt;
}

h2 {
    font-size: 16pt;
    color: #2b6cb0;
    border-bottom: 1px solid #bee3f8;
    padding-bottom: 4pt;
    page-break-after: avoid;
    margin-top: 20pt;
}

h3 {
    font-size: 13pt;
    color: #2c5282;
    page-break-after: avoid;
    margin-top: 16pt;
}

h4, h5, h6 {
    color: #2d3748;
    page-break-after: avoid;
}

table {
    border-collapse: collapse;
    width: 100%;
    margin: 12pt 0;
    font-size: 9.5pt;
    page-break-inside: avoid;
}

th {
    background-color: #2b6cb0;
    color: white;
    font-weight: bold;
    padding: 6pt 8pt;
    text-align: left;
    border: 1px solid #2b6cb0;
}

td {
    padding: 5pt 8pt;
    border: 1px solid #cbd5e0;
    vertical-align: top;
}

tr:nth-child(even) {
    background-color: #f7fafc;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 12pt auto;
    page-break-inside: avoid;
}

blockquote {
    border-left: 3px solid #2b6cb0;
    padding-left: 12pt;
    margin-left: 0;
    color: #4a5568;
    font-style: italic;
    background-color: #ebf8ff;
    padding: 8pt 12pt;
}

code {
    background-color: #edf2f7;
    padding: 1pt 4pt;
    border-radius: 3pt;
    font-size: 9.5pt;
    font-family: "Consolas", "Courier New", monospace;
}

pre {
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    padding: 10pt;
    border-radius: 4pt;
    overflow-x: auto;
    font-size: 9pt;
    page-break-inside: avoid;
}

pre code {
    background-color: transparent;
    padding: 0;
}

strong {
    color: #1a365d;
}

hr {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 16pt 0;
}

/* Title page styling */
div[style*="text-align: center"] {
    page-break-after: always;
}

/* Avoid orphans/widows */
p {
    orphans: 3;
    widows: 3;
}
""")
    return css_path


def create_docx_reference():
    """Create a basic pandoc reference doc command (pandoc will use defaults)."""
    pass


def run_pandoc_docx(input_md, output_docx):
    """Convert markdown to DOCX using pandoc."""
    print("\n[4/5] Converting to DOCX...")
    cmd = [
        'pandoc', input_md,
        '-o', output_docx,
        '--from', 'markdown+pipe_tables+raw_html+fenced_code_blocks+backtick_code_blocks+header_attributes+implicit_header_references+auto_identifiers+strikeout',
        '--to', 'docx',
        '--toc',
        '--toc-depth=3',
        '--standalone',
        '--resource-path', SCRIPT_DIR,
        '--wrap=none',
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=120, cwd=SCRIPT_DIR)
    if result.returncode != 0:
        print(f"  [ERROR] pandoc DOCX: {result.stderr[:500]}")
        return False
    print(f"  -> DOCX saved: {output_docx}")
    return True


def run_pandoc_pdf(input_md, output_pdf, css_path):
    """Convert markdown to PDF using pandoc + weasyprint."""
    print("\n[5/5] Converting to PDF (via weasyprint)...")

    # First generate HTML, then use weasyprint
    html_temp = os.path.join(SCRIPT_DIR, "_temp_output.html")
    cmd_html = [
        'pandoc', input_md,
        '-o', html_temp,
        '--from', 'markdown+pipe_tables+raw_html+fenced_code_blocks+backtick_code_blocks',
        '--to', 'html5',
        '--toc',
        '--toc-depth=3',
        '--standalone',
        '--metadata', 'title=MEKONG TECHNOLOGY - De an Cong nghe cao',
        '--css', css_path,
        '--self-contained',
        '--resource-path', SCRIPT_DIR,
        '--wrap=none',
    ]

    result = subprocess.run(cmd_html, capture_output=True, text=True, timeout=120, cwd=SCRIPT_DIR)
    if result.returncode != 0:
        print(f"  [ERROR] pandoc HTML: {result.stderr[:500]}")
        # Try direct PDF via weasyprint engine
        cmd_pdf = [
            'pandoc', input_md,
            '-o', output_pdf,
            '--from', 'markdown+pipe_tables+raw_html+fenced_code_blocks',
            '--pdf-engine=weasyprint',
            '--css', css_path,
            '--toc',
            '--resource-path', SCRIPT_DIR,
        ]
        result2 = subprocess.run(cmd_pdf, capture_output=True, text=True, timeout=300, cwd=SCRIPT_DIR)
        if result2.returncode != 0:
            print(f"  [ERROR] pandoc PDF direct: {result2.stderr[:500]}")
            return False
        print(f"  -> PDF saved: {output_pdf}")
        return True

    # Convert HTML to PDF using weasyprint
    print("  Converting HTML to PDF with weasyprint...")
    try:
        result3 = subprocess.run(
            [sys.executable, '-m', 'weasyprint', html_temp, output_pdf],
            capture_output=True, text=True, timeout=300, cwd=SCRIPT_DIR
        )
        if result3.returncode != 0:
            print(f"  [WARN] weasyprint module failed: {result3.stderr[:300]}")
            # Try as command
            result4 = subprocess.run(
                ['weasyprint', html_temp, output_pdf],
                capture_output=True, text=True, timeout=300, cwd=SCRIPT_DIR, shell=True
            )
            if result4.returncode != 0:
                print(f"  [ERROR] weasyprint cmd failed: {result4.stderr[:300]}")
                # Final fallback: pandoc direct
                cmd_pdf = [
                    'pandoc', input_md, '-o', output_pdf,
                    '--from', 'markdown+pipe_tables+raw_html+fenced_code_blocks',
                    '--pdf-engine=weasyprint',
                    '--css', css_path,
                    '--resource-path', SCRIPT_DIR,
                ]
                result5 = subprocess.run(cmd_pdf, capture_output=True, text=True, timeout=300, cwd=SCRIPT_DIR)
                if result5.returncode != 0:
                    print(f"  [ERROR] All PDF methods failed. Last error: {result5.stderr[:300]}")
                    return False
    except Exception as e:
        print(f"  [ERROR] weasyprint: {e}")
        return False

    # Cleanup temp HTML
    try:
        os.remove(html_temp)
    except:
        pass

    if os.path.exists(output_pdf):
        print(f"  -> PDF saved: {output_pdf}")
        return True
    return False


def main():
    print("=" * 60)
    print("MEKONG DE AN V2 — Markdown to PDF & DOCX Converter")
    print("=" * 60)

    # Read input
    print(f"\n[1/5] Reading {INPUT_FILE}...")
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    print(f"  File size: {len(content):,} chars, ~{content.count(chr(10)):,} lines")

    # Extract mermaid blocks
    blocks = extract_mermaid_blocks(content)
    print(f"  Found {len(blocks)} Mermaid diagram blocks")

    # Render mermaid diagrams
    print(f"\n[2/5] Rendering {len(blocks)} Mermaid diagrams to PNG...")
    ensure_dir(MERMAID_DIR)

    # Write config files
    config_path = os.path.join(SCRIPT_DIR, "_mermaid_config.json")
    with open(config_path, 'w', encoding='utf-8') as f:
        json.dump(MERMAID_CONFIG, f)

    puppet_path = os.path.join(SCRIPT_DIR, "_puppeteer.json")
    with open(puppet_path, 'w', encoding='utf-8') as f:
        json.dump(PUPPETEER_CONFIG, f)

    success_count = 0
    fail_count = 0
    for block in blocks:
        idx = block['index']
        output_path = os.path.join(MERMAID_DIR, f"diagram_{idx:03d}.png")

        # Skip if already rendered
        if os.path.exists(output_path) and os.path.getsize(output_path) > 100:
            print(f"  [{idx + 1}/{len(blocks)}] Already rendered, skipping")
            success_count += 1
            continue

        print(f"  [{idx + 1}/{len(blocks)}] Rendering diagram {idx}...", end=" ")
        if render_mermaid_block(block['code'], output_path, idx, config_path):
            print("OK")
            success_count += 1
        else:
            print("FAILED")
            fail_count += 1

    print(f"\n  Results: {success_count} OK, {fail_count} failed out of {len(blocks)}")

    # Create modified markdown
    print("\n[3/5] Creating markdown with embedded images...")
    modified_content = replace_mermaid_with_images(content, blocks, MERMAID_DIR)
    with open(TEMP_MD, 'w', encoding='utf-8') as f:
        f.write(modified_content)
    print(f"  Temp file: {TEMP_MD}")

    # Create CSS for PDF
    css_path = create_pdf_css()

    # Convert to DOCX
    docx_ok = run_pandoc_docx(TEMP_MD, OUTPUT_DOCX)

    # Convert to PDF
    pdf_ok = run_pandoc_pdf(TEMP_MD, OUTPUT_PDF, css_path)

    # Summary
    print("\n" + "=" * 60)
    print("RESULTS:")
    print(f"  DOCX: {'OK' if docx_ok else 'FAILED'} → {OUTPUT_DOCX}")
    print(f"  PDF:  {'OK' if pdf_ok else 'FAILED'} → {OUTPUT_PDF}")
    print(f"  Mermaid diagrams: {success_count}/{len(blocks)} rendered")
    print("=" * 60)

    # Cleanup temp files
    for f in ['_mermaid_config.json', '_puppeteer.json']:
        try:
            os.remove(os.path.join(SCRIPT_DIR, f))
        except:
            pass

    return 0 if (docx_ok or pdf_ok) else 1


if __name__ == "__main__":
    sys.exit(main())
