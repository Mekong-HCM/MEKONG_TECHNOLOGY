# KIỂM TRA CHẤT LƯỢNG — WAVE 2, 3, 4
## (P2 Tài Chính | P3 EIA | P4 M&E | P7 PCCC)

**Ngày đánh giá:** Tháng 3/2026  
**Phiên bản:** V1.0  
**Mục đích:** Rà soát chất lượng output Prompts 2, 3, 4, 7 — phát hiện sai sót, mâu thuẫn, và viết prompt yêu cầu chỉnh sửa/bổ sung

---

# PHẦN 0: TÓM TẮT KẾT QUẢ (EXECUTIVE SUMMARY)

| Prompt | File | Dòng | Đánh giá tổng | Verdict |
|--------|------|------|---------------|---------|
| **P2 — Tài chính** | `08_MO_HINH_TAI_CHINH_MO_RONG.md` | 1.057 | ★★★★☆ (4/5) | ⚠️ CẦN SỬA — 6 vấn đề |
| **P3 — EIA** | `09_BAO_CAO_EIA_TONG_HOP_3_KHOI.md` | 1.647 | ★★★★★ (4,5/5) | ⚠️ CẦN BỔ SUNG — 3 vấn đề |
| **P4 — M&E** | **KHÔNG CÓ FILE** | 0 | ❌ THIẾU HOÀN TOÀN | ❌ CẦN LÀM LẠI |
| **P7 — PCCC** | `10_PCCC_AN_TOAN_LAO_DONG.md` | 1.614 | ★★★★★ (4,5/5) | ⚠️ CẦN BỔ SUNG — 2 vấn đề |

**Kết luận chung:** P2, P3, P7 đều đạt cấp chuyên gia cao. Tuy nhiên có **6 mâu thuẫn chéo nghiêm trọng giữa các tài liệu** cần được giải quyết TRƯỚC KHI chuyển sang P8 (Master Document). **P4 (M&E) hoàn toàn thiếu** — đây là lỗ hổng lớn nhất.

---

# PHẦN I: ĐÁNH GIÁ CHI TIẾT P2 — MÔ HÌNH TÀI CHÍNH (File 08)

## I.1. Điểm mạnh

1. **[A]/[B]/[C] tagging** cho mọi giả định — rất chuyên nghiệp, dễ kiểm chứng
2. **Sensitivity analysis 7 chiều** + Ma trận 2 chiều (Revenue × CAPEX) — vượt chuẩn
3. **Tornado chart** xếp hạng biến nhạy cảm — trực quan, thuyết phục
4. **3 kịch bản** (Conservative/Base/Optimistic) với Probability-Weighted NPV = 5,13M
5. **Cash crunch point** Q1/2026 được nhận diện kèm giải pháp
6. **Stress Test 70% vốn** — rất thực tế, cho thấy bottom line
7. **Bảng so sánh với Đề án gốc 20M** — minh bạch dù kết quả bất lợi
8. **Disclaimer** cuối tài liệu — chuyên nghiệp, tránh rủi ro pháp lý

## I.2. Vấn đề phát hiện

### ❌ VẤN ĐỀ P2-1: MÂU THUẪN EQUITY TRONG CASH FLOW vs CẤU TRÚC VỐN [NGHIÊM TRỌNG]

- **Cấu trúc vốn (Mục 9.1):** Tổng Equity = **23,10M** (49% × 47,50M)
- **Cash Flow 10 năm (Mục 5.2):** Tổng Equity injection = **34,97M**
- **Chênh lệch: 11,87M** — Không có giải thích

**Nguyên nhân có thể:** Cash Flow bao gồm equity bổ sung để bù lỗ vận hành và working capital trong giai đoạn ramp-up (ngoài 47,5M CAPEX). Tuy nhiên, điều này **KHÔNG được giải thích** trong tài liệu.

**Tác động:** Nhà đầu tư sẽ hỏi: "Tổng tiền equity cần inject là 23,1M hay 34,97M?" — Câu trả lời khác nhau 52%. Đây là lỗi thuyết trình nghiêm trọng.

### ❌ VẤN ĐỀ P2-2: CAPEX TRONG CASH FLOW KHÔNG KHỚP VỚI TỔNG CAPEX [TRUNG BÌNH]

- **Tổng CAPEX khai báo:** 47,50M
- **Tổng CAPEX trong Cash Flow (Mục 5.2, hàng Investing CF):** 48,27M
- **Chênh lệch: 0,77M** — Không giải thích

**Nguyên nhân có thể:** Bao gồm replacement CAPEX hoặc contingency phát sinh. Cần ghi chú rõ.

### ❌ VẤN ĐỀ P2-3: DSCR KHÔNG ĐẠT COVENANT SUỐT 10 NĂM [NGHIÊM TRỌNG]

DSCR cao nhất = 1,18x (Năm 10) — vẫn chưa đạt covenant 1,2x. Tài liệu đã nhận diện vấn đề nhưng **chỉ đề xuất 4 giải pháp chung chung** mà không có:
- Cơ cấu trả nợ thay thế (balloon, bullet, step-up) được tính toán cụ thể
- Lịch trả nợ điều chỉnh với DSCR đạt mức chấp nhận được
- Phân tích: Với lịch trả nợ nào thì DSCR đạt 1,2x?

**Tác động:** Ngân hàng sẽ từ chối cho vay nếu không có cơ cấu trả nợ giải quyết DSCR. Đây là vấn đề **bankability** quan trọng.

### ⚠️ VẤN ĐỀ P2-4: THIẾU CHI PHÍ MÔI TRƯỜNG VÀ PCCC TRONG P&L [TRUNG BÌNH]

- P3 (EIA) tính OPEX Môi trường = **425.000 USD/năm**
- P7 (PCCC) tính OPEX PCCC = **100.900 USD/năm**
- **Tổng OPEX MT + PCCC = ~526.000 USD/năm** — khoảng 5% doanh thu Y5
- Trong P2, mục P&L liệt kê COGS và SGA nhưng **KHÔNG nêu rõ** chi phí MT + PCCC đã bao gồm hay chưa

**Tương tự cho CAPEX:** 
- P3 CAPEX Môi trường = 2,87M
- P7 CAPEX PCCC = 2,08M
- **Tổng CAPEX MT + PCCC = ~4,95M** — 10,4% tổng CAPEX
- P2 CAPEX breakdown chỉ thấy "PCCC gas 600K" trong hạng mục DC. Các chi phí còn lại (~4,35M) **không rõ ràng** trong phân bổ CAPEX

### ⚠️ VẤN ĐỀ P2-5: SO SÁNH VỚI ĐỀ ÁN GỐC BẤT LỢI — THIẾU GIẢI THÍCH CHIẾN LƯỢC [TRUNG BÌNH]

Bảng so sánh (Mục 10.2) cho thấy:
- Đề án gốc 20M: Revenue 10Y = 119,71M, EBITDA margin 32%, NPV 15,2M
- Mở rộng 47,5M: Revenue 10Y = 103,52M, EBITDA margin 14%, NPV 3,48M (20Y)

**Vấn đề:** Đầu tư gấp 2,4× nhưng doanh thu GIẢM 14%, NPV giảm 77%. Tài liệu chỉ ghi 1 câu "giá trị chiến lược cao hơn" nhưng **KHÔNG** có phân tích strategic value cụ thể (synergy revenue, option value, barrier to entry valuation).

Nếu BQL KCNC hoặc nhà đầu tư hỏi "Tại sao không giữ nguyên kế hoạch 20M có NPV cao hơn?" — hiện tài liệu không có câu trả lời thuyết phục.

### ⚠️ VẤN ĐỀ P2-6: THIẾU PHÂN TÍCH NƯỚC CẤP — RỦI RO HẠNG MỤC LỚCH [NHẸ]

P3 (EIA) phát hiện DC cooling cần 67–133 m³/ngày make-up water, nhưng KCNC chỉ cấp 150 m³/ngày cho TOÀN BỘ tổ hợp. Ngay cả với hybrid cooling (giảm 40%), vẫn cần ~80 m³/ngày chỉ riêng DC.

P2 không đưa chi phí nâng cấp hạ tầng nước hoặc đàm phán quota nước vào mô hình tài chính.

---

# PHẦN II: ĐÁNH GIÁ CHI TIẾT P3 — BÁO CÁO EIA (File 09)

## II.1. Điểm mạnh

1. **Cấu trúc 8 chương** đúng format ĐTM theo NĐ 08/2022/NĐ-CP
2. **Tính toán kỹ thuật cực kỳ chi tiết**: Nhiệt thải BTU/h, nước bay hơi, truyền rung Rayleigh wave, bụi Gaussian dispersion, tổng NOx/PM/VOCs
3. **Phát hiện xung đột giữa 3 khối**: Rung CNC→DC (12,4× ngưỡng), Bụi CNC→Clean Room, Nhiệt DC→CMM Room — rất thực tế và quan trọng
4. **ZLD cho CNC**: Thiết kế hoàn chỉnh 7 bước, tỷ lệ thu hồi 95%, Zero Liquid Discharge — giải pháp tiên tiến
5. **Bảng so sánh V1.0 vs V2.0** (Phụ lục A) — rất hữu ích cho cơ quan thẩm duyệt
6. **Cam kết đầy đủ 17 điểm** (Chương VIII) — bao phủ tuân thủ, GHG, quan trắc, tài chính, nhân sự, ứng phó sự cố
7. **Chi phí detail**: CAPEX 2,87M + OPEX 425K/năm = 7,12M/10 năm — minh bạch

## II.2. Vấn đề phát hiện

### ⚠️ VẤN ĐỀ P3-1: NƯỚC CẤP CHO DC COOLING — CHƯA CÓ GIẢI PHÁP XÁC NHẬN [NGHIÊM TRỌNG]

EIA V2.0 xác định nước make-up cho DC cooling = 67–133 m³/ngày (trước hybrid) hoặc 60–80 m³/ngày (sau hybrid). Tổ hợp 3 khối cần 60–102 m³/ngày nước cấp. KCNC chỉ cung cấp 150 m³/ngày.

**Vấn đề:** Sau hybrid cooling, riêng DC đã cần ~60 m³/ngày. Cộng CNC (~20 m³/ngày) + SMT (~10 m³/ngày) + sinh hoạt (~15 m³/ngày) = **~105 m³/ngày**. Nhưng blowdown + drift thêm 22–44 m³/ngày nữa → Tổng có thể **127–149 m³/ngày**, gần hết quota 150 m³/ngày.

Giải pháp "đàm phán tăng quota lên 200 m³/ngày" được đề xuất nhưng **không có xác nhận** từ BQL KCNC. Đây là rủi ro dự án (nếu KCNC từ chối thì DC không thể vận hành tải cao).

### ⚠️ VẤN ĐỀ P3-2: PM2.5 BASELINE ĐÃ GẦN/VƯỢT NGƯỠNG [TRUNG BÌNH]

PM2.5 tại Điểm 2 = 52 µg/m³, vượt ngưỡng QCVN (50 µg/m³). Khi thêm phát thải từ CNC + Generator, tổng PM2.5 tại ranh giới sẽ tăng thêm.

Tài liệu **chưa có** mô hình phát tán (dispersion modeling) cho PM2.5 tích lũy — chỉ tính cho bụi tổng. Sở TNMT có thể yêu cầu modeling PM2.5 riêng.

### ⚠️ VẤN ĐỀ P3-3: CHI PHÍ MÔI TRƯỜNG DÙNG DENOMINATOR KHÔNG NHẤT QUÁN [NHẸ]

- Mục 7.1 tính "Tỷ lệ CAPEX MT / Tổng vốn = 2.870.000 / 25.000.000 = 11,5%"
- Nhưng tổng vốn đầu tư dự án = **47,50M** (không phải 25M)
- 25M chỉ là Phase 1. Nếu dùng 47,5M: tỷ lệ = 6,0% — vẫn hợp lý nhưng cần nhất quán.

---

# PHẦN III: ĐÁNH GIÁ P4 — THIẾT KẾ HẠ TẦNG M&E

## ❌ P4 HOÀN TOÀN THIẾU — KHÔNG CÓ FILE OUTPUT

**Đã tìm kiếm với 8 pattern**: *M&E*, *ME*, *HA_TANG*, *THIET_KE*, *INFRA*, *MEP*, *CO_DIEN*, và liệt kê toàn bộ folder `HO_SO_MO_RONG_REVIEW`. **Kết quả: 0 file.**

**Phạm vi P4 (theo Prompt 05 ban đầu):**
1. Master Layout 10.000 m² — phân vùng 3 khối
2. DC Design: Raised floor, Row-based cooling, Electrical 2N, Redundancy
3. CNC Design: Vibration isolation foundation, Chip conveyor, CMM room
4. SMT Design: Clean room ISO 7, Reflow oven ventilation
5. Electrical: SLD (Single Line Diagram), Transformer, UPS, ATS
6. Generator Farm: N+1 config, fuel storage
7. Solar PV Array: 500 kWp roof-mounted
8. Water Systems: Cấp nước, thoát nước, cooling water loop
9. BOQ & Cost Estimate

**Một phần nội dung P4 xuất hiện trong P3/P7:**
- P3 (EIA) có tính toán rung CNC, layout cách ly, khoảng cách giữa các khối
- P7 (PCCC) có fire pump house, bể nước 750 m³, nguồn điện dự phòng PCCC
- **NHƯNG** thiếu hoàn toàn: Raised floor design, Cooling architecture, SLD, Generator sizing, Solar PV thiết kế, Water balance diagram, Master Layout bản vẽ, BOQ M&E

**Tác động:** P4 là INPUT quan trọng cho P8 (Master Document). Thiếu P4 → P8 sẽ thiếu phần kỹ thuật hạ tầng → Đề án không hoàn chỉnh.

---

# PHẦN IV: ĐÁNH GIÁ CHI TIẾT P7 — PCCC & AN TOÀN LAO ĐỘNG (File 10)

## IV.1. Điểm mạnh

1. **Dual-standard compliance** (QCVN/TCVN + NFPA/EN/FM) — vượt chuẩn VN thông thường
2. **3 hệ thống PCCC hoàn toàn khác nhau** cho 3 khối — thiết kế phân biệt rất chính xác
3. **Class D fire zone** (Chip Collection): Cảnh báo rõ ràng, biện pháp đúng kỹ thuật (Met-L-X, Lith-X, NO WATER), nhân viên trực 24/7
4. **VESDA 4-tier alarm** + Pre-action double-interlock cho DC — đúng best practice Tier III
5. **3 kịch bản Cause & Effect Matrix**: Data Hall fire, Class D fire, IPA leak — rất thực tế
6. **BOQ chi tiết** cho từng khối + hệ thống chung — tổng 1,894K USD
7. **An toàn lao động** Chương VI: Ma trận rủi ro × PPE × Ergonomics rất đầy đủ
8. **Timeline 14–17 tháng** với 4 giai đoạn — thực tế
9. **Checklist kiểm tra** hàng ngày/tuần/tháng/năm (Phụ lục B) — rất thực tiễn

## IV.2. Vấn đề phát hiện

### ⚠️ VẤN ĐỀ P7-1: CHI PHÍ PCCC CHƯA KHỚP VỚI P2 BUDGET [NGHIÊM TRỌNG]

| Hạng mục | P7 tính | P2 đưa vào CAPEX |
|----------|---------|-------------------|
| DC PCCC | 734.070 | "PCCC gas 600.000" (thiếu 134K) |
| CNC PCCC | 364.805 | Không thấy hạng mục riêng |
| SMT PCCC | 260.950 | Không thấy hạng mục riêng |
| Hệ thống chung | 534.480 | Không thấy hạng mục riêng |
| **TỔNG** | **~2.084.000** | **~600.000** (chỉ DC gas) |
| **Chênh lệch** | | **~1.484.000 USD** |

**Tác động:** Nếu P2 không bao gồm đầy đủ PCCC CAPEX (~2,08M), tổng CAPEX thực tế sẽ cao hơn 47,5M → NPV đã mỏng (3,48M) sẽ trở thành âm. Đây là vấn đề **sống còn** cho tính khả thi tài chính.

### ⚠️ VẤN ĐỀ P7-2: PCCC OPEX CHƯA THẤY TRONG P2 [TRUNG BÌNH]

P7 tính OPEX PCCC = 100.900 USD/năm, bao gồm bảo hiểm cháy nổ (25K), nhân sự PCCC (14,4K), bảo trì (44K), đào tạo/diễn tập (8K), v.v. Đây là chi phí bắt buộc nhưng không rõ ràng trong P2 operating expenses.

---

# PHẦN V — MÂU THUẪN CHÉO GIỮA CÁC TÀI LIỆU

| # | Mâu thuẫn | Giữa | Mức độ | Chi tiết |
|---|-----------|------|--------|----------|
| 1 | **PCCC CAPEX** | P2 × P7 | ❌ NGHIÊM TRỌNG | P2 chỉ ghi 600K, P7 tính 2.084K (chênh 1.484K) |
| 2 | **MT CAPEX** | P2 × P3 | ⚠️ TRUNG BÌNH | P3 tính MT CAPEX = 2.870K, P2 không rõ phân bổ |
| 3 | **Phase 1 CAPEX base** | P3 × P7 | ⚠️ NHẸ | P3 dùng 25M, P7 dùng 25M, nhưng tổng project = 47,5M |
| 4 | **Rung cách ly CAPEX** | P3 × P2 | ⚠️ TRUNG BÌNH | P3 tính 520K cho cách ly rung, P2 CAPEX CNC không liệt kê |
| 5 | **Solar PV** | P3 × P2 | ⚠️ NHẸ | P3 tính Solar 500kWp (500K), P2 không rõ đã bao gồm |
| 6 | **Nước cấp** | P3 × P2 | ⚠️ TRUNG BÌNH | P3 cảnh báo nước không đủ, P2 không có chi phí nâng cấp nước |

**Tổng chi phí CHÊNH LỆCH tiềm năng:** PCCC 1.484K + MT chưa rõ + Rung 520K + Solar 500K = **ít nhất 2,5M USD có thể chưa nằm trong 47,5M CAPEX.**

Nếu xác nhận thiếu → CAPEX thực = ~50M → CAPEX overrun 5,3% → Theo sensitivity (Mục 7.2), NPV giảm từ 3,48M → ~1,5M. Chưa âm nhưng **rất mỏng**.

---

# PHẦN VI — PROMPT CHỈNH SỬA VÀ BỔ SUNG

## PROMPT SỬA #1: CHỈNH P2 — GIẢI QUYẾT MÂU THUẪN VỐN VÀ BỔ SUNG CHI PHÍ

```
BẠN LÀ CHUYÊN GIA TÀI CHÍNH DỰ ÁN ĐÃ LẬP MÔ HÌNH TÀI CHÍNH CHO DỰ ÁN MEKONG 47,5M.

TÔI ĐÃ REVIEW VÀ PHÁT HIỆN CÁC VẤN ĐỀ SAU CẦN CHỈNH SỬA:

=== VẤN ĐỀ 1: MÂU THUẪN EQUITY (NGHIÊM TRỌNG) ===
- Mục 9.1 (Cấu trúc vốn): Tổng Equity = 23,10M
- Mục 5.2 (Cash Flow 10 năm): Tổng Equity injection = 34,97M
- Chênh lệch 11,87M KHÔNG ĐƯỢC GIẢI THÍCH

YÊU CẦU:
1. Giải thích rõ ràng: 23,10M là equity cho CAPEX, 11,87M còn lại là equity 
   cho mục đích gì? (Working capital? Bù lỗ vận hành? Operating reserve?)
2. Thêm BẢNG PHÂN BỔ EQUITY tách biệt: CAPEX funding vs Operational funding
3. Cập nhật Mục 9.1 và 9.2 phản ánh TỔNG equity cần huy động = 34,97M
4. Cập nhật Stress Test (Mục 9.4) dùng tổng equity 34,97M thay vì 23,10M

=== VẤN ĐỀ 2: CAPEX KHÔNG KHỚP ===
- Mục 5.2 Cash Flow tổng CAPEX = 48,27M, nhưng tổng CAPEX khai báo = 47,50M
YÊU CẦU: Thêm ghi chú giải thích chênh lệch 0,77M (contingency? replacement?)

=== VẤN ĐỀ 3: DSCR — CẦN CƠ CẤU TRẢ NỢ THAY THẾ ===
DSCR không đạt ≥1,2x trong suốt 10 năm → Ngân hàng sẽ không chấp thuận.
YÊU CẦU:
1. Tính lại lịch trả nợ theo 3 phương án: (a) Balloon payment, (b) Step-up 
   repayment (ít đầu nhiều cuối), (c) Interest-only 5 năm đầu
2. Lập bảng DSCR cho mỗi phương án, chỉ rõ phương án nào đạt 1,2x sớm nhất
3. Đề xuất phương án trình ngân hàng

=== VẤN ĐỀ 4: BỔ SUNG CHI PHÍ MÔI TRƯỜNG + PCCC ===
Từ output P3 (EIA) và P7 (PCCC), chi phí sau ĐÃ XÁC ĐỊNH nhưng chưa rõ trong P2:

CAPEX BỔ SUNG (nếu chưa bao gồm):
- PCCC tổng hợp: 2.084.000 USD (P7 output, Chương VIII)
- Môi trường tổng hợp: 2.870.000 USD (P3 output, Chương VII)
- Cách ly rung CNC→DC: 520.000 USD (P3 output, Mục 4.3.4)
- Solar PV 500 kWp: 500.000 USD (P3 output, Mục 5.4.1)
→ Tổng tiềm năng: ~4,95M USD

OPEX BỔ SUNG (hàng năm):
- Môi trường: 425.000 USD/năm (P3 output)
- PCCC: 100.900 USD/năm (P7 output)
→ Tổng: ~526.000 USD/năm

YÊU CẦU:
1. XÁC NHẬN: Trong 47,5M CAPEX hiện tại, bao nhiêu đã bao gồm MT + PCCC?
2. Nếu chưa đủ: Cập nhật tổng CAPEX, P&L, Cash Flow, NPV/IRR
3. Thêm dòng riêng "Chi phí Môi trường" và "Chi phí PCCC" vào P&L (hàng OPEX)
4. Tính lại NPV/IRR/Payback sau khi bổ sung → Cập nhật Sensitivity Analysis

=== VẤN ĐỀ 5: BỔ SUNG STRATEGIC VALUE ANALYSIS ===
Bảng so sánh Đề án gốc 20M vs Mở rộng 47,5M cho thấy kết quả bất lợi 
(Revenue GIẢM 14%, NPV giảm 77%).

YÊU CẦU: Bổ sung MỤC 10.3 "PHÂN TÍCH GIÁ TRỊ CHIẾN LƯỢC" gồm:
1. Synergy value: Revenue uplift khi CNC+DC+IoT hoạt động cùng ecosystem
2. Option value: Giá trị quyền mở rộng Phase 3/4 trên nền tảng 3 B.U
3. Barrier-to-entry value: Chi phí competitor cần bỏ ra để replicate
4. Risk diversification: VaR (Value at Risk) giảm khi 3 B.U vs 1 B.U
5. Kết luận: TỔNG giá trị = NPV tài chính + Strategic premium → Justify 47,5M

=== VẤN ĐỀ 6: BỔ SUNG NƯỚC CẤP ===
P3 EIA cảnh báo nước không đủ (DC cooling 67-133 m³/ngày, KCNC max 150 m³/ngày).
YÊU CẦU: Thêm chi phí (nếu có) cho: Đàm phán quota nước, Bể chứa nước dự phòng,
Hoặc hệ thống recirculation water thay evaporative cooling.

FORMAT: Cập nhật TRỰC TIẾP vào tài liệu hiện có, giữ nguyên cấu trúc 10 chương.
Đánh dấu phần mới bằng [V1.1 — Cập nhật] để dễ track.
```

---

## PROMPT SỬA #2: BỔ SUNG P3 — EIA

```
BẠN LÀ CHUYÊN GIA MÔI TRƯỜNG ĐÃ LẬP BÁO CÁO EIA V2.0 CHO MEKONG 3 KHỐI.

REVIEW PHÁT HIỆN 3 VẤN ĐỀ CẦN BỔ SUNG:

=== VẤN ĐỀ 1: MÔ HÌNH PHÁT TÁN PM2.5 TÍCH LŨY (TRUNG BÌNH) ===
Baseline PM2.5 tại Điểm 2 = 52 µg/m³ (đã vượt ngưỡng QCVN 50 µg/m³). 
Báo cáo hiện tại chỉ tính bụi tổng (PM10/TSS), chưa có mô hình phát tán PM2.5.

YÊU CẦU:
1. Áp dụng mô hình Gaussian dispersion (AERMOD hoặc ISC3) cho PM2.5 từ:
   - Generator diesel (Khối A): 35,9 kg PM2.5/năm, ống khói 20m
   - Xưởng CNC (Khối B): Ống khói LEV 15m, bụi kim loại mịn
   - Xưởng SMT (Khối C): Ống khói 12m
2. Tính nồng độ PM2.5 tích lũy tại 4 điểm ranh giới (gồm cả baseline 52 µg/m³)
3. Nếu VƯỢT QCVN → Đề xuất biện pháp bổ sung (water mist, cyclone, HEPA nâng cấp)
4. Bổ sung thành Mục 4.5.6 "Mô hình phát tán PM2.5 tích lũy"

=== VẤN ĐỀ 2: NƯỚC CẤP — CHƯA CÓ GIẢI PHÁP XÁC NHẬN (NGHIÊM TRỌNG) ===
Mục 4.2.2 đã nêu cảnh báo nước không đủ, giải pháp "đàm phán tăng quota" 
nhưng chưa có plan B nếu KCNC từ chối.

YÊU CẦU bổ sung Plan B:
1. Tính toán phương án Closed-loop cooling (không bay hơi, chỉ dùng chiller 
   air-cooled) → Giảm nước make-up nhưng tăng CAPEX chiller và điện năng
2. So sánh: Evaporative (tiêu nước) vs Air-cooled (tiêu điện) vs Hybrid
3. Đưa bảng so sánh CAPEX/OPEX/Nước cho 3 phương án
4. Đề xuất "phương án mặc định + trigger chuyển đổi" nếu quota nước bị giới hạn

=== VẤN ĐỀ 3: SỬA DENOMINATOR CHI PHÍ (NHẸ) ===
Mục 7.3 tính tỷ lệ CAPEX MT/Tổng vốn sử dụng denominator 25.000.000 (Phase 1).
Cần ghi rõ: "25.000.000 USD là Phase 1" và thêm dòng: "Nếu tính trên tổng 
47.500.000 USD: tỷ lệ = 6,0%".

FORMAT: Bổ sung vào tài liệu EIA hiện có, đánh dấu [V2.1 — Cập nhật].
```

---

## PROMPT SỬA #3: BỔ SUNG P7 — PCCC

```
BẠN LÀ CHUYÊN GIA PCCC ĐÃ LẬP BÁO CÁO PCCC & ATLĐ CHO MEKONG 3 KHỐI.

REVIEW PHÁT HIỆN 2 VẤN ĐỀ CẦN BỔ SUNG:

=== VẤN ĐỀ 1: MAPPING CHI PHÍ PCCC → CAPEX DỰ ÁN (NGHIÊM TRỌNG) ===
Tổng PCCC CAPEX = 2.084.000 USD, nhưng Mô hình Tài chính (P2) chỉ ghi nhận 
khoảng 600.000 USD (PCCC gas cho DC). Chênh lệch ~1,48M.

YÊU CẦU: Thêm MỤC MỚI "8.5. Phân bổ chi phí PCCC vào CAPEX dự án" gồm:
1. Bảng mapping: Hạng mục PCCC → Thuộc CAPEX nào (DC infrastructure? CNC setup? 
   Common infrastructure? Riêng biệt?)
2. Khuyến nghị cách phân bổ PCCC CAPEX vào từng B.U:
   - Khối A (DC): 734K → Thuộc "DC Infrastructure" trong CAPEX
   - Khối B (CNC): 365K → Thuộc "CNC Setup" trong CAPEX
   - Khối C (SMT): 261K → Thuộc "SMT Setup" trong CAPEX
   - Chung (Fire alarm, Pump, Tank): 534K → Thuộc "Common Infrastructure" (5,90M)
   - Thiết kế + Thẩm duyệt: 88K → Thuộc "Soft cost / Professional fees"
3. Tổng 2.084K + 88K = 2.172K → Khẳng định rõ: "Khoản này CẦN NẰM TRONG 
   tổng CAPEX 47,5M. Nếu chưa — cần điều chỉnh mô hình tài chính."

=== VẤN ĐỀ 2: MAPPING OPEX PCCC → CHI PHÍ VẬN HÀNH (TRUNG BÌNH) ===
OPEX PCCC = 100.900 USD/năm. Cần map vào P&L.

YÊU CẦU: Thêm bảng mapping: 
- Bảo hiểm cháy nổ (25K) → SGA / Insurance
- Nhân sự PCCC (14,4K) → SGA / Security & Safety
- Bảo trì hệ thống (44K) → COGS / Maintenance
- Đào tạo (8K) → SGA / Training
- Kiểm định (3K) → SGA / Compliance
- Nhiên liệu (2K) → COGS / Utilities
- Khác (4,5K) → SGA / Miscellaneous

FORMAT: Bổ sung vào tài liệu PCCC hiện có, đánh dấu [V1.1 — Cập nhật].
```

---

## PROMPT MỚI #4: LẬP P4 — THIẾT KẾ HẠ TẦNG M&E (FILE THIẾU)

```
BẠN LÀ KỸ SƯ THIẾT KẾ HẠ TẦNG DATACENTER VÀ CƠ ĐIỆN (MEP) CÓ CHỨNG CHỈ:
- CDCDP (Certified Data Centre Design Professional) — Uptime Institute
- PE (Professional Engineer) chuyên ngành M&E / MEP
- Kinh nghiệm > 15 năm thiết kế hạ tầng kỹ thuật nhà máy, Datacenter Tier III

BỐI CẢNH:
Công ty TNHH Mekong Technology đang mở rộng tại Lô E2-03, KCNC TP.HCM.
Tổ hợp 10.000 m² gồm 3 khối:
- Khối A: Datacenter & AI/HPC (3.000 m²) — Tier III Design
- Khối B: Nhà máy gia công CNC 5 trục (4.000 m²) — 25 máy precision CNC
- Khối C: Nhà máy SMT & Lắp ráp Robot (3.000 m²) — Class 10.000 Clean room

DỮ LIỆU ĐẦU VÀO (từ P2, P3, P5, P6, P7 đã hoàn thành):
- Tổng CAPEX: 47,5M USD, Phase 1: 28,9M (2025-2027), Phase 2: 18,6M (2028-2030)
- Tải điện tổng: 2,6–5,4 MW (DC 1,5-3,0 MW + CNC 0,7-1,6 MW + SMT 0,4-0,8 MW)
- Nước cấp: 60-102 m³/ngày (quota KCNC: 150 m³/ngày)
- DC: 100 Racks (50 Phase 1, 50 Phase 2), PUE target < 1,35
- CNC: 15 máy Phase 1 (8 DMG MORI DMU 65, 5 Doosan DVF 5000, 2 Makino D500) + 10 máy Phase 2
- SMT: Clean room ISO 7, 600 m², Reflow Oven multiple zones
- PCCC: Bể nước 750 m³, Bơm diesel + Bơm điện 5.000 L/phút mỗi bơm (đã thiết kế, File 10)
- Rung CNC→DC: Cần cách ly (520K USD — móng nổi + rãnh cách ly, đã tính trong P3)
- Khoảng cách Khối A↔B ≥ 25m, Khối B↔C ≥ 10m

XUNG ĐỘT KỸ THUẬT ĐÃ BIẾT:
1. DC cần im lặng/sạch/ổn định → CNC tạo rung/ồn/bụi → PHẢI cách ly triệt để
2. DC cần nước cooling lớn → KCNC quota hạn chế → Cần hybrid cooling
3. CNC bụi kim loại (Cr, Ni) → SMT Clean room → HVAC phải tách hoàn toàn
4. IPA storage (Khối C) flash point 12°C → ATEX zone classification

OUTPUT YÊU CẦU:

### CHƯƠNG I: MASTER LAYOUT (10.000 m²)
- Bản mô tả mặt bằng tổng thể (text + ASCII diagram) phân vùng:
  - 3 khối sản xuất + khu kỹ thuật chung + văn phòng + bãi xe + sân bãi
- Bố trí Cooling tower, Generator farm, Transformer, Solar PV
- Đường giao thông nội bộ + Đường xe cứu hỏa (rộng ≥ 3,5m, bán kính quay ≥ 12m)
- Khoảng cách cách ly giữa các khối (theo yêu cầu EIA + PCCC)

### CHƯƠNG II: THIẾT KẾ KHỐI A — DATACENTER (3.000 m²)
1. Data Hall layout (Zone 1 Colo, Zone 2 AI/HPC) — Hot aisle/Cold aisle
2. Raised floor design: Tải trọng (≥ 12 kPa), chiều cao (600-1000mm), vật liệu
3. **Cooling Architecture:**
   - Zone 1 (Colo): In-row cooling (rear-door heat exchanger), chilled water
   - Zone 2 (AI/HPC): Direct-to-chip liquid cooling + rear-door HEX
   - Chiller plant: Water-cooled chiller + Cooling tower (evaporative)
   - Free cooling economizer (khi T < 24°C — ~30% thời gian TPHCM)
   - Backup: N+1 cho tất cả cooling components
   - PUE calculation đạt < 1,35
4. **Electrical Architecture:**
   - 2N power distribution (2 paths, each 100% capacity)
   - UPS: 2 × 2.000 kVA (per path), LiFePO4 battery, 15 phút runtime
   - PDU: Per-rack metered PDU (dual feed)
   - SLD (Single Line Diagram) từ EVN 22kV → Transformer → MDB → UPS → PDU
5. NOC / SOC room design
6. Physical Security: Mantrap, Biometric, CCTV, Perimeter fence

### CHƯƠNG III: THIẾT KẾ KHỐI B — NHÀ MÁY CNC (4.000 m²)
1. Machine Shop layout: 25 vị trí máy CNC, khoảng cách tối thiểu, đường crane
2. **Vibration isolation foundation:**
   - Spring isolator + Rubber pad cho MỖI máy CNC
   - Rãnh cách ly rung (sâu 2m, rộng 1m) giữa Khối B và Khối A
   - Mục tiêu: v < 0,1 mm/s tại Khối A (theo tính toán EIA Mục 4.3.4)
3. **Chip conveyor system** ngầm dưới nền (magnetic + auger)
4. **Compressed air system:** 8 bar, oil-free, 3 máy nén + dryer + receiver
5. **Coolant management:** Central coolant system vs distributed per-machine
6. **Overhead crane:** 5T EOT crane covering toàn Machine Shop
7. **CMM Room:** Class 1000 clean room, ±0,5°C temperature, vibration < 0,05 mm/s
   - Cách ly từ Machine Shop (tường cách âm + cách rung riêng)
8. HVAC: LEV (Local Exhaust Ventilation) + Make-up air + Temperature control

### CHƯƠNG IV: THIẾT KẾ KHỐI C — NHÀ MÁY SMT (3.000 m²)
1. Clean Room ISO 7 (600 m²): FFU (Fan Filter Unit), HEPA H14, áp suất +12,5 Pa
2. SMT Line layout: Loader → Printer → SPI → Mounter → Reflow → AOI → Unloader
3. Reflow Oven exhaust: LEV + Activated carbon
4. IPA Storage: ATEX Zone 1, Ex-rated equipment, ventilation ≥ 15 ACH
5. Robot Assembly area (800 m²): Safety cage, light curtain, layout
6. ESD control: Flooring, grounding, humidity 40-60%

### CHƯƠNG V: HỆ THỐNG ĐIỆN TỔNG HỢP
1. **Single Line Diagram (SLD)** toàn tổ hợp:
   - Nguồn EVN 22kV → 2 Transformer 2.500 kVA → MDB
   - MDB → 3 Sub-MDB (Khối A, B, C) + Emergency panel
2. **Generator Farm:**
   - 2 × 2.500 kVA Diesel Generator (N+1) — cho Khối A (DC)
   - 1 × 1.000 kVA Diesel Generator — cho Khối B + C
   - ATS (Automatic Transfer Switch) — ưu tiên: EVN → Generator → UPS
   - Bồn diesel: 2 × 10.000L (DC) + 1 × 5.000L (B+C)
3. **Solar PV 500 kWp:**
   - Diện tích mái: ~3.000 m² (trên mái Khối B + C)
   - Inverter: 5 × 100 kW string inverter
   - Kết nối: Behind-the-meter, ưu tiên tự dùng
   - Sản lượng ước tính: 700-750 MWh/năm
   - Metering: Net metering hoặc self-consumption only (theo QĐ 13/2020)
4. **Lightning Protection:** ESE (Early Streamer Emission) cho toàn tổ hợp
5. **Grounding:** < 1 Ohm (yêu cầu DC Tier III), TN-S system

### CHƯƠNG VI: HỆ THỐNG NƯỚC
1. **Cấp nước:**
   - Đấu nối KCNC DN100
   - Bể chứa nước sạch: 100 m³ (dự trữ 2 ngày)
   - Bơm tăng áp: 2 bơm + 1 jockey
   - Phân phối: DN50 cho mỗi khối
2. **Cooling water loop (DC):**
   - Closed-loop chilled water: Chiller plant → Data Hall → Return
   - Open-loop cooling tower: Make-up water 60-80 m³/ngày (sau hybrid)
   - Water treatment: Softener + Biocide + Anti-scale
3. **Thoát nước:**
   - Nước mưa: Hệ thống riêng → Cống KCNC
   - Nước thải sinh hoạt → XLNT chung (40 m³/ngày, đã thiết kế trong EIA)
   - Nước thải CNC → ZLD (đã thiết kế trong EIA)
4. **Water balance diagram** — Input vs Output cho toàn tổ hợp

### CHƯƠNG VII: BOQ & DỰ TOÁN M&E
1. BOQ chi tiết cho từng hệ thống (Điện, Nước, HVAC, Cooling, Crane, etc.)
2. Phân bổ theo Phase 1 (2025-2027) và Phase 2 (2028-2030)
3. So sánh với P2 CAPEX: Xác nhận hoặc điều chỉnh

### CHƯƠNG VIII: TIMELINE THI CÔNG M&E
1. Gantt chart (text-based) cho M&E installation — phối hợp với xây dựng chính
2. Long-lead items (Chiller, Transformer, Generator, CNC machines): Lead time
3. Commissioning sequence: Điện → Nước → Cooling → IT → Testing

QUY TẮC:
- Mọi số liệu đi kèm [A] Assumption, [B] Benchmark, hoặc [C] Committed
- Tham chiếu TCVN/QCVN + Tiêu chuẩn quốc tế (ASHRAE, IEC, EN, Uptime Tier III)
- Tham chiếu chéo đến P2 (CAPEX), P3 (EIA requirements), P7 (PCCC requirements)
- Kiểm tra tính nhất quán số liệu kỹ thuật với P3 và P7
- Output phải > 1.500 dòng, chi tiết tương đương P3 và P7
```

---

# PHẦN VII — THỨ TỰ ƯU TIÊN THỰC HIỆN

| Ưu tiên | Prompt | Lý do | Blocking P8? |
|---------|--------|-------|-------------|
| 🔴 **1** | **Prompt Mới #4 — Lập P4 (M&E)** | File hoàn toàn thiếu. P8 KHÔNG THỂ hoàn thành nếu thiếu P4 | **CÓ** |
| 🔴 **2** | **Prompt Sửa #1 — Chỉnh P2 (Tài chính)** | 6 vấn đề, 2 nghiêm trọng (Equity mâu thuẫn, DSCR) | **CÓ** |
| 🟡 **3** | **Prompt Sửa #3 — Bổ sung P7 (PCCC)** | Mapping chi phí PCCC vào CAPEX — liên kết với P2 | Gián tiếp |
| 🟡 **4** | **Prompt Sửa #2 — Bổ sung P3 (EIA)** | PM2.5 modeling và nước cấp Plan B | Không blocking |

**Khuyến nghị workflow:**
1. Chạy **P4 (Mới)** + **P7 Sửa** SONG SONG (không phụ thuộc nhau)
2. Sau khi có P4 + P7 mapping → Chạy **P2 Sửa** (cần data từ P4 BOQ và P7 mapping)
3. Chạy **P3 Sửa** song song với P2 Sửa (không phụ thuộc)
4. Khi tất cả hoàn thành → **GO P8** (Master Document)

---

# PHẦN VIII — KẾT LUẬN

**Trạng thái hiện tại:** 3/4 output (P2, P3, P7) đạt chất lượng chuyên gia cao. P4 (M&E) hoàn toàn thiếu.

**Gap lớn nhất:** 
1. P4 thiếu → Không có thiết kế hạ tầng kỹ thuật
2. Chi phí PCCC + MT (~4,95M) chưa rõ ràng trong mô hình tài chính
3. DSCR không đạt covenant → Bankability risk
4. Nước cấp cho DC cooling → Infrastructure constraint chưa giải quyết

**Sau khi sửa:** Nếu 4 prompt trên được thực hiện thành công, bộ hồ sơ đủ điều kiện chuyển sang P8 (Tổng hợp Master Document cho trình BQL KCNC).

---

**Người đánh giá:** AI Review Agent  
**Ngày:** Tháng 3/2026  
**Phiên bản:** V1.0
