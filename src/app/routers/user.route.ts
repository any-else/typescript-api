import { Application } from "express";
import { isCheckAuth } from "../middlewares/isCheckAuth";
import { UserController } from "../controllers/user.controller";

const baseUrl = "/api/v1/user";

export default (app: Application) => {
  //khởi tạo middleware ở router
  app.use(isCheckAuth);

  app.get(`${baseUrl}/all`, UserController.getAllUser);
};
