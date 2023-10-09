import UserRepository from "../models/user.model";
export class UserService {
  //tìm kiếm
  static async searchAndPaging(
    keySearch: string,
    pageNumber: number,
    pageSize: number
  ) {
    try {
      const data = await UserRepository.searchAndPaging(
        keySearch,
        pageNumber,
        pageSize
      );
      const total: number = data[0][0].total;
      const result = data[1];
      return {
        total,
        result,
      };
    } catch (error) {
      console.error("có lỗi rồi", error);
    }
  }
}
