# -*- coding: utf-8 -*-
"""Batch 40 — Fourth-pass M through R: insert new subsections."""

filepath = r'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections\PHU_LUC.md'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

before = content.count(chr(10))
inserted = []

# ── M.11: Channel strategy and distribution partners ───────────────
marker_m = '---\n\n## Phụ lục N:'
block_m = """\
### M.11. Chiến lược Kênh phân phối và Đối tác Thương mại

#### M.11.1. Cấu trúc kênh phân phối

| Kênh | Tỷ trọng doanh thu (N5+) | Biên lợi nhuận gộp | Đối tượng khách hàng | Quy mô đơn hàng điển hình |
|------|-------------------------|--------------------|--------------------|--------------------------|
| Bán trực tiếp (Direct) | 45% | 38–42% | Doanh nghiệp FDI, tập đoàn lớn | 50.000–500.000 USD |
| Đại lý/nhà phân phối | 30% | 28–32% | SME, nhà máy vừa và nhỏ | 10.000–100.000 USD |
| OEM/ODM | 15% | 22–26% | Hãng thiết bị quốc tế | 100.000–1.000.000 USD |
| E-commerce B2B | 5% | 35–40% | Đơn hàng nhỏ, phụ tùng thay thế | 500–10.000 USD |
| Xuất khẩu trực tiếp | 5% | 30–35% | Thị trường ASEAN, Đông Á | 20.000–200.000 USD |
| **Tổng** | **100%** | **~30% bình quân** | | **Doanh thu 12.000K [C] (N5+)** |

#### M.11.2. Cấu trúc chiết khấu theo kênh

| Kênh | Chiết khấu cơ bản | Chiết khấu số lượng | Chiết khấu thanh toán sớm | Hoa hồng bán hàng |
|------|-------------------|--------------------|--------------------------|--------------------|
| Trực tiếp | 0% | 3–5% (≥ 100K USD) | 2% (thanh toán 15 ngày) | 3% cho sales team |
| Đại lý cấp 1 | 15–20% | 2–3% (≥ 50K USD) | 1,5% | — |
| Đại lý cấp 2 | 10–15% (từ đại lý 1) | — | — | — |
| OEM/ODM | Theo hợp đồng khung | Volume-based tiered | 1% | — |

#### M.11.3. Phủ sóng địa lý và tiêu chí đối tác

| Khu vực | Mô hình phân phối | Số đại lý mục tiêu (N5) | Tiêu chí lựa chọn |
|---------|-------------------|------------------------|--------------------|
| TP.HCM và vùng ĐNB | Trực tiếp + đại lý | 5–8 | Kho > 200 m², đội ngũ kỹ thuật ≥ 3 người |
| Hà Nội và miền Bắc | Đại lý cấp 1 | 3–5 | Kinh nghiệm ≥ 5 năm ngành tự động hóa |
| Miền Trung (Đà Nẵng) | Đại lý cấp 1 | 2 | Phủ sóng từ Huế đến Quy Nhơn |
| Đồng bằng sông Cửu Long | Đại lý cấp 2 | 3–4 | Mạng lưới KCN chế biến thủy sản |
| ASEAN (Thailand, Indonesia) | Xuất khẩu + distributor | 2–3 | Giấy phép nhập khẩu, hỗ trợ sau bán hàng |

> **Mục tiêu N5:** mạng lưới 15–22 đối tác, phủ sóng toàn quốc và 2–3 thị trường ASEAN, đóng góp tổng doanh thu 12.000K USD [C].

"""
if marker_m in content:
    content = content.replace(marker_m, block_m + marker_m, 1)
    inserted.append('M.11')

# ── N.9: Organization chart and reporting lines ────────────────────
marker_n = '---\n\n## Phụ lục O:'
block_n = """\
### N.9. Sơ đồ Tổ chức và Tuyến Báo cáo (130 nhân sự) [C]

#### N.9.1. Cơ cấu tổ chức cấp cao

```
                          ┌─────────────┐
                          │  Tổng Giám đốc │
                          │    (CEO)     │
                          └──────┬──────┘
            ┌─────────┬─────────┼─────────┬──────────┬──────────┐
       ┌────┴───┐ ┌───┴────┐ ┌─┴──────┐ ┌┴───────┐ ┌┴────────┐ ┌┴───────┐
       │GĐ Sản  │ │GĐ Kỹ  │ │GĐ Kinh │ │GĐ Tài  │ │GĐ Nhân  │ │ CTO    │
       │ xuất   │ │ thuật  │ │ doanh  │ │ chính  │ │  sự     │ │        │
       └───┬────┘ └───┬────┘ └───┬────┘ └───┬────┘ └───┬─────┘ └───┬────┘
       35 người   25 người   20 người   10 người   8 người    32 người
```

#### N.9.2. Phân bổ nhân sự theo bộ phận

| Bộ phận | Trưởng bộ phận | Số nhân sự | Span of Control | Báo cáo trực tiếp lên |
|---------|---------------|-----------|----------------|---------------------|
| Sản xuất CNC | Quản đốc xưởng CNC | 18 | 1:9 | GĐ Sản xuất |
| Sản xuất Điện tử | Quản đốc xưởng ĐT | 12 | 1:6 | GĐ Sản xuất |
| QA/QC | Trưởng phòng QC | 5 | 1:5 | GĐ Sản xuất |
| Kỹ thuật Cơ khí | Trưởng nhóm CNC | 8 | 1:8 | GĐ Kỹ thuật |
| Kỹ thuật Điện tử | Trưởng nhóm ĐT | 7 | 1:7 | GĐ Kỹ thuật |
| Bảo trì & M&E | Trưởng nhóm bảo trì | 6 | 1:6 | GĐ Kỹ thuật |
| Phòng thí nghiệm | Trưởng phòng Lab | 4 | 1:4 | GĐ Kỹ thuật |
| Kinh doanh trong nước | Trưởng phòng KD | 10 | 1:10 | GĐ Kinh doanh |
| Kinh doanh xuất khẩu | Trưởng nhóm XK | 6 | 1:6 | GĐ Kinh doanh |
| Marketing | Trưởng nhóm MKT | 4 | 1:4 | GĐ Kinh doanh |
| Kế toán & Tài chính | Kế toán trưởng | 6 | 1:6 | GĐ Tài chính |
| Mua hàng & Logistics | Trưởng phòng mua hàng | 4 | 1:4 | GĐ Tài chính |
| Nhân sự & Hành chính | Trưởng phòng HC-NS | 5 | 1:5 | GĐ Nhân sự |
| An toàn & Môi trường | Chuyên viên HSE | 3 | 1:3 | GĐ Nhân sự |
| R&D phần mềm | Trưởng nhóm SW | 15 | 1:5 (3 team) | CTO |
| R&D phần cứng | Trưởng nhóm HW | 10 | 1:5 (2 team) | CTO |
| IT & Hạ tầng số | Trưởng nhóm IT | 7 | 1:7 | CTO |
| **Tổng** | — | **130** | **TB 1:6** | — |

#### N.9.3. Tỷ lệ quản lý chủ chốt

| Chỉ tiêu | Giá trị | Benchmark ngành |
|----------|---------|----------------|
| Tổng quản lý cấp cao (C-suite) | 6 | 5–7 |
| Tổng quản lý cấp trung | 18 | 15–20 |
| Tỷ lệ nhân viên trực tiếp sản xuất | 54% (70/130) | 50–60% |
| Tỷ lệ nhân viên R&D | 19% (25/130) | 15–25% (high-tech) |
| Tỷ lệ nhân viên gián tiếp | 27% (35/130) | 25–35% |
| Span of control trung bình | 1:6 | 1:5 – 1:8 |

"""
if marker_n in content:
    content = content.replace(marker_n, block_n + marker_n, 1)
    inserted.append('N.9')

# ── O.12: Calibration management program ──────────────────────────
marker_o = '---\n\n## Phụ lục P:'
block_o = """\
### O.12. Chương trình Quản lý Hiệu chuẩn Thiết bị

#### O.12.1. Danh mục thiết bị đo lường cần hiệu chuẩn

| STT | Thiết bị | Số lượng | Chu kỳ hiệu chuẩn | Nội bộ/Bên ngoài | Truy nguyên đến |
|-----|---------|---------|-------------------|-----------------|----------------|
| 1 | CMM (Coordinate Measuring Machine) | 2 | 12 tháng | Bên ngoài | ISO 10360-2, NIST |
| 2 | Micrometer (bộ 0–150 mm) | 20 bộ | 12 tháng | Nội bộ | Block gauge ISO 3650 |
| 3 | Caliper (digital 0–300 mm) | 30 cái | 12 tháng | Nội bộ | Block gauge |
| 4 | Đồng hồ so (Dial indicator) | 15 cái | 12 tháng | Nội bộ | Master gauge |
| 5 | Máy đo độ nhám (Roughness tester) | 3 | 12 tháng | Bên ngoài | PTN chuẩn quốc gia |
| 6 | Máy đo độ cứng (Hardness tester) | 2 | 12 tháng | Bên ngoài | HRC/HRB standard block |
| 7 | Oscilloscope (≥ 500 MHz) | 5 | 24 tháng | Bên ngoài | NIST traceable |
| 8 | DMM (Digital Multimeter) | 15 | 12 tháng | Nội bộ | Reference standard |
| 9 | Thermometer công nghiệp | 10 | 12 tháng | Nội bộ | ITS-90 traceable |
| 10 | Force gauge (đo lực) | 5 | 12 tháng | Bên ngoài | Dead weight standard |
| 11 | Torque wrench (cờ-lê lực) | 8 | 6 tháng | Nội bộ | Reference transducer |
| 12 | Máy đo quang phổ | 2 | 12 tháng | Bên ngoài | SRM (NIST) |

#### O.12.2. Chi phí hiệu chuẩn hàng năm

| Hạng mục | Số lượng thiết bị | Chi phí đơn vị TB (USD) | Tổng (USD/năm) |
|----------|------------------|------------------------|----------------|
| Hiệu chuẩn bên ngoài (phòng LAB accredited) | ~25 | 120–450 | 6.800 |
| Hiệu chuẩn nội bộ (nhân viên + chuẩn đối chiếu) | ~85 | 15–30 | 1.700 |
| Mua sắm chuẩn đối chiếu (block gauge, ref std) | — | — | 2.500 |
| Đào tạo nhân viên hiệu chuẩn | 3 người | 500/người | 1.500 |
| **Tổng chi phí hiệu chuẩn/năm** | | | **12.500** |

#### O.12.3. Quy trình và truy nguyên

- **Phòng hiệu chuẩn nội bộ:** đạt ISO/IEC 17025 (mục tiêu N3), diện tích 25 m² có kiểm soát nhiệt độ 20 ± 1°C
- **Truy nguyên:** tất cả chuẩn đối chiếu được hiệu chuẩn bởi QUATEST 3 hoặc phòng LAB được Bộ KH&CN công nhận
- **Phần mềm quản lý:** module Calibration trong hệ thống MES, tự động cảnh báo trước 30 ngày khi đến hạn
- **Nhãn hiệu chuẩn:** dán sticker xanh (ĐẠT), vàng (HẠN CHẾ), đỏ (KHÔNG SỬ DỤNG) trên mỗi thiết bị

"""
if marker_o in content:
    content = content.replace(marker_o, block_o + marker_o, 1)
    inserted.append('O.12')

# ── P.8: Business continuity plan (BCP) ───────────────────────────
marker_p = '---\n\n## Phụ lục Q:'
block_p = """\
### P.8. Tóm tắt Kế hoạch Liên tục Kinh doanh (BCP)

#### P.8.1. Quy trình trọng yếu và mục tiêu phục hồi

| Quy trình | Mức độ trọng yếu | RTO (Recovery Time Objective) | RPO (Recovery Point Objective) | Ảnh hưởng nếu gián đoạn |
|-----------|-----------------|-------------------------------|-------------------------------|------------------------|
| Sản xuất CNC (10 máy) | Critical | 24 giờ | 4 giờ | Mất doanh thu 30K USD/ngày |
| Sản xuất điện tử SMT | Critical | 24 giờ | 4 giờ | Mất doanh thu 20K USD/ngày |
| Hệ thống ERP/MES | High | 8 giờ | 1 giờ | Mất kiểm soát sản xuất, kho |
| Hệ thống BMS/SCADA | High | 4 giờ | Real-time | Rủi ro môi trường, thiết bị |
| Email & Communication | Medium | 12 giờ | 24 giờ | Chậm phản hồi khách hàng |
| Chuỗi cung ứng (mua hàng) | High | 48 giờ | 24 giờ | Thiếu nguyên vật liệu |
| Tài chính & Kế toán | Medium | 72 giờ | 24 giờ | Chậm thanh toán, báo cáo |

#### P.8.2. Phương án dự phòng

| Kịch bản rủi ro | Xác suất | Biện pháp BCP | Chi phí dự phòng (USD/năm) |
|-----------------|---------|--------------|---------------------------|
| Mất điện kéo dài > 2h | Trung bình | UPS 30 phút + máy phát diesel 500 kVA | 18.000 (nhiên liệu + bảo trì) |
| Cháy/nổ một khu vực | Thấp | Phòng cháy tự động + sơ tán + bảo hiểm | 45.000 (bảo hiểm) |
| Server/IT hỏng | Trung bình | Backup cloud hàng ngày + DR site | 22.000 |
| Dịch bệnh (lockdown) | Thấp | WFH cho 27% nhân viên gián tiếp + dự trữ NVL 30 ngày | 5.000 |
| Thiên tai (ngập) | Thấp | Nền nhà máy +0,8 m + bơm thoát nước | 3.000 |
| Gián đoạn nhà cung cấp chính | Trung bình | Dual sourcing cho nhóm A + safety stock 45 ngày | 15.000 |

#### P.8.3. Lịch diễn tập BCP hàng năm

| Quý | Nội dung diễn tập | Phạm vi | Thời lượng | Đơn vị chủ trì |
|-----|-------------------|---------|------------|---------------|
| Q1 | Diễn tập PCCC + sơ tán | Toàn nhà máy (130 người) | 2 giờ | HSE + BQL KCNC |
| Q2 | Diễn tập IT Disaster Recovery | Server, ERP, backup | 4 giờ | IT + CTO |
| Q3 | Diễn tập gián đoạn chuỗi cung ứng | Mua hàng, kho, sản xuất | 1 ngày (tabletop) | GĐ Sản xuất |
| Q4 | Diễn tập tổng hợp (Full BCP) | Toàn công ty | 1 ngày | CEO + Ban giám đốc |

> **Chi phí BCP hàng năm:** ~108.000 USD, tương đương 0,9% doanh thu N5+ (12.000K [C]). Bảo đảm DSCR ≥ 1,50x [C] không bị ảnh hưởng bởi sự cố đơn lẻ.

"""
if marker_p in content:
    content = content.replace(marker_p, block_p + marker_p, 1)
    inserted.append('P.8')

# ── Q.10: Logistics and warehousing plan ──────────────────────────
marker_q = '---\n\n## Phụ lục R:'
block_q = """\
### Q.10. Kế hoạch Logistics và Kho vận

#### Q.10.1. Luồng hàng hóa đầu vào / đầu ra

| Luồng | Loại hàng | Khối lượng ước tính (tấn/tháng) | Phương thức vận chuyển | Nhà cung cấp dịch vụ |
|-------|----------|--------------------------------|----------------------|---------------------|
| Inbound — NVL CNC | Thép, nhôm, composite, carbide | 25–35 | Xe tải + container 20ft | Nội địa + nhập khẩu |
| Inbound — Linh kiện ĐT | IC, PCB, passive, connector | 3–5 | Air freight + courier | Nhập khẩu (Nhật, Đức, TQ) |
| Inbound — Vật tư phụ | Dầu cắt, hóa chất, bao bì | 8–12 | Xe tải nội địa | Nhà cung cấp địa phương |
| Outbound — Thành phẩm CNC | Chi tiết cơ khí chính xác | 20–30 | Xe tải + xuất khẩu container | 3PL + trực tiếp |
| Outbound — Thành phẩm IoT | Cảm biến, gateway, bộ điều khiển | 2–4 | Courier + xe tải nhẹ | 3PL (Kerry, Giao Hàng Nhanh) |

#### Q.10.2. So sánh 3PL vs. In-house

| Tiêu chí | 3PL (thuê ngoài) | In-house (tự vận hành) | Quyết định Mekong |
|----------|-----------------|----------------------|-------------------|
| Chi phí cố định | Thấp (biến phí) | Cao (xe, kho, nhân sự) | 3PL cho outbound |
| Kiểm soát chất lượng | Trung bình | Cao | In-house cho inbound NVL nhạy cảm |
| Linh hoạt mở rộng | Cao | Thấp | 3PL cho peak season |
| Lead time nội địa | 1–3 ngày | 1–2 ngày | In-house cho khách hàng VIP |
| Xuất khẩu | Chuyên nghiệp | Cần đầu tư | 3PL cho xuất khẩu |

#### Q.10.3. Quy cách đóng gói theo sản phẩm

| Sản phẩm | Đóng gói sơ cấp | Đóng gói thứ cấp | Pallet | Yêu cầu đặc biệt |
|----------|-----------------|------------------|--------|------------------|
| Chi tiết CNC (< 5 kg) | Túi PE chống tĩnh điện + VCI | Thùng carton 5 lớp | EUR pallet 1,2×0,8 m | Chống rung, chống ẩm |
| Chi tiết CNC (5–50 kg) | Dầu chống gỉ + giấy VCI | Thùng gỗ/ván ép | EUR pallet | Đệm foam, đai nẹp |
| Cảm biến IoT | ESD bag + bubble wrap | Thùng carton + foam | — | Nhãn ESD, hút ẩm |
| Gateway BMS | Hộp giấy in + PE foam | Master carton 10 pcs | EUR pallet | Ký hiệu "Fragile" |
| PCBA (bán thành phẩm) | Khay chống tĩnh điện | ESD container | — | Kiểm soát nhiệt < 40°C |

#### Q.10.4. Chi phí logistics ước tính

| Hạng mục | Chi phí (USD/năm) | Tỷ lệ/doanh thu |
|----------|-------------------|-----------------|
| Vận chuyển inbound (NVL) | 95.000 | 0,8% |
| Vận chuyển outbound (thành phẩm) | 120.000 | 1,0% |
| Phí kho bãi bên ngoài (overflow) | 18.000 | 0,2% |
| Bao bì, đóng gói | 45.000 | 0,4% |
| Bảo hiểm hàng hóa vận chuyển | 12.000 | 0,1% |
| **Tổng chi phí logistics/năm** | **290.000** | **2,4%** |

> Chi phí logistics 2,4% doanh thu nằm trong benchmark ngành sản xuất high-tech ASEAN (2,0–3,5%).

"""
if marker_q in content:
    content = content.replace(marker_q, block_q + marker_q, 1)
    inserted.append('Q.10')

# ── R.10: Working capital management ──────────────────────────────
marker_r = '---\n\n## Phụ lục S:'
block_r = """\
### R.10. Quản lý Vốn lưu động (Working Capital)

#### R.10.1. Mục tiêu DSO/DIO/DPO

| Chỉ tiêu | Định nghĩa | Mục tiêu (N3+) | Benchmark ngành | Ghi chú |
|----------|-----------|----------------|----------------|---------|
| DSO (Days Sales Outstanding) | Kỳ thu tiền bình quân | 45 ngày | 40–60 ngày | Áp dụng chính sách tín dụng nghiêm ngặt |
| DIO (Days Inventory Outstanding) | Kỳ tồn kho bình quân | 50 ngày | 45–65 ngày | Kanban + JIT cho nhóm A |
| DPO (Days Payable Outstanding) | Kỳ thanh toán NCC | 35 ngày | 30–45 ngày | Đàm phán payment term ưu đãi |
| **CCC (Cash Conversion Cycle)** | **DSO + DIO − DPO** | **60 ngày** | **55–75 ngày** | **Mục tiêu giảm xuống 55 ngày (N5)** |

#### R.10.2. Tối ưu hóa chu kỳ tiền mặt (CCC)

| Biện pháp | Tác động lên CCC | Tiết kiệm ước tính (USD/năm) | Thời điểm triển khai |
|-----------|------------------|------------------------------|---------------------|
| Factoring cho hóa đơn xuất khẩu | Giảm DSO 5–10 ngày | 15.000–25.000 | N2 |
| Consignment stock với NCC lớn | Giảm DIO 5–8 ngày | 20.000–35.000 | N3 |
| Dynamic discounting (trả sớm lấy CK) | Giảm DPO trade-off | 8.000–12.000 (chiết khấu nhận) | N2 |
| Cải thiện dự báo nhu cầu (AI) | Giảm DIO 3–5 ngày | 10.000–18.000 | N4 |
| E-invoicing tự động đối soát | Giảm DSO 2–3 ngày | 5.000–8.000 | N2 |

#### R.10.3. Kế hoạch Factoring (Bao thanh toán)

| Thông số | Chi tiết |
|----------|---------|
| Đối tác factoring | Ngân hàng thương mại hoặc công ty tài chính (VietinBank, MB factorying) |
| Hạn mức factoring | 500.000–1.000.000 USD (tăng theo doanh thu) |
| Phí factoring | 1,5–2,5% giá trị hóa đơn |
| Thời gian ứng vốn | T+2 sau khi nộp hóa đơn hợp lệ |
| Tỷ lệ ứng trước | 80–85% giá trị hóa đơn |
| Loại factoring | Non-recourse cho khách hàng có xếp hạng tín dụng tốt |

#### R.10.4. Dự phóng vốn lưu động 5 năm

| Năm | Doanh thu (K USD) | Vốn lưu động cần (K USD) | CCC (ngày) | WC/Revenue (%) |
|-----|-------------------|-------------------------|-----------|---------------|
| N1 | 2.500 | 450 | 65 | 18,0% |
| N2 | 5.500 | 880 | 62 | 16,0% |
| N3 | 8.500 | 1.190 | 58 | 14,0% |
| N4 | 10.500 | 1.365 | 55 | 13,0% |
| N5 | 12.000 [C] | 1.440 | 55 | 12,0% |

> Tỷ lệ WC/Revenue giảm từ 18% (N1) xuống 12% (N5) nhờ tối ưu CCC, đảm bảo DSCR ≥ 1,50x [C] và thanh khoản cho hoạt động.

"""
if marker_r in content:
    content = content.replace(marker_r, block_r + marker_r, 1)
    inserted.append('R.10')

# ── Write & report ─────────────────────────────────────────────────
with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)

after = content.count(chr(10))
print(f'Batch 40 complete.')
print(f'Inserted sections: {", ".join(inserted)} ({len(inserted)} sections)')
print(f'Lines before: {before}')
print(f'Lines after:  {after}')
print(f'Lines added:  {after - before}')
