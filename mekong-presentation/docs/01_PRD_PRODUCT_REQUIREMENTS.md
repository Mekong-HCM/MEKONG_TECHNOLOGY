# TAI LIEU YEU CAU SAN PHAM (PRD)
# MEKONG TECHNOLOGY HUB — WEB PRESENTATION

**Phien ban**: 2.0  
**Ngay**: 2025-01-20  
**Trang thai**: PRODUCTION READY  

---

## MUC LUC

1. [Tong quan Du an](#1-tong-quan-du-an)
2. [Muc tieu San pham](#2-muc-tieu-san-pham)
3. [Doi tuong Su dung](#3-doi-tuong-su-dung)
4. [Yeu cau Chuc nang](#4-yeu-cau-chuc-nang)
5. [Yeu cau Phi chuc nang](#5-yeu-cau-phi-chuc-nang)
6. [Cau truc Slide / Section](#6-cau-truc-slide--section)
7. [Rang buoc Thiet ke](#7-rang-buoc-thiet-ke)
8. [Chi so Do luong Thanh cong](#8-chi-so-do-luong-thanh-cong)
9. [Pham vi Ngoai (Out of Scope)](#9-pham-vi-ngoai-out-of-scope)
10. [Rui ro va Giai phap](#10-rui-ro-va-giai-phap)

---

## 1. TONG QUAN DU AN

### 1.1 Boi canh

Cong ty TNHH Mekong Technology dang trinh de an dau tu **Mekong Technology Hub** tai Lo E2-03, KCNC TP.HCM voi tong von 47,50M USD trong 15 nam (5 giai doan). Du an tich hop 3 tru cot cong nghe: IoT/Robot, CNC Sieu chinh xac, va Datacenter AI.

Website presentation dong vai tro la **cong cu trinh bay chinh thuc** truoc:
- Ban Quan ly KCNC TP.HCM
- Co quan cap phep (So KHDT, So TNMT, PC07)
- Doi tac chien luoc va nha dau tu tiem nang
- Ngan hang va to chuc tai chinh

### 1.2 Hien trang

Phien ban hien tai (V1) da duoc xay dung voi React 18 + TypeScript + Vite + Tailwind CSS, gom 11 section cuon doc (vertical scrolling). **Van de cua V1**:
- Su dung emoji trong nhieu component (vi pham yeu cau trinh bay chinh thuc)
- Mot so so lieu chua dong bo voi Master file V2.1 (vd: Revenue Y10, Revenue Y15)
- Chua co hinh anh san pham thuc te
- Chua toi uu cho mobile
- Thieu animation chuyen slide kieu PowerPoint

### 1.3 Tai lieu Goc

Toan bo so lieu va noi dung lay tu file nguon chinh thuc duy nhat:
- **File**: `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md`
- **Dung luong**: 15.946 dong, 44 phu luc (A toi RR)
- **Phien ban**: V2.1

---

## 2. MUC TIEU SAN PHAM

### 2.1 Muc tieu Chinh

| STT | Muc tieu | Mo ta | Do uu tien |
|-----|----------|-------|------------|
| M1 | Trinh bay chuyen nghiep | Giao dien giong PowerPoint, chuyen slide muot ma, khong co cam giac "web thuong" | CRITICAL |
| M2 | Khong nhan dien AI | Nguoi xem doc khong duoc co cam giac noi dung do AI tao ra | CRITICAL |
| M3 | So lieu chinh xac 100% | Moi con so phai khop voi Master V2.1, khong sai lech | CRITICAL |
| M4 | Khong dung emoji | Tuyet doi khong co emoji trong giao dien — thay bang icon SVG hoac Lucide | CRITICAL |
| M5 | Hinh anh san pham thuc | Su dung hinh anh thuc te cua may CNC, IoT gateway, datacenter | HIGH |
| M6 | Responsive | Hoat dong tot tren Desktop (1920x1080), Tablet (1024x768), Mobile (375x812) | HIGH |
| M7 | In an duoc | Co the export/in cac slide thanh PDF | MEDIUM |

### 2.2 Tieu chi Nghiem thu

- [ ] 0 emoji trong toan bo source code va rendered output
- [ ] Moi so lieu tai chinh da doi chieu voi Master V2.1
- [ ] Diem Lighthouse Performance >= 85, Accessibility >= 90
- [ ] Hoat dong tren Chrome, Firefox, Safari, Edge (2 phien ban moi nhat)
- [ ] Load time < 3 giay tren 4G
- [ ] Keyboard navigation hoat dong cho 11 slide
- [ ] Print/PDF export giu layout

---

## 3. DOI TUONG SU DUNG

### 3.1 Nguoi Trinh bay (Presenter)

- Giam doc Mekong Technology, trinh bay truoc BQL KCNC
- Can: Dieu huong nhanh giua cac slide, zoom vao bieu do, highlight so lieu
- Thiet bi: Laptop ket noi projector 1920x1080

### 3.2 Nguoi Xem Doc lap (Viewer)

- Can bo BQL KCNC, chuyen gia phan biet, doi tac
- Can: Tu cuon doc, xem chi tiet tung muc, tai PDF
- Thiet bi: Desktop hoac iPad

### 3.3 Nha dau tu / Ngan hang

- Quan tam so lieu tai chinh, IRR, NPV, sensitivity
- Can: Truy cap nhanh phan tai chinh, xem bieu do tuong tac
- Thiet bi: Desktop

---

## 4. YEU CAU CHUC NANG

### 4.1 Dieu huong Slide

| ID | Yeu cau | Mo ta |
|----|---------|-------|
| F01 | Chuyen slide | Click, phim mui ten, scroll wheel deu co the chuyen slide |
| F02 | Navigation bar | Thanh dieu huong co dinh o tren, hien thi so thu tu slide va ten |
| F03 | Slide indicator | Thanh tien trinh (progress bar) o canh phai hoac duoi |
| F04 | Keyboard shortcut | Arrow Left/Right, Home/End, so 1-9 nhay den slide tuong ung |
| F05 | Smooth transition | Chuyen slide co animation fade/slide, 300-500ms |
| F06 | Full-screen mode | Phim F hoac nut de chuyen sang che do toan man hinh (presentation mode) |

### 4.2 Noi dung Slide

| ID | Yeu cau | Mo ta |
|----|---------|-------|
| F07 | 11+ slide | Toi thieu 11 slide nhu hien tai, co the mo rong 15 slide |
| F08 | Bieu do tuong tac | Hover de xem so lieu chi tiet tren moi bieu do |
| F09 | Animation so lieu | So lieu count-up khi slide xuat hien lan dau |
| F10 | Tab switching | Slide "3 Tru cot" co tab IoT / CNC / DC chuyen doi muot |
| F11 | Image gallery | Hinh anh san pham co the click phong to |

### 4.3 Tien ich

| ID | Yeu cau | Mo ta |
|----|---------|-------|
| F12 | PDF export | Nut tai PDF toan bo presentation |
| F13 | Dark/Light toggle | Mac dinh Dark mode, co the chuyen Light cho in an |
| F14 | Ngon ngu | Tieng Viet la chinh, co the them toggle Anh/Viet sau nay |
| F15 | Share link | Tung slide co URL rieng de chia se truc tiep |

---

## 5. YEU CAU PHI CHUC NANG

### 5.1 Hieu nang (Performance)

| Chi tieu | Gia tri |
|----------|---------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to Interactive (TTI) | < 3.0s |
| Bundle size (gzipped) | < 300KB |

### 5.2 Tuong thich

- Chrome >= 120, Firefox >= 120, Safari >= 17, Edge >= 120
- iOS Safari >= 17, Android Chrome >= 120
- Man hinh: 375px — 2560px

### 5.3 Bao mat

- Khong luu tru du lieu nhay cam phia client
- HTTPS bat buoc khi deploy
- Content Security Policy header
- Khong su dung inline script

### 5.4 Kha nang Truy cap (Accessibility)

- WCAG 2.1 Level AA
- Keyboard navigation day du
- Screen reader compatible (aria-labels)
- Contrast ratio >= 4.5:1 cho text thuong, >= 3:1 cho text lon

---

## 6. CAU TRUC SLIDE / SECTION

### Danh sach 11 Slide Chinh

| # | Slide ID | Ten Tieng Viet | Muc dich | Thoi luong trinh bay |
|---|----------|----------------|----------|---------------------|
| 1 | `hero` | Trang Bia | Tao an tuong dau, gioi thieu 4 con so then chot | 30 giay |
| 2 | `summary` | Tom tat Dieu hanh | 6 KPI + Co cau von + 3 tru cot | 2 phut |
| 3 | `market` | Co hoi Thi truong | Thi truong toan cau + VN + SWOT | 3 phut |
| 4 | `pillars` | 3 Tru cot Cong nghe | Chi tiet IoT, CNC, Datacenter (tab) | 5 phut |
| 5 | `infra` | Ha tang Ky thuat | 3 tang, dien, nuoc, solar, PCCC, HVAC | 3 phut |
| 6 | `financials` | Phan tich Tai chinh | Doanh thu 15Y, 3 kich ban, sensitivity, KPI | 5 phut |
| 7 | `legal` | Phap ly & ESG | 18 giay phep, E/S/G, lo trinh chung nhan | 2 phut |
| 8 | `team` | Doi ngu & To chuc | Nhan su 15->300, C-Level, chuyen gia, ESOP | 2 phut |
| 9 | `roadmap` | Lo trinh Trien khai | 5 giai doan P0-P4, 9 moc quan trong | 3 phut |
| 10 | `strategic` | Gia tri Chien luoc | 20,32M strategic value, cam ket, tam nhin | 3 phut |
| 11 | `contact` | Lien he & Ket thuc | Thong tin cong ty, CTA | 30 giay |

**Tong thoi luong trinh bay du kien**: 30 phut

---

## 7. RANG BUOC THIET KE

### 7.1 Phong cach "PowerPoint chuyen nghiep"

Giao dien PHAI tao cam giac nhu mot bai trinh bay PowerPoint cao cap, khong giong mot website thuong:

1. **Moi section = 1 slide**: Chiem dung 100vh (toan man hinh), khong co khoang trong thua
2. **Chuyen slide**: Animation chuyen trang giong PowerPoint (fade, slide-in, khong phai scroll vo han)
3. **Noi dung tap trung**: Moi slide chi trinh bay 1 chu de, khong qua 5-7 khoi thong tin
4. **Typography ro rang**: Tieu de lon, body vua, so lieu noi bat — doc duoc tu xa 3-5 met
5. **Nen toi, chu sang**: Dark theme chinh, to mau bang accent neon (cyan, magenta, green)

### 7.2 Khong Emoji — Chi dung Icon

| Thay the | Cu (Emoji) | Moi (Lucide Icon) |
|----------|-----------|-------------------|
| Tien | (emoji tien) | `DollarSign` hoac `Banknote` |
| Xay dung | (emoji nha) | `Building2` hoac `HardHat` |
| Vi tri | (emoji ghim) | `MapPin` |
| Nhom nguoi | (emoji nguoi) | `Users` |
| Robot | (emoji robot) | `Bot` hoac `Cpu` |
| Banh rang | (emoji banh rang) | `Cog` hoac `Settings` |
| May tinh | (emoji desktop) | `Server` hoac `Monitor` |
| Dia cau | (emoji globe) | `Globe` |
| Bieu do | (emoji chart) | `BarChart3` hoac `TrendingUp` |

### 7.3 Ngon ngu & Van phong

- Van ban **tieng Viet trang trong**, phong cach trinh bay truoc co quan nha nuoc
- Khong dung tu long, tieng Anh chi khi la thuat ngu ky thuat (IoT, CNC, Datacenter, NPV, IRR)
- So lieu dung **dau phay thap phan kieu Viet**: 47,50M (khong phai 47.50M)
- Luon ghi ro don vi: USD, m2, MW, kWh

---

## 8. CHI SO DO LUONG THANH CONG

| Chi so | Muc tieu | Cach do |
|--------|----------|---------|
| Thoi gian hoan thanh | < 3 tuan dev | Sprint tracking |
| So loi nghiem thu | 0 loi critical, < 5 minor | QA checklist |
| Emoji count | 0 | Grep source + rendered |
| So lieu sai lech | 0 | Doi chieu Master V2.1 |
| Lighthouse Score | Perf >= 85, A11y >= 90 | Chrome DevTools |
| Load time 4G | < 3s | WebPageTest |

---

## 9. PHAM VI NGOAI (OUT OF SCOPE)

- Backend / API server
- Dang nhap / Xac thuc nguoi dung
- CMS quan ly noi dung
- Da ngon ngu (V1 chi co tieng Viet)
- E-commerce / dat hang
- Live chat / chatbot

---

## 10. RUI RO VA GIAI PHAP

| Rui ro | Muc do | Giai phap |
|--------|--------|-----------|
| So lieu khong khop Master V2.1 | CAO | Tao data layer trung tam, grep kiem tra tu dong |
| Emoji bi bo sot | CAO | ESLint custom rule cam emoji, CI check |
| Hinh anh nang, load cham | TRUNG BINH | Lazy load, WebP, CDN, placeholder blur |
| Animation giat tren mobile | TRUNG BINH | GPU-accelerated transform, giam particle |
| Font Inter khong tai duoc | THAP | Fallback system-ui, preload font |

---

*Tai lieu nay la co so de dev full-stack tien hanh lap trinh. Moi thac mac ve so lieu can tham chieu truc tiep file Master V2.1.*
