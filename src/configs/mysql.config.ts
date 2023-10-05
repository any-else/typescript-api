import mysql2 from "mysql2";

export const createConnection = () => {
  try {
    return mysql2.createPool({
      host: "localhost",
      user: "root",
      password: "vuvanbui@18",
      database: "ShopDev",
      port: 3306,
    });
  } catch (error) {
    console.error(error);
  }
};
