# -*- coding: utf-8 -*-
"""Batch 39 — Fourth-pass G through L: insert new subsections."""

filepath = r'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections\PHU_LUC.md'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

before = content.count(chr(10))
inserted = []

# ── G.8: Post-project IP strategy ──────────────────────────────────
marker_g = '---\n\n## Phụ lục H:'
block_g = """\
### G.8. Chiến lược Sở hữu Trí tuệ sau Dự án

#### G.8.1. Kế hoạch đăng ký sáng chế

| STT | Đối tượng sáng chế | Lĩnh vực | Thời điểm nộp đơn | Cơ quan | Chi phí ước tính (USD) |
|-----|-------------------|----------|-------------------|---------|----------------------|
| 1 | Quy trình gia công CNC 5 trục cho vật liệu composite | CNC/MPMC | Q4/N2 | Cục SHTT Việt Nam | 3.500 |
| 2 | Thuật toán tối ưu đường chạy dao thích ứng | CNC/MPMC | Q1/N3 | Cục SHTT + PCT | 8.200 |
| 3 | Firmware điều khiển cảm biến IoT đa giao thức | Điện tử thông minh | Q2/N3 | Cục SHTT + PCT | 8.200 |
| 4 | Kiến trúc BMS tích hợp AI dự đoán bảo trì | Điện tử thông minh | Q3/N3 | Cục SHTT Việt Nam | 3.500 |
| 5 | Phương pháp kiểm tra chất lượng tự động bằng thị giác máy | CNC/MPMC | Q1/N4 | Cục SHTT + PCT | 8.200 |
| 6 | Hệ thống giám sát năng lượng thời gian thực cho nhà máy | Điện tử thông minh | Q4/N4 | Cục SHTT Việt Nam | 3.500 |
| | **Tổng chi phí đăng ký sáng chế** | | | | **35.100** |

#### G.8.2. Bảo hộ bí mật kinh doanh

| Hạng mục | Biện pháp bảo vệ | Phạm vi áp dụng | Người chịu trách nhiệm |
|----------|------------------|-----------------|----------------------|
| Công thức pha trộn vật liệu CNC | NDA + mã hóa tài liệu nội bộ | Toàn bộ nhân viên R&D | Trưởng phòng R&D |
| Thông số hiệu chuẩn máy CNC | Access control + audit log | Kỹ thuật viên CNC | Quản đốc xưởng CNC |
| Cơ sở dữ liệu khách hàng | Mã hóa AES-256 + phân quyền | Bộ phận kinh doanh | Giám đốc kinh doanh |
| Quy trình sản xuất PCB đặc biệt | Clean room access + NDA | Nhân viên sản xuất điện tử | Trưởng phòng sản xuất |
| Thuật toán AI nội bộ | Git private + code review | Đội ngũ phần mềm | CTO |

#### G.8.3. Phương pháp định giá tài sản trí tuệ

- **Phương pháp chi phí (Cost approach):** tổng chi phí R&D tích lũy qua 5 năm ước tính 2.800K USD
- **Phương pháp thu nhập (Income approach):** chiết khấu dòng tiền từ licensing, ước tính NPV = 1.200K USD (discount rate 15%)
- **Phương pháp thị trường (Market approach):** so sánh giao dịch IP tương đương trong ngành CNC/IoT khu vực ASEAN

#### G.8.4. Mô hình cấp phép (Licensing)

| Loại license | Đối tượng | Phí license/năm (USD) | Doanh thu kỳ vọng N5–N10 |
|-------------|----------|----------------------|--------------------------|
| Bản quyền phần mềm BMS | Đối tác tích hợp hệ thống | 15.000–25.000 | 120.000 |
| License công nghệ CNC đặc biệt | Nhà sản xuất OEM | 30.000–50.000 | 240.000 |
| SDK cảm biến IoT | Nhà phát triển ứng dụng | 5.000–10.000 | 50.000 |
| **Tổng doanh thu IP licensing kỳ vọng** | | | **410.000** |

> **Giá trị chiến lược IP** ước tính đóng góp 5–8% vào tổng giá trị chiến lược 7.000K USD [C] của dự án.

"""
if marker_g in content:
    content = content.replace(marker_g, block_g + marker_g, 1)
    inserted.append('G.8')

# ── H.10: Water management detail ──────────────────────────────────
marker_h = '---\n\n## Phụ lục I:'
block_h = """\
### H.10. Quản lý Nước và Hệ thống Xả thải Không xả (ZLD)

#### H.10.1. Tiêu thụ nước theo khu vực

| Khu vực | Mục đích sử dụng | Tiêu thụ (m³/ngày) | Tỷ lệ (%) | Nguồn cấp |
|---------|------------------|-------------------|-----------|-----------|
| Xưởng CNC | Dung dịch cắt gọt, làm mát trục chính | 12,5 | 31,3 | Nước thành phố + tái chế |
| Phòng sạch điện tử | Rửa PCB, DI water cho sản xuất | 8,0 | 20,0 | Hệ thống RO/DI |
| Hệ thống HVAC | Tháp giải nhiệt, ẩm hóa | 7,5 | 18,8 | Nước thành phố |
| Sinh hoạt (130 người) | Vệ sinh, ăn uống | 6,5 | 16,3 | Nước thành phố |
| Tưới cây, PCCC dự phòng | Cảnh quan, bể chữa cháy | 3,5 | 8,6 | Nước mưa thu hồi |
| Phòng thí nghiệm QC | Rửa mẫu, pha dung dịch | 2,0 | 5,0 | Hệ thống DI |
| **Tổng** | | **40,0** | **100** | |

#### H.10.2. Hiệu suất hệ thống ZLD

| Thông số | Đơn vị | Mục tiêu | Thực tế kỳ vọng (N3+) |
|----------|--------|----------|----------------------|
| Tỷ lệ tái chế nước tổng thể | % | ≥ 85 | 87–90 |
| Nước thải xả ra môi trường | m³/ngày | 0 | 0 (Zero Liquid Discharge) |
| Chất lượng nước tái chế | QCVN | Cột A, QCVN 40:2011 | Đạt |
| Hiệu suất hệ thống RO | % | ≥ 75 | 78 |
| COD nước đầu ra sau xử lý | mg/L | < 50 | 30–40 |
| TSS nước đầu ra | mg/L | < 50 | 20–35 |
| pH nước tái chế | — | 6,5–8,5 | 7,0–7,5 |

#### H.10.3. Cân bằng nước và chi phí vận hành

| Hạng mục | Giá trị | Đơn vị |
|----------|---------|--------|
| Tổng nước đầu vào | 40,0 | m³/ngày |
| Nước tái chế sử dụng lại | 34,0 | m³/ngày |
| Nước bổ sung từ nguồn mới | 6,0 | m³/ngày |
| Bùn thải (đưa đi xử lý) | 0,8 | tấn/tháng |
| Chi phí nước thành phố | 8.500 | USD/năm |
| Chi phí vận hành ZLD | 22.000 | USD/năm |
| Chi phí hóa chất xử lý | 9.500 | USD/năm |
| **Tổng chi phí nước/năm** | **40.000** | **USD/năm** |

> Hệ thống ZLD giảm 85% lượng nước mua ngoài, tiết kiệm ~28.000 USD/năm so với phương án xả thải truyền thống.

"""
if marker_h in content:
    content = content.replace(marker_h, block_h + marker_h, 1)
    inserted.append('H.10')

# ── I.10: Tool management system ───────────────────────────────────
marker_i = '---\n\n## Phụ lục J:'
block_i = """\
### I.10. Hệ thống Quản lý Dụng cụ Cắt gọt (Tool Management)

#### I.10.1. Danh mục dụng cụ chính (10 máy CNC) [C]

| STT | Loại dụng cụ | Vật liệu | Số lượng tồn kho tối thiểu | Tuổi thọ trung bình (giờ) | Đơn giá (USD) |
|-----|-------------|----------|---------------------------|--------------------------|--------------|
| 1 | End mill Ø6–Ø20 (carbide) | Tungsten Carbide | 120 cái | 180 | 25–85 |
| 2 | Ball nose Ø4–Ø16 | Carbide coated TiAlN | 80 cái | 150 | 35–110 |
| 3 | Face mill Ø50–Ø100 | Insert carbide | 15 bộ | 300 (insert) | 180–450 |
| 4 | Drill bit Ø2–Ø25 | HSS-Co / Carbide | 200 cái | 250 | 8–65 |
| 5 | Tap M3–M16 | HSS-E coated | 100 cái | 200 | 12–45 |
| 6 | Reamer Ø5–Ø30 | Carbide | 40 cái | 400 | 55–180 |
| 7 | Boring bar Ø10–Ø60 | Steel + carbide insert | 20 cái | 350 (insert) | 120–380 |
| 8 | Chamfer cutter 45°/60° | Carbide | 30 cái | 300 | 30–90 |

#### I.10.2. Theo dõi tuổi thọ dụng cụ

- **Phần mềm:** Tool Management Module tích hợp trong hệ thống MES
- **Phương pháp:** đo lực cắt thời gian thực + đếm số chi tiết đã gia công
- **Cảnh báo:** tự động khi tuổi thọ đạt 80% → lên kế hoạch thay/mài lại
- **Dữ liệu thu thập:** mã dụng cụ, máy sử dụng, số giờ cắt, lực cắt trung bình, trạng thái

#### I.10.3. Chính sách mài lại (Regrind Policy)

| Loại dụng cụ | Số lần mài lại tối đa | Giảm tuổi thọ sau mài (%) | Chi phí mài/lần (USD) | Nhà cung cấp dịch vụ |
|-------------|----------------------|---------------------------|----------------------|---------------------|
| End mill carbide | 3 lần | 10–15% mỗi lần | 8–15 | Nội bộ + vendor |
| Ball nose | 2 lần | 15–20% mỗi lần | 12–20 | Vendor chuyên dụng |
| Drill bit HSS | 5 lần | 5–10% mỗi lần | 3–6 | Nội bộ |
| Reamer | 2 lần | 10% mỗi lần | 18–30 | Vendor chuyên dụng |
| Face mill insert | Không mài — thay insert | — | — | — |

#### I.10.4. Chi phí dụng cụ hàng năm

| Hạng mục | Chi phí (USD/năm) | Ghi chú |
|----------|-------------------|---------|
| Mua mới dụng cụ cắt | 85.000 | Bao gồm insert thay thế |
| Dịch vụ mài lại | 12.000 | ~60% mài nội bộ, 40% outsource |
| Dụng cụ đo kiểm (thay thế) | 8.000 | Caliper, micrometer, gauge |
| Holder và collet thay thế | 6.000 | Thay khi độ đảo > 5 µm |
| **Tổng chi phí dụng cụ/năm** | **111.000** | Từ N3 trở đi (full capacity) |

"""
if marker_i in content:
    content = content.replace(marker_i, block_i + marker_i, 1)
    inserted.append('I.10')

# ── J.10: IoT product testing protocol ─────────────────────────────
marker_j = '---\n\n## Phụ lục K:'
block_j = """\
### J.10. Quy trình Kiểm tra Sản phẩm IoT/Điện tử

#### J.10.1. Ma trận kiểm tra theo loại sản phẩm

| Loại sản phẩm | Kiểm tra chức năng | Kiểm tra môi trường | Kiểm tra EMC | Kiểm tra an toàn | Kiểm tra tuổi thọ |
|---------------|-------------------|---------------------|-------------|-----------------|-------------------|
| Cảm biến IoT công nghiệp | ✓ Functional test 100% | ✓ -20°C → +70°C | ✓ EN 61000-6-2 | ✓ IEC 62368-1 | ✓ HALT 1.000h |
| Gateway BMS | ✓ Protocol test | ✓ -10°C → +55°C | ✓ EN 61000-6-4 | ✓ IEC 62368-1 | ✓ Burn-in 168h |
| Bộ điều khiển SCADA | ✓ Full system test | ✓ 0°C → +50°C | ✓ EN 55032 | ✓ UL 61010-1 | ✓ MTBF >50.000h |
| Module truyền thông RF | ✓ RF performance | ✓ -20°C → +60°C | ✓ ETSI EN 300 328 | ✓ RED Directive | ✓ Cycle test 10K |
| PCB lắp ráp (PCBA) | ✓ ICT + FCT | ✓ Thermal shock | ✓ Class B | ✓ IPC-A-610 | ✓ SIR test |

#### J.10.2. Thiết bị kiểm tra chủ yếu

| Thiết bị | Hãng/Model | Mục đích | Số lượng | Giá trị (USD) |
|----------|-----------|----------|---------|--------------|
| Buồng nhiệt ẩm | Espec PL-3KPH | Kiểm tra môi trường | 1 | 45.000 |
| Buồng sốc nhiệt | Espec TSE-11A | Thermal shock test | 1 | 38.000 |
| EMC test receiver | R&S ESR | Đo phát xạ EMI | 1 | 85.000 |
| Signal analyzer | Keysight N9040B | Phân tích RF | 1 | 62.000 |
| ICT tester | Keysight 3070 | In-circuit test PCBA | 1 | 55.000 |
| Máy X-ray BGA | Nordson Dage | Kiểm tra mối hàn BGA | 1 | 72.000 |
| Hi-pot tester | Associated Research | Kiểm tra an toàn điện | 2 | 8.000 |

#### J.10.3. Tiêu chí đạt/không đạt và thời gian kiểm tra

| Loại kiểm tra | Tiêu chí PASS | Thời gian/lot | Tỷ lệ đạt mục tiêu |
|--------------|--------------|--------------|-------------------|
| Functional test | 100% thông số trong spec | 2–4 giờ | ≥ 99,5% |
| Burn-in test | Không lỗi sau 168h liên tục | 7 ngày | ≥ 99,0% |
| Thermal cycling | Không lỗi sau 500 chu kỳ -40/+85°C | 14 ngày | ≥ 98,5% |
| EMC pre-compliance | Dưới ngưỡng limit EN 55032 Class B | 1 ngày | ≥ 95% (first pass) |
| Safety test | Hi-pot ≥ 1,5 kV/1 min, no breakdown | 1 giờ | 100% |

"""
if marker_j in content:
    content = content.replace(marker_j, block_j + marker_j, 1)
    inserted.append('J.10')

# ── K.10: Inventory management policy ──────────────────────────────
marker_k = '---\n\n## Phụ lục L:'
block_k = """\
### K.10. Chính sách Quản lý Tồn kho

#### K.10.1. Phân loại ABC

| Nhóm | Tiêu chí | Tỷ lệ SKU | Tỷ lệ giá trị | Tần suất kiểm kê | Phương pháp bổ sung |
|------|---------|-----------|---------------|-----------------|-------------------|
| A | Giá trị cao, tiêu thụ nhanh | 15% | 70% | Hàng tuần | Kanban điện tử (MES) |
| B | Giá trị trung bình | 30% | 20% | Hàng tháng | Min-Max tự động |
| C | Giá trị thấp, đa dạng | 55% | 10% | Hàng quý | Đặt hàng theo đợt |

#### K.10.2. Điểm đặt hàng lại (Reorder Point) và Tồn kho an toàn

**Công thức:**
- Reorder Point (ROP) = (Demand trung bình/ngày × Lead time) + Safety Stock
- Safety Stock = Z × σ_demand × √(Lead time)
  - Z = 1,65 (service level 95%)

| Nhóm vật tư | Demand TB (đơn vị/ngày) | Lead time (ngày) | σ_demand | Safety Stock | ROP |
|-------------|------------------------|------------------|----------|-------------|-----|
| IC/chip chính (A) | 500 | 45 | 80 | 885 | 23.385 |
| Linh kiện thụ động (B) | 2.000 | 21 | 300 | 2.268 | 44.268 |
| PCB trần (A) | 200 | 30 | 35 | 316 | 6.316 |
| Vỏ nhựa/kim loại (B) | 150 | 14 | 25 | 154 | 2.254 |
| Vật tư CNC (carbide) (A) | 20 | 35 | 5 | 49 | 749 |
| Vật tư đóng gói (C) | 300 | 7 | 50 | 218 | 2.318 |

#### K.10.3. Chi phí lưu kho (Carrying Cost)

| Thành phần chi phí | Tỷ lệ (% giá trị tồn kho) | Ước tính (USD/năm) |
|-------------------|---------------------------|-------------------|
| Chi phí vốn (opportunity cost) | 8,0% | 64.000 |
| Bảo hiểm tồn kho | 1,5% | 12.000 |
| Chi phí kho bãi (thuê, điện, AC) | 3,0% | 24.000 |
| Hao hụt, hư hỏng, lỗi thời | 2,5% | 20.000 |
| Quản lý, nhân sự kho | 3,0% | 24.000 |
| **Tổng carrying cost** | **18,0%** | **144.000** |

> Giá trị tồn kho trung bình mục tiêu: 800.000 USD. Vòng quay tồn kho mục tiêu: ≥ 8 lần/năm từ N3+.

"""
if marker_k in content:
    content = content.replace(marker_k, block_k + marker_k, 1)
    inserted.append('K.10')

# ── L.10: Post-construction punch list & warranty ──────────────────
marker_l = '---\n\n## Phụ lục M:'
block_l = """\
### L.10. Danh mục Nghiệm thu Sau Xây dựng và Bảo hành

#### L.10.1. Phân loại khuyết tật nghiệm thu (Punch List)

| Mức độ | Mô tả | Thời hạn khắc phục | Ảnh hưởng đến nghiệm thu |
|--------|-------|--------------------|-----------------------|
| Critical | Lỗi kết cấu, an toàn, PCCC | 7 ngày | Chặn nghiệm thu hoàn toàn |
| Major | Lỗi M&E, rò rỉ, sai spec | 14 ngày | Nghiệm thu có điều kiện |
| Minor | Cosmetic, sơn, trầy xước | 30 ngày | Nghiệm thu, ghi nhận sửa sau |
| Observation | Ghi nhận, không ảnh hưởng | 60 ngày | Không ảnh hưởng |

#### L.10.2. Điều khoản bảo hành nhà thầu

| Hạng mục | Thời hạn bảo hành | Bảo lãnh bảo hành (% hợp đồng) | Phạm vi |
|----------|-------------------|-------------------------------|---------|
| Kết cấu chính (móng, khung thép) | 10 năm | 5% | Nứt, lún, biến dạng |
| Mái, chống thấm | 5 năm | 5% | Rò rỉ, thấm nước |
| Hệ thống điện | 2 năm | 5% | Chập, cháy, quá tải |
| Hệ thống HVAC | 2 năm | 5% | Công suất, rò gas, ồn |
| Hệ thống nước/PCCC | 2 năm | 5% | Rò rỉ, áp suất, van |
| Sàn epoxy công nghiệp | 3 năm | 3% | Bong tróc, nứt, mài mòn |
| BMS/điều khiển tự động | 2 năm | 5% | Lỗi phần mềm, cảm biến |
| Hệ thống an ninh (CCTV, access) | 2 năm | 5% | Camera, khóa, đầu đọc |

#### L.10.3. Lịch trình giữ lại tiền bảo hành (Retention Schedule)

| Giai đoạn | Tỷ lệ giữ lại | Điều kiện giải ngân | Thời điểm |
|-----------|---------------|--------------------|-----------| 
| Nghiệm thu sơ bộ (PAC) | 5% giá trị hợp đồng | Hoàn thành punch list Critical + Major | T0 |
| Bảo hành năm 1 | Giữ 5% | Không phát sinh lỗi Critical | T0 + 12 tháng |
| Bảo hành năm 2 | Giải ngân 2,5% | Kiểm tra định kỳ đạt | T0 + 24 tháng |
| Kết thúc bảo hành | Giải ngân 2,5% còn lại | Biên bản nghiệm thu cuối | T0 + theo hạng mục |

> Tổng giá trị retention ước tính: 5% × 4.200K USD (chi phí xây dựng) = **210.000 USD** [B]. Nhà thầu phải nộp bảo lãnh ngân hàng tương đương.

"""
if marker_l in content:
    content = content.replace(marker_l, block_l + marker_l, 1)
    inserted.append('L.10')

# ── Write & report ─────────────────────────────────────────────────
with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)

after = content.count(chr(10))
print(f'Batch 39 complete.')
print(f'Inserted sections: {", ".join(inserted)} ({len(inserted)} sections)')
print(f'Lines before: {before}')
print(f'Lines after:  {after}')
print(f'Lines added:  {after - before}')
