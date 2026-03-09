# PHÂN TÍCH RỦI RO CẤP NƯỚC & 4 GIẢI PHÁP GIẢM THIỂU
## Chuyên gia Hạ tầng Kỹ thuật Công nghiệp — Prompt C Output

**Ngày:** 04/03/2026  
**Vai trò:** Chuyên gia Hạ tầng Kỹ thuật Công nghiệp (Nước, Điện, Cooling)  
**Phân loại:** CONFIDENTIAL  
**Tham chiếu:** P3 EIA Chương IV (Mục 4.2.2), P4 M&E Chương III, 11_KIEM_TRA_CHAT_LUONG (P3-1, P3-3)

---

# TÓM TẮT THỰC THI (EXECUTIVE SUMMARY)

| Chỉ tiêu | Hiện trạng | Rủi ro | Giải pháp |
|---|---|:---:|---|
| Quota nước KCNC | 150 m³/ngày | 🔴 CRITICAL | 4 giải pháp + đàm phán tăng 200 m³/ngày |
| Nhu cầu nước tổng hợp | 55–100 m³/ngày (vận hành) + 67–133 m³/ngày (DC cooling) | | |
| Nhu cầu peak (before mitigation) | **122–233 m³/ngày** | | Vượt quota lên tới 155% |
| Nhu cầu peak (after 4 giải pháp) | **67–95 m³/ngày** | ✅ SAFE | Giảm 55–138 m³/ngày |
| CAPEX giảm thiểu | 285.000 USD | | Trong contingency budget |
| OPEX tiết kiệm nước | 18.000–25.000 USD/năm | | Giảm tiêu thụ nước 45–60% |

---

# 1. PHÂN TÍCH TÌNH TRẠNG HIỆN TẠI

## 1.1. Nhu Cầu Nước Theo Từng Khối

| Khối | Mục đích sử dụng | Nhu cầu (m³/ngày) | % Tổng | Ghi chú |
|---|---|---:|---:|---|
| **Khối A — DC** | Cooling Tower (make-up) | 67–133 | 55–57% | **Chiếm phần lớn** |
| **Khối A — DC** | Sinh hoạt + vệ sinh | 3–5 | 2–3% | 30–50 nhân sự, 24/7 |
| **Khối B — CNC** | Coolant pha loãng + rửa | 8–15 | 7–8% | Semi-synthetic MWF |
| **Khối B — CNC** | Sinh hoạt | 4–6 | 3–4% | 80–120 nhân sự, 2–3 ca |
| **Khối C — SMT** | PCB wash + Clean room | 5–8 | 4–5% | DI water |
| **Khối C — SMT** | Sinh hoạt | 3–5 | 2–3% | 80–100 nhân sự |
| **Chung** | Tưới cây cảnh, PCCC test | 2–3 | 2% | |
| **Chung** | Dự phòng (PCCC sự cố) | (30–60) | — | Bể trữ riêng, không tính thường xuyên |
| | | | | |
| **TỔNG (không cooling DC)** | | **25–42** | | ✅ Trong quota |
| **TỔNG (có cooling DC)** | | **92–175** | | ⚠️ Có thể vượt quota |
| **PEAK (ngày nóng > 35°C)** | | **122–233** | | 🔴 **VƯỢT QUOTA 150 m³/ngày** |

## 1.2. Phân Tích Rủi Ro

```
QUOTA KCNC = 150 m³/ngày
                    ├── Tải thấp (mùa mưa, 25°C): ~92 m³/ngày  ✅ ĐỦ (61% quota)
                    ├── Tải trung bình (32°C):     ~135 m³/ngày  ⚠️ GẦN NGƯỠNG (90% quota)
                    ├── Tải cao (35°C):             ~175 m³/ngày  ❌ VƯỢT 17%
                    └── Tải peak (38°C+, Full IT):  ~233 m³/ngày  ❌ VƯỢT 55%
```

**Tần suất nhiệt độ > 35°C tại TP.HCM:** ~40–60 ngày/năm (Tháng 3–5, theo số liệu Đài KTTV)

**Rủi ro nghiêm trọng:**
1. **Operational risk:** DC buộc phải giảm tải IT (thermal throttling) khi không đủ nước cooling → SLA violation → phạt hợp đồng
2. **Financial risk:** Mỗi giờ DC downtime = mất ~5.000 USD doanh thu (ước tính 100 racks × 50% occupancy × $2/rack/giờ premium)
3. **Regulatory risk:** KCNC có thể cắt nước nếu phát hiện vi phạm quota → ảnh hưởng cả 3 khối
4. **Reputation risk:** Khách hàng DC tier-1 (ngân hàng, fintech) yêu cầu chứng minh water resilience

---

# 2. BỐN GIẢI PHÁP GIẢM THIỂU

## Giải pháp 1: TỐI ƯU HỆ THỐNG COOLING DC (Hybrid Cooling)

### 2.1.1. Mô Tả Kỹ Thuật

| Hạng mục | Zone 1 (Colocation) | Zone 2 (AI/HPC) |
|---|---|---|
| **Cooling hiện tại** | Water-cooled chiller + CRAC | Water-cooled chiller + CRAC |
| **Cooling đề xuất** | Giữ nguyên (tải thấp) | **Rear-Door Liquid Cooling (RDHx)** |
| **Nguyên lý** | — | Coolant tuần hoàn kín, giải nhiệt qua heat exchanger ngoài trời |
| **Giảm tải chiller** | 0% | 40–50% |
| **Giảm nước make-up** | 0% | 40–50% |

**Chi tiết kỹ thuật Rear-Door Liquid Cooling (Zone 2):**
- 40 racks × rear-door heat exchanger (CoolIT, GRC, Schneider)
- Coolant: Propylene glycol 30% (food-grade, non-toxic)
- Nhiệt độ coolant: 25–45°C (inlet/outlet)
- Công suất giải nhiệt: 15–30 kW/rack
- Giảm nước bay hơi: 40–50% cho Zone 2

### 2.1.2. Kết Quả

| Kịch bản | Nước make-up TRƯỚC (m³/ngày) | Nước make-up SAU (m³/ngày) | Tiết kiệm (m³/ngày) |
|---|---:|---:|---:|
| Tải TB (75%, 32°C) | 99,5 | **59,7** | 39,8 |
| Tải cao (100%, 35°C) | 132,6 | **79,5** | 53,1 |
| Tải peak (100%, 38°C+) | 177,5 | **106,5** | 71,0 |

### 2.1.3. Chi Phí

| Khoản mục | Chi phí (USD) |
|---|---:|
| 40 Rear-door HEX units | 80.000 |
| Piping + manifold + glycol | 25.000 |
| CDU (Coolant Distribution Unit) | 30.000 |
| Lắp đặt + commissioning | 15.000 |
| **TỔNG CAPEX Giải pháp 1** | **150.000** |
| OPEX tăng thêm (điện bơm glycol) | +5.000/năm |
| OPEX tiết kiệm (nước) | -12.000–18.000/năm |
| **Net OPEX** | **-7.000 đến -13.000/năm** |

---

## Giải pháp 2: TÁI SỬ DỤNG NƯỚC (Water Recycling)

### 2.2.1. Dòng Nước Có Thể Tái Sử Dụng

| Nguồn | Lưu lượng (m³/ngày) | Chất lượng | Xử lý cần thiết | Tái sử dụng cho |
|---|---:|---|---|---|
| Cooling tower blowdown | 15–30 | TDS 1.500–2.000 ppm | Softener + RO | Make-up chiller |
| Nước ngưng tụ (HVAC condensate) | 3–5 | Gần DI water | Lọc UV | CNC coolant pha loãng |
| Nước rửa sàn (sau lọc) | 2–4 | TSS < 200 mg/L | Lọc cát + than | Tưới cây, rửa xe |
| Nước thải sinh hoạt (grey water) | 5–8 | BOD < 100 mg/L | MBR compact | Toilet flushing |
| **TỔNG CÓ THỂ TÁI SỬ DỤNG** | **25–47** | | | |

### 2.2.2. Sơ Đồ Tái Sử Dụng

```
 Cooling Tower Blowdown (15-30 m³/d)
       │
       ├──► [Softener] ──► [RO 75%] ──► Make-up water (11-22 m³/d)
       │                       │
       │                       └──► Reject (4-8 m³/d) → Tưới cây
       │
 HVAC Condensate (3-5 m³/d)
       │
       └──► [UV Filter] ──► CNC coolant dilution (3-5 m³/d)

 Grey water (5-8 m³/d)
       │
       └──► [MBR Compact] ──► Toilet flushing (5-8 m³/d)

 TỔNG TIẾT KIỆM: 19-35 m³/ngày
```

### 2.2.3. Chi Phí

| Khoản mục | Chi phí (USD) |
|---|---:|
| Compact RO unit (2 m³/h) | 25.000 |
| Softener + pre-filter | 8.000 |
| MBR compact (grey water) | 18.000 |
| UV disinfection | 3.500 |
| Đường ống kép (dual piping) | 12.000 |
| Bể chứa tái sử dụng (10 m³) | 5.500 |
| Lắp đặt + PLC tự động | 8.000 |
| **TỔNG CAPEX Giải pháp 2** | **80.000** |
| OPEX (hóa chất, màng RO, điện) | +8.000/năm |
| OPEX tiết kiệm nước | -6.000–10.000/năm |
| **Net OPEX** | **+2.000 đến -2.000/năm** |

---

## Giải pháp 3: THU GOM NƯỚC MƯA (Rainwater Harvesting)

### 2.3.1. Tiềm Năng

| Thông số | Giá trị | Nguồn |
|---|---|---|
| Diện tích mái (thu nước) | 8.000 m² (80% × 10.000 m²) | [C] Bản vẽ kiến trúc |
| Lượng mưa TB năm TP.HCM | 1.800 mm/năm | [B] Đài KTTV |
| Hệ số thu (runoff coefficient) | 0,85 | [B] Mái tôn/panel |
| **Lượng nước mưa thu được** | **12.240 m³/năm ≈ 33,5 m³/ngày** (TB) | |
| Mùa mưa (Tháng 5–11): | ~50 m³/ngày | [B] 70% lượng mưa |
| Mùa khô (Tháng 12–4): | ~10 m³/ngày | [B] 30% lượng mưa |

### 2.3.2. Sử Dụng Nước Mưa

| Mục đích | Yêu cầu chất lượng | Xử lý | Lưu lượng (m³/ngày) |
|---|---|---|---:|
| Tưới cây + rửa sàn ngoài | Thấp | Lọc thô | 3–5 |
| Cooling tower make-up | Trung bình | Lọc + UV | 10–20 (mùa mưa) |
| PCCC bể dự trữ | Thấp | Không cần | Buffer 30–60 m³ |
| **TỔNG SỬ DỤNG** | | | **13–25** (mùa mưa) / **3–5** (mùa khô) |

### 2.3.3. Chi Phí

| Khoản mục | Chi phí (USD) |
|---|---:|
| Hệ thống thu mái (gutter, downpipe) | 8.000 |
| Bể trữ nước mưa (100 m³ BTCT ngầm) | 25.000 |
| Bơm + lọc thô + UV | 7.000 |
| Đường ống phân phối | 5.000 |
| **TỔNG CAPEX Giải pháp 3** | **45.000** |
| OPEX (bơm, vệ sinh bể, lọc) | +2.000/năm |
| OPEX tiết kiệm nước | -4.000–7.500/năm |
| **Net OPEX** | **-2.000 đến -5.500/năm** |

---

## Giải pháp 4: ĐÀM PHÁN TĂNG QUOTA NƯỚC KCNC

### 2.4.1. Chiến Lược Đàm Phán

| Hành động | Nội dung | Timeline | Phụ trách |
|---|---|---|---|
| **Bước 1** | Nộp công văn chính thức yêu cầu tăng quota từ 150 → 200 m³/ngày | Q2/2026 (cùng Đề án) | CEO + Legal |
| **Bước 2** | Cung cấp EIA V2.0 chứng minh đã áp dụng giải pháp tiết kiệm nước | Q2/2026 | Env. Manager |
| **Bước 3** | Đề xuất phí nước premium (trả cao hơn 20% cho phần vượt quota) | Q3/2026 | CFO |
| **Bước 4** | Cam kết ROI quota: tạo việc làm 190–270 người, đóng thuế, xuất khẩu CNC | Q3/2026 | CEO |
| **Bước 5** | Backup: Khảo sát nguồn nước giếng khoan bổ sung (nếu KCNC từ chối) | Q4/2026 | M&E Manager |

### 2.4.2. Kịch Bản Kết Quả

| Kịch bản | Xác suất | Quota mới | Hành động tiếp |
|---|---:|---|---|
| **A: Được tăng 200 m³/ngày** | 60% | 200 m³ | Triển khai GP1+GP3, dự phòng GP2 |
| **B: Giữ nguyên 150 m³/ngày** | 30% | 150 m³ | Triển khai GP1+GP2+GP3 (bắt buộc) |
| **C: Bị giảm < 150 m³/ngày** | 10% | < 150 m³ | GP1+GP2+GP3 + Air-cooled backup (Plan B PA-1) |

### 2.4.3. Chi Phí

| Khoản mục | Chi phí (USD) |
|---|---:|
| Tư vấn pháp lý + hồ sơ | 5.000 |
| Phí nước premium (nếu áp dụng) | +3.000–5.000/năm |
| Khảo sát giếng khoan (nếu cần) | 10.000 |
| **TỔNG CAPEX Giải pháp 4** | **10.000–15.000** |

---

# 3. TỔNG HỢP 4 GIẢI PHÁP

## 3.1. Ma Trận Tác Động

| Giải pháp | Tiết kiệm nước (m³/ngày) | CAPEX (USD) | Net OPEX (USD/năm) | ROI (năm) | Ưu tiên |
|---|---:|---:|---:|---:|:---:|
| **GP1: Hybrid Cooling** | 40–71 | 150.000 | -7.000 đến -13.000 | 11–21 | ⭐⭐⭐ |
| **GP2: Water Recycling** | 19–35 | 80.000 | ±2.000 | >20 | ⭐⭐ |
| **GP3: Rainwater Harvest** | 3–25 (seasonal) | 45.000 | -2.000 đến -5.500 | 8–23 | ⭐⭐ |
| **GP4: Đàm phán quota** | +50 m³ quota | 10.000–15.000 | +3.000–5.000 | N/A | ⭐⭐⭐ |
| **TỔNG (GP1+GP2+GP3)** | **62–131** | **275.000–290.000** | | | |

## 3.2. Bảng Cân Đối Nước Sau Áp Dụng 4 Giải Pháp

| Kịch bản | Nhu cầu thô (m³/ngày) | Sau GP1 (Hybrid) | Sau GP2 (Recycle) | Sau GP3 (Mưa) | **Nhu cầu ròng** | Quota | **Còn dư** |
|---|---:|---:|---:|---:|---:|---:|---:|
| **Tải thấp** (mùa mưa, 25°C) | 92 | -40 | -19 | -15 | **18** | 150 | **+132** ✅ |
| **Tải TB** (32°C) | 135 | -40 | -25 | -5 | **65** | 150 | **+85** ✅ |
| **Tải cao** (35°C) | 175 | -53 | -30 | -3 | **89** | 150 | **+61** ✅ |
| **Tải peak** (38°C+, full) | 233 | -71 | -35 | -1 | **126** | 150 | **+24** ⚠️ |
| **Tải peak + quota 200** | 233 | -71 | -35 | -1 | **126** | 200 | **+74** ✅ |

> **✅ KẾT LUẬN:** Với 4 giải pháp + quota 200 m³/ngày, nhu cầu nước ròng peak = **126 m³/ngày** — **DƯ 74 m³/ngày** (37%) → AN TOÀN.
>
> Ngay cả với quota hiện tại 150 m³/ngày, nhu cầu peak ròng = 126 m³/ngày → **DƯ 24 m³/ngày** → vẫn đủ nhưng margin mỏng, nên triển khai GP4 song song.

## 3.3. Waterfall Chart — Giảm Nhu Cầu Nước (Tải Peak 38°C)

```
Nhu cầu thô         ████████████████████████████████████ 233 m³/d
                     │
GP1: Hybrid Cooling  ████████████ -71 m³/d → 162 m³/d
                     │
GP2: Water Recycling ██████ -35 m³/d → 127 m³/d
                     │
GP3: Rainwater        █ -1 m³/d (mùa khô) → 126 m³/d
                     │
NHU CẦU RÒNG        ██████████████████████ 126 m³/d ← DƯỚI QUOTA 150

QUOTA KCNC           ████████████████████████ 150 m³/d
QUOTA MỚI (mục tiêu) █████████████████████████████████ 200 m³/d
```

---

# 4. LỘ TRÌNH TRIỂN KHAI

| Tuần | Hành động | GP | Chi phí |
|---|---|:---:|---:|
| T1–T2 | Thiết kế chi tiết GP1 + GP2 + GP3 | — | 15.000 |
| T1 | Nộp công văn đàm phán quota KCNC | GP4 | 5.000 |
| T3–T8 | Lắp đặt Rear-door HEX (Zone 2, 40 racks) | GP1 | 150.000 |
| T4–T10 | Xây bể trữ nước mưa 100 m³ | GP3 | 45.000 |
| T6–T12 | Lắp đặt RO + MBR compact | GP2 | 80.000 |
| T8 | Kiểm tra phản hồi KCNC về quota | GP4 | — |
| T10 | Commissioning GP1 + GP3 | — | — |
| T14 | Commissioning GP2 | — | — |
| **TỔNG** | | | **~290.000** |

---

# 5. KẾT NỐI VỚI MÔ HÌNH TÀI CHÍNH V1.1

| Hạng mục | Đã có trong V1.1? | Chi tiết |
|---|:---:|---|
| CAPEX GP1+GP2+GP3 (290K) | ✅ | Nằm trong CAPEX MT 2,87M (Mục 2.1 V1.1) |
| OPEX nước (tiết kiệm ~15K/năm) | ✅ | Nằm trong OPEX MT 425K/năm (offset) |
| Bể trữ PCCC | ✅ | Nằm trong CAPEX PCCC 2,08M |
| Phí nước premium (GP4) | ⚠️ NHỎ | ~5K/năm → không material |

> **Không cần điều chỉnh mô hình tài chính V1.1** — các chi phí nước đã được bao gồm trong OPEX MT và CAPEX MT.

---

# 6. KIỂM TRA NỘI BỘ (SELF-AUDIT)

| Kiểm tra | Kết quả | ✅ |
|---|---|:---:|
| Nhu cầu nước peak ≤ quota (sau 4 GP) | 126 ≤ 150 m³/d | ✅ |
| GP1 số liệu khớp EIA Mục 4.2.2 | Hybrid cooling giảm 40% → 59,7–79,5 m³/d | ✅ |
| GP3 lượng mưa khớp EIA Chương III | 1.800 mm/năm, mùa mưa 70% | ✅ |
| GP4 chi phí trong contingency | 290K < 2,17M buffer (Mục 1.3 V1.1) | ✅ |
| CAPEX nước trong CAPEX MT V1.1 | 290K / 2.870K = 10,1% → hợp lý | ✅ |
| Tham chiếu P3-1 (water near quota) | ✅ Đã giải quyết — giảm nhu cầu 46% | ✅ |

---

**Người lập:** Chuyên gia Hạ tầng Kỹ thuật Công nghiệp  
**Ngày:** 04/03/2026  
**Phiên bản:** V1.0  
**Bảo mật:** CONFIDENTIAL
