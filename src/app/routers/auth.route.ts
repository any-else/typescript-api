import { Application, Request, Response } from "express";
import { AuthController } from "../controllers/auth.controller";

const baseUrl = "/api/v1/auth";

export default (app: Application) => {
  app.post(`${baseUrl}/register`, AuthController.register);

  app.post(`${baseUrl}/login`, AuthController.login);
};
