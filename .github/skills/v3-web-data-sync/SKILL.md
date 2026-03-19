# Skill: v3-web-data-sync

> Kiểm tra nhất quán dữ liệu giữa web presentation (`src/data/*.ts`) và canonical (`SO_LIEU_CO_DINH_V3.md`).

## Khi nào dùng

- Sau khi cập nhật bất kỳ file trong `mekong-presentation/src/data/`.
- Trước khi build production (`npm run build`).
- Khi người dùng yêu cầu "kiểm tra nhất quán data" hoặc "data sync check".

## Các bước thực hiện

1. **Đọc canonical**: Mở `DE_AN_MEKONG_V3/SO_LIEU_CO_DINH_V3.md`, trích xuất tất cả số liệu [C] và [B].

2. **Quét data files**: Đọc lần lượt các file trong `mekong-presentation/src/data/`:
   - `financials.ts` — CAPEX, equity, debt, NPV, IRR, revenue, DSCR, scenarios
   - `products.ts` — số lượng sản phẩm, CNC count, DC specs
   - `operations.ts` — CNC machines, capacity, certifications
   - `infrastructure.ts` — GFA, footprint, building dimensions
   - `team.ts` — headcount by phase
   - `timeline.ts` — phase budgets, milestones
   - `legal.ts` — permits, tax incentives
   - `riskEsg.ts` — Monte Carlo, ESG metrics

3. **So sánh từng metric**: Đối chiếu giá trị trong code với canonical. Chú ý:
   - Code dùng dấu chấm (22.00), canonical dùng dấu phẩy (22,00) — quy đổi khi so sánh.
   - Kiểm tra cả display strings và giá trị số.

4. **Báo cáo**: Tạo bảng kết quả:

| # | Metric | Canonical | Web Value | File | Status |
|---|---|---|---|---|---|
| 1 | CAPEX tổng | 22.000.000 USD | ? | financials.ts | OK/MISMATCH |
| ... | ... | ... | ... | ... | ... |

5. **Tổng kết**: Đếm OK vs MISMATCH. Nếu MISMATCH > 0, liệt kê cụ thể cần sửa.

## Output mong đợi

- Bảng diff đầy đủ (tối thiểu 20 metrics).
- Danh sách file + dòng cần sửa nếu có sai lệch.
- Kết luận: PASS (0 mismatch) hoặc FAIL (N mismatches).
