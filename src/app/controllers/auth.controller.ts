import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

export class AuthController {
  //register
  static register = async (req: Request, res: Response) => {
    console.log("body", req.body);
    try {
      const salt: any = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hashSync(req.body.password, salt);
      const newUser = {
        email: req.body.email,
        username: req.body.username,
        pass_word: hashed,
      };
      console.log("newUser", newUser);
      await AuthService.registerService(newUser);

      res.status(200).json({
        message: "tao moi tai khoan moi thanh cong",
      });
    } catch (error) {
      res.status(500).json({
        message: "tao moi that bais",
        error: error,
      });
    }
  };

  //login
  static login = async (req: Request, res: Response) => {
    try {
      //lay user
      const user = await UserService.findByEmail(req.body.email);
      const comparePassword = await bcrypt.compare(
        req.body.password,
        user.pass_word
      );
      //kiem tra
      if (!user || !comparePassword)
        return res.status(400).json({
          message:
            "dang nhap that bai. Thong tin tai khoan mat khau ko chinh xac",
        });

      //tao token
      const accessToken = AuthService.generateToken(user);
      const { pass_word, roles, id, ...rest } = user;
      //tao refresher token
      res.status(200).json({
        user: rest,
        accessToken: accessToken,
      });
    } catch (error) {}
  };
}
