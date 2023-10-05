import { Roles } from "../enums/user.enum";
import { IUser } from "./../types/user.type";
import { NextFunction, Request, Response } from "express";

export const isCheckRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = res.locals;

    if (user.roles === Roles.ADMIN) {
      next();
    } else {
      res.status(401).json({
        message: "mày là user mà không có quyền đâu",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
