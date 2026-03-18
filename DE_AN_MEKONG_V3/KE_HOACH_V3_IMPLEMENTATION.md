# KẾ HOẠCH TRIỂN KHAI ĐỀ ÁN V3 (22M USD)
# ROADMAP — PLAN — CHECKLIST — IMPLEMENTATION

> Tài liệu này là **KẾ HOẠCH TỔNG THỂ** để chuyển đổi Đề án Mekong Technology từ Phương án gốc (32M, 3 trụ cột)
> sang Phương án V3 (22M, 2 trụ cột) — giữ nguyên độ sâu 300+ trang A4, chỉ điều chỉnh nội dung theo yêu cầu mới.
> Mỗi Chuyên gia (Agent) sẽ nhận Sprint cụ thể, hoàn thành độc lập, rồi tổng hợp vào MASTER V3.
> Cập nhật: 2026-03-16
> Tác giả: Giám Đốc Dự Án (Agent 1)

---

## MỤC LỤC

1. [Tổng quan Chuyển đổi](#1-tổng-quan-chuyển-đổi)
2. [Nguyên tắc Chuyển đổi](#2-nguyên-tắc-chuyển-đổi)
3. [Kiểm kê Input / Output](#3-kiểm-kê-input--output)
4. [Mapping Section Gốc → V3](#4-mapping-section-gốc--v3)
5. [Phân công Sprint theo Agent](#5-phân-công-sprint-theo-agent)
6. [Roadmap Tổng thể (4 Phase)](#6-roadmap-tổng-thể)
7. [Chi tiết từng Sprint](#7-chi-tiết-từng-sprint)
8. [Checklist Tổng hợp](#8-checklist-tổng-hợp)
9. [Quy trình QC sau mỗi Sprint](#9-quy-trình-qc)
10. [Rủi ro và Biện pháp](#10-rủi-ro-và-biện-pháp)

---
---

# 1. TỔNG QUAN CHUYỂN ĐỔI

## 1.1. Bảng So sánh Gốc vs V3

| Thông số | Đề án Gốc (32M) | Đề án V3 (22M) | Thay đổi |
|---|---|---|---|
| Tổng CAPEX | 32.000.000 USD | 22.000.000 USD | -31,3% |
| Số trụ cột | 3 (IoT/Robot + CNC + DC thương mại) | 2 (Điện tử + CNC) + DC nội bộ | Loại bỏ DC thương mại |
| Số máy CNC | 6 máy (4x5-trục + 2x3-trục) | 10 máy (5x5-trục + 3x3-trục + EDM + Grinder) | +67% tăng cường |
| Công trình | 1 tòa nhà 3 tầng, 7.000 m2 footprint | 3 công trình riêng biệt, 4.648 m2 footprint | Thiết kế mới |
| GFA | 21.000 m2 | 6.664 m2 | -68,3% |
| Datacenter | Thương mại (50 rack, GPU-aaS, colocation) | Nội bộ (5-8 rack, ERP/MES) | Giảm 84,4% CAPEX |
| CAPEX DC | 16.000.000 USD (50%) | 2.500.000 USD (11,4%) | -84,4% |
| Vốn CSH | 24.000.000 USD (75%) | 18.000.000 USD (81,8%) | -25% |
| Sản phẩm | 18 sản phẩm/dịch vụ | 14 sản phẩm/dịch vụ | Loại 6 SP DC, thêm 2 SP mới |
| Doanh thu steady | 21-23M USD/năm | 12M USD/năm | -43% (không có DC) |
| NPV (50Y) | 2,50M USD | 1,50M USD | -40% |
| IRR (50Y) | 14,5% | 13,0% | -1,5pp |
| Nhân sự ổn định | 120-150 | 100-130 | -16% |
| Số dòng tài liệu | 12.752 dòng | Mục tiêu: > 12.000 dòng | Giữ gần nguyên |

## 1.2. Nguyên tắc Cốt lõi

> **"Chỉ giảm sản phẩm DC, tăng cường các BU còn lại"** — CEO

1. **GIỮ NGUYÊN** toàn bộ nội dung IoT/BMS/Robot/SCADA — chỉ TĂNG CƯỜNG
2. **GIỮ NGUYÊN** toàn bộ nội dung CNC — chỉ TĂNG từ 6 lên 10 máy, tăng chi tiết
3. **LOẠI BỎ** nội dung DC thương mại (colocation, GPU-aaS, cloud, giấy phép viễn thông)
4. **THÊM** nội dung BMS/SCADA (MK-EIO, MK-DDC, MK-GW, MekongBMS)
5. **CHUYỂN** DC từ thương mại sang nội bộ (server room 5-8 rack)
6. **TĂNG CƯỜNG** chi tiết sản phẩm IoT: OEM/ODM, platform MekongOS
7. **ĐIỀU CHỈNH** toàn bộ tài chính theo CAPEX 22M (thay vì 32M)
8. **ĐIỀU CHỈNH** layout từ 1 tòa nhà 3 tầng → 3 công trình riêng biệt

---
---

# 2. NGUYÊN TẮC CHUYỂN ĐỔI

## 2.1. Cách xử lý từng loại nội dung

| Loại nội dung | Xử lý | Ví dụ |
|---|---|---|
| **Nội dung IoT/Robot/BMS** | GIỮ NGUYÊN + TĂNG CƯỜNG chi tiết | Thêm BMS/SCADA Modules, tăng số Gateway |
| **Nội dung CNC** | GIỮ NGUYÊN + NÂNG CẤP | 6 máy → 10 máy, thêm EDM + Grinder |
| **Nội dung DC thương mại** | XÓA hoàn toàn | GPU-aaS, colocation, Tier III, GP Viễn thông |
| **Nội dung DC nội bộ** | VIẾT MỚI (ngắn gọn) | 5-8 rack, ERP/MES, AI training |
| **Số liệu tài chính** | TÍNH LẠI toàn bộ | 22M CAPEX, NPV 1,50M, IRR 13,0% |
| **Layout** | THIẾT KẾ MỚI | 3 công trình riêng biệt |
| **Pháp lý** | ĐIỀU CHỈNH, đơn giản hóa | Bỏ GP Viễn thông, bỏ TCVN DC lớn |
| **Môi trường (EIA)** | ĐIỀU CHỈNH, đơn giản hóa | Bỏ cooling tower DC, giữ CNC ZLD |
| **Nhân sự** | ĐIỀU CHỈNH giảm | Bỏ team DC 30-40 người |
| **Phụ lục** | GIỮ CẤU TRÚC, điều chỉnh nội dung | 44 phụ lục → ~30 phụ lục (bỏ DC-only) |

## 2.2. Quy tắc 70-20-10

- **70% GIỮ NGUYÊN** từ đề án gốc (IoT, Robot, BMS, CNC, pháp lý chung, EIA chung)
- **20% ĐIỀU CHỈNH** (số liệu tài chính, nhân sự, layout, EIA bổ sung)
- **10% VIẾT MỚI** (DC nội bộ, BMS/SCADA chi tiết, so sánh V2 vs V3)

---
---

# 3. KIỂM KÊ INPUT / OUTPUT

## 3.1. Input (Nguồn)

| File | Vị trí | Số dòng | Vai trò |
|---|---|---:|---|
| MEKONG_DE_AN_Goc.md | DE_AN_MEKONG_V3/ | 12.752 | Đề án gốc (32M) — NGUỒN CHÍNH |
| MEKONG_DE_AN_V3_22M_MASTER.md | DE_AN_MEKONG_V3/ | 958 | Xương sống V3 đã tạo |
| YEU_CAU_GOC_V3.md | DE_AN_MEKONG_V3/ | ~130 | Ràng buộc CEO |
| SO_LIEU_CO_DINH_V3.md | DE_AN_MEKONG_V3/ | ~170 | Số liệu canonical |
| SO_SANH_V2_V3.md | DE_AN_MEKONG_V3/ | ~160 | So sánh V2 vs V3 |

## 3.2. Output Mục tiêu

| File | Số dòng mục tiêu | Ghi chú |
|---|---:|---|
| MEKONG_DE_AN_V3_22M_MASTER.md | > 12.000 | Tương đương ~300 trang A4 |

> **Tỷ lệ theo Rule 2:** Input gốc = 12.752 dòng. Output mục tiêu >= 60% = 7.651 dòng.
> Mục tiêu thực tế: **> 12.000 dòng** (>94% gốc) — bắt buộc đạt ngưỡng này.

## 3.3. Phân bổ Dòng theo Phần

| Phần | Dòng trong Gốc | Thực tế hiện tại | Dòng mục tiêu V3 | Tỷ lệ giữ | Còn thiếu |
|---|---:|---:|---:|---:|---:|
| Trang bìa + Mục lục + Thông tin DA | 282 | 322 | 350 | 124% | — đạt |
| Tóm tắt Điều hành | 268 | 195 | 280 | 104% | ~85 |
| Cơ sở Pháp lý | ~50 | 48 | 60 | 120% | ~12 |
| Phần I: Thị trường | 745 | 418 | 700 | 94% | ~282 |
| Phần II: Sản phẩm & CN | 1.543 | 734 | 1.600 | 104% | ~866 |
| Phần III: Mô hình KD | 711 | 530 | 650 | 91% | ~120 |
| Phần IV: Hạ tầng KT | 840 | 626 | 950 | 113% | ~324 |
| Phần V: Tài chính | 711 | 690 | 780 | 110% | ~90 |
| Phần VI: Pháp lý & MT | 407 | 331 | 400 | 98% | ~69 |
| Phần VII: Nhân sự | 318 | 255 | 320 | 101% | ~65 |
| Phần VIII: Kế hoạch | 276 | 228 | 280 | 101% | ~52 |
| Phần IX: Kết luận | 247 | 197 | 260 | 105% | ~63 |
| **Phụ lục A-W** | **6.354** | **1.288** | **5.870** | **92%** | **~4.582** |
| **TỔNG** | **12.752** | **~5.862** | **~12.500** | **98%** | **~6.138** |

---
---

# 4. MAPPING SECTION GỐC → V3

## 4.1. Trang bìa + Thông tin Dự án (Dòng 1-282 trong Gốc)

| Mục trong Gốc | Xử lý V3 | Chi tiết thay đổi |
|---|---|---|
| Trang bìa | ĐIỀU CHỈNH | 32M → 22M, 3 trụ cột → 2 trụ cột, GFA 21.000 → 6.664, loại "Điện toán Đám mây AI" |
| Mục lục | ĐIỀU CHỈNH | Cấu trúc tương tự, bỏ Section 1.5 (DC market), bỏ 2.4 (DC MACC), bỏ 4.2 (DC zone) |
| Thông tin Dự án | ĐIỀU CHỈNH | Số liệu mới, layout mới, sản phẩm 14 SP |
| Bảng Sản phẩm Tổng hợp | ĐIỀU CHỈNH | 18 SP → 14 SP, bỏ 6 SP DC (GPU, Colocation, SaaS cloud, PaaS, AI training, MekongSoft) |

## 4.2. Tóm tắt Điều hành (Dòng 283-550)

| Mục | Xử lý V3 | Chi tiết |
|---|---|---|
| Giới thiệu | ĐIỀU CHỈNH | 3 trụ cột → 2 trụ cột, thêm mô tả BMS/SCADA |
| Tầm nhìn Chiến lược (mindmap) | ĐIỀU CHỈNH | Bỏ nhánh MACC, tăng cường BMS |
| Lý do Mở rộng | ĐIỀU CHỈNH | Bỏ "Khoảng trống Hạ tầng Điện toán AI", giữ CNC gap |
| Sơ đồ Hệ sinh thái | ĐIỀU CHỈNH | Bỏ BU3 DC, thêm DC nội bộ nhỏ |
| Tóm tắt Tài chính | TÍNH LẠI | 22M CAPEX, cấu trúc mới |
| Giá trị Chiến lược | TÍNH LẠI | 15M → 7M, bỏ platform DC |
| Gantt chart | ĐIỀU CHỈNH | 4 phase thay vì 5, bỏ GP Viễn thông |
| Nhân sự | ĐIỀU CHỈNH | Bỏ cột Datacenter, giảm tổng |
| Cam kết | ĐIỀU CHỈNH | Bỏ cam kết GP Viễn thông, PUE, GHG DC |

## 4.3. Phần I: Bối cảnh và Thị trường (Dòng 602-1346)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| 1.1 Bối cảnh KT Toàn cầu | GIỮ 90% | Chỉ chỉnh Industry 4.0, bỏ xu hướng DC/cloud |
| 1.2 Bối cảnh VN và KCNC | GIỮ 95% | Giữ nguyên, rất ít liên quan DC |
| 1.3 Thị trường IoT và Robot | GIỮ 100% + TĂNG CƯỜNG | Thêm BMS/SCADA market data |
| 1.4 Thị trường CNC | GIỮ 100% + TĂNG CƯỜNG | Thêm benchmark 10 máy, tăng chi tiết FDI |
| 1.5 Thị trường DC và AI (!) | XÓA TOÀN BỘ | Đây là section chính cần loại bỏ |
| 1.6 Định vị Cạnh tranh | ĐIỀU CHỈNH | Bỏ so sánh với DC competitor, giữ CNC và IoT |

## 4.4. Phần II: Sản phẩm & Công nghệ (Dòng 1347-2889)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| 2.1 Tổng quan 3 Trụ cột | ĐIỀU CHỈNH → 2 trụ cột | Viết lại opening, bỏ DC là trụ cột |
| 2.2 Trụ cột 1 — IoT/Robot | GIỮ + TĂNG CƯỜNG | Thêm MK-EIO, MK-DDC, MK-GW, MekongBMS chi tiết |
| 2.3 Trụ cột 2 — CNC/MPMC | GIỮ + NÂNG CẤP 6→10 máy | Thêm 4 máy mới, thêm chi tiết Grinder, EDM |
| 2.4 Trụ cột 3 — DC/MACC (!) | XÓA TOÀN BỘ → thay bằng DC nội bộ (ngắn) | Khoảng 400-500 dòng gốc → 50-80 dòng V3 |
| 2.5 Hệ sinh thái Tích hợp | ĐIỀU CHỈNH 3→2 trụ cột | Giữ synergy CNC-Robot, bỏ DC synergy |
| 2.6 Lộ trình TRL | ĐIỀU CHỈNH | Bỏ TRL cho DC product, giữ IoT/CNC |
| 2.7 R&D | ĐIỀU CHỈNH | Bỏ R&D AI/HPC, tăng R&D BMS/firmware |

## 4.5. Phần III: Mô hình Kinh doanh (Dòng 2890-3600)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| 3.1 Tổng quan Mô hình Doanh thu | ĐIỀU CHỈNH | 3→2 trụ cột, bỏ DC revenue |
| 3.2 Khách hàng Mục tiêu | ĐIỀU CHỈNH | Bỏ segment GPU/cloud customer, tăng FDI CNC |
| 3.3 Chiến lược 3 giai đoạn | ĐIỀU CHỈNH | Bỏ giai đoạn DC ramp-up |
| 3.4 Kênh Phân phối | ĐIỀU CHỈNH nhẹ | Bỏ kênh DC, giữ IoT/CNC |

## 4.6. Phần IV: Hạ tầng Kỹ thuật (Dòng 3601-4440)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| 4.1 Layout Tổng mặt bằng | THIẾT KẾ MỚI | 1 tòa nhà → 3 công trình riêng biệt |
| 4.2 Khu vực Datacenter Tầng 2 (!) | XÓA → thay DC nội bộ | 50 rack → 5-8 rack |
| 4.3 Khu vực CNC Tầng 1 | GIỮ + NÂNG CẤP | 6 máy 800m2 → 10 máy 1.500m2 |
| 4.4 Khu vực IoT/Robot | GIỮ + ĐIỀU CHỈNH | Chuyển từ tầng trong tòa nhà → khu trong nhà xưởng |
| 4.5 Hệ thống Điện | TÍNH LẠI | 3 MVA → 1 MVA, bỏ phụ tải DC 2-4 MW |
| 4.6 Hệ thống Nước | ĐIỀU CHỈNH | Bỏ cooling tower DC, giữ CNC ZLD |
| 4.7 PCCC | ĐIỀU CHỈNH | Bỏ PCCC DC lớn, giữ CNC + VP + DC nhỏ |
| 4.8 An toàn Lao động | GIỮ 90% | Nhẹ giảm (bỏ phần DC) |

## 4.7. Phần V: Tài chính (Dòng 4441-5151)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| 5.1-5.17 (17 sub-sections) | TÍNH LẠI TOÀN BỘ | Mọi con số phải tính lại theo 22M, 2 trụ cột |
| Ghi chú | V3 MASTER đã có backbone | Cần bổ sung 5.10-5.17 (7 sub-sections mới) |

## 4.8. Phần VI: Pháp lý & MT (Dòng 5152-5558)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| 6.1 Khung Pháp lý | ĐIỀU CHỈNH | Bỏ Luật Viễn thông 2023, bỏ QC DC |
| 6.2 Pháp lý 3 trụ cột → 2 | ĐIỀU CHỈNH | Bỏ phần pháp lý DC thương mại |
| 6.3 Chiến lược Định vị | ĐIỀU CHỈNH | Đơn giản hóa (bỏ pháp lý DC) |
| 6.4 Lộ trình 18 GP → ~12 GP | ĐIỀU CHỈNH | Bỏ 5-6 GP liên quan DC thương mại |
| 6.5 ĐTM | ĐIỀU CHỈNH | Bỏ ĐTM DC (cooling, GHG lớn), giữ CNC |
| 6.6 Cam kết BVMT | ĐIỀU CHỈNH | Bỏ PUE, giảm GHG target |

## 4.9. Phần VII: Nhân sự (Dòng 5559-5876)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| Sơ đồ Tổ chức | ĐIỀU CHỈNH | Bỏ phòng DC Operations |
| Kế hoạch Nhân sự | ĐIỀU CHỈNH | 120-150 → 100-130, bỏ cột DC |
| Chi phí Nhân sự | TÍNH LẠI | Giảm theo quy mô mới |
| Đào tạo | GIỮ 90% | Bỏ đào tạo DC ops |

## 4.10. Phần VIII: Kế hoạch (Dòng 5877-6152)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| Phân kỳ 5 Phase | ĐIỀU CHỈNH → 4 Phase | Gộp Phase 3+4 (DC+Mở rộng) |
| Gantt | ĐIỀU CHỈNH | 4 phase, bỏ GP Viễn thông |
| Rủi ro | ĐIỀU CHỈNH | Bỏ rủi ro DC (latency, GPU supply), giữ CNC risk |

## 4.11. Phần IX: Kết luận (Dòng 6153-6399)

| Section Gốc | Xử lý V3 | Chi tiết |
|---|---|---|
| Tổng kết Giá trị | ĐIỀU CHỈNH | 15M → 7M strategic value |
| Cam kết | ĐIỀU CHỈNH | Bỏ cam kết DC/GP Viễn thông |
| Kiến nghị | ĐIỀU CHỈNH | Kiến nghị BQL KCNC cho 2 trụ cột |
| Bảng Đối chiếu | TÍNH LẠI | Tất cả số liệu theo 22M |

## 4.12. Phụ lục A-RR (Dòng 6400-12752)

| Phụ lục Gốc | Xử lý V3 | Lý do |
|---|---|---|
| A: Tài chính Chi tiết | TÍNH LẠI TOÀN BỘ | 22M numbers |
| B: Phân tích Thị trường | ĐIỀU CHỈNH | Bỏ DC market, tăng IoT/CNC |
| C: Mẫu Văn bản Pháp lý | ĐIỀU CHỈNH | Bỏ GP Viễn thông template |
| D: Danh mục Máy móc | ĐIỀU CHỈNH | 6→10 máy CNC, bỏ DC equipment |
| E: Thông tin Liên hệ | GIỮ NGUYÊN | Không thay đổi |
| F: Bảng Đối chiếu | TÍNH LẠI | Số liệu V3 |
| G: Tài chính Per-BU | TÍNH LẠI | 3 BU → 2 BU, bỏ DC P&L |
| H: Danh mục Sản phẩm | ĐIỀU CHỈNH | 18→14 SP |
| I: Bảng Giả định | ĐIỀU CHỈNH | Giả định V3 |
| J: Chỉ số Đầu tư | TÍNH LẠI | NPV, IRR, DSCR theo V3 |
| K: Tài liệu Tham khảo | ĐIỀU CHỈNH | Bỏ tham khảo DC |
| L: Thiết kế M&E Chi tiết | ĐIỀU CHỈNH LỚN | Bỏ M&E DC, giữ CNC + VP |
| M: Thị trường CNC | GIỮ + TĂNG CƯỜNG | Tăng 10 máy, thêm benchmark |
| N: DSCR và Cấu trúc Nợ | TÍNH LẠI | Vay 4M thay vì 8M |
| O: Giá trị Chiến lược | TÍNH LẠI | 15M → 7M |
| P: Mô hình DT CNC | TÍNH LẠI | 10 máy thay vì 6 |
| Q: Thiết kế Xưởng CNC | ĐIỀU CHỈNH | 800m2 → 1.500m2, 10 máy |
| R: Báo cáo EIA | ĐIỀU CHỈNH | Bỏ EIA DC, giữ EIA CNC |
| **S: Vận hành DC MACC** | **XÓA TOÀN BỘ** | **DC thương mại bỏ** |
| T: Sản phẩm IoT/Robot | GIỮ + TĂNG CƯỜNG | Thêm BMS/SCADA modules |
| U: Monte Carlo | TÍNH LẠI | Theo số liệu V3 |
| V: Quản trị DN | GIỮ 90% | Nhẹ chỉnh |
| W: Benchmarking ASEAN | ĐIỀU CHỈNH | Bỏ DC benchmark |
| X: Marketing | ĐIỀU CHỈNH | Bỏ marketing DC |
| Y: Chi tiết Xây dựng | THIẾT KẾ MỚI | 3 công trình mới |
| Z: Mẫu Hợp đồng | ĐIỀU CHỈNH | Bỏ HĐ DC, giữ CNC/IoT |
| AA: Chuỗi Cung ứng | ĐIỀU CHỈNH | Bỏ supply chain DC |
| BB-CC: Đào tạo | GIỮ 90% | Bỏ đào tạo DC ops |
| DD: Lộ trình CN 4.0 | ĐIỀU CHỈNH | Bỏ DC roadmap |
| EE: Dòng tiền Chi tiết | TÍNH LẠI | 22M numbers |
| FF: Quản lý PMO | GIỮ 90% | Nhẹ chỉnh |
| GG: Chiến lược CRM | ĐIỀU CHỈNH | Bỏ khách hàng DC |
| HH: Vận hành Bảo trì | ĐIỀU CHỈNH | Bỏ bảo trì DC |
| II: Chiến lược Xuất khẩu | GIỮ 90% | Nhẹ chỉnh |
| JJ: ESG | ĐIỀU CHỈNH | Bỏ ESG DC (PUE, GHG lớn) |
| KK: Quản lý Nước/Chất thải | ĐIỀU CHỈNH | Bỏ cooling tower DC |
| LL: Lộ trình Mở rộng | ĐIỀU CHỈNH | Bỏ mở rộng DC rack |
| MM: KPI Dashboard | TÍNH LẠI | V3 numbers |
| NN: Kỹ thuật Thiết bị | ĐIỀU CHỈNH | Bỏ datasheet DC, tăng CNC |
| OO: Exit Strategy | ĐIỀU CHỈNH | Bỏ giá trị DC |
| PP: An toàn Lao động | GIỮ 90% | |
| QQ: Succession Plan | GIỮ 90% | |
| RR: Closing | GIỮ | |

### Tổng kết Xử lý Phụ lục

| Xử lý | Số phụ lục | Danh sách |
|---|---:|---|
| GIỮ NGUYÊN (90%+) | 10 | E, BB, CC, FF, II, PP, QQ, RR, V + 1 |
| ĐIỀU CHỈNH (50-90%) | 24 | A, B, C, D, H, I, K, L, M, Q, R, T, W, X, Y, Z, AA, DD, GG, HH, JJ, KK, LL, NN |
| TÍNH LẠI (số liệu) | 8 | F, G, J, N, O, P, EE, MM, U |
| XÓA TOÀN BỘ | 1 | **S (Vận hành DC MACC)** |
| VIẾT MỚI | 1 | DC nội bộ (ngắn, ~80 dòng) |
| **Tổng** | **44** | |

---
---

# 5. PHÂN CÔNG SPRINT THEO AGENT

## 5.1. Tổng quan Đội ngũ

| Agent | Vai trò | Phạm vi V3 | Số Sprint |
|---|---|---|---:|
| **1. Giám Đốc Dự Án** | Điều phối, QC Lead | Toàn bộ, merge MASTER | — |
| **2. Chuyên Gia Tài Chính** | Số liệu tài chính | Phần V, Phụ lục A/F/G/I/J/N/O/EE/MM/U | 3 |
| **3. Chuyên Gia Tài Liệu** | Văn bản, định dạng | Trang bìa, Mục lục, Tóm tắt, VIII, IX, F, K, V, FF | 3 |
| **4. Chuyên Gia Pháp Lý** | Pháp lý, EIA, PCCC | Phần VI, Phụ lục C/R/Z/KK/PP | 2 |
| **5. Chuyên Gia Công Nghệ** | Hạ tầng, sản phẩm KT | Phần II, IV, Phụ lục D/L/Q/S→DC nội bộ/T/NN/Y/DD/HH | 4 |
| **6. Chuyên Gia Thị Trường** | Thị trường, kinh doanh | Phần I, III, Phụ lục B/H/M/P/W/X/GG/II/AA | 3 |
| **7. Kiểm Tra Chất Lượng** | QC sau mỗi sprint | Toàn bộ | Sau mỗi sprint |
| **8. Trình Bày KCNC** | Tóm tắt, Mẫu 1.4 | Tóm tắt Điều hành, Mẫu 1.4 | 1 (cuối) |

## 5.2. Chi tiết Phân công

### AGENT 2 — CHUYÊN GIA TÀI CHÍNH (3 Sprint)

| Sprint | Nội dung | Input (dòng gốc) | Output mục tiêu | Phụ thuộc |
|---|---|---:|---:|---|
| **F-1** | Phần V: Tài chính (5.1-5.9) — tính lại toàn bộ CAPEX 22M, Revenue, OPEX, P&L, CF, NPV/IRR | 711 | 780 | YEU_CAU_GOC_V3, SO_LIEU_CO_DINH_V3 |
| **F-2** | Phần V bổ sung (5.10-5.17) — Vốn lưu động, Lịch trả nợ, CĐKT, Thuế, Valuation, BEP per BU, Dashboard | Mới | 400 | Sprint F-1 |
| **F-3** | Phụ lục tài chính: A, F, G, I, J, N, O, EE, MM, U | ~2.200 gốc | 2.000 | Sprint F-1, F-2 |

### AGENT 3 — CHUYÊN GIA TÀI LIỆU (3 Sprint)

| Sprint | Nội dung | Input (dòng gốc) | Output mục tiêu | Phụ thuộc |
|---|---|---:|---:|---|
| **W-1** | Trang bìa + Mục lục + Thông tin Dự án + Cơ sở Pháp lý | 332 | 350 | SO_LIEU_CO_DINH_V3 |
| **W-2** | Phần VIII: Kế hoạch Triển khai + Phần IX: Kết luận | 523 | 540 | Agent 2 (số liệu), Agent 5 (layout) |
| **W-3** | Phụ lục: K, V, FF + Review định dạng + Mục lục cuối | ~500 gốc | 450 | Sau tất cả sprint khác |

### AGENT 4 — CHUYÊN GIA PHÁP LÝ (2 Sprint)

| Sprint | Nội dung | Input (dòng gốc) | Output mục tiêu | Phụ thuộc |
|---|---|---:|---:|---|
| **L-1** | Phần VI: Pháp lý & MT (6.1-6.6) — điều chỉnh 3→2 trụ cột, bỏ GP Viễn thông | 407 | 400 | — |
| **L-2** | Phụ lục: C, R (EIA), Z (Hợp đồng), KK (Nước/Chất thải), PP (ATLĐ) | ~1.500 gốc | 1.370 | Sprint L-1 |

### AGENT 5 — CHUYÊN GIA CÔNG NGHỆ (4 Sprint)

| Sprint | Nội dung | Input (dòng gốc) | Output mục tiêu | Phụ thuộc |
|---|---|---:|---:|---|
| **T-1** | Phần II: Sản phẩm & CN (2.1-2.7) — 3→2 trụ cột, tăng BMS, CNC 10 máy, DC nội bộ | 1.543 | 1.600 | — |
| **T-2** | Phần IV: Hạ tầng KT (4.1-4.8) — layout mới, M&E tính lại | 840 | 950 | Sprint T-1 |
| **T-3** | Phụ lục kỹ thuật nhóm 1: D, L, Q, T, NN | ~2.000 gốc | 1.900 | Sprint T-1, T-2 |
| **T-4** | Phụ lục kỹ thuật nhóm 2: Y (XD), DD (CN 4.0), HH (Bảo trì), DC nội bộ (mới) | ~800 gốc | 800 | Sprint T-2, T-3 |

### AGENT 6 — CHUYÊN GIA THỊ TRƯỜNG (3 Sprint)

| Sprint | Nội dung | Input (dòng gốc) | Output mục tiêu | Phụ thuộc |
|---|---|---:|---:|---|
| **M-1** | Phần I: Thị trường (1.1-1.6) — bỏ 1.5 DC market, tăng IoT/CNC | 745 | 700 | — |
| **M-2** | Phần III: Mô hình KD (3.1-3.4) — 3→2 trụ cột, bỏ DC revenue model | 711 | 650 | Sprint M-1 |
| **M-3** | Phụ lục: B, H, M, P, W, X, GG, II, AA | ~1.800 gốc | 1.700 | Sprint M-1, M-2 |

### AGENT 8 — TRÌNH BÀY KCNC (1 Sprint — cuối cùng)

| Sprint | Nội dung | Input | Output mục tiêu | Phụ thuộc |
|---|---|---|---:|---|
| **P-1** | Tóm tắt Điều hành + Mẫu 1.4 cập nhật | MASTER V3 hoàn chỉnh | 300 | SAU tất cả sprint khác |

---
---

# 6. ROADMAP TỔNG THỂ (4 PHASE)

## Phase A: NỀN TẢNG (Sprint song song — không phụ thuộc nhau)

```
Thời gian: Ngày 1-2

Song song:
  Agent 5 (Công Nghệ) → Sprint T-1: Sản phẩm & CN (2 trụ cột)
  Agent 6 (Thị Trường) → Sprint M-1: Thị trường (bỏ DC market)
  Agent 4 (Pháp Lý)    → Sprint L-1: Pháp lý & MT
  Agent 3 (Tài Liệu)   → Sprint W-1: Trang bìa + Mục lục + CSPL

Kết thúc Phase A:
  Agent 7 (QA) → QC batch 1 (4 sprint)
```

## Phase B: HẠ TẦNG + TÀI CHÍNH (Sprint có phụ thuộc)

```
Thời gian: Ngày 2-4

Song song:
  Agent 5 (Công Nghệ) → Sprint T-2: Hạ tầng KT (layout mới)
  Agent 2 (Tài Chính) → Sprint F-1: Tài chính 5.1-5.9
  Agent 6 (Thị Trường) → Sprint M-2: Mô hình Kinh doanh

Kết thúc Phase B:
  Agent 7 (QA) → QC batch 2 (3 sprint)
```

## Phase C: PHỤ LỤC (Sprint nặng)

```
Thời gian: Ngày 4-8

Song song (3 nhóm):
  Agent 5 (Công Nghệ) → Sprint T-3 + T-4: Phụ lục kỹ thuật
  Agent 2 (Tài Chính) → Sprint F-2 + F-3: Tài chính bổ sung + Phụ lục TC
  Agent 6 (Thị Trường) → Sprint M-3: Phụ lục thị trường

Tuần tự:
  Agent 4 (Pháp Lý) → Sprint L-2: Phụ lục pháp lý/EIA (sau QC Phase A)
  Agent 3 (Tài Liệu) → Sprint W-2: Kế hoạch + Kết luận (chờ Agent 2, 5)

Kết thúc Phase C:
  Agent 7 (QA) → QC batch 3 (7 sprint)
```

## Phase D: TỔNG HỢP + FINAL QC

```
Thời gian: Ngày 8-10

Tuần tự:
  Agent 1 (PM) → Merge toàn bộ vào MASTER V3
  Agent 3 (Tài Liệu) → Sprint W-3: Review định dạng + Mục lục cuối
  Agent 7 (QA) → Final QC (7 hạng mục bắt buộc)
  Agent 8 (Trình Bày) → Sprint P-1: Tóm tắt Điều hành + Mẫu 1.4
  Agent 7 (QA) → QC cuối cùng cho Tóm tắt
  Agent 1 (PM) → Báo cáo hoàn thành
```

## Sơ đồ Phụ thuộc

```
Phase A (Nền tảng)          Phase B (Hạ tầng+TC)      Phase C (Phụ lục)         Phase D (Tổng hợp)
====================        ====================      ====================      ====================

T-1 (Sản phẩm) ──────────→ T-2 (Hạ tầng) ─────────→ T-3 (PL KT 1) ──────────→ Merge MASTER
                                                    → T-4 (PL KT 2)
M-1 (Thị trường) ─────────→ M-2 (Mô hình KD) ────→ M-3 (PL Thị trường) ────→
L-1 (Pháp lý) ────────────────────────────────────→ L-2 (PL Pháp lý) ────────→
W-1 (Trang bìa) ──────────────────────────────────→ W-2 (KH + Kết luận) ────→ W-3 (Format + TOC)
                            F-1 (Tài chính) ──────→ F-2 (TC bổ sung) ────────→
                                                    → F-3 (PL Tài chính)
                                                                                P-1 (Tóm tắt)
                            └── QC-1 ──────────────── QC-2 ────── QC-3 ──────── Final QC
```

---
---

# 7. CHI TIẾT TỪNG SPRINT

## Sprint T-1: Sản phẩm & Công nghệ (Agent 5 — Chuyên Gia Công Nghệ)

**Mục tiêu:** Chuyển đổi Phần II từ 3 trụ cột (gốc) sang 2 trụ cột (V3)

**Bước thực hiện:**
1. Đọc Phần II trong MEKONG_DE_AN_Goc.md (Dòng 1347-2889, ~1.543 dòng)
2. Đọc YEU_CAU_GOC_V3.md để nắm ràng buộc
3. Tạo Phần II mới theo cấu trúc:
   - 2.1 Tổng quan 2 Trụ cột (giữ 70% gốc, sửa 3→2)
   - 2.2 Trụ cột 1 — Điện tử Thông minh: GIỮ TOÀN BỘ IoT Gateway (MK-200/300), Robot (AMR/AGV), THÊM chi tiết BMS/SCADA (MK-EIO, MK-DDC, MK-GW, MekongBMS), OEM/ODM
   - 2.3 Trụ cột 2 — CNC/MPMC: NÂNG CẤP 6→10 máy, thêm EDM Sodick + Grinder Okamoto, chi tiết 1.500m2
   - 2.4 Hạ tầng Số Nội bộ: VIẾT MỚI (50-80 dòng), 5-8 rack
   - 2.5 Hệ sinh thái 2 trụ cột: ĐIỀU CHỈNH synergy diagram
   - 2.6 Lộ trình TRL: Bỏ DC TRL, giữ IoT/CNC
   - 2.7 R&D: Bỏ GPU/AI research, tăng firmware/BMS R&D

**Output:** ~1.400 dòng Markdown

**Lưu ý:**
- GIỮ NGUYÊN toàn bộ thông số kỹ thuật IoT (ARM Cortex-A78, 8GB, 5G-ready)
- GIỮ NGUYÊN Robot specs (LiDAR 3D, SLAM, 500-1000 kg)
- TĂNG CƯỜNG BMS: thêm bảng thông số MK-EIO (DI16/DO16/AI8/AO4), MK-DDC (24/64 điểm, BACnet), MK-GW (4 loại)
- CNC: Thêm 4 máy mới vào bảng chi tiết (DMG Mori x5, Haas x3, Sodick EDM, Okamoto Grinder)
- DC: Chỉ 50-80 dòng mô tả server room nội bộ, KHÔNG có GPU-aaS, KHÔNG có Tier III

---

## Sprint T-2: Hạ tầng Kỹ thuật (Agent 5 — Chuyên Gia Công Nghệ)

**Mục tiêu:** Thiết kế lại layout và M&E cho 3 công trình riêng biệt

**Bước thực hiện:**
1. Đọc Phần IV trong gốc (Dòng 3601-4440) và V3 MASTER (Phần IV đã có backbone)
2. Layout mới: VP 21x48m 3 tầng + Xưởng 48x70m + Utility 5x56m
3. M&E tính lại: 550 kW (thay vì 3 MVA DC), Solar 100 kWp, UPS 60 kVA
4. PCCC: Bỏ PCCC DC lớn, giữ PCCC CNC + VP + FM-200 DC nhỏ
5. Nước: Bỏ cooling tower DC, giữ ZLD CNC

**Output:** ~900 dòng Markdown (V3 MASTER đã có 400 dòng, cần bổ sung 500 dòng)

---

## Sprint M-1: Thị trường (Agent 6 — Chuyên Gia Thị Trường)

**Mục tiêu:** Chuyển đổi Phần I — bỏ thị trường DC, tăng IoT/BMS và CNC

**Bước thực hiện:**
1. Đọc Phần I gốc (Dòng 602-1346, ~745 dòng)
2. Section 1.1-1.2: Giữ ~90%, chỉ chỉnh xu hướng (bỏ cloud/DC trend)
3. Section 1.3: GIỮ 100% IoT + Robot market, THÊM BMS/SCADA market data (CAGR, TAM/SAM)
4. Section 1.4: GIỮ 100% CNC market, TĂNG chi tiết cho 10 máy, FDI demand
5. Section 1.5: XÓA TOÀN BỘ (thị trường DC) — KHÔNG thay thế
6. Section 1.6: ĐIỀU CHỈNH định vị cạnh tranh (2 trụ cột thay vì 3)

**Output:** ~600 dòng Markdown

---

## Sprint L-1: Pháp lý & MT (Agent 4 — Chuyên Gia Pháp Lý)

**Mục tiêu:** Đơn giản hóa pháp lý — bỏ GP Viễn thông và quy chuẩn DC

**Bước thực hiện:**
1. Đọc Phần VI gốc (Dòng 5152-5558, ~407 dòng)
2. Section 6.1: Bỏ Luật Viễn thông 2023, QCVN cho DC, giữ 12/15 luật
3. Section 6.2: 3→2 trụ cột, bỏ pháp lý DC thương mại
4. Section 6.3: Giữ, nhẹ chỉnh
5. Section 6.4: 18 GP → ~12 GP (bỏ 5-6 GP DC: GP Viễn thông, GP vận hành DC, v.v.)
6. Section 6.5: ĐTM — bỏ phần DC (cooling tower, GHG 2-4 MW), giữ ĐTM CNC (ZLD, kim loại nặng, bụi)
7. Section 6.6: Bỏ cam kết PUE < 1,35, giảm GHG target

**Output:** ~350 dòng Markdown

---

## Sprint W-1: Trang bìa + Mục lục (Agent 3 — Chuyên Gia Tài Liệu)

**Mục tiêu:** Cập nhật trang bìa, mục lục, thông tin DA, cơ sở pháp lý theo V3

**Bước thực hiện:**
1. Đọc Trang bìa gốc (Dòng 1-282)
2. Điều chỉnh: 32M→22M, 3 trụ cột→2, GFA 21.000→6.664, 5 phase→4 phase
3. Mục lục: Bỏ Section 1.5 (DC market), 2.4 (DC MACC), 4.2 (DC zone)
4. Thông tin Dự án: Số liệu từ SO_LIEU_CO_DINH_V3.md
5. Cơ sở Pháp lý: Bỏ Luật Viễn thông 2023, giữ 12 văn bản

**Output:** ~300 dòng Markdown

---

## Sprint F-1: Tài chính 5.1-5.9 (Agent 2 — Chuyên Gia Tài Chính)

**Mục tiêu:** Tính lại toàn bộ mô hình tài chính theo CAPEX 22M, 2 trụ cột

**Bước thực hiện:**
1. Đọc Phần V gốc (Dòng 4441-5151) và V3 MASTER (Phần V đã có backbone)
2. CAPEX: Giữ cấu trúc 26 hạng mục, tính lại theo 22M
3. Revenue: 2 BU (IoT 70% + CNC 30%), bỏ DC revenue
4. OPEX: Tính lại (bỏ OPEX DC thương mại)
5. P&L: Tính lại (margin cao hơn vì bớt OPEX DC)
6. Cash Flow: Tính lại
7. NPV/IRR: Xác nhận 1,50M / 13,0%
8. Giá trị Chiến lược: 15M → 7M
9. Rủi ro: Bỏ rủi ro DC (GPU supply, latency competition)

**Output:** ~700 dòng (V3 MASTER đã có, cần chỉnh sửa và bổ sung)

---

## (Sprint F-2, F-3, M-2, M-3, L-2, W-2, W-3, T-3, T-4, P-1 — tương tự chi tiết như trên)

---
---

# 8. CHECKLIST TỔNG HỢP

## 8.1. Checklist trước khi bắt đầu mỗi Sprint

| # | Hạng mục | Agent thực hiện | Kiểm tra |
|:---:|---|---|---|
| 1 | Đọc AGENT_RULES.md | Từng Agent | [ ] |
| 2 | Đọc YEU_CAU_GOC_V3.md | Từng Agent | [ ] |
| 3 | Đọc SO_LIEU_CO_DINH_V3.md | Từng Agent | [ ] |
| 4 | Xác định section gốc cần đọc (số dòng, vị trí) | Từng Agent | [ ] |
| 5 | Đọc TOÀN BỘ section gốc (KHÔNG đọc 200 dòng rồi ngưng) | Từng Agent | [ ] |
| 6 | Lập bảng kiểm kê input cho sprint | Từng Agent | [ ] |
| 7 | Ước tính output (số dòng) và kiểm tra Rule 2 (>= 60%) | Từng Agent | [ ] |

## 8.2. Checklist trong khi viết

| # | Hạng mục | Tiêu chí |
|:---:|---|---|
| 1 | Không emoji | 0 emoji |
| 2 | Tiếng Việt trang trọng | Văn phong nhà nước |
| 3 | Dấu phẩy thập phân kiểu Việt | 22,00M (KHÔNG phải 22.00M) |
| 4 | Đơn vị đầy đủ | Mỗi số có đơn vị (USD, m2, kW, MW) |
| 5 | Nhãn dữ liệu [C]/[B]/[A] | Mỗi số liệu tài chính có nhãn |
| 6 | Viết theo batch 500 dòng | Báo cáo tiến độ sau mỗi 5 batch |
| 7 | Cross-reference SO_LIEU_CO_DINH_V3 | Mỗi số cố định phải khớp |

## 8.3. Checklist sau mỗi Sprint (QA Agent kiểm tra)

| # | Hạng mục | Công cụ | Tiêu chí PASS |
|:---:|---|---|---|
| 1 | Số liệu nhất quán | grep toàn bộ output | Khớp SO_LIEU_CO_DINH_V3.md |
| 2 | Không emoji | grep emoji pattern | 0 emoji |
| 3 | Tỷ lệ output/input | wc -l | >= 60% input tương ứng |
| 4 | Heading khớp mục lục | so sánh | 100% |
| 5 | Định dạng số Việt | grep pattern | 22,00M không phải 22.00M |
| 6 | Đơn vị đầy đủ | review | Mỗi số có đơn vị |
| 7 | Nội dung DC đã loại bỏ | grep "GPU-aaS\|colocation\|Tier III\|GP Viễn thông" | 0 kết quả |

## 8.4. Checklist Final QC (trước khi báo hoàn thành)

| # | Hạng mục | Tiêu chí | Kết quả |
|:---:|---|---|---|
| 1 | Tổng số dòng MASTER V3 | >= 12.000 dòng | [ ] |
| 2 | Tất cả 9 Phần có nội dung | Mỗi Phần >= 200 dòng | [ ] |
| 3 | Tất cả Phụ lục giữ nguyên có nội dung | ~30 phụ lục | [ ] |
| 4 | 20 số cố định nhất quán | Khớp SO_LIEU_CO_DINH_V3.md tại mọi vị trí | [ ] |
| 5 | 0 emoji | grep | [ ] |
| 6 | 0 tham chiếu DC thương mại | grep | [ ] |
| 7 | Mục lục khớp heading | 100% | [ ] |
| 8 | CNC = 10 máy (không phải 6) | grep | [ ] |
| 9 | CAPEX = 22,00M (không phải 32,00M) | grep | [ ] |
| 10 | Layout = 3 công trình (không phải 1 tòa nhà) | grep | [ ] |
| 11 | BMS/SCADA có xuất hiện | grep | [ ] |
| 12 | NPV = 1,50M, IRR = 13,0% | grep | [ ] |
| 13 | DC nội bộ = 11,4% CAPEX | grep | [ ] |
| 14 | Mẫu 1.4 hoàn thiện | kiểm tra | [ ] |
| 15 | Tóm tắt Điều hành đầy đủ | >= 200 dòng | [ ] |

---
---

# 9. QUY TRÌNH QC

## 9.1. QC sau mỗi Sprint

```
1. Agent hoàn thành Sprint → thông báo PM
2. PM giao QA Agent kiểm tra (7 hạng mục)
3. QA trả kết quả: PASS / FAIL + chi tiết
4. Nếu FAIL → trả lại Agent sửa → QA kiểm tra lại
5. Nếu PASS → PM approve → chuyển sang Sprint tiếp
```

## 9.2. QC batch (sau mỗi Phase)

```
1. PM tổng hợp output tất cả Sprint trong Phase
2. QA chạy cross-reference giữa các Sprint
3. Kiểm tra số liệu giữa các Agent có nhất quán không
4. Báo cáo batch QC cho PM
```

## 9.3. Final QC

```
1. PM merge toàn bộ vào MASTER V3
2. QA chạy 15 hạng mục Final Checklist
3. QA grep tất cả số cố định
4. QA đếm dòng (>= 12.000)
5. QA kiểm tra 0 emoji, 0 DC thương mại
6. Báo cáo PASS/FAIL cho PM
7. PM báo cáo user
```

---
---

# 10. RỦI RO VÀ BIỆN PHÁP

| Rủi ro | Xác suất | Tác động | Biện pháp |
|---|:---:|:---:|---|
| Agent viết thiếu nội dung (< 60% input) | Trung bình | Cao | QA kiểm tra tỷ lệ output/input mỗi sprint |
| Số liệu bất nhất quán giữa các Agent | Cao | Cao | Mỗi Agent đọc SO_LIEU_CO_DINH_V3.md; QA cross-check |
| Giữ nhầm nội dung DC thương mại | Trung bình | Cao | QA grep "GPU-aaS\|colocation\|Tier III\|50 Rack" |
| CNC ghi nhầm 6 máy (từ gốc) thay vì 10 | Trung bình | Trung bình | QA kiểm tra "10 máy" xuất hiện đúng |
| Phụ lục S (DC MACC) không bị xóa | Thấp | Cao | QA xác nhận Phụ lục S đã chuyển thành DC nội bộ |
| Viết quá nhiều (vượt 14.000 dòng) | Thấp | Thấp | Không phải vấn đề — độ sâu tốt |
| Agent làm chồng chéo (cùng section) | Trung bình | Trung bình | PM phân công rõ Scope, mỗi section chỉ 1 Agent |

---
---

# TỔNG KẾT

| Thông số | Giá trị |
|---|---|
| **Tổng Sprint** | 16 sprint |
| **Tổng Agent tham gia** | 8 agent |
| **Input** | 12.752 dòng (đề án gốc) |
| **Output mục tiêu** | > 12.000 dòng (mục tiêu ~12.500) |
| **Tỷ lệ giữ** | ~89% nội dung gốc |
| **Section bị xóa** | 1.5 (DC market), 2.4 (DC MACC), 4.2 (DC zone), Phụ lục S |
| **Section tăng cường** | IoT/BMS (thêm 6 module), CNC (6→10 máy), Layout (mới) |
| **Phase** | 4 phase (Nền tảng → Hạ tầng + TC → Phụ lục → Tổng hợp) |
| **QC** | 4 lần QC batch + 1 Final QC |

> **Khi user xác nhận kế hoạch này**, Giám Đốc Dự Án sẽ bắt đầu Phase A bằng cách giao Sprint song song cho 4 Agent (T-1, M-1, L-1, W-1).

---

*Cập nhật: 2026-03-16*
*Tác giả: Giám Đốc Dự Án (Agent 1)*
*Kế hoạch này cần được CEO xác nhận trước khi triển khai.*
