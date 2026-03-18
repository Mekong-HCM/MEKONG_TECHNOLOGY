# -*- coding: utf-8 -*-
"""Batch 41 — Fourth-pass S through Y: insert new subsections."""

filepath = r'c:\Users\Dell M4800\Downloads\DE_AN_MEKONG\DE_AN_MEKONG_V3\sections\PHU_LUC.md'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

before = content.count(chr(10))
inserted = []

# ── S.12: Tax incentive detail ─────────────────────────────────────
marker_s = '---\n\n## Phụ lục T:'
block_s = """\
### S.12. Chi tiết Ưu đãi Thuế tại KCNC (SHTP)

#### S.12.1. Lịch trình miễn/giảm thuế TNDN (CIT)

| Giai đoạn | Năm | Thuế suất CIT | Ưu đãi | Cơ sở pháp lý |
|-----------|-----|--------------|--------|---------------|
| Miễn thuế hoàn toàn | N1–N4 | 0% | Miễn 4 năm kể từ năm có thu nhập chịu thuế | NĐ 218/2013/NĐ-CP, QĐ KCNC |
| Giảm 50% | N5–N13 | 5% (= 50% × 10%) | Giảm 9 năm tiếp theo, áp dụng thuế suất ưu đãi 10% | Luật Thuế TNDN, QĐ KCNC |
| Thuế suất ưu đãi | N14–N15 | 10% | Thuế suất ưu đãi 10% trong suốt đời dự án | Luật CNC 2008, NĐ 218/2013 |
| **Thuế suất thông thường (nếu không ưu đãi)** | — | **20%** | — | — |

#### S.12.2. Ưu đãi thuế VAT

| Hạng mục | Ưu đãi | Điều kiện | Giá trị ước tính (USD/năm) |
|----------|--------|-----------|---------------------------|
| Hoàn VAT thiết bị nhập khẩu | Hoàn 10% VAT | Thiết bị tạo TSCĐ, lần đầu nhập | 220.000 (năm nhập khẩu) |
| Hoàn VAT nguyên liệu XK | Hoàn 10% VAT | Sản phẩm xuất khẩu ≥ 80% | 85.000/năm (từ N3) |
| Miễn thuế nhập khẩu thiết bị | 0% thuế NK | Danh mục KCNC, chưa SX trong nước | 440.000 (tiết kiệm 1 lần) |

#### S.12.3. Ưu đãi thuế TNCN cho nhân sự công nghệ cao

| Đối tượng | Ưu đãi | Điều kiện | Số lượng áp dụng |
|-----------|--------|-----------|-----------------|
| Chuyên gia nước ngoài | Giảm 50% thuế TNCN trong 5 năm | Chứng chỉ chuyên môn, hợp đồng ≥ 1 năm | 3–5 người |
| Nhân viên R&D có bằng ThS/TS | Miễn thuế TNCN phần thu nhập từ chuyển giao công nghệ | Đề tài nghiên cứu được KCNC phê duyệt | 8–12 người |
| Cán bộ quản lý cấp cao | Khấu trừ chi phí nhà ở, di chuyển | Hợp đồng ≥ 3 năm | 6 người (C-suite) |

#### S.12.4. Tổng giá trị tiết kiệm thuế 15 năm

| Loại ưu đãi | Tiết kiệm 15 năm (K USD) | Phương pháp tính |
|-------------|--------------------------|-----------------|
| CIT (miễn + giảm + ưu đãi) | 3.800 | So sánh thuế suất 20% vs thực tế |
| VAT hoàn (nhập khẩu + xuất khẩu) | 1.050 | Tích lũy hoàn thuế 15 năm |
| Miễn thuế nhập khẩu thiết bị | 440 | Một lần khi đầu tư |
| Ưu đãi TNCN (ước tính) | 210 | Tổng giảm TNCN cho nhân sự ưu đãi |
| **Tổng tiết kiệm thuế 15 năm** | **5.500** | **Đóng góp ~78% giá trị chiến lược 7.000K [C]** |

> Ưu đãi thuế là yếu tố then chốt cải thiện NPV từ 1.500K [C] thành mức hấp dẫn cho nhà đầu tư, đảm bảo IRR 13,0% [C] > WACC 12% [C].

"""
if marker_s in content:
    content = content.replace(marker_s, block_s + marker_s, 1)
    inserted.append('S.12')

# ── T.11: Product costing model ────────────────────────────────────
marker_t = '---\n\n## Phụ lục U:'
block_t = """\
### T.11. Mô hình Giá thành Sản phẩm (Product Costing)

#### T.11.1. Cấu trúc giá thành sản phẩm

| Thành phần | Tỷ trọng trung bình | Mô tả |
|-----------|--------------------|----|
| Nguyên vật liệu trực tiếp | 35–45% | Thép, nhôm, IC, PCB, linh kiện |
| Nhân công trực tiếp | 12–18% | Thợ CNC, kỹ thuật viên lắp ráp, QC |
| Chi phí sản xuất chung (overhead) | 15–20% | Điện, bảo trì, khấu hao, vật tư phụ |
| Chi phí quản lý & bán hàng | 8–12% | Lương gián tiếp, marketing, logistics |
| **Biên lợi nhuận gộp mục tiêu** | **~30% [C]** | **EBITDA ~30% từ N3+** |

#### T.11.2. Giá thành mục tiêu vs thực tế theo 6 sản phẩm chính

| Sản phẩm | Giá bán (USD) | Giá thành mục tiêu (USD) | Biên mục tiêu (%) | NVL (%) | Nhân công (%) | Overhead (%) |
|----------|-------------|------------------------|-------------------|---------|--------------|-------------|
| Chi tiết CNC chính xác (đơn chiếc) | 120 | 78 | 35% | 40% | 18% | 20% |
| Chi tiết CNC (series 100+) | 65 | 42 | 35% | 38% | 15% | 18% |
| Cảm biến IoT công nghiệp | 185 | 120 | 35% | 45% | 12% | 15% |
| Gateway BMS | 450 | 295 | 34% | 42% | 14% | 16% |
| Bộ điều khiển SCADA module | 850 | 560 | 34% | 44% | 13% | 17% |
| PCBA (gia công lắp ráp) | 25/board | 18/board | 28% | 35% | 20% | 17% |

#### T.11.3. Phân tích phương sai giá thành (Variance Analysis)

| Loại phương sai | Công thức | Ngưỡng cảnh báo | Tần suất review |
|----------------|----------|-----------------|----------------|
| Material Price Variance | (Giá thực − Giá chuẩn) × SL thực | ≥ 5% | Hàng tháng |
| Material Usage Variance | (SL thực − SL chuẩn) × Giá chuẩn | ≥ 3% | Hàng tuần |
| Labor Rate Variance | (Rate thực − Rate chuẩn) × Giờ thực | ≥ 5% | Hàng tháng |
| Labor Efficiency Variance | (Giờ thực − Giờ chuẩn) × Rate chuẩn | ≥ 8% | Hàng tuần |
| Overhead Spending Variance | OH thực − OH ngân sách | ≥ 10% | Hàng quý |

> Mục tiêu tổng biên lợi nhuận gộp ≥ 30% (EBITDA ~30% [C]) được kiểm soát qua hệ thống MES tự động tính giá thành theo từng lệnh sản xuất.

"""
if marker_t in content:
    content = content.replace(marker_t, block_t + marker_t, 1)
    inserted.append('T.11')

# ── U.11: IT infrastructure specification ─────────────────────────
marker_u = '---\n\n## Phụ lục V:'
block_u = """\
### U.11. Đặc tả Hạ tầng CNTT Nội bộ

#### U.11.1. Bố trí tủ rack server (Phòng Server nội bộ, 20 m²)

| Rack | Thiết bị | Số lượng | Mục đích | Công suất điện |
|------|---------|---------|---------|---------------|
| Rack 1 (42U) | Dell PowerEdge R750 | 3 | ERP, MES, Database | 3 × 1.100W |
| Rack 1 | Dell PowerEdge R650 | 2 | BMS, SCADA server | 2 × 800W |
| Rack 1 | NAS Synology RS3621xs+ | 1 | File server, backup | 500W |
| Rack 2 (42U) | Cisco Catalyst 9300 | 2 | Core switch L3 | 2 × 350W |
| Rack 2 | Cisco ISR 4351 | 1 | Router + VPN gateway | 450W |
| Rack 2 | FortiGate 200F | 1 | Firewall + IDS/IPS | 150W |
| Rack 2 | UPS APC SRT 10kVA | 1 | Dự phòng điện 30 phút | — |
| | **Tổng công suất IT** | | | **~8,5 kW** |

#### U.11.2. Topology mạng

| Lớp mạng | Thiết bị | Băng thông | Giao thức | Ghi chú |
|----------|---------|-----------|----------|---------|
| Core | Cisco 9300 Stack | 10 Gbps | OSPF, VLAN | Redundancy active-standby |
| Distribution | Cisco 9200L | 1 Gbps | VLAN, ACL | 4 switch cho 3 nhà xưởng + văn phòng |
| Access (văn phòng) | Cisco 9120AX (Wi-Fi 6) | 1 Gbps | WPA3-Enterprise | 12 AP cho 130 người |
| Access (xưởng) | Industrial switch IE-3300 | 1 Gbps | PROFINET, EtherNet/IP | Kết nối 10 CNC + 50 IoT node |
| WAN | Leased line VNPT + backup FPT | 200 Mbps + 100 Mbps | BGP | Dual ISP failover |
| OT Network | Isolated VLAN | 100 Mbps–1 Gbps | Modbus TCP, MQTT | Tách biệt IT-OT theo IEC 62443 |

#### U.11.3. Kiến trúc Disaster Recovery

| Thành phần | Primary (On-site) | DR (Off-site/Cloud) | RPO | RTO |
|-----------|-------------------|---------------------|-----|-----|
| ERP/MES Database | Dell R750 + SSD RAID 10 | Azure SQL Managed Instance | 1 giờ | 4 giờ |
| File server | NAS RAID 6 (48 TB) | Azure Blob Storage (archive) | 24 giờ | 8 giờ |
| Email (Microsoft 365) | Cloud-native | Built-in geo-redundancy | 0 | 0 |
| BMS/SCADA data | Local server + historian | Backup hàng ngày lên NAS | 4 giờ | 24 giờ |
| Source code | GitLab on-prem | GitHub Enterprise Cloud mirror | Real-time | 2 giờ |
| Backup tổng | Veeam Backup & Replication | Azure Backup Vault | 24 giờ | 8 giờ |

#### U.11.4. Chi phí hạ tầng IT hàng năm

| Hạng mục | Chi phí (USD/năm) |
|----------|-------------------|
| License phần mềm (Microsoft 365, ERP, MES) | 48.000 |
| Bảo trì phần cứng server/network | 12.000 |
| Internet (dual ISP) | 9.600 |
| Cloud services (Azure DR + backup) | 18.000 |
| Cybersecurity (FortiGuard, antivirus) | 8.500 |
| **Tổng chi phí IT/năm** | **96.100** |

"""
if marker_u in content:
    content = content.replace(marker_u, block_u + marker_u, 1)
    inserted.append('U.11')

# ── V.5: Document naming convention ───────────────────────────────
marker_v = '---\n\n## Phụ lục W:'
block_v = """\
### V.5. Quy ước Đặt tên Tài liệu và Chính sách Lưu trữ

#### V.5.1. Định dạng tên file

```
[MÃ_DỰ_ÁN]-[PHÂN_LOẠI]-[SỐ_THỨ_TỰ]-[MÔ_TẢ]-[PHIÊN_BẢN].[ĐUÔI]
```

**Ví dụ:**
- `MEK-FIN-001-Bao_cao_tai_chinh_Q1_2027-v2.0.pdf`
- `MEK-TECH-015-Ban_ve_layout_xuong_CNC-v1.3.dwg`
- `MEK-LEGAL-003-Giay_phep_dau_tu-v1.0.pdf`

#### V.5.2. Mã phân loại tài liệu

| Mã | Phân loại | Ví dụ |
|----|----------|-------|
| FIN | Tài chính, kế toán | Báo cáo tài chính, hóa đơn, ngân sách |
| TECH | Kỹ thuật, thiết kế | Bản vẽ, spec, quy trình sản xuất |
| LEGAL | Pháp lý | Giấy phép, hợp đồng, NDA |
| HR | Nhân sự | Hợp đồng lao động, đánh giá năng lực |
| QC | Chất lượng | Báo cáo kiểm tra, chứng nhận, CAPA |
| ENV | Môi trường, HSE | Báo cáo ĐTM, giám sát môi trường |
| PROC | Mua hàng | Đơn đặt hàng, hợp đồng NCC |
| MGMT | Quản lý chung | Biên bản họp, quyết định, memo |

#### V.5.3. Thời hạn lưu trữ theo loại tài liệu

| Loại tài liệu | Thời hạn lưu trữ | Cơ sở pháp lý | Hình thức |
|---------------|-------------------|---------------|----------|
| Chứng từ kế toán | 10 năm | Luật Kế toán 2015 | Bản cứng + scan |
| Hợp đồng thương mại | 10 năm sau hết hiệu lực | Bộ luật Dân sự 2015 | Bản cứng + PDF ký số |
| Hồ sơ nhân sự | 10 năm sau nghỉ việc | Bộ luật Lao động 2019 | Bản cứng + hệ thống HR |
| Báo cáo ĐTM | Vĩnh viễn | Luật BVMT 2020 | Bản cứng + PDF |
| Bản vẽ kỹ thuật | 15 năm (đời dự án) | Nội quy công ty | DWG + PDF trên PLM |
| Chứng nhận CE/UL/ISO | 5 năm sau hết hạn | Yêu cầu tái chứng nhận | PDF + bản gốc |
| Biên bản họp | 5 năm | Nội quy công ty | PDF |
| Email quan trọng | 3 năm | Nội quy công ty | Archive trên M365 |

#### V.5.4. Nền tảng lưu trữ số và backup

| Nền tảng | Mục đích | Dung lượng | Backup | Chi phí (USD/năm) |
|----------|---------|-----------|--------|-------------------|
| SharePoint Online | Tài liệu làm việc hàng ngày | 25 TB | Built-in (Microsoft) | Bao gồm trong M365 |
| NAS on-site (RAID 6) | File server, bản vẽ CAD/CAM | 48 TB | Veeam → Azure Blob | 2.400 (điện + bảo trì) |
| Azure Blob Archive | Lưu trữ dài hạn (cold storage) | 10 TB | Geo-redundant | 600 |
| Hệ thống PLM (Teamcenter) | Quản lý bản vẽ + phiên bản | 5 TB | Daily backup | 12.000 (license) |

"""
if marker_v in content:
    content = content.replace(marker_v, block_v + marker_v, 1)
    inserted.append('V.5')

# ── W.8: Benchmark comparison ─────────────────────────────────────
marker_w = '---\n\n## Phụ lục X:'
block_w = """\
### W.8. So sánh Benchmark: Mekong vs Doanh nghiệp Tương đương tại SHTP/KCNC

#### W.8.1. Bảng so sánh tổng quan

| Chỉ tiêu | Mekong (V3) | Công ty A (Điện tử FDI, SHTP) | Công ty B (CNC nội địa, SHTP) | Công ty C (IoT startup, KCNC ĐN) | Công ty D (Cơ khí chính xác, KCX Tân Thuận) |
|----------|-------------|-------------------------------|-------------------------------|----------------------------------|---------------------------------------------|
| CAPEX (M USD) | 22,00 [C] | 35,00 | 12,00 | 8,00 | 18,00 |
| Diện tích (m²) | 6.664 [C] | 12.000 | 4.500 | 2.000 | 8.000 |
| Nhân sự (người) | 130 [C] | 450 | 80 | 45 | 200 |
| Doanh thu N5 (M USD) | 12,00 [C] | 50,00 | 6,50 | 3,00 | 15,00 |
| CAPEX/nhân sự (K USD) | 169 | 78 | 150 | 178 | 90 |
| DT/nhân sự (K USD) | 92 | 111 | 81 | 67 | 75 |
| DT/m² (USD) | 1.801 | 4.167 | 1.444 | 1.500 | 1.875 |

#### W.8.2. So sánh chỉ tiêu tài chính

| Chỉ tiêu | Mekong | Công ty A | Công ty B | Công ty C | Công ty D | TB ngành |
|----------|--------|----------|----------|----------|----------|---------|
| IRR | 13,0% [C] | 18,5% | 11,2% | 22,0% | 14,5% | 15,0% |
| NPV (M USD) | 1,50 [C] | 8,20 | 0,45 | 1,80 | 2,10 | — |
| EBITDA margin | ~30% [C] | 25% | 18% | 35% | 22% | 25% |
| DSCR | ≥ 1,50x [C] | 2,20x | 1,35x | N/A (no debt) | 1,80x | 1,60x |
| Payback period | 7,5 năm | 5,2 năm | 8,8 năm | 4,0 năm | 6,5 năm | 6,5 năm |
| Equity ratio | 81,8% [C] | 60% | 70% | 100% | 55% | 65% |

#### W.8.3. So sánh năng lực công nghệ

| Tiêu chí | Mekong | Công ty A | Công ty B | Công ty C | Công ty D |
|----------|--------|----------|----------|----------|----------|
| CNC 5 trục | 10 máy [C] | 0 | 3 máy | 0 | 6 máy |
| Phòng sạch | Có (Class 10K) | Có (Class 1K) | Không | Có (Class 100K) | Không |
| Sản phẩm IoT tự phát triển | Có | Không (gia công) | Không | Có | Không |
| Chứng nhận ISO 9001 | Mục tiêu N2 | Có | Có | Đang làm | Có |
| Chứng nhận ISO 14001 | Mục tiêu N2 | Có | Không | Không | Có |
| R&D in-house | 19% nhân sự | 8% | 5% | 40% | 3% |
| AI/ML integration | Có (N3+) | Có | Không | Có | Không |

#### W.8.4. Nhận xét

- **Mekong** nổi bật với mô hình 2 trụ cột (CNC + IoT) — hiếm có trong các doanh nghiệp cùng quy mô
- **CAPEX/nhân sự** cao nhất nhóm (169K) phản ánh mức đầu tư thiết bị chuyên sâu cho 10 máy CNC 5 trục [C]
- **Equity ratio 81,8% [C]** thuộc nhóm cao, giảm rủi ro tài chính và đảm bảo DSCR ≥ 1,50x [C]
- **EBITDA ~30% [C]** vượt trung bình ngành (25%), nhờ sản phẩm giá trị gia tăng cao và tỷ trọng R&D 19%

"""
if marker_w in content:
    content = content.replace(marker_w, block_w + marker_w, 1)
    inserted.append('W.8')

# ── X.12: Checklist hoàn thiện hồ sơ ─────────────────────────────
marker_x = '---\n\n## Phụ lục Y:'
block_x = """\
### X.12. Checklist Hoàn thiện Hồ sơ Trước khi Nộp (50 mục)

#### Nhóm A — Pháp lý (12 mục)

| # | Hạng mục | Trạng thái | Người phụ trách | Hạn hoàn thành |
|---|---------|-----------|----------------|---------------|
| A1 | Giấy chứng nhận đăng ký doanh nghiệp (bản công chứng) | ☐ | GĐ Pháp lý | T-30 ngày |
| A2 | Giấy chứng nhận đầu tư / IRC | ☐ | GĐ Pháp lý | T-30 ngày |
| A3 | Báo cáo ĐTM được phê duyệt | ☐ | Chuyên viên HSE | T-45 ngày |
| A4 | Phương án PCCC được phê duyệt | ☐ | Chuyên viên HSE | T-45 ngày |
| A5 | Giấy phép xây dựng | ☐ | GĐ Kỹ thuật | T-30 ngày |
| A6 | Hợp đồng thuê đất/nhà xưởng KCNC | ☐ | GĐ Pháp lý | T-30 ngày |
| A7 | NDA với đối tác công nghệ | ☐ | CTO | T-15 ngày |
| A8 | Hợp đồng mua máy CNC (LOI/PO) | ☐ | GĐ Sản xuất | T-20 ngày |
| A9 | Giấy xác nhận vốn điều lệ 18.000K [C] | ☐ | GĐ Tài chính | T-30 ngày |
| A10 | Cam kết vay 4.000K [C] từ ngân hàng | ☐ | GĐ Tài chính | T-30 ngày |
| A11 | Giấy phép hoạt động KCNC | ☐ | GĐ Pháp lý | T-15 ngày |
| A12 | Danh sách cổ đông và cơ cấu sở hữu | ☐ | GĐ Pháp lý | T-15 ngày |

#### Nhóm B — Kỹ thuật (14 mục)

| # | Hạng mục | Trạng thái | Người phụ trách | Hạn hoàn thành |
|---|---------|-----------|----------------|---------------|
| B1 | Bản vẽ layout tổng thể 3 công trình | ☐ | GĐ Kỹ thuật | T-20 ngày |
| B2 | Thiết kế M&E chi tiết | ☐ | Trưởng nhóm M&E | T-20 ngày |
| B3 | Danh mục máy móc thiết bị (CAPEX 22.000K [C]) | ☐ | GĐ Sản xuất | T-15 ngày |
| B4 | Spec kỹ thuật CNC 5 trục (10 máy [C]) | ☐ | Trưởng nhóm CNC | T-15 ngày |
| B5 | Thiết kế phòng sạch Class 10K | ☐ | GĐ Kỹ thuật | T-20 ngày |
| B6 | Sơ đồ hệ thống BMS/SCADA | ☐ | CTO | T-15 ngày |
| B7 | Lộ trình công nghệ 4.0 (15 năm) | ☐ | CTO | T-15 ngày |
| B8 | Danh mục sản phẩm IoT/Điện tử | ☐ | Trưởng nhóm ĐT | T-10 ngày |
| B9 | Quy trình sản xuất CNC (flowchart) | ☐ | Quản đốc CNC | T-10 ngày |
| B10 | Kế hoạch năng lượng và tiết kiệm điện | ☐ | Trưởng nhóm M&E | T-15 ngày |
| B11 | Hệ thống xử lý nước ZLD | ☐ | Chuyên viên HSE | T-15 ngày |
| B12 | Thiết kế datacenter nội bộ | ☐ | CTO | T-10 ngày |
| B13 | Kế hoạch IT và an ninh mạng | ☐ | Trưởng nhóm IT | T-10 ngày |
| B14 | Kế hoạch chứng nhận ISO/CE/UL | ☐ | Trưởng phòng QC | T-10 ngày |

#### Nhóm C — Tài chính (12 mục)

| # | Hạng mục | Trạng thái | Người phụ trách | Hạn hoàn thành |
|---|---------|-----------|----------------|---------------|
| C1 | Bảng phân bổ CAPEX chi tiết (22.000K [C]) | ☐ | GĐ Tài chính | T-15 ngày |
| C2 | Dự phóng doanh thu 15 năm (12.000K N5+ [C]) | ☐ | GĐ Kinh doanh | T-15 ngày |
| C3 | Bảng dòng tiền chi tiết 15 năm | ☐ | GĐ Tài chính | T-15 ngày |
| C4 | Tính toán NPV/IRR/WACC (1.500K/13,0%/12% [C]) | ☐ | GĐ Tài chính | T-10 ngày |
| C5 | Phân tích độ nhạy (3 kịch bản) | ☐ | GĐ Tài chính | T-10 ngày |
| C6 | Bảng giả định tài chính | ☐ | GĐ Tài chính | T-10 ngày |
| C7 | Kế hoạch trả nợ vay 4.000K [C] | ☐ | GĐ Tài chính | T-10 ngày |
| C8 | DSCR projection (≥ 1,50x [C]) | ☐ | GĐ Tài chính | T-10 ngày |
| C9 | Báo cáo kiểm toán 3 năm gần nhất | ☐ | Kế toán trưởng | T-30 ngày |
| C10 | Xác nhận số dư ngân hàng | ☐ | GĐ Tài chính | T-7 ngày |
| C11 | Hồ sơ thuế 3 năm gần nhất | ☐ | Kế toán trưởng | T-20 ngày |
| C12 | Bảng đối chiếu số liệu canonical | ☐ | GĐ Tài chính + QA | T-5 ngày |

#### Nhóm D — Môi trường và An toàn (12 mục)

| # | Hạng mục | Trạng thái | Người phụ trách | Hạn hoàn thành |
|---|---------|-----------|----------------|---------------|
| D1 | Báo cáo ĐTM đầy đủ | ☐ | Chuyên viên HSE | T-45 ngày |
| D2 | Kế hoạch quản lý chất thải | ☐ | Chuyên viên HSE | T-30 ngày |
| D3 | Phương án xử lý nước thải (ZLD) | ☐ | Chuyên viên HSE | T-30 ngày |
| D4 | Kế hoạch PCCC chi tiết | ☐ | Chuyên viên HSE | T-30 ngày |
| D5 | Đánh giá rủi ro an toàn lao động | ☐ | Chuyên viên HSE | T-20 ngày |
| D6 | Chương trình giám sát môi trường | ☐ | Chuyên viên HSE | T-20 ngày |
| D7 | Kế hoạch ứng phó sự cố hóa chất | ☐ | Chuyên viên HSE | T-15 ngày |
| D8 | Đăng ký sổ quản lý chất thải nguy hại | ☐ | Chuyên viên HSE | T-15 ngày |
| D9 | Hợp đồng thu gom chất thải | ☐ | Chuyên viên HSE | T-15 ngày |
| D10 | Huấn luyện ATVSLĐ (chứng chỉ) | ☐ | GĐ Nhân sự | T-10 ngày |
| D11 | Bảo hiểm trách nhiệm môi trường | ☐ | GĐ Tài chính | T-15 ngày |
| D12 | Cam kết BVMT với KCNC | ☐ | GĐ Pháp lý | T-10 ngày |

> **Tổng: 50 mục**. Mỗi mục cần ký xác nhận của Trưởng bộ phận và GĐ dự án trước khi đánh dấu hoàn thành. Hạn T = ngày nộp hồ sơ.

"""
if marker_x in content:
    content = content.replace(marker_x, block_x + marker_x, 1)
    inserted.append('X.12')

# ── Y.14: Post-certification maintenance plan ─────────────────────
# Y is the LAST appendix — insert before the final closing of the document
# Find end of Y section — look for last content
import re
# Insert before the very end — find last line of Y content
# We'll search for the last "---" that's at the very end or append before end
marker_y_end = None
# Find the Y.13 section end — which is before the closing "---" at end of file
# Let's find the last '---' in the file that closes appendix Y
last_triple_dash = content.rfind('\n---\n')
if last_triple_dash > 0:
    # Insert before this final ---
    block_y = """\
### Y.14. Kế hoạch Duy trì Chứng nhận Sau Cấp phép (15 năm)

#### Y.14.1. Lịch trình đánh giá giám sát hàng năm

| Chứng nhận | Chu kỳ tái chứng nhận | Đánh giá giám sát | Cơ quan đánh giá | Thời điểm |
|-----------|---------------------|--------------------|-----------------|----------|
| ISO 9001:2015 | 3 năm | Hàng năm (surveillance) | TÜV SÜD / BSI | Q1 hàng năm |
| ISO 14001:2015 | 3 năm | Hàng năm | TÜV SÜD / BSI | Q1 hàng năm |
| ISO 45001:2018 | 3 năm | Hàng năm | TÜV SÜD | Q2 hàng năm |
| CE Marking (sản phẩm IoT) | Không hết hạn (tự tuyên bố) | Audit nội bộ hàng năm | Nội bộ + Notified Body | Q3 hàng năm |
| UL Listing (sản phẩm điện tử) | Hàng năm | Factory inspection | UL LLC | Q2 hàng năm |
| IEC 62443 (cybersecurity) | 3 năm | Hàng năm | TÜV Rheinland | Q4 hàng năm |
| IATF 16949 (mục tiêu N5) | 3 năm | Hàng năm | TÜV SÜD | Q1 hàng năm |

#### Y.14.2. Chi phí duy trì chứng nhận hàng năm

| Chứng nhận | Phí đánh giá giám sát (USD/năm) | Phí tái chứng nhận (USD/3 năm) | Phí bình quân/năm (USD) |
|-----------|--------------------------------|-------------------------------|----------------------|
| ISO 9001 | 3.500 | 8.000 | 6.167 |
| ISO 14001 | 3.500 | 8.000 | 6.167 |
| ISO 45001 | 3.000 | 7.500 | 5.500 |
| CE Marking | 2.000 (audit nội bộ) | — | 2.000 |
| UL Listing | 5.000 | — | 5.000 |
| IEC 62443 | 4.000 | 10.000 | 7.333 |
| IATF 16949 (từ N5) | 5.000 | 12.000 | 9.000 |
| **Tổng** | | | **~41.200** |

#### Y.14.3. Chi phí duy trì nội bộ (đào tạo, chuẩn bị audit)

| Hạng mục | Chi phí (USD/năm) |
|----------|-------------------|
| Đào tạo Internal Auditor (2 người/năm) | 4.000 |
| Tư vấn bên ngoài (chuẩn bị tái chứng nhận) | 6.000 |
| Hiệu chuẩn thiết bị (phục vụ audit) | 5.000 |
| Cập nhật tài liệu hệ thống quản lý | 3.000 |
| Cải tiến liên tục (CAPA, corrective action) | 4.000 |
| **Tổng chi phí nội bộ/năm** | **22.000** |

#### Y.14.4. Tổng chi phí duy trì chứng nhận 15 năm

| Giai đoạn | Số chứng nhận | Chi phí/năm (USD) | Tổng giai đoạn (USD) |
|-----------|--------------|-------------------|--------------------|
| N1–N2 (xây dựng, chưa có cert) | 0 | 0 | 0 |
| N3–N4 (ISO cơ bản + CE + UL) | 5 | 48.000 | 96.000 |
| N5–N15 (đầy đủ 7 chứng nhận) | 7 | 63.200 | 695.200 |
| **Tổng 15 năm** | | | **791.200** |

> Chi phí duy trì chứng nhận 15 năm ~791K USD, tương đương 0,44% tổng doanh thu tích lũy. Đây là chi phí cần thiết để duy trì năng lực cạnh tranh và đáp ứng yêu cầu khách hàng FDI.

"""
    # Insert before the last ---
    insert_pos = last_triple_dash + 1  # after the \n
    content = content[:insert_pos] + block_y + content[insert_pos:]
    inserted.append('Y.14')

# ── Write & report ─────────────────────────────────────────────────
with open(filepath, 'w', encoding='utf-8', newline='') as f:
    f.write(content)

after = content.count(chr(10))
print(f'Batch 41 complete.')
print(f'Inserted sections: {", ".join(inserted)} ({len(inserted)} sections)')
print(f'Lines before: {before}')
print(f'Lines after:  {after}')
print(f'Lines added:  {after - before}')
