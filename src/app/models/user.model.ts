import exp from "constants";
import { createConnection } from "../../configs/mysql.config";
import { IUser } from "../types/user.type";
import { Pool } from "mysql2";

const connection = createConnection() as Pool;

interface IUserRepository {
  register(user: Omit<IUser, "id" | "roles">): Promise<any>;
  findByEmail(email: string): Promise<any>;
  getAll(): Promise<any>;
}
class UserRepository implements IUserRepository {
  async register(user: Omit<IUser, "id" | "roles">): Promise<any> {
    try {
      connection.query("INSERT INTO users SET ?", user);
    } catch (error) {
      console.error(error);
    }
  }
  async findByEmail(email: string): Promise<any> {
    try {
      return new Promise((resolve, rejects) => {
        connection.query(
          "SELECT * FROM users WHERE email = ?",
          [email],
          (err, result) => {
            if (err) {
              rejects(err);
            }
            resolve(result);
          }
        );
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getAll(): Promise<any> {
    try {
      return new Promise((resolve, rejects) => {
        connection.query("SELECT * FROM users", (err, result) => {
          if (err) {
            rejects(err);
          }
          resolve(result);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new UserRepository();
