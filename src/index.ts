import express, { Request, Response } from "express";
import cors from "cors";
import { dbInit } from './config/database'
import mainRouter from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(cors());
app.use(mainRouter);
app.use(errorHandler)

dbInit();

app.listen(4000, () => {console.log("Server is running on port 4000")});
