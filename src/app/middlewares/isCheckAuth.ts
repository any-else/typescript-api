import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

export const isCheckAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let accessToken: null | string = null;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      accessToken = req.headers.authorization.split(" ")[1];
    }
    if (!accessToken)
      return res.status(401).json({
        message: "tài khoản hiện tại của bạn chưa login",
      });
    //so sanh co phai hop le hay khong
    const decoded: any = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN as any
    );
    if (!decoded)
      return res.status(401).json({
        message: "mã token của bạn hiện tại đang lỗi",
      });
    //kiem tra xem co ton tai trong database hay ko
    const user = await UserService.findByEmail(decoded.email);
    if (user) {
      res.locals.user = user;
      next();
    } else {
      return res.status(401).json({
        message: "tài khoản của bạn hiện tại không tồn tại",
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: "lỗi",
    });
  }
};
