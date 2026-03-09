# 02. YÊU CẦU KỸ THUẬT QUỐC TẾ (B2B COMMERCIAL REQUIREMENTS)

Để bán được dịch vụ Datacenter dư thừa công suất và lấy được các hợp đồng Outsourcing gia công cơ khí hàng triệu đô, tiêu chuẩn kỹ thuật không còn chỉ để "cho có" mà bắt buộc phải đạt "Chứng chỉ Hạng A (Tier A)" trong mắt đối tác FDI.

## 1. Mảng Kinh Doanh Datacenter (Hosting & AI Compute)

### 1.1 Yêu cầu Hạ tầng Kiến trúc Thương mại
- **Quy mô:** Khởi điểm 100 Racks (Tăng gấp đôi so với phương án nội bộ). Phải thiết kế hệ thống tính tiền tự động (Billing system), cửa khóa sinh trắc học riêng biệt cho từng khối phòng máy chủ (Cages) để khách hàng độc lập giám sát.
- **Tải điện:** Bắt buộc hỗ trợ High-Density từ 15kW - 30kW/Rack để cho thuê máy chủ AI (NVIDIA Cluster). Khách thuê GPU cần điện áp cực lớn.

### 1.2 Các Chứng nhận Bắt buộc (Giấy thông hành Kinh Doanh)
- **Uptime Institute Tier III (Bắt buộc):** Khách hàng ngân hàng/Fintech sẽ chỉ thuê chỗ đặt khi có chứng nhận Tier III (Đảm bảo thời gian Uptime 99.982% - tức downtime tối đa 1.6 tiếng/năm).
- **ISO/IEC 27001 & PCI DSS:** Tiêu chuẩn bảo mật dữ liệu thẻ thanh toán (PCI DSS) là chìa khóa để bán không gian lưu trữ cho nhóm tài chính.
- **Chỉ số PUE < 1.35:** Việc kinh doanh Datacenter chịu sự dòm ngó rất kỹ của các cơ quan môi trường vì ngốn năng lượng điện kinh hoàng. Bắt buộc cam kết thiết kế Tản nhiệt bằng nước (Liquid/In-Row cooling) và PUE siêu tối ưu.

---

## 2. Mảng Kinh Doanh Dịch vụ Cơ khí Chính xác (CNC Outsourcing)

### 2.1 Yêu cầu Xưởng Cơ khí Thương mại
- **Năng lực Sản xuất đa dạng:** Thay vì chỉ cắt nhôm cho Robot, xưởng phải mua sắm máy CNC đa năng (DMG MORI, Doosan, Makino 5-trục) có khả năng gia công cả Titan, thép hợp kim cứng, Inox 316. Hệ thống băng tải dọn phôi kim loại (Chip conveyor) chạy ngầm dưới nền móng.

### 2.2 Các Chứng nhận Tiêu chuẩn Gia công Toàn cầu
- Không thể lấy hợp đồng từ Samsung, Bosch, hay Boeing / VinFast nếu chỉ dùng ISO 9001 thông thường. Bắt buộc tích hợp:
  - **IATF 16949 (Tiêu chuẩn ô tô toàn cầu):** Để nhận gia công linh kiện hộp số, vỏ pin EV.
  - **AS9100 (Hàng không vũ trụ & Quốc phòng):** Giúp nâng mức định giá gia công lên gấp 3 lần so với linh kiện công nghiệp dân dụng.
- **QA/QC Lab:** Đầu tư máy đo 3D CMM (Hexagon/Zeiss), máy quét Laser độ phân giải cao có chứng chỉ Calibration Test định kỳ. Khách hàng B2B không tin lời hứa, họ chỉ tin vào bản vẽ report CMM.

---

## 3. Khó khăn từ góc độ Hành chính / Cấp phép Môi trường
- Gánh khối lượng RÁC THẢI KHỔNG LỒ từ việc kinh doanh thay vì sản xuất lẻ tẻ.
- KCNC sẽ xét duyệt **Báo cáo Kế hoạch xả thải dầu máy CNC (Coolant) và nhiệt lượng Chiller** cực kỳ khắt khe. Phải cam kết áp dụng công nghệ "Zero Liquid Discharge - Xả thải lỏng bằng 0" cho tổ hợp này.
