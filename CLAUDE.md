# CLAUDE.md — Website Vườn ươm doanh nghiệp

Tài liệu định hướng cho Claude Code khi làm việc trong dự án này. Đây là dự án **mới bắt đầu** (chưa có code) — tài liệu này vừa là brief thiết kế, vừa là quy ước kỹ thuật cần tuân theo khi bắt đầu dựng site.

## 1. Tổng quan dự án

- **Chủ thể:** Vườn Ươm Doanh Nghiệp Tỉnh Vĩnh Long, đơn vị trực thuộc Trường Đại học Trà Vinh. Website hiện tại đang chạy tại `vuonuom.tvu.edu.vn` — dự án này là làm mới (redesign/rebuild) theo phong cách tối giản, hiện đại, chuyên nghiệp hơn, giữ nguyên nội dung/thông tin thật (xem mục 2).
- **Mục tiêu site:** giới thiệu tổ chức, trình bày các chương trình/hoạt động ươm tạo, cập nhật tin tức, cung cấp thông tin liên hệ — **không** phải nền tảng giao dịch hay hệ thống đăng nhập phức tạp.
- **Đối tượng người xem:** sinh viên, doanh nhân, startup/SME, hợp tác xã, cán bộ giảng viên cần tập huấn khởi nghiệp, đối tác và nhà đầu tư.
- **Ngôn ngữ:** Tiếng Việt là chính. Viết HTML với `lang="vi"`, đảm bảo font hiển thị đúng dấu.
- **Định hướng thiết kế:** **tối giản, hiện đại, chuyên nghiệp.** Đây là ưu tiên cao nhất, chi phối mọi quyết định UI.

## 2. Thông tin tổ chức (nội dung thật — dùng để đưa vào site)

Nguồn: `https://vuonuom.tvu.edu.vn` (đối chiếu lại nếu nội dung trên site gốc thay đổi).

- **Tên đầy đủ:** Vườn Ươm Doanh Nghiệp Tỉnh Vĩnh Long
- **Đơn vị chủ quản:** Trường Đại học Trà Vinh
- **Địa chỉ:** Tòa nhà D5, Trường Đại học Trà Vinh, số 126 Nguyễn Thiện Thành, phường Hòa Thuận, tỉnh Vĩnh Long
- **Điện thoại:** 03943.855246 / (+84) 294.3855246 (ext. 127)
- **Email:** vuonuomdoanhnghiep@tvu.edu.vn
- **Mạng xã hội:** Facebook, TikTok `@vuonuomvinhlong`, Zalo

### Sứ mệnh
Hỗ trợ các startup và SME thay đổi tư duy theo hướng đổi mới sáng tạo, nâng cao khả năng cạnh tranh và phát triển bền vững.

### Tầm nhìn
Trở thành trung tâm hỗ trợ khởi nghiệp hàng đầu trong nước đến năm 2030, thúc đẩy đổi mới sáng tạo và hỗ trợ doanh nghiệp vươn tầm quốc gia, quốc tế.

### Giá trị cốt lõi
"Tận tâm hỗ trợ, tiên phong đổi mới, gắn kết cộng đồng, hiệu quả thực chất."

### Chức năng chính
- Huấn luyện chuyên sâu và các chương trình ươm tạo doanh nghiệp.
- Mentoring 1:1, hỗ trợ xây dựng mô hình kinh doanh.
- Kết nối nguồn tài chính, hỗ trợ pháp lý.
- Phát triển mô hình khởi nghiệp sáng tạo, bền vững.
- Dịch vụ hỗ trợ doanh nghiệp: đào tạo, thiết kế website, xây dựng thương hiệu, tổ chức sự kiện, truyền thông.

### Lịch sử phát triển
| Thời gian | Cột mốc |
|---|---|
| 11/05/2018 | UBND tỉnh Trà Vinh công bố thành lập |
| 28/12/2018 | Chính thức thành lập theo Quyết định số 323/QĐ-SKHĐT (Sở Kế hoạch và Đầu tư) |
| 2018 – 01/2022 | Đồng quản lý bởi Ban QLDA SME và Trường ĐH Trà Vinh; thuê ngoài vận hành cho Xlabs (12/2020–2021, do ảnh hưởng Covid-19) |
| 01/2022 – 11/2022 | Chuyển giao về Trung tâm Xúc tiến đầu tư và Hỗ trợ doanh nghiệp (Sở KH&ĐT) |
| 11/2022 – 04/2025 | Bàn giao về Trường Đại học Trà Vinh quản lý, vận hành |
| 05/2025 – 07/2025 | Chính thức trở thành đơn vị trực thuộc Trường Đại học Trà Vinh |
| 08/2025 – nay | Đổi tên thành Vườn Ươm Doanh Nghiệp Tỉnh Vĩnh Long, trực thuộc Trường ĐH Trà Vinh, hướng tới tự chủ tài chính |

### Số liệu nổi bật (dùng cho khối "counter" trang chủ)
- 900+ ý tưởng được hỗ trợ
- 170+ đối tác hợp tác
- 145+ giải thưởng trong nước và quốc tế
- 21+ doanh nghiệp được ươm tạo
- 2.000+ lượt huấn luyện doanh nghiệp
- 12 quyển sách về khởi nghiệp đã xuất bản

### Chương trình chính
- Học viện khởi nghiệp
- Huấn luyện doanh nghiệp
- Khởi sự kinh doanh online
- Kế toán căn bản
- Ứng dụng AI trong quản lý doanh nghiệp

> Khi có thêm nội dung chi tiết (mô tả từng chương trình, bài viết tin tức, ảnh thật, thông tin đội ngũ), cập nhật trực tiếp vào mục này hoặc bổ sung file nội dung riêng — không tự bịa số liệu/nội dung ngoài những gì đã xác nhận ở đây.

## 3. Quy tắc bắt buộc

- **Sau mỗi thay đổi lớn** (redesign một trang hoặc một section quan trọng): chụp screenshot trang đã sửa và so sánh với thiết kế gốc/cấu trúc tham khảo (mục 4) — đối chiếu bố cục, khoảng cách, tính nhất quán trước khi coi là hoàn thành. Dùng trình duyệt/skill verify sẵn có để chụp, không bỏ qua bước này.
- **Website phải mobile-friendly:** mọi thay đổi layout đều phải kiểm tra tối thiểu ở 3 mốc breakpoint — ~375px (mobile), ~768px (tablet), ~1280px (desktop) — trước khi xem là xong.
- **Mọi section phải có animation khi scroll:** dùng `IntersectionObserver` thuần JS (không thêm thư viện ngoài) để reveal section khi cuộn tới — hiệu ứng nhẹ (fade-in + dịch chuyển nhỏ ~16–24px, 200–400ms), nhất quán giữa các section. Bắt buộc tôn trọng `prefers-reduced-motion: reduce` (tắt/giảm animation cho người dùng yêu cầu).

## 4. Về ảnh tham khảo (website FIIS – FTU Innovation and Incubation Space)

Các ảnh chụp màn hình trong thư mục dự án là website của FIIS, dùng làm tham khảo **cấu trúc/bố cục**, không phải tham khảo màu sắc hay mật độ thị giác. Đây là tham khảo về hình thức trình bày — nội dung/số liệu thật của tổ chức lấy theo mục 2.

**Lấy (cấu trúc & luồng nội dung):**
- Header 2 tầng: thanh tiện ích trên cùng (thông tin liên hệ nhanh, tìm kiếm) + thanh điều hướng chính bên dưới.
- Menu ngang có dropdown cho mục "Về chúng tôi" (Giới thiệu / Lịch sử phát triển / Tổ chức / Hội đồng cố vấn khởi nghiệp / Câu lạc bộ).
- Trang chủ theo trình tự: Hero → Giới thiệu ngắn (ảnh + text + nút CTA) → Hoạt động/chương trình nổi bật (dạng tab hoặc lưới) → Số liệu ấn tượng (đếm số) → Tin tức mới nhất (dạng lưới card) → Liên hệ/footer.
- Trang "Chương trình"/"Hoạt động": bộ lọc theo loại, thời gian, khu vực + danh sách card + sidebar liên kết nhanh.
- Trang "Liên hệ": form gửi yêu cầu bên trái + thông tin liên hệ (địa chỉ, điện thoại, email) bên phải.
- Trang tin tức: bài nổi bật lớn phía trên + lưới bài viết nhỏ bên dưới.

**Không lấy (visual style):**
- Tông cam/đỏ rực, banner gradient nhiều hiệu ứng glow/tia sáng.
- Mật độ dày đặc: nhiều khối màu, nhiều border, nhiều badge cùng lúc.
- Nút bo tròn kiểu pill với đổ bóng đậm, icon rối mắt trong menu.
- Chatbox nổi, popup, banner quảng cáo chồng lấn nội dung.

Thay vào đó: nhiều khoảng trắng, phân cấp bằng typography thay vì màu nền, màu sắc dùng có chủ đích (1 màu chủ đạo + trung tính), ảnh thật chất lượng cao thay cho hiệu ứng đồ họa.

## 5. Công nghệ & cấu trúc thư mục

Site tĩnh: **HTML/CSS/JS thuần**, không dùng framework hay build tool (không React/Vue, không bundler, không npm bắt buộc).

```
/
├── index.html
├── ve-chung-toi.html          # Giới thiệu / Lịch sử / Sứ mệnh / Tổ chức
├── hoat-dong.html             # Danh sách hoạt động & chương trình (có filter)
├── tin-tuc.html               # Danh sách tin tức
├── tin-tuc-chi-tiet.html      # Template chi tiết 1 bài (nếu không có CMS)
├── lien-he.html
├── /assets
│   ├── /css
│   │   ├── base.css           # reset, biến CSS (màu, spacing, typography)
│   │   ├── layout.css         # header, footer, grid chung
│   │   └── components.css     # button, card, form, v.v.
│   ├── /js
│   │   ├── main.js            # menu mobile, include header/footer, form validate nhẹ
│   │   └── scroll-reveal.js   # IntersectionObserver dùng chung cho animation khi scroll (mục 3)
│   ├── /images
│   └── /partials
│       ├── header.html
│       └── footer.html
```

- **Header/footer dùng chung:** để tránh sửa N file mỗi khi đổi menu, dùng `fetch()` load `partials/header.html` và `partials/footer.html` vào mỗi trang qua `main.js`. Vì `fetch()` cần HTTP server (không chạy được với `file://`), luôn preview bằng local server:
  ```
  python3 -m http.server 8000
  ```
  hoặc `npx live-server` nếu máy có Node.
- Không thêm framework/CSS library (Bootstrap, Tailwind CDN, v.v.) trừ khi được yêu cầu — giữ đúng tinh thần "tĩnh, gọn, dễ bảo trì".
- Không cài dependency nặng cho một site giới thiệu.

## 6. Kiến trúc thông tin

- **Trang chủ:** Hero (thông điệp + CTA chính) → Giới thiệu ngắn → Chương trình nổi bật (Học viện khởi nghiệp, Huấn luyện doanh nghiệp, Khởi sự kinh doanh online, Kế toán căn bản, Ứng dụng AI...) → Số liệu (mục 2) → Tin tức mới nhất → CTA liên hệ/đăng ký.
- **Về chúng tôi:** Giới thiệu, Lịch sử phát triển, Sứ mệnh – Tầm nhìn – Giá trị cốt lõi, Tổ chức, Hội đồng cố vấn khởi nghiệp, Câu lạc bộ.
- **Hoạt động:** Sự kiện, Ươm tạo, R&D — danh sách có lọc theo trạng thái (sắp diễn ra / đã diễn ra).
- **Chương trình:** trang riêng cho từng chương trình chính (Học viện khởi nghiệp, Huấn luyện doanh nghiệp, Khởi sự kinh doanh online, Kế toán căn bản, Ứng dụng AI trong quản lý doanh nghiệp).
- **Tin tức / Kiến thức:** danh sách + trang chi tiết.
- **Tuyển dụng:** nếu có nhu cầu tuyển dụng/cộng tác viên.
- **Liên hệ:** form + thông tin (mục 2) + bản đồ (nhúng Google Maps tới địa chỉ tại mục 2).

## 7. Design system

### Màu sắc
Chưa có bộ nhận diện thương hiệu chính thức — đề xuất khởi điểm, cần xác nhận lại khi có logo:
- **Primary:** xanh lá đậm/xanh ngọc trầm, ví dụ `#14533D` — gợi liên tưởng "ươm mầm/tăng trưởng" mà vẫn nghiêm túc, chuyên nghiệp.
- **Neutral:** nền `#FFFFFF` / `#F7F8F6`, chữ chính `#1C1C1C`, chữ phụ `#5B5F5A`, đường viền `#E4E6E2`.
- **Accent (CTA/nhấn):** 1 màu ấm duy nhất, ví dụ vàng đất `#D9A441`, dùng tiết chế cho nút hành động chính, không lạm dụng.
- Tuyệt đối tránh: gradient nhiều màu, đổ bóng neon, nhiều màu cùng lúc trên 1 màn hình.

### Typography
- Font đề xuất: **Be Vietnam Pro** (Google Fonts) — hỗ trợ dấu tiếng Việt tốt, hiện đại, nhiều độ đậm. Dùng nhất quán cho cả heading và body (khác trọng lượng font để phân cấp), tránh mix nhiều font.
- Phân cấp rõ bằng size/weight/khoảng cách dòng, không dùng màu sắc để tạo phân cấp.
- Cỡ chữ body tối thiểu 16px, line-height thoáng (1.5–1.7).

### Layout & spacing
- Container max-width ~1200px, padding ngang responsive.
- Dùng hệ thống spacing nhất quán qua CSS variable (vd bước 4/8/16/24/32/48/64px), không dùng số tuỳ tiện.
- Ưu tiên whitespace rộng rãi giữa các section thay vì đường kẻ/màu nền phân tách.

### Component
- **Button:** bo góc nhẹ (4–8px), không bo tròn pill, 1 kiểu primary (nền accent/primary) + 1 kiểu secondary (viền, nền trong suốt).
- **Card:** viền mảnh hoặc shadow rất nhẹ, không dùng nhiều màu nền rực trên card.
- **Header:** nền trắng/nền primary đặc (chọn 1, không dùng cả banner gradient), sticky khi cuộn nếu cần.
- **Ảnh:** ảnh thật (sự kiện, đội ngũ, không gian làm việc), tỷ lệ nhất quán, tránh clip-art/illustration màu mè.

### Responsive & accessibility
- Mobile-first, breakpoint chính ~640px / 768px / 1024px (khớp với mục 3 — bắt buộc test cả 3 mốc).
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), alt text cho ảnh, contrast đạt chuẩn WCAG AA, focus state rõ ràng cho keyboard nav.
- Không dùng `<div>` cho mọi thứ khi có thẻ semantic phù hợp.

## 8. Quy ước code

- CSS thuần với custom properties (`:root { --color-primary: ... }`) làm design token — không hardcode màu/spacing rải rác.
- Đặt tên class kiểu BEM đơn giản (`card`, `card__title`, `card--featured`) để dễ đọc, tránh CSS chồng chéo.
- JS chỉ dùng cho tương tác nhẹ (menu mobile, include partials, filter danh sách, validate form, scroll-reveal) — không build state management phức tạp cho site tĩnh.
- Không inline style trong HTML trừ trường hợp bất khả kháng.
- Giữ mỗi file HTML gọn, tách phần lặp lại (header/footer/CTA banner) ra partials.

## 9. Việc cần xác nhận thêm

- Logo & bộ nhận diện thương hiệu chính thức (nếu có sẵn, ưu tiên dùng thay vì bảng màu đề xuất ở mục 7).
- Ảnh thật (sự kiện, đội ngũ, không gian làm việc) và nội dung chi tiết từng bài tin tức/chương trình.
- Có cần đa ngôn ngữ (Việt/Anh) hay không.
