# HUONG DAN THIET LAP MOI TRUONG PHAT TRIEN (Developer Setup Guide)
# MEKONG TECHNOLOGY HUB — WEB PRESENTATION

**Phien ban**: 2.0  
**Doi tuong**: Full-stack developer  
**Muc tieu**: Tu git clone den localhost chay slide xong trong vong 10 phut

---

## MUC LUC

1. [Yeu cau He thong](#1-yeu-cau-he-thong)
2. [Cai dat va Chay](#2-cai-dat-va-chay)
3. [Cau truc Du an](#3-cau-truc-du-an)
4. [Tech Stack Chi tiet](#4-tech-stack-chi-tiet)
5. [Quy trinh Phat trien](#5-quy-trinh-phat-trien)
6. [Build & Deploy](#6-build--deploy)
7. [Coding Conventions](#7-coding-conventions)
8. [Checklist Truoc khi Commit](#8-checklist-truoc-khi-commit)
9. [Loi Thuong gap & Cach xu ly](#9-loi-thuong-gap--cach-xu-ly)
10. [Tai lieu Tham khao](#10-tai-lieu-tham-khao)

---

## 1. YEU CAU HE THONG

### Bat buoc

| Cong cu | Phien ban | Kiem tra |
|---------|-----------|---------|
| Node.js | >= 18.0.0 (recommend 20 LTS) | `node --version` |
| npm | >= 9.0.0 | `npm --version` |
| Git | >= 2.30 | `git --version` |
| VS Code | Latest | — |

### VS Code Extensions (Khuyen dung)

| Extension | ID | Ly do |
|-----------|----|-------|
| Tailwind CSS IntelliSense | bradlc.vscode-tailwindcss | Autocomplete class Tailwind |
| ES7+ React Snippets | dsznajder.es7-react-js-snippets | React component snippets |
| Prettier | esbenp.prettier-vscode | Dinh dang code tu dong |
| TypeScript Error Translator | mattpocock.ts-error-translator | Dich loi TS sang tieng nguoi |

---

## 2. CAI DAT VA CHAY

### 2.1 Clone Repository

```bash
git clone https://github.com/Mekong-HCM/MEKONG_TECHNOLOGY.git
cd MEKONG_TECHNOLOGY/mekong-presentation
```

### 2.2 Install Dependencies

```bash
npm install
```

Cac package chinh se duoc cai:
- `react` + `react-dom` 18.3
- `framer-motion` 11.15 (animation)
- `recharts` 2.15 (bieu do tai chinh)
- `lucide-react` 0.468 (icon system)
- `tailwindcss` 3.4 + `postcss` + `autoprefixer`
- `typescript` 5.6
- `vite` 6.0

### 2.3 Chay Dev Server

```bash
npm run dev
```

Ket qua mong doi:
```
  VITE v6.0.5  ready in 300 ms

  ->  Local:   http://localhost:5173/
  ->  Network: http://192.168.x.x:5173/
```

Mo trinh duyet, truy cap `http://localhost:5173/`

### 2.4 Build Production

```bash
npm run build
```

Output ra thu muc `dist/`. Kiem tra:
```bash
npm run preview
```

---

## 3. CAU TRUC DU AN

```
mekong-presentation/
|-- public/
|   |-- images/              # Hinh anh tĩnh (xem doc 06)
|
|-- src/
|   |-- components/          # React components
|   |   |-- Navbar.tsx
|   |   |-- HeroSection.tsx
|   |   |-- ExecutiveSummary.tsx
|   |   |-- MarketOpportunity.tsx
|   |   |-- ThreePillars.tsx
|   |   |-- Infrastructure.tsx
|   |   |-- FinancialOverview.tsx
|   |   |-- LegalESG.tsx
|   |   |-- TeamOrganization.tsx
|   |   |-- ImplementationRoadmap.tsx
|   |   |-- StrategicValue.tsx
|   |   |-- ContactCTA.tsx
|   |
|   |-- data/                # Du lieu tinh
|   |   |-- financials.ts
|   |   |-- products.ts
|   |   |-- market.ts
|   |   |-- team.ts
|   |   |-- timeline.ts
|   |
|   |-- hooks/               # Custom hooks
|   |   |-- useInView.ts     # (chua ca useCountUp)
|   |
|   |-- App.tsx              # Root component
|   |-- main.tsx             # React entry point
|   |-- index.css            # Tailwind directives + custom classes
|   |-- vite-env.d.ts        # Vite type definitions
|
|-- docs/                    # Tai lieu phat trien (day docs)
|-- index.html               # HTML entry point
|-- package.json
|-- tailwind.config.ts       # Tailwind configuration
|-- tsconfig.json            # TypeScript project references
|-- tsconfig.app.json        # TS config cho src/
|-- tsconfig.node.json       # TS config cho Vite config
|-- postcss.config.js        # PostCSS (Tailwind + Autoprefixer)
|-- vite.config.ts           # Vite configuration
```

### Luong du lieu

```
App.tsx
  |-- Navbar.tsx                  (scroll listener, nav items)
  |-- HeroSection.tsx             (data/products.ts)
  |-- ExecutiveSummary.tsx         (hardcoded data)
  |-- MarketOpportunity.tsx        (data/market.ts)
  |-- ThreePillars.tsx             (data/products.ts)
  |-- Infrastructure.tsx           (hardcoded data)
  |-- FinancialOverview.tsx        (data/financials.ts)
  |-- LegalESG.tsx                 (hardcoded data)
  |-- TeamOrganization.tsx         (data/team.ts)
  |-- ImplementationRoadmap.tsx    (data/timeline.ts)
  |-- StrategicValue.tsx           (data/financials.ts)
  |-- ContactCTA.tsx               (hardcoded data)
```

---

## 4. TECH STACK CHI TIET

### 4.1 Core

| Thu vien | Phien ban | Vai tro | Docs |
|----------|-----------|---------|------|
| React | 18.3.1 | UI framework - SPA | react.dev |
| TypeScript | 5.6.2 | Type safety | typescriptlang.org |
| Vite | 6.0.5 | Build tool + HMR | vitejs.dev |

### 4.2 UI & Styling

| Thu vien | Phien ban | Vai tro | Docs |
|----------|-----------|---------|------|
| Tailwind CSS | 3.4.17 | Utility-first CSS | tailwindcss.com |
| PostCSS | 8.4.49 | CSS processing | postcss.org |
| Autoprefixer | 10.4.20 | Vendor prefixes | autoprefixer.github.io |

### 4.3 Animation & Visualization

| Thu vien | Phien ban | Vai tro | Docs |
|----------|-----------|---------|------|
| framer-motion | 11.15.0 | Page animations, transitions | framer.com/motion |
| recharts | 2.15.0 | Chart library (Revenue, P&L) | recharts.org |
| lucide-react | 0.468.0 | Icon system (SVG icons) | lucide.dev |

### 4.4 TypeScript Config

```json
{
    "compilerOptions": {
        "target": "ES2020",
        "module": "ESNext",
        "moduleResolution": "bundler",
        "jsx": "react-jsx",
        "strict": true,
        "noUnusedLocals": false,
        "noUnusedParameters": false
    }
}
```

Luu y: `noUnusedLocals` va `noUnusedParameters` dang **false** — khi dev xong nen bat len true.

### 4.5 Tailwind Configuration

File `tailwind.config.ts` dinh nghia:
- **Colors**: primary (50-900), neon (cyan/magenta/green/orange), dark (50-950)
- **Font**: Inter (Google Fonts) — import trong index.html
- **Animations**: gradient, float, pulse-slow, glow
- **Content scan**: `./src/**/*.{js,ts,jsx,tsx}`

Chi tiet design token -> xem `docs/03_UI_UX_DESIGN_SYSTEM.md`

---

## 5. QUY TRINH PHAT TRIEN

### 5.1 Tao Component Moi

Moi section component theo pattern:

```tsx
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
// Import icons tu lucide-react, KHONG dung emoji
import { Settings, Cpu } from 'lucide-react';

export default function NewSection() {
    const { ref, isInView } = useInView(0.2);

    return (
        <section
            id="new-section"
            ref={ref}
            className="section-container"
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Tieu de Section</h2>
                    <p className="section-subtitle">Mo ta ngan</p>
                </motion.div>

                {/* Noi dung section */}
            </div>
        </section>
    );
}
```

### 5.2 Them data file

```typescript
// src/data/newData.ts

export interface NewDataItem {
    id: string;
    name: string;
    value: number;
    unit: string;
}

export const newData: NewDataItem[] = [
    { id: 'item-1', name: 'Muc 1', value: 100, unit: 'USD' },
];
```

### 5.3 Dung Custom Hooks

```typescript
// useInView — trigger animation khi scroll vao view
const { ref, isInView } = useInView(0.2); // threshold = 20%

// useCountUp — dem so tu 0 den target
const count = useCountUp(isInView, targetNumber, 2000); // 2 giay
```

### 5.4 Su dung Recharts

```tsx
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

<ResponsiveContainer width="100%" height={300}>
    <AreaChart data={revenueData}>
        <XAxis dataKey="year" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#00E5FF" fill="#00E5FF20" />
    </AreaChart>
</ResponsiveContainer>
```

---

## 6. BUILD & DEPLOY

### 6.1 Build Production

```bash
npm run build
```

Output:
```
dist/
|-- index.html
|-- assets/
    |-- index-[hash].js      # ~ 200-300KB gzipped
    |-- index-[hash].css      # ~ 15-20KB gzipped
```

### 6.2 Preview Local

```bash
npm run preview
```

Chay static server tai `http://localhost:4173/`

### 6.3 Deploy len Server

**Option A: GitHub Pages**

Them vao `vite.config.ts`:
```typescript
export default defineConfig({
    plugins: [react()],
    base: '/MEKONG_TECHNOLOGY/',  // ten repo
})
```

Dung GitHub Actions hoac:
```bash
npm run build
# Copy dist/ len branch gh-pages
```

**Option B: Vercel**

```bash
npx vercel --prod
```

Vercel tu dong detect Vite project.

**Option C: Static Server (Nginx)**

```nginx
server {
    listen 80;
    server_name mekong-tech.vn;
    root /var/www/mekong-presentation/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 7. CODING CONVENTIONS

### 7.1 Quy tac Chung

| Quy tac | Chi tiet |
|---------|----------|
| Component naming | PascalCase: `HeroSection.tsx` |
| File naming | PascalCase cho component, camelCase cho data/hook |
| Data file naming | camelCase: `financials.ts`, `products.ts` |
| Hook naming | camelCase voi prefix `use`: `useInView.ts` |
| Export | Default export cho component, named export cho data/hook |
| CSS class | Tailwind utilities, custom class trong `index.css` neu can |

### 7.2 TUYET DOI KHONG

| Khong | Tai sao |
|-------|---------|
| Emoji trong code/render | User yeu cau co quan nha nuoc, khong duoc co emoji |
| AI-generated images | Nguoi xem KCNC nhan ra ngay |
| Hardcode so lieu truc tiep | Moi so lieu phai tu `data/` files, de cap nhat |
| Console.log trong production | Cleanup truoc build |
| Any type | Dung TypeScript dung cach |
| Inline style (tru truong hop dac biet) | Dung Tailwind class |

### 7.3 So lieu Tai chinh

Moi khi hien thi so lieu tai chinh, doi chieu voi:
- `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` V2.1
- Cac so chinh thuc:
  - CAPEX: 47,50M USD
  - NPV (50Y, WACC 12%): 1,50M USD
  - IRR (50Y): 13,0%
  - Von CSH: 34,97M USD (73,6%)
  - No vay: 12,53M USD (@ 8,5%)
  - Revenue 10Y (cong don, Appendix G): 103,52M USD
  - Strategic Value (Appendix O): 20,32M USD
- Xem chi tiet: `docs/05_DATA_LAYER_SPEC.md`

### 7.4 Animation Guidelines

- Moi `motion.div` phai co `initial` + `animate` + `transition`
- Threshold mac dinh cho `useInView`: 0.2
- Duration: 0.6-0.8s cho section entry, 0.3s cho hover
- Stagger: 0.1-0.15s giua cac element cung nhom
- Khong animation qua nhieu -> gay kho chiu

---

## 8. CHECKLIST TRUOC KHI COMMIT

### 8.1 Pre-commit (thu cong)

- [ ] `npm run build` thanh cong, khong loi TypeScript
- [ ] Mo `http://localhost:4173/` kiem tra mat
- [ ] Scroll qua tat ca 11 section — khong loi hien thi
- [ ] Responsive: Thu tren 375px (mobile), 768px (tablet), 1440px (desktop)
- [ ] Khong con emoji nao trong DOM (F12 -> Ctrl+F tim unicode range)
- [ ] So lieu hien thi khop voi `data/` files
- [ ] Khong `console.log` hoac `console.error` trong commit

### 8.2 Kiem tra Performance

```bash
# Build va do kich co
npm run build
# Kiem tra dist/assets/ — JS < 300KB, CSS < 30KB
```

Hoac dung Lighthouse trong Chrome DevTools:
- Performance >= 90
- Accessibility >= 85
- Best Practices >= 90

---

## 9. LOI THUONG GAP & CACH XU LY

### 9.1 Tailwind class khong apply

**Trieu chung**: Class Tailwind viet dung nhung khong co effect

**Nguyen nhan**: Class do dung giua chuoi dong (template literal) ma Tailwind khong scan duoc

**Cach sua**:
```tsx
// SAI — Tailwind khong phat hien class dong
<div className={`text-${color}-500`} />

// DUNG — Dung mapping
const colorMap: Record<string, string> = {
    cyan: 'text-neon-cyan',
    magenta: 'text-neon-magenta',
};
<div className={colorMap[color]} />
```

### 9.2 Framer-motion animation khong chay

**Trieu chung**: Element khong animate khi scroll vao

**Nguyen nhan**: useInView ref chua attach hoac threshold qua cao

**Cach sua**:
```tsx
// Dam bao ref duoc gan vao SECTION element, khong phai wrapper
<section ref={ref}>
    <motion.div animate={isInView ? { opacity: 1 } : { opacity: 0 }}>
```

### 9.3 Recharts chart bi ep kich co

**Trieu chung**: Chart bi be hoac tran

**Nguyen nhan**: ResponsiveContainer khong co parent voi height xac dinh

**Cach sua**:
```tsx
// Dam bao parent co height
<div className="w-full h-[300px]">
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>...</AreaChart>
    </ResponsiveContainer>
</div>
```

### 9.4 Build loi "Cannot find module"

**Nguyen nhan**: Import path sai hoac thieu file

**Cach sua**:
```bash
# Kiem tra file ton tai
ls src/data/financials.ts
# Xoa cache va build lai
rm -rf node_modules/.tmp
npm run build
```

### 9.5 Loi TypeScript khi build nhung dev chay binh thuong

**Nguyen nhan**: `tsc -b` (trong `npm run build`) strict hon HMR

**Cach sua**: Build thuong xuyen, khong chi dev. Fix moi loi TS ngay khi xuat hien.

---

## 10. TAI LIEU THAM KHAO

### 10.1 Bo Tai lieu Du an

| STT | File | Noi dung |
|-----|------|---------|
| 01 | `docs/01_PRD_PRODUCT_REQUIREMENTS.md` | Yeu cau san pham tong the |
| 02 | `docs/02_SLIDE_CONTENT_SPEC.md` | Noi dung chi tiet 11 slide |
| 03 | `docs/03_UI_UX_DESIGN_SYSTEM.md` | He thong thiet ke UI/UX |
| 04 | `docs/04_COMPONENT_ARCHITECTURE.md` | Kien truc React components |
| 05 | `docs/05_DATA_LAYER_SPEC.md` | Cau truc du lieu TypeScript |
| 06 | `docs/06_IMAGE_ASSET_MANIFEST.md` | Danh muc hinh anh can thu thap |
| 07 | `docs/07_DEVELOPER_SETUP_GUIDE.md` | File nay |

### 10.2 Tai lieu Goc

| File | Vi tri | Mo ta |
|------|--------|-------|
| Master V2.1 | `DE_AN_MEKONG_V2/MEKONG_DE_AN_V2_MASTER.md` | Toan bo du an 15.946 dong, 44 phu luc A-RR |

### 10.3 Links Thu vien

| Thu vien | URL |
|----------|-----|
| React | react.dev |
| Vite | vitejs.dev |
| Tailwind CSS | tailwindcss.com |
| Framer Motion | framer.com/motion |
| Recharts | recharts.org |
| Lucide Icons | lucide.dev |
| TypeScript | typescriptlang.org |

---

*Tai lieu nay la huong dan day du de bat dau phat trien. Moi thac mac lien he team lead.*
