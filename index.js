import express from "express";
import cors from "cors";
import dataRouter from "./controllers/data.js";
import mongoose from "mongoose";
import { MONGODB_URI } from "./utils/config.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
mongoose.connect(MONGODB_URI);
app.use(bodyParser.json());

app.use("/api/data", dataRouter);

app.listen(3000);
