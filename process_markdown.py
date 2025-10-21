#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import os

def process_markdown_file():
    """Xử lý file Markdown để thay thế Mermaid diagrams bằng hình ảnh"""
    
    input_file = "TRINH_BAY_KCNC/01_DE_AN_CHINH/MEKONG_TECHNOLOGY_MAU_1.4_PROFESSIONAL_2025-10-20.md"
    output_file = "TRINH_BAY_KCNC/01_DE_AN_CHINH/MEKONG_TECHNOLOGY_MAU_1.4_PROFESSIONAL_2025-10-20_PROCESSED.md"
    
    # Đọc file gốc
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Thay thế các Mermaid diagrams bằng hình ảnh
    replacements = [
        {
            'pattern': r'```mermaid\ngraph LR\nA\[High Price\] --> B\[Siemens<br/>Schneider<br/>Premium\].*?```',
            'replacement': '![Competitive Positioning](mermaid_images/competitive_positioning.png)\n*Hình 10.3: Chiến lược định vị cạnh tranh - Mekong Technology là "Value Leader"*',
            'flags': re.DOTALL
        },
        {
            'pattern': r'```mermaid\ngraph TB\n    A\[Mekong Products\] --> B\[IoT Gateway & Module\].*?```',
            'replacement': '![Product Portfolio](mermaid_images/product_portfolio.png)\n*Hình 11.3: Danh mục sản phẩm Mekong Technology*',
            'flags': re.DOTALL
        },
        {
            'pattern': r'```mermaid\ngantt\n    title Technology Roadmap 2025-2045.*?```',
            'replacement': '![Technology Roadmap](mermaid_images/technology_roadmap.png)\n*Hình 11.4: Lộ trình công nghệ 4 thế hệ (2025-2045)*',
            'flags': re.DOTALL
        },
        {
            'pattern': r'```mermaid\ngraph LR\n    A\[Technology Acquisition\] --> B\[Reverse Engineering\].*?```',
            'replacement': '![Technology Transfer Process](mermaid_images/technology_transfer.png)\n*Hình 13.1: Quy trình chuyển giao công nghệ*',
            'flags': re.DOTALL
        },
        {
            'pattern': r'```mermaid\nflowchart TB\n    CTO\[CTO/Chief Scientist.*?```',
            'replacement': '![R&D Organization](mermaid_images/rd_organization.png)\n*Hình 14.1: Tổ chức R&D Mekong Technology*',
            'flags': re.DOTALL
        }
    ]
    
    # Thực hiện thay thế
    for replacement in replacements:
        content = re.sub(
            replacement['pattern'], 
            replacement['replacement'], 
            content, 
            flags=replacement['flags']
        )
    
    # Ghi file đã xử lý
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Đã xử lý file: {output_file}")
    print("✅ Đã thay thế 5 Mermaid diagrams bằng hình ảnh")

if __name__ == "__main__":
    process_markdown_file()
