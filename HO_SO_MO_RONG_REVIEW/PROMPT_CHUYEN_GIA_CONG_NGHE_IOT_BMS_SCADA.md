# PROMPT CHUYEN GIA & CHUYEN VIEN KIEM TRA
## Cong nghe — San pham IoT / BMS / SCADA cho Du an Mekong Technology

**Ngay lap:** 09/03/2026  
**Muc dich:** Yeu cau chuyen gia danh gia va bo sung noi dung de an phan cong nghe san pham IoT, huong toi xay dung he sinh thai san pham BMS/SCADA the he moi cho thi truong Viet Nam  
**Pham vi:** Toan bo ho so de an (Mau 1.4 + V2 Master + Ho so Mo rong)

---

# MUC LUC PROMPT

| # | Prompt | Chuyen gia | Muc do | Thoi gian | Output |
|---|--------|-----------|:---:|:---:|---|
| F | Danh gia hien trang san pham IoT & xac dinh lo hong | Chuyen gia IoT/Embedded | CRITICAL | 2-3 ngay | Bao cao danh gia |
| G | Thiet ke he san pham IoT hoan chinh cho BMS/SCADA VN | Chuyen gia BMS/SCADA | CRITICAL | 3-5 ngay | Bao cao san pham moi |
| H | Kiem tra tinh kha thi ky thuat & tai chinh san pham moi | Chuyen vien kiem tra | HIGH | 2-3 ngay | Bao cao kiem tra |

---

# PROMPT F: CHUYEN GIA IoT/EMBEDDED — DANH GIA HIEN TRANG & XAC DINH LO HONG SAN PHAM

---

```
=== BAT DAU PROMPT ===

BOI CANH:
Ban la Chuyen gia Embedded Systems & IoT co 15+ nam kinh nghiem thiet ke 
san pham cong nghiep (Industrial IoT), da lam viec voi cac he thong BMS 
(Building Management System) va SCADA (Supervisory Control and Data 
Acquisition) tai Dong Nam A. Ban hieu sau ve kien truc Purdue Model, 
giao thuc cong nghiep (Modbus, BACnet, OPC UA, MQTT, Profinet, EtherCAT), 
va quy trinh phat trien san pham tu R&D den san xuat hang loat.

DU AN: Mekong Technology Hub — KCNC TP.HCM, 15 ha, CAPEX 47,50M USD
- B.U IoT/Robot: San xuat thiet bi IoT Gateway, Robot AMR/AGV, OHT
- Hien tai: 3 dong san pham gateway (MK-100/200/300) + 5 module mo rong 
  (MOD-WiFi, MOD-4G, MOD-485, MOD-CAN, MOD-LoRa)

TAI LIEU DA CO (can doc TOAN BO truoc khi danh gia):
1. `MEKONG_DE_AN_V2_MASTER.md` — De an tong hop (~15.000+ dong)
   - Muc 1.1-1.3: Danh muc san pham MK-100/200/300
   - Muc 4.8: He thong Quan ly Toa nha (BMS/DCIM) 
   - Muc ve giao thuc: Modbus, OPC UA, MQTT, BACnet, Profinet
2. `TRINH_BAY_KCNC/01_DE_AN_CHINH/MEKONG_TECHNOLOGY_MAU_1.4_PROFESSIONAL_2025-10-20_PROCESSED.md`
   - Bang Module IoT: MOD-WiFi, MOD-4G, MOD-485, MOD-CAN, MOD-LoRa
   - Muc doi tac: Siemens, Bosch Rexroth, Moxa (Protocol converters)
3. `HO_SO_MO_RONG_REVIEW/08_MO_HINH_TAI_CHINH_MO_RONG.md`
   - Revenue IoT/Robot: 0,44M (Y1) → 5,54M (Y10)
   - ASP Gateway: 2.850 → 2.250 USD (giam dan)
4. `TRINH_BAY_KCNC/MAU_1.4_HOAN_TAT.md`
   - Bang san pham: IoT Gateway + Robot AMR/AGV/OHT
   - Quy trinh cong nghe san xuat

─────────────────────────────────────────────────
PHAN 1: DANH GIA HIEN TRANG SAN PHAM IoT
─────────────────────────────────────────────────

Hay phan tich va tra loi cac cau hoi sau:

1.1. DANH MUC SAN PHAM HIEN TAI — CO DU KHONG?

San pham hien co:
| Ma | Ten | Chuc nang chinh | Gia (USD) |
|---|---|---|---:|
| MK-100 | IoT Gateway Entry | Data collection tu PLC, sensor | 1.500 |
| MK-200 | IoT Gateway Standard | Protocol converter, 25 I/O, Edge AI | 2.000-2.850 |
| MK-300 | IoT Gateway Advanced | OPC UA Server/Client, EtherCAT, AI nang | 3.500+ |
| MOD-WiFi | Module Wi-Fi | Ket noi Wi-Fi cho MK series | 20-40 |
| MOD-4G | Module 4G/LTE | Ket noi cellular | 40-60 |
| MOD-485 | Module RS485 | Modbus RTU, ket noi PLC legacy | 30-50 |
| MOD-CAN | Module CAN bus | Ket noi thiet bi CAN (xe, may) | 35-55 |
| MOD-LoRa | Module LoRa | LPWAN cho sensor ta xa | 25-45 |

Cau hoi:
a) De xay dung mot HE SINH THAI HOAN CHINH cho BMS va SCADA tai VN, 
   danh muc tren con THIEU nhung gi? Liet ke CU THE tung san pham con thieu.
b) So sanh voi he sinh thai cua Siemens (SIMATIC), Schneider (EcoStruxure), 
   Honeywell (Niagara), Delta (DIALink) — Mekong thieu bao nhieu % san pham 
   de canh tranh o phan khuc BMS/SCADA?
c) San pham nao QUAN TRONG NHAT can phat trien truoc (bang xep hang uu tien)?

1.2. LO HONG CONG NGHE

a) Gateway MK-200/300 co Modbus, OPC UA, BACnet — nhung KHONG CO:
   - DDC Controller (Direct Digital Controller) cho HVAC
   - Expansion I/O modules chuyen dung (DI/DO/AI/AO rieng biet)
   - HMI (Human-Machine Interface) panel
   - Power meter / Energy meter tich hop
   - VAV Controller (Variable Air Volume)
   - Lighting controller (DALI/KNX)
   → Danh gia muc do nghiem trong cua tung lo hong

b) Phan mem/Firmware:
   - Co MekongOS → nhung chua co SCADA software platform
   - Co MQTT/OPC UA → nhung chua co BMS Head-end software
   - Co Edge AI → nhung chua co Engineering Tool (cau hinh, lap trinh)
   → Danh gia phan mem nao can phat trien, phan mem nao nen mua OEM/license

1.3. THI TRUONG BMS/SCADA VIET NAM

a) Quy mo thi truong BMS Viet Nam (2025-2035):
   - Toa nha thuong mai, van phong, benh vien, truong hoc
   - Khu cong nghiep, nha may (Industrial BMS)
   - Datacenter (DCIM = BMS + IT monitoring)
   → Uoc luong quy mo (M USD), toc do tang truong (CAGR)

b) Doi thu canh tranh hien tai:
   - Siemens Desigo CC, Schneider EcoStruxure, Honeywell Niagara, 
     Johnson Controls Metasys, Delta DIALink
   - Cac hang VN: Ameco, Savills M&E, ... (co khong?)
   → Thi phan, gia ca, diem yeu cua tung doi thu

c) Co hoi cho Mekong Technology:
   - Loi the "Made in Vietnam" (chinh sach uu dai KCNC, QD 38/2020)
   - Loi the gia thanh (thap hon 30-50% so voi Siemens/Schneider)
   - Loi the tich hop (Gateway + BMS + SCADA + AI = 1 nha cung cap)
   → Danh gia co hoi tham nhap thuc te

─────────────────────────────────────────────────
PHAN 2: DE XUAT HE SAN PHAM CAN BO SUNG
─────────────────────────────────────────────────

Dua tren phan tich lo hong, hay de xuat DANH MUC SAN PHAM BOI SUNG 
theo format:

| TT | Ma san pham | Ten san pham | Chuc nang | Thong so ky thuat chinh | Gia muc tieu (USD) | San pham canh tranh | Uu tien (1-5) |
|---|---|---|---|---|---:|---|:---:|

Yeu cau:
- Toi thieu 10-15 san pham/module moi
- Phan loai thanh 4 nhom:
  A) Field Devices (Sensor, Actuator, I/O Module)
  B) Controllers (DDC, PLC-like, VAV Controller)
  C) Communication (Gateway, Protocol Converter, Network Switch)
  D) Software/Platform (SCADA, BMS Head-end, Engineering Tool, HMI Runtime)
- Moi san pham phai co: Thong so ky thuat so sanh duoc voi doi thu quoc te

FORMAT OUTPUT:
- Markdown, co bang chi tiet
- Ngon ngu: Tieng Viet, thuat ngu ky thuat giu tieng Anh
- Nhan du lieu: [B] = Benchmarked, [A] = Assumed, [C] = Calculated
- KHONG dung emoji
- Do dai toi thieu: 2.000 dong

=== KET THUC PROMPT ===
```

---

# PROMPT G: CHUYEN GIA BMS/SCADA — THIET KE HE SAN PHAM IOT THE HE MOI CHO BMS/SCADA VIET NAM

---

```
=== BAT DAU PROMPT ===

BOI CANH:
Ban la Chuyen gia Thiet ke He thong BMS/SCADA cap cao, co 15+ nam kinh 
nghiem thiet ke va trien khai he thong quan ly toa nha va dieu khien giam 
sat cong nghiep tai VN va Dong Nam A. Ban da lam viec voi Siemens Desigo, 
Schneider EcoStruxure, Honeywell Niagara, va hieu sau ve kien truc he thong 
tu Field Level den Management Level.

MUC TIEU CHIEN LUOC CUA MEKONG TECHNOLOGY:
Xay dung THE HE SAN PHAM MOI "MADE IN VIETNAM" cho BMS va SCADA, bao gom:
- San xuat (Manufacturing) tai KCNC TP.HCM
- Nghien cuu phat trien (R&D) tu loi cong nghe IoT Gateway da co
- Tao he sinh thai san pham HOAN CHINH co the THAY THE NHAP KHAU tu 
  Siemens, Schneider, Honeywell trong phan khuc BMS/SCADA tam trung

SAN PHAM DA CO (lam nen tang):
- IoT Gateway MK-100/200/300 (ARM Cortex-A55/A78, Multi-protocol)
- Module: MOD-WiFi, MOD-4G, MOD-485, MOD-CAN, MOD-LoRa
- MekongOS (Firmware/OS cho Gateway)
- Nha may SMT (Panasonic NPM-D3, AOI, ICT, Burn-in)

YEU CAU: Thiet ke TOAN BO he san pham IoT the he moi cho BMS/SCADA VN.
Output: Tai lieu ky thuat 3.000-5.000 dong, bao gom 7 phan sau:

─────────────────────────────────────────────────
PHAN 1: KIEN TRUC HE SINH THAI SAN PHAM (PRODUCT ECOSYSTEM ARCHITECTURE)
─────────────────────────────────────────────────

Ve so do kien truc 5 tang (theo tieu chuan BMS/SCADA):

Tang 1 — FIELD LEVEL (Sensor & Actuator):
- Cam bien nhiet do, do am, ap suat, CO2, bui, anh sang, chuyen dong
- Actuator: van dien (chilled water valve), damper, relay
- Power meter / Energy meter (Rs485 Modbus)
- Water meter, BTU meter

Tang 2 — I/O & CONTROL LEVEL:
- **MK-EIO-DI16**: Expansion Digital Input 16 channels (24VDC, dry contact)
- **MK-EIO-DO16**: Expansion Digital Output 16 channels (relay/transistor)
- **MK-EIO-AI8**: Expansion Analog Input 8 channels (0-10V, 4-20mA, PT100/1000, NTC)
- **MK-EIO-AO4**: Expansion Analog Output 4 channels (0-10V, 4-20mA)
- **MK-EIO-UI8**: Universal Input 8 channels (tu dong nhan dien DI/AI)
- **MK-DDC-24**: DDC Controller 24 points (BACnet MS/TP, tuong duong Siemens PXC)
- **MK-DDC-64**: DDC Controller 64 points (BACnet IP, tuong duong Schneider AS-P)
- **MK-VAV**: VAV Controller (cho he thong HVAC Variable Air Volume)

Tang 3 — NETWORK & COMMUNICATION LEVEL:
- **MK-200** (da co): IoT Gateway, Protocol Converter
- **MK-GW-BAC**: BACnet Router/Gateway (BACnet MS/TP ↔ BACnet IP ↔ BACnet/SC)
- **MK-GW-MOD**: Modbus Gateway (Modbus RTU ↔ Modbus TCP ↔ OPC UA)
- **MK-GW-KNX**: KNX/IP Gateway (cho he thong chieu sang & ren cua)
- **MK-GW-DALI**: DALI-2 Gateway (cho dieu khien chieu sang)
- **MK-SW-IND**: Industrial Ethernet Switch (managed, PoE+, ring redundancy)

Tang 4 — SUPERVISION & SCADA LEVEL:
- **MekongSCADA**: Phan mem SCADA/BMS Head-end (tuong duong Niagara/Desigo)
  + Web-based UI (HTML5, responsive)
  + Graphic editor (drag-and-drop, floor plan, P&ID)
  + Trend logging, Alarm management
  + Report generation (PDF/Excel)
  + Multi-site management
  + API: REST, GraphQL, WebSocket
- **MekongHMI**: HMI Runtime cho man hinh cam ung 7"/10"/15"
- **MekongET**: Engineering Tool (cau hinh, lap trinh, commissioning)
  + Point database management
  + Logic programming (Block diagram / Script)
  + Device discovery & auto-configuration
  + Firmware update OTA

Tang 5 — MANAGEMENT & CLOUD LEVEL:
- **MekongOS Cloud** (da co mot phan): IoT Cloud Platform
  + Multi-tenant SaaS cho BMS/SCADA
  + Dashboard, Analytics, AI predictive maintenance
  + Mobile app (iOS/Android)
  + Integration: ERP, CMMS, Energy management

Yeu cau:
a) Ve so do kien truc dang text/Mermaid the hien 5 tang va ket noi giua chung
b) Cho moi san pham: dinh nghia thong so ky thuat chi tiet (CPU, RAM, I/O, 
   protocol, chung nhan, nhiet do hoat dong, nguon dien, kich thuoc, trong luong)
c) Chi ro san pham nao PHAT TRIEN MOI, san pham nao dua tren MK-200/300 hien co
d) Roadmap phat trien: san pham nao truoc, san pham nao sau (18-36 thang)

─────────────────────────────────────────────────
PHAN 2: THIET KE CHI TIET — EXPANSION I/O MODULES
─────────────────────────────────────────────────

Day la SAN PHAM QUAN TRONG NHAT can phat trien — vi khong co I/O module 
thi khong dieu khien duoc gi trong toa nha/nha may.

Cho moi module (MK-EIO series), thiet ke chi tiet:

2.1. MK-EIO-DI16 (Digital Input 16CH):
- CPU: STM32F4 hoac tuong duong
- Giao tiep: RS485 Modbus RTU + BACnet MS/TP (dual protocol)
- Input: 16 channels, 24VDC/Dry Contact, co dem xung (pulse counting)
- LED chi thi: 16 LED trang thai + 1 LED Power + 1 LED Comm
- Nguon: 24VDC, <3W
- Bao ve: Isolation 2.5kV, TVS, chong set
- Nhiet do: -20 den +60 do C
- Chung nhan muc tieu: CE, FCC, UL (tuong lai)
- Gia muc tieu: 80-120 USD (so voi Siemens PXA30-T: ~250 USD)
- BOM ky thuat (danh sach linh kien chinh)

2.2. MK-EIO-DO16 (Digital Output 16CH):
- Tuong tu DI16, nhung output: 16 Relay 5A/250VAC hoac Transistor 0.5A/24VDC
- Co chuc nang PWM (Pulse Width Modulation) cho dieu khien damper/valve

2.3. MK-EIO-AI8 (Analog Input 8CH):
- Input: 8 channels, ho tro da loai (0-10V, 4-20mA, PT100, PT1000, NTC 10K)
- Do phan giai: 16-bit ADC
- Do chinh xac: 0,1% FS (Full Scale)
- Calibration: Software calibration, luu tru EEPROM

2.4. MK-EIO-AO4 (Analog Output 4CH):
- Output: 4 channels, 0-10V va 4-20mA (cau hinh bang phan mem)
- Do phan giai: 16-bit DAC
- Load: 0-10V: 10mA max, 4-20mA: 600 ohm max

2.5. MK-EIO-UI8 (Universal Input 8CH):
- Tu dong nhan dien: DI (dry contact), AI (0-10V), AI (4-20mA), 
  Resistance (PT100/1000/NTC)
- Auto-detect hoac cau hinh thu cong qua Modbus/BACnet

Yeu cau:
a) Thiet ke so do khoi (block diagram) cho tung module
b) Uoc tinh BOM cost (gia thanh linh kien) cho tung module
c) So sanh gia voi doi thu: Siemens PXA, Schneider I/O, Honeywell Spyder, 
   Delta I/O
d) Thiet ke co modular (dinh tren DIN rail, ket noi daisy-chain RS485)

─────────────────────────────────────────────────
PHAN 3: THIET KE CHI TIET — DDC CONTROLLER
─────────────────────────────────────────────────

DDC (Direct Digital Controller) la "bo nao" cua he thong BMS tai moi tang/khu vuc.

3.1. MK-DDC-24 (DDC 24 points):
- CPU: ARM Cortex-M7 (VD: STM32H7) hoac Cortex-A7
- RAM: 512KB-1MB (M7) hoac 256MB (A7)
- Flash: 2MB (M7) hoac 4GB eMMC (A7)
- I/O tich hop: 8 UI + 4 AO + 6 DO + 6 DI (tong 24 points)
- Mo rong: 2 cong RS485 cho EIO modules (toi da 32 modules = 512 points)
- Giao thuc: BACnet MS/TP (native) + Modbus RTU/TCP + MQTT
- Lap trinh: IEC 61131-3 (Function Block Diagram) + Script
- Man hinh: LCD 128x64 hien thi trang thai
- Web server: Tich hop web mini de cau hinh/monitor (Ethernet port)
- UPS: Pin du phong 30 phut (giu chuong trinh chay khi mat dien)
- Gia muc tieu: 250-400 USD (so voi Siemens PXC4: 600-1.000 USD)

3.2. MK-DDC-64 (DDC 64 points):
- CPU: ARM Cortex-A55 quad-core (tuong tu MK-200)
- RAM: 2GB DDR4
- Flash: 8GB eMMC
- I/O tich hop: 16 UI + 8 AO + 16 DO + 8 DI + 16 DI (tong 64 points)
- Mo rong: 4 cong RS485 + 2 Ethernet (toi da 64 modules = 1.024 points)
- Giao thuc: BACnet IP (native) + BACnet MS/TP + OPC UA + MQTT + Modbus
- Lap trinh: IEC 61131-3 + Python scripting + Node-RED
- Web server: Full web UI (tuong tu MK-200)
- Redundancy: Dual power supply, watchdog, fail-safe output state
- Gia muc tieu: 500-800 USD (so voi Schneider AS-P: 1.200-2.000 USD)

Yeu cau:
a) So do kien truc phan cung chi tiet (block diagram)
b) Danh sach giao thuc va tieu chuan can dat (BACnet BTL Listed, etc.)
c) Phan tich loi the ky thuat so voi doi thu
d) Ke hoach chung nhan (CE, BACnet BTL, UL, CCC)

─────────────────────────────────────────────────
PHAN 4: THIET KE CHI TIET — GATEWAY CHUYEN DUNG
─────────────────────────────────────────────────

4.1. MK-GW-BAC (BACnet Router/Gateway):
- Chuc nang: Ket noi cac mang BACnet khac nhau 
  (MS/TP ↔ IP ↔ BACnet/SC Secure Connect)
- Ho tro: BACnet Router (BBMD), BACnet/SC (TLS 1.3 encryption)
- Port: 2x RS485 (MS/TP) + 2x Ethernet (IP) + 1x USB (commissioning)
- Cau hinh: Web UI + MekongET Engineering Tool
- Gia muc tieu: 150-250 USD (so voi Contemporary Controls BASrouter: 350+ USD)

4.2. MK-GW-MOD (Modbus Gateway):
- Chuc nang: Ket noi thiet bi Modbus Legacy vao he thong BACnet/OPC UA
- Port: 4x RS485 (Modbus RTU, toi da 124 slave) + 2x Ethernet (Modbus TCP + OPC UA)
- Data mapping: 10.000 registers, polling rate 100ms
- Gia muc tieu: 120-200 USD

4.3. MK-GW-KNX (KNX/IP Gateway):
- Chuc nang: Ket noi he thong chieu sang/rem cua KNX vao BMS
- Ho tro: KNX TP ↔ KNX/IP ↔ BACnet IP
- ETS compatible
- Gia muc tieu: 200-350 USD

4.4. MK-GW-DALI (DALI-2 Gateway):
- Chuc nang: Dieu khien he thong chieu sang DALI-2
- Ho tro: 2 line DALI (128 ballast), BACnet IP interface
- Tinh nang: Scheduling, daylight harvesting, occupancy-based
- Gia muc tieu: 180-300 USD

Yeu cau:
a) Thiet ke chi tiet cho moi gateway
b) Ma tran tuong thich giao thuc (Protocol Compatibility Matrix)
c) Use case dien hinh cho tung gateway (vi du cu the)

─────────────────────────────────────────────────
PHAN 5: PHAN MEM SCADA/BMS — MekongSCADA PLATFORM
─────────────────────────────────────────────────

Day la PHAN MEM LOI cua toan bo he sinh thai — tuong duong Niagara 
(Honeywell), Desigo CC (Siemens), EcoStruxure Building Operation (Schneider).

5.1. Kien truc phan mem:
a) Dang web-based (HTML5) hay Desktop app? → De xuat Web-based + Edge
b) Database: TimeSeries DB (InfluxDB/TimescaleDB) + SQL (PostgreSQL)
c) Backend: Node.js/Go/Rust? → Phan tich uu nhuoc diem
d) Frontend: React/Vue/Angular? → Phan tich
e) Communication layer: BACnet stack (open-source hoac tu phat trien?)
f) API: REST + GraphQL + WebSocket (real-time)

5.2. Tinh nang chinh:
- Graphic Editor: Drag-and-drop, import floor plan (DWG/SVG/PNG)
- Point Management: Tag-based, hierarchical tree
- Alarm Management: Priority-based, escalation, acknowledgment
- Trend/Historical: High-resolution logging, graph, export CSV/Excel
- Scheduling: Calendar-based, holiday, exception
- Report: Auto-generate PDF/Excel, email notification
- User Management: RBAC (Role-Based Access Control), LDAP/AD integration
- Multi-site: Quan ly nhieu toa nha/nha may tu 1 dashboard
- Mobile App: iOS + Android (React Native/Flutter)
- AI/ML: Predictive maintenance, energy optimization, anomaly detection

5.3. Licensing model:
- Per-point license (tuong tu Niagara)?
- Per-site license?
- SaaS monthly subscription?
- Open-core (mien phi basic, tra phi advanced)?
→ Phan tich moi mo hinh, de xuat mo hinh phu hop cho thi truong VN

5.4. So sanh voi doi thu:

| Tinh nang | MekongSCADA (muc tieu) | Niagara 4 | Desigo CC | EcoStruxure BO |
|---|:---:|:---:|:---:|:---:|
| Web-based | ? | Co | Co | Co |
| BACnet native | ? | Co | Co | Co |
| OPC UA | ? | Co | Co | Co |
| AI/ML tich hop | ? | Khong | Han che | Han che |
| Gia license/point | ? USD | 3-8 USD | 5-12 USD | 4-10 USD |
| Ngon ngu tieng Viet | ? | Khong | Khong | Khong |
| Ho tro thiet bi VN | ? | Khong | Khong | Khong |
| Cloud/SaaS | ? | Add-on | Add-on | Co |

Yeu cau:
a) Dien day du bang so sanh tren
b) Phan tich USP (Unique Selling Proposition) cua MekongSCADA
c) Uoc tinh thoi gian va chi phi phat trien (man-month, USD)
d) Doi ngu phat trien can thiet (bao nhieu nguoi, chuyen mon gi)

─────────────────────────────────────────────────
PHAN 6: ROADMAP SAN PHAM 36 THANG (2026-2028)
─────────────────────────────────────────────────

Viet roadmap chi tiet theo format:

| Giai doan | Thoi gian | San pham | Trang thai | Milestone |
|---|---|---|---|---|
| Phase 0: Foundation | Q1-Q2/2026 | ... | | |
| Phase 1: Core Products | Q3-Q4/2026 | ... | | |
| Phase 2: Expansion | Q1-Q2/2027 | ... | | |
| Phase 3: Software | Q3-Q4/2027 | ... | | |
| Phase 4: Full Ecosystem | Q1-Q4/2028 | ... | | |

Yeu cau:
a) Moi phase: San pham nao, so luong mau (prototype), so luong pilot
b) Phu thuoc (dependency): San pham nao phai xong truoc de lam san pham sau
c) Nguon luc R&D can thiet cho moi phase (so ky su, chi phi)
d) Thoi diem bat dau ban thuong mai (GA — General Availability) cho tung san pham
e) KPI cho moi phase: So luong pilot site, so don hang, doanh thu muc tieu

─────────────────────────────────────────────────
PHAN 7: TAC DONG DEN MO HINH TAI CHINH
─────────────────────────────────────────────────

Viet phan tich anh huong cua he san pham moi den mo hinh tai chinh hien co:

7.1. CAPEX bo sung cho R&D san pham:

| Hang muc | Chi phi (USD) | Ghi chu |
|---|---:|---|
| R&D I/O Modules (MK-EIO series) | ? | Thiet ke PCB, khuon mau, prototype |
| R&D DDC Controllers (MK-DDC series) | ? | Phuc tap hon, can chung nhan BACnet |
| R&D Gateways chuyen dung | ? | Dua tren MK-200, chi phi thap hon |
| Phat trien MekongSCADA software | ? | Doi ngu 10-20 developer, 18-24 thang |
| Chung nhan quoc te (CE, BACnet BTL, UL) | ? | Moi san pham ~20-50K USD |
| Phong Lab kiem thu (Test Lab) | ? | Thiet bi do, mo phong he thong |
| **Tong CAPEX R&D bo sung** | **?** | |

7.2. Revenue bo sung (projection 10 nam):

| San pham | Y1 | Y2 | Y3 | Y5 | Y10 | ASP (USD) |
|---|---:|---:|---:|---:|---:|---:|
| MK-EIO modules | ? | ? | ? | ? | ? | 80-150 |
| MK-DDC controllers | ? | ? | ? | ? | ? | 250-800 |
| MK-GW gateways | ? | ? | ? | ? | ? | 120-350 |
| MekongSCADA license | ? | ? | ? | ? | ? | per-point |
| Service/Maintenance | ? | ? | ? | ? | ? | recurring |
| **Tong Revenue bo sung** | **?** | **?** | **?** | **?** | **?** | |

7.3. Tac dong den NPV, IRR:
- NPV hien tai (base case): 2,78M USD
- NPV sau khi them san pham BMS/SCADA: ?
- IRR hien tai: 14,1% → IRR moi: ?
- Payback period thay doi: ?

Yeu cau:
a) Tinh toan day du cac bang tren
b) Gia dinh ty le tham nhap thi truong BMS VN: 1% Y1 → 5% Y5 → 10% Y10
c) Chi ro [A]/[B]/[C] cho moi so lieu
d) Ket luan: Viec bo sung he san pham BMS/SCADA co lam tang gia tri du an khong?

FORMAT OUTPUT:
- Markdown, co bang chi tiet va so do
- Ngon ngu: Tieng Viet, thuat ngu ky thuat giu tieng Anh
- Nhan du lieu: [A] = Assumed, [B] = Benchmarked, [C] = Calculated
- KHONG dung emoji
- Do dai toi thieu: 3.000 dong

=== KET THUC PROMPT ===
```

---

# PROMPT H: CHUYEN VIEN KIEM TRA — KIEM TRA TINH KHA THI KY THUAT & TAI CHINH

---

```
=== BAT DAU PROMPT ===

BOI CANH:
Ban la Chuyen vien Kiem tra Chat luong Tai lieu Du an (Quality Reviewer), 
co kinh nghiem ra soat ho so du an dau tu cong nghe cao tai Viet Nam.
Ban can kiem tra TINH KHA THI cua viec Mekong Technology bo sung he san pham 
IoT cho BMS/SCADA, dua tren bao cao cua Chuyen gia (Prompt F va G).

DOI TUONG KIEM TRA:
- Bao cao danh gia hien trang (output Prompt F)
- Bao cao thiet ke san pham moi (output Prompt G)
- De an hien co: MEKONG_DE_AN_V2_MASTER.md
- Mo hinh tai chinh: 08_MO_HINH_TAI_CHINH_MO_RONG.md

YEU CAU: Thuc hien kiem tra theo 8 tieu chi duoi day.

─────────────────────────────────────────────────
TIEU CHI 1: TINH NHAT QUAN NOI BO (INTERNAL CONSISTENCY)
─────────────────────────────────────────────────

a) Kiem tra so lieu san pham moi co khop giua:
   - Bang danh muc san pham va phan mo ta chi tiet
   - Thong so ky thuat va gia thanh du kien
   - Revenue projection va quy mo thi truong
b) Kiem tra khong co mau thuan giua san pham moi va san pham hien co
   (VD: MK-DDC-24 co trung chuc nang voi MK-200 khong?)
c) Tong CAPEX R&D bo sung + CAPEX hien co <= Gioi han kha nang huy dong von

→ Output: Bang ke cac diem bat nhat quan (neu co), khuyen nghi sua

─────────────────────────────────────────────────
TIEU CHI 2: TINH KHA THI KY THUAT (TECHNICAL FEASIBILITY)
─────────────────────────────────────────────────

a) Mekong Technology co du nang luc R&D de phat trien 10-15 san pham moi 
   trong 36 thang khong?
   - Doi ngu hien co: bao nhieu ky su embedded/software?
   - Can tuyen them bao nhieu ky su?
   - Co the outsource R&D phan nao duoc (VD: PCB design, firmware porting)?

b) Nha may SMT hien co (Panasonic NPM-D3) co du kha nang san xuat I/O 
   module, DDC controller ngoai Gateway khong?
   - Kich thuoc PCB cac san pham moi co phu hop voi may SMT?
   - Can dau tu them thiet bi san xuat gi khong?

c) Chuoi cung ung linh kien:
   - MCU (STM32, NXP, etc.) co san tai VN/chau A?
   - Lead time linh kien co anh huong timeline khong?
   - Rui ro thieu chip (nhu giai doan 2021-2023) duoc xu ly the nao?

d) Chung nhan quoc te:
   - BACnet BTL Listed: Mat bao lau? Chi phi? Co test lab tai VN khong?
   - CE marking: Tu khai bao hay can test lab chau Au?
   - UL listing: Co can thiet cho thi truong VN khong?

→ Output: Bang danh gia kha thi cho tung san pham (Kha thi / Kha thi co dieu kien / Khong kha thi)

─────────────────────────────────────────────────
TIEU CHI 3: TINH KHA THI TAI CHINH (FINANCIAL FEASIBILITY)
─────────────────────────────────────────────────

a) Tong CAPEX R&D bo sung la bao nhieu? So voi ngan sach R&D hien co 
   (6,01 trieu USD / 10 nam = 601K USD/nam)?
   - Neu vuot ngan sach: Can huy dong von bo sung tu dau?
   - Phuong an: Tang equity / R&D grant tu nha nuoc / Hop tac voi doi tac?

b) Thoi gian hoan von (Payback) cho tung dong san pham:
   - I/O Modules: BOM cost X USD, ASP Y USD → Gross margin Z% → Payback? 
   - DDC Controllers: Tuong tu?
   - MekongSCADA: Chi phi phat trien vs revenue from license → Payback?

c) Thi truong BMS VN co du lon de hap thu san luong du kien?
   - So toa nha moi xay/nam co he thong BMS: ?
   - So nha may co nhu cau nang cap BMS/SCADA: ?
   - Gia tri trung binh 1 du an BMS: ?
   - Doi thu hien chiem bao nhieu % thi truong?

→ Output: Bang NPV-IRR chi cho rieng dong san pham BMS/SCADA

─────────────────────────────────────────────────
TIEU CHI 4: PHU HOP QUY DINH PHAP LY (LEGAL COMPLIANCE)
─────────────────────────────────────────────────

a) Cac san pham BMS/SCADA co nam trong danh muc "San pham cong nghe cao" 
   theo QD 38/2020/QD-TTg khong?
   - IoT Expansion I/O: Thuoc phu luc nao?
   - DDC Controller: Thuoc phu luc nao?
   - Phan mem SCADA: Thuoc phu luc "phan mem ung dung" nao?

b) Chung nhan bat buoc tai VN:
   - QCVN (Quy chuan ky thuat quoc gia) nao ap dung?
   - Kiem dinh an toan dien/dien tu: Co can thiet?
   - Bao hanh/bao tri: Quy dinh toi thieu?

c) Quyen so huu tri tue:
   - Patent cho thiet ke I/O module: Can dang ky?
   - Thuong hieu MekongSCADA: Da dang ky chua?
   - Ma nguon MekongSCADA: Open-source hay proprietary?

→ Output: Checklist phap ly cho tung san pham

─────────────────────────────────────────────────
TIEU CHI 5: PHAN TICH RUI RO SAN PHAM (PRODUCT RISK)
─────────────────────────────────────────────────

Danh gia rui ro theo Risk Matrix (Xac suat x Tac dong):

| TT | Rui ro | Xac suat | Tac dong | Muc do | Giai phap giam thieu |
|---|---|:---:|:---:|:---:|---|
| R1 | San pham khong dat BACnet BTL → Khach hang khong chap nhan | ? | ? | ? | ? |
| R2 | Thoi gian R&D keo dai 2x (36 → 72 thang) → Mat co hoi thi truong | ? | ? | ? | ? |
| R3 | Doi thu (Siemens/Schneider) giam gia → Margin bi ep | ? | ? | ? | ? |
| R4 | Ky su IoT/Embedded o VN thieu → Khong tuyen du nguoi | ? | ? | ? | ? |
| R5 | Khach hang VN chua san sang dung san pham noi dia cho BMS | ? | ? | ? | ? |
| R6 | Chi phi R&D vuot ngan sach → Anh huong cash flow toan du an | ? | ? | ? | ? |
| R7 | Thieu chip/linh kien → Khong san xuat duoc | ? | ? | ? | ? |
| R8 | MekongSCADA phan mem co loi → Mat uy tin | ? | ? | ? | ? |

→ Output: Risk matrix day du voi muc do va bien phap giam thieu cu the

─────────────────────────────────────────────────
TIEU CHI 6: SO SANH QUOC TE (INTERNATIONAL BENCHMARKING)
─────────────────────────────────────────────────

So sanh he san pham de xuat cua Mekong voi cac hang tuong duong:

| Tieu chi | Mekong (muc tieu) | Siemens | Schneider | Honeywell | Delta |
|---|---|---|---|---|---|
| So luong san pham IoT/BMS | ? | 200+ | 150+ | 100+ | 80+ |
| Nha may SX tai ASEAN | KCNC TPHCM | Khong (EU) | Thailand | Khong (US) | Dai Loan |
| Chung nhan BACnet BTL | Muc tieu | Co | Co | Co | Co |
| AI/Edge Computing | Co (MK-300) | Han che | Han che | Han che | Khong |
| Gia thanh (index) | 100 (base) | 250-400 | 200-350 | 200-300 | 120-180 |
| Ho tro tieng Viet | 100% | 0% | 0% | 0% | 30% |
| Ecosystem completeness | ?% | 95% | 90% | 85% | 60% |

→ Output: Bang so sanh day du + nhan xet Mekong co the canh tranh o phan khuc nao

─────────────────────────────────────────────────
TIEU CHI 7: DANH GIA TAC DONG DEN DE AN TONG THE
─────────────────────────────────────────────────

a) Viec bo sung he san pham BMS/SCADA co lam THAY DOI ban chat du an 
   da nop cho BQL KCNC khong?
   - Neu co: Can sua Mau 1.4? Can nop bo sung?
   - Neu khong: Chi can bo sung phu luc?

b) Anh huong den timeline du an tong the:
   - Phase 1 (2025-2029): Co bi tre do them R&D?
   - Phase 2 (2030-2035): Co bi anh huong?

c) Anh huong den nhan su:
   - Can tuyen them bao nhieu nguoi cho R&D BMS/SCADA?
   - Tong nhan su du an thay doi: 190-270 → ?

d) Anh huong den cau truc von:
   - Can them von cho R&D: ? trieu USD
   - Phuong an huy dong: Equity/Debt/Grant?

→ Output: Bang tom tat tac dong + khuyen nghi hanh dong

─────────────────────────────────────────────────
TIEU CHI 8: KET LUAN VA KHUYEN NGHI
─────────────────────────────────────────────────

Dua tren 7 tieu chi tren, dua ra:

a) KET LUAN TONG THE:
   - Co nen bo sung he san pham BMS/SCADA vao de an khong? (CO/KHONG/CO DIEU KIEN)
   - Neu CO DIEU KIEN: Dieu kien cu the la gi?

b) XUAT PHAT DIEM (STARTING POINT):
   - Bat dau tu san pham nao truoc?
   - Bo san pham nao (neu co)?
   - Thu tu uu tien?

c) KHUYEN NGHI HANH DONG (3 buoc tiep theo):
   - Buoc 1: ...
   - Buoc 2: ...
   - Buoc 3: ...

FORMAT OUTPUT:
- Markdown, co bang kiem tra chi tiet
- Ngon ngu: Tieng Viet, thuat ngu ky thuat giu tieng Anh
- Nhan du lieu: [A] = Assumed, [B] = Benchmarked, [C] = Calculated
- KHONG dung emoji
- Phan biet ro: NHAN XET (cua chuyen vien) vs SU THAT (tu tai lieu)
- Do dai toi thieu: 2.000 dong

=== KET THUC PROMPT ===
```

---

# HUONG DAN SU DUNG 3 PROMPT

## Thu tu thuc hien:

```
PROMPT F (Danh gia hien trang)
    ↓ output lam input cho
PROMPT G (Thiet ke san pham moi)
    ↓ output lam input cho  
PROMPT H (Kiem tra kha thi)
    ↓ output cuoi cung
    → Cap nhat de an (MEKONG_DE_AN_V2_MASTER.md)
    → Cap nhat tai chinh (08_MO_HINH_TAI_CHINH_MO_RONG.md)
    → Cap nhat Mau 1.4 (neu can)
```

## Luu y quan trong:

1. **KHONG lam tat**: Khong gop 3 prompt thanh 1 — moi prompt can chuyen gia KHAC NHAU
2. **Doc TOAN BO tai lieu goc** truoc khi viet — khong duoc doc 200 dong roi ngung
3. **So lieu phai nhat quan**: Moi so lieu tao ra phai khop voi so lieu da co trong de an
4. **Gia muc tieu san pham** phai dua tren benchmark thuc te (Siemens, Schneider catalog)
5. **Khong viet chung chung**: Moi san pham phai co thong so ky thuat CU THE, CO THE SAN XUAT DUOC
6. **Quy uoc nhan du lieu**: [A] Assumed / [B] Benchmarked / [C] Calculated — ap dung cho TAT CA so lieu

---

*Ngay tao: 09/03/2026*
*Lien quan: PROMPT_YEU_CAU_CHUYEN_GIA_V2.md (Prompt A-E)*
*Du an: Mekong Technology Hub — KCNC TP.HCM*
