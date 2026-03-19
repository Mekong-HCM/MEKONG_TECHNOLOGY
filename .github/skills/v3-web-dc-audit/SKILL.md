# Skill: v3-web-dc-audit

> Quét code web presentation tìm ngôn ngữ Datacenter thương mại còn sót — vi phạm V3.

## Khi nào dùng

- Sau khi refactor data hoặc component liên quan DC.
- Trước khi trình bày BQL KCNC.
- Khi người dùng yêu cầu "kiểm tra DC" hoặc "DC commercial audit".

## Từ khoá quét

Tìm trong `mekong-presentation/src/**/*.{ts,tsx}`:

### Nhóm 1 — DC thương mại (cấm tuyệt đối)
- `GPU-aaS`, `GPU as a Service`
- `colocation`, `colo`
- `Tier III`, `Tier-III`, `Tier 3`
- `commercial`, `thương mại` (khi kết hợp với DC/datacenter)
- `100 rack`, `100 Rack`

### Nhóm 2 — Viễn thông (cấm)
- `GP Viễn thông`, `telecom permit`, `giấy phép viễn thông`

### Nhóm 3 — Chứng nhận sai phạm vi (cảnh báo)
- `AS9100` — chỉ chấp nhận nếu ghi rõ "mục tiêu tương lai"
- `IATF 16949` — tương tự

### Nhóm 4 — Số liệu cũ (cấm)
- `47.5`, `47,50`, `32.00M`, `32,00M`
- `300 nhân`, `300 việc`
- `6 máy`, `6x CNC`, `6 CNC`

## Các bước

1. **Grep toàn bộ** `mekong-presentation/src/` với pattern:
   ```
   GPU-aaS|colocation|Tier.III|Tier-III|GP Viễn thông|telecom|thương mại.*DC|commercial.*DC|100 Rack|47\.5|47,50|32\.00M|32,00M|300 nhân|6 máy|6x CNC|AS9100|IATF
   ```

2. **Phân loại kết quả** theo nhóm 1-4.

3. **Báo cáo**:
   - Tổng số vi phạm theo nhóm.
   - File:line cụ thể cho mỗi vi phạm.
   - Đề xuất sửa (thay thế hoặc xoá).

4. **Kết luận**: PASS (0 vi phạm) hoặc FAIL (N vi phạm nhóm 1-2), WARN (nhóm 3-4).
