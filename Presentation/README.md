# Hệ thống Presentation Mekong Technology

## Tổng quan

Hệ thống presentation chuyên nghiệp được xây dựng bằng **Reveal.js** framework, thiết kế theo phong cách **Corporate/Professional**, tích hợp đầy đủ tính năng tương tác cho việc trình bày dự án Mekong Technology trước Ban Quản lý Khu Công nghệ cao TP.HCM.

## Cấu trúc thư mục

```
Presentation/
├── index.html                    # Landing page - Chọn version
├── executive.html                # Executive version (~21 slides, 25-30 phút)
├── full.html                     # Full version (~70 slides, 60-75 phút)
├── css/
│   ├── theme-corporate.css      # Custom theme Corporate/Professional
│   └── (các file CSS khác)
├── js/
│   ├── reveal-config.js         # Reveal.js configuration
│   └── (các file JS khác)
├── assets/
│   └── products/                # Product images
└── README.md                    # File này
```

## Các phiên bản Presentation

### 1. Executive Presentation (executive.html)
- **Thời lượng**: 25-30 phút
- **Số slides**: 21 slides
- **Đối tượng**: Investor, partners, Ban Quản lý KCNC
- **Nội dung**: 
  - Highlights quan trọng nhất
  - Thị trường & Cơ hội
  - 7 dòng sản phẩm
  - Phân tích tài chính (NPV/IRR/Payback)
  - Năng lực đội ngũ
  - Đề xuất cụ thể

### 2. Full Presentation (full.html)
- **Thời lượng**: 60-75 phút
- **Số slides**: ~70 slides
- **Đối tượng**: Due diligence, technical review, detailed evaluation
- **Nội dung**:
  - 10 sections chi tiết
  - SWOT Analysis + Porter's 5 Forces
  - Technology roadmap (TRL 6→7→8→9)
  - QA/QC process (AOI/ICT/Burn-in)
  - R&D organization
  - Timeline & Milestones

## Cách sử dụng

### Mở Presentation

**Cách 1: Qua Landing Page (Khuyến nghị)**
1. Mở file `index.html` trong trình duyệt
2. Chọn version mong muốn (Executive hoặc Full)
3. Presentation sẽ mở trong tab mới

**Cách 2: Mở trực tiếp**
- Mở `executive.html` hoặc `full.html` trực tiếp trong trình duyệt

**Yêu cầu trình duyệt:**
- Google Chrome 90+ (Khuyến nghị)
- Firefox 88+
- Microsoft Edge 90+
- Safari 14+

### Điều khiển cơ bản

#### Phím tắt Navigation
- `→` hoặc `Space`: Slide tiếp theo
- `←` hoặc `Shift+Space`: Slide trước
- `↑` / `↓`: Di chuyển vertical slides (nếu có)
- `Home`: Slide đầu tiên
- `End`: Slide cuối cùng
- `Page Down` / `Page Up`: Next/Previous slide

#### Phím tắt chức năng

| Phím | Chức năng |
|------|-----------|
| `O` hoặc `ESC` | Toggle Overview Mode (bird's eye view) |
| `S` | Mở Speaker Notes trong window riêng |
| `F` | Fullscreen mode |
| `B` hoặc `.` | Pause (blank screen) |
| `?` | Hiển thị tất cả keyboard shortcuts |
| `Ctrl+Shift+F` | Search trong slides |
| `Alt+Click` | Zoom vào vùng cụ thể |

### Tính năng nâng cao

#### 1. Overview Mode
- Nhấn phím `O` hoặc `ESC`
- Xem tất cả slides cùng một lúc
- Click vào slide để jump trực tiếp
- Rất hữu ích khi cần tìm slide cụ thể nhanh chóng

#### 2. Speaker Notes
- Nhấn phím `S`
- Mở window riêng với:
  - Speaker notes cho slide hiện tại
  - Preview slide tiếp theo
  - Timer (elapsed time)
  - Current/total slide number
- **Lưu ý**: Cần allow popup trong browser

#### 3. Search
- Nhấn `Ctrl+Shift+F` (Windows/Linux) hoặc `Cmd+Shift+F` (Mac)
- Nhập từ khóa cần tìm
- Kết quả hiển thị với highlight
- Click vào kết quả để jump đến slide đó

#### 4. Zoom
- Nhấn `Alt` và click vào vùng cần zoom
- Click lại để zoom out
- Hữu ích khi muốn focus vào chart/table cụ thể

#### 5. PDF Export
Có 2 cách export ra PDF:

**Cách 1: Qua Browser Print**
1. Thêm `?print-pdf` vào cuối URL
   - Ví dụ: `executive.html?print-pdf`
2. Trình duyệt sẽ tự động chuyển sang print layout
3. Nhấn `Ctrl+P` (Windows) hoặc `Cmd+P` (Mac)
4. Chọn "Save as PDF"
5. Cài đặt khuyến nghị:
   - Landscape orientation
   - No margins
   - Background graphics: ON

**Cách 2: Dùng decktape (Professional)**
```bash
# Cài đặt decktape
npm install -g decktape

# Export Executive version
decktape reveal executive.html executive-presentation.pdf

# Export Full version
decktape reveal full.html full-presentation.pdf
```

#### 6. Fragments (Progressive reveal)
- Một số slides có fragments (nội dung hiển thị dần)
- Nhấn `→` hoặc `Space` để reveal từng fragment
- Nhấn `Shift+→` để skip tất cả fragments và jump sang slide tiếp

## Customization

### Thay đổi màu sắc

Edit file `css/theme-corporate.css`, tìm section `:root`:

```css
:root {
  /* Thay đổi màu chính */
  --color-primary: #1e3c72;          /* Navy blue */
  --color-primary-light: #2a5298;    /* Light navy */
  --color-accent-gold: #FFD700;      /* Gold */
  --color-accent-orange: #FFA500;    /* Orange */
}
```

### Thay đổi font

Edit file `css/theme-corporate.css`, tìm dòng import font:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
```

Thay `Inter` bằng font khác từ Google Fonts.

### Thay đổi transition effect

Edit file `js/reveal-config.js`, tìm:

```javascript
transition: 'slide', // none/fade/slide/convex/concave/zoom
transitionSpeed: 'default', // default/fast/slow
```

## Presentation Tips

### Chuẩn bị trước khi trình bày

1. **Test kỹ thuật**:
   - Mở presentation trên máy tính sẽ trình bày
   - Test kết nối projector/màn hình
   - Ensure resolution 1920x1080 (16:9)
   - Test sound nếu có video

2. **In tài liệu backup**:
   - Export Executive version ra PDF
   - In 5-10 bản handout (1 slide/page hoặc 4 slides/page)
   - Chuẩn bị USB backup

3. **Chuẩn bị Speaker Notes**:
   - Mở Speaker Notes window (`S`) trên màn hình phụ
   - Màn hình chính chiếu cho khán giả
   - Bạn xem notes + preview trên màn phụ

### Trong khi trình bày

1. **Sử dụng Overview Mode**:
   - Nếu có câu hỏi về slide trước, nhấn `O` để tìm nhanh
   - Tránh lùi lại từng slide một

2. **Pause khi cần**:
   - Nhấn `B` để blank screen
   - Tập trung attention vào speaker

3. **Zoom khi cần**:
   - `Alt+Click` vào charts/tables để audience nhìn rõ hơn

4. **Control pace**:
   - Executive: ~1-1.5 phút/slide (21 slides trong 25-30 phút)
   - Full: ~1 phút/slide (70 slides trong 60-75 phút)
   - Để thời gian Q&A ở cuối

### After presentation

1. **Share**:
   - Export ra PDF và gửi cho attendees
   - Hoặc host HTML online và share link

2. **Collect feedback**:
   - Note lại các câu hỏi khó
   - Update slides cho lần sau

## Troubleshooting

### Presentation không load được

**Nguyên nhân**: CDN bị block hoặc không có internet

**Giải pháp**:
1. Download Reveal.js về local:
   ```bash
   npm install reveal.js
   ```
2. Update các `<script src="https://cdn.jsdelivr.net/...">` thành local paths

### Mermaid diagrams không hiển thị

**Nguyên nhân**: Mermaid chưa được init hoặc syntax error

**Giải pháp**:
1. Mở Browser Console (F12)
2. Check lỗi Mermaid
3. Fix syntax trong file HTML

### PDF export bị lỗi layout

**Giải pháp**:
1. Đảm bảo đã thêm `?print-pdf` vào URL
2. Wait cho tất cả slides load xong (3-5 giây)
3. Dùng Chrome (hỗ trợ tốt nhất)
4. Hoặc dùng `decktape` cho kết quả chuyên nghiệp hơn

### Fonts không hiển thị đúng

**Nguyên nhân**: Google Fonts bị block

**Giải pháp**:
1. Download font Inter về local
2. Update `@font-face` trong CSS

## Technical Details

### Performance Optimization

- Lazy load images với `loading="lazy"` attribute
- Preload critical CSS và JS
- Minify CSS/JS cho production
- Optimize images (compress, WebP format)

### Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully supported |
| Firefox | 88+ | ✅ Fully supported |
| Edge | 90+ | ✅ Fully supported |
| Safari | 14+ | ✅ Fully supported |
| IE11 | - | ❌ Not supported |

### Responsive Design

- Desktop: Optimized cho 1920x1080 (16:9)
- Tablet: Tự động scale, swipe gestures
- Mobile: Không khuyến nghị (text quá nhỏ)

## License & Credits

- **Reveal.js**: MIT License - https://revealjs.com/
- **Mermaid.js**: MIT License - https://mermaid.js.org/
- **Chart.js**: MIT License - https://www.chartjs.org/
- **Custom Theme**: Proprietary - Mekong Technology

## Support & Contact

**Vấn đề kỹ thuật:**
- Email: cto@mekongtech.vn
- Phone: +84 xxx xxx xxx

**Nội dung presentation:**
- Email: ceo@mekongtech.vn

**Công ty:**
Công ty TNHH Mekong Technology  
Lô E2-03, Đường D1, Khu Công nghệ cao TP.HCM  
Website: www.mekongtech.vn

---

**Version**: 1.0  
**Last Updated**: October 21, 2025  
**Author**: Mekong Technology Team
