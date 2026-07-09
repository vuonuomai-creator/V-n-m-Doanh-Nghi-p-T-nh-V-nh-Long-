---
description: Kiểm tra và push toàn bộ thay đổi (kể cả chỉnh sửa thủ công của người dùng) lên git
---

Người dùng đã tự chỉnh sửa file trực tiếp trong IDE (ngoài các thay đổi do Claude thực hiện trong phiên này) và muốn đẩy toàn bộ lên git ngay bây giờ. Thực hiện theo thứ tự:

1. Chạy `git status` và `git diff` để xem toàn bộ thay đổi chưa commit (cả file Claude vừa sửa lẫn file người dùng tự sửa trong IDE).
2. Đọc qua diff, đảm bảo không có gì trông giống thông tin nhạy cảm (key, mật khẩu, `.env`...) trước khi stage.
3. Nếu có file CSS/JS bị sửa (`assets/css/*.css`, `assets/js/*.js`), bump version cache-busting `?v=...` trên tất cả file `.html` ở thư mục gốc trước khi commit (xem quy ước version string đã dùng xuyên suốt dự án, ví dụ `20260708f` → `20260708g`).
4. `git add -A` rồi tạo commit mới (không amend) với message tiếng Việt ngắn gọn, mô tả đúng những gì đã thay đổi — kể cả phần người dùng tự sửa.
5. `git push`.
6. Báo lại ngắn gọn cho người dùng: đã push commit nào, gồm những thay đổi chính nào.

Không cần hỏi lại xác nhận trước khi commit/push — đây là hành động người dùng đã yêu cầu rõ ràng thông qua lệnh này.
