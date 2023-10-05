import { RowDataPacket } from "mysql2";
export interface IUser extends RowDataPacket {
  id: number;
  email: string;
  username: string;
  pass_word: string;
  roles?: number;
}
