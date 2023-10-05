require("dotenv").config();
import bodyParser from "body-parser";
import express, { Express } from "express";
import morgan from "morgan";
import Router from "./routers";
const app: Express = express();

//init middleware global
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.json({ limit: "10kb" }));

//init Routers
Router(app);

//test database

//handle error

export default app;
