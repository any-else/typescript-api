import UserRepository from "../models/user.model";
export class UserService {
  static async findByEmail(email: string) {
    try {
      const data = await UserRepository.findByEmail(email);
      return data[0];
    } catch (err) {
      console.error(err);
    }
  }
  static async getAll() {
    try {
      const data = await UserRepository.getAll();
      return data;
    } catch (error) {}
  }
}
