---
name: "V3 Mermaid Diagrams"
description: "Quy tắc biểu đồ — bắt buộc dùng Mermaid, không ASCII art"
applyTo: "DE_AN_MEKONG_V3/sections/**/*.md"
---

# Mermaid Diagrams — Quy tắc biểu đồ

## Bắt buộc

1. Tất cả sơ đồ, biểu đồ, flowchart phải dùng Mermaid — không dùng ASCII art.
2. Mỗi biểu đồ phải có tiêu đề (heading hoặc caption ngay trước code block).
3. Mỗi biểu đồ phải có chú thích giải thích bên dưới nếu nội dung phức tạp.

## Loại biểu đồ theo nội dung

| Nội dung | Loại Mermaid | Hướng |
|---|---|---|
| Quy trình sản xuất | `flowchart TD` | Top-down |
| Chuỗi giá trị | `flowchart LR` | Left-right |
| Tổ chức | `flowchart TD` | Top-down |
| Lộ trình/tiến độ | `gantt` | Timeline |
| Cơ cấu phần trăm | `pie` | — |
| Biểu đồ số liệu | `xychart-beta` | — |
| Rủi ro | `quadrantChart` | — |
| Tổng quan concept | `mindmap` | — |

## Phong cách

1. Nhãn tiếng Việt có dấu đầy đủ.
2. Không quá 20 node trong một biểu đồ — tách thành nhiều biểu đồ nếu cần.
3. Số liệu trong biểu đồ phải khớp canonical SO_LIEU_CO_DINH_V3.md.
