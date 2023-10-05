import { IUser } from "../types/user.type";
import UserRepository from "../models/user.model";
import jwt from "jsonwebtoken";

export class AuthService {
  static async registerService(user: Omit<IUser, "id" | "roles">) {
    try {
      await UserRepository.register(user);
    } catch (error) {
      console.error(error);
    }
  }
  static generateToken(user: IUser) {
    const userSave = {
      username: user.username,
      email: user.email,
      roles: user.roles,
    };
    return jwt.sign(userSave, process.env.ACCESS_TOKEN as any, {
      expiresIn: "24h",
    });
  }
}
