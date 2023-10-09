import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import AppError from "../utils/AppError";

export class UserController {
  static async searchAndPaging(req: Request, res: Response) {
    //lấy các thông số từ client
    try {
      const keySearch: string = String(req.query.keysearch);
      const pageNumber: number = Number(req.query.pagenumber);
      const pageSize: number = Number(req.query.pagesize);
      const data = await UserService.searchAndPaging(
        keySearch,
        pageNumber,
        pageSize
      );

      res.status(200).json(data);
    } catch (error: any) {
      throw new AppError(error.message, 500);
    }
  }
}
