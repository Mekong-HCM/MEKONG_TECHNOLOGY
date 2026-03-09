# HE THONG THIET KE UI/UX (Design System)
# MEKONG TECHNOLOGY HUB — WEB PRESENTATION

**Phien ban**: 2.0  
**Phong cach**: Dark Premium — PowerPoint Presentation Style  

---

## MUC LUC

1. [Triet ly Thiet ke](#1-triet-ly-thiet-ke)
2. [Bang mau (Color Palette)](#2-bang-mau-color-palette)
3. [Typography](#3-typography)
4. [Spacing & Grid](#4-spacing--grid)
5. [Bo goc & Bong (Radius & Shadow)](#5-bo-goc--bong)
6. [Component Patterns](#6-component-patterns)
7. [Animation & Motion](#7-animation--motion)
8. [Icon System](#8-icon-system)
9. [Chart Styling](#9-chart-styling)
10. [Responsive Breakpoints](#10-responsive-breakpoints)
11. [Dark/Light Mode](#11-darklight-mode)
12. [Do's and Don'ts](#12-dos-and-donts)

---

## 1. TRIET LY THIET KE

### Nguyen tac Cot loi

Du an nay KHONG phai website thuong — no la mot **bai trinh bay kinh doanh so hoa**. Moi quyet dinh thiet ke phai dat cau hoi:

> "Neu day la 1 slide PowerPoint, nguoi xem tu xa 3 met co doc duoc khong?"

**5 Nguyen tac**:

1. **Toi gian cuc do (Extreme Clarity)**: Moi slide chi co 1 thong diep chinh. Khong nhoi nhet.
2. **So lieu la nhan vat chinh**: Con so phai lon, noi bat, doc duoc tu xa. Text mo ta la phu.
3. **Toi nhung sang (Dark Premium)**: Nen toi giup so lieu mau neon noi bat — giong keynote Apple/Tesla.
4. **Chuyen dong co muc dich**: Animation chi de dan dat mat nguoi xem, khong de "dep".
5. **Khong co phan tu thua**: Neu khong phuc vu thong diep, loai bo.

### Anti-patterns (KHONG lam)

- Khong dung emoji trong bat ky truong hop nao
- Khong dung gradient cau vong (rainbow) — chi dung gradient 2 mau co muc dich
- Khong dung bong (box-shadow) qua dam — chi dung glow nhe neon
- Khong dung hinh nen busy/pattern — chi dung solid dark + orb gradient
- Khong dung font decorative — chi Inter hoac system-ui

---

## 2. BANG MAU (COLOR PALETTE)

### 2.1 Mau Nen (Background)

| Token | Hex | Dung cho |
|-------|-----|----------|
| `dark-950` | `#0a0e2a` | Nen chinh toan man hinh |
| `dark-900` | `#191d44` | Nen card, tooltip, modal |
| `dark-800` | `#262c57` | Nen hover card |
| `dark-700` | `#2d3561` | Border active |
| `white/5` | `rgba(255,255,255,0.05)` | Nen tab inactive, row alternate |
| `white/10` | `rgba(255,255,255,0.10)` | Border mac dinh card |

### 2.2 Mau Accent (Neon)

Moi tru cot kinh doanh co 1 mau rieng — nhat quan trong toan bo presentation:

| Token | Hex | Dung cho | Tru cot |
|-------|-----|----------|---------|
| `neon-cyan` | `#00E5FF` | Tieu de, link, KPI chinh, border active | IoT / Robot |
| `neon-magenta` | `#E040FB` | Tieu de phu, accent, badge | CNC / MPMC |
| `neon-green` | `#76FF03` | Thanh cong, ESG, tang truong | Datacenter |
| `neon-orange` | `#FF9100` | Canh bao, chi phi, timeline Phase 4 | Khac |

### 2.3 Mau Gradient

| Ten | CSS | Dung cho |
|-----|-----|----------|
| `gradient-text` | `linear-gradient(135deg, #00E5FF 0%, #E040FB 100%)` | Tieu de chinh, logo |
| `gradient-connector` | `linear-gradient(to right, cyan/50, pink/50, green/50)` | Duong noi timeline |
| `gradient-card` | `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)` | Nen glassmorphism card |
| `gradient-btn` | `linear-gradient(135deg, #00E5FF 0%, #0080b3 100%)` | Nut CTA chinh |

### 2.4 Mau Text

| Token | Gia tri | Dung cho |
|-------|---------|----------|
| `text-white` | `#FFFFFF` | Tieu de, so lieu quan trong |
| `text-gray-300` | `#d1d5db` | Body text chinh |
| `text-gray-400` | `#9ca3af` | Subtitle, description |
| `text-gray-500` | `#6b7280` | Label phu, ghi chu |

### 2.5 Mau Chart

Khi dung recharts, LUON ap dung mau theo thu tu nay:

```typescript
const CHART_COLORS = ['#00E5FF', '#E040FB', '#76FF03', '#FF9100', '#4dd2ff', '#00bfff', '#555'];
```

Tooltip style thong nhat:
```typescript
const TOOLTIP_STYLE = {
    background: '#191d44',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    fontSize: '12px',
    color: '#fff'
};
```

---

## 3. TYPOGRAPHY

### 3.1 Font Family

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

**Tai font**: Google Fonts, preload trong `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### 3.2 Thang Typography (Type Scale)

| Ten | Kich co Desktop | Kich co Mobile | Weight | Dung cho |
|-----|----------------|----------------|--------|----------|
| Hero Title | 80-96px (text-7xl/8xl) | 48px (text-5xl) | 900 (Black) | Tieu de Hero duy nhat |
| Hero Subtitle | 48-64px (text-5xl/6xl) | 30px (text-3xl) | 700 (Bold) | "Hub" trong Hero |
| Section Title | 36-48px (text-4xl/5xl) | 30px (text-3xl) | 700 (Bold) | Tieu de moi section |
| Card Title | 18-20px (text-lg/xl) | 16px (text-base) | 700 (Bold) | Tieu de card, chart title |
| Body | 16-18px (text-base/lg) | 14-16px | 400 (Regular) | Mo ta, subtitle |
| Label | 12-14px (text-xs/sm) | 12px | 500 (Medium) | Tag, badge, nhan bieu do |
| Stat Value | 30-48px (text-3xl/5xl) | 24px (text-2xl) | 800 (ExtraBold) | Con so KPI |
| Stat Label | 12px (text-xs) | 11px | 400 | Nhan duoi con so |

### 3.3 Line Height & Spacing

| Loai text | Line Height | Letter Spacing |
|-----------|-------------|----------------|
| Heading | 1.1-1.2 (leading-tight) | -0.02em |
| Body | 1.6-1.7 (leading-relaxed) | 0 |
| Label/Uppercase | 1.4 | 0.05-0.1em (tracking-wider/widest) |

---

## 4. SPACING & GRID

### 4.1 Slide Container

```css
.section-container {
    min-height: 100vh;
    width: 100%;
    padding: 80px 16px;         /* py-20 px-4 */
    padding-left: clamp(16px, 5vw, 96px);   /* responsive */
    padding-right: clamp(16px, 5vw, 96px);
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```

### 4.2 Grid System

| Layout | Desktop | Tablet | Mobile |
|--------|---------|--------|--------|
| KPI cards | 3 cot (md:grid-cols-3) | 2 cot | 1 cot |
| Hero stats | 4 cot (md:grid-cols-4) | 2 cot | 2 cot |
| 2-panel | 2 cot (lg:grid-cols-2) | 1 cot | 1 cot |
| Phase cards | 5 cot (md:grid-cols-5) | 3 cot | 1 cot |
| Infra specs | 3 cot (md:grid-cols-3) | 2 cot | 1 cot |

### 4.3 Gap Values

| Context | Gap | Tailwind |
|---------|-----|----------|
| Giua cac section | 0 (moi section la 100vh) | — |
| Giua cac card | 16-24px | gap-4 hoac gap-6 |
| Giua cac row trong card | 8-12px | space-y-2 hoac space-y-3 |
| Giua icon va text | 8px | gap-2 |
| Padding card nho | 16-20px | p-4 hoac p-5 |
| Padding card lon | 24px | p-6 |

---

## 5. BO GOC & BONG

### 5.1 Border Radius

| Element | Radius | Tailwind |
|---------|--------|----------|
| Card chinh | 16px | rounded-2xl |
| Card con / inner | 12px | rounded-xl |
| Button | 9999px (pill) | rounded-full |
| Badge/Tag | 9999px (pill) | rounded-full |
| Chart bar | 6px | radius={[6,6,0,0]} |
| Input | 8px | rounded-lg |

### 5.2 Glassmorphism Card

Day la pattern card duoc dung nhieu nhat:

```css
.glass-card {
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.10);
    background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}

.glass-card-hover:hover {
    border-color: rgba(0, 229, 255, 0.3);
    box-shadow: 0 0 30px rgba(0, 229, 255, 0.1), inset 0 0 30px rgba(0, 229, 255, 0.03);
    transform: translateY(-4px);
    transition: all 300ms ease;
}
```

### 5.3 Glow Effects

| Loai | CSS |
|------|-----|
| Neon text | `text-shadow: 0 0 10px rgba(0,229,255,0.5), 0 0 20px rgba(0,229,255,0.2)` |
| Neon border | `box-shadow: 0 0 10px rgba(0,229,255,0.1)` |
| Button glow | `box-shadow: 0 0 20px rgba(0,229,255,0.3)` |
| Button hover | `box-shadow: 0 0 40px rgba(0,229,255,0.5)` |
| Floating orb | `filter: blur(48px); opacity: 0.15-0.20` |

---

## 6. COMPONENT PATTERNS

### 6.1 Section Layout (Moi Slide)

```
[Section Container - 100vh, flex col, justify-center]
  [Title Block]
    H2.section-title: "Tu khoa" + <span class="gradient-text">"Phan noi bat"</span>
    P.section-subtitle: 1-2 cau mo ta (text-gray-400)
  [Content Grid]
    ... noi dung chinh ...
```

### 6.2 Glass Card

```
[div.glass-card-hover p-5/p-6]
  [Icon hoac Emoji replacement] — Lucide icon, size 16-24, mau accent
  [H4/H5 title] — text-sm/lg, font-bold, mau accent
  [Content] — text-xs/sm, text-gray-300/400
  [Footer/Tags] — border-t border-white/5, text-xs
```

### 6.3 KPI Card (Counter)

```
[div.glass-card-hover p-5]
  [div.stat-value] — text-2xl/3xl, font-extrabold, mau accent
    {so}{don vi nho}
  [div.stat-label] — text-xs, uppercase, tracking-wider, text-gray-400
```

### 6.4 Tab System

```
[div.flex gap-2 mb-8]
  [button.tab-btn]
    [Icon size=16] + [text]
    class active: bg cyan/15, border cyan/30, text-white
    class inactive: text-gray-500, hover:text-gray-300

[AnimatePresence mode="wait"]
  [motion.div key={tab}]
    initial: opacity 0, y 20
    animate: opacity 1, y 0
    exit: opacity 0, y -20
    transition: 300ms
```

### 6.5 Data Table

```
[table.w-full text-xs]
  [thead]
    [tr.border-b border-white/10]
      [th text-left/right py-2 text-gray-400 font-medium]
  [tbody]
    [tr.border-b border-white/5]
      [td py-2 text-gray-300] — nhan
      [td text-right py-2 text-white font-semibold] — gia tri
```

### 6.6 Progress Badge (Pill)

```
[div.flex items-center gap-2 px-4 py-2 rounded-full]
  style: bg {color}10, border: 1px solid {color}30
  [span font-bold text-sm] — nam/label
  [span text-xs text-gray-300] — noi dung
```

---

## 7. ANIMATION & MOTION

### 7.1 Thu vien: Framer Motion

Tat ca animation dung `framer-motion`. KHONG dung CSS animation cho noi dung slide.

### 7.2 Pattern Chuan

**Fade Up (Mac dinh cho moi element)**:
```typescript
initial={{ opacity: 0, y: 30 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6, delay: 0 }}
```

**Fade Side (cho 2-column layout)**:
```typescript
// Cot trai
initial={{ opacity: 0, x: -30 }}
animate={isInView ? { opacity: 1, x: 0 } : {}}

// Cot phai
initial={{ opacity: 0, x: 30 }}
animate={isInView ? { opacity: 1, x: 0 } : {}}
```

**Scale (cho card, badge)**:
```typescript
initial={{ opacity: 0, scale: 0.9 }}
animate={isInView ? { opacity: 1, scale: 1 } : {}}
```

**Stagger (cho danh sach card)**:
```typescript
// Moi card co delay tang dan
transition={{ duration: 0.5, delay: 0.1 * index }}
```

### 7.3 Chuyen Slide

Khi chuyen giua cac section, su dung:
```typescript
// Scroll snap
html {
    scroll-snap-type: y mandatory;
}
section {
    scroll-snap-align: start;
}
```

Hoac fullpage-style voi state management:
```typescript
// Slide transition
const variants = {
    enter: { opacity: 0, y: '100%' },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-100%' },
};
<motion.div variants={variants} transition={{ duration: 0.5 }} />
```

### 7.4 Count-up Animation

```typescript
function useCountUp(target: number, duration: number, trigger: boolean) {
    // Easing: easeOutExpo
    // Duration: 1500-2500ms
    // Chi chay 1 lan khi slide xuat hien
}
```

### 7.5 Background Animations (CSS)

```css
/* Gradient rotation - chi cho background, KHONG cho content */
@keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

/* Floating orbs */
animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
```

---

## 8. ICON SYSTEM

### 8.1 Thu vien: Lucide React

```bash
npm install lucide-react
```

### 8.2 Kich co Icon Chuan

| Context | Size | Vi du |
|---------|------|-------|
| Inline voi text | 12-14px | Check-mark trong danh sach |
| Card icon nho | 16-18px | Beside card title |
| Card icon chinh | 20-24px | Goc tren card |
| Hero/CTA icon | 24-28px | 3 tru cot o Hero |
| Navigation | 16px | Navbar items |

### 8.3 Mapping Emoji → Lucide

| Bo | Dung cho | Lucide Icon |
|----|----------|-------------|
| Tien/Tai chinh | KPI, dau tu | `DollarSign`, `Banknote`, `TrendingUp` |
| Xay dung | Ha tang | `Building2`, `HardHat`, `Hammer` |
| Vi tri | Dia diem | `MapPin`, `Navigation` |
| Con nguoi | Doi ngu | `Users`, `UserCheck`, `Briefcase` |
| Cong nghe | IoT/CNC/DC | `Cpu`, `Cog`, `Server`, `Monitor` |
| Bao mat | ESG, PCCC | `Shield`, `ShieldCheck`, `Lock` |
| Moi truong | E trong ESG | `Leaf`, `Sun`, `Droplets`, `Thermometer` |
| Van ban | Giay phep | `FileCheck`, `FileText`, `Scroll` |
| Bieu do | Phan tich | `BarChart3`, `PieChart`, `LineChart` |
| Muc tieu | Milestone | `Target`, `Award`, `Star` |
| Lien he | Contact | `Mail`, `Phone`, `Globe` |
| Dieu huong | CTA | `ArrowUpRight`, `ChevronDown`, `ExternalLink` |
| Thoi gian | Timeline | `Clock`, `Calendar`, `Timer` |
| Kiem tra | Checklist | `Check`, `CheckCircle`, `ListChecks` |

---

## 9. CHART STYLING

### 9.1 Recharts Theme Chung

```typescript
// Axis
tick={{ fill: '#999', fontSize: 11 }}
axisLine={false}
tickLine={false}

// Grid
<CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />

// Legend
<Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
```

### 9.2 Mau chart theo loai

| Loai bieu do | Dung o slide | Mau |
|-------------|-------------|-----|
| Stacked Area | Doanh thu 15Y | Cyan (IoT) + Magenta (CNC) + Green (DC) |
| Horizontal Bar | Thi truong VN | 4 mau CHART_COLORS |
| Stacked Bar | Nhan su | 5 mau (Cyan, Magenta, Green, Orange, Gray) |
| Pie/Donut | Co cau von | Cyan + Magenta |
| Tornado/Diverging | Sensitivity | Magenta (giam) + Cyan (tang) |
| Waterfall Bar | Strategic value | 7 mau CHART_COLORS |

### 9.3 Gradient Fill cho Area Chart

```typescript
<defs>
    <linearGradient id="colorIot" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
        <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
    </linearGradient>
</defs>
<Area fill="url(#colorIot)" stroke="#00E5FF" strokeWidth={2} />
```

---

## 10. RESPONSIVE BREAKPOINTS

### Tailwind Breakpoints (mac dinh)

| Token | Min-width | Thiet bi |
|-------|-----------|----------|
| (default) | 0px | Mobile nho |
| `sm` | 640px | Mobile lon |
| `md` | 768px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Man hinh lon |

### Xu ly Responsive chinh

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Section title | text-3xl | text-4xl | text-5xl |
| Stat value | text-2xl | text-3xl | text-4xl/5xl |
| Card padding | p-4 | p-5 | p-6 |
| Section padding X | px-4 | px-8 | px-16 xl:px-24 |
| Navbar | Dot indicators | Dot indicators | Full labels |
| Grid 3-col | 1 col | 2 col | 3 col |
| Chart height | 200px | 250px | 300px |

---

## 11. DARK/LIGHT MODE

### Mac dinh: Dark Mode

Toan bo presentation mac dinh dark. Light mode la tinh nang phu (cho in an).

### Light Mode (Khi can in)

| Token Dark | Token Light |
|-----------|-------------|
| `#0a0e2a` (bg) | `#FFFFFF` |
| `#191d44` (card bg) | `#F8F9FA` |
| `rgba(255,255,255,0.10)` (border) | `rgba(0,0,0,0.08)` |
| `#FFFFFF` (heading) | `#1A1A2E` |
| `#9ca3af` (body) | `#4A4A5A` |
| Neon colors giu nguyen | Giam opacity 20% |

---

## 12. DO'S AND DON'TS

### DO (NEN LAM)

- Dung glassmorphism card cho moi khoi thong tin
- Dung count-up animation cho so lieu khi slide xuat hien lan dau
- Dung gradient-text cho phan noi bat trong tieu de
- Dung Lucide icon thay vi emoji
- Dung responsive padding (clamp hoac Tailwind responsive)
- Dung stagger delay khi nhieu card xuat hien cung luc
- Dung scroll-snap hoac fullpage cho cam giac PowerPoint
- Dung tooltip chi tiet cho moi bieu do

### DON'T (KHONG LAM)

- KHONG dung emoji — tuyet doi khong, trong bat ky component nao
- KHONG dung font khac ngoai Inter va system-ui
- KHONG dung bong CSS box-shadow thong thuong — chi dung neon glow
- KHONG dung mau nen trang cho card — luon glassmorphism
- KHONG dung animation qua 800ms — toi da 600ms cho transition chinh
- KHONG de 2 bieu do canh nhau khong co giai thich
- KHONG dung so lieu khong co trong Master V2.1
- KHONG dung tieng Anh cho noi dung (tru thuat ngu ky thuat)
- KHONG de text trang tren nen trang (contrast ratio < 4.5:1)
- KHONG dung inline styles cho mau — luon dung token tu Tailwind config

---

*Tai lieu nay la kim chi nam thiet ke duy nhat. Moi quyet dinh UI phai tham chieu tai lieu nay.*
