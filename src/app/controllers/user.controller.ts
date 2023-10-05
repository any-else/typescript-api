import { UserService } from "../services/user.service";
import { Request, Response } from "express";

export class UserController {
  static async getAllUser(req: Request, res: Response) {
    try {
      const data = await UserService.getAll();
      res.status(200).json({
        data: data,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
