import { Application } from "express";
import AuthRoute from "./auth.route";
import UserRoute from "./user.route";

export default (app: Application) => {
  AuthRoute(app);
  UserRoute(app);
};
