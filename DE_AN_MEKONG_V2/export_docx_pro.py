import os
import re
import subprocess
import sys
import shutil

def check_dependencies():
    missing = []
    if shutil.which("npx") is None:
        missing.append("Node.js (npx) - Để gọi thư viện vẽ ảnh Mermaid")
    if shutil.which("pandoc") is None:
        missing.append("Pandoc - Trình chuyển đổi Markdown sang Word DOCX")
    
    if missing:
        print("+"*60)
        print(" LỖI: MÁY TÍNH CỦA BẠN THIẾU CÔNG CỤ ĐỂ CHẠY !")
        print("+"*60)
        for m in missing:
            print(f"  ❌ {m}")
        print("\nĐể script có thể tự động chạy, bạn cần cài đặt:")
        print("  1. Node.js tải tại: https://nodejs.org/")
        print("  2. Pandoc tải tại:  https://pandoc.org/installing.html")
        print("Sau khi cài hai phần mềm trên, hãy khởi động lại Terminal và chạy lại script này.")
        sys.exit(1)

def convert_md_to_docx(input_md, output_docx):
    print("="*60)
    print(f" BẮT ĐẦU CHUYỂN ĐỔI: {input_md} -> {output_docx}")
    print("="*60)
    
    # 1. Tạo thư mục chứa ảnh tạm
    assets_dir = "mermaid_assets"
    os.makedirs(assets_dir, exist_ok=True)
    
    # 2. Đọc file Markdown gốc
    print(f"[1] Đang nạp nội dung hồ sơ '{input_md}'...")
    try:
        with open(input_md, 'r', encoding='utf-8') as f:
            content = f.read()
    except UnicodeDecodeError:
        print("  ! Cảnh báo: Tệp không chuẩn UTF-8, đang thử đọc lại...")
        with open(input_md, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

    # Regex tìm toàn bộ các khối code có đánh dấu mermaid (hỗ trợ cả dấu cách thụt đầu dòng)
    mermaid_pattern = re.compile(r'^[ \t]*```mermaid\n(.*?)\n[ \t]*```', re.DOTALL | re.MULTILINE)
    
    matches = []
    for m in mermaid_pattern.finditer(content):
        matches.append((m.group(0), m.group(1)))
        
    print(f"[2] Quét thành công {len(matches)} biểu đồ Mermaid. Bắt đầu render thành ảnh PNG...")
    
    new_content = content
    for i, (original_block, mermaid_code) in enumerate(matches):
        base_name = f"bieu_do_{i+1:03d}"
        mmd_path = os.path.join(assets_dir, f"{base_name}.mmd")
        png_path = os.path.join(assets_dir, f"{base_name}.png")
        
        with open(mmd_path, 'w', encoding='utf-8') as f:
            f.write(mermaid_code.strip())
            
        print(f"  -> Đang vẽ hệ thống biểu đồ [{i+1}/{len(matches)}]: mermaid_assets\\{base_name}.png ...", end=" ", flush=True)
        
        # Thêm cờ -y cho npx để bỏ qua prompt cài đặt (yes to all)
        # Thêm cờ puppeteer config nếu cần (tùy chọn) nhưng mmdc chạy khá tốt với cfg mặc định
        cmd = [
            "npx", "-y", "-p", "@mermaid-js/mermaid-cli", "mmdc", 
            "-i", mmd_path, 
            "-o", png_path, 
            "-b", "white", 
            "-s", "2"
        ]
        
        try:
            # Chạy cmd và bắt output để debug nếu cần
            result = subprocess.run(
                cmd, 
                check=True, 
                shell=(os.name=='nt'), 
                capture_output=True,
                text=True
            )
            print("OK")
            # Thay thế khối code thành hình ảnh
            replacement = f"![Sơ đồ {i+1} : {base_name}]({png_path})"
            new_content = new_content.replace(original_block, replacement)
        except subprocess.CalledProcessError as e:
            print("FAILED!")
            print(f"     [!] LỖI CÔNG CỤ: {e.stderr.strip() if e.stderr else 'Không xác định'}")
            print(f"     [!] Bỏ qua biểu đồ này.")
            # Có thể in stdout ra nếu stderr rỗng
            if not e.stderr and e.stdout:
                print(f"     [!] Chi tiết: {e.stdout.strip()}")
            os.remove(mmd_path)
            continue
            
    # Dọn dẹp mượn
    for file in os.listdir(assets_dir):
        if file.endswith(".mmd"):
            os.remove(os.path.join(assets_dir, file))

    # 3. Ghi ra tệp MD đã nhúng ảnh đồ hoạ
    temp_md = "temp_MEKONG_RENDERED.md"
    print(f"\n[3] Lưu cấu trúc Markdown đã điền ảnh tĩnh vào file tạm '{temp_md}'...")
    with open(temp_md, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"[4] Chạy Pandoc xuất ra định dạng chuẩn hồ sơ DOCX...")
    pandoc_cmd = [
        "pandoc", temp_md, 
        "-o", output_docx, 
        "-f", "markdown", 
        "-t", "docx",
        "--toc",               
        "--number-sections"    
    ]
    
    try:
        subprocess.run(pandoc_cmd, check=True, shell=(os.name=='nt'), capture_output=True, text=True)
        print("\n" + "="*60)
        print(" 🎉 HOÀN TẤT THÀNH CÔNG! 🎉")
        print("="*60)
        print(f"✅ Đã lưu hồ sơ Word tại   : {output_docx}")
        print(f"✅ Các hình biều đồ nét gốc lưu tại : {assets_dir}\\")
        print("Bây giờ bạn có thể mở File Word lên tinh chỉnh Font chữ trước khi in PDF/Trình bày!")
    except subprocess.CalledProcessError as e:
        print("\n[LỖI] Trình chuyển đổi Pandoc gặp sự cố!")
        print(e.stderr)
        
    if os.path.exists(temp_md):
        os.remove(temp_md)

if __name__ == "__main__":
    check_dependencies()
    
    input_file = "MEKONG_DE_AN_V2.md"
    output_file = "MEKONG_DE_AN_V2_PRO_FINAL.docx"
    
    if len(sys.argv) >= 2:
        input_file = sys.argv[1]
    if len(sys.argv) >= 3:
        output_file = sys.argv[2]
        
    if not os.path.exists(input_file):
        print(f"Không tìm thấy file nguồn gốc: {input_file}")
        sys.exit(1)
        
    convert_md_to_docx(input_file, output_file)
