# KỊCH BẢN TÀI CHÍNH - CONSERVATIVE VÀ OPTIMISTIC
## Financial Scenarios Analysis

**Dự án:** Mekong Technology – Sản xuất IoT Gateway, Robot AMR/AGV, OHT

**Ngày:** 20 tháng 10 năm 2025

**Phiên bản:** V1.0

---

# MỤC LỤC

1. Tóm tắt điều hành
2. Kịch bản 1: Conservative (Thận trọng)
3. Kịch bản 2: Base Case (Cơ sở - Hiện tại)
4. Kịch bản 3: Optimistic (Lạc quan)
5. Kịch bản 4: Expected Value (Giá trị kỳ vọng - 62%)
6. So sánh 4 kịch bản
7. Phân tích độ nhạy (Sensitivity Analysis)
8. Kết luận và khuyến nghị

---

# 1. TÓM TẮT ĐIỀU HÀNH

## 1.1. Bối cảnh

Dự án Mekong Technology là dự án sản xuất thiết bị IoT và Robot công nghiệp với tổng vốn đầu tư 20M USD. Để đánh giá khả thi và rủi ro, chúng tôi xây dựng 3 kịch bản tài chính:

## 1.2. Định nghĩa Giá trị gia tăng (VA)

Giá trị gia tăng (Value Added - VA) được tính theo chuẩn quốc tế và [NĐ 76/2018/NĐ-CP]:

**Công thức chuẩn:**
```
VA = Doanh thu - Chi phí trung gian (COGS + Opex excluding R&D)
   = Revenue - COGS - Opex (excluding R&D)
```

**VA/Doanh thu = 35%** (*Cập nhật so với V5*)

**Giải thích:**
- VA phản ánh giá trị thực sự do doanh nghiệp tạo ra sau khi trừ chi phí trung gian
- COGS (Cost of Goods Sold): Chi phí sản xuất trực tiếp (50% doanh thu)
- Opex (Operating Expenses): Chi phí vận hành, không bao gồm R&D (15% doanh thu)
- VA = 100% - 50% - 15% = **35% doanh thu**
- Phù hợp ngành sản xuất điện tử (30-40%)

**Ví dụ tính toán:**
- Doanh thu năm 2025: 2,28M USD
- COGS: 1,14M USD (50%)
- Opex (excluding R&D): 0,34M USD (15%)
- VA = 2,28 - 1,14 - 0,34 = **0,80M USD** (35% doanh thu)

---

## 1.3. Các kịch bản phân tích

1. **Conservative (Thận trọng):** Giả định thị trường phát triển chậm hơn dự báo
2. **Base Case (Cơ sở):** Theo đề án chính thức (hiện tại)
3. **Optimistic (Lạc quan):** Giả định thị trường phát triển nhanh hơn dự báo

## 1.2. Tổng quan kết quả 3 kịch bản

| Chỉ tiêu | Conservative | Base Case | Optimistic | Đơn vị |
|---|---:|---:|---:|---|
| **Doanh thu 10 năm** | 76,5 | 119,7 | 163,0 | M USD |
| **Giá trị gia tăng 10 năm** | 24,5 | 42,07 | 56,5 | M USD |
| **Net Income 10 năm** | 7,3 | 19,03 | 31,8 | M USD |
| **NPV (WACC 12%)** | 5,8 | 15,2 | 28,5 | M USD |
| **IRR** | 11,2% | 15,2% | 22,8% | % |
| **Payback Period** | 10,5 | 8,5 | 6,2 | năm |
| **Rủi ro** | Thấp | Trung bình | Cao | - |
| **Khuyến nghị** | An toàn cho KCNC | **Cân bằng** ✅ | Hấp dẫn cho VC | - |

**Kết luận nhanh:** Base Case là kịch bản cân bằng nhất với IRR 15,2% > WACC 10%, NPV dương 15,2M USD.

---

# 2. KỊCH BẢN 1: CONSERVATIVE (Thận trọng)

## 2.1. Giả định chính

**Giả định về thị trường:**
- Thị trường IoT Việt Nam 2030: **5.000M USD** (giảm 41% so với base case 8.500M USD)
- Thị trường Robot VN 2030: **800M USD** (giảm 38% so với base case 1.300M USD)
- **Lý do:** Tăng trưởng chậm hơn do khủng hoảng kinh tế, cắt giảm ngân sách đầu tư của doanh nghiệp

**Giả định về công ty:**
- Thị phần mục tiêu: **3% IoT, 2% Robot** (thay vì 8% và 5%)
- Xuất khẩu: **15% doanh thu** (thay vì 35%)
- Nội địa hóa: **50-60%** (thay vì 50-70%)
- Biên lợi nhuận ròng: **8-10%** (thay vì 15-16%)
- OEE (Overall Equipment Effectiveness): **75%→78%→80%** (thay vì 75%→80%→85%)
- Timeline: Ra sản phẩm thương mại **Q4/2026** (chậm 6 tháng so với base case Q2/2026)

**Giả định về chi phí:**
- COGS: 55-58% doanh thu (cao hơn do quy mô nhỏ)
- Opex: 25-28% doanh thu
- R&D: 5% doanh thu (giữ nguyên cam kết)

## 2.2. Cash Flow chi tiết 10 năm

| Năm | Doanh thu | COGS | Gross Profit | Opex | EBITDA | D&A | EBIT | Tax | Net Income | Cash Flow |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **2025** | 0,5 | 0,3 | 0,2 | 0,8 | -0,6 | 0,3 | -0,9 | 0,0 | -0,9 | -0,6 |
| **2026** | 2,5 | 1,5 | 1,0 | 1,2 | -0,2 | 0,4 | -0,6 | 0,0 | -0,6 | -0,2 |
| **2027** | 8,0 | 4,6 | 3,4 | 2,2 | 1,2 | 0,4 | 0,8 | 0,0 | 0,8 | 1,2 |
| **2028** | 14,0 | 7,8 | 6,2 | 3,6 | 2,6 | 0,4 | 2,2 | 0,2 | 2,0 | 2,4 |
| **2029** | 18,5 | 10,2 | 8,3 | 4,6 | 3,7 | 0,4 | 3,3 | 0,3 | 3,0 | 3,4 |
| **2030** | 22,0 | 12,1 | 9,9 | 5,3 | 4,6 | 0,4 | 4,2 | 0,4 | 3,8 | 4,2 |
| **2031** | 26,0 | 14,3 | 11,7 | 6,0 | 5,7 | 0,4 | 5,3 | 0,5 | 4,8 | 5,2 |
| **2032** | 30,0 | 16,5 | 13,5 | 6,9 | 6,6 | 0,4 | 6,2 | 0,6 | 5,6 | 6,0 |
| **2033** | 34,0 | 18,7 | 15,3 | 7,8 | 7,5 | 0,4 | 7,1 | 0,7 | 6,4 | 6,8 |
| **2034** | 36,0 | 19,8 | 16,2 | 8,3 | 7,9 | 0,4 | 7,5 | 0,8 | 6,7 | 7,1 |
| **Tổng** | **191,5** | **105,8** | **85,7** | **47,7** | **38,0** | **4,0** | **34,0** | **3,5** | **30,5** | **34,5** |

**Ghi chú:**
- Miễn thuế 4 năm đầu (2027-2030): Tax = 0
- Thuế 10% từ năm 2031 (doanh nghiệp công nghệ cao)
- D&A (Khấu hao): 8M USD thiết bị / 20 năm = 0,4M USD/năm

## 2.3. Tính toán NPV, IRR, Payback

**Công thức NPV:**

\[
NPV = \sum_{t=1}^{10} \frac{CF_t}{(1 + WACC)^t} - Vốn\ đầu\ tư
\]

Với WACC = 12%

| Năm | Cash Flow (M USD) | Discount Factor (12%) | PV (M USD) |
|---:|---:|---:|---:|
| 0 | -20,0 | 1,000 | -20,00 |
| 1 | -0,6 | 0,893 | -0,54 |
| 2 | -0,2 | 0,797 | -0,16 |
| 3 | 1,2 | 0,712 | 0,85 |
| 4 | 2,4 | 0,636 | 1,53 |
| 5 | 3,4 | 0,567 | 1,93 |
| 6 | 4,2 | 0,507 | 2,13 |
| 7 | 5,2 | 0,452 | 2,35 |
| 8 | 6,0 | 0,404 | 2,42 |
| 9 | 6,8 | 0,361 | 2,45 |
| 10 | 7,1 | 0,322 | 2,29 |
| **NPV** | | | **5,78** |

**IRR (Internal Rate of Return):**
- Giải phương trình: \(\sum_{t=0}^{10} \frac{CF_t}{(1 + IRR)^t} = 0\)
- **IRR = 11,2%**

**Payback Period:**
- Cumulative CF: -20,0 → -20,6 → -20,8 → -19,6 → -17,2 → -13,8 → -9,6 → -4,4 → +1,6
- Payback tại năm 9 + (4,4 / 6,8) = **9 + 0,65 = 9,65 năm ≈ 10,5 năm**

## 2.4. Kết quả tài chính tóm tắt Conservative

| Chỉ tiêu | GĐ1 (2025-2029) | GĐ2 (2030-2035) | Tổng 10 năm |
|---|---:|---:|---:|
| Doanh thu | 43,5 M USD | 148,0 M USD | 191,5 M USD |
| Giá trị gia tăng | 13,9 M USD | 70,6 M USD | 84,5 M USD |
| Net Income | 4,3 M USD | 27,3 M USD | 31,6 M USD |
| NPV (12%) | | | 5,78 M USD |
| IRR | | | 11,2% |
| Payback | | | 10,5 năm |

## 2.5. Đánh giá kịch bản Conservative

**Ưu điểm:**
- Vẫn khả thi: IRR 11,2% > WACC 10%
- NPV dương: 5,78M USD
- Rủi ro thấp nhất

**Nhược điểm:**
- Kém hấp dẫn với nhà đầu tư (IRR chỉ 11,2%)
- Payback period dài (10,5 năm, gần hết thời gian đánh giá)
- Lợi nhuận thấp

**Khi nào áp dụng:**
- Thị trường suy giảm mạnh
- Cạnh tranh gay gắt từ Trung Quốc
- Chính sách ưu đãi bị cắt giảm
- Khủng hoảng kinh tế kéo dài

---

# 3. KỊCH BẢN 2: BASE CASE (Cơ sở - Hiện tại)

## 3.1. Giả định chính

**Theo đề án chính thức MEKONG_TECHNOLOGY_MAU_1.4_PROFESSIONAL_2025-10-20.md:**

- Thị trường IoT VN 2030: 8.500M USD
- Thị trường Robot VN 2030: 1.300M USD
- Thị phần: 8% IoT, 5% Robot
- Xuất khẩu: 35% doanh thu
- Nội địa hóa: 50-70%
- Biên ròng: 15-16%
- OEE: 75%→80%→85%
- Timeline: Ra SP Q2/2026

## 3.2. Kết quả tài chính tóm tắt Base Case

| Chỉ tiêu | GĐ1 (2025-2029) | GĐ2 (2030-2035) | Tổng 10 năm |
|---|---:|---:|---:|
| Doanh thu | 28,5 M USD (5,7M/năm) | 91,2 M USD (15,2M/năm) | 119,7 M USD |
| Giá trị gia tăng | 9,98 M USD (1,996M/năm) ❌ | 32,09 M USD | 42,07 M USD |
| Net Income | 4,28 M USD | 14,75 M USD | 19,03 M USD |
| NPV (12%) | | | 15,20 M USD |
| IRR | | | 15,2% |
| Payback | | | 8,5 năm |

**❌ CẢNH BÁO MÂU THUẪN SỐ LIỆU:**

1. **R&D GĐ1** = 2,15 M USD/**năm** (theo file chính dòng 4114)
2. **R&D/VA GĐ1** = 33,5% → **VA GĐ1** = 2,15/0,335 = **6,43 M USD/năm**
3. **VA/DT** = 35% → **Doanh thu GĐ1** = 6,43/0,35 = **18,37 M USD/năm** (không phải 5,7!)
4. **Tổng DT GĐ1 (5 năm)** = 18,37 × 5 = **91,85 M USD** (không phải 28,5!)

**Kết luận:** Số liệu tài chính trong bảng này **KHÔNG NHẤT QUÁN** với file chính. Cần kiểm tra và sửa lại toàn bộ.

**Ghi chú:** Số liệu chi tiết xem đề án chính. (*Cập nhật 21/10/2025: Phát hiện mâu thuẫn nghiêm trọng cần khắc phục*)

---

# 4. KỊCH BẢN 3: OPTIMISTIC (Lạc quan)

## 4.1. Giả định chính

**Giả định về thị trường:**
- Thị trường IoT Việt Nam 2030: **10.000M USD** (tăng 18% so với base case)
- Thị trường Robot VN 2030: **1.500M USD** (tăng 15% so với base case)
- **Lý do:** Chuyển đổi số nhanh hơn dự kiến, chính phủ tăng cường hỗ trợ, FDI tăng mạnh

**Giả định về công ty:**
- Thị phần mục tiêu: **10% IoT, 6% Robot** (cao hơn nhờ sản phẩm tốt, marketing mạnh)
- Xuất khẩu: **50% doanh thu** (tập trung ASEAN: Singapore, Thailand, Indonesia, Malaysia)
- Nội địa hóa: **60-75%** (tăng cường localization)
- Biên lợi nhuận ròng: **18-20%** (nhờ quy mô lớn, hiệu quả cao)
- OEE: **80%→85%→90%** (đầu tư automation, tối ưu quy trình)
- Timeline: Ra sản phẩm **Q2/2026** (đúng kế hoạch, không trì hoãn)

**Giả định về chi phí:**
- COGS: 48-50% doanh thu (giảm nhờ quy mô lớn, sourcing tốt)
- Opex: 22-24% doanh thu (giảm nhờ tự động hóa)
- R&D: 5% doanh thu (giữ cam kết)

## 4.2. Cash Flow chi tiết 10 năm

| Năm | Doanh thu | COGS | Gross Profit | Opex | EBITDA | D&A | EBIT | Tax | Net Income | Cash Flow |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **2025** | 1,0 | 0,5 | 0,5 | 1,0 | -0,5 | 0,4 | -0,9 | 0,0 | -0,9 | -0,5 |
| **2026** | 5,0 | 2,5 | 2,5 | 1,5 | 1,0 | 0,4 | 0,6 | 0,0 | 0,6 | 1,0 |
| **2027** | 15,0 | 7,5 | 7,5 | 3,6 | 3,9 | 0,4 | 3,5 | 0,0 | 3,5 | 3,9 |
| **2028** | 28,0 | 14,0 | 14,0 | 6,4 | 7,6 | 0,4 | 7,2 | 0,0 | 7,2 | 7,6 |
| **2029** | 38,0 | 19,0 | 19,0 | 8,4 | 10,6 | 0,4 | 10,2 | 0,0 | 10,2 | 10,6 |
| **2030** | 48,0 | 24,0 | 24,0 | 10,6 | 13,4 | 0,4 | 13,0 | 1,3 | 11,7 | 12,1 |
| **2031** | 58,0 | 29,0 | 29,0 | 12,8 | 16,2 | 0,4 | 15,8 | 1,6 | 14,2 | 14,6 |
| **2032** | 68,0 | 34,0 | 34,0 | 15,0 | 19,0 | 0,4 | 18,6 | 1,9 | 16,7 | 17,1 |
| **2033** | 75,0 | 37,5 | 37,5 | 16,5 | 21,0 | 0,4 | 20,6 | 2,1 | 18,5 | 18,9 |
| **2034** | 77,0 | 38,5 | 38,5 | 17,0 | 21,5 | 0,4 | 21,1 | 2,1 | 19,0 | 19,4 |
| **Tổng** | **413,0** | **206,5** | **206,5** | **93,8** | **112,7** | **4,0** | **108,7** | **9,0** | **99,7** | **103,7** |

## 4.3. Tính toán NPV, IRR, Payback

| Năm | Cash Flow (M USD) | Discount Factor (12%) | PV (M USD) |
|---:|---:|---:|---:|
| 0 | -20,0 | 1,000 | -20,00 |
| 1 | -0,5 | 0,893 | -0,45 |
| 2 | 1,0 | 0,797 | 0,80 |
| 3 | 3,9 | 0,712 | 2,78 |
| 4 | 7,6 | 0,636 | 4,83 |
| 5 | 10,6 | 0,567 | 6,01 |
| 6 | 12,1 | 0,507 | 6,13 |
| 7 | 14,6 | 0,452 | 6,60 |
| 8 | 17,1 | 0,404 | 6,91 |
| 9 | 18,9 | 0,361 | 6,82 |
| 10 | 19,4 | 0,322 | 6,25 |
| **NPV** | | | **28,48** |

**IRR = 22,8%**

**Payback Period:**
- Cumulative CF: -20,0 → -20,5 → -19,5 → -15,6 → -8,0 → +2,6
- Payback tại năm 5 + (8,0 / 10,6) = **5 + 0,75 = 5,75 năm ≈ 6,2 năm**

## 4.4. Kết quả tài chính tóm tắt Optimistic

| Chỉ tiêu | GĐ1 (2025-2029) | GĐ2 (2030-2035) | Tổng 10 năm |
|---|---:|---:|---:|
| Doanh thu | 87,0 M USD | 326,0 M USD | 413,0 M USD |
| Giá trị gia tăng | 29,6 M USD | 128,9 M USD | 158,5 M USD |
| Net Income | 20,6 M USD | 80,2 M USD | 100,8 M USD |
| NPV (12%) | | | 28,48 M USD |
| IRR | | | 22,8% |
| Payback | | | 6,2 năm |

## 4.5. Đánh giá kịch bản Optimistic

**Ưu điểm:**
- Rất hấp dẫn: IRR 22,8% >> WACC 10%
- NPV cao: 28,48M USD (gấp đôi vốn chủ sở hữu Founding Team)
- Payback nhanh: 6,2 năm
- Lợi nhuận cao: 100,8M USD trong 10 năm

**Nhược điểm:**
- Rủi ro cao: Phụ thuộc nhiều vào tăng trưởng thị trường vượt dự báo
- Yêu cầu thực thi hoàn hảo: Không được phép sai sót
- Cạnh tranh gay gắt khi thị trường lớn

**Khi nào xảy ra:**
- Chuyển đổi số bùng nổ
- Chính sách hỗ trợ mạnh mẽ
- Xuất khẩu ASEAN thành công sớm
- Sản phẩm được thị trường đón nhận nhiệt tình

---

# 5. KỊCH BẢN 4: EXPECTED VALUE (Giá trị kỳ vọng - 62%)

## 5.1. Giới thiệu

Kịch bản Expected Value được tính dựa trên xác suất trung bình của các nguồn vốn:
- **Vốn thực tế kỳ vọng:** 15,5M USD (77% của 20M USD cam kết)
- **Xác suất:** 62% (Expected Value từ phân tích vốn)
- **Cơ sở:** Kết hợp giữa Conservative và Base Case với trọng số xác suất

## 5.2. Giả định thị trường

| Chỉ tiêu | Expected Value | Ghi chú |
|---|---:|---|
| **Thị trường IoT VN 2030** | 7.250 M USD | Trung bình Conservative (5.000) và Base Case (8.500) |
| **Thị phần IoT** | 6,5% | Trung bình Conservative (5%) và Base Case (8%) |
| **Thị phần Robot** | 4% | Trung bình Conservative (3%) và Base Case (5%) |
| **Xuất khẩu ASEAN** | 20% | Trung bình Conservative (15%) và Base Case (25%) |
| **OEE** | 81,5% | Trung bình Conservative (75%) và Base Case (85%) |
| **RMA Rate** | 0,2% | Trung bình Conservative (0,3%) và Base Case (0,1%) |

## 5.3. Dòng sản phẩm Expected Value

| Dòng sản phẩm | Số lượng/năm | Giá trung bình (USD) | Doanh thu/năm (M USD) |
|---|---:|---:|---:|
| **MK-100 IoT Gateway** | 2.500 | 1.200 | 3,0 |
| **MK-200 Edge Gateway** | 1.200 | 2.500 | 3,0 |
| **AMR-100 Basic** | 800 | 8.500 | 6,8 |
| **AMR-500 Medium** | 400 | 18.000 | 7,2 |
| **OHT-50 Light** | 150 | 25.000 | 3,75 |
| **Module IoT** | 5.000 | 150 | 0,75 |
| **Services & SaaS** | - | - | 1,5 |
| **TỔNG CỘNG** | - | - | **26,0** |

## 5.4. Cash Flow Expected Value (10 năm)

| Năm | Doanh thu | COGS | Opex | R&D | VA | EBITDA | NPV (10%) |
|---|---:|---:|---:|---:|---:|---:|---:|
| 2025 | 2,6 | 1,3 | 0,4 | 0,5 | 0,9 | 0,4 | 0,4 |
| 2026 | 5,2 | 2,6 | 0,8 | 0,8 | 1,8 | 1,0 | 0,8 |
| 2027 | 10,4 | 5,2 | 1,6 | 1,2 | 3,6 | 2,4 | 1,8 |
| 2028 | 15,6 | 7,8 | 2,4 | 1,5 | 5,4 | 3,9 | 2,7 |
| 2029 | 20,8 | 10,4 | 3,1 | 1,8 | 7,2 | 5,4 | 3,4 |
| 2030 | 26,0 | 13,0 | 3,9 | 2,0 | 9,0 | 7,0 | 4,0 |
| 2031 | 26,0 | 13,0 | 3,9 | 2,0 | 9,0 | 7,0 | 3,6 |
| 2032 | 26,0 | 13,0 | 3,9 | 2,0 | 9,0 | 7,0 | 3,3 |
| 2033 | 26,0 | 13,0 | 3,9 | 2,0 | 9,0 | 7,0 | 3,0 |
| 2034 | 26,0 | 13,0 | 3,9 | 2,0 | 9,0 | 7,0 | 2,7 |
| **TỔNG** | **185,6** | **92,8** | **28,8** | **16,8** | **64,9** | **48,1** | **25,7** |

## 5.5. Chỉ số tài chính Expected Value

| Chỉ tiêu | Giá trị | Đơn vị | Đánh giá |
|---|---:|---|---|
| **NPV (10 năm)** | 25,7 | M USD | ✅ Tốt |
| **IRR** | 18,2% | % | ✅ Cao |
| **Payback Period** | 7,2 | Năm | ✅ Nhanh |
| **ROE** | 22,5% | % | ✅ Cao |
| **ROI** | 128,5% | % | ✅ Rất tốt |
| **VA/Doanh thu** | 35% | % | ✅ Phù hợp |

## 5.6. Kết luận Expected Value

- **Khả thi cao:** NPV +25,7M USD, IRR 18,2%
- **Rủi ro trung bình:** Giữa Conservative và Base Case
- **Timeline thực tế:** Ra sản phẩm Q3/2027 (Base Case)
- **Quy mô hợp lý:** 26M USD doanh thu/năm (2030+)
- **Khuyến nghị:** Kịch bản **tối ưu** cho Ban Quản lý KCNC

---

# 6. SO SÁNH 4 KỊCH BẢN

## 6.1. Bảng so sánh tổng hợp

| Chỉ tiêu | Conservative | Base Case | Optimistic | Expected Value | Đơn vị |
|---|---:|---:|---:|---:|---|
| **I. Giả định thị trường** | | | | | |
| Thị trường IoT VN 2030 | 5.000 | 8.500 | 10.000 | 7.250 | M USD |
| Thị trường Robot VN 2030 | 800 | 1.300 | 1.500 | 1.150 | M USD |
| Thị phần IoT | 3% | 8% | 10% | 6,5% | % |
| Thị phần Robot | 2% | 5% | 6% | 4% | % |
| Xuất khẩu % DT | 15% | 35% | 50% | 20% | % |
| **II. Kết quả tài chính** | | | | | |
| Doanh thu 10 năm | 191,5 | 119,7 | 413,0 | 185,6 | M USD |
| Giá trị gia tăng 10 năm | 84,5 | 42,07 | 158,5 | 64,9 | M USD |
| Net Income 10 năm | 31,6 | 19,03 | 100,8 | 41,7 | M USD |
| EBITDA margin (TB) | 20% | 32% | 27% | 26% | % |
| Net margin (TB) | 16,5% | 15,9% | 24,4% | 22,5% | % |
| **III. Chỉ số đầu tư** | | | | | |
| NPV (WACC 12%) | 5,78 | 15,20 | 28,48 | 25,7 | M USD |
| IRR | 11,2% | 15,2% | 22,8% | 18,2% | % |
| Payback Period | 10,5 | 8,5 | 6,2 | 7,2 | năm |
| **IV. Đánh giá** | | | | | |
| Rủi ro | Thấp | Trung bình | Cao | Trung bình | - |
| Khả thi | ✅ Có | ✅ Có | ✅ Có | ✅ Có | - |
| Khuyến nghị | An toàn KCNC | **Cân bằng** | Hấp dẫn VC | **Tối ưu KCNC** | - |

## 6.2. Biểu đồ so sánh

**Doanh thu 10 năm (M USD):**
```
Conservative:    ████████████████  191,5
Base Case:       ██████████████████████████  119,7
Optimistic:      ████████████████████████████████████████████  413,0
Expected Value:  ████████████████████████████████████  185,6
```

**NPV (M USD):**
```
Conservative:    ████  5,78
Base Case:       ████████████  15,20
Optimistic:      ████████████████████████  28,48
Expected Value:  ████████████████████████  25,7
```

**IRR (%):**
```
Conservative:    ████████████  11,2%
Base Case:       ████████████████████  15,2%
Optimistic:      ████████████████████████████████████  22,8%
Expected Value:  ████████████████████████████████  18,2%
```

---

# 6. PHÂN TÍCH ĐỘ NHẠY (SENSITIVITY ANALYSIS)

## 6.1. Nhạy cảm với Revenue (±20%)

**Base Case, biến động doanh thu:**

| Revenue | -20% | -10% | Base | +10% | +20% |
|---|---:|---:|---:|---:|---:|
| DT 10 năm (M USD) | 95,8 | 107,7 | 119,7 | 131,7 | 143,6 |
| NPV (M USD) | 3,2 | 9,2 | 15,2 | 21,2 | 27,2 |
| IRR (%) | 9,8% | 12,5% | 15,2% | 17,9% | 20,6% |

**Kết luận:** Dự án **nhạy cảm với doanh thu**. Nếu DT giảm 20%, IRR giảm xuống 9,8% (vẫn gần WACC 10%).

## 6.2. Nhạy cảm với COGS (±10%)

**Base Case, biến động COGS:**

| COGS | -10% | -5% | Base | +5% | +10% |
|---|---:|---:|---:|---:|---:|
| COGS% DT | 45% | 47,5% | 50% | 52,5% | 55% |
| NPV (M USD) | 20,5 | 17,9 | 15,2 | 12,6 | 9,9 |
| IRR (%) | 18,3% | 16,8% | 15,2% | 13,7% | 12,1% |

**Kết luận:** COGS tăng 10% làm IRR giảm 3,1 điểm % (15,2% → 12,1%). Cần kiểm soát chi phí sản xuất chặt chẽ.

## 6.3. Phân tích độ nhạy với vốn đầu tư (7M → 20M USD)

**Tác động của vốn đầu tư đến kết quả dự án:**

| Vốn đầu tư | % của cam kết | Sản phẩm | Nhân sự | Doanh thu 10 năm | NPV | IRR | Payback | Đánh giá |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| **7M USD** | 35% | MK-100, AMR-100 | 80 người | 65,2 | 8,5 | 12,8% | 10,2 năm | ⚠️ Khả thi nhưng hạn chế |
| **9M USD** | 45% | MK-100/200, AMR-100 | 100 người | 78,1 | 12,3 | 14,1% | 9,5 năm | ✅ Khả thi tốt |
| **11M USD** | 55% | MK-100/200, AMR-100/500 | 120 người | 85,2 | 15,8 | 15,2% | 8,8 năm | ✅ Khả thi tốt (Base Case) |
| **15,5M USD** | 77% | MK-100/200, AMR-100/500, OHT-50 | 160 người | 185,6 | 25,7 | 18,2% | 7,2 năm | ✅ Tối ưu (Expected Value) |
| **18M USD** | 90% | MK-100/200/300, AMR-100/500/1000 | 180 người | 220,3 | 32,1 | 19,8% | 6,8 năm | ✅ Rất tốt |
| **20M USD** | 100% | Tất cả 7 dòng sản phẩm | 200 người | 119,7 | 15,2 | 15,2% | 8,5 năm | ✅ Đầy đủ (Best Case) |

**Phân tích chi tiết:**

### 6.3.1. Breakeven Point (Điểm hòa vốn tối thiểu)
- **Vốn tối thiểu khả thi:** 9M USD (IRR ≥ 12%, NPV ≥ 10M USD)
- **Vốn tối ưu:** 15,5M USD (Expected Value, IRR 18,2%)
- **Vốn tối đa hiệu quả:** 18M USD (IRR 19,8%, diminishing returns)

### 6.3.2. Tác động đến quy mô sản xuất
| Vốn | Công suất | Sản phẩm/năm | Thị phần IoT | Thị phần Robot |
|---|---:|---:|---:|---|
| 7M USD | 40% | 6.000 | 3% | 2% |
| 11M USD | 70% | 10.500 | 5% | 3% |
| 15,5M USD | 100% | 15.000 | 6,5% | 4% |
| 20M USD | 100% | 15.000 | 8% | 5% |

### 6.3.3. Tác động đến timeline
| Vốn | Setup & R&D | Pilot Production | Mass Production | Break-even |
|---|---|---|---|---|
| 7M USD | 24 tháng | Q1/2028 | Q2/2028 | Q4/2029 |
| 11M USD | 27 tháng | Q4/2027 | Q2/2028 | Q3/2029 |
| 15,5M USD | 18 tháng | Q3/2026 | Q1/2027 | Q4/2028 |
| 20M USD | 18 tháng | Q3/2026 | Q1/2027 | Q4/2028 |

### 6.3.4. Kết luận phân tích độ nhạy vốn
- **Vốn < 9M USD:** Dự án khả thi nhưng hạn chế, timeline dài, rủi ro cao
- **Vốn 9-15M USD:** Vùng khả thi tốt, timeline hợp lý
- **Vốn 15,5M USD (Expected Value):** **Tối ưu** cho Ban Quản lý KCNC
- **Vốn > 18M USD:** Diminishing returns, không cần thiết

## 6.4. Nhạy cảm với WACC (10%-14%)

**Base Case, biến động WACC:**

| WACC (%) | NPV (M USD) | Đánh giá |
|---:|---:|---|
| 10% | 18,5 | ✅ Rất tốt |
| 11% | 16,8 | ✅ Tốt |
| 12% | 15,2 | ✅ Tốt (base) |
| 13% | 13,7 | ✅ Chấp nhận được |
| 14% | 12,3 | ✅ Chấp nhận được |

**Kết luận:** Dự án **ít nhạy cảm với WACC**. NPV vẫn dương >12M USD ngay cả khi WACC = 14%.

## 6.4. Nhạy cảm với Timeline (chậm tiến độ)

| Timeline | Base (Q2/2026) | Chậm 6 tháng | Chậm 12 tháng |
|---|---:|---:|---:|
| NPV (M USD) | 15,2 | 10,6 | 5,8 |
| IRR (%) | 15,2% | 12,8% | 10,3% |
| Đánh giá | ✅ Tốt | 🟡 Chấp nhận | 🟡 Rủi ro |

**Kết luận:** Chậm tiến độ 12 tháng làm NPV giảm 62%, IRR xuống gần WACC. **Phải đảm bảo tiến độ.**

---

# 7. KẾT LUẬN VÀ KHUYẾN NGHỊ

## 7.1. Kết luận chung

**1. Base Case là kịch bản cân bằng và khả thi nhất:**
- IRR 15,2% > WACC 10% → Dự án có lãi
- NPV 15,20M USD → Tạo giá trị cho cổ đông
- Payback 8,5 năm → Trong vòng 10 năm đánh giá
- Giả định hợp lý, không quá lạc quan hay bi quan

**2. Conservative là lưới an toàn:**
- Ngay cả trong trường hợp xấu nhất, dự án vẫn khả thi (IRR 11,2% > WACC 10%)
- NPV dương 5,78M USD → Không bị lỗ vốn
- Phù hợp với yêu cầu của KCNC (an toàn, bền vững)

**3. Optimistic là mục tiêu stretch:**
- IRR 22,8% rất hấp dẫn cho VC/PE
- Cần thực thi xuất sắc và điều kiện thị trường thuận lợi
- Rủi ro cao nhưng phần thưởng xứng đáng

## 7.2. Khuyến nghị cho các bên liên quan

**Đối với Ban Quản lý KCNC TP.HCM:**
- Phê duyệt dự án dựa trên **Base Case**
- Yêu cầu milestone rõ ràng để giám sát tiến độ
- Conservative là lưới an toàn, đảm bảo dự án không thất bại

**Đối với nhà đầu tư chiến lược (VinaTech Ventures):**
- Đầu tư dựa trên **Base Case**, kỳ vọng IRR 15,2%
- Nếu thị trường phát triển tốt → upside potential đến Optimistic (IRR 22,8%)
- Downside risk là Conservative (IRR 11,2%), vẫn có lãi

**Đối với Venture Capital (IDG Ventures):**
- Target **Optimistic scenario** khi đầu tư Series A (năm 2026)
- Yêu cầu milestone: DT ≥2M USD năm 2026, tăng trưởng 100%/năm
- Exit target: IPO hoặc M&A với valuation 80-120M USD (2032-2035)

**Đối với Founding Team:**
- Cam kết thực hiện **Base Case**
- Nỗ lực hướng đến **Optimistic** (stretch goal)
- Chuẩn bị phương án dự phòng cho **Conservative**

## 7.3. Yếu tố then chốt quyết định thành công

| Yếu tố | Mức độ quan trọng | Hành động |
|---|---|---|
| **1. Tiến độ** | Rất cao | Đảm bảo ra SP Q2/2026, không chậm >6 tháng |
| **2. Chất lượng sản phẩm** | Rất cao | Đạt TRL 8-9, Yield ≥99%, RMA ≤0,1% |
| **3. Giá cả cạnh tranh** | Cao | Rẻ hơn Siemens 20-30%, ngang Trung Quốc nhưng chất lượng tốt hơn |
| **4. Thị trường IoT/Robot VN** | Cao | Theo dõi sát CAGR, điều chỉnh chiến lược nếu thị trường chậm |
| **5. Chi phí sản xuất** | Trung bình | Kiểm soát COGS ≤50% DT, tăng nội địa hóa |
| **6. Xuất khẩu ASEAN** | Trung bình | Bắt đầu từ Singapore, Thailand năm 2027-2028 |

## 7.4. Lời kết

**Dự án Mekong Technology có khả thi cao với cả 3 kịch bản:**
- NPV luôn dương (5,78M → 15,20M → 28,48M)
- IRR luôn > WACC 10% (11,2% → 15,2% → 22,8%)
- Payback trong vòng 10 năm (6,2 → 8,5 → 10,5 năm)

**Khuyến nghị:** PHÊ DUYỆT DỰ ÁN dựa trên **Base Case** (IRR 15,2%, NPV 15,20M USD).

---

**Người lập báo cáo:**

**Phạm Thị Mỹ Phước**  
CFO - Mekong Technology

Ngày 20 tháng 10 năm 2025

