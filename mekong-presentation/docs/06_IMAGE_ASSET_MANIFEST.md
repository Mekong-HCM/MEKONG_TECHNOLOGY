# DANH MUC HINH ANH & TAI SAN (Image & Asset Manifest)
# MEKONG TECHNOLOGY HUB — WEB PRESENTATION

**Phien ban**: 2.0  
**Luu y**: Khong dung emoji. Tat ca hinh anh phai la anh thuc hoac render chuyen nghiep, KHONG dung AI-generated stock.

---

## MUC LUC

1. [Nguyen tac Hinh anh](#1-nguyen-tac-hinh-anh)
2. [Danh muc Hinh anh Can thu thap](#2-danh-muc-hinh-anh-can-thu-thap)
3. [Nguon Tim Hinh](#3-nguon-tim-hinh)
4. [Quy cach Ky thuat](#4-quy-cach-ky-thuat)
5. [Cau truc Thu muc](#5-cau-truc-thu-muc)
6. [Placeholder Strategy](#6-placeholder-strategy)

---

## 1. NGUYEN TAC HINH ANH

### Bat buoc

1. **Hinh anh SAN PHAM THUC**: Dung hinh tu nha san xuat (DMG MORI, NVIDIA, v.v.) hoac hinh chup thuc te
2. **Khong AI-generated**: Nguoi xem (chuyen gia KCNC) co the nhan ra hinh AI -> mat uy tin
3. **Khong watermark**: Chi dung hinh da mua license hoac Creative Commons
4. **Khong stock photo generic**: Khong dung "nguoi cuoi nhau trong van phong" kinh dien
5. **Toi mau voi dark theme**: Hinh nen sang can overlay toi hoac xu ly de hop dark bg

### Uu tien

| Do uu tien | Loai hinh | Ly do |
|------------|-----------|-------|
| CAO | Hinh san pham chinh xac (DMG MORI DMU 50 3rd Gen) | Chung minh du an nghiem tuc, biet ro thiet bi |
| CAO | Hinh datacenter thuc te (rack, cooling) | The hien do chuyen nghiep |
| TRUNG BINH | Hinh IoT gateway/sensor | Minh hoa san pham dau |
| TRUNG BINH | Hinh KCNC TP.HCM (Google Earth / aerial) | Xac nhan vi tri |
| THAP | Hinh ren nhan su / team | Co the dung avatar gradient mac dinh |

---

## 2. DANH MUC HINH ANH CAN THU THAP

### 2.1 CNC — May DMG MORI

| ID | Mo ta | Goi y tim kiem | Slide dung | Kich co |
|----|-------|----------------|-----------|---------|
| `cnc-01` | May CNC 5-axis DMG MORI DMU 50 3rd Gen | "DMG MORI DMU 50 3rd Generation" | slide 4 (Pillars/CNC), slide 5 (Infra) | 800x600 |
| `cnc-02` | Xuong CNC tu goc cao (overview workshop) | "CNC workshop factory floor overview" | slide 5 (Infrastructure) | 1200x600 |
| `cnc-03` | Chi tiet gia cong titanium 5-axis | "5-axis CNC machining titanium aerospace part" | slide 4 (Pillars/CNC) | 600x400 |
| `cnc-04` | San pham CNC chinh xac (turbine blade, implant) | "precision CNC aerospace turbine blade" | slide 4 (Pillars/CNC) | 600x400 |
| `cnc-05` | CMM kiem tra chat luong (Coordinate Measuring Machine) | "CMM quality inspection CNC" | slide 4 (Pillars/CNC) | 600x400 |

**Nguon chinh**: DMG MORI website (dmgmori.com) co hinh press-quality. Lien he PR hoac dung hinh tu brochure (credit required).

### 2.2 IoT / Robot

| ID | Mo ta | Goi y tim kiem | Slide dung | Kich co |
|----|-------|----------------|-----------|---------|
| `iot-01` | Industrial IoT gateway (dang hop nho, antenna) | "industrial IoT edge gateway device" | slide 4 (Pillars/IoT) | 600x400 |
| `iot-02` | Vision camera AI (dang giong webcam cong nghiep) | "industrial AI vision camera sensor" | slide 4 (Pillars/IoT) | 600x400 |
| `iot-03` | AGV/AMR robot tu hanh trong nha kho | "autonomous mobile robot warehouse AGV" | slide 4 (Pillars/IoT) | 800x500 |
| `iot-04` | Dashboard IoT platform tren man hinh | "IoT platform dashboard monitoring" | slide 4 (Pillars/IoT) | 1000x600 |
| `iot-05` | SMT production line (day chuyen gan linh kien) | "SMT surface mount technology production line" | slide 5 (Infrastructure) | 800x500 |

**Nguon chinh**: Hinh tu Advantech, Moxa, Siemens (IoT gateway), MiR Robots / KUKA (AMR).

### 2.3 Datacenter

| ID | Mo ta | Goi y tim kiem | Slide dung | Kich co |
|----|-------|----------------|-----------|---------|
| `dc-01` | Server rack rows voi den xanh/tim | "datacenter server rack rows blue lighting" | slide 4 (Pillars/DC), slide 5 (Infra) | 1200x600 |
| `dc-02` | GPU cluster (NVIDIA DGX / HGX) | "NVIDIA DGX A100 H100 GPU cluster datacenter" | slide 4 (Pillars/DC) | 800x500 |
| `dc-03` | Cooling system — CRAC / in-row cooling | "datacenter cooling system CRAC CDU" | slide 5 (Infrastructure) | 600x400 |
| `dc-04` | UPS room / power distribution | "datacenter UPS room power" | slide 5 (Infrastructure) | 600x400 |
| `dc-05` | NOC (Network Operations Center) | "network operations center NOC monitoring" | slide 5 (Infrastructure) | 800x500 |

**Nguon chinh**: NVIDIA press kit, Vertiv/Schneider Electric (cooling), Equinix/Digital Realty (datacenter general).

### 2.4 KCNC TP.HCM & Vi tri

| ID | Mo ta | Goi y tim kiem | Slide dung | Kich co |
|----|-------|----------------|-----------|---------|
| `loc-01` | Anh ve tinh KCNC TP.HCM | Google Earth: 10.8575, 106.6492 | slide 1 (Hero), slide 5 (Infra) | 1200x800 |
| `loc-02` | Cong chinh KCNC TP.HCM | "Khu Cong nghe cao TP HCM entrance gate" | slide 1 (Hero) | 800x500 |
| `loc-03` | Duong noi bo KCNC | "Saigon Hi-Tech Park road infrastructure" | slide 5 (Infra) | 800x500 |

**Nguon chinh**: Google Maps / Earth, website SHTP (shtp.hochiminhcity.gov.vn).

### 2.5 Brand & Presentation

| ID | Mo ta | Goi y | Slide dung | Kich co |
|----|-------|-------|-----------|---------|
| `brand-01` | Logo Mekong Technology | Tu thiet ke hoac lay tu brand kit | Tat ca slide (Navbar) | SVG |
| `brand-02` | 3D render toa nha 3 tang | Tu thiet ke (Blender/SketchUp) | slide 1 (Hero), slide 5 (Infra) | 1200x800 |
| `brand-03` | So do mat bang 3 tang (floor plan) | Tu thiet ke tu so lieu ha tang | slide 5 (Infrastructure) | 1000x700 |
| `brand-04` | OG image cho share link | Tu thiet ke | Meta tag | 1200x630 |

### 2.6 ESG & Chung nhan

| ID | Mo ta | Goi y tim kiem | Slide dung | Kich co |
|----|-------|----------------|-----------|---------|
| `esg-01` | Solar panel tren mai nha may | "rooftop solar panel factory" | slide 7 (Legal/ESG) | 800x500 |
| `esg-02` | Logo ISO 9001 / IATF 16949 / AS9100 | Tu website tieu chuan | slide 7 (Legal/ESG) | 200x200 moi logo |
| `esg-03` | Logo Uptime Institute Tier III | uptimeinstitute.com | slide 7 (Legal/ESG) | 200x200 |

---

## 3. NGUON TIM HINH

### 3.1 Hinh Mien phi (License-safe)

| Nguon | URL | Luu y |
|-------|-----|-------|
| Unsplash | unsplash.com | Free, khong can credit (nhung nen credit) |
| Pexels | pexels.com | Free, khong can credit |
| Pixabay | pixabay.com | Free, kiem tra license tung hinh |
| Wikimedia Commons | commons.wikimedia.org | CC license, can credit |

### 3.2 Hinh tu Nha san xuat (Press Kit)

| Hang | Press Kit | Hinh can |
|------|-----------|----------|
| DMG MORI | dmgmori.com/pressroom | May CNC DMU 50, NTX, CMX |
| NVIDIA | nvidianews.nvidia.com | DGX A100, H100, datacenter |
| Schneider Electric | se.com/press | Cooling, UPS, rack |
| Vertiv | vertiv.com/press | CRAC, CDU, power |
| MiR Robots | mobile-industrial-robots.com | AMR, fleet |
| KUKA | kuka.com/press | Robot cong nghiep |

> Luu y: Hinh tu press kit thuong duoc phep dung cho bai viet / trinh bay. Kiem tra dieu khoan cu the.

### 3.3 Hinh Tu thiet ke

Mot so hinh can tu lam:
- Logo Mekong Technology (SVG)
- 3D render toa nha (SketchUp/Blender/Figma)
- Floor plan 3 tang (Figma/AutoCAD)
- Infographic so lieu (Figma)

---

## 4. QUY CACH KY THUAT

### 4.1 Dinh dang File

| Loai | Format | Ly do |
|------|--------|-------|
| Photo (anh chup) | WebP (primary), JPEG (fallback) | WebP nho 25-35% so voi JPEG |
| Graphics (logo, icon) | SVG | Sac net moi kich co |
| OG image | PNG 1200x630 | Tuong thich social share |
| Placeholder | SVG inline hoac base64 blur | Load nhanh |

### 4.2 Kich co & Nen

| Dung cho | Max Width | Max File Size | Quality |
|----------|-----------|--------------|---------|
| Hero background | 1920px | 200KB | 80% |
| Section image | 1200px | 150KB | 80% |
| Card thumbnail | 600px | 80KB | 75% |
| Logo | SVG | 10KB | — |
| Icon | SVG hoac Lucide | 2KB | — |

### 4.3 Responsive Images

```html
<picture>
    <source srcset="image.webp" type="image/webp" />
    <source srcset="image.jpg" type="image/jpeg" />
    <img src="image.jpg" alt="Mo ta hinh" loading="lazy" width="800" height="500" />
</picture>
```

Hoac dung Vite image optimization plugin:
```bash
npm install vite-plugin-image-optimizer --save-dev
```

---

## 5. CAU TRUC THU MUC

```
public/
|-- images/
    |-- cnc/
    |   |-- cnc-01-dmg-mori-dmu50.webp
    |   |-- cnc-02-workshop-overview.webp
    |   |-- cnc-03-titanium-machining.webp
    |   |-- cnc-04-aerospace-part.webp
    |   |-- cnc-05-cmm-inspection.webp
    |
    |-- iot/
    |   |-- iot-01-edge-gateway.webp
    |   |-- iot-02-vision-camera.webp
    |   |-- iot-03-amr-robot.webp
    |   |-- iot-04-platform-dashboard.webp
    |   |-- iot-05-smt-line.webp
    |
    |-- dc/
    |   |-- dc-01-server-racks.webp
    |   |-- dc-02-gpu-cluster.webp
    |   |-- dc-03-cooling-system.webp
    |   |-- dc-04-ups-room.webp
    |   |-- dc-05-noc-center.webp
    |
    |-- location/
    |   |-- loc-01-kcnc-aerial.webp
    |   |-- loc-02-kcnc-entrance.webp
    |   |-- loc-03-kcnc-road.webp
    |
    |-- brand/
    |   |-- brand-01-logo.svg
    |   |-- brand-02-building-3d.webp
    |   |-- brand-03-floorplan.webp
    |   |-- brand-04-og-image.png
    |
    |-- esg/
        |-- esg-01-solar-rooftop.webp
        |-- esg-02-iso-logos.svg
        |-- esg-03-uptime-tier3.svg
```

### Naming Convention

```
{category}-{number:2d}-{mota-ngan}.{ext}
```

Vi du: `cnc-01-dmg-mori-dmu50.webp`

---

## 6. PLACEHOLDER STRATEGY

Trong khi chua co hinh thuc te, dung placeholder:

### 6.1 Gradient Placeholder

```tsx
function ImagePlaceholder({ label, color }: { label: string; color: string }) {
    return (
        <div
            className="w-full h-full rounded-xl flex items-center justify-center"
            style={{
                background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                border: `1px solid ${color}20`,
            }}
        >
            <span className="text-sm text-gray-500">{label}</span>
        </div>
    );
}
```

### 6.2 Blur-up Placeholder

Khi co hinh thuc te, tao phien ban blur 20px, 10KB de load truoc:

```typescript
// Trong component
<img
    src={blurDataUrl}           // base64 blur 20x15px
    data-src={actualImageUrl}    // hinh that
    className="transition-all duration-500"
    onLoad={(e) => e.currentTarget.src = e.currentTarget.dataset.src}
/>
```

### 6.3 Tong so Hinh can

| Danh muc | So luong | Trang thai |
|----------|---------|-----------|
| CNC | 5 | Chua co |
| IoT | 5 | Chua co |
| Datacenter | 5 | Chua co |
| Vi tri/KCNC | 3 | Chua co |
| Brand/Design | 4 | Chua co (can thiet ke) |
| ESG/Chung nhan | 3 | Chua co |
| **TONG** | **25** | **0/25 hoan thanh** |

---

*Tai lieu nay la checklist thu thap hinh anh. Dev cap nhat trang thai khi co hinh.*
