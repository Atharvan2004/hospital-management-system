import express from "express";
import { conn } from "./models/conn.js";
import cors from "cors";
import PRouter from "./routes/patientRoute.js";
import ARouter from "./routes/adminRoute.js";
import GRouter from "./routes/generalRoute.js";
import SRouter from "./routes/staffRoute.js";
import cookieParser from "cookie-parser";
import { DRouter } from "./routes/doctorRoute.js";

const app = express();
const port = process.env.PORT || 3000;
await conn();
app.use(cors());
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());
app.use(PRouter);
app.use(DRouter);
app.use(ARouter);
app.use(GRouter);
app.use(SRouter);
// app.use(express.static(path.join(__dirname,'/client/dist')));
