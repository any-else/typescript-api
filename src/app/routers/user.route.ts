import { Application } from "express";
import { UserController } from "../controllers/user.controller";

const baseUrl = "/api/v1/user";

export default (app: Application) => {
  app.get(`${baseUrl}/search`, UserController.searchAndPaging);
};
