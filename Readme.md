### Hướng dẫn hiểu luồng project

![demo luồng](https://firebasestorage.googleapis.com/v0/b/chat-react-fabb1.appspot.com/o/Screenshot%202023-10-05%20022734.png?alt=media&token=f9458351-e49a-4f55-ac2a-d37b83f408aa&_gl=1*sbowad*_ga*MTk5MTMwNzM4LjE2OTY0OTA5Mjk.*_ga_CW55HF8NVT*MTY5NjQ5MDkyOS4xLjEuMTY5NjQ5MTE2My40OC4wLjA.)

1. SRC

- là nơi chứa app và configs

2. server.ts

- là nơi host app lên trên port

3. app

- là nơi chứa toàn bộ thông tin ứng dụng dùng để viết API

- Trong app gồm các folder

```
 -- Controllers: dùng để luân chuyển giữa route và service
  --- auth.controller
  --- user.controller
  --- product.controller
  -- Enums: tạo ra những hằng hoặc data một chiều
  -- user.enum.ts
  -- Middlewares: Tạo ra hàm dùng để check auth, author, validate
  -- isCheckAuth: kiểm tra xem đã có tài khoản hay chưa
  -- isCheckRole: kiểm tra quyền của user
  -- Models: Tạo ra những Repository dùng để viết những câu lệnh truy vấn với datbase
  -- user.model.ts
  --Routers: Xây dựng ra những đường dẫn API
  --auth.route
  --index: nơi chứa toàn bộ những route
  --user.route.ts
  --Services: nơi để tương tác với Repository và xử lý các nghiệp vụ bi di nít
  --auth.service
  --user.service
  --Types: xây dựng ra những type để ràng buộc những kiểu thêm vào hoặc xuất ra từ database
  --user.type.ts
  --app.ts: nơi chứa toàn bộ ứng dụng
```

4. configs

- là nơi dùng để cài đặt những thành phần bên ngoài ứng dụng như websocket, đa ngôn ngữ, database
