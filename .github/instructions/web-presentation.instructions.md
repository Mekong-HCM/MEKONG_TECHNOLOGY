---
name: "V3 Web Presentation"
description: "Quy tắc cho web presentation trình bày BQL KCNC — bám V3 canonical"
applyTo: "mekong-presentation/src/**/*.ts,mekong-presentation/src/**/*.tsx"
---

# Web Presentation — Quy tắc V3

## 1. Nguồn dữ liệu

- Mọi số liệu trong `src/data/*.ts` **phải khớp** `DE_AN_MEKONG_V3/SO_LIEU_CO_DINH_V3.md`.
- Khi có xung đột, `SO_LIEU_CO_DINH_V3.md` là nguồn đúng duy nhất.
- Không tham chiếu dữ liệu V2 (32M model) dưới bất kỳ hình thức nào.

## 2. Số liệu cố định bắt buộc

| Chỉ tiêu | Giá trị | Ghi chú |
|---|---|---|
| Tổng CAPEX | 22.000.000 USD | [C] |
| Vốn CSH | 18.000.000 USD (81,8%) | [C] |
| Vốn vay | 4.000.000 USD (18,2%) | Từ Y7 |
| CNC | 10 máy (5×5-trục + 3×3-trục + EDM + Grinder) | [C] |
| DC | Nội bộ only (5-8 rack, 200 m², 2,20M, 10,0%) | [C] |
| Trụ cột | 2 (BU1 Điện tử 70,8% + BU2 CNC 29,2%) | [C] |
| NPV (50Y) | 1,50M USD | [C] |
| IRR (50Y) | 13,0% | [C] |
| Revenue steady (Y12+) | 12,00M USD/năm | [C] |
| Revenue 15Y | ~140M USD | [C] |
| GFA | 10.304 m² | [C] |

## 3. Từ khoá CẤM trong code và display text

- `GPU-aaS`, `colocation`, `Tier III`, `Tier-III`
- `GP Viễn thông`, `telecom permit`
- `AS9100`, `IATF 16949` (chỉ chấp nhận nếu ghi rõ "mục tiêu tương lai")
- `47.5`, `47,50`, `32.00M`, `32,00M`, `300 nhân`, `6 máy CNC`, `6x CNC`
- `3 trụ cột`, `3 pillars`, `Three Pillars` (phải là 2 trụ cột)
- `thương mại hóa DC`, `commercial datacenter`

## 4. Quy tắc format số

- **Display text (UI):** Dấu phẩy thập phân theo chuẩn Việt — `22,00M`, `13,0%`, `1,50x`
- **Code TypeScript:** Dấu chấm — `22.00`, `13.0`, `1.50`
- **Đơn vị:** Luôn ghi kèm — USD, m², kW, %

## 5. Cấu trúc slide — 18 Main Slides + Tab Sub-slides

Tổng: 18 main slides, mỗi slide có thể chứa 2-5 tabs. Tổng ~60 views.

### Bảng cấu trúc slide chuẩn

| # | Slide ID | Label | Group | Tabs |
|---|---|---|---|---|
| 0 | hero | Trang chủ | opening | — |
| 1 | urgency | Tính Cấp thiết | context | Thị trường toàn cầu, Bối cảnh VN, Cơ hội KCNC |
| 2 | summary | Tóm tắt Điều hành | executive | Tổng quan 22M, 2 Trụ cột, KPI Summary, Giá trị Chiến lược |
| 3 | market | Thị trường & Cạnh tranh | market | Market Size, Competitive MOAT, Export Strategy |
| 4 | products | Hệ sinh thái Sản phẩm | product | 2 Trụ cột Overview, BU1 Điện tử (21 SP), BU2 CNC (5 SP), Synergy |
| 5 | product-iot | IoT Gateway & BMS | product | MK-200, MK-300, MekongBMS, MekongOS Platform |
| 6 | product-robot | Robot AMR/AGV | product | AMR specs, AGV specs, Use cases, Pricing |
| 7 | tech-rd | Công nghệ & R&D | tech | Tech Stack, R&D Labs (4 phòng), IP/Patents, TRL Roadmap |
| 8 | infra | Hạ tầng 3 Công trình | infrastructure | Layout tổng, VP 3 tầng, Xưởng 2 tầng, CNC Line, DC Nội bộ |
| 9 | production | Năng lực Sản xuất CNC | production | 10 máy specs, Capacity ramp, QA/QC Lab, ISO 9001 |
| 10 | business-model | Mô hình Kinh doanh | business | 9 nguồn doanh thu, Revenue table Y4-Y12+, Khách hàng mục tiêu |
| 11 | financials | Tài chính & Đầu tư | finance | CAPEX 4 Phase, Revenue + EBITDA chart, NPV/IRR/Sensitivity, DSCR/Payback |
| 12 | incentives | Ưu đãi & Giá trị Chiến lược | finance | Ưu đãi thuế KCNC (~5,2M), Strategic Value (7M), So sánh ROI |
| 13 | legal-esg | Pháp lý & ESG | legal | Cơ sở pháp lý, Giấy phép, Solar/EDGE/ESG KPIs |
| 14 | risk | Quản lý Rủi ro | risk | Top risks, Monte Carlo, Scenario analysis |
| 15 | team | Đội ngũ & Tổ chức | team | Org chart, Headcount phases, C-level, Tác động KT-XH |
| 16 | roadmap | Lộ trình Triển khai | plan | Gantt 4 phases, Milestones, KPI checkpoints |
| 17 | conclusion | Kết luận & Cam kết | closing | Value proposition, Cam kết VA/R&D, Call-to-Action |

### Merge mapping (26 slides cũ → 18 slides mới)

| Slides cũ | → Slide mới |
|---|---|
| competitive + export | → market (tabs) |
| pillars + product-oht | → products (tabs) |
| tech-stack + rd-strategy + rd-labs + rd-ip | → tech-rd (tabs) |
| quality | → production (tab) |
| esg-env | → legal-esg (tab) |
| socio-economic | → team (tab) |
| strategic + contact | → conclusion (tabs) |

### Slides mới (chưa có component)

| Slide | Component cần tạo |
|---|---|
| business-model | `BusinessModel.tsx` |
| incentives | `TaxIncentives.tsx` |
| conclusion | `Conclusion.tsx` |

## 6. Tab component yêu cầu

- Dùng `TabSlide` component (`src/components/ui/TabSlide.tsx`) cho mọi slide có tabs.
- Props: `id`, `title`, `subtitle?`, `tabs: TabConfig[]`, `defaultTab?`, `header?`
- Tabs: `{ key: string, label: string, icon?: LucideIcon, content: ReactNode }`
- Animated transitions via Framer Motion (AnimatePresence + motion.div).
- Mỗi tab content import data từ `src/data/*.ts`, không hardcode.

## 7. Design tokens — Hybrid Business + Tech

### Neon tone (Tech slides: #4-9)
- Primary accent: `neon-cyan` (#00E5FF)
- Secondary: `neon-magenta` (#E040FB), `neon-green` (#76FF03)
- Glass morphism: `backdrop-filter: blur(20px)`, border `white/10`
- Hover glow: `0 0 30px rgba(0,229,255,0.1)`

### Corporate tone (Business slides: #0-3, #10-13, #17)
- Primary: `corporate-blue` (#1a365d)
- Accent: `corporate-gold` (#c99a2e)
- Neutral: `corporate-slate` (#64748b)
- Cards: `.corporate-card` — solid border, no neon glow, professional shadow
- Data highlight: `.data-highlight` — gold accent for key financial numbers
- Gradient: `finance-gradient` (from dark-900 via corporate-blue to dark-950)

### Shared (all slides)
- Background: dark-950 (#0a0e2a)
- Text: white (headings), gray-300/400 (body)
- Font: Inter / Be Vietnam Pro

## 8. Submission clean

- Không dùng ngôn ngữ phiên bản: "V2", "V3", "cũ", "mới", "trước đây".
- Trình bày như thiết kế hoàn chỉnh ngay từ đầu.
- Không changelog, không ghi chú nội bộ trong display text.

## 9. Component naming convention

- Section components: PascalCase, đặt trong `src/components/sections/`
- Data files: camelCase, đặt trong `src/data/`
- Khi merge components: giữ file mới với tên slide mới, xoá file cũ sau khi xác nhận
- Lazy import trong `App.tsx` cho tất cả sections trừ HeroSection + ExecutiveSummary
