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
        message: "access cua m deo co",
      });
    //so sanh co phai hop le hay khong
    const decoded: any = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN as any
    );
    if (!decoded)
      return res.status(401).json({
        message: "access cua m bi sai",
      });
    //kiem tra xem co ton tai trong database hay ko
    const user = await UserService.findByEmail(decoded.email);
    if (user) {
      res.locals.user = user;
      next();
    } else {
      return res.status(401).json({
        message: "tai khoan hien tai ko ton tai",
      });
    }
  } catch (error: any) {
    return res.status(401).json({
      message: "tai khoan hien tai ko ton tai",
    });
  }
};
