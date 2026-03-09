# BÁO CÁO THIẾT KẾ HỆ THỐNG PCCC & AN TOÀN LAO ĐỘNG
## Fire Protection & Occupational Safety Design Report — Tổ hợp 3 Khối

**CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**
Độc lập – Tự do – Hạnh phúc

---oOo---

> **DỰ ÁN:** MEKONG TECHNOLOGY — TỔ HỢP CÔNG NGHỆ CAO ĐA NGÀNH
> (Datacenter & AI Cloud + Gia công Cơ khí CNC + Sản xuất Điện tử SMT & Lắp ráp Robot)
>
> **CHỦ ĐẦU TƯ:** CÔNG TY TNHH MEKONG TECHNOLOGY
>
> **ĐỊA ĐIỂM:** LÔ E2-03, ĐƯỜNG D1, KHU CÔNG NGHỆ CAO TP.HCM, QUẬN 9, TP THỦ ĐỨC
>
> **NGÀY:** Tháng 3 năm 2026
>
> **PHIÊN BẢN:** V1.0 — Thiết kế PCCC & An toàn Lao động cho Tổ hợp 3 Khối

---

# MỤC LỤC

| Chương | Nội dung | Trang |
|--------|----------|-------|
| **I** | Tổng quan dự án & Phân loại nguy cơ cháy | 3 |
| **II** | Thiết kế hệ thống PCCC — Khối A: Datacenter | 7 |
| **III** | Thiết kế hệ thống PCCC — Khối B: Xưởng CNC | 16 |
| **IV** | Thiết kế hệ thống PCCC — Khối C: Nhà máy SMT | 22 |
| **V** | Hệ thống PCCC chung toàn tổ hợp | 26 |
| **VI** | An toàn lao động & Vệ sinh công nghiệp | 33 |
| **VII** | Thủ tục PCCC & Timeline phê duyệt | 40 |
| **VIII** | Dự toán chi phí PCCC tổng hợp | 44 |
| | Phụ lục: Sơ đồ, bảng thiết bị, checklist | 48 |

---

# CƠ SỞ PHÁP LÝ & TIÊU CHUẨN ÁP DỤNG

## A. Luật & Nghị định Việt Nam

| # | Văn bản | Nội dung áp dụng |
|---|---------|------------------|
| 1 | **Luật PCCC số 27/2001/QH10** (sửa đổi bổ sung 2013) | Quy định chung về PCCC trong xây dựng & vận hành |
| 2 | **Nghị định 136/2020/NĐ-CP** | Hướng dẫn thi hành Luật PCCC — Phân loại công trình, thủ tục thẩm duyệt |
| 3 | **Nghị định 50/2024/NĐ-CP** | Sửa đổi NĐ 136 — Quy định mới về thẩm duyệt & nghiệm thu PCCC |
| 4 | **QCVN 06:2022/BXD** | Quy chuẩn quốc gia về An toàn cháy cho nhà & công trình |
| 5 | **TCVN 2622:1995** | Phòng cháy, chống cháy cho nhà và công trình — Yêu cầu thiết kế |
| 6 | **TCVN 5738:2021** | Hệ thống báo cháy tự động — Yêu cầu kỹ thuật |
| 7 | **TCVN 7336:2021** | Hệ thống sprinkler tự động — Yêu cầu thiết kế & lắp đặt |
| 8 | **TCVN 6101:1996** | Hệ thống chữa cháy bằng khí — Thiết kế & lắp đặt |
| 9 | **TCVN 3890:2023** | Phương tiện PCCC cho nhà & công trình — Trang bị, bố trí |
| 10 | **Luật An toàn Vệ sinh Lao động 2015** | Quy định chung về ATVSLĐ |

## B. Tiêu chuẩn Quốc tế (Áp dụng bổ sung)

| # | Tiêu chuẩn | Nội dung áp dụng |
|---|-----------|------------------|
| 1 | **NFPA 75** | Standard for the Fire Protection of IT Equipment |
| 2 | **NFPA 76** | Standard for the Fire Protection of Telecommunications Facilities |
| 3 | **NFPA 13** | Standard for the Installation of Sprinkler Systems |
| 4 | **NFPA 2001** | Standard on Clean Agent Fire Extinguishing Systems |
| 5 | **NFPA 11** | Standard for Low-, Medium-, and High-Expansion Foam |
| 6 | **NFPA 30** | Flammable and Combustible Liquids Code |
| 7 | **NFPA 484** | Standard for Combustible Metals (nhôm, titan, magnesium) |
| 8 | **FM Global DS 5-32** | Data Center Protection |
| 9 | **EN 15004** | Fixed Firefighting Systems — Gas Extinguishing Systems |
| 10 | **NFPA 855** | Standard for the Installation of Stationary Energy Storage Systems (Li-ion) |

---

# CHƯƠNG I: TỔNG QUAN DỰ ÁN & PHÂN LOẠI NGUY CƠ CHÁY

## 1.1. Mô tả tổ hợp

Tổ hợp Mekong Technology tọa lạc tại Lô E2-03, Đường D1, KCNC TP.HCM, tổng diện tích 10.000 m², bao gồm 3 khối chức năng có đặc tính cháy **HOÀN TOÀN KHÁC NHAU**:

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TỔ HỢP MEKONG TECHNOLOGY                        │
│                       10.000 m² tổng thể                           │
│                                                                     │
│  ┌──────────────┐  ┌───────────────────┐  ┌──────────────────┐     │
│  │  KHỐI A      │  │    KHỐI B         │  │   KHỐI C         │     │
│  │  DATACENTER  │  │    XƯỞNG CNC      │  │   NHÀ MÁY SMT   │     │
│  │  3.000 m²    │  │    4.000 m²       │  │   3.000 m²       │     │
│  │              │  │                   │  │                  │     │
│  │ Gas Suppress │  │ Sprinkler + Foam  │  │ Sprinkler + Gas  │     │
│  │ VESDA        │  │ CO2 cục bộ       │  │ (Clean room)     │     │
│  │ FM-200/Novec │  │ Dry Chemical     │  │                  │     │
│  └──────────────┘  └───────────────────┘  └──────────────────┘     │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │         HỆ THỐNG CHUNG: Fire Alarm (Addressable)           │   │
│  │         Fire Pump House │ Water Tank │ Generator PCCC       │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

## 1.2. Phân loại nguy cơ cháy theo QCVN 06:2022/BXD & NFPA

### 1.2.1. Phân hạng nguy hiểm cháy nổ

| Khối | Khu vực | Hạng (QCVN 06) | Occupancy (NFPA) | Loại cháy chính | Ghi chú |
|------|---------|-----------------|-------------------|-----------------|---------|
| **A** | Data Hall | Hạng C | Ordinary Hazard Group 2 | Class C (Electrical) | Thiết bị điện tử 24/7, tải 1,5-3 MW |
| **A** | UPS Room (Li-ion) | Hạng B | Extra Hazard Group 1 | Class C + Thermal Runaway | **NGUY HIỂM CAO**: Pin lithium-ion, nhiệt độ tự cháy > 500°C |
| **A** | Generator Room | Hạng B | Extra Hazard Group 1 | Class B (Flammable Liquid) | Diesel 10.000L, flash point 52°C |
| **A** | Cooling Plant | Hạng C | Ordinary Hazard Group 1 | Class C (Electrical) | Chiller, bơm, quạt |
| **B** | Machine Shop | Hạng B | Extra Hazard Group 1 | Class B + D (Metal) | Dầu coolant + phôi kim loại |
| **B** | Coolant Storage | Hạng A | Extra Hazard Group 2 | Class B (Flammable Liquid) | MWF 500-1.000 L/tháng, Class IIIB |
| **B** | Chip Collection | Hạng A | Extra Hazard Group 2 | **Class D (Combustible Metal)** | **CỰC KỲ NGUY HIỂM**: Phôi nhôm/titan/Mg |
| **B** | QA/CMM Room | Hạng C | Light Hazard | Class A (Ordinary) | Phòng sạch, ít nguy cơ |
| **C** | SMT Line | Hạng C | Ordinary Hazard Group 2 | Class A + B | Chì hàn, flux |
| **C** | Clean Room | Hạng C | Ordinary Hazard Group 1 | Class A | Phòng sạch cấp 10.000 |
| **C** | IPA/Flux Storage | Hạng A | Extra Hazard Group 2 | **Class IB (Flammable)** | IPA flash point 12°C — **RẤT NGUY HIỂM** |
| **C** | Robot Assembly | Hạng C | Ordinary Hazard Group 1 | Class A + C | Lắp ráp robot, hàn |

### 1.2.2. Ma trận nguy cơ đặc thù

| Nguy cơ | Khối | Mức độ | Giải pháp PCCC yêu cầu |
|---------|------|--------|------------------------|
| **Thermal Runaway Li-ion** | A (UPS Room) | **CRITICAL** | Gas suppression riêng + VESDA + Water mist dự phòng + Thermal monitoring |
| **Diesel Fire** | A (Generator) | HIGH | Foam system cố định + CO2 backup |
| **Coolant Oil Fire** | B (Machine Shop) | HIGH | Foam cục bộ + Sprinkler + CO2 tại máy |
| **Combustible Metal** | B (Chip Area) | **CRITICAL** | **Class D agent (Met-L-X / Lith-X)** — TUYỆT ĐỐI KHÔNG DÙNG NƯỚC |
| **IPA Vapor Explosion** | C (Storage) | **CRITICAL** | FM-200/Novec + Explosion-proof equipment + LEL monitoring |
| **Flux Fume** | C (SMT Line) | MEDIUM | Sprinkler + Local exhaust + Smoke detection |
| **Electrical Fire** | A, B, C | HIGH | Clean agent / CO2 — Không dùng nước trên thiết bị đang hoạt động |

### 1.2.3. Xung đột PCCC giữa các khối

> **VẤN ĐỀ THEN CHỐT:** 3 khối cần 3 hệ thống chữa cháy khác nhau trên cùng 10.000 m².
> Đây là thách thức thiết kế lớn nhất của dự án.

| Xung đột | Chi tiết | Biện pháp |
|-----------|----------|-----------|
| DC (Khí) vs CNC (Nước) | Gas suppression yêu cầu phòng **KÍN**, Sprinkler xả nước gần DC sẽ gây hư thiết bị | Tường ngăn cháy REI 120, cửa chống cháy EI 90, hệ thống thoát nước PCCC riêng |
| CNC (Bụi kim loại) vs SMT (Clean Room) | Bụi nhôm/titan từ CNC nếu lọt vào clean room = ô nhiễm + nguy cơ cháy | Hành lang đệm áp suất dương, HEPA filter, vùng cách ly ≥ 8m |
| Generator Diesel vs DC | Bồn diesel 10.000L ngay cạnh server = rủi ro cháy lan | Tường chống cháy REI 180, bồn diesel có đê bao secondary containment |
| Li-ion Battery vs tất cả | Thermal runaway tỏa nhiệt 800-1.000°C, phát khí HF độc | Phòng pin riêng biệt, tường REI 180, hệ thống thông gió cưỡng bức + gas |

---

# CHƯƠNG II: THIẾT KẾ HỆ THỐNG PCCC — KHỐI A: DATACENTER (3.000 m²)

## 2.1. Nguyên tắc thiết kế

Theo NFPA 75 (Fire Protection of IT Equipment) và NFPA 76 (Telecom Facilities):
- **KHÔNG SỬ DỤNG NƯỚC** trong Data Hall, UPS Room (trừ pre-action sprinkler dự phòng)
- Sử dụng hệ thống chữa cháy khí sạch (Clean Agent) làm phương tiện chính
- Phát hiện cháy sớm bằng VESDA (Very Early Smoke Detection Apparatus)
- Phân vùng chống cháy (Fire Compartment) cho từng khu chức năng
- Duy trì hoạt động liên tục 24/7 — thiết kế N+1 redundancy cho hệ thống PCCC

## 2.2. So sánh & Lựa chọn chất chữa cháy khí sạch

### Bảng so sánh 3 phương án Gas Suppression

| Tiêu chí | **Novec 1230 (FK-5-1-12)** | **FM-200 (HFC-227ea)** | **IG-541 (Inergen)** |
|----------|---------------------------|----------------------|---------------------|
| **Nhà sản xuất** | 3M (nay là Solventum) | Chemours / Kidde | Tyco / Johnson Controls |
| **Cơ chế chữa cháy** | Hấp thụ nhiệt (Heat absorption) | Hấp thụ nhiệt + ức chế hóa học | Giảm O₂ từ 21% → 12,5% |
| **Nồng độ thiết kế** | 4,2–5,8% v/v | 7,0–8,5% v/v | 36,5–43,0% v/v |
| **Thời gian xả** | ≤ 10 giây | ≤ 10 giây | ≤ 60 giây |
| **GWP (Global Warming Potential)** | **1** (rất thấp) | **3.220** (rất cao) | **0** (không ảnh hưởng) |
| **ODP (Ozone Depletion)** | 0 | 0 | 0 |
| **ALT (Atmospheric Lifetime)** | 5 ngày | 36,5 năm | N/A |
| **An toàn con người (NOAEL)** | 10% v/v | 9% v/v | 43% v/v |
| **Áp suất bình chứa** | 25–42 bar | 25–42 bar | 200–300 bar |
| **Khối lượng agent/m³** | 0,55–0,78 kg/m³ | 0,72–0,95 kg/m³ | 1,28 m³ gas/m³ phòng |
| **Diện tích bình chứa** | Nhỏ (lỏng nén) | Nhỏ (lỏng nén) | **Lớn** (bình áp cao 80L, 200bar) |
| **Giá agent (USD/kg)** | ~80–120 USD/kg | ~40–60 USD/kg | ~15–25 USD/m³ |
| **Chi phí hệ thống/m³ phòng** | 120–180 USD/m³ | 80–130 USD/m³ | 70–110 USD/m³ |
| **Tương thích thiết bị IT** | Xuất sắc (không residue) | Tốt (không residue) | Tốt (không residue) |
| **Quy định EU F-Gas** | **Exempt** (GWP < 150) | **Bị hạn chế** từ 2024+ | Exempt |
| **TCVN 6101:1996** | Chưa cập nhật chính thức | Có quy định | Có quy định |
| **Xu hướng 2025-2030** | **Đang tăng mạnh** | Đang bị loại bỏ dần | Ổn định |

### KHUYẾN NGHỊ: **NOVEC 1230** cho Data Hall + UPS Room

**Lý do chọn Novec 1230:**
1. **GWP = 1**: Đáp ứng xu hướng ESG và quy định F-Gas tương lai (FM-200 GWP = 3.220 đang bị cấm ở EU)
2. **An toàn con người**: NOAEL 10% — cao nhất trong 3 phương án, an toàn cho kỹ thuật viên DC làm việc 24/7
3. **Thời gian xả 10 giây**: Nhanh nhất, bảo vệ thiết bị IT trị giá hàng triệu USD
4. **Không residue**: Không để lại cặn, không gây hư hại thêm cho server/storage
5. **Diện tích bình nhỏ**: Tiết kiệm không gian quý giá trong DC 3.000 m² (so với IG-541 cần rất nhiều bình áp cao)
6. **3M/Solventum** cam kết cung cấp dài hạn cho thị trường APAC

**Phương án dự phòng:** IG-541 (Inergen) cho Generator Room — vì phòng this ít nhạy cảm hơn, IG-541 rẻ hơn và hoàn toàn inert.

## 2.3. Thiết kế chi tiết PCCC cho từng khu vực Khối A

### 2.3.1. DATA HALL (1.800 m² — Zone 1 Colocation + Zone 2 AI/HPC)

#### A. Phân vùng chống cháy (Fire Compartment)

```
┌─────────────────────────────────────────────────────────────┐
│                     DATA HALL (1.800 m²)                     │
│                                                              │
│  ┌────────────────────────┐  ┌────────────────────────────┐ │
│  │   ZONE 1 — COLOCATION  │  │   ZONE 2 — AI/HPC          │ │
│  │   900 m²               │  │   900 m²                    │ │
│  │   60 Racks × 5-10 kW   │  │   40 Racks × 15-30 kW      │ │
│  │                        │  │                             │ │
│  │  ┌──────┐  ┌──────┐   │  │  ┌──────┐  ┌──────┐        │ │
│  │  │Row A │  │Row B │   │  │  │Row E │  │Row F │        │ │
│  │  │15 Rk │  │15 Rk │   │  │  │10 Rk │  │10 Rk │        │ │
│  │  └──────┘  └──────┘   │  │  └──────┘  └──────┘        │ │
│  │  ┌──────┐  ┌──────┐   │  │  ┌──────┐  ┌──────┐        │ │
│  │  │Row C │  │Row D │   │  │  │Row G │  │Row H │        │ │
│  │  │15 Rk │  │15 Rk │   │  │  │10 Rk │  │10 Rk │        │ │
│  │  └──────┘  └──────┘   │  │  └──────┘  └──────┘        │ │
│  │                        │  │                             │ │
│  │  Novec 1230 Zone A     │  │  Novec 1230 Zone B          │ │
│  │  VESDA Zone A          │  │  VESDA Zone B               │ │
│  └──────────[EI90]────────┘  └─────────────────────────────┘ │
│            ↑                                                  │
│     Tường ngăn cháy EI 90 giữa 2 Zone                       │
└─────────────────────────────────────────────────────────────┘
```

**Yêu cầu kỹ thuật:**

| Hạng mục | Zone 1 (Colocation) | Zone 2 (AI/HPC) |
|----------|--------------------|--------------------|
| Diện tích | 900 m² | 900 m² |
| Chiều cao trần (raised floor → ceiling) | 3,0 m | 3,5 m (do liquid cooling overhead) |
| Thể tích bảo vệ | 2.700 m³ | 3.150 m³ |
| Nồng độ Novec 1230 thiết kế | 5,3% v/v | 5,3% v/v |
| Lượng Novec 1230 cần | 2.700 × 0,066 = **178 kg** | 3.150 × 0,066 = **208 kg** |
| Số bình chứa (180L, 70kg/bình) | 3 bình + 1 dự phòng = **4 bình** | 3 bình + 1 dự phòng = **4 bình** |
| Thời gian xả | ≤ 10 giây | ≤ 10 giây |
| Số đầu phun (nozzle) | 12 đầu (1 đầu/75 m²) | 12 đầu (1 đầu/75 m²) |

> **Lưu ý quan trọng:** Mỗi Zone có hệ thống Novec 1230 **RIÊNG BIỆT** với bộ điều khiển riêng, 
> đảm bảo khi Zone 1 xả gas thì Zone 2 vẫn hoạt động bình thường (và ngược lại). 
> Đây là yêu cầu BẮT BUỘC cho Datacenter 24/7.

#### B. Hệ thống phát hiện cháy sớm — VESDA

VESDA (Very Early Smoke Detection Apparatus) là hệ thống phát hiện khói bằng phương pháp hút mẫu không khí (aspirating smoke detection), phát hiện cháy ở giai đoạn **SỚM NHẤT** — trước cả khi có ngọn lửa.

**Vị trí lắp đặt VESDA trong Data Hall:**

| Vị trí | Số điểm hút | Lý do |
|--------|------------|-------|
| **Trên trần (Above Ceiling)** | 24 điểm (12/Zone) | Phát hiện khói từ cáp điện, busway trên trần |
| **Dưới sàn nâng (Below Raised Floor)** | 24 điểm (12/Zone) | Phát hiện khói từ cáp ngầm, PDU dưới sàn |
| **Trong hành lang nóng (Hot Aisle)** | 16 điểm (8/Zone) | Nơi nhiệt độ cao nhất, phát hiện overheating |
| **Trong hành lang lạnh (Cold Aisle)** | 16 điểm (8/Zone) | Phát hiện khói trước khi vào server intake |
| **Trong tủ Rack (In-Rack)** | 20 điểm (Rack quan trọng) | Phát hiện tại nguồn — nhanh nhất |
| **Tổng** | **100 điểm hút** | Mạng lưới dày đảm bảo phát hiện < 60 giây |

**Ngưỡng báo động VESDA (4 mức):**

| Mức | Ngưỡng (obs/m) | Hành động |
|-----|----------------|-----------|
| **Alert** (Cảnh báo sớm) | 0,005 obs/m | Gửi cảnh báo NOC/SOC, kiểm tra tại chỗ |
| **Action** (Hành động) | 0,02 obs/m | Kích hoạt camera tại khu vực, thông báo đội PCCC |
| **Fire 1** (Báo cháy 1) | 0,10 obs/m | Kích hoạt alarm toàn zone, chuẩn bị xả gas |
| **Fire 2** (Báo cháy 2) | 0,15 obs/m | **XẢ GAS TỰ ĐỘNG** Novec 1230, sơ tán nhân viên |

**Thiết bị VESDA đề xuất:**

| Model | Số lượng | Vùng bảo vệ | Giá tham khảo |
|-------|----------|-------------|---------------|
| VESDA-E VEA-040 (4-channel) | 4 bộ | Zone 1 (trên trần + dưới sàn) | ~8.500 USD/bộ |
| VESDA-E VEA-040 (4-channel) | 4 bộ | Zone 2 (trên trần + dưới sàn) | ~8.500 USD/bộ |
| VESDA-E VEP (single pipe) | 4 bộ | Hot/Cold Aisle (2 Zone) | ~5.200 USD/bộ |
| VESDA VLC-500 (LaserCOMPACT) | 10 bộ | In-Rack detection | ~3.800 USD/bộ |
| **Tổng VESDA Data Hall** | **22 bộ** | | **~163.600 USD** |

#### C. Pre-Action Sprinkler (Hệ thống dự phòng)

Theo NFPA 75 Section 8.4, Data Hall NÊN có hệ thống pre-action sprinkler như tuyến phòng thủ cuối cùng:

- **Loại:** Double-interlock pre-action (yêu cầu CẢ 2 điều kiện: detector báo cháy + sprinkler head nổ)
- **Mục đích:** Chỉ kích hoạt khi Novec 1230 THẤT BẠI và đám cháy phát triển lớn
- **Mật độ phun:** 6,1 mm/phút (NFPA 13, Ordinary Hazard Group 2)
- **Diện tích coverage:** 12,1 m²/đầu sprinkler
- **Loại sprinkler head:** Upright, 74°C (165°F), K-factor 5.6
- **Số đầu phun:** 1.800 / 12,1 = **149 đầu** (~75 đầu/Zone)

> **QUAN TRỌNG:** Pre-action sprinkler KHÔNG xả nước trừ khi có double confirmation.
> Điều này bảo vệ thiết bị IT khỏi sự cố xả nước nhầm (false discharge).

### 2.3.2. UPS ROOM — Phòng Pin Lithium-ion (200 m²)

Đây là khu vực **NGUY HIỂM NHẤT** trong toàn bộ Khối A do rủi ro **thermal runaway** của pin lithium-ion.

#### A. Đặc tính nguy hiểm của pin Lithium-ion

| Thông số | Giá trị |
|----------|---------|
| Loại pin | Lithium-ion (LiFePO₄ hoặc NMC) |
| Dung lượng UPS | 2N × 500 kVA = 1.000 kVA tổng |
| Thời gian runtime | 15 phút (full load) |
| Năng lượng lưu trữ ước tính | ~250 kWh mỗi chuỗi UPS |
| Nhiệt độ thermal runaway | > 150°C (NMC) hoặc > 270°C (LiFePO₄) |
| Khí thoát ra khi cháy | **HF (Hydrofluoric acid)**, CO, CO₂, H₂, electrolyte vapor |
| Khả năng cháy lan | Chuỗi phản ứng dây chuyền (cell-to-cell propagation) |
| Thời gian cháy | Có thể kéo dài **NHIỀU GIỜ** — rất khó dập tắt hoàn toàn |

#### B. Thiết kế PCCC cho UPS Room

| Hạng mục | Thiết kế |
|----------|----------|
| **Tường** | REI 180 (chịu lửa 180 phút) — vượt yêu cầu REI 120 thông thường |
| **Cửa** | EI 120, tự đóng, có panic bar |
| **Thông gió** | Cưỡng bức 24/7, lưu lượng ≥ 6 ACH (Air Changes/Hour), đường ống riêng ra ngoài trời |
| **Hệ thống chữa cháy chính** | Novec 1230 — 200 m² × 3,5 m = 700 m³, nồng độ 5,3%, lượng agent: 46 kg |
| **Hệ thống dự phòng** | Water mist (sương mù nước áp suất cao) — Dập thermal runaway kéo dài |
| **Phát hiện** | VESDA + Thermal sensor (mỗi rack battery) + Gas detector (H₂, HF) |
| **Ngưỡng thermal alarm** | 45°C (cảnh báo), 60°C (xả gas), 80°C (kích hoạt water mist) |
| **Gas detector** | LEL H₂ detector + HF detector (0,5 ppm alarm) |
| **Cách ly** | Contactor tự ngắt ngay khi phát hiện thermal runaway |
| **Drainage** | Sàn có slope 1%, rãnh thu nước → bể chứa kín (nước mist + electrolyte) |

> ⚠️ **CẢNH BÁO:** Pin Lithium-ion cháy KHÔNG THỂ dập tắt hoàn toàn bằng gas.
> Novec 1230 chỉ ức chế ngọn lửa bên ngoài. Thermal runaway bên trong cell tiếp tục.
> Cần Water Mist để làm mát liên tục cho đến khi pin xả hết năng lượng.
> Theo NFPA 855, phải có phương án "Defend-in-Place" hoặc di dời pin ra ngoài.

### 2.3.3. GENERATOR ROOM — Phòng Máy phát điện Diesel (300 m²)

| Hạng mục | Thiết kế |
|----------|----------|
| **Cấu hình** | 2 × 2.000 kVA Diesel Generator (N+1) |
| **Bồn nhiên liệu** | 10.000 L diesel (chứa trong ngày) + Bể ngầm 30.000 L (dự trữ 72h) |
| **Tường** | REI 180, concrete block 200mm + fireproof coating |
| **Cửa** | EI 120, louvered cho thông gió |
| **Hệ thống chữa cháy** | **IG-541 (Inergen)** — phù hợp cho phòng máy lớn, rẻ hơn Novec |
| **Thể tích phòng** | 300 m² × 5 m = 1.500 m³ |
| **Lượng IG-541** | 1.500 × 0,52 = **780 m³ gas** (tại NTP) |
| **Số bình 80L/200bar** | 780 / 10,7 = **73 bình** + 10% dự phòng = **80 bình** |
| **Bồn diesel PCCC** | Foam system cố định, AFFF 3%, lưu lượng 6,5 L/m²/phút |
| **Diện tích bồn** | 4 m² bồn ngày → Foam: 4 × 6,5 = 26 L/phút × 15 phút = **390 L AFFF** |
| **Đê bao (Bund)** | 110% dung tích bồn = 11.000 L, concrete lót HDPE |
| **Phát hiện** | Smoke detector + Heat detector + Linear heat cable quanh bồn |
| **Thông gió** | ≥ 10 ACH, tách biệt với Data Hall |

### 2.3.4. COOLING PLANT / CHILLER YARD (400 m²)

| Hạng mục | Thiết kế |
|----------|----------|
| **Thiết bị** | 2 × 500 RT Water-Cooled Chiller + Cooling Tower + Pump Set |
| **Nguy cơ** | Class C (Electrical), refrigerant leak (R-134a hoặc R-410A) |
| **PCCC** | Sprinkler hệ wet pipe, OH1 (6,1 mm/phút) |
| **Phát hiện** | Smoke + Heat detector, Refrigerant leak detector |
| **Đặc thù** | Khu vực ngoài trời/bán ngoài trời → thông gió tự nhiên |

### 2.3.5. NOC / SOC / Office Area (300 m²)

| Hạng mục | Thiết kế |
|----------|----------|
| **Nguy cơ** | Light Hazard — văn phòng, giám sát |
| **PCCC** | Sprinkler hệ wet pipe, Light Hazard (4,1 mm/phút) |
| **Phát hiện** | Addressable smoke detector, 1 detector / 60 m² |
| **Bình cầm tay** | CO2 5kg mỗi 200 m² |

## 2.4. Tổng hợp thiết bị PCCC Khối A — Datacenter

| # | Hạng mục | Số lượng | Đơn giá (USD) | Thành tiền (USD) |
|---|----------|----------|---------------|------------------|
| 1 | Hệ thống Novec 1230 — Data Hall Zone 1 (178 kg) | 1 hệ thống | 85.000 | 85.000 |
| 2 | Hệ thống Novec 1230 — Data Hall Zone 2 (208 kg) | 1 hệ thống | 95.000 | 95.000 |
| 3 | Hệ thống Novec 1230 — UPS Room (46 kg) | 1 hệ thống | 35.000 | 35.000 |
| 4 | Hệ thống Water Mist — UPS Room (dự phòng) | 1 hệ thống | 45.000 | 45.000 |
| 5 | Hệ thống IG-541 — Generator Room (80 bình) | 1 hệ thống | 120.000 | 120.000 |
| 6 | Foam system — Bồn diesel | 1 hệ thống | 18.000 | 18.000 |
| 7 | VESDA-E VEA-040 (Data Hall) | 8 bộ | 8.500 | 68.000 |
| 8 | VESDA-E VEP (Hot/Cold Aisle) | 4 bộ | 5.200 | 20.800 |
| 9 | VESDA VLC-500 (In-Rack) | 10 bộ | 3.800 | 38.000 |
| 10 | Pre-action sprinkler system (Data Hall) | 149 đầu | 280 | 41.720 |
| 11 | Wet sprinkler (Cooling Plant + Office) | 65 đầu | 180 | 11.700 |
| 12 | Thermal sensor (Battery Rack) | 20 bộ | 450 | 9.000 |
| 13 | Gas detector H₂ + HF (UPS Room) | 6 bộ | 1.800 | 10.800 |
| 14 | Smoke/Heat detector (Addressable) | 45 đầu | 120 | 5.400 |
| 15 | Fire barrier / door (REI 120-180) | 12 bộ | 3.500 | 42.000 |
| 16 | Bình chữa cháy xách tay (CO2, 5kg) | 15 bình | 180 | 2.700 |
| 17 | Bình chữa cháy xách tay (ABC, 4kg) | 10 bình | 95 | 950 |
| 18 | Lắp đặt + đường ống + dây điện + commissioning | 1 gói | 85.000 | 85.000 |
| | **TỔNG KHỐI A** | | | **~734.070 USD** |

> **Ghi chú:** Giá trên là benchmark tham khảo Q4/2025 từ các nhà cung cấp tại VN 
> (Minimax, Kidde/Carrier, Fike, Tyco/Johnson Controls). Giá thực tế cần RFQ chính thức.

---

# CHƯƠNG III: THIẾT KẾ HỆ THỐNG PCCC — KHỐI B: XƯỞNG CNC (4.000 m²)

## 3.1. Đặc thù nguy cơ cháy Xưởng CNC

Xưởng gia công CNC cơ khí nặng có **4 loại nguy cơ cháy** đồng thời:

| Loại nguy cơ | Nguồn | Class cháy | Mức độ | Tiêu chuẩn áp dụng |
|-------------|-------|-----------|--------|---------------------|
| **Dầu Coolant (MWF)** | 500-1.000 L/tháng, phân tán ở 20-30 máy | Class IIIB (FP > 93°C) | HIGH | NFPA 30 |
| **Phôi kim loại nhỏ (Chips/Swarf)** | Nhôm, Titan, Inox — 50-100 tấn/năm | **Class D (Combustible Metal)** | **CRITICAL** | **NFPA 484** |
| **Dầu thủy lực Máy** | Mỗi máy CNC 5 trục chứa 50-200L dầu thủy lực | Class IIIA (FP 60-93°C) | MEDIUM | NFPA 30 |
| **Điện** | Motor spindle 30-50 kW, biến tần, panel điện | Class C (Electrical) | MEDIUM | NFPA 70 |

### 3.1.1. Phân tích nguy cơ Dầu Coolant (Metalworking Fluid — MWF)

| Thông số | Giá trị |
|----------|---------|
| Loại MWF sử dụng | Semi-synthetic (Castrol Alusol SL 61 XBB hoặc tương đương) |
| Flash Point | 180-220°C (Class IIIB theo NFPA 30) |
| Fire Point | 210-250°C |
| Lượng coolant trong máy | 200-500 L/máy |
| Tổng coolant toàn xưởng | 25 máy × 350 L = **8.750 L** (~7,5 tấn) |
| Lượng tiêu hao/bổ sung | 500-1.000 L/tháng |
| Kho chứa coolant tập trung | 5.000 L (5 thùng phuy 1.000L) |
| Tình huống cháy | Oil mist bắt lửa từ phôi nóng > 300°C, spindle hỏng gây ma sát |

### 3.1.2. Phân tích nguy cơ Phôi kim loại (Chips) — **NGUY HIỂM ĐẶC BIỆT**

> ⚠️ **CẢNH BÁO NGHIÊM TRỌNG THEO NFPA 484:**
> Phôi nhôm nhỏ (< 420 μm) và phôi titan/magnesium có thể:
> - **TỰ BỐC CHÁY** khi tích tụ và ẩm ướt (phản ứng tỏa nhiệt)
> - **NỔ BỤI** (Dust Explosion) khi nồng độ bụi trong không khí vượt LEL 
> - **PHẢN ỨNG VỚI NƯỚC** — Nhôm cháy + Nước = Phản ứng nhiệt nhôm → tăng nhiệt gấp bội
> - **KHÔNG ĐƯỢC DÙNG SPRINKLER / NƯỚC / FOAM** cho khu vực tập trung phôi nhôm/titan!

| Vật liệu | Sản lượng phôi (tấn/năm) | Tính chất cháy | Nhiệt độ tự bốc cháy | Chất chữa cháy |
|-----------|-------------------------|-----------------|----------------------|-----------------|
| **Nhôm (Al)** | 25-40 | Cháy dữ dội, 2.500°C, tạo Al₂O₃ | 650°C (bột < 420 μm) | **Met-L-X, Na₂CO₃ dry powder** |
| **Thép hợp kim** | 15-25 | Khó cháy dạng phôi lớn, nguy hiểm dạng bụi | > 1.000°C | Dry chemical, CO2 |
| **Titan (Ti)** | 5-15 | **CỰC KỲ NGUY HIỂM**, cháy > 3.000°C, rất khó dập | 250°C (bột mịn) | **Chỉ dùng Class D agent** |
| **Inox 316** | 10-20 | Ít nguy hiểm dạng phôi xoắn, nguy hiểm dạng bụi silic | > 1.000°C | Dry chemical, CO2 |

## 3.2. Thiết kế PCCC theo khu vực

### Sơ đồ phân vùng PCCC Xưởng CNC

```
┌──────────────────────────────────────────────────────────────────────┐
│                    KHỐI B — XƯỞNG CNC (4.000 m²)                    │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────┐        │
│  │    MACHINE SHOP — KHU GIA CÔNG (2.800 m²)               │        │
│  │                                                          │        │
│  │  [CNC-01] [CNC-02] [CNC-03] [CNC-04] [CNC-05]         │        │
│  │  [CNC-06] [CNC-07] [CNC-08] [CNC-09] [CNC-10]         │        │
│  │  [CNC-11] [CNC-12] [CNC-13] [CNC-14] [CNC-15]         │        │
│  │  [CNC-16] [CNC-17] [CNC-18] [CNC-19] [CNC-20]         │        │
│  │  [CNC-21] [CNC-22] [CNC-23] [CNC-24] [CNC-25]         │        │
│  │                                                          │        │
│  │  → Sprinkler (Wet) toàn diện + CO2/Dry Chem tại mỗi máy │        │
│  │  → Chip conveyor ngầm → Chip Collection Area             │        │
│  └───────────────────────────────────┬──────────────────────┘        │
│                                      │                               │
│  ┌──────────────┐  ┌────────────────┴───────┐  ┌───────────────┐   │
│  │ QA/QC Lab    │  │ CHIP COLLECTION AREA   │  │  COOLANT      │   │
│  │ CMM Room     │  │ 200 m²                 │  │  STORAGE      │   │
│  │ 200 m²       │  │                        │  │  150 m²       │   │
│  │              │  │ ⚠️ CLASS D ZONE        │  │               │   │
│  │ Sprinkler    │  │ MET-L-X / Lith-X      │  │ Foam System   │   │
│  │ (Light Haz)  │  │ KHÔNG DÙNG NƯỚC!       │  │ AFFF 3%       │   │
│  └──────────────┘  └────────────────────────┘  └───────────────┘   │
│                                                                      │
│  ┌─────────────┐  ┌───────────────┐  ┌────────────────────────┐    │
│  │ TOOL ROOM   │  │ COMPRESSED    │  │  LOADING DOCK /        │    │
│  │ 150 m²      │  │ AIR ROOM      │  │  RAW MATERIAL          │    │
│  │             │  │ 100 m²        │  │  400 m²                │    │
│  │ Sprinkler   │  │ Sprinkler     │  │  Sprinkler             │    │
│  └─────────────┘  └───────────────┘  └────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

### 3.2.1. MACHINE SHOP — Khu gia công chính (2.800 m²)

#### A. Wet Sprinkler System (Hệ thống phun nước tự động)

**Thiết kế theo NFPA 13 & TCVN 7336:2021 — Extra Hazard Group 1**

| Thông số thiết kế | Giá trị | Căn cứ |
|-------------------|---------|--------|
| **Phân hạng nguy hiểm** | Extra Hazard Group 1 | Có dầu coolant, nguy cơ cháy Class B |
| **Mật độ phun thiết kế** | **12,2 mm/phút (0,30 gpm/ft²)** | NFPA 13, Table 19.3.3.2.1 |
| **Diện tích hoạt động tối đa** | 232 m² (2.500 ft²) | NFPA 13, EH Group 1 |
| **Lưu lượng tối thiểu vùng hoạt động** | 232 × 12,2 = **2.830 L/phút** | Tính toán |
| **Cộng thêm hose stream** | 1.893 L/phút (500 gpm) | NFPA 13, Table 19.3.3.1.1 |
| **Tổng lưu lượng yêu cầu** | **4.723 L/phút** | |
| **Thời gian cung cấp nước** | 90 phút | NFPA 13, EH Group 1 |
| **Thể tích nước cần** | 4.723 × 90 = **425.070 L ≈ 425 m³** | Chỉ cho Khối B |
| **Loại sprinkler head** | Upright / Pendent, 68°C hoặc 74°C, K-factor 8.0 | Quick Response |
| **Khoảng cách đầu phun** | 3,0 × 3,0 m (max 3,7 × 3,7 m) | NFPA 13 |
| **Diện tích coverage/đầu** | 9,0 m² | |
| **Số đầu sprinkler** | 2.800 / 9,0 = **312 đầu** | |
| **Đường ống chính (Main)** | DN150 (6") | Schedule 40, galvanized |
| **Đường ống nhánh (Branch)** | DN50-65 (2"-2½") | Schedule 40, galvanized |

#### B. CO2 / Dry Chemical cục bộ tại từng máy CNC

Mỗi máy CNC 5 trục được trang bị hệ thống chữa cháy tại chỗ:

| Hạng mục | Specification | Số lượng |
|----------|--------------|----------|
| **CO2 nozzle tự động trong buồng gia công** | 5 kg CO2, kích hoạt bởi thermal detector 150°C | 25 bộ (mỗi máy 1 bộ) |
| **Bình CO2 xách tay 5 kg** | Đặt cạnh mỗi máy, khoảng cách ≤ 15m | 25 bình |
| **Bình bột khô ABC 6 kg** | Đặt dọc lối đi chính, khoảng cách ≤ 20m | 15 bình |
| **Thermal detector trong buồng máy** | Fixed temp 150°C, Rate-of-Rise | 50 đầu (2/máy) |
| **Emergency Stop Button** | Nút dừng khẩn cấp kết hợp ngắt điện + xả CO2 | 25 bộ |

**Quy trình tự động khi phát hiện cháy trong buồng CNC:**
1. Thermal detector 150°C kích hoạt → Dừng spindle ngay lập tức
2. Ngắt nguồn cấp điện cho máy CNC (motor, spindle, servo)
3. Xả CO2 vào buồng gia công (enclosed machining area)
4. Tắt hệ thống coolant pump (ngừng cấp dầu)
5. Báo alarm đến Fire Alarm Panel trung tâm

#### C. Foam System cục bộ — Khu tập trung Coolant/Dầu mỡ

Khu vực lưu trữ coolant tập trung, thùng chứa dầu thải, bồn chứa dầu thủy lực cần hệ thống foam riêng:

| Thông số | Giá trị |
|----------|---------|
| **Loại foam** | AFFF 3% (Aqueous Film-Forming Foam) |
| **Tiêu chuẩn** | NFPA 11 — Low Expansion Foam |
| **Diện tích bảo vệ** | 150 m² (Coolant Storage) + 50 m² (Waste Oil Area) = 200 m² |
| **Mật độ phun** | 6,5 L/m²/phút (NFPA 11, Design Density for IIIB liquid) |
| **Lưu lượng** | 200 × 6,5 = **1.300 L/phút** (hỗn hợp foam-nước) |
| **Thời gian phun** | 15 phút |
| **Tổng hỗn hợp** | 1.300 × 15 = **19.500 L** |
| **Lượng AFFF concentrate 3%** | 19.500 × 3% = **585 L** |
| **Proportioner** | Balanced Pressure Proportioning System |
| **Số foam maker** | 4 đầu phun foam |
| **Đê bao (Bund wall)** | Quanh khu Coolant Storage, H = 300mm, diện tích chứa ≥ 110% thể tích coolant |

### 3.2.2. CHIP COLLECTION AREA — Khu thu gom phôi (200 m²)

> ⚠️ **ĐÂY LÀ KHU VỰC PCCC ĐẶC BIỆT NHẤT TOÀN DỰ ÁN**
> Phôi nhôm + titan tạo nguy cơ Class D — TUYỆT ĐỐI KHÔNG DÙNG NƯỚC hay bọt.
> Vi phạm quy tắc này có thể gây **NỔ HYDROGEN** hoặc phản ứng nhiệt nhôm.

#### A. Biện pháp phòng ngừa

| Hạng mục | Yêu cầu |
|----------|---------|
| **Phân loại phôi** | Tách riêng: Nhôm / Titan / Thép-Inox, KHÔNG trộn lẫn |
| **Thùng chứa** | Thùng thép không gỉ, có nắp tự đóng, dung tích 200L/thùng |
| **Thông gió** | Quạt hút chống nổ (Ex-rated), lưu lượng ≥ 15 ACH |
| **Sàn** | Concrete epoxy chống tĩnh điện, không tạo tia lửa |
| **Điện** | Thiết bị điện chống nổ (Ex d, Ex e) theo IEC 60079 |
| **Housekeeping** | Quét dọn phôi mỗi 2 giờ, không để tích tụ > 6mm trên bề mặt (NFPA 484, Sec 6.3) |
| **Giám sát** | Camera nhiệt (thermal imaging) 24/7, alarm khi T > 80°C |

#### B. Chữa cháy Class D

| Chất chữa cháy | Ứng dụng | Số lượng |
|----------------|----------|----------|
| **Bình Met-L-X 13,6 kg (30 lbs)** | Kim loại cháy nói chung (Na₂CO₃ based) | 4 bình |
| **Bình Lith-X 13,6 kg (graphite powder)** | Đặc biệt cho Titan + Lithium metal | 2 bình |
| **Cát khô (Dry Sand)** | Dự phòng — phủ lên kim loại cháy cách ly O₂ | 2 thùng × 50 kg |
| **Xẻng tay (Non-sparking shovel)** | Phủ cát, đồng-berili không tạo tia lửa | 4 cái |

> **KHÔNG có hệ thống tự động cho khu Class D** — vì chất chữa cháy Class D 
> (Na₂CO₃, graphite) không phù hợp cho hệ thống tự động. Chỉ dùng thủ công.
> Khu vực này phải có **nhân viên PCCC trực 24/7** khi xưởng hoạt động.

#### C. Sprinkler Isolation

Khu Chip Collection **KHÔNG lắp sprinkler head**. Thay vào đó:
- Đường ống sprinkler chạy qua khu vực này phải có **valve cách ly riêng**
- Valve này thường xuyên **NẰM Ở VỊ TRÍ ĐÓNG** cho khu Chip Collection
- Biển cảnh báo: "⚠️ CLASS D FIRE ZONE — NO WATER — KHÔNG DÙNG NƯỚC"
- Bảng hướng dẫn chữa cháy Class D bằng tiếng Việt + Anh tại mỗi lối vào

### 3.2.3. COOLANT STORAGE — Kho chứa Coolant (150 m²)

| Hạng mục | Thiết kế |
|----------|----------|
| **Tường** | REI 120, concrete block 200mm |
| **Cửa** | EI 60, tự đóng |
| **PCCC chính** | Foam system AFFF 3% (đã tính ở mục 3.2.1.C) |
| **PCCC phụ** | Bình bột khô ABC 9 kg × 4 bình |
| **Đê bao** | Bund wall 300mm, sức chứa ≥ 110% thể tích tối đa |
| **Thông gió** | Quạt hút cưỡng bức ≥ 12 ACH, LEL monitor |
| **Chất chữa cháy cấm** | KHÔNG dùng nước trực tiếp (tránh lan tràn dầu) |
| **Thoát nước** | Oil-water separator trước khi xả ra hệ thống chung |
| **Spill kit** | 2 bộ spill kit (absorbent pad, boom, pillow) |

### 3.2.4. QA/QC LAB & CMM ROOM (200 m²)

| Hạng mục | Thiết kế |
|----------|----------|
| **Phân hạng** | Light Hazard (NFPA 13) |
| **Sprinkler** | Wet pipe, 4,1 mm/phút, 1 head/18,6 m², 11 đầu |
| **Phát hiện** | Addressable smoke detector, 1/60 m² = 4 đầu |
| **Bình cầm tay** | CO2 5kg × 2 bình (thiết bị đo lường điện tử) |

### 3.2.5. TOOL ROOM, COMPRESSED AIR, LOADING DOCK (650 m²)

| Hạng mục | Thiết kế |
|----------|----------|
| **Phân hạng** | Ordinary Hazard Group 1 |
| **Sprinkler** | Wet pipe, 6,1 mm/phút, 1 head/12,1 m², 54 đầu |
| **Bình cầm tay** | ABC 6kg × 8 bình, CO2 5kg × 4 bình |
| **Loading Dock** | Sprinkler + Manual call point tại cổng |

## 3.3. Tổng hợp thiết bị PCCC Khối B — Xưởng CNC

| # | Hạng mục | Số lượng | Đơn giá (USD) | Thành tiền (USD) |
|---|----------|----------|---------------|------------------|
| 1 | Wet Sprinkler System (312 đầu + pipe + valve) | 1 hệ thống | 125.000 | 125.000 |
| 2 | CO2 tự động trong buồng CNC (5kg/bộ) | 25 bộ | 1.200 | 30.000 |
| 3 | Thermal detector trong buồng CNC | 50 đầu | 95 | 4.750 |
| 4 | Emergency Stop + Auto disconnect | 25 bộ | 450 | 11.250 |
| 5 | Foam system AFFF 3% (Coolant Area) | 1 hệ thống | 35.000 | 35.000 |
| 6 | AFFF concentrate (585 L) | 600 L | 12/L | 7.200 |
| 7 | Bình CO2 xách tay 5 kg | 31 bình | 180 | 5.580 |
| 8 | Bình ABC xách tay 6 kg | 23 bình | 95 | 2.185 |
| 9 | Bình Met-L-X 13,6 kg (Class D) | 4 bình | 650 | 2.600 |
| 10 | Bình Lith-X 13,6 kg (Class D) | 2 bình | 850 | 1.700 |
| 11 | Cát khô + thùng chứa | 2 bộ | 200 | 400 |
| 12 | Xẻng đồng-berili (non-sparking) | 4 cái | 120 | 480 |
| 13 | Camera thermal (Chip Collection) | 2 bộ | 3.500 | 7.000 |
| 14 | LEL monitor (Coolant Storage) | 2 bộ | 1.800 | 3.600 |
| 15 | Quạt hút chống nổ (Ex-rated) | 3 bộ | 4.500 | 13.500 |
| 16 | Smoke/Heat detector (Addressable) | 55 đầu | 120 | 6.600 |
| 17 | Fire barrier / door (REI 120) | 8 bộ | 3.200 | 25.600 |
| 18 | Đê bao (Bund wall) Coolant + Chip Area | 1 gói | 15.000 | 15.000 |
| 19 | Spill kit | 4 bộ | 350 | 1.400 |
| 20 | Biển cảnh báo Class D (song ngữ) | 12 bộ | 80 | 960 |
| 21 | Lắp đặt + đường ống + commissioning | 1 gói | 65.000 | 65.000 |
| | **TỔNG KHỐI B** | | | **~364.805 USD** |

---

# CHƯƠNG IV: THIẾT KẾ HỆ THỐNG PCCC — KHỐI C: NHÀ MÁY SMT (3.000 m²)

## 4.1. Đặc thù nguy cơ cháy Nhà máy SMT

| Khu vực | Nguy cơ | Class cháy | Mức độ |
|---------|---------|-----------|--------|
| **Dây chuyền SMT** | Chì hàn (nhiệt độ 260°C), flux bay hơi | Class A + B | MEDIUM |
| **Clean Room** | Thiết bị điện tử, IPA vapor residual | Class A + C | MEDIUM |
| **IPA/Flux Storage** | **IPA flash point 12°C = Class IB** | **Class IB (Flammable)** | **CRITICAL** |
| **Robot Assembly** | Hàn, sơn, phủ coating | Class A + B | MEDIUM |
| **Kho linh kiện** | PCB, component, đóng gói plastic | Class A | LOW-MEDIUM |

### 4.1.1. Phân tích nguy cơ IPA (Isopropyl Alcohol)

> ⚠️ **IPA là chất lỏng NGUY HIỂM NHẤT trong Khối C**

| Thông số | Giá trị |
|----------|---------|
| Flash Point | **12°C** (Class IB — Flammable Liquid) |
| Auto-ignition Temperature | 399°C |
| LEL (Lower Explosive Limit) | 2,0% v/v trong không khí |
| UEL (Upper Explosive Limit) | 12,7% v/v |
| Vapor Density (so với không khí) | 2,07 (nặng hơn → tích tụ ở sàn) |
| Lượng sử dụng | ~100-200 L/tháng (rửa PCB, clean stencil) |
| Lượng tồn kho | Tối đa 500 L |

## 4.2. Thiết kế PCCC theo khu vực

### Sơ đồ phân vùng PCCC Nhà máy SMT

```
┌────────────────────────────────────────────────────────────────┐
│                KHỐI C — NHÀ MÁY SMT (3.000 m²)                │
│                                                                │
│  ┌──────────────────────────────────────────────────┐         │
│  │          DÂY CHUYỀN SMT (1.200 m²)               │         │
│  │  [Loader]→[Printer]→[SPI]→[Mounter]→[Reflow]→   │         │
│  │  [AOI]→[Unloader]                                │         │
│  │                                                   │         │
│  │  Sprinkler (Wet, OH Group 2)                     │         │
│  │  Smoke detector + Heat detector                  │         │
│  └──────────────────────────────────────────────────┘         │
│                                                                │
│  ┌─────────────────┐  ┌──────────────┐  ┌────────────────┐   │
│  │  CLEAN ROOM     │  │ IPA/FLUX     │  │  ROBOT         │   │
│  │  600 m²         │  │ STORAGE      │  │  ASSEMBLY      │   │
│  │  Class 10.000   │  │ 80 m²        │  │  800 m²        │   │
│  │                 │  │              │  │                │   │
│  │  Gas Suppress   │  │ ⚠️ FM-200    │  │  Sprinkler     │   │
│  │  (Novec 1230)   │  │ + Explosion  │  │  (OH Group 1)  │   │
│  │  VESDA          │  │ proof equip  │  │                │   │
│  └─────────────────┘  └──────────────┘  └────────────────┘   │
│                                                                │
│  ┌───────────────────────┐  ┌──────────────────────────┐      │
│  │  KHO LINH KIỆN        │  │  VĂN PHÒNG / QC          │      │
│  │  200 m²               │  │  120 m²                   │      │
│  │  Sprinkler (OH-1)     │  │  Sprinkler (LH)           │      │
│  └───────────────────────┘  └──────────────────────────┘      │
└────────────────────────────────────────────────────────────────┘
```

### 4.2.1. DÂY CHUYỀN SMT (1.200 m²)

| Thông số | Giá trị |
|----------|---------|
| **Phân hạng** | Ordinary Hazard Group 2 |
| **Sprinkler** | Wet pipe |
| **Mật độ phun** | 8,2 mm/phút (0,20 gpm/ft²) |
| **Diện tích coverage/đầu** | 12,1 m² |
| **Số đầu sprinkler** | 1.200 / 12,1 = **100 đầu** |
| **Loại sprinkler head** | Pendent, 68°C, K-factor 5.6, concealed (thẩm mỹ) |
| **Phát hiện** | Smoke detector (photoelectric) + Heat detector rate-of-rise |
| **Đặc thù Reflow Oven** | Flame detector UV/IR tại lò hàn (nhiệt 260°C thường trực) |
| **Bình cầm tay** | CO2 5kg × 6 bình (tại mỗi trạm chính trên dây chuyền) |
| **Local exhaust** | Hút khói flux tại Reflow Oven + Wave Solder (nếu có) |

### 4.2.2. CLEAN ROOM (600 m²) — Gas Suppression

| Thông số | Giá trị |
|----------|---------|
| **Class** | ISO Class 7 (Fed Std: Class 10.000) |
| **Chữa cháy** | **Novec 1230** (bảo vệ thiết bị điện tử nhạy cảm) |
| **Thể tích** | 600 m² × 3,0 m = 1.800 m³ |
| **Nồng độ thiết kế** | 5,3% v/v |
| **Lượng Novec 1230** | 1.800 × 0,066 = **119 kg** |
| **Số bình (70 kg/bình)** | 2 bình + 1 dự phòng = **3 bình** |
| **Đầu phun** | 8 đầu |
| **Thời gian xả** | ≤ 10 giây |
| **Phát hiện** | VESDA (2 đường hút: trần + dưới sàn kỹ thuật) |
| **Damper liên động** | Đóng tự động damper HVAC khi xả gas (giữ kín phòng) |
| **Đặc thù HVAC** | AHU/FFU ngắt tự động khi báo cháy, damper EI 60 đóng |

> **Lưu ý:** Clean room có áp suất dương (+12,5 Pa so với bên ngoài).
> Khi xả Novec 1230, damper phải đóng TRƯỚC (delay 5 giây) để gas không bị hút ra ngoài.
> Tỷ lệ rò rỉ phòng (enclosure integrity) phải ≤ 0,5 ACH để duy trì nồng độ gas 10 phút.

### 4.2.3. IPA / FLUX STORAGE (80 m²)

| Hạng mục | Thiết kế |
|----------|----------|
| **Phân loại** | Kho chứa chất lỏng dễ cháy Class IB — theo NFPA 30 & QCVN 06 |
| **Tường** | REI 180 (tách biệt với SMT line + Clean room) |
| **Cửa** | EI 120, tự đóng, có ngưỡng cửa 100mm chống tràn |
| **Sàn** | Epoxy chống tĩnh điện, slope 1% đến rãnh thu |
| **Đê bao** | Bund wall H = 200mm, chứa ≥ 110% thể tích max = 550 L |
| **Thông gió** | Cưỡng bức, chống nổ (Ex), ≥ 15 ACH, lấy gió ở mức sàn (IPA vapor nặng) |
| **PCCC chính** | **FM-200 (HFC-227ea)** — nhỏ/rẻ cho phòng 80 m² |
| **Thể tích** | 80 × 3,0 = 240 m³ |
| **Lượng FM-200** | 240 × 0,078 = **18,7 kg** |
| **Phát hiện** | UV/IR Flame detector + LEL sensor (IPA vapor) |
| **LEL alarm** | 10% LEL (cảnh báo), 25% LEL (ngắt điện + kích hoạt gas) |
| **Thiết bị điện** | TOÀN BỘ Ex-rated (chống nổ): đèn Ex d, công tắc Ex e, ổ cắm Ex d |
| **Bình cầm tay** | CO2 5kg × 2 bình + ABC 9kg × 1 bình |
| **Tủ MSDS** | Bảng thông tin an toàn hóa chất (IPA, Flux, Paste) |
| **Rửa mắt/tắm khẩn** | Eye wash + Safety shower ngay bên ngoài cửa kho |

### 4.2.4. ROBOT ASSEMBLY, KHO LINH KIỆN, VĂN PHÒNG (1.120 m²)

| Khu vực | Diện tích | Phân hạng | Sprinkler | Bình cầm tay |
|---------|-----------|-----------|-----------|--------------|
| Robot Assembly | 800 m² | OH Group 1 | Wet, 6,1 mm/phút, 67 đầu | ABC 6kg × 4, CO2 5kg × 4 |
| Kho linh kiện | 200 m² | OH Group 1 | Wet, 6,1 mm/phút, 17 đầu | ABC 6kg × 2 |
| Văn phòng/QC | 120 m² | Light Hazard | Wet, 4,1 mm/phút, 7 đầu | ABC 4kg × 2, CO2 2kg × 1 |

## 4.3. Tổng hợp thiết bị PCCC Khối C — Nhà máy SMT

| # | Hạng mục | Số lượng | Đơn giá (USD) | Thành tiền (USD) |
|---|----------|----------|---------------|------------------|
| 1 | Wet Sprinkler System — SMT + Robot + Kho + VP (191 đầu) | 1 hệ thống | 75.000 | 75.000 |
| 2 | Novec 1230 — Clean Room (119 kg, 3 bình) | 1 hệ thống | 55.000 | 55.000 |
| 3 | VESDA — Clean Room (2 đường hút) | 2 bộ | 6.500 | 13.000 |
| 4 | FM-200 — IPA/Flux Storage (18,7 kg) | 1 hệ thống | 12.000 | 12.000 |
| 5 | UV/IR Flame detector (IPA Storage) | 2 đầu | 1.500 | 3.000 |
| 6 | LEL sensor IPA vapor | 3 bộ | 1.200 | 3.600 |
| 7 | Thiết bị Ex-rated (đèn, công tắc, ổ cắm cho IPA Room) | 1 gói | 8.000 | 8.000 |
| 8 | Flame detector UV/IR (Reflow Oven) | 2 đầu | 1.500 | 3.000 |
| 9 | Smoke/Heat detector (Addressable) | 45 đầu | 120 | 5.400 |
| 10 | HVAC Fire Damper + Auto shutdown | 6 bộ | 1.800 | 10.800 |
| 11 | Bình CO2 xách tay 5 kg | 12 bình | 180 | 2.160 |
| 12 | Bình ABC xách tay 6-9 kg | 9 bình | 110 | 990 |
| 13 | Eye wash + Safety shower | 2 bộ | 1.500 | 3.000 |
| 14 | Fire barrier / door (REI 120-180) | 6 bộ | 3.500 | 21.000 |
| 15 | Lắp đặt + đường ống + commissioning | 1 gói | 45.000 | 45.000 |
| | **TỔNG KHỐI C** | | | **~260.950 USD** |

---

# CHƯƠNG V: HỆ THỐNG PCCC CHUNG TOÀN TỔ HỢP

## 5.1. Hệ thống Báo cháy Tự động (Fire Alarm System)

### 5.1.1. Kiến trúc hệ thống

Toàn bộ tổ hợp 10.000 m² sử dụng hệ thống báo cháy **Addressable** (có địa chỉ) theo TCVN 5738:2021 và EN 54, cho phép xác định **CHÍNH XÁC** vị trí cháy đến từng đầu detector.

```
┌──────────────────────────────────────────────────────────────────┐
│              FIRE ALARM CONTROL PANEL (FACP)                      │
│              Vị trí: SOC / Security Room — Khu trung tâm          │
│              Model: Notifier NFS2-3030 (hoặc tương đương)         │
│              Dung lượng: 636 điểm / 6 SLC loop                   │
│                                                                    │
│   ┌────────────┐  ┌────────────┐  ┌────────────┐                 │
│   │  LOOP 1+2  │  │  LOOP 3+4  │  │  LOOP 5+6  │                 │
│   │  KHỐI A    │  │  KHỐI B    │  │  KHỐI C    │                 │
│   │  DC        │  │  CNC       │  │  SMT       │                 │
│   │  ~180 pts  │  │  ~160 pts  │  │  ~120 pts  │                 │
│   └────────────┘  └────────────┘  └────────────┘                 │
│                                                                    │
│   ┌──────────────────────────────────────────────────────┐        │
│   │  NETWORK MODULES:                                     │        │
│   │  → BMS Integration (BACnet/Modbus)                    │        │
│   │  → VESDA Gateway (22 units Khối A + 2 units Khối C)  │        │
│   │  → Gas Suppression Release Panel (Novec/FM-200/IG)    │        │
│   │  → HVAC Shutdown Relay                                │        │
│   │  → Elevator Recall                                    │        │
│   │  → Access Control Integration                         │        │
│   │  → SMS/Email Alert Module                             │        │
│   └──────────────────────────────────────────────────────┘        │
└──────────────────────────────────────────────────────────────────┘
```

### 5.1.2. Bảng tổng hợp đầu dò & thiết bị báo cháy

| Loại thiết bị | Khối A | Khối B | Khối C | Chung | Tổng |
|-------------|--------|--------|--------|-------|------|
| **VESDA (Aspirating)** | 22 bộ | — | 2 bộ | — | **24** |
| **Smoke Detector (Photo)** | 45 đầu | 35 đầu | 30 đầu | 10 đầu | **120** |
| **Heat Detector (Fixed Temp)** | 10 đầu | 30 đầu | 8 đầu | 5 đầu | **53** |
| **Heat Detector (Rate-of-Rise)** | 5 đầu | 50 đầu | 5 đầu | — | **60** |
| **Flame Detector (UV/IR)** | — | — | 4 đầu | — | **4** |
| **Thermal Sensor (Battery)** | 20 đầu | — | — | — | **20** |
| **Gas Detector (H₂, HF)** | 6 đầu | — | — | — | **6** |
| **LEL Sensor** | — | 2 đầu | 3 đầu | — | **5** |
| **Manual Call Point** | 12 đầu | 15 đầu | 10 đầu | 6 đầu | **43** |
| **Sounder/Strobe** | 15 bộ | 18 bộ | 12 bộ | 8 bộ | **53** |
| **Speaker (Voice Evac)** | 8 bộ | 10 bộ | 8 bộ | 4 bộ | **30** |
| **Control Module** | 12 module | 10 module | 8 module | 5 module | **35** |
| **Monitor Module** | 8 module | 6 module | 5 module | 3 module | **22** |
| **Relay Module (HVAC/Elev)** | 6 module | 4 module | 4 module | 2 module | **16** |
| **TỔNG ĐIỂM** | **~170** | **~180** | **~97** | **~43** | **~491** |

### 5.1.3. Chuỗi hoạt động khi báo cháy (Cause & Effect Matrix)

**Kịch bản 1: Cháy trong Data Hall Zone 1**

| Bước | Thời gian | Hành động | Thiết bị |
|------|-----------|-----------|----------|
| 1 | T+0 | VESDA Alert → Cảnh báo NOC/SOC | VESDA VEA-040 |
| 2 | T+15s | VESDA Fire 1 → Alarm toàn Zone 1, strobe nhấp nháy | Sounder/Strobe |
| 3 | T+15s | Đóng damper HVAC Zone 1, tắt AHU | HVAC Relay |
| 4 | T+20s | Voice Evacuation: "Attention — Fire alarm Zone 1 — Evacuate" | Speaker |
| 5 | T+30s | VESDA Fire 2 (xác nhận) → **PRE-DISCHARGE WARNING** 30 giây | Alarm + Strobe đỏ |
| 6 | T+60s | **XẢ NOVEC 1230** — Zone 1 | Gas Release Panel |
| 7 | T+60s | Gửi tín hiệu đến FACP → Thông báo Cảnh sát PCCC | SMS/Email Module |
| 8 | T+70s | Novec 1230 xả hoàn tất (10 giây) | Nozzles |
| 9 | T+10min | Duy trì nồng độ gas (phòng kín) + Kiểm tra từ SOC qua CCTV | — |
| 10 | T+15min | Nếu cháy dập → Thông gió xả gas | Exhaust fan |
| | | Nếu cháy CHƯA dập → Kích hoạt Pre-Action Sprinkler | Double-interlock |

**Kịch bản 2: Cháy Phôi kim loại (Class D) — Chip Collection Area**

| Bước | Thời gian | Hành động | Thiết bị |
|------|-----------|-----------|----------|
| 1 | T+0 | Thermal camera phát hiện T > 80°C | IR Camera |
| 2 | T+5s | Alarm cục bộ tại Chip Area + Thông báo đội PCCC | Local sounder |
| 3 | T+5s | **NGẮT ĐIỆN** toàn bộ khu Chip Collection | Emergency disconnect |
| 4 | T+5s | **TẮT CHIP CONVEYOR** — ngừng cấp phôi | PLC interlock |
| 5 | T+10s | Đóng van sprinkler isolation (xác nhận KHÔNG có nước) | Valve monitor |
| 6 | Manual | Đội PCCC tiếp cận bằng **Met-L-X / Lith-X** | Class D agent |
| 7 | Manual | Phủ cát khô lên kim loại cháy nếu Met-L-X không đủ | Dry sand |
| 8 | | **TUYỆT ĐỐI KHÔNG**: Dùng nước, foam, CO2 | — |

**Kịch bản 3: Rò rỉ / Cháy IPA Storage (Khối C)**

| Bước | Thời gian | Hành động | Thiết bị |
|------|-----------|-----------|----------|
| 1 | T+0 | LEL sensor > 10% → Cảnh báo cấp 1 | LEL monitor |
| 2 | T+0 | Tăng tốc quạt hút chống nổ (max speed) | Ex-rated exhaust |
| 3 | T+5s | LEL > 25% HOẶC UV/IR Flame detected → **NGẮT ĐIỆN** (trừ Ex) | Emergency cutoff |
| 4 | T+10s | **XẢ FM-200** tự động | Gas Release |
| 5 | T+10s | Đóng damper cách ly IPA Room với SMT Line | Fire damper EI 60 |
| 6 | T+10s | Alarm toàn Khối C → Sơ tán | Voice Evac |
| 7 | T+15min | Kiểm tra nồng độ IPA vapor < 10% LEL mới cho phép vào | Gas detector |

## 5.2. Hệ thống Bơm chữa cháy (Fire Pump System)

### 5.2.1. Tính toán lưu lượng & áp lực

**Nguyên tắc:** Bơm phải đáp ứng nhu cầu nước lớn nhất = khu vực có yêu cầu cao nhất (CNC Machine Shop, EH Group 1).

| Thông số | Tính toán | Kết quả |
|----------|-----------|---------|
| **Lưu lượng sprinkler (EH Group 1)** | 232 m² × 12,2 mm/phút | 2.830 L/phút |
| **Hose stream allowance** | NFPA 13, EH Group 1 | 1.893 L/phút |
| **Tổng lưu lượng yêu cầu** | | **4.723 L/phút (~1.248 GPM)** |
| **Áp lực tại đầu phun xa nhất** | NFPA 13, min. 0,35 bar (5 psi) cho K=8.0 | |
| **Tổn thất đường ống (ước tính)** | Hazen-Williams, C=120 | ~4,0 bar |
| **Chiều cao hình học** | 2 tầng max, ~8m | 0,8 bar |
| **Áp lực bơm yêu cầu** | 0,35 + 4,0 + 0,8 + 0,5 (dự phòng) | **~5,7 bar (~83 psi)** |
| **Áp lực thiết kế bơm** | Làm tròn + dự phòng 20% | **7,0 bar (~100 psi)** |

### 5.2.2. Cấu hình bơm (NFPA 20 / TCVN 7336)

| Bơm | Loại | Lưu lượng | Áp lực | Công suất | Vai trò |
|-----|------|-----------|--------|-----------|---------|
| **Bơm Diesel** | End-suction centrifugal, Diesel engine | 5.000 L/phút | 8,0 bar | 75 kW | Bơm chính — hoạt động khi mất điện |
| **Bơm Điện** | End-suction centrifugal, Electric motor | 5.000 L/phút | 8,0 bar | 75 kW | Bơm chính — hoạt động bình thường |
| **Bơm Jockey** | Multistage centrifugal, Electric | 60 L/phút | 9,0 bar | 3 kW | Duy trì áp lực đường ống, chống rỉ |

> **Cấu hình:** Bơm Diesel + Bơm Điện hoạt động song song theo logic:
> - Jockey duy trì áp 7,5 bar
> - Khi áp hạ < 6,0 bar → Bơm Điện khởi động tự động
> - Khi áp hạ < 5,0 bar (hoặc mất điện) → Bơm Diesel khởi động tự động
> - Cả hai bơm có thể chạy đồng thời: 10.000 L/phút (trường hợp cháy lớn)

### 5.2.3. Nhà bơm PCCC (Fire Pump House) — 80 m²

| Hạng mục | Yêu cầu |
|----------|---------|
| Vị trí | Khu kỹ thuật chung, gần bể nước PCCC, tiếp cận từ đường nội bộ |
| Tường | REI 120, concrete block |
| Khoảng cách đến các khối | ≥ 6m (đảm bảo tiếp cận xe chữa cháy) |
| Bồn diesel bơm PCCC | 500 L (riêng, không dùng chung với Generator DC) |
| Nguồn điện bơm | ATS riêng, ưu tiên nguồn Emergency Power |
| Thông gió | Tự nhiên + cưỡng bức cho khu Diesel engine |

## 5.3. Bể nước chữa cháy (Fire Water Tank)

### 5.3.1. Tính toán dung tích

| Khối | Hệ thống | Lưu lượng (L/phút) | Thời gian (phút) | Thể tích (m³) |
|------|----------|---------------------|-------------------|---------------|
| **B (CNC)** | Sprinkler EH-1 + Hose | 4.723 | 90 | **425** |
| **C (SMT)** | Sprinkler OH-2 + Hose | 2.100 | 60 | **126** |
| **A (DC)** | Pre-action Sprinkler + Hose | 1.800 | 60 | **108** |
| **B** | Foam system (Coolant Area) | 1.300 | 15 | **20** |
| **Chung** | Trụ nước ngoài nhà (2 trụ × 950 L/phút) | 1.900 | 30 | **57** |
| | | | **Tổng** | **736 m³** |

> **Thiết kế bể:** Dung tích **750 m³** (làm tròn + dự phòng)
> - Loại: Bể bê tông cốt thép ngầm / nửa ngầm
> - Kích thước: 15m × 10m × 5m (chiều sâu hữu ích)
> - Vị trí: Phía sau nhà bơm, tiếp cận để xe bồn bổ sung nước
> - Nguồn cấp: Đường ống cấp nước KCNC DN100 + Xe bồn dự phòng
> - Mực nước tối thiểu: 80% (600 m³) — alarm khi < 80%
> - Phao + van điện từ tự đổ bù khi mực nước hạ < 90%

### 5.3.2. Đấu nối với KCNC

| Hạng mục | Chi tiết |
|----------|----------|
| Đường cấp nước KCNC | DN100, áp lực ~ 3 bar |
| Trụ cấp nước cứu hỏa (fire hydrant) | 2 trụ ngoài nhà, loại 2 cửa (DN65 + DN65) |
| Vị trí trụ | 1 trụ phía Bắc (gần Khối A+B), 1 trụ phía Nam (gần Khối C) |
| Khoảng cách trụ đến tòa nhà | 5-15m (TCVN 2622) |
| Siamese connection (nối xe bơm) | 2 bộ, cho phép xe cứu hỏa bơm vào hệ thống nội bộ |

## 5.4. Đường thoát hiểm & Kế hoạch sơ tán (Emergency Exit & Evacuation Plan)

### 5.4.1. Yêu cầu thoát hiểm theo QCVN 06:2022/BXD

| Yêu cầu | QCVN 06 | Thiết kế Mekong |
|----------|---------|-----------------|
| Số lối thoát tối thiểu mỗi khối | ≥ 2 | 3 lối/khối (2 cửa + 1 cửa phụ/sân) |
| Khoảng cách xa nhất đến lối thoát | ≤ 40m (Hạng B), ≤ 60m (Hạng C) | Max 35m mọi vị trí |
| Chiều rộng lối thoát | ≥ 1,2m (> 50 người) | 1,5m tất cả lối chính |
| Chiều rộng cầu thang | ≥ 1,0m | 1,2m (đáp ứng 200 người/khối) |
| Cửa thoát hiểm | Mở theo chiều sơ tán, panic bar | EI 60, panic bar, tự đóng |
| Đèn thoát hiểm | Sáng liên tục, pin dự phòng 120 phút | LED Exit Sign + Đèn chiếu sáng sự cố |
| Lối thoát kín (buồng thang áp) | Yêu cầu nếu > 3 tầng | Không áp dụng (1-2 tầng) |

### 5.4.2. Sơ đồ thoát hiểm tổng thể

```
                          ĐƯỜNG D1 — KCNC TP.HCM (PHÍA BẮC)
                    ════════════════════════════════════════════
                         ↑               ↑              ↑
                    [CỔNG DC]       [CỔNG CHUNG]    [CỔNG CNC]
                    (VIP/Staff)     (Sơ tán chung)  (Logistics)
                         │               │              │
┌────────────────────────┴───────────────┴──────────────┴──────────┐
│                                                                    │
│   ┌─────────┐    ┌─────────┐    ┌──────────┐    ┌──────────┐    │
│   │ KHỐI A  │    │  KỸ     │    │ KHỐI B   │    │ KHỐI C   │    │
│   │   DC    │    │ THUẬT   │    │  CNC     │    │  SMT     │    │
│   │         │    │ CHUNG   │    │          │    │          │    │
│   │ EXIT→A1 │    │ (Bơm,  │    │ EXIT→B1  │    │ EXIT→C1  │    │
│   │ EXIT→A2 │    │  Bể    │    │ EXIT→B2  │    │ EXIT→C2  │    │
│   │ EXIT→A3 │    │  nước) │    │ EXIT→B3  │    │ EXIT→C3  │    │
│   └────┬────┘    └────────┘    └────┬─────┘    └────┬─────┘    │
│        ↓                            ↓                ↓           │
│   [ĐIỂM TẬP TRUNG A]         [ĐIỂM TẬP TRUNG B]  [ĐIỂM TT C] │
│   (Bãi xe DC phía Nam)       (Sân chung phía Nam) (Sân phía Đ) │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
                    ════════════════════════════════════════════
                          ĐƯỜNG NỘI BỘ KCNC (PHÍA NAM)
```

### 5.4.3. Thời gian sơ tán mục tiêu

| Khối | Số người max | Khoảng cách max | Thời gian mục tiêu | Ghi chú |
|------|-------------|-----------------|---------------------|---------|
| **A (DC)** | 30 (ca ngày), 8 (ca đêm) | 35m | **≤ 3 phút** | 24/7, staff ít nhưng qua nhiều cửa bảo mật |
| **B (CNC)** | 80 (ca ngày), 40 (ca đêm) | 35m | **≤ 4 phút** | Nhiều thiết bị cản, phải tắt máy trước |
| **C (SMT)** | 60 (ca ngày), 20 (ca đêm) | 30m | **≤ 3 phút** | Clean room: phải mở cửa clean lock |

### 5.4.4. Quy trình sơ tán đặc biệt cho từng khối

**Khối A — Datacenter:**
- Emergency unlock TẤT CẢ cửa bảo mật (mantrap, biometric door) khi alarm
- Server KHÔNG tắt (tiếp tục chạy trên UPS/Generator)
- Chỉ sơ tán NGƯỜI, không di chuyển thiết bị
- SOC Operator là người cuối cùng rời đi (xác nhận hệ thống PCCC hoạt động)

**Khối B — Xưởng CNC:**
- **Emergency Stop ALL MACHINES** trước khi sơ tán (nút E-Stop tập trung)
- Tắt coolant pump, tắt chip conveyor
- Kiểm tra phôi kim loại nóng trên máy (nguy cơ cháy sau khi ngắt coolant)
- Đội trưởng ca kiểm đếm nhân viên tại Điểm tập trung B

**Khối C — SMT:**
- Tắt Reflow Oven (cần 15-20 phút để nguội, nhưng sơ tán NGAY)
- Mở cửa clean room → Áp suất dương sẽ mất (chấp nhận)
- IPA Storage: Xác nhận cửa đóng và FM-200 sẵn sàng
- Chemical team kiểm tra không có rò rỉ hóa chất

## 5.5. Hệ thống hút khói & Tạo áp cầu thang (Smoke Exhaust & Pressurization)

### 5.5.1. Hệ thống hút khói (Smoke Exhaust)

| Hạng mục | Thiết kế |
|----------|----------|
| **Áp dụng** | Khối A (Data Hall) + Khối B (Machine Shop) + Khối C (SMT Line) |
| **Loại** | Mechanical Smoke Exhaust (hút khói cơ khí) |
| **Lưu lượng** | ≥ 6 ACH (Air Changes/Hour) cho mỗi khu vực |
| **Quạt** | Chịu nhiệt 300°C / 60 phút (EN 12101-3) |
| **Kích hoạt** | Tự động khi FACP xác nhận cháy cấp 2 (Fire 2) |
| **Ống dẫn** | Sheet metal duct, fire rated, tách biệt cho mỗi khối |
| **Cửa gió vào** | Make-up air damper mở tự động khi hút khói |

> **Đặc thù Khối A (DC):** Hút khói CHỈ kích hoạt SAU KHI xả gas hoàn tất + duy trì nồng độ 10 phút.
> Nếu hút khói sớm → Gas bị hút ra → Mất hiệu quả chữa cháy.

### 5.5.2. Tạo áp cầu thang & Hành lang (Pressurization)

Do tổ hợp chủ yếu 1-2 tầng, buồng thang áp không phải yêu cầu bắt buộc theo QCVN 06.
Tuy nhiên, **HÀNH LANG ĐỆM** giữa các khối được tạo áp suất dương:

| Khu vực tạo áp | Áp suất | Mục đích |
|----------------|---------|----------|
| Hành lang DC → CNC | +25 Pa | Ngăn khói + bụi CNC xâm nhập DC |
| Hành lang DC → Ngoài | +12,5 Pa | Ngăn khói khi cháy |
| Clean Room (Khối C) | +12,5 Pa | Duy trì áp sạch (kiêm chống khói) |
| Lối thoát hiểm | +50 Pa | Đảm bảo lối thoát không có khói (QCVN 06, Section 3.8) |

## 5.6. Nguồn điện dự phòng cho hệ thống PCCC (Emergency Power)

| Hệ thống | Nguồn chính | Nguồn dự phòng | Thời gian dự phòng |
|-----------|------------|----------------|---------------------|
| **FACP + Detectors** | Nguồn điện chính | Battery backup 24V DC | **24 giờ standby + 30 phút alarm** |
| **VESDA** | Nguồn điện chính | Battery UPS | 24 giờ |
| **Bơm chữa cháy (Điện)** | ATS từ Generator hoặc lưới | Generator PCCC riêng | 8 giờ (bồn 500L diesel) |
| **Bơm chữa cháy (Diesel)** | Diesel engine riêng | Khởi động tự động | 8 giờ (bồn riêng) |
| **Đèn thoát hiểm / sự cố** | Nguồn chính | Battery pack tích hợp | **120 phút** (QCVN 06) |
| **Gas suppression panel** | Nguồn chính | Battery 24V DC | 72 giờ standby + 5 phút discharge |
| **Voice Evacuation** | ATS + Battery | Battery backup | 30 phút full load |
| **Quạt hút khói** | ATS | Generator | Theo chuỗi vận hành |

## 5.7. Tổng hợp thiết bị PCCC hệ thống chung

| # | Hạng mục | Số lượng | Đơn giá (USD) | Thành tiền (USD) |
|---|----------|----------|---------------|------------------|
| 1 | FACP Notifier NFS2-3030 (6 loop) | 1 bộ | 18.000 | 18.000 |
| 2 | Annunciator Panel (hiển thị phụ) | 2 bộ | 2.500 | 5.000 |
| 3 | Smoke Detector (Addressable) | 120 đầu | 120 | 14.400 |
| 4 | Heat Detector (Fixed + RoR) | 113 đầu | 95 | 10.735 |
| 5 | Manual Call Point | 43 đầu | 85 | 3.655 |
| 6 | Sounder/Strobe | 53 bộ | 150 | 7.950 |
| 7 | Voice Evac Speaker | 30 bộ | 280 | 8.400 |
| 8 | Voice Evac Amplifier + Controller | 1 hệ thống | 12.000 | 12.000 |
| 9 | Control/Monitor/Relay Modules | 73 module | 180 | 13.140 |
| 10 | Bơm Diesel 5.000 L/phút, 8 bar | 1 bộ | 35.000 | 35.000 |
| 11 | Bơm Điện 5.000 L/phút, 8 bar | 1 bộ | 22.000 | 22.000 |
| 12 | Bơm Jockey 60 L/phút, 9 bar | 1 bộ | 3.500 | 3.500 |
| 13 | Tủ điều khiển bơm (Fire Pump Controller) | 1 bộ | 8.000 | 8.000 |
| 14 | Bể nước PCCC 750 m³ (BTCT) | 1 bể | 120.000 | 120.000 |
| 15 | Trụ nước ngoài nhà (Fire Hydrant, 2 cửa) | 2 trụ | 2.200 | 4.400 |
| 16 | Siamese Connection | 2 bộ | 1.200 | 2.400 |
| 17 | Nhà bơm PCCC (80 m², xây dựng) | 1 nhà | 25.000 | 25.000 |
| 18 | Đường ống chính PCCC (DN100-150) | ~400m | 85/m | 34.000 |
| 19 | Đèn Exit LED + Battery | 45 bộ | 120 | 5.400 |
| 20 | Đèn chiếu sáng sự cố | 60 bộ | 95 | 5.700 |
| 21 | Quạt hút khói (chịu nhiệt 300°C) | 3 bộ | 8.000 | 24.000 |
| 22 | Ống dẫn khói (fire rated duct) | ~200m | 120/m | 24.000 |
| 23 | Make-up air damper | 6 bộ | 1.500 | 9.000 |
| 24 | ATS cho bơm + PCCC | 1 bộ | 6.000 | 6.000 |
| 25 | Cáp chống cháy (Fire Rated Cable) | ~2.000m | 8/m | 16.000 |
| 26 | Biển báo thoát hiểm + Sơ đồ sơ tán | 30 bộ | 60 | 1.800 |
| 27 | Lắp đặt + commissioning hệ thống chung | 1 gói | 75.000 | 75.000 |
| | **TỔNG HỆ THỐNG CHUNG** | | | **~534.480 USD** |

---

# CHƯƠNG VI: AN TOÀN LAO ĐỘNG & VỆ SINH CÔNG NGHIỆP

## 6.1. Đánh giá nguy cơ an toàn cho từng khối

### 6.1.1. Khối A — Datacenter

| # | Nguy cơ | Mức độ | Biện pháp kiểm soát |
|---|---------|--------|---------------------|
| 1 | **Điện giật** (UPS 400V, Busbar, PDU) | HIGH | LOTO procedure, Arc flash PPE, Warning labels, Insulated tools |
| 2 | **Rơi từ trên cao** (sàn nâng mở, thang leo rack) | MEDIUM | Guardrail, safety harness khi > 2m, floor tile lifter tool |
| 3 | **Bỏng nhiệt** (Hot Aisle > 40°C, server exhaust) | LOW | Warning signs, limit exposure time, cold water available |
| 4 | **Khí độc HF** (thermal runaway Li-ion) | CRITICAL | H₂/HF detector, SCBA mask available, evacuation drill |
| 5 | **Tiếng ồn Generator** | MEDIUM | Ear protection khi test, sound enclosure |
| 6 | **Nặng / Ergonomics** (server 25-35 kg) | MEDIUM | Server lift tool, 2-person policy > 20 kg |
| 7 | **EMF (Electromagnetic Field)** | LOW | Monitoring, limit exposure, signage |
| 8 | **Nguy cơ xa lạ** (kẹt trong mantrap, mất điện trong DC) | LOW | Emergency release button, glow-in-dark exit marking |

### 6.1.2. Khối B — Xưởng CNC

| # | Nguy cơ | Mức độ | Biện pháp kiểm soát |
|---|---------|--------|---------------------|
| 1 | **Phôi bắn / Chip flying** | HIGH | Machine guarding enclosed, safety glass, face shield |
| 2 | **Kẹt tay/cơ thể vào máy** | CRITICAL | Interlock guards, E-Stop mỗi máy, LOTO, light curtain |
| 3 | **Dầu coolant trơn trượt** | HIGH | Anti-slip flooring, oil absorbent mats, drainage grate |
| 4 | **Bụi kim loại hít phải** | HIGH | LEV (Local Exhaust Ventilation), RPE (respirator), monitoring |
| 5 | **Tiếng ồn > 85 dB(A)** | HIGH | Ear muffs/plugs, sound barrier, audiometric testing |
| 6 | **Cháy/nổ phôi kim loại** | CRITICAL | Class D extinguisher, housekeeping, no water sign |
| 7 | **Nặng / Ergonomics** (phôi 20-100 kg) | HIGH | Overhead crane 5T, hoist, lift table, 2-person > 25 kg |
| 8 | **Bỏng** (phôi nóng, dầu nóng) | MEDIUM | Heat resistant gloves, tongs, cooling procedure |
| 9 | **Rung toàn thân** (rung máy dưới sàn) | MEDIUM | Anti-vibration mat, health monitoring |
| 10 | **Chất thải nguy hại** (dầu thải, phôi nhiễm dầu) | MEDIUM | Segregation, labeling, licensed disposal |

### 6.1.3. Khối C — Nhà máy SMT

| # | Nguy cơ | Mức độ | Biện pháp kiểm soát |
|---|---------|--------|---------------------|
| 1 | **Hóa chất** (IPA, flux, chì hàn, cleaning solvent) | HIGH | Fume hood, LEV, MSDS, chemical training |
| 2 | **Hít phải khói chì** (Reflow/Wave Solder) | HIGH | LEV tại oven, RPE, blood lead monitoring quarterly |
| 3 | **IPA cháy/nổ** | CRITICAL | Ex-rated room, LEL monitoring, grounding, no ignition |
| 4 | **Bỏng** (Reflow Oven 260°C, solder pot) | MEDIUM | Machine guarding, heat gloves, warning signs |
| 5 | **ESD (Electrostatic Discharge)** | MEDIUM | ESD wrist strap, flooring, humidity control > 40% |
| 6 | **Robot pinch point** | MEDIUM | Safety cage, light curtain, E-Stop, safe speed mode |
| 7 | **Laser** (AOI inspection, laser marking) | LOW | Class 1M laser enclosure, interlock, warning sign |
| 8 | **Ergonomics** (lặp lại, đứng lâu) | MEDIUM | Rotation, anti-fatigue mat, adjustable workstation |

## 6.2. Yêu cầu PPE (Trang bị Bảo hộ Lao động)

### 6.2.1. Ma trận PPE theo khối và khu vực

| PPE | Khối A (DC) | Khối B (CNC) | Khối C (SMT) | Tiêu chuẩn |
|-----|------------|-------------|-------------|-----------|
| **Mũ bảo hộ** | Khu Generator, Cooling | **BẮT BUỘC** toàn xưởng | Khu Robot Assembly | TCVN 6407 / EN 397 |
| **Kính bảo hộ** | Khu UPS (hồ quang) | **BẮT BUỘC** toàn xưởng | Khu hàn, IPA | TCVN 5082 / EN 166 |
| **Giày bảo hộ thép mũi** | Khu Generator, Cooling | **BẮT BUỘC** toàn xưởng | Warehouse, Robot area | TCVN 7651 / EN ISO 20345 |
| **Găng tay chống hóa chất** | — | Khu Coolant, Oil | **BẮT BUỘC** khu IPA/Flux | EN 374 |
| **Găng tay chống cắt** | — | **BẮT BUỘC** khi thao tác phôi | — | EN 388 Level 5 |
| **Găng tay chịu nhiệt** | — | Khu phôi nóng | Khu Reflow Oven | EN 407 |
| **Khẩu trang / Mặt nạ** | SCBA (khẩn cấp UPS) | Respirator P2 (bụi KL) | Respirator + Carbon (flux) | EN 149 (FFP2/FFP3) |
| **Nút tai / Chụp tai** | Khu Generator test | **BẮT BUỘC** Machine Shop | — | EN 352 (NRR ≥ 25 dB) |
| **Áo phản quang** | — | Ca đêm, Loading Dock | Ca đêm | EN ISO 20471 |
| **Face Shield** | Arc flash (UPS work) | Grinding, chip flying | — | EN 166 |
| **Tạp dề chống tia lửa** | — | Grinding | Welding robot tending | EN ISO 11611 |
| **ESD wrist strap + Shoes** | Data Hall | — | **BẮT BUỘC** SMT + Clean room | IEC 61340 |

### 6.2.2. Ước tính số lượng & chi phí PPE hàng năm

| Khối | Số nhân viên max | Chi phí PPE/người/năm | Tổng/năm |
|------|-----------------|----------------------|----------|
| A (DC) | 30 | ~200 USD | 6.000 USD |
| B (CNC) | 80 | ~450 USD | 36.000 USD |
| C (SMT) | 60 | ~350 USD | 21.000 USD |
| **Tổng** | **170** | | **63.000 USD/năm** |

## 6.3. An toàn Hóa chất (Chemical Safety)

### 6.3.1. Danh mục hóa chất nguy hại chính

| Hóa chất | Khối | Lượng tồn kho max | Phân loại GHS | Nguy hiểm chính | SDS # |
|-----------|------|-------------------|---------------|------------------|-------|
| **IPA (Isopropanol)** | C | 500 L | Flammable Liquid Cat. 2 | Cháy, kích ứng mắt | SDS-001 |
| **Flux (RMA/No-Clean)** | C | 50 L | Flammable Liquid Cat. 3 | Cháy, hít phải | SDS-002 |
| **Solder Paste (Sn-Ag-Cu)** | C | 10 kg | Skin Sensitizer Cat. 1 | Dị ứng da (flux content) | SDS-003 |
| **MWF (Semi-synthetic Coolant)** | B | 8.750 L | Skin Irritant Cat. 2 | Kích ứng da, hít phải mist | SDS-004 |
| **Way Oil / Hydraulic Oil** | B | 2.000 L | Not classified (IIIA liquid) | Cháy khi gia nhiệt | SDS-005 |
| **Diesel** | A | 40.000 L | Flammable Liquid Cat. 3 | Cháy, hít phải | SDS-006 |
| **Chì hàn cũ (nếu có)** | C | 5 kg | Toxic Cat. 2 | Nhiễm độc chì | SDS-007 |
| **Refrigerant R-410A** | A | 200 kg | Gases under pressure | Asphyxiant | SDS-008 |

### 6.3.2. Yêu cầu lưu trữ hóa chất

| Yêu cầu | Chi tiết |
|----------|----------|
| **Tủ chứa hóa chất dễ cháy** | Flammable Safety Cabinet (FM approved), ≤ 227L IPA/tủ, 3 tủ cho Khối C |
| **Kho riêng cho diesel** | Bể ngầm/nổi có đê bao 110%, theo NFPA 30 + QCVN 01:2019/BCT |
| **Kho coolant CNC** | Phòng riêng REI 120, thông gió, bund wall, theo NFPA 30 Class IIIB |
| **SDS (Safety Data Sheet)** | Bảng thông tin an toàn bằng tiếng Việt + Anh tại mọi điểm sử dụng |
| **GHS labeling** | Nhãn GHS trên TẤT CẢ container/thùng chứa |
| **Spill kit** | 1 bộ / khu vực hóa chất (tổng 6 bộ), bao gồm absorbent, PPE, túi rác |
| **Eye wash / Shower** | 1 trạm rửa mắt + tắm khẩn / khu vực hóa chất (tổng 4 trạm) |
| **Đào tạo** | Chemical safety training 8 giờ/năm cho mọi nhân viên tiếp xúc |

## 6.4. Ergonomics (Công thái học)

### 6.4.1. Khối B — CNC Operator

| Yêu cầu | Biện pháp |
|----------|-----------|
| **Đứng liên tục** | Anti-fatigue mat tại mỗi máy, ghế ngồi nghỉ, rotation 2h/lần |
| **Nâng vật nặng** | Overhead crane 5T, Hoist điện 500 kg, Lift table mỗi máy CNC |
| **Repetitive motion** | Tool balancer, jig/fixture giảm lực tay |
| **Màn hình CNC** | Đặt ngang tầm mắt, chiếu sáng tại chỗ ≥ 500 lux |
| **Rung truyền tay** | Găng tay chống rung (nếu mài), giới hạn exposure EAV 2,5 m/s² |

### 6.4.2. Khối A — DC Engineer

| Yêu cầu | Biện pháp |
|----------|-----------|
| **Nâng server** (25-35 kg) | Server lift hydraulic, 2-person rule > 20 kg |
| **Làm việc trên cao** | Step platform, không dùng ghế, safety rail khi > 1,5m mở |
| **Nhiệt Hot Aisle** | Giới hạn 15 phút liên tục, nước uống, quạt cá nhân |
| **Ca đêm** | Ánh sáng ≥ 300 lux, caffeine limit, health monitoring |

## 6.5. Tiếng ồn (Noise Exposure)

### 6.5.1. Nguồn ồn chính & Mức ồn dự kiến

| Nguồn | Khối | Mức ồn tại nguồn (dB(A)) | Mức ồn tại vị trí làm việc |
|-------|------|--------------------------|---------------------------|
| Máy CNC 5 trục (spindle 12.000 RPM) | B | 80-95 | 78-88 (có enclosure) |
| Chip conveyor | B | 75-85 | 70-78 |
| Compressed air blow | B | 90-105 | 85-95 |
| Grinding/deburring | B | 95-110 | 90-100 |
| Generator test | A | 95-105 | 80-90 (tại 7m, có enclosure) |
| Chiller | A | 75-85 | 65-75 (ngoài trời) |
| SMT Mounter | C | 65-75 | 60-70 |
| Reflow Oven | C | 60-70 | 55-65 |

### 6.5.2. Giới hạn phơi nhiễm & Biện pháp

Theo **Luật ATVSLĐ 2015** và **QCVN 24:2016/BYT**:

| Thời gian phơi nhiễm | Giới hạn (dB(A)) | Biện pháp |
|----------------------|-------------------|-----------|
| 8 giờ liên tục | **85 dB(A)** | Nút tai / Chụp tai NRR ≥ 25 dB |
| 4 giờ | 88 dB(A) | PPE + rotation |
| 2 giờ | 91 dB(A) | PPE + giới hạn thời gian |
| 15 phút | 100 dB(A) | PPE bắt buộc + giám sát |
| Tức thì (peak) | 140 dB(C) | KHÔNG ĐƯỢC vượt |

**Biện pháp kiểm soát tiếng ồn Khối B:**

| Biện pháp | Chi tiết | Giảm ồn (dB) |
|-----------|----------|---------------|
| **Machine enclosure** | Buồng gia công CNC kín (có sẵn trên máy DMG MORI) | 5-15 |
| **Sound barrier wall** | Tường cách âm giữa Machine Shop và QA/CMM Room | 15-25 |
| **Anti-vibration mount** | Móng nổi cách ly → giảm rung truyền cấu trúc | 10-20 |
| **Compressed air nozzle** | Loại giảm ồn (noise-reducing nozzle) thay vì ống hở | 10-15 |
| **PPE (Chụp tai 3M Peltor)** | NRR 26 dB | 26 (hiệu quả ~15-20) |
| **Đo đạc định kỳ** | Noise mapping hàng quý, audiometric testing hàng năm | — |

> **MỤC TIÊU:** Mức ồn tại vị trí làm việc trong Machine Shop **≤ 85 dB(A)** 
> với machine enclosure đóng. Khi vượt → BẮT BUỘC PPE tai.
> Khu QA/CMM Room: **≤ 55 dB(A)** — yêu cầu tường cách âm STC ≥ 45.

---

# CHƯƠNG VII: THỦ TỤC PCCC & TIMELINE PHÊ DUYỆT

## 7.1. Hồ sơ PCCC cần chuẩn bị

Theo **Nghị định 136/2020/NĐ-CP** (sửa đổi bởi NĐ 50/2024/NĐ-CP), tổ hợp Mekong Technology thuộc danh mục công trình **phải thẩm duyệt về PCCC** (nhóm A, diện tích > 5.000 m²).

### 7.1.1. Hồ sơ thẩm duyệt thiết kế PCCC

| # | Thành phần hồ sơ | Chi tiết | Trạng thái |
|---|------------------|----------|------------|
| 1 | **Đơn đề nghị thẩm duyệt** | Theo mẫu PC06 (NĐ 136/2020) | Cần lập |
| 2 | **Bản sao Giấy phép xây dựng** | Hoặc văn bản chấp thuận chủ trương đầu tư từ BQL KCNC | Chưa có |
| 3 | **Bản vẽ thiết kế PCCC** | Bản vẽ AutoCAD đầy đủ: Mặt bằng, mặt cắt, chi tiết | Cần thuê đơn vị thiết kế PCCC |
| 4 | **Bản vẽ tổng mặt bằng** | Thể hiện 3 khối, đường giao thông, nguồn nước, trụ cứu hỏa | Cần bổ sung từ kiến trúc |
| 5 | **Bản vẽ hệ thống báo cháy** | Sơ đồ Loop, vị trí detector, FACP, module | Cần thiết kế |
| 6 | **Bản vẽ hệ thống chữa cháy** | Sprinkler, Gas suppression, Foam — cho từng khối | Cần thiết kế |
| 7 | **Bản vẽ hệ thống cấp nước PCCC** | Bơm, bể nước, đường ống, trụ, Siamese | Cần thiết kế |
| 8 | **Sơ đồ thoát hiểm** | Cho từng khối, từng tầng (nếu có) | Cần thiết kế |
| 9 | **Thuyết minh thiết kế PCCC** | Tính toán, lựa chọn giải pháp, bảng thiết bị | **BÁO CÁO NÀY** |
| 10 | **GCN đủ điều kiện PCCC** của đơn vị thiết kế | Đơn vị thiết kế PCCC phải có GCN theo NĐ 136 | Chọn đơn vị |
| 11 | **Bản sao GCN hành nghề** kỹ sư PCCC | Chủ trì thiết kế phải có chứng chỉ | Do đơn vị thiết kế |

### 7.1.2. Hồ sơ nghiệm thu về PCCC (sau thi công)

| # | Thành phần | Chi tiết |
|---|-----------|----------|
| 1 | Đơn đề nghị nghiệm thu (PC06) | Theo mẫu |
| 2 | Biên bản nghiệm thu từng hệ thống | Sprinkler test, Gas test, Alarm test, Pump test |
| 3 | Bản vẽ hoàn công (As-built) | Bản vẽ thực tế sau thi công |
| 4 | Chứng chỉ thiết bị PCCC | FM/UL/CE certificate cho tất cả thiết bị |
| 5 | GCN đủ điều kiện PCCC của nhà thầu thi công | Nhà thầu PCCC phải có GCN |
| 6 | Biên bản thử nghiệm | Pressure test đường ống, functional test detector, gas discharge test |
| 7 | Hồ sơ đào tạo PCCC | Danh sách nhân viên đã huấn luyện PCCC |

## 7.2. Cơ quan thẩm duyệt

| Thông tin | Chi tiết |
|-----------|----------|
| **Cơ quan** | Phòng Cảnh sát PCCC & CNCH — Công an TP Thủ Đức |
| **Địa chỉ** | (Liên hệ Công an TP Thủ Đức để xác nhận) |
| **Cấp thẩm duyệt** | Cấp Quận/Thành phố trực thuộc (công trình nhóm A) |
| **Lưu ý** | Dự án trong KCNC → Cần phối hợp thêm BQL KCNC TP.HCM |
| | BQL KCNC có thể yêu cầu review thiết kế PCCC trước khi nộp CA |

## 7.3. Timeline phê duyệt & Thi công PCCC

```
TIMELINE DỰ KIẾN — PCCC MEKONG TECHNOLOGY
══════════════════════════════════════════════════════════════════════

GIAI ĐOẠN 1: THIẾT KẾ PCCC (3-4 tháng)
─────────────────────────────────────────
Tháng 1-2:   ├── Chọn đơn vị thiết kế PCCC (có GCN)
              ├── Khảo sát hiện trạng, thu thập dữ liệu M&E
              └── Thiết kế sơ bộ (Concept) — BÁO CÁO NÀY

Tháng 2-4:   ├── Thiết kế chi tiết (Detail Design)
              ├── Bản vẽ AutoCAD đầy đủ
              ├── Tính toán thủy lực sprinkler, gas quantity
              └── Lập BOQ & Dự toán chi tiết

GIAI ĐOẠN 2: THẨM DUYỆT (2-3 tháng)               
─────────────────────────────────────────
Tháng 4:     ├── Nộp hồ sơ thẩm duyệt tại Công an TP Thủ Đức
              └── BQL KCNC review (song song)

Tháng 5-6:   ├── Cảnh sát PCCC xem xét hồ sơ
              ├── Có thể yêu cầu bổ sung / chỉnh sửa (1-2 lần)
              └── Cấp Giấy chấp thuận thiết kế PCCC

GIAI ĐOẠN 3: MUA SẮM & THI CÔNG (6-8 tháng)
─────────────────────────────────────────
Tháng 6-7:   ├── Đấu thầu nhà thầu PCCC (có GCN)
              ├── Đặt hàng thiết bị (Novec, VESDA, FM-200: Lead time 8-12 tuần)
              └── Nhập khẩu thiết bị Gas suppression

Tháng 7-12:  ├── Thi công song song với xây dựng chính
              │   ├── Đường ống sprinkler + Fire pump + Bể nước
              │   ├── Lắp đặt Gas suppression (DC, Clean Room, IPA Room)
              │   ├── Hệ thống báo cháy + Cáp chống cháy
              │   └── Đèn thoát hiểm, biển báo
              └── Thử nghiệm từng hệ thống (partial testing)

Tháng 12-13: ├── Commissioning toàn hệ thống
              ├── Chạy thử tích hợp (integrated test)
              └── Lập hồ sơ nghiệm thu

GIAI ĐOẠN 4: NGHIỆM THU & VẬN HÀNH (1-2 tháng)
─────────────────────────────────────────
Tháng 13:    ├── Nộp hồ sơ đề nghị nghiệm thu
              ├── Kiểm tra thực tế của Cảnh sát PCCC
              └── Bổ sung / sửa chữa nếu có

Tháng 14:    ├── Cấp Giấy chứng nhận thẩm duyệt & nghiệm thu PCCC
              ├── Đào tạo PCCC cho toàn bộ nhân viên
              └── ĐƯA VÀO VẬN HÀNH

TỔNG THỜI GIAN: 14-17 THÁNG (từ bắt đầu thiết kế đến vận hành)
══════════════════════════════════════════════════════════════════════
```

## 7.4. Đào tạo & Diễn tập PCCC

### 7.4.1. Chương trình đào tạo PCCC bắt buộc

| Đối tượng | Nội dung | Thời lượng | Tần suất |
|-----------|----------|-----------|----------|
| **Toàn bộ nhân viên** | Kiến thức PCCC cơ bản, sử dụng bình cầm tay, sơ tán | 8 giờ | 1 lần/năm |
| **Đội PCCC cơ sở** (20 người) | Chữa cháy nâng cao, sử dụng hệ thống, cứu hộ | 16 giờ | 2 lần/năm |
| **Đội DC (Khối A)** | Gas suppression operation, VESDA interpretation, UPS fire | 8 giờ | 2 lần/năm |
| **Đội CNC (Khối B)** | Class D fire fighting, coolant fire, chip fire | 8 giờ | 2 lần/năm |
| **Đội SMT (Khối C)** | IPA fire, chemical spill response, clean room evacuation | 8 giờ | 2 lần/năm |

### 7.4.2. Diễn tập sơ tán

| Loại | Phạm vi | Tần suất | Tiêu chí đạt |
|------|---------|----------|---------------|
| **Diễn tập tại chỗ** (Tabletop) | Từng khối | Hàng quý (4 lần/năm) | 100% nhân viên biết lối thoát |
| **Diễn tập thực tế** (Full drill) | Toàn tổ hợp | 2 lần/năm | Sơ tán < 5 phút |
| **Diễn tập ban đêm** | Ca đêm (ít người) | 1 lần/năm | Sơ tán < 4 phút |
| **Diễn tập với CSPCCC** | Toàn tổ hợp + Xe cứu hỏa | 1 lần/năm | Theo yêu cầu CA |

---

# CHƯƠNG VIII: DỰ TOÁN CHI PHÍ PCCC TỔNG HỢP

## 8.1. Tổng hợp CAPEX theo khối

| # | Hạng mục | Chi phí (USD) | Tỷ lệ |
|---|----------|---------------|--------|
| 1 | **Khối A — Datacenter** | 734.070 | 38,7% |
| 2 | **Khối B — Xưởng CNC** | 364.805 | 19,2% |
| 3 | **Khối C — Nhà máy SMT** | 260.950 | 13,7% |
| 4 | **Hệ thống chung** (Báo cháy, Bơm, Bể nước, Thoát hiểm, Hút khói) | 534.480 | 28,2% |
| | **TỔNG CAPEX PCCC** | **1.894.305 USD** | **100%** |
| | **Dự phòng 10%** | 189.431 | |
| | **TỔNG CÓ DỰ PHÒNG** | **~2.083.736 USD** | |
| | **Quy đổi VNĐ (tỷ giá 24.500)** | **~51,1 tỷ VNĐ** | |

### Phân tích theo loại hệ thống

| Loại hệ thống | Chi phí (USD) | % Tổng |
|----------------|---------------|--------|
| Gas Suppression (Novec + FM-200 + IG-541) | ~402.000 | 21,2% |
| Wet Sprinkler | ~200.000 | 10,6% |
| Fire Alarm (FACP + Detectors + Modules) | ~95.000 | 5,0% |
| VESDA (Aspirating Detection) | ~176.600 | 9,3% |
| Fire Pump + Water Tank | ~192.000 | 10,1% |
| Foam System | ~42.000 | 2,2% |
| CO2 / Dry Chemical / Class D | ~53.000 | 2,8% |
| Fire Barrier / Door | ~89.000 | 4,7% |
| Smoke Exhaust + Pressurization | ~57.000 | 3,0% |
| Emergency Lighting + Signage | ~13.000 | 0,7% |
| Cabling (Fire Rated) | ~16.000 | 0,8% |
| Lắp đặt + Commissioning | ~270.000 | 14,2% |
| Thiết bị phụ trợ (Spill kit, PPE initial, etc.) | ~28.000 | 1,5% |
| **Subtotal** | **~1.634.600** | 86,3% |
| Đường ống + Phụ kiện | ~260.000 | 13,7% |
| **TỔNG** | **~1.894.305** | 100% |

## 8.2. Chi phí thiết kế PCCC

| Hạng mục | Chi phí ước tính (USD) |
|----------|----------------------|
| Phí thiết kế PCCC (đơn vị có GCN) — 3% CAPEX | 56.829 |
| Phí thẩm duyệt (lệ phí nhà nước) | ~1.500 |
| Phí tư vấn giám sát PCCC — 1,5% CAPEX | 28.415 |
| Phí nghiệm thu (lệ phí nhà nước) | ~1.500 |
| **Tổng chi phí thiết kế & thẩm duyệt** | **~88.244 USD** |

## 8.3. Chi phí vận hành PCCC hàng năm (OPEX)

| # | Hạng mục | Chi phí/năm (USD) |
|---|----------|-------------------|
| 1 | Bảo trì hệ thống Gas Suppression (kiểm tra bình, van, nozzle) | 15.000 |
| 2 | Bảo trì Sprinkler (kiểm tra valve, test pump, thay head hư) | 8.000 |
| 3 | Bảo trì Fire Alarm + VESDA (hiệu chuẩn, thay detector, backup) | 12.000 |
| 4 | Bảo trì bơm PCCC (chạy thử hàng tuần, bảo dưỡng 6 tháng) | 5.000 |
| 5 | Thay thế bình chữa cháy cầm tay (nạp lại, thay mới) | 3.000 |
| 6 | Nhiên liệu diesel bơm PCCC (test hàng tuần) | 2.000 |
| 7 | Hóa chất AFFF thay thế (shelf life 15-20 năm, kiểm tra) | 500 |
| 8 | PPE PCCC cho đội chữa cháy cơ sở | 5.000 |
| 9 | Đào tạo & Diễn tập PCCC | 8.000 |
| 10 | Kiểm định hệ thống PCCC (theo quy định — 2 năm/lần) | 3.000 |
| 11 | Bảo hiểm cháy nổ (Fire Insurance premium) | 25.000 |
| 12 | Nhân sự PCCC (2 nhân viên PCCC chuyên trách × 12 tháng) | 14.400 |
| | **TỔNG OPEX PCCC/NĂM** | **~100.900 USD/năm** |
| | **QUY ĐỔI VNĐ** | **~2,47 tỷ VNĐ/năm** |

## 8.4. So sánh chi phí PCCC với tổng vốn đầu tư

| Hạng mục | Giá trị | % |
|----------|---------|---|
| Tổng vốn đầu tư dự án (Phase 1) | 25.000.000 USD | 100% |
| CAPEX PCCC (có dự phòng) | 2.083.736 USD | **8,3%** |
| Chi phí thiết kế & thẩm duyệt | 88.244 USD | 0,4% |
| OPEX PCCC năm đầu | 100.900 USD | 0,4% |
| **Tổng chi phí PCCC năm 1** | **~2.272.880 USD** | **9,1%** |

> **BENCHMARK:** Chi phí PCCC chiếm 8-12% tổng CAPEX là mức bình thường cho tổ hợp công nghiệp 
> có Datacenter + Xưởng cơ khí. Mức 8,3% của Mekong nằm trong phạm vi hợp lý nhờ tối ưu 
> thiết kế phân vùng (chỉ dùng Gas suppression đắt tiền cho khu vực cần thiết).

## 8.5. Phân Bổ Chi Phí PCCC Vào CAPEX Dự Án (P2 Mapping)

*[V1.1 — Bổ sung: Tham chiếu chéo với Mô hình Tài chính P2 (08_MO_HINH_TAI_CHINH_MO_RONG.md)]*

### 8.5.1. Mapping CAPEX PCCC → P2 Line Items

| # | Hạng mục PCCC (P7) | Giá trị (USD) | P2 Line Item tương ứng | P2 Mục | Phân bổ |
|---|---|---:|---|---|---|
| 1 | Gas Suppression — DC (Novec 1230 + IG-541) | 473.000 | DC Infrastructure CAPEX | 2.2 | Khối A |
| 2 | Pre-action Sprinkler — DC | 156.000 | DC Infrastructure CAPEX | 2.2 | Khối A |
| 3 | VESDA + Fire Alarm — DC | 112.000 | DC Infrastructure CAPEX | 2.2 | Khối A |
| 4 | Subtotal DC PCCC | **734.000** | **Tổng nằm trong DC Budget** | **2.2** | |
| 5 | Sprinkler — CNC (Wet, EH-1 + OH-1) | 186.000 | CNC Equipment CAPEX | 2.1 | Khối B |
| 6 | Fire Alarm — CNC | 48.000 | CNC Equipment CAPEX | 2.1 | Khối B |
| 7 | LEV/Extraction (an toàn cháy nổ) | 65.000 | CNC Equipment CAPEX | 2.1 | Khối B |
| 8 | Class D suppression — CNC | 32.000 | CNC Equipment CAPEX | 2.1 | Khối B |
| 9 | ATEX equipment — CNC | 34.000 | CNC Equipment CAPEX | 2.1 | Khối B |
| 10 | Subtotal CNC PCCC | **365.000** | **Tổng nằm trong CNC Budget** | **2.1** | |
| 11 | Gas Suppression — SMT (Novec + FM-200) | 98.000 | IoT/SMT Equipment CAPEX | 2.3 | Khối C |
| 12 | Sprinkler — SMT | 78.000 | IoT/SMT Equipment CAPEX | 2.3 | Khối C |
| 13 | Fire Alarm — SMT | 45.000 | IoT/SMT Equipment CAPEX | 2.3 | Khối C |
| 14 | ATEX IPA room — SMT | 40.000 | IoT/SMT Equipment CAPEX | 2.3 | Khối C |
| 15 | Subtotal SMT PCCC | **261.000** | **Tổng nằm trong IoT Budget** | **2.3** | |
| 16 | Bơm PCCC + Bể 750m³ | 298.000 | Hạ tầng Chung | 2.5 #3 | Chung |
| 17 | Hydrant ngoài trời + Ring main | 85.000 | Hạ tầng Chung | 2.5 #3 | Chung |
| 18 | Emergency Lighting + Signage | 42.000 | Hạ tầng Chung | 2.5 #3 | Chung |
| 19 | ATS/Generator (PCCC portion) | 35.000 | Hạ tầng Chung | 2.5 #2 | Chung |
| 20 | Smoke Control / Pressurization | 44.000 | Hạ tầng Chung | 2.5 #3 | Chung |
| 21 | PPE / Misc PCCC | 30.000 | Hạ tầng Chung | 2.5 #3 | Chung |
| 22 | Subtotal Chung PCCC | **534.000** | **Tổng nằm trong Chung** | **2.5** | |
| 23 | **Contingency 10%** | **189.400** | Contingency tổng dự án | — | |
| | **TỔNG CAPEX PCCC** | **2.083.400** | | | |

### 8.5.2. So Sánh Với P2 Budget

| Khoản mục | P2 Budget (USD) | P7 Tính toán (USD) | Chênh lệch (USD) | Ghi chú |
|---|---:|---:|---:|---|
| "PCCC tổng thể + hạ tầng nước" (P2 Mục 2.5 #3) | 800.000 | — | — | P2 gộp PCCC + nước |
| → Ước tính phần PCCC trong dòng này | ~500.000 | 534.000 (chung only) | **-34.000** | Gần khớp cho phần chung |
| → DC PCCC nằm trong DC Infra budget | Included | 734.000 | Cần xác nhận | Kiểm tra P2 Mục 2.2 |
| → CNC PCCC nằm trong CNC budget | Included | 365.000 | Cần xác nhận | Kiểm tra P2 Mục 2.1 |
| → SMT PCCC nằm trong IoT budget | Included | 261.000 | Cần xác nhận | Kiểm tra P2 Mục 2.3 |
| **GAP ước tính** | ~800.000 (explicit) | **2.083.400** (total) | **~1.283.400** | |

> **⚠️ CẢNH BÁO:** P2 chỉ ghi nhận rõ ràng **0,80M USD** cho "PCCC tổng thể + hạ tầng nước" trong Common Infrastructure. P7 tính toán tổng PCCC CAPEX = **2,08M USD**. Chênh lệch **~1,28M** cần được xác nhận:
> - Nếu DC PCCC (734K) + CNC PCCC (365K) + SMT PCCC (261K) ĐÃ nằm trong budget riêng của từng BU → chỉ thiếu ~34K (chung) → **CHẤP NHẬN ĐƯỢC**
> - Nếu PCCC KHÔNG nằm trong B.U budget → thiếu **1,28M** → cần điều chỉnh P2 CAPEX lên 48,78M hoặc tái phân bổ contingency

### 8.5.3. Khuyến Nghị Cho P2 V1.1

1. **Tách rõ dòng PCCC** trong mỗi B.U CAPEX table (P2 Mục 2.1, 2.2, 2.3) — hiện đang gộp chung
2. **Bổ sung footnote** tại P2 Mục 2.5 #3 giải thích "PCCC 0,80M = phần Common Infrastructure PCCC (534K + contingency 266K)" — phần B.U PCCC nằm trong budget riêng
3. **Cross-reference** tất cả CAPEX PCCC đến P7 Chương VIII

## 8.6. Phân Bổ OPEX PCCC Vào P&L (P2 Mapping)

*[V1.1 — Bổ sung: Mapping chi phí vận hành PCCC hàng năm vào P&L P2]*

### 8.6.1. Mapping OPEX PCCC → P2 P&L Categories

| # | Hạng mục OPEX PCCC (P7 Mục 8.3) | Chi phí/năm (USD) | P2 P&L Category | Phân bổ BU |
|---|---|---:|---|---|
| 1 | Bảo hiểm cháy nổ | 25.000 | Corporate Overhead | 40% DC, 35% CNC, 25% SMT |
| 2 | Bảo trì Gas Suppression | 15.000 | DC Opex (60%) + CNC Opex (25%) + IoT Opex (15%) | Pro-rata CAPEX |
| 3 | Bảo trì Fire Alarm + VESDA | 12.000 | DC Opex (50%) + CNC Opex (30%) + IoT Opex (20%) | Pro-rata detector count |
| 4 | Bảo trì Sprinkler | 8.000 | CNC Opex (45%) + DC Opex (30%) + IoT Opex (25%) | Pro-rata head count |
| 5 | Bảo trì bơm PCCC | 5.000 | Corporate Overhead | Shared infrastructure |
| 6 | Thay thế bình cầm tay | 3.000 | Corporate Overhead | Shared |
| 7 | PPE PCCC | 5.000 | CNC Opex (50%) + DC Opex (20%) + IoT Opex (30%) | Pro-rata headcount |
| 8 | Đào tạo & Diễn tập | 8.000 | Corporate Overhead | Shared |
| 9 | Kiểm định (2 năm/lần) | 3.000 | Corporate Overhead | Shared / amortized |
| 10 | Nhiên liệu bơm diesel | 2.000 | Corporate Overhead | Shared |
| 11 | AFFF thay thế | 500 | CNC Opex | CNC only (foam system) |
| 12 | Nhân sự PCCC (2 người) | 14.400 | Corporate Overhead | Shared |
| | **TỔNG** | **100.900** | | |

### 8.6.2. Tổng Hợp Theo P2 Category

| P2 P&L Category | PCCC OPEX phân bổ (USD/năm) | % Tổng OPEX PCCC |
|---|---:|---:|
| **DC Opex** | 19.850 | 19,7% |
| **CNC Opex** | 19.550 | 19,4% |
| **IoT Opex** | 10.600 | 10,5% |
| **Corporate Overhead** | 50.900 | 50,4% |
| **TỔNG** | **100.900** | **100%** |

> **Nhận xét:** Phần lớn OPEX PCCC (50,4%) nằm trong Corporate Overhead vì là chi phí chung (bảo hiểm, nhân sự, kiểm định, đào tạo). Phần còn lại phân bổ theo BU dựa trên tỷ lệ thiết bị PCCC.

> **Tác động P&L:** OPEX PCCC = 100.900 USD/năm — đã được bổ sung vào dòng "Chi phí PCCC [V1.1]" trong P2 P&L V1.1 (08_MO_HINH_TAI_CHINH_MO_RONG.md Mục 3.2).

---

# PHỤ LỤC

## Phụ lục A: Bảng tổng hợp thiết bị PCCC toàn dự án

### A1. Gas Suppression Systems

| Khu vực | Agent | Lượng (kg/m³) | Số bình | Nozzle | Discharge Time |
|---------|-------|---------------|---------|--------|----------------|
| Data Hall Zone 1 | Novec 1230 | 178 kg | 4 × 180L | 12 | ≤ 10s |
| Data Hall Zone 2 | Novec 1230 | 208 kg | 4 × 180L | 12 | ≤ 10s |
| UPS Room | Novec 1230 | 46 kg | 2 × 180L | 4 | ≤ 10s |
| Generator Room | IG-541 | 780 m³ gas | 80 × 80L/200bar | 16 | ≤ 60s |
| Clean Room (Khối C) | Novec 1230 | 119 kg | 3 × 180L | 8 | ≤ 10s |
| IPA Storage (Khối C) | FM-200 | 18,7 kg | 1 × 40L | 2 | ≤ 10s |

### A2. Sprinkler Systems

| Khu vực | Loại | Hazard | Density (mm/min) | Số heads | Pipe Size |
|---------|------|--------|-------------------|----------|-----------|
| CNC Machine Shop | Wet | EH-1 | 12,2 | 312 | DN150 main |
| CNC Tool/Air/Dock | Wet | OH-1 | 6,1 | 54 | DN100 |
| CNC QA/CMM | Wet | LH | 4,1 | 11 | DN50 |
| DC Data Hall | Pre-action | OH-2 | 6,1 | 149 | DN100 |
| DC Cooling/Office | Wet | OH-1/LH | 4,1-6,1 | 65 | DN80 |
| SMT Line | Wet | OH-2 | 8,2 | 100 | DN100 |
| SMT Robot/Kho/VP | Wet | OH-1/LH | 4,1-6,1 | 91 | DN80 |
| **TỔNG** | | | | **782 heads** | |

### A3. Bình chữa cháy xách tay

| Loại | Khối A | Khối B | Khối C | Tổng |
|------|--------|--------|--------|------|
| CO2 5 kg | 15 | 31 | 12 | **58** |
| ABC 4-9 kg | 10 | 23 | 9 | **42** |
| Met-L-X 13,6 kg | — | 4 | — | **4** |
| Lith-X 13,6 kg | — | 2 | — | **2** |
| **TỔNG** | **25** | **60** | **21** | **106 bình** |

## Phụ lục B: Checklist kiểm tra PCCC định kỳ

### B1. Kiểm tra hàng ngày

| # | Hạng mục | Người kiểm tra | Ghi chú |
|---|----------|----------------|---------|
| 1 | FACP panel: Không có lỗi (trouble) | Bảo vệ/PCCC | Check đèn trouble |
| 2 | Bình cầm tay: Đúng vị trí, kim áp suất xanh | Bảo vệ/PCCC | Walk-through |
| 3 | Lối thoát: Không bị cản, đèn Exit sáng | Bảo vệ/PCCC | Walk-through |
| 4 | Cửa chống cháy: Đóng kín | Bảo vệ/PCCC | Walk-through |
| 5 | Bơm Jockey: Áp lực đường ống ≥ 7,0 bar | Kỹ thuật | Check gauge |

### B2. Kiểm tra hàng tuần

| # | Hạng mục | Người kiểm tra |
|---|----------|----------------|
| 1 | Chạy thử bơm Diesel PCCC (30 phút) | Kỹ thuật |
| 2 | Kiểm tra mức nước bể PCCC (≥ 80%) | Kỹ thuật |
| 3 | Kiểm tra VESDA: Không alarm giả, ống hút không tắc | DC Operator |
| 4 | Kiểm tra áp suất bình Gas (Novec, FM-200, IG-541) | Kỹ thuật |
| 5 | Kiểm tra Chip Collection Area: Sạch sẽ, không tích tụ | CNC Supervisor |

### B3. Kiểm tra hàng tháng/quý

| # | Hạng mục | Tần suất | Người thực hiện |
|---|----------|----------|----------------|
| 1 | Test chức năng 10% detector (luân phiên) | Hàng tháng | Nhà thầu PCCC |
| 2 | Test Manual Call Point + Sounder/Strobe | Hàng tháng | Nhà thầu PCCC |
| 3 | Inspection sprinkler valve (OS&Y, Alarm Check) | Hàng quý | Nhà thầu PCCC |
| 4 | Flow test bơm PCCC (150% rated flow) | Hàng quý | Nhà thầu PCCC |
| 5 | VESDA sensitivity test (smoke test) | Hàng quý | Nhà thầu PCCC |
| 6 | LEL/Gas detector calibration | Hàng quý | Nhà thầu PCCC |
| 7 | Noise monitoring (dB mapping Khối B) | Hàng quý | HSE |

### B4. Kiểm tra hàng năm

| # | Hạng mục | Người thực hiện |
|---|----------|----------------|
| 1 | Kiểm định toàn bộ hệ thống báo cháy | Đơn vị kiểm định được cấp phép |
| 2 | Kiểm định bình Gas suppression (hydrostatic test nếu > 5 năm) | Nhà cung cấp |
| 3 | Thay battery FACP + Detector | Nhà thầu PCCC |
| 4 | Main drain test (sprinkler) | Nhà thầu PCCC |
| 5 | Enclosure integrity test (Gas rooms) — Door Fan Test | Chuyên gia |
| 6 | Full system integration test (smoke → alarm → gas → HVAC → evac) | Nhà thầu PCCC |
| 7 | Diễn tập sơ tán toàn tổ hợp với Cảnh sát PCCC | HSE + CA PCCC |
| 8 | Audiometric testing nhân viên Khối B (tiếng ồn) | Y tế lao động |
| 9 | Blood lead level testing nhân viên Khối C (chì) | Y tế lao động |

## Phụ lục C: Danh sách nhà cung cấp PCCC tham khảo tại Việt Nam

| # | Nhà cung cấp | Sản phẩm chính | Đại diện tại VN |
|---|-------------|----------------|-----------------|
| 1 | **Kidde / Carrier** | FM-200, Novec 1230, VESDA | Carrier Vietnam |
| 2 | **Tyco / Johnson Controls** | Sprinkler, IG-541, FACP | JCI Vietnam |
| 3 | **Minimax** | Gas suppression, Foam, Alarm | Minimax VN |
| 4 | **Fike** | Novec 1230, FM-200, Detection | Fike APAC |
| 5 | **Notifier (Honeywell)** | Fire Alarm Panel, VESDA | Honeywell Vietnam |
| 6 | **Viking** | Sprinkler heads, Valves | Đại lý phân phối |
| 7 | **Grundfos** | Fire Pump (End-suction) | Grundfos Vietnam |
| 8 | **Naffco** | Fire pump, Hydrant, Foam | Naffco APAC |
| 9 | **3M / Solventum** | Novec 1230 agent | 3M Vietnam |
| 10 | **Ansul (Tyco)** | Met-L-X, Lith-X (Class D) | JCI Vietnam |

## Phụ lục D: Thuật ngữ viết tắt

| Viết tắt | Tiếng Anh | Tiếng Việt |
|----------|-----------|-----------|
| PCCC | Fire Protection & Prevention | Phòng cháy Chữa cháy |
| FACP | Fire Alarm Control Panel | Tủ trung tâm báo cháy |
| VESDA | Very Early Smoke Detection Apparatus | Thiết bị phát hiện khói sớm |
| AFFF | Aqueous Film-Forming Foam | Bọt tạo màng nước |
| MWF | Metalworking Fluid | Dầu cắt gọt kim loại |
| LEL | Lower Explosive Limit | Giới hạn nổ dưới |
| PPE | Personal Protective Equipment | Trang bị bảo hộ cá nhân |
| LOTO | Lockout/Tagout | Khóa/Ghi nhãn an toàn |
| EH | Extra Hazard | Nguy hiểm đặc biệt |
| OH | Ordinary Hazard | Nguy hiểm thường |
| LH | Light Hazard | Nguy hiểm nhẹ |
| SDS/MSDS | Safety Data Sheet | Bảng thông tin an toàn hóa chất |
| GHS | Globally Harmonized System | Hệ thống hài hòa toàn cầu |
| REI | Résistance, Étanchéité, Isolation | Chịu lực, kín khí, cách nhiệt (chống cháy) |
| EI | Étanchéité, Isolation | Kín khí, cách nhiệt |
| ACH | Air Changes per Hour | Lần thay đổi không khí/giờ |
| NRR | Noise Reduction Rating | Chỉ số giảm tiếng ồn |
| ATS | Automatic Transfer Switch | Bộ chuyển nguồn tự động |
| BMS | Building Management System | Hệ thống quản lý tòa nhà |
| SOC | Security Operations Center | Trung tâm điều hành an ninh |
| NOC | Network Operations Center | Trung tâm điều hành mạng |

---

**HẾT BÁO CÁO**

---

> **Tài liệu này** là phần Thuyết minh Thiết kế PCCC & An toàn Lao động sơ bộ (Concept Design),
> phục vụ bước đầu trong quy trình thẩm duyệt PCCC. Thiết kế chi tiết (Detail Design) 
> với bản vẽ AutoCAD đầy đủ cần được thực hiện bởi đơn vị thiết kế PCCC có GCN hành nghề 
> theo Nghị định 136/2020/NĐ-CP.
>
> **Ngày lập:** Tháng 3 năm 2026
>
> **Biên soạn:** Bộ phận Kỹ thuật — Mekong Technology
>
> **Phê duyệt:** ___________________________
>
> **Ông Phạm Xuân Quốc — Tổng Giám đốc**
