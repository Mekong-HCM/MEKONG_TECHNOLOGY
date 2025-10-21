11. BIỂU ĐỒ, BẢNG, SƠ ĐỒ (PHỤ LỤC) [DRAFT]

11.1 Phạm vi và mục tiêu
- Mục đích: Tổng hợp các biểu đồ, bảng, sơ đồ phụ lục theo Mẫu 1.4, bao gồm Mermaid diagrams và tài liệu bổ sung.
- Nguyên tắc: tiếng Việt chuẩn; đơn vị triệu USD (Q4/2025); sơ đồ Mermaid; "Cập nhật so với V5" khi chênh lệch.
- Nguồn: `MEKONG_DE_AN_V6.md`, đối chiếu `mekong_dean_v5.md`, bổ sung từ yêu cầu trình bày.

11.2 Sơ đồ tổ chức dự án

11.2.1 Sơ đồ tổ chức R&D
```mermaid
flowchart TB
  HĐQT[HĐQT] --> TGĐ[TGĐ]
  TGĐ --> CTO[CTO]
  CTO --> RD_Director[R&D Director]
  RD_Director --> IoT_Lab[IoT Lab]
  RD_Director --> AMR_Lab[AMR Lab]
  RD_Director --> OHT_Lab[OHT Lab]
  RD_Director --> AI_Lab[AI Lab]
  RD_Director --> SW_Lab[SW Lab]
```

11.2.2 Sơ đồ quy trình ra quyết định
```mermaid
flowchart LR
  D1[Vận hành hàng ngày] --> D2[Chiến thuật]
  D2 --> D3[Chiến lược]
  D3 --> D4[Cấp cao]
```

11.2.3 Sơ đồ tổ chức sản xuất
```mermaid
flowchart TB
  CEO[CEO] --> CTO[CTO]
  CEO --> COO[COO]
  CEO --> CMO[CMO]
  
  CTO --> RD[R&D Director]
  CTO --> ENG[Engineering Director]
  
  COO --> PROD[Production Director]
  COO --> QUAL[Quality Director]
  COO --> LOG[Logistics Director]
  
  CMO --> SALES[Sales Director]
  CMO --> MKT[Marketing Director]
  
  RD --> IOT_LAB[IoT Lab]
  RD --> ROBOT_LAB[Robotics Lab]
  RD --> AI_LAB[AI/ML Lab]
  
  PROD --> IOT_PROD[IoT Production]
  PROD --> ROBOT_PROD[Robotics Production]
  PROD --> SW_PROD[Software Production]
```

11.3 Sơ đồ quy trình sản xuất

11.3.1 Sơ đồ quy trình sản xuất tổng thể
```mermaid
flowchart LR
  DESIGN[Thiết kế] --> PROC[Lập trình] --> SMT[SMT] --> ASSY[Lắp ráp] --> TEST[Kiểm thử] --> PACK[Đóng gói]
  
  DESIGN --> CAD[CAD/CAM]
  PROC --> CODE[Code Generation]
  SMT --> REFLOW[Reflow Soldering]
  ASSY --> MECH[Mechanical Assembly]
  TEST --> QUAL[Quality Control]
  PACK --> LOG[Logistics]
```

11.3.2 Sơ đồ quy trình AOI/ICT/Burn-in
```mermaid
flowchart LR
  SMT[SMT/Lắp ráp] --> AOI[AOI kiểm tra quang học]
  AOI -->|Đạt| ICT[ICT kiểm tra mạch]
  AOI -->|Không đạt| REWORK1[Tái công đoạn]
  ICT -->|Đạt| PROG[Nạp firmware/Bootloader]
  ICT -->|Không đạt| REWORK2[Khắc phục lỗi điện]
  PROG --> BURN[Burn-in 8–24h]
  BURN -->|Đạt| FQC[Kiểm tra cuối]
  BURN -->|Không đạt| REWORK3[Phân tích lỗi nhiệt/ổn định]
  FQC --> PACK[Đóng gói & Xuất xưởng]
```

11.3.3 Sơ đồ quy trình R&D
```mermaid
flowchart LR
  MKT[Khảo sát thị trường] --> SPEC[Đặc tả yêu cầu]
  SPEC --> DEV[Phát triển nguyên mẫu]
  DEV --> TEST[Kiểm thử AOI/ICT/Burn-in]
  TEST --> PILOT[Sản xuất thử]
  PILOT --> LAUNCH[Thương mại hóa]
  
  MKT --> |"6-12 tháng"| SPEC
  SPEC --> |"12-18 tháng"| DEV
  DEV --> |"6-9 tháng"| TEST
  TEST --> |"3-6 tháng"| PILOT
  PILOT --> |"3-6 tháng"| LAUNCH
```

11.4 Sơ đồ lộ trình sản phẩm

11.4.1 Lộ trình sản phẩm (Gantt)
```mermaid
gantt
  title Lộ trình sản phẩm (2025–2030)
  dateFormat  YYYY-MM
  section IoT Gateway
  MK-100       :done,    des1, 2025-01, 2026-06
  MK-200       :active,  des2, 2026-07, 2027-12
  MK-300       :         des3, 2028-01, 2030-06
  section AMR
  AMR-100      :done,    des4, 2026-01, 2027-12
  AMR-500      :active,  des5, 2028-01, 2028-12
  AMR-1000     :         des6, 2029-01, 2030-12
  section AGV
  AGV-200      :done,    des7, 2027-01, 2028-12
  AGV-500      :active,  des8, 2028-01, 2029-12
  AGV-1000     :         des9, 2029-01, 2030-12
  section OHT
  OHT-50       :done,    des10, 2027-01, 2028-12
  OHT-100      :active,  des11, 2028-01, 2029-12
  OHT-200      :         des12, 2029-01, 2030-12
```

11.4.2 Lộ trình chuyển giao công nghệ (Gantt)
```mermaid
gantt
  title Lộ trình chuyển giao công nghệ (2025–2030)
  dateFormat  YYYY-MM
  section KUKA Robotics
  Đàm phán       :done,    neg1, 2025-01, 2025-06
  Chuyển giao    :active,  trans1, 2025-07, 2026-12
  section Tuya Smart
  Đàm phán       :done,    neg2, 2025-01, 2025-03
  Chuyển giao    :active,  trans2, 2025-04, 2025-12
  section DALY
  Đàm phán       :done,    neg3, 2025-01, 2025-03
  Chuyển giao    :active,  trans3, 2025-04, 2025-12
  section Hikvision
  Đàm phán       :active,  neg4, 2025-01, 2025-06
  Chuyển giao    :         trans4, 2025-07, 2026-12
  section Tohin Corp
  Đàm phán       :done,    neg5, 2025-01, 2025-02
  Chuyển giao    :active,  trans5, 2025-03, 2025-12
```

11.4.3 Lộ trình xuất khẩu (Gantt)
```mermaid
gantt
  title Lộ trình xuất khẩu (2025–2030)
  dateFormat  YYYY-MM
  section Thái Lan
  Khảo sát thị trường    :done,    survey1, 2025-01, 2025-06
  Thiết lập kênh phân phối :active,  channel1, 2025-07, 2025-12
  Bắt đầu xuất khẩu      :         export1, 2026-01, 2030-12
  section Malaysia
  Khảo sát thị trường    :done,    survey2, 2025-01, 2025-06
  Thiết lập kênh phân phối :active,  channel2, 2025-07, 2025-12
  Bắt đầu xuất khẩu      :         export2, 2026-01, 2030-12
  section Singapore
  Khảo sát thị trường    :done,    survey3, 2025-01, 2025-06
  Thiết lập kênh phân phối :active,  channel3, 2025-07, 2025-12
  Bắt đầu xuất khẩu      :         export3, 2026-01, 2030-12
  section Indonesia
  Khảo sát thị trường    :active,  survey4, 2025-01, 2025-06
  Thiết lập kênh phân phối :         channel4, 2025-07, 2025-12
  Bắt đầu xuất khẩu      :         export4, 2026-01, 2030-12
  section Philippines
  Khảo sát thị trường    :active,  survey5, 2025-01, 2025-06
  Thiết lập kênh phân phối :         channel5, 2025-07, 2025-12
  Bắt đầu xuất khẩu      :         export5, 2026-01, 2030-12
```

11.4.4 Lộ trình tuyển dụng (Gantt)
```mermaid
gantt
  title Lộ trình tuyển dụng (2025–2030)
  dateFormat  YYYY-MM
  section 2025
  Tuyển dụng R&D      :done,    hire1, 2025-01, 2025-12
  Tuyển dụng Sản xuất :active,  hire2, 2025-01, 2025-12
  section 2026
  Tuyển dụng Kinh doanh :         hire3, 2026-01, 2026-12
  Tuyển dụng Chất lượng :         hire4, 2026-01, 2026-12
  section 2027
  Tuyển dụng IT       :         hire5, 2027-01, 2027-12
  Tuyển dụng Hành chính :         hire6, 2027-01, 2027-12
  section 2028
  Tuyển dụng Tài chính :         hire7, 2028-01, 2028-12
  Tuyển dụng Quản lý   :         hire8, 2028-01, 2028-12
  section 2029
  Tuyển dụng bổ sung   :         hire9, 2029-01, 2029-12
  section 2030-2035
  Tuyển dụng mở rộng   :         hire10, 2030-01, 2035-12
```

11.4.5 Lộ trình đóng góp thuế (Gantt)
```mermaid
gantt
  title Lộ trình đóng góp thuế (2025–2030)
  dateFormat  YYYY-MM
  section 2025-2029
  Thuế thu nhập doanh nghiệp :done,    tax1, 2025-01, 2029-12
  Thuế giá trị gia tăng      :active,  tax2, 2025-01, 2029-12
  Thuế xuất khẩu            :         tax3, 2025-01, 2029-12
  Thuế nhập khẩu            :         tax4, 2025-01, 2029-12
  Thuế tài nguyên           :         tax5, 2025-01, 2029-12
  Thuế môi trường           :         tax6, 2025-01, 2029-12
  Thuế khác                 :         tax7, 2025-01, 2029-12
  section 2030-2035
  Tăng đóng góp thuế        :         tax8, 2030-01, 2035-12
```

11.4.6 Lộ trình nội địa hóa (Gantt)
```mermaid
gantt
  title Lộ trình nội địa hóa (2025–2030)
  dateFormat  YYYY-MM
  section Nguyên vật liệu chính
  Nội địa hóa 70%       :done,    local1, 2025-01, 2030-12
  section Linh kiện điện tử
  Nội địa hóa 60%       :active,  local2, 2025-01, 2030-12
  section Linh kiện cơ khí
  Nội địa hóa 80%       :         local3, 2025-01, 2030-12
  section Linh kiện điện
  Nội địa hóa 75%       :         local4, 2025-01, 2030-12
  section Linh kiện quang học
  Nội địa hóa 50%       :         local5, 2025-01, 2030-12
  section Linh kiện cảm biến
  Nội địa hóa 55%       :         local6, 2025-01, 2030-12
  section Linh kiện truyền thông
  Nội địa hóa 65%       :         local7, 2025-01, 2030-12
  section Linh kiện phụ trợ
  Nội địa hóa 85%       :         local8, 2025-01, 2030-12
```

11.5 Sơ đồ phân tích thị trường

11.5.1 Sơ đồ phân tích thị trường
```mermaid
flowchart TB
  GLOBAL[Thị trường toàn cầu] --> ASEAN[Thị trường ASEAN]
  GLOBAL --> VN[Thị trường Việt Nam]
  
  ASEAN --> IoT_ASEAN[IoT ASEAN<br/>58.900 triệu USD<br/>CAGR 21,1%]
  ASEAN --> AMR_ASEAN[AMR ASEAN<br/>Cơ hội xuất khẩu<br/>35% doanh thu]
  
  VN --> IoT_VN[IoT Việt Nam<br/>8.500 triệu USD<br/>CAGR 26,2%]
  VN --> AMR_VN[AMR Việt Nam<br/>1.200 triệu USD<br/>CAGR 35,0%]
  VN --> AGV_VN[AGV Việt Nam<br/>850 triệu USD<br/>CAGR 32,1%]
  
  IoT_VN --> TARGET[Thị phần mục tiêu<br/>IoT: 8%<br/>AMR: 5%]
  AMR_VN --> TARGET
  AGV_VN --> TARGET
```

11.5.2 Sơ đồ phân loại sản phẩm
```mermaid
flowchart TB
  PROD[Sản phẩm Mekong] --> IOT[IoT Gateway]
  PROD --> ROBOT[Robot AMR/AGV]
  PROD --> OHT[OHT Systems]
  PROD --> MODULE[Module truyền thông]
  PROD --> SENSOR[Cảm biến IoT]
  PROD --> SW[Nền tảng phần mềm]
  
  IOT --> MK100[MK-100 Basic]
  IOT --> MK200[MK-200 Pro]
  IOT --> MK300[MK-300 Enterprise]
  
  ROBOT --> AMR100[AMR-100]
  ROBOT --> AMR500[AMR-500]
  ROBOT --> AGV200[AGV-200]
  ROBOT --> AGV500[AGV-500]
  
  OHT --> OHT50[OHT-50]
  OHT --> OHT100[OHT-100]
  OHT --> OHT200[OHT-200]
  
  MODULE --> RS485[RS485 to Ethernet]
  MODULE --> MODBUS[Modbus RTU to TCP]
  MODULE --> PROFINET[Profinet to Ethernet]
  MODULE --> CAN[CAN bus to Ethernet]
  
  SENSOR --> ENV[Cảm biến môi trường]
  SENSOR --> IND[Cảm biến công nghiệp]
  SENSOR --> SMART[Cảm biến thông minh]
  
  SW --> ERP[Mekong ERP]
  SW --> MES[Mekong MES]
  SW --> WMS[Mekong WMS]
  SW --> IOTPLAT[Mekong IoT Platform]
```

11.6 Sơ đồ năng lực triển khai

11.6.1 Sơ đồ năng lực tổng thể
```mermaid
flowchart TB
  CAP[Năng lực triển khai] --> FIN[Năng lực tài chính]
  CAP --> TECH[Năng lực kỹ thuật]
  CAP --> MKT[Năng lực thị trường]
  
  FIN --> VON[Vốn 20 triệu USD]
  FIN --> COC[Cơ cấu vốn 60-30-10]
  FIN --> BAO[Bảo lãnh ngân hàng]
  
  TECH --> RD[Đội ngũ R&D 26 người]
  TECH --> CS[Cơ sở vật chất 6.200 m²]
  TECH --> TB[Thiết bị kỹ thuật 0,64 triệu USD]
  TECH --> DT[Đối tác công nghệ 7 đối tác]
  
  MKT --> KH[Khách hàng 2.500 doanh nghiệp]
  MKT --> PP[Đối tác phân phối 5 khu vực]
  MKT --> XK[Kinh nghiệm xuất khẩu 1,25 triệu USD]
  MKT --> CC[Chứng chỉ 6 loại]
```

11.6.2 Sơ đồ tổng quan công nghệ
```mermaid
flowchart TB
  TECH[Công nghệ Mekong] --> IOT_TECH[IoT Technology]
  TECH --> ROBOT_TECH[Robotics Technology]
  TECH --> SW_TECH[Software Technology]
  
  IOT_TECH --> ARM[ARM Architecture]
  IOT_TECH --> EDGE[Edge Computing]
  IOT_TECH --> PROTO[Industrial Protocols]
  
  ROBOT_TECH --> SLAM[SLAM Navigation]
  ROBOT_TECH --> AI[AI/ML Integration]
  ROBOT_TECH --> SENSOR[Sensor Fusion]
  
  SW_TECH --> PLATFORM[IoT Platform]
  SW_TECH --> ERP[Mekong ERP]
  SW_TECH --> MES[Mekong MES]
  SW_TECH --> WMS[Mekong WMS]
  
  ARM --> CORTEX[Cortex-A55/A78/X3]
  EDGE --> AI_EDGE[Edge AI]
  PROTO --> MQTT[MQTT/OPC UA/Modbus/CAN]
  
  SLAM --> LIDAR[LiDAR Navigation]
  AI --> CV[Computer Vision]
  SENSOR --> MULTI[Multi-sensor Fusion]
```

11.7 Sơ đồ chuỗi cung ứng

11.7.1 Sơ đồ chuỗi cung ứng tổng thể
```mermaid
flowchart TB
  SUPPLY[Chuỗi cung ứng] --> DOMESTIC[Nguồn trong nước]
  SUPPLY --> INTERNATIONAL[Nguồn quốc tế]
  
  DOMESTIC --> STEEL[Thép Hòa Phát]
  DOMESTIC --> ALUMINUM[Nhôm Đông Á]
  DOMESTIC --> COPPER[Đồng Hải Phòng]
  DOMESTIC --> PLASTIC[Nhựa Đồng Nai]
  DOMESTIC --> PCB[PCB Việt Nam]
  
  INTERNATIONAL --> JAPAN[Nhật Bản]
  INTERNATIONAL --> KOREA[Hàn Quốc]
  INTERNATIONAL --> CHINA[Trung Quốc]
  INTERNATIONAL --> GERMANY[Đức]
  INTERNATIONAL --> USA[Mỹ]
  INTERNATIONAL --> TAIWAN[Đài Loan]
  
  JAPAN --> ARM[ARM Holdings]
  KOREA --> SAMSUNG[Samsung]
  CHINA --> QUECTEL[Quectel]
  GERMANY --> BOSCH[Bosch]
  USA --> QUALCOMM[Qualcomm]
  TAIWAN --> MEDIATEK[MediaTek]
```

11.7.2 Sơ đồ quy trình mua sắm
```mermaid
flowchart LR
  PLAN[Lập kế hoạch] --> SOURCE[Tìm nguồn cung] --> NEGOTIATE[Đàm phán] --> ORDER[Đặt hàng] --> RECEIVE[Nhận hàng] --> INSPECT[Kiểm tra] --> STORE[Lưu kho] --> USE[Sử dụng]
  
  PLAN --> |"Dự báo nhu cầu"| SOURCE
  SOURCE --> |"Đánh giá nhà cung cấp"| NEGOTIATE
  NEGOTIATE --> |"Thỏa thuận giá cả"| ORDER
  ORDER --> |"Theo dõi giao hàng"| RECEIVE
  RECEIVE --> |"Kiểm tra chất lượng"| INSPECT
  INSPECT --> |"Lưu trữ an toàn"| STORE
  STORE --> |"Phát hàng sản xuất"| USE
```

11.8 Sơ đồ bố trí máy móc thiết bị

11.8.1 Sơ đồ tổng quan bố trí thiết bị
```mermaid
flowchart TB
  FACTORY[Nhà máy Mekong] --> IOT_AREA[Khu vực IoT Gateway]
  FACTORY --> ROBOT_AREA[Khu vực Robot AMR/AGV]
  FACTORY --> OHT_AREA[Khu vực OHT]
  FACTORY --> RD_AREA[Khu vực R&D]
  FACTORY --> IT_AREA[Khu vực IT]
  
  IOT_AREA --> SMT1[SMT Line 1]
  IOT_AREA --> SMT2[SMT Line 2]
  IOT_AREA --> REFLOW[Lò hàn lạnh]
  IOT_AREA --> ASSY[Dây chuyền lắp ráp]
  IOT_AREA --> TEST[Thiết bị kiểm tra]
  
  ROBOT_AREA --> WELD[Trạm hàn khung]
  ROBOT_AREA --> DRIVE[Trạm lắp ráp truyền động]
  ROBOT_AREA --> ELECTRONICS[Trạm tích hợp điện tử]
  ROBOT_AREA --> SENSOR[Trạm tích hợp cảm biến]
  ROBOT_AREA --> FINAL[Trạm kiểm tra cuối]
  
  OHT_AREA --> RAIL[Khung rail]
  OHT_AREA --> HOIST[Hệ thống nâng]
  OHT_AREA --> CONTROL[Hệ thống điều khiển]
  
  RD_AREA --> LAB1[Phòng thí nghiệm IoT]
  RD_AREA --> LAB2[Phòng thí nghiệm Robotics]
  RD_AREA --> LAB3[Phòng thí nghiệm AI/ML]
  
  IT_AREA --> ERP_SYS[Hệ thống ERP]
  IT_AREA --> MES_SYS[Hệ thống MES]
  IT_AREA --> WMS_SYS[Hệ thống WMS]
  IT_AREA --> IOT_SYS[Hệ thống IoT Platform]
```

11.9 Sơ đồ tổ chức nhân sự

11.9.1 Sơ đồ tổ chức R&D
```mermaid
flowchart TB
  RD_DIR[R&D Director] --> IOT_LAB[IoT Gateway Lab<br/>9 người]
  RD_DIR --> ROBOT_LAB[Robotics Lab<br/>12 người]
  RD_DIR --> AI_LAB[AI/ML Lab<br/>8 người]
  RD_DIR --> SW_LAB[Software Lab<br/>9 người]
  RD_DIR --> OHT_LAB[OHT Lab<br/>5 người]
  
  IOT_LAB --> IOT_LEAD[Trưởng phòng IoT<br/>Thạc sĩ, 10+ năm]
  ROBOT_LAB --> ROBOT_LEAD[Trưởng phòng Robotics<br/>Thạc sĩ, 12+ năm]
  AI_LAB --> AI_LEAD[Trưởng phòng AI/ML<br/>Thạc sĩ, 8+ năm]
  SW_LAB --> SW_LEAD[Trưởng phòng Software<br/>Thạc sĩ, 9+ năm]
  OHT_LAB --> OHT_LEAD[Trưởng phòng OHT<br/>Thạc sĩ, 7+ năm]
```

11.9.2 Sơ đồ tổ chức sản xuất
```mermaid
flowchart TB
  PROD_DIR[Production Director] --> SMT_LINE[SMT Line<br/>15 người]
  PROD_DIR --> IOT_ASSY[IoT Assembly<br/>20 người]
  PROD_DIR --> ROBOT_ASSY[Robot Assembly<br/>25 người]
  PROD_DIR --> QA_QC[QA/QC<br/>12 người]
  PROD_DIR --> MAINTENANCE[Maintenance<br/>8 người]
  
  SMT_LINE --> SMT_LEAD[Trưởng dây chuyền SMT<br/>Thạc sĩ, 8+ năm]
  IOT_ASSY --> IOT_LEAD[Trưởng dây chuyền IoT<br/>Đại học, 6+ năm]
  ROBOT_ASSY --> ROBOT_LEAD[Trưởng dây chuyền Robot<br/>Thạc sĩ, 7+ năm]
  QA_QC --> QA_LEAD[Trưởng phòng QA/QC<br/>Thạc sĩ, 10+ năm]
  MAINTENANCE --> MAINT_LEAD[Trưởng phòng Bảo trì<br/>Đại học, 12+ năm]
```

11.10 Sơ đồ hệ thống quản lý

11.10.1 Sơ đồ tổ chức chất lượng
```mermaid
flowchart TB
  QM[Quality Manager] --> QA[Quality Assurance]
  QM --> QC[Quality Control]
  QM --> QE[Quality Engineering]
  
  QA --> DOC[Document Control]
  QA --> AUDIT[Internal Audit]
  QA --> CAPA[CAPA Management]
  
  QC --> INCOMING[Incoming Inspection]
  QC --> INPROCESS[In-process Inspection]
  QC --> FINAL[Final Inspection]
  
  QE --> DFM[Design for Manufacturing]
  QE --> SPC[Statistical Process Control]
  QE --> FMEA[Failure Mode Analysis]
```

11.10.2 Sơ đồ tổ chức môi trường
```mermaid
flowchart TB
  EM[Environmental Manager] --> WASTE[Waste Management]
  EM --> ENERGY[Energy Management]
  EM --> EMISSION[Emission Control]
  
  WASTE --> SOLID[Solid Waste]
  WASTE --> LIQUID[Liquid Waste]
  WASTE --> HAZARDOUS[Hazardous Waste]
  
  ENERGY --> ELECTRICITY[Electricity]
  ENERGY --> RENEWABLE[Renewable Energy]
  ENERGY --> EFFICIENCY[Energy Efficiency]
  
  EMISSION --> AIR[Air Emissions]
  EMISSION --> WATER[Water Discharge]
  EMISSION --> NOISE[Noise Control]
```

11.11 Sơ đồ các nội dung thu hút đầu tư

11.11.1 Sơ đồ các nội dung thu hút đầu tư
```mermaid
flowchart TB
  INVEST[Thu hút đầu tư] --> TECH[Chuyển giao công nghệ]
  INVEST --> TRAIN[Đào tạo nhân lực]
  INVEST --> RD[Nghiên cứu và phát triển]
  INVEST --> EXPORT[Xuất khẩu sản phẩm]
  INVEST --> JOB[Tạo việc làm]
  INVEST --> TAX[Đóng góp thuế]
  INVEST --> INDUSTRY[Phát triển ngành]
  INVEST --> LOCAL[Nội địa hóa]
  INVEST --> ENV[Bảo vệ môi trường]
  INVEST --> SAFETY[An toàn lao động]
  
  TECH --> KUKA[KUKA Robotics]
  TECH --> TUYA[Tuya Smart]
  TECH --> DALY[DALY]
  TECH --> HIKVISION[Hikvision]
  TECH --> TOHIN[Tohin Corp]
  
  TRAIN --> UNI[Đại học]
  TRAIN --> INST[Viện nghiên cứu]
  TRAIN --> COMPANY[Công ty đối tác]
  
  RD --> IOT[IoT Gateway]
  RD --> ROBOT[Robot AMR/AGV]
  RD --> AI[AI/ML]
  RD --> SW[Software Platform]
  RD --> OHT[OHT Systems]
  
  EXPORT --> ASEAN[ASEAN]
  EXPORT --> GLOBAL[Toàn cầu]
  
  JOB --> HIGH[Việc làm chất lượng cao]
  JOB --> SKILL[Việc làm có tay nghề]
  
  TAX --> CORPORATE[Thuế doanh nghiệp]
  TAX --> VAT[Thuế VAT]
  TAX --> EXPORT_TAX[Thuế xuất khẩu]
  TAX --> IMPORT_TAX[Thuế nhập khẩu]
  
  INDUSTRY --> ASSOCIATION[Hiệp hội]
  INDUSTRY --> CONFERENCE[Hội nghị]
  INDUSTRY --> COOPERATION[Hợp tác]
  
  LOCAL --> MATERIAL[Nguyên vật liệu]
  LOCAL --> COMPONENT[Linh kiện]
  LOCAL --> SUPPLIER[Nhà cung cấp]
  
  ENV --> SOLAR[Năng lượng mặt trời]
  ENV --> WASTE[Xử lý chất thải]
  ENV --> RECYCLE[Tái chế]
  ENV --> EMISSION[Giảm khí thải]
  
  SAFETY --> TRAINING[Đào tạo an toàn]
  SAFETY --> EQUIPMENT[Trang thiết bị bảo hộ]
  SAFETY --> SYSTEM[Hệ thống cảnh báo]
  SAFETY --> INSPECTION[Kiểm tra an toàn]
```

11.12 Sơ đồ tổ chức liên hệ

11.12.1 Sơ đồ tổ chức liên hệ
```mermaid
flowchart TB
  CEO[Tổng giám đốc] --> DEPUTY[Phó tổng giám đốc]
  CEO --> RD_DIR[Giám đốc R&D]
  CEO --> PROD_DIR[Giám đốc Sản xuất]
  CEO --> SALES_DIR[Giám đốc Kinh doanh]
  
  DEPUTY --> ADMIN[Phòng Hành chính]
  DEPUTY --> FINANCE[Phòng Tài chính]
  DEPUTY --> QUALITY[Phòng Chất lượng]
  DEPUTY --> IT[Phòng IT]
  
  RD_DIR --> IOT_LAB[Phòng thí nghiệm IoT]
  RD_DIR --> ROBOT_LAB[Phòng thí nghiệm Robot]
  RD_DIR --> AI_LAB[Phòng thí nghiệm AI/ML]
  RD_DIR --> SW_LAB[Phòng thí nghiệm Software]
  RD_DIR --> OHT_LAB[Phòng thí nghiệm OHT]
  
  PROD_DIR --> SMT_LINE[Dây chuyền SMT]
  PROD_DIR --> IOT_ASSY[Dây chuyền lắp ráp IoT]
  PROD_DIR --> ROBOT_ASSY[Dây chuyền lắp ráp Robot]
  PROD_DIR --> QA_QC[QA/QC]
  PROD_DIR --> MAINTENANCE[Bảo trì]
  
  SALES_DIR --> DOMESTIC[Thị trường trong nước]
  SALES_DIR --> EXPORT[Thị trường xuất khẩu]
  SALES_DIR --> PARTNER[Đối tác phân phối]
  SALES_DIR --> CUSTOMER[Khách hàng]
```

11.13 Sơ đồ quy trình quản lý

11.13.1 Sơ đồ quy trình quản lý chất lượng
```mermaid
flowchart LR
  PLAN[Plan] --> DO[Do] --> CHECK[Check] --> ACT[Act]
  
  PLAN --> |"Lập kế hoạch chất lượng"| DO
  DO --> |"Thực hiện sản xuất"| CHECK
  CHECK --> |"Kiểm tra chất lượng"| ACT
  ACT --> |"Cải tiến liên tục"| PLAN
```

11.13.2 Sơ đồ quy trình quản lý môi trường
```mermaid
flowchart LR
  ASSESS[Environmental Assessment] --> PLAN[Environmental Plan] --> IMPLEMENT[Implementation] --> MONITOR[Monitoring] --> IMPROVE[Improvement]
  
  ASSESS --> |"Đánh giá tác động môi trường"| PLAN
  PLAN --> |"Lập kế hoạch bảo vệ môi trường"| IMPLEMENT
  IMPLEMENT --> |"Thực hiện các biện pháp"| MONITOR
  MONITOR --> |"Giám sát và đo lường"| IMPROVE
  IMPROVE --> |"Cải tiến liên tục"| ASSESS
```

11.14 Sơ đồ bảo mật thông tin

11.14.1 Sơ đồ khung bảo mật tổng thể
```mermaid
flowchart TB
  SEC[Khung bảo mật tổng thể] --> ENC[Mã hóa đầu cuối]
  SEC --> AUTH[Xác thực đa yếu tố]
  SEC --> OTA[Cập nhật OTA an toàn]
  SEC --> ZT[Kiến trúc Zero-Trust]
  
  ENC --> AES[AES-256]
  ENC --> RSA[RSA-2048]
  ENC --> ECC[ECC P-256]
  
  AUTH --> MFA[MFA]
  AUTH --> BIO[Sinh trắc học]
  AUTH --> CERT[Chứng chỉ số]
  
  OTA --> SIG[Ký số]
  OTA --> ROLL[Rollback]
  OTA --> VER[Kiểm tra tính toàn vẹn]
  
  ZT --> VERIFY[Xác minh liên tục]
  ZT --> MIN[Quyền tối thiểu]
  ZT --> LOG[Ghi nhật ký audit]
```

11.15 Ghi chú và trạng thái
- Trạng thái: [DRAFT]
- Phiên bản: 2025-10-20
- Người biên soạn: (điền)
- Thay đổi "Cập nhật so với V5": đã ghi tại các dòng có chênh lệch
- Liên kết chéo: Tất cả các phần từ 1-10
