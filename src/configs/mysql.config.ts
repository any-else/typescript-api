import mysql2, { PoolOptions } from "mysql2";

//init connection
export const createConnection = () => {
  try {
    return mysql2.createPool({
      host: "localhost",
      user: "root",
      password: "vuvanbui@18",
      database: "js_230413",
      port: 3306,
    } as PoolOptions);
  } catch (error) {
    console.error(error);
  }
};
