#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fix lỗi chêm Anh-Việt trong DE_AN_MEKONG_V3/sections/*.md
Chiến lược:
  - Xử lý từng dòng
  - Bỏ qua dòng trong code block (```) và Mermaid block
  - Bỏ qua phần URL trong markdown link [text](URL)
  - Bỏ qua Mermaid keyword `:milestone,`
  - Thay thế theo bảng canonical
"""

import re
import os
import glob

SECTIONS_DIR = r"C:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections"

# --- Bảng thay thế theo thứ tự ưu tiên (case-insensitive matching, preserve case) ---
# Mỗi entry: (pattern, replacement)
# Thứ tự quan trọng: multi-word trước, single-word sau
REPLACEMENTS = [
    # Tài chính
    (r'\bcash flow\b',       'dòng tiền'),
    (r'\bCash flow\b',       'Dòng tiền'),
    (r'\bCash Flow\b',       'Dòng Tiền'),
    (r'\bbreak-even\b',      'điểm hòa vốn'),
    (r'\bBreak-even\b',      'Điểm hòa vốn'),
    (r'\bBreak-Even\b',      'Điểm Hòa vốn'),
    (r'\bpayback period\b',  'thời gian hoàn vốn'),
    (r'\bPayback Period\b',  'Thời gian hoàn vốn'),
    (r'\bPayback period\b',  'Thời gian hoàn vốn'),
    # Payback standalone (chỉ khi không có tiếng Việt liền trước/sau)
    # Heuristic: nếu đứng đầu ô bảng hoặc đầu câu
    (r'\bPayback\b(?!\s*\()',  'Thời gian hoàn vốn'),
    (r'\bpayback\b(?!\s*\()',  'thời gian hoàn vốn'),

    # Vận hành ổn định
    (r'\bsteady[-\s]state\b',  'ổn định'),
    (r'\bSteady[-\s]state\b',  'Ổn định'),
    (r'\bSteady[-\s]State\b',  'Ổn định'),

    # Chuỗi
    (r'\bvalue chain\b',     'chuỗi giá trị'),
    (r'\bValue chain\b',     'Chuỗi giá trị'),
    (r'\bValue Chain\b',     'Chuỗi Giá trị'),
    (r'\bsupply chain\b',    'chuỗi cung ứng'),
    (r'\bSupply chain\b',    'Chuỗi cung ứng'),
    (r'\bSupply Chain\b',    'Chuỗi Cung ứng'),
    (r'\bSemiconductor Supply Chain\b',  'Chuỗi Cung ứng Bán dẫn'),

    # Thị trường
    (r'\bmarket share\b',    'thị phần'),
    (r'\bMarket share\b',    'Thị phần'),
    (r'\bMarket Share\b',    'Thị phần'),
    (r'\bgo-to-market\b',    'tiếp cận thị trường'),
    (r'\bGo-to-market\b',    'Tiếp cận thị trường'),
    (r'\bGo-To-Market\b',    'Tiếp cận Thị trường'),
    (r'\bGTM\b(?!\s*:)',     'tiếp cận thị trường'),  # chỉ khi không phải heading
    (r'\btrack record\b',    'thành tích đã kiểm chứng'),
    (r'\bTrack record\b',    'Thành tích đã kiểm chứng'),
    (r'\bTrack Record\b',    'Thành tích Đã kiểm chứng'),

    # Nền tảng
    (r'\bplatform\b',        'nền tảng'),
    (r'\bPlatform\b',        'Nền tảng'),

    # Thuê ngoài
    (r'\boutsource\b',       'thuê ngoài'),
    (r'\bOutsource\b',       'Thuê ngoài'),
    (r'\bOUTSOURCE\b',       'THUÊ NGOÀI'),

    # Bên liên quan
    (r'\bstakeholders?\b',   'các bên liên quan'),
    (r'\bStakeholders?\b',   'Các bên liên quan'),

    # Bí quyết
    (r'\bknow-how\b',        'bí quyết công nghệ'),
    (r'\bKnow-how\b',        'Bí quyết công nghệ'),
    (r'\bKnow-How\b',        'Bí quyết Công nghệ'),

    # Lộ trình (headings & body, NOT Mermaid syntax)
    (r'\bRoadmap\b',         'Lộ trình'),
    (r'\broadmap\b',         'lộ trình'),

    # Mốc tiến độ (cẩn thận: KHÔNG thay `:milestone,` là Mermaid keyword)
    (r'\bMilestones\b(?!,)',  'Các mốc tiến độ'),
    (r'\bMilestone\b(?!,)',   'Mốc tiến độ'),
    (r'\bmilestones\b(?!,)',  'các mốc tiến độ'),
    (r'\bmilestone\b(?!,)',   'mốc tiến độ'),

    # Chuẩn ngành
    (r'\bBenchmarking\b',    'Đối chiếu chuẩn ngành'),
    (r'\bBenchmark\b',       'Chuẩn ngành'),
    (r'\bbenchmark\b',       'chuẩn ngành'),

    # Khung / mô hình
    # "framework" trong tên đặc biệt như "IEC 62443 framework" → giữ tên chuẩn
    # nhưng "Stress Response Framework", "MPMC Framework Agreement" → thay
    # Dùng negative lookbehind để giữ IEC / ISO / NIST context
    (r'(?<!IEC\s)(?<!ISO\s)(?<!NIST\s)\bframework\b',  'khung'),
    (r'(?<!IEC\s)(?<!ISO\s)(?<!NIST\s)\bFramework\b',  'Khung'),

    # Thời gian (lead time, downtime, uptime)
    (r'\blead time\b',       'thời gian dẫn'),
    (r'\bLead time\b',       'Thời gian dẫn'),
    (r'\bLead Time\b',       'Thời gian dẫn'),
    (r'\bdowntime\b',        'thời gian dừng máy'),
    (r'\bDowntime\b',        'Thời gian dừng máy'),
    (r'\buptime\b',          'thời gian hoạt động'),
    (r'\bUptime\b',          'Thời gian hoạt động'),

    # SaaS/hosting/subscription (hosting = lưu trữ khi dùng chung chung)
    (r'\bhosting\b',         'lưu trữ'),
    (r'\bHosting\b',         'Lưu trữ'),
    (r'\bsubscription\b',    'thuê bao'),
    (r'\bSubscription\b',    'Thuê bao'),

    # Hoàn thiện lắp đặt
    (r'\bfit-out\b',         'hoàn thiện lắp đặt'),
    (r'\bFit-out\b',         'Hoàn thiện lắp đặt'),
    (r'\bFit-Out\b',         'Hoàn thiện lắp đặt'),

    # Mức cơ sở (baseline trong ngữ cảnh dự án - KHÔNG thay "NIST IoT baseline" hay "baseline Scope 1/2/3")
    # Giữ "baseline" trong: "NIST IoT baseline", "Scope 1/2/3", "GHG baseline"
    (r'(?<!GHG\s)(?<!NIST\sIoT\s)(?<!Scope\s1/2/3\s)\bbaseline\b(?!\s+Scope)',  'mức cơ sở'),
    (r'(?<!GHG\s)(?<!NIST\sIoT\s)\bBaseline\b',  'Mức cơ sở'),

    # Định giá (pricing - chỉ trong câu tiếng Việt, không phải "pricing" đứng một mình như tên phần)
    # Thay khi không đứng một mình thành section header hoặc khi đứng sau/trước tiếng Việt
    (r'\bpenetration pricing\b',   'giá thâm nhập thị trường'),
    (r'\bPenetration pricing\b',   'Giá thâm nhập thị trường'),
    (r'\bvalue-based pricing\b',   'định giá theo giá trị'),
    (r'\bValue-based pricing\b',   'Định giá theo giá trị'),
    (r'\bstandard pricing\b',      'bảng giá tiêu chuẩn'),
    (r'\bPricing Strategy\b',      'Chiến lược Định giá'),
    (r'\bpricing strategy\b',      'chiến lược định giá'),
    (r'\bpricing\b(?!\s+Strategy)(?!\s+strategy)',   'định giá'),
    (r'\bPricing\b(?!\s+Strategy)(?!\s+strategy)',   'Định giá'),

    # Triển khai (deployment - khi dùng trong ngữ cảnh CNTT/phần mềm)
    (r'\bdeployment\b',      'triển khai'),
    (r'\bDeployment\b',      'Triển khai'),

    # Pipeline (chuỗi đơn hàng)
    (r'\bPipeline\b',        'Chuỗi đơn hàng'),
    (r'\bpipeline\b',        'chuỗi đơn hàng'),

    # Gate (mốc quyết định - chỉ khi "Gate N:" pattern)
    (r'\bGate\s+(\d+)\s*:', r'Mốc quyết định \1:'),
    (r'\bdecision gate\b',   'cổng quyết định'),
    (r'\bDecision gate\b',   'Cổng quyết định'),

    # Platform Value (bảng tài chính)
    (r'\bPlatform Value\b',  'Giá trị nền tảng'),
]

# Các pattern cần bảo vệ (giữ nguyên nội dung bên trong)
PRESERVE_INLINE_CODE = re.compile(r'`[^`]+`')
PRESERVE_URL_IN_LINK = re.compile(r'\[([^\]]*)\]\(([^)]*)\)')

def is_in_mermaid_block(lines, idx):
    """Kiểm tra xem dòng idx có nằm trong block mermaid không"""
    in_code = False
    is_mermaid = False
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith('```'):
            if not in_code:
                in_code = True
                is_mermaid = stripped.startswith('```mermaid')
            else:
                in_code = False
                is_mermaid = False
        if i == idx:
            return in_code and is_mermaid
    return False

def is_mermaid_keyword_line(line):
    """Kiểm tra dòng có phải Mermaid Gantt milestone syntax không"""
    # Pattern: `    SomeName :milestone, id, date, 0d`
    return bool(re.search(r':\s*milestone\s*,', line))

def protect_inline_code(line):
    """Trích xuất inline code, thay bằng placeholder"""
    placeholders = {}
    counter = [0]
    def replacer(m):
        key = f'\x00CODE{counter[0]}\x00'
        placeholders[key] = m.group(0)
        counter[0] += 1
        return key
    protected = PRESERVE_INLINE_CODE.sub(replacer, line)
    return protected, placeholders

def protect_url(line):
    """Bảo vệ phần URL trong markdown link"""
    placeholders = {}
    counter = [0]
    def replacer(m):
        text = m.group(1)
        url = m.group(2)
        key = f'\x00URL{counter[0]}\x00'
        placeholders[key] = url
        counter[0] += 1
        return f'[{text}]({key})'
    protected = PRESERVE_URL_IN_LINK.sub(replacer, line)
    return protected, placeholders

def restore_placeholders(line, placeholders):
    for key, val in placeholders.items():
        line = line.replace(key, val)
    return line

def apply_replacements(line):
    """Áp dụng bảng thay thế lên một dòng, bảo vệ inline code và URL"""
    # Bước 1: bảo vệ inline code
    line, code_ph = protect_inline_code(line)
    # Bước 2: bảo vệ URL trong links
    line, url_ph = protect_url(line)

    # Bước 3: áp dụng replacements
    for pattern, replacement in REPLACEMENTS:
        line = re.sub(pattern, replacement, line)

    # Bước 4: khôi phục
    line = restore_placeholders(line, url_ph)
    line = restore_placeholders(line, code_ph)
    return line

def detect_encoding(filepath):
    """Detect if file has UTF-8 BOM or not"""
    with open(filepath, 'rb') as f:
        raw = f.read(4)
    if raw.startswith(b'\xef\xbb\xbf'):
        return 'utf-8-sig'
    return 'utf-8'

def process_file(filepath):
    enc = detect_encoding(filepath)
    with open(filepath, 'r', encoding=enc, errors='replace') as f:
        original = f.read()

    lines = original.splitlines(keepends=True)
    result = []
    in_code_block = False
    is_mermaid = False
    changed = 0

    for idx, line in enumerate(lines):
        stripped = line.strip()

        # Detect code block boundaries
        if stripped.startswith('```'):
            if not in_code_block:
                in_code_block = True
                is_mermaid = stripped.startswith('```mermaid')
            else:
                in_code_block = False
                is_mermaid = False
            result.append(line)
            continue

        # Trong code block: skip replacements
        if in_code_block:
            result.append(line)
            continue

        # Mermaid Gantt milestone keyword line: skip
        if is_mermaid_keyword_line(line):
            result.append(line)
            continue

        # Áp dụng replacements
        new_line = apply_replacements(line)
        if new_line != line:
            changed += 1
        result.append(new_line)

    new_content = ''.join(result)
    if new_content != original:
        with open(filepath, 'w', encoding=enc) as f:
            f.write(new_content)
        print(f"  [{changed} dòng đã sửa] {os.path.basename(filepath)}")
    else:
        print(f"  [không thay đổi] {os.path.basename(filepath)}")

    return changed

def main():
    pattern = os.path.join(SECTIONS_DIR, '*.md')
    files = sorted(glob.glob(pattern))
    total = 0
    print(f"Xử lý {len(files)} file trong: {SECTIONS_DIR}\n")
    for f in files:
        c = process_file(f)
        total += c
    print(f"\nTổng cộng: {total} dòng đã sửa trên {len(files)} file.")

if __name__ == '__main__':
    main()
