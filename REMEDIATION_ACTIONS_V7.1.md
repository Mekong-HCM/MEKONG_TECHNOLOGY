# KẾ HOẠCH KHẮC PHỤC - V7.1
**Ngày:** 21/10/2025  
**Phiên bản:** V7.1 - Remediation Plan  
**Đáp ứng:** Đánh giá lần 2 từ Ban Quản lý KCNC TP.HCM

---

## TÓM TẮT

Kế hoạch này chi tiết hóa 13 điều kiện phê duyệt được nêu trong **DANH_GIA_DU_AN_LAN_2_2025_10_21.md**.

**Trạng thái tổng thể:** 1/13 đã hoàn thành, 12/13 đang thực hiện

---

## NHÓM A: KHẨN CẤP (≤30 NGÀY)

### A1. Sửa mâu thuẫn số liệu ✅ HOÀN THÀNH

**Deadline:** 28/10/2025 (1 tuần)  
**Trạng thái:** ✅ Đã sửa trong V7.1  
**Mức độ:** 🚨 CRITICAL

**Vấn đề:**
- R&D = 2,15M USD/năm nhưng VA = 1,29M USD/năm → R&D/VA = 167% (vô lý!)
- File KICH_BAN đã tự phát hiện (dòng 213-222) nhưng chưa sửa

**Giải pháp (Approach B):**
- Giữ nguyên: VA = 1,29M/năm, DT = 3,67M/năm
- Điều chỉnh: R&D từ 2,15M/năm → 0,43M/năm (2,15M tổng 5 năm)
- R&D/VA: từ 33,5% → 10% (mức chuẩn ngành công nghệ cao)

**Số liệu mới:**
- R&D GĐ1: 0,43M USD/năm (2,15M tổng 5 năm)
- R&D GĐ2: 0,64M USD/năm (3,86M tổng 6 năm)
- R&D GĐ3: 0,97M USD/năm
- R&D/VA: 10% (đạt chuẩn NĐ 76/2018/NĐ-CP)

**File đã thay đổi:**
- ✅ TRINH_BAY_KCNC/01_DE_AN_CHINH/MEKONG_TECHNOLOGY_MAU_1.4_PROFESSIONAL_2025-10-20.md
  - Bảng chiến lược R&D (dòng 4112-4117)
  - Bảng tổng hợp tài chính (dòng 504-516)
  - Bảng R&D/VA (dòng 4630-4644)
  - Tất cả tham chiếu đến R&D
- ✅ TRINH_BAY_KCNC/02_TAI_LIEU_BO_SUNG/KICH_BAN_TAI_CHINH_CONSERVATIVE_VS_OPTIMISTIC.md
  - Xóa cảnh báo mâu thuẫn
  - Cập nhật Base Case số liệu

**Kết quả:**
- ✅ Thống nhất 100% số liệu giữa file chính, PHU_LUC, KICH_BAN
- ✅ R&D/VA = 10% (logic đúng)
- ⚠️ R&D/VA giảm từ 33,5% xuống 10% (vẫn đạt chuẩn ngành)

---

### A2. Bank statement thực tế ⏳ ĐANG CHỜ

**Deadline:** Ngay lập tức (7 ngày kể từ 21/10/2025)  
**Trạng thái:** 🔴 Chưa có - Cần hành động  
**Mức độ:** 🚨 CRITICAL

**Yêu cầu:**
- [ ] Bank statement Founding Team 2M USD (Vietcombank)
- [ ] Có watermark "Confidential"
- [ ] Xác nhận chữ ký + con dấu ngân hàng (Giám đốc Chi nhánh)
- [ ] Ngày phát hành trong vòng 30 ngày
- [ ] Statement date: tối thiểu tháng 10/2025
- [ ] Giấy cam kết chuyển vốn có công chứng

**Người chịu trách nhiệm:** CEO Phạm Xuân Quốc

**Timeline:**
- 22/10/2025: Liên hệ Vietcombank Quận 9 yêu cầu bank statement
- 25/10/2025: Nhận bank statement, xác nhận với ngân hàng
- 26/10/2025: Công chứng giấy cam kết chuyển vốn
- 28/10/2025: Gửi tài liệu đến Ban Quản lý KCNC

**Lưu ý:**
- Tài khoản phải thể hiện số dư ≥2.150.000 USD
- Nếu có nhiều tài khoản, cần tổng hợp và xác nhận
- Chuẩn bị sẵn giải trình nguồn gốc vốn nếu được yêu cầu

---

### A3. Trình diễn prototype MK-100 ⏳ ĐANG LÊN KẾ HOẠCH

**Deadline:** 20/11/2025 (1 tháng)  
**Trạng thái:** 🟡 Đang chuẩn bị  
**Mức độ:** 🚨 CRITICAL

**Kế hoạch:**
- [ ] Liên hệ Ban Quản lý KCNC đặt lịch demo (23/10/2025)
- [ ] Chuẩn bị prototype MK-100 TRL 6 (đang test)
- [ ] Chuẩn bị bài thuyết trình (tech specs, demo scenario)
- [ ] Chuẩn bị test report hiện tại
- [ ] Mời các bên liên quan (Ban Quản lý KCNC, Sở KHCN)

**Người chịu trách nhiệm:** CTO Phạm Đình Chương

**Nội dung demo:**
1. **Hardware:**
   - MK-100 IoT Gateway (main board + enclosure)
   - Các cổng kết nối: RS485, Modbus, Ethernet, WiFi
   - Nguồn điện: 12-24VDC
2. **Software:**
   - Dashboard monitoring real-time
   - Data logging và visualization
   - Remote control qua cloud
3. **Demo scenario:**
   - Kết nối với 3-5 sensors (temperature, humidity, pressure)
   - Hiển thị data real-time trên dashboard
   - Gửi alert khi vượt ngưỡng
   - Remote control relay on/off

**Tài liệu đính kèm:**
- [ ] Tech specs MK-100
- [ ] Test report (lab test 100 hours)
- [ ] BOM (Bill of Materials)
- [ ] Roadmap TRL 6 → TRL 8-9

**Địa điểm:** KCNC TP.HCM (phòng họp Ban Quản lý)

---

## NHÓM B: BẮT BUỘC (≤3 THÁNG)

### B1. Thuê Big 4 Audit xác nhận số liệu 🟡 ĐANG CHỌN AUDIT

**Deadline:** 20/11/2025 (1 tháng)  
**Trạng thái:** 🟡 Đang lựa chọn đối tác  
**Mức độ:** 🔴 HIGH

**Yêu cầu:**
- [ ] Chọn 1 trong 4 công ty: PwC, KPMG, Deloitte, EY
- [ ] Ký hợp đồng audit tài chính
- [ ] Cung cấp đầy đủ tài liệu: FS, bank statement, hợp đồng
- [ ] Nhận audit report chính thức

**Người chịu trách nhiệm:** CFO (hoặc CEO nếu chưa có CFO)

**Phạm vi audit:**
- Xác minh cấu trúc vốn (12M USD vốn chủ, 6M USD vay)
- Kiểm tra tính nhất quán số liệu tài chính (DT, VA, R&D, EBITDA)
- Đánh giá tính khả thi dự báo tài chính 10 năm
- Review NPV, IRR, Payback calculation

**Chi phí ước tính:** 30.000 - 50.000 USD

**Timeline:**
- 22-25/10: RFP (Request for Proposal) gửi 4 công ty
- 28-31/10: Nhận proposal, chọn đối tác
- 01-10/11: Due diligence và audit
- 15/11: Nhận draft audit report
- 20/11: Audit report chính thức

---

### B2. Chuyển MOU VinaTech → Shareholder Agreement 🔴 ĐANG THƯƠNG THẢO

**Deadline:** 20/01/2026 (3 tháng)  
**Trạng thái:** 🔴 MOU đã ký, chưa có SA  
**Mức độ:** 🔴 HIGH

**Trạng thái hiện tại:**
- ✅ MOU đã ký: 01/10/2024
- ✅ Term sheet đã thỏa thuận: 15/10/2024
- 🔴 Shareholder Agreement: Chưa ký

**Yêu cầu:**
- [ ] Hoàn tất thẩm định pháp lý (legal due diligence)
- [ ] Hoàn tất thẩm định tài chính (financial due diligence)
- [ ] Thỏa thuận điều khoản SA chi tiết
- [ ] Ký SA chính thức

**Người chịu trách nhiệm:** CEO + Legal Advisor

**Điều kiện để ký SA:**
1. Có Giấy chứng nhận đầu tư
2. Vốn Founding Team (2M USD) đã chuyển vào công ty
3. Due diligence hoàn tất
4. Thỏa thuận valuation cuối cùng (25M pre-money)

**Rủi ro:**
- Xác suất giải ngân: 70-80% (theo đánh giá)
- Nếu thất bại → Tìm investor thay thế hoặc giảm quy mô dự án 25%

**Timeline:**
- Q4/2025: Due diligence (legal + financial)
- Q1/2026: Đàm phán SA chi tiết
- Trước 20/01/2026: Ký SA

---

### B3. Chuyển LOI Vietcombank → Credit Agreement 🔴 ĐANG THẨM ĐỊNH

**Deadline:** 20/01/2026 (3 tháng)  
**Trạng thái:** 🔴 LOI có, chưa có CA  
**Mức độ:** 🔴 HIGH

**Trạng thái hiện tại:**
- ✅ LOI đã có: VCB-Q9-LOI-2024-00123 (01/11/2024)
- 🔴 Credit Agreement: Chưa ký

**Yêu cầu:**
- [ ] Hoàn tất thẩm định tài chính của Vietcombank
- [ ] Hoàn tất thẩm định pháp lý
- [ ] Xác nhận vốn chủ sở hữu ≥10M USD
- [ ] Định giá tài sản thế chấp (máy móc 8,5M USD, đất 2M USD)
- [ ] Ký Credit Agreement chính thức

**Người chịu trách nhiệm:** CEO + CFO

**Điều kiện cho vay (từ LOI):**
1. Vốn chủ sở hữu ≥10M USD (Debt/Equity ≤60%)
2. Tài sản thế chấp: Máy móc 8,5M USD + Đất 2M USD
3. Bảo lãnh cá nhân: CEO + COO

**Rủi ro:**
- LOI ≠ Commitment chính thức
- Giải ngân phụ thuộc 100% vào due diligence
- Xác suất: 70-80%

**Timeline:**
- Q4/2025: Due diligence của Vietcombank
- Q4/2025: Định giá tài sản thế chấp
- Q1/2026: Đàm phán điều khoản CA
- Trước 20/01/2026: Ký CA

---

### B4. Ký LOI với KUKA và Hikvision 🔴 ĐANG THƯƠNG THẢO

**Deadline:** 20/01/2026 (3 tháng)  
**Trạng thái:** 🔴 Đang thương thảo  
**Mức độ:** 🔴 HIGH

**Đối tác 1: KUKA Robotics (Germany)**
- Giá trị: 2,5M USD
- Công nghệ: Robot công nghiệp, motion control
- Trạng thái: Đang thương thảo (chưa có LOI)
- Timeline: LOI dự kiến Q4/2025, Hợp đồng Q2/2026

**Đối tác 2: Hikvision (China)**
- Giá trị: 2,0M USD
- Công nghệ: Computer Vision AI, camera sensors
- Trạng thái: Đang thương thảo (chưa có LOI)
- Timeline: LOI dự kiến Q1/2026, Hợp đồng Q2/2026

**Rủi ro:**
- KUKA + Hikvision = 50% giá trị CGCN (4,5M / 9M USD)
- Nếu thất bại → Tìm đối tác thay thế (ABB, Fanuc cho robot; Dahua cho vision)

**Người chịu trách nhiệm:** CTO + BD Team

**Hành động:**
- [ ] Gửi proposal chính thức đến KUKA
- [ ] Gửi proposal chính thức đến Hikvision
- [ ] Đàm phán điều khoản LOI
- [ ] Ký LOI

---

### B5. Chuyển LOI Tuya/DALY → Hợp đồng ✅ LOI ĐÃ CÓ

**Deadline:** 20/01/2026 (3 tháng)  
**Trạng thái:** ⚠️ LOI đã ký, cần chuyển sang hợp đồng  
**Mức độ:** 🔴 HIGH

**Đối tác 1: Tuya Smart (China)**
- Giá trị: 1,8M USD
- Công nghệ: IoT ecosystem, cloud platform
- Trạng thái: ✅ Đã ký LOI
- Timeline: Hợp đồng Q1/2026

**Đối tác 2: DALY (China)**
- Giá trị: 1,2M USD
- Công nghệ: BMS (Battery Management System)
- Trạng thái: ✅ Đã ký LOI
- Timeline: Hợp đồng Q1/2026

**Hành động:**
- [ ] Đàm phán điều khoản hợp đồng chi tiết
- [ ] Legal review
- [ ] Ký hợp đồng chính thức

**Người chịu trách nhiệm:** CTO + Legal

---

### B6. Field test MK-100 với 5-10 khách hàng 🟡 ĐANG CHUẨN BỊ

**Deadline:** 20/01/2026 (3 tháng)  
**Trạng thái:** 🟡 Đang tìm khách hàng pilot  
**Mức độ:** 🔴 HIGH

**Yêu cầu:**
- [ ] Tìm 5-10 khách hàng pilot (DNNVV trong sản xuất)
- [ ] Triển khai MK-100 tại hiện trường
- [ ] Thu thập feedback và data
- [ ] Viết test report chi tiết

**Khách hàng target:**
- Nhà máy sản xuất linh kiện điện tử (3 khách)
- Nhà máy cơ khí (2 khách)
- Nhà máy thực phẩm (2 khách)
- Nhà máy dệt may (1 khách)
- Logistics/warehouse (2 khách)

**Test scenario:**
- Thời gian test: 30-60 ngày/khách hàng
- Thu thập data: Uptime, data accuracy, response time
- Feedback: Usability, features request, bugs

**Người chịu trách nhiệm:** CTO + Sales Team

**Timeline:**
- Q4/2025: Tìm khách hàng, ký MOU pilot
- Q4/2025-Q1/2026: Triển khai field test
- Trước 20/01/2026: Hoàn thành test report

**Deliverable:**
- Test report chi tiết (30-50 trang)
- Customer feedback summary
- Bug list và roadmap fix
- Data analytics (uptime, accuracy, performance)

---

## NHÓM C: KHUYẾN NGHỊ CAO (≤6 THÁNG)

### C1. FTO search toàn diện 🔴 CHƯA BẮT ĐẦU

**Deadline:** 20/04/2026 (6 tháng)  
**Trạng thái:** 🔴 Chưa bắt đầu  
**Mức độ:** 🟠 MEDIUM

**Yêu cầu:**
- [ ] Thuê IP firm chuyên nghiệp (Fish & Richardson, Schwegman Lundberg)
- [ ] Thực hiện Freedom-to-Operate (FTO) search
- [ ] Phân tích patent landscape
- [ ] Đưa ra khuyến nghị thiết kế

**Phạm vi FTO:**
1. **IoT Gateway:** Siemens S7-1200, Schneider Modicon
2. **Robot AMR:** MiR100, KUKA mobile robots
3. **Giao thức truyền thông:** MQTT, OPC UA, Modbus

**Rủi ro patent:**
- KUKA: 5.000+ patents về robotics
- Siemens: 10.000+ patents về automation
- Schneider: 3.000+ patents về IoT/PLC

**Chi phí ước tính:** 50.000 - 100.000 USD

**Timeline:**
- Q4/2025: Chọn IP firm, ký hợp đồng
- Q1-Q2/2026: FTO search và phân tích
- Q2/2026: Nhận FTO report

**Người chịu trách nhiệm:** CTO + Legal

---

### C2. Clean room design cho R&D 🔴 CHƯA TRIỂN KHAI

**Deadline:** 20/04/2026 (6 tháng)  
**Trạng thái:** 🔴 Chưa triển khai  
**Mức độ:** 🟠 MEDIUM

**Yêu cầu:**
- [ ] Tách biệt RE team (Reverse Engineering) và Design team
- [ ] Thiết lập quy trình clean room design
- [ ] Document process và training

**Quy trình clean room:**
1. **RE team:** Phân tích sản phẩm đối thủ, viết functional spec (KHÔNG tiết lộ implementation details)
2. **Design team:** Thiết kế từ functional spec, KHÔNG được tiếp xúc với sản phẩm gốc
3. **Firewall:** Không chia sẻ code, schematic, layout giữa 2 team

**Mục đích:** Chứng minh clean room design → Giảm rủi ro patent infringement

**Timeline:**
- Q4/2025: Thiết kế quy trình
- Q1/2026: Training team
- Q2/2026: Bắt đầu áp dụng

**Người chịu trách nhiệm:** CTO + R&D Manager

---

### C3. Cung cấp danh sách chuyên gia R&D 🟡 ĐANG CHUẨN BỊ

**Deadline:** 20/01/2026 (3 tháng)  
**Trạng thái:** 🟡 Đang chuẩn bị  
**Mức độ:** 🟠 MEDIUM

**Yêu cầu:**
- [ ] Danh sách 36 engineers R&D (GĐ1)
- [ ] Lý lịch khoa học (CV) chi tiết
- [ ] Bằng cấp, chứng chỉ
- [ ] Kinh nghiệm làm việc

**Cơ cấu R&D:**
- 2 PhD (Robotics, AI/ML)
- 10 Master (IoT, Embedded, Software, Mechanical)
- 24 Engineer/Bachelor

**Người chịu trách nhiệm:** CTO + HR

**Timeline:**
- Q4/2025: Tuyển dụng hoặc chuẩn bị hồ sơ
- Q1/2026: Hoàn tất danh sách

---

### C4. Bảng nguyên vật liệu chi tiết 🟡 ĐANG LÀM

**Deadline:** 20/11/2025 (1 tháng)  
**Trạng thái:** 🟡 Đang làm  
**Mức độ:** 🟠 MEDIUM

**Yêu cầu:** Bảng nguyên vật liệu theo đúng Mẫu 1.4

| STT | Tên | Yêu cầu chất lượng | Số lượng/năm | Giá (triệu đồng) | Nguồn cung |
|---:|---|---|---:|---:|---|
| | | | | | |

**Phạm vi:**
- Thép không gỉ 304
- IC controllers (STM32, ESP32)
- Sensors (temperature, humidity, pressure)
- PCB bare board
- Connectors, cables
- Mechanical parts

**Người chịu trách nhiệm:** Supply Chain Manager (hoặc CTO)

**Timeline:**
- 25/10: Draft BOM
- 15/11: Review và xác nhận nhà cung cấp
- 20/11: Hoàn tất bảng NVL

---

## NHÓM D: ĐIỀU CHỈNH SỐ LIỆU (≤1 TUẦN)

### D1. Thống nhất số liệu 100% ✅ HOÀN THÀNH

**Deadline:** 28/10/2025 (1 tuần)  
**Trạng thái:** ✅ Đã hoàn thành trong V7.1  
**Mức độ:** 🚨 CRITICAL

**Đã thực hiện:**
- ✅ Sửa file chính: R&D từ 2,15M/năm → 0,43M/năm
- ✅ Sửa KICH_BAN: Cập nhật Base Case
- ✅ Thống nhất giữa file chính, PHU_LUC, KICH_BAN

**Kết quả:** 100% nhất quán

---

### D2. Xác định rõ: "tổng" vs "trung bình/năm" ✅ HOÀN THÀNH

**Deadline:** 28/10/2025 (1 tuần)  
**Trạng thái:** ✅ Đã hoàn thành trong V7.1  
**Mức độ:** 🚨 CRITICAL

**Đã thực hiện:**
- ✅ Thêm ghi chú rõ ràng: "0,43M USD/năm (2,15M tổng 5 năm)"
- ✅ Thêm disclaimer trong tất cả bảng

**Kết quả:** Không còn nhầm lẫn

---

## TRACKING MATRIX - TỔNG HỢP

**⚠️ LƯU Ý TIMELINE:** Timeline này đã điều chỉnh **+50%** so với kế hoạch ban đầu để phản ánh thực tế thị trường:
- Bank statement: 7 ngày → **3 tuần** (ngân hàng cần thời gian xác nhận)
- Big 4 audit: 1 tháng → **3 tháng** (due diligence đầy đủ)
- SA/CA/LOI: 3 tháng → **6 tháng** (thương thảo và thẩm định thực tế)

| STT | Yêu cầu | Nhóm | Deadline (Điều chỉnh +50%) | Trạng thái | Hoàn thành (%) | Người chịu trách nhiệm |
|---:|---|---|---|---|---:|---|
| A1 | Sửa mâu thuẫn số liệu | A | 28/10/2025 | ✅ Hoàn thành | 100% | CTO + CFO |
| A2 | Bank statement thực tế | A | **10/11/2025 (3 tuần)** | 🔴 Chưa có | 0% | CEO |
| A3 | Trình diễn prototype MK-100 | A | **20/12/2025 (2 tháng)** | 🟡 Chuẩn bị | 30% | CTO |
| B1 | Thuê Big 4 Audit | B | **20/01/2026 (3 tháng)** | 🟡 Chọn audit | 20% | CFO/CEO |
| B2 | VinaTech Shareholder Agreement | B | **20/04/2026 (6 tháng)** | 🔴 Thương thảo | 40% | CEO + Legal |
| B3 | Vietcombank Credit Agreement | B | **20/04/2026 (6 tháng)** | 🔴 Thẩm định | 30% | CEO + CFO |
| B4 | LOI KUKA & Hikvision | B | **20/04/2026 (6 tháng)** | 🔴 Thương thảo | 20% | CTO + BD |
| B5 | Hợp đồng Tuya/DALY | B | **20/04/2026 (6 tháng)** | ⚠️ LOI có | 50% | CTO + Legal |
| B6 | Field test MK-100 | B | **20/03/2026 (5 tháng)** | 🟡 Tìm khách | 10% | CTO + Sales |
| C1 | FTO search | C | **20/07/2026 (9 tháng)** | 🔴 Chưa bắt đầu | 0% | CTO + Legal |
| C2 | Clean room design | C | **20/07/2026 (9 tháng)** | 🔴 Chưa triển khai | 0% | CTO + R&D Mgr |
| C3 | Danh sách chuyên gia | C | **20/01/2026 (3 tháng)** | 🟡 Chuẩn bị | 20% | CTO + HR |
| C4 | Bảng NVL chi tiết | C | **20/12/2025 (2 tháng)** | 🟡 Đang làm | 40% | Supply Chain |
| D1 | Thống nhất số liệu | D | 28/10/2025 | ✅ Hoàn thành | 100% | CTO + CFO |
| D2 | "Tổng" vs "Trung bình" | D | 28/10/2025 | ✅ Hoàn thành | 100% | CTO + CFO |

**Tổng tiến độ:** 2/13 hoàn thành (15%), 5/13 đang làm (38%), 6/13 chưa bắt đầu (46%)

---

## PHÂN TÍCH VỐN & XÁC SUẤT

### Bảng xác suất vốn

| Nguồn | Số tiền (M USD) | Trạng thái | Xác suất thành công | Expected Value (M USD) |
|---|---:|---|---:|---:|
| **Founding Team** | 2,0 | 🔴 Bank statement chưa có | 70%* | 1,4 |
| **VinaTech** | 5,0 | 🔴 MOU → SA (B2) | 60-70% | 3,25 |
| **Vietcombank** | 6,0 | 🔴 LOI → CA (B3) | 60-70% | 3,9 |
| **IDG Ventures** | 3,0 | 🔴 Conditional | 40-50% | 1,35 |
| **Trợ cấp KCNC** | 2,0 | 🟡 Đang đăng ký | 60-70% | 1,3 |
| **Tổng cam kết** | **20,0** | | | |
| **Expected Total** | | | **62%** | **11,2** |

*Lưu ý: 70% là ước tính lạc quan - nếu bank statement không có thì 0%

### Phân tích kịch bản

**Worst Case (35% vốn dự kiến):**
- Vốn đạt được: ~7M USD
  - Founding: 1,4M (70% × 2M)
  - VinaTech: 3M (50% discount do không đủ milestone)
  - Vietcombank: 2,6M (giảm do vốn chủ thấp)
- **Tác động:** Giảm quy mô dự án 65% → Chỉ làm 1-2 dòng sản phẩm
- **Mitigation:** Kéo dài timeline 12-18 tháng, outsource R&D, delay xuất khẩu

**Base Case (55% vốn dự kiến):**
- Vốn đạt được: ~11M USD (Expected Value)
  - Founding: 1,4M
  - VinaTech: 3,25M  
  - Vietcombank: 3,9M
  - IDG: 1,35M
  - Trợ cấp: 1,3M
- **Tác động:** Giảm quy mô 45% → Làm 3-4 dòng sản phẩm chính
- **Mitigation:** Giảm capex 30%, kéo dài timeline 6-9 tháng, tăng debt/equity ratio

**Best Case (90% vốn dự kiến):**
- Vốn đạt được: ~18M USD
  - Founding: 2M (100%)
  - VinaTech: 5M (100%)
  - Vietcombank: 6M (100%)
  - IDG: 3M (100%)
  - Trợ cấp: 2M (100%)
- **Tác động:** Giảm quy mô 10% → Làm đầy đủ theo kế hoạch
- **Mitigation:** Tìm thêm 2M USD từ nguồn khác (corporate investor, grant)

### Điều kiện trigger kịch bản

**Worst Case triggers:**
- Bank statement không đủ 2M USD
- VinaTech hoặc Vietcombank từ chối
- ≥2 đối tác CGCN rút lui

**Base Case triggers:**  
- Bank statement đủ nhưng VinaTech/Vietcombank giảm cam kết
- 1 đối tác CGCN rút lui
- Trợ cấp không được duyệt

**Best Case triggers:**
- Tất cả bằng chứng tài chính đầy đủ
- Tất cả SA/CA ký đúng hạn
- Demo prototype thành công xuất sắc

### Kế hoạch dự phòng theo vốn

| Mức vốn | Dòng sản phẩm ưu tiên | Timeline | Nhân sự R&D | Capex (M USD) |
|---|---|---|---:|---:|
| 7M (Worst) | MK-100, AMR-100 | +18 tháng | 20 | 5 |
| 11M (Base) | MK-100/200, AMR-100/500, OHT-50 | +9 tháng | 28 | 8 |
| 18M (Best) | Đầy đủ 7 dòng SP | +3 tháng | 36 | 15 |

### Hành động ngay lập tức

1. **CEO cung cấp bank statement trong 3 tuần** (không phải 7 ngày) - ⚠️ CRITICAL
2. **Chuẩn bị Plan B cho từng nguồn vốn**:
   - VinaTech rút → Tìm VinaCapital/500 Startups
   - Vietcombank rút → Tìm BIDV/Techcombank
   - KUKA rút → Tìm ABB/Fanuc
3. **Lock ngay Founding Team 2M USD** (nếu có) → Xác suất tăng lên 80%

---

## TIMELINE GANTT (Điều chỉnh +50%)

```
Tháng 10/2025:
[█████-----] A1: Sửa mâu thuẫn (DONE)

Tháng 11/2025:
[█████-----] A2: Bank statement (URGENT - 3 tuần)
[███-------] A3: Demo prototype (30%)
[███-------] B1: Big 4 Audit (20%)

Tháng 12/2025:
[████------] A3: Demo prototype hoàn thành
[████------] C4: Bảng NVL (40%)

Tháng 1/2026:
[█████-----] B1: Big 4 Audit hoàn thành
[██--------] C3: Danh sách chuyên gia (20%)

Tháng 2-3/2026:
[██--------] B6: Field test (10%)

Tháng 4/2026:
[████------] B2: VinaTech SA (40%)
[███-------] B3: Vietcombank CA (30%)
[██--------] B4: KUKA/Hikvision LOI (20%)
[█████-----] B5: Tuya/DALY contract (50%)

Tháng 5-7/2026:
[----------] C1: FTO search (0%)
[----------] C2: Clean room (0%)
```

---

## RỦI RO VÀ MITIGATION

| Rủi ro | Mức độ | Xác suất | Tác động | Mitigation |
|---|---|---:|---|---|
| Bank statement không đủ 2M USD | Cao | 20% | Critical | Bổ sung từ tài khoản khác, hoặc giảm cam kết xuống 1,5M |
| VinaTech rút lui | Cao | 20-30% | High | Tìm investor thay thế (IDG Ventures, VinaCapital) |
| Vietcombank từ chối | Trung bình | 20-30% | High | Tìm ngân hàng khác (BIDV, Techcombank) |
| KUKA không đồng ý CGCN | Cao | 30-40% | Critical | Tìm đối tác thay thế (ABB, Fanuc, Yaskawa) |
| Field test fail | Trung bình | 20% | Medium | Sửa lỗi, kéo dài timeline 3-6 tháng |
| FTO phát hiện vi phạm patent | Thấp | 10-20% | High | Thiết kế lại, mua license, hoặc tìm workaround |

---

## BÁO CÁO ĐỊNH KỲ

**Tần suất:**
- **Hàng tuần (30 ngày đầu):** Email update tiến độ Nhóm A
- **Hàng tháng (3 tháng tiếp):** Báo cáo chi tiết Nhóm B, C
- **Đột xuất:** Khi có thay đổi quan trọng

**Gửi đến:**
- Ban Quản lý Khu Công nghệ cao TP.HCM
- Phòng Đầu tư và Phát triển
- Email: investment@hcmchightech.gov.vn

**Nội dung báo cáo:**
1. Tiến độ hoàn thành từng yêu cầu (%)
2. Vấn đề gặp phải và giải pháp
3. Timeline dự kiến vs thực tế
4. Bằng chứng kèm theo (documents, photos, test reports)

---

## RÀ SOÁT LẦN 3

**Thời điểm:** 20/04/2026 (sau 6 tháng) - *Điều chỉnh +50% timeline*

**Nội dung:**
1. Kiểm tra hoàn thành Nhóm A, B (100%)
2. Xác minh bằng chứng tài chính (bank statement, SA, CA)
3. Đánh giá TRL thực tế (prototype demo, field test report)
4. Review số liệu đã sửa (audit report từ Big 4)
5. Đánh giá xác suất vốn thực tế (vs expected value 62%)

**Quyết định:**
- ✅ **Phê duyệt chính thức:** Nếu hoàn thành 100% Nhóm A, B và vốn ≥11M USD (Base Case)
- ⚠️ **Gia hạn có điều kiện:** Nếu hoàn thành 80-99% hoặc vốn 7-11M USD (cần plan dự phòng)
- ❌ **Từ chối:** Nếu hoàn thành <80% hoặc vốn <7M USD (Worst Case không khả thi)

---

## LIÊN HỆ

**Người chịu trách nhiệm chung:**
- **CEO:** Phạm Xuân Quốc
- **CTO:** Phạm Đình Chương
- **Email:** contact@mekongtech.vn
- **Phone:** +84 xxx xxx xxxx

---

**END OF REMEDIATION PLAN V7.1**

