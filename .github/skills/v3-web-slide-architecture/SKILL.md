# Skill: v3-web-slide-architecture

> Kiểm tra và xác nhận cấu trúc slide web presentation theo chuẩn 18 main slides + tabs.

## Khi nào dùng

- Sau khi refactor App.tsx hoặc useSlideNavigation.ts.
- Khi merge/tạo component section mới.
- Trước khi build production — xác nhận không thiếu slide.

## Cấu trúc chuẩn: 18 Main Slides

| # | ID | Component | Group | Tabs cần có |
|---|---|---|---|---|
| 0 | hero | HeroSection | opening | — |
| 1 | urgency | Urgency | context | 3 tabs |
| 2 | summary | ExecutiveSummary | executive | 4 tabs |
| 3 | market | MarketCompetitive | market | 3 tabs (merge: competitive + export) |
| 4 | products | ProductEcosystem | product | 4 tabs (merge: pillars + product-oht) |
| 5 | product-iot | ProductIoTGateway | product | 4 tabs |
| 6 | product-robot | ProductRobotAMR | product | 4 tabs |
| 7 | tech-rd | TechRD | tech | 4 tabs (merge: tech-stack + rd-*) |
| 8 | infra | Infrastructure | infrastructure | 5 tabs |
| 9 | production | ProductionCapacity | production | 4 tabs (merge: quality) |
| 10 | business-model | BusinessModel | business | 3 tabs (MỚI) |
| 11 | financials | FinancialOverview | finance | 4 tabs |
| 12 | incentives | TaxIncentives | finance | 3 tabs (MỚI) |
| 13 | legal-esg | LegalESG | legal | 3 tabs (merge: esg-env) |
| 14 | risk | RiskAnalysis | risk | 3 tabs |
| 15 | team | TeamOrganization | team | 4 tabs (merge: socio-economic) |
| 16 | roadmap | ImplementationRoadmap | plan | 3 tabs |
| 17 | conclusion | Conclusion | closing | 3 tabs (MỚI, merge: strategic + contact) |

## Các bước kiểm tra

1. **Đọc SLIDES array** trong `useSlideNavigation.ts`:
   - Phải có đúng 18 entries.
   - ID và label khớp bảng trên.
   - Group khớp bảng trên.

2. **Đọc App.tsx**:
   - Phải import đúng 18 section components (2 trực tiếp + 16 lazy).
   - Render order trong `<main>` khớp SLIDES array.
   - Không còn import component cũ đã merge.

3. **Kiểm tra component files**:
   - 3 file mới phải tồn tại: `BusinessModel.tsx`, `TaxIncentives.tsx`, `Conclusion.tsx`
   - 8 file cũ có thể đã xoá hoặc deprecated: `CompetitiveAnalysis.tsx`, `ExportStrategy.tsx`, `ThreePillars.tsx`, `ProductOHT.tsx`, `RDStrategy.tsx`, `RDLabs.tsx`, `RDIPPatents.tsx`, `QualityCerts.tsx`, `ESGEnvironment.tsx`, `SocioEconomic.tsx`, `StrategicValue.tsx`, `ContactCTA.tsx`
   - Nội dung merge: kiểm tra component mới có đủ tabs tương ứng nội dung cũ.

4. **Kiểm tra TabSlide usage**:
   - Mỗi component (trừ HeroSection) nên dùng `TabSlide` hoặc `SectionLayout`.
   - Mỗi TabSlide phải có `tabs` array với đủ tab theo bảng chuẩn.
   - Data cho mỗi tab import từ `src/data/*.ts`.

5. **Kiểm tra types**:
   - `SlideInfo` interface trong `useSlideNavigation.ts` phải có `id`, `label`, `group`.
   - `TabConfig` interface trong `TabSlide.tsx` phải có `key`, `label`, `content`.

## Output

Bảng kết quả:

| Check | Expected | Actual | Status |
|---|---|---|---|
| SLIDES count | 18 | ? | OK/FAIL |
| App.tsx imports | 18 components | ? | OK/FAIL |
| New components | 3 files | ? | OK/FAIL |
| Deprecated removed | 12 files | ? | OK/WARN |
| TabSlide usage | 17 slides | ? | OK/FAIL |

Kết luận: PASS / FAIL / PARTIAL (ghi rõ thiếu gì).
