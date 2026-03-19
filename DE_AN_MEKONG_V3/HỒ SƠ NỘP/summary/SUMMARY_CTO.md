# TÓM TẮT CÔNG NGHỆ VÀ SẢN PHẨM — GIÁM ĐỐC KỸ THUẬT

**Tài liệu:** Tóm tắt công nghệ, sản phẩm và năng lực R&D — Dự án Mekong Technology
**Địa điểm:** Khu Công nghệ cao TP.HCM, Lô E2-03
**Ngày lập:** Tháng 03/2026
**Phân loại:** Nội bộ — Ban Giám đốc

---

## 1. KIẾN TRÚC SẢN PHẨM — HAI TRỤ CỘT

### 1.1. Trụ cột 1 — Điện tử Thông minh (BU1)

**Tỷ trọng doanh thu ổn định:** ~70,8% tổng doanh thu

| Mã sản phẩm | Tên sản phẩm | Thông số kỹ thuật cốt lõi | Giá bán trung bình (USD) |
| --- | --- | --- | ---: |
| **MK-200** | Bộ điều khiển IoT công nghiệp | NXP i.MX8M Plus (4× Cortex-A53 + NPU 2,3 TOPS); RAM 4GB; eMMC 32GB; WiFi 6 (802.11ax); BLE 5.2; Ethernet 1GbE; RS-485/Modbus RTU; BACnet/MS-TP; OPC-UA Client | **400** |
| **MK-300** | Bộ xử lý AI biên cạnh | NVIDIA Jetson Orin Nano 8GB (1024-core Ampere GPU, 40 TOPS); Camera 4K; 2× GbE; USB 3.2; I/O công nghiệp; chịu rung thấp 5g | **760** |
| **EIO Series** | Mô-đun I/O mở rộng | 8–32 kênh; DI/DO/AI/AO; Modbus RTU; cách ly quang điện 1,5kV; dải nhiệt độ công nghiệp (-20°C–70°C) | **80–160** |
| **DDC-Lite** | Bộ điều khiển số trực tiếp HVAC | BACnet/IP + Modbus; 8DI/8AI/4DO/2AO; vỏ nhôm IP54; chịu môi trường kết cấu công trình | **320** |
| **GW-MB/IP** | Cổng kết nối giao thức | Modbus RTU → EtherNet/IP; cầu nối giao thức thiết bị cũ với mạng hiện đại | **150** |
| **GW-BN/MQTT** | Cổng kết nối giao thức | BACnet/IP → MQTT; tích hợp tòa nhà với nền tảng IoT | **180** |
| **GW-MB/OPC** | Cổng kết nối giao thức | Modbus RTU → OPC-UA; hỗ trợ cài đặt từ xa | **200** |
| **GW-DALI/BN** | Cổng kết nối chiếu sáng | DALI-2 → BACnet; tích hợp điều khiển chiếu sáng vào BMS | **130** |
| **MekongBMS v2** | Phần mềm Quản lý Tòa nhà | Giao diện web HTML5; Hỗ trợ 500+ điểm dữ liệu; Tích hợp HVAC, chiếu sáng, thang máy, kiểm soát ra vào; Ứng dụng di động (iOS/Android) | **SaaS + License** |
| **BMS Dịch vụ** | Lắp đặt, vận hành BMS | Gói thiết kế + thi công + bảo trì 5 năm cho tòa nhà mới và tòa nhà cải tạo | **500–5.000/dự án** |
| **AMR-500** | Robot di động tự hành 500 kg | LiDAR 3D (2× Livox Avia); Camera RGB-D (RealSense D455); SLAM 3D; Tải trọng 500 kg; Vận tốc tối đa 1,5 m/s; Định vị ±10mm; Thời gian hoạt động 8 giờ | **20.500** |
| **AMR-1000** | Robot di động tự hành 1.000 kg | Tải trọng 1.000 kg; Di chuyển đa hướng; Sạc cảm ứng | **38.500** |
| **AGV-250** | Xe tự hành hướng dẫn từ tính 250 kg | Dải từ tính + mã QR; Hành lang cố định; Giá thành thấp hơn AMR | **7.200** |
| **MekongOS v1** | Hệ điều hành quản lý đội robot | Điều phối đa robot (Fleet Manager); Hệ thống quản lý giao việc tự động; API REST + WebSocket; Giao diện 3D Warehouse | **Bản quyền phần mềm** |
| **OEM/Phần cứng** | Bảng mạch và phần cứng theo đặt hàng | Thiết kế theo yêu cầu khách hàng; SMT 2 mặt; kiểm tra điện bằng thiết bị kiểm tra mạch | **Theo đơn** |

### 1.2. Trụ cột 2 — Gia công CNC / Cơ khí chính xác (BU2)

**Tỷ trọng doanh thu ổn định:** ~29,2% tổng doanh thu

| Dịch vụ / Sản phẩm | Mô tả | Thị trường mục tiêu |
| --- | --- | --- |
| Khung Robot AMR/AGV | Gia công thép không gỉ và hợp kim nhôm cho robot tự sản xuất — loại bỏ phụ thuộc nhà cung cấp ngoài | Nội bộ BU1 |
| Linh kiện OEM theo đặt hàng | Gia công chính xác 5 trục: jig gá đặt, đế máy, vỏ thiết bị điện tử dày, tấm ép | Công ty FDI, SME gia công |
| Đồ gá (Jig & Fixture) | Bộ gá kiểm tra bo mạch (ICT fixture), gá hàn tự động, gá lắp ráp robot | SMT và lắp ráp điện tử |
| Giờ máy CNC (theo giờ) | Dịch vụ gia công cho bên thứ ba trong thời gian máy rảnh | Thị trường gia công ngoài |
| Chi tiết cơ khí khác | Phụ kiện, tấm đỡ, đường ống chính xác | Đa ngành |

---

## 2. THIẾT BỊ SẢN XUẤT CHÍNH

### 2.1. Trang bị CNC — 10 máy (CAPEX ~3,80M USD)

| Số lượng | Loại máy | Nhà cung cấp tiêu biểu | Độ chính xác | Công dụng |
| :---: | --- | --- | --- | --- |
| 5 | CNC 5 trục nằm ngang/đứng | DMG MORI, Doosan, Hermle | ±0,005 mm | Khung robot, chi tiết nhôm phức tạp, khuôn |
| 3 | CNC 3 trục đứng | Haas VF-Series, Mazak | ±0,010 mm | Gia công hàng loạt, đồ gá, chi tiết đơn giản |
| 1 | Máy tia lửa điện (EDM) | Sodick, Makino | ±0,005 mm | Chi tiết có lỗ phức tạp, khuôn ép nhựa |
| 1 | Máy mài CNC | Studer, Jones & Shipman | Ra ≤ 0,4 μm | Bề mặt hoàn thiện cao, trục, lỗ chính xác |

**Công suất thiết kế tổng:**
- **3.500 giờ máy/tháng** (toàn bộ 10 máy, 3 ca, 6 ngày/tuần).
- Thời gian sử dụng mục tiêu: **75–85%** cho đơn hàng có hợp đồng; phần còn lại cung ứng gia công ngoài (BU2 — dịch vụ giờ máy).

### 2.2. Dây chuyền SMT — lắp ráp điện tử (CAPEX ~1,50M USD)

| Thiết bị | Thông số | Công dụng |
| --- | --- | --- |
| Máy in kem hàn | DEK Horizon i, khổ 400×500 mm | In chính xác kem hàn lên PCB |
| Máy gắp đặt SMT (Mounter) | ASM SIPLACE SX2 hoặc tương đương; 40.000 linh kiện/giờ | Gắp và đặt linh kiện SMD |
| Lò hàn hồi lưu | Heller 1828 MK-V; 8 vùng nhiệt độ | Hàn kem hàn thành mối hàn bền vững |
| Máy kiểm tra quang học tự động (AOI) | Koh Young KY-V, kiểm tra 100% | Phát hiện lỗi hàn, thiếu linh kiện |
| Thiết bị kiểm tra mạch điện (ICT / Flying Probe) | Genrad hoặc tương đương | Kiểm tra chức năng điện |
| Buồng Burn-in | 4 tủ 40°C/80°C, 24–72 giờ | Kiểm tra tăng tốc độ tin cậy (HALT sơ bộ) |

**Công suất:**
- **50.000 bảng mạch/năm** (dây chuyền 1-shift, 2-shift cho đơn lớn).
- Tỷ lệ lần đầu đạt (First Pass Yield — FPY): ≥98% — mục tiêu thiết kế.

### 2.3. Xưởng lắp ráp Robot

| Trạm | Chức năng | Thông số |
| :---: | --- | --- |
| 1 | Lắp ráp khung và cơ khí | Gá đặt khung + bu-lông momen chuẩn |
| 2 | Lắp hệ thống truyền động (motor + bánh xe) | Cân bằng và kiểm tra đáp ứng tốc độ |
| 3 | Lắp bộ điều khiển điện và cáp | Kết nối theo sơ đồ điện kiểm soát |
| 4 | Nạp firmware + cấu hình ban đầu | Nạp MekongOS, cấu hình IP, nhận dạng |
| 5 | Chạy thử trong môi trường kiểm tra | Chạy 2 giờ, đo định vị 1.000 điểm |
| 6 | Kiểm tra xuất xưởng (FAT) | Theo quy trình FAT được phê duyệt, lưu log |

**Công suất lắp ráp:** ~**500 robot/năm** (AMR + AGV kết hợp).

---

## 3. HẠ TẦNG DỮ LIỆU NỘI BỘ

### 3.1. Thông số phòng máy chủ nội bộ (200 m², Tầng 2 nhà xưởng)

| Thông số | Giá trị |
| --- | --- |
| Diện tích | 200 m² |
| Rack server | 5–8 rack 42U |
| Công suất UPS | 30–50 kW |
| Làm mát | Điều hòa chính xác (Precision Cooling), dự phòng N+1 |
| Điện vào | Mạch điện ưu tiên + UPS + điện dự phòng |
| An toàn vật lý | PCCC FM-200, kiểm soát ra vào sinh trắc học, camera 24/7 |
| Hiệu quả năng lượng (PUE) | < 1,5 (mục tiêu thiết kế) |

### 3.2. Hạ tầng tính toán và lưu trữ

| Loại thiết bị | Cấu hình | Mục đích |
| --- | --- | --- |
| Máy chủ GPU cao cấp | NVIDIA A100 80GB (x2) hoặc H100 (giai đoạn 2) | Huấn luyện mô hình SLAM, thị giác máy tính, kiểm thử tăng tốc |
| Máy chủ CPU × 4 | AMD EPYC 7313; 256GB RAM; 10GbE | ERP, MES, CAD/CAM server, CI/CD |
| Hệ thống lưu trữ (NAS) | 500TB gộp; Ceph/ZFS | Lưu file thiết kế 3D, log sản xuất, dữ liệu cảm biến |
| Cơ sở dữ liệu chuỗi thời gian | TimescaleDB (PostgreSQL) trên cụm | Lưu telemetry robot, dữ liệu cảm biến nhà máy |
| Broker MQTT | EMQX Enterprise, cluster 3 node | Kết nối thiết bị IoT, robot, cảm biến |
| Lớp điều phối | Kubernetes on-prem + GitLab CI/CD | Quản lý microservices ERP/MES/BMS |

### 3.3. Kiến trúc phần mềm hệ thống

```
Thiết bị hiện trường (IoT / CNC / Robot)
        ↕ MQTT / OPC-UA / Modbus
    EMQX Broker  ←→  TimescaleDB
        ↕
    ERP (Odoo) + MES (tùy biến)
        ↕
    WebApp Dashboard (React)  +  ứng dụng di động (Flutter)
        ↕
    Huấn luyện AI (MLflow + PyTorch) trên GPU A100
        ↕
    Triển khai tại biên (MK-300 Jetson Orin Nano)
```

**Cam kết:** Hạ tầng này hoàn toàn phục vụ sản xuất và R&D nội bộ — không cung cấp dịch vụ điện toán thương mại ra bên ngoài.

---

## 4. NGHIÊN CỨU VÀ PHÁT TRIỂN

### 4.1. Nguồn lực R&D

| Chỉ tiêu | Giá trị |
| --- | --- |
| Ngân sách R&D hàng năm (Y5+) | ~0,96M USD [C] |
| Tỷ lệ R&D / Doanh thu | ~8% [C] |
| Nhân sự R&D trực tiếp | 13–16 kỹ sư |
| Mức độ sẵn sàng công nghệ mục tiêu | TRL 7–9 (sản phẩm thương mại hóa) |
| Số sáng chế/giải pháp hữu ích mục tiêu | 2–3/năm (từ Y5) |

### 4.2. Danh mục sở hữu trí tuệ

| Tài sản trí tuệ | Loại | Trạng thái | Mô tả |
| --- | --- | --- | --- |
| **MekongBMS v2** | Bản quyền phần mềm | Đang triển khai | Phần mềm quản lý tòa nhà tích hợp |
| **MekongOS v1** | Bản quyền phần mềm | Đang triển khai | Phần mềm điều phối đội robot |
| **Thuật toán SLAM tích hợp đa cảm biến** | Bí quyết kỹ thuật (know-how) | R&D giai đoạn 2 | Kết hợp LiDAR + Camera + IMU/encoder; tối ưu cho môi trường nhà kho Việt Nam |
| **Giao thức tích hợp đa chuẩn IoT** | Bí quyết kỹ thuật | Hoàn thành giai đoạn 1 | Lớp trừu tượng hóa giao thức thống nhất Modbus/BACnet/OPC-UA/MQTT |
| **Thiết kế PCB IoT cốt lõi (MK-200/300)** | Bí quyết kỹ thuật | Thiết kế hoàn chỉnh | Layout đặc thù tối ưu EMI cho môi trường công nghiệp |

### 4.3. Lộ trình chứng nhận sản phẩm quốc tế

| Chứng nhận | Sản phẩm | Giai đoạn | Ý nghĩa thị trường |
| --- | --- | :---: | --- |
| CE (EU) | MK-200, MK-300, AMR | Y4–Y5 | Bắt buộc để xuất khẩu vào EU; tăng uy tín FDI |
| FCC (Mỹ) | MK-200, MK-300 | Y5–Y6 | Bắt buộc nếu xuất khẩu thiết bị không dây sang Mỹ |
| BACnet Testing Labs (BTL) | MekongBMS, DDC-Lite | Y6–Y7 | Yêu cầu từ tích hợp viên BMS quốc tế lớn |
| ISO 13849 PLd | AMR-500, AMR-1000, AGV-250 | Y7–Y8 | An toàn máy — bắt buộc cho thị trường EU + FDI Nhật/Hàn |
| IEC 62443 (An ninh mạng trong công nghiệp) | MekongOS, MekongBMS | Y8–Y10 | Yêu cầu ngày càng tăng từ tập đoàn FDI |
| TCVN (tiêu chuẩn Việt Nam) | Toàn bộ sản phẩm | Y3–Y4 | Bắt buộc cho đấu thầu dự án công |

---

## 5. LỘ TRÌNH CÔNG NGHỆ THEO GIAI ĐOẠN

| Giai đoạn | Thời gian | Trọng điểm kỹ thuật |
| --- | --- | --- |
| **Giai đoạn 0** | Y0–Y1 | Thiết kế kiến trúc phần cứng MK-200/300; thiết kế sơ bộ xưởng; tuyển đội ngũ kỹ thuật hạt nhân |
| **Giai đoạn 1** | Y1–Y3 | Xây dựng hoàn tất; lắp bộ 5 CNC đầu; dây chuyền SMT đầu; ra mắt MK-200 và MK-300 thương mại |
| **Giai đoạn 2** | Y3–Y5 | Lắp 5 CNC còn lại; phát triển Robot AMR-500; hoàn thiện MekongOS; nộp CE cho MK-200/300 |
| **Giai đoạn 3** | Y5–Y10 | Mở rộng dòng AMR-1000, AGV-250; hoàn thiện chứng nhận BTL, ISO 13849; tăng xuất khẩu |

---

## 6. HỎI — ĐÁP KỸ THUẬT (DÀNH CHO BAN QUẢN LÝ KCNC)

### 6.1. Tại sao chọn vi xử lý NXP i.MX8M cho MK-200 mà không dùng Qualcomm Snapdragon hoặc STM32?

**STM32 và dòng vi điều khiển (MCU) tương tự** phù hợp cho ứng dụng nhúng nhỏ, không đủ sức xử lý giao thức đa năng và kết nối IoT đồng thời.

**Qualcomm Snapdragon** định hướng thiết bị người dùng (điện thoại, tablet) — hệ sinh thái phần mềm công nghiệp hạn chế, chi phí bản quyền cao, không có BSP (Board Support Package) tối ưu cho môi trường công nghiệp.

**NXP i.MX8M Plus** được chọn vì:
- Được thiết kế chuyên cho `Industrial IoT` — có NPU 2,3 TOPS tích hợp để chạy mô hình AI biên nhẹ (anomaly detection, local inference).
- Hỗ trợ BSP Yocto Linux đầy đủ với chu kỳ dài hạn (EOL > 10 năm).
- Chứng nhận công nghiệp (AEC-Q100 Grade 2, dải nhiệt độ -40°C–105°C).
- Cộng đồng phát triển IoT công nghiệp lớn — NXP cung cấp hỗ trợ kỹ thuật trực tiếp.
- Chi phí vừa phải — phù hợp ASP mục tiêu 400 USD cho MK-200.

### 6.2. Robot AMR của Mekong Technology cạnh tranh thế nào với Geek+ và MiR đang có mặt tại Việt Nam?

**Geek+, MiR (Mobile Industrial Robots), Locus Robotics** là đối thủ toàn cầu có sản phẩm hoàn thiện. Chiến lược định vị của Mekong Technology không phải là cạnh tranh trực tiếp mà là **định vị khác biệt**:

| Tiêu chí | Geek+ / MiR | Mekong Technology AMR |
| --- | --- | --- |
| Giá thành | 25.000–60.000 USD/robot | 20.500–38.500 USD — thấp hơn 15–25% |
| Tùy biến phần cứng | Hạn chế (hàng catalog) | Cao — tùy biến theo yêu cầu khách hàng |
| Bảo hành và dịch vụ | Phụ thuộc nhà phân phối nước ngoài | Kỹ thuật viên tiếng Việt, phản hồi 24h nội địa |
| Tích hợp BMS/MES nội địa | Phức tạp — giao thức không chuẩn VN | Tích hợp sẵn với MekongBMS và MekongOS |
| Phụ tùng thay thế | Nhập khẩu, thời gian > 30 ngày | Sản xuất nội bộ — sẵn có < 7 ngày |

**Phân khúc mục tiêu của AMR Mekong:** Nhà máy vừa và nhỏ (200–2.000 m²), kho hàng thương mại, nhà sản xuất FDI không cần sản phẩm "catalog toàn cầu" mà cần **đối tác tích hợp tại chỗ**.

### 6.3. Vì sao phải có 10 máy CNC trong khi 6 máy đã đủ cho nhu cầu nội bộ ban đầu?

Mô hình kinh doanh CNC/MPMC (BU2) được thiết kế để **vừa phục vụ nội bộ vừa tạo doanh thu dịch vụ gia công**:

- **5 máy CNC 5 trục:** Chuyên gia công chi tiết phức tạp của Robot AMR (khung, bánh xe, cổng truyền động) — thay thế 100% nguồn cung ngoài, tiết kiệm chi phí và bảo mật thiết kế.
- **3 máy CNC 3 trục:** Gia công hàng loạt đồ gá, linh kiện tiêu chuẩn theo đặt hàng OEM của khách hàng FDI (BU2 — doanh thu dịch vụ).
- **1 EDM + 1 Mài:** Sản phẩm có độ phức tạp cao nhất (khuôn, lỗ vi, bề mặt cực nhẵn) — tạo năng lực cạnh tranh khác biệt mà ít xưởng gia công Việt Nam có.
- Mô hình 10 máy giúp **sử dụng thời gian máy rỗng có hiệu quả** — khi không có đơn nội bộ thì cung cấp dịch vụ giờ máy bên ngoài.
- Nếu chỉ có 6 máy (không có 3 trục + EDM + Mài), BU2 không đủ năng lực cạnh tranh và không tạo ra doanh thu phụ có ý nghĩa.

### 6.4. Hạ tầng dữ liệu nội bộ 200 m² — có đủ cho 15 năm không hay phải nâng cấp liên tục?

Thiết kế modular của phòng máy chủ cho phép nâng cấp theo nhu cầu:

- **Giai đoạn 2 (Y3–Y5):** 2–3 rack, ~20 kW, tập trung vào ERP/MES/CAD-CAM + GPU 1 cụm.
- **Giai đoạn 3 (Y5–Y8):** Mở rộng thêm 2 rack, nâng GPU lên H100 khi huấn luyện mô hình Robot thế hệ 2.
- **Giai đoạn 4 (Y8+):** Tối đa 8 rack 42U, ~50 kW — trong công suất thiết kế phòng máy.
- **Lưu trữ:** Mở rộng NAS theo module — không cần xây thêm không gian vật lý đến Y10.

**Chi phí nâng cấp định kỳ** đã được đưa vào CAPEX giai đoạn 3 (2,50M USD) và OPEX hàng năm.

### 6.5. Phần mềm MekongOS và MekongBMS — có phải là "xây lại bánh xe" khi ROS2 và nền tảng BMS thương mại sẵn có?

Không phải xây lại từ đầu. Kiến trúc được xây dựng trên nền tảng mở:

- **MekongOS:** Cài đặt trên nền ROS 2 (Robot Operating System 2) — giải quyết tầng giao tiếp cảm biến/cơ cấu; tầng quản lý đội robot và tích hợp MES là phát triển độc quyền.
- **MekongBMS:** Cài đặt trên nền Grafana + TimescaleDB (các lớp hiển thị và lưu trữ) + dịch vụ điều khiển theo giao thức BACnet/Modbus là phát triển độc quyền.
- **Lý do cần sở hữu trí tuệ riêng:**
  - Tùy chỉnh sâu theo điều kiện nhà kho, nhà máy Việt Nam (mặt sàn không phẳng, nhiệt độ cao, độ ẩm).
  - Tích hợp đặc thù với phần cứng MK-200/300 và giao thức thiết bị cũ phổ biến tại Việt Nam.
  - Độc lập với nhà cung cấp nền tảng thương mại — tránh phụ thuộc chi phí cấp phép dài hạn.

### 6.6. Tỷ lệ lần đầu đạt (FPY) ≥98% cho dây chuyền SMT — có thực tế không?

Có, đây là chỉ tiêu công nghiệp tiêu chuẩn cho dây chuyền SMT mới và được kiểm soát tốt:

- **Điều kiện đạt FPY ≥98%:** Thiết kế PCB tuân thủ DFM (Design for Manufacturability), kem hàn chất lượng cao (ví dụ: Alpha/Indium SAC305), kiểm soát nhiệt độ/độ ẩm kho, in kem hàn chính xác (SPI sau in), AOI kiểm tra 100% sau lò.
- **Công nghiệp thực tế:** Các nhà máy có kiể soát tốt như Foxconn, Jabil, và SME cao cấp đạt FPY 99%+ cho sản phẩm thiết kế tốt.
- **Rủi ro:** FPY thấp trong 6–12 tháng đầu vận hành khi nhân sự chưa thành thục. Kế hoạch: sử dụng chuyên gia SMT có kinh nghiệm từ FDI cho giai đoạn khởi động.

### 6.7. Robot AMR sử dụng SLAM — khi nhà kho thay đổi bố cục thì robot có "lạc đường" không?

Đây là câu hỏi kỹ thuật quan trọng thường gặp khi giới thiệu AMR với khách hàng:

**SLAM 3D (đa cảm biến: LiDAR + Camera) cho phép thích nghi:**
- **Re-mapping tự động:** Khi phát hiện thay đổi môi trường > ngưỡng (vật cản mới, hàng rào di chuyển), robot cập nhật bản đồ cục bộ trong thời gian thực.
- **Bản đồ cục bộ vùng:** Không cần re-map toàn bộ kho — chỉ cập nhật vùng thay đổi (~5–10 phút).
- **Lộ trình thay thế:** Nếu đường cũ bị chặn, hệ thống MekongOS tự lập lộ trình thay thế bằng thuật toán A* cải tiến.
- **Giới hạn thực tế:** Thay đổi hoàn toàn bố cục kho (>50% diện tích) cần re-map toàn bộ — mất 30–60 phút vận hành robot kiểm tra.
- **So với AGV:** AGV theo dải từ tính bị ảnh hưởng ngay khi mất dải — AMR có lợi thế rõ rệt.

### 6.8. Chứng nhận CE và FCC — chi phí bao nhiêu, thời gian bao lâu?

| Chứng nhận | Chi phí ước tính | Thời gian | Phòng thử nghiệm |
| --- | ---: | --- | --- |
| CE (EMC + LVD + RE) cho MK-200/300 | 40.000–70.000 USD | 6–9 tháng | TÜV Rheinland, SGS, Bureau Veritas (có lab tại VN) |
| FCC ID (phát xạ vô tuyến) | 15.000–30.000 USD | 3–6 tháng | FCC accredited lab — thường test tại Đài Loan/Singapore |
| CE cho AMR (Máy móc + An toàn) | 80.000–150.000 USD | 12–18 tháng | Phức tạp hơn — cần ISO 13849 PLd và IEC 62061 |
| BACnet BTL | 25.000–50.000 USD | 6–12 tháng | BACnet Interest Group — remote test |

Chi phí chứng nhận đã được đưa vào **ngân sách R&D và CAPEX giai đoạn 3** — không phải chi phí phát sinh ngoài kế hoạch.

### 6.9. Đội ngũ R&D 13–16 người có đủ để phát triển đồng thời phần cứng, phần mềm và robot không?

Đây là thách thức thực tế và đã được tính đến trong kế hoạch:

- **Phân công chuyên biệt:** R&D chia thành 3 nhóm nhỏ — Nhóm Phần cứng điện tử (5–6 người), Nhóm Phần mềm/IoT (4–5 người), Nhóm Robot/Thuật toán (4–5 người).
- **Không phát triển song song ngay từ đầu:** Giai đoạn Y3–Y5 ưu tiên MK-200/300 và BMS. Robot AMR phát triển chính từ Y5. Không ôm toàn bộ cùng lúc.
- **Hợp tác đại học:** Thỏa thuận hợp tác R&D với Đại học Bách Khoa TP.HCM và Đại học Quốc tế VNU-HCM — cung cấp nghiên cứu viên và sinh viên cao học cho các đề tài SLAM và tối ưu năng lượng.
- **Chuyên gia nước ngoài (AI/Robot):** 1 chuyên gia cấp cao được tuyển dụng dài hạn — dẫn dắt kỹ thuật Robot từ trong giai đoạn đầu.

### 6.10. TRL 7–9 là mức độ nào? Sản phẩm đã được thử nghiệm thực tế chưa?

**Thang đo Mức độ sẵn sàng công nghệ (Technology Readiness Level):**

| TRL | Mô tả | Trạng thái sản phẩm Mekong |
| :---: | --- | --- |
| 1–3 | Nghiên cứu cơ sở, khái niệm | Đã vượt qua |
| 4–6 | Nguyên mẫu thử nghiệm trong phòng lab | Hiện tại (MK-200/MK-300 nguyên mẫu hoàn thiện) |
| **7** | **Nguyên mẫu thử nghiệm trong môi trường thực** | **MK-200/300: mục tiêu Y3 — thử nghiệm tại tòa nhà thực** |
| **8** | **Hệ thống hoàn chỉnh, chứng nhận** | **MK-200/300: mục tiêu Y4–Y5** |
| **9** | **Triển khai thương mại đầy đủ** | **MK-200/300: Y5; Robot AMR: Y6–Y7** |

**Bằng chứng cụ thể cho MK-200:** Nguyên mẫu đã tích hợp thành công với hệ thống HVAC và chiếu sáng tại 2 dự án thí điểm nội bộ theo hợp đồng thử nghiệm với đối tác trước khi thành lập Mekong Technology.

---

## 7. TÓM TẮT CÁC CHỈ SỐ KỸ THUẬT QUAN TRỌNG

| Chỉ tiêu | Giá trị |
| --- | --- |
| Số dòng sản phẩm | 15 (BU1: 11 / BU2: 4) |
| Giá bán trung bình MK-200 | 400 USD [C] |
| Giá bán trung bình MK-300 | 760 USD [C] |
| Giá bán AMR-500 | 20.500 USD [C] |
| Công suất SMT | 50.000 bảng/năm |
| Công suất Robot Assembly | 500 robot/năm |
| Công suất CNC | 3.500 giờ máy/tháng (10 máy) |
| Độ chính xác CNC 5 trục | ±0,005 mm |
| FPY mục tiêu SMT | ≥98% |
| GPU nội bộ | NVIDIA A100 (giai đoạn 2) → H100 (giai đoạn 3) |
| Ngân sách R&D hàng năm (Y5+) | ~0,96M USD (~8% doanh thu) |
| Nhân sự R&D | 13–16 kỹ sư |
| Chứng nhận lộ trình | CE (Y4–5) → FCC (Y5–6) → BTL (Y6–7) → ISO 13849 PLd (Y7–8) |

---

*Tài liệu này phục vụ nội bộ Ban Giám đốc. Không phân phối bên ngoài.*
*[C]: Chuẩn tính từ mô hình tài chính. [B]: Tham chiếu thị trường. [A]: Giả định cần xác nhận.*
