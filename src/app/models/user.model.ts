import { createConnection } from "../../configs/mysql.config";
import { Pool } from "mysql2";

const connection = createConnection() as Pool;

interface IUserRepository {
  searchAndPaging(
    keySearch: string,
    pageNumber: number,
    pageSize: number
  ): Promise<any>;
}
class UserRepository implements IUserRepository {
  async searchAndPaging(
    keySearch: string,
    pageNumber: number,
    pageSize: number
  ): Promise<any> {
    try {
      return new Promise((resolve, reject) => {
        connection.execute(
          "CALL Proc_user_SearchAndPaging(?, ?, ?)",
          [keySearch, pageNumber, pageSize],
          (err, result) => {
            if (err) return reject(err);
            resolve(result);
          }
        );
      });
    } catch (error) {
      console.error("có lỗi rồi", error);
    }
  }
}

export default new UserRepository();
