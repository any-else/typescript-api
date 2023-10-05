import { Application } from "express";
import { isCheckAuth } from "../middlewares/isCheckAuth";
import { UserController } from "../controllers/user.controller";
import { isCheckRole } from "../middlewares/isCheckRole";

const baseUrl = "/api/v1/user";

export default (app: Application) => {
  //khởi tạo middleware ở router
  app.use(isCheckAuth);

  app.get(`${baseUrl}/all`, isCheckRole, UserController.getAllUser);
};
