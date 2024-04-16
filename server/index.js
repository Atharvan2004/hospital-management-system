import express from "express";
import { conn } from "./models/conn.js";
import cors from "cors";
import PRouter from "./routes/patientRoute.js";
import ARouter from "./routes/adminRoute.js";
import GRouter from "./routes/generalRoute.js";
import SRouter from "./routes/staffRoute.js";
import cookieParser from "cookie-parser";
import { DRouter } from "./routes/doctorRoute.js";
import path from "path"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 3000;
await conn();


app.use(cors())
app.use(cookieParser());
app.use(express.static(path.join(__dirname,".","/client/dist")))
app.use(express.static("public"));
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
// console.log(path.join(__dirname,".","/client/dist","index.html"))
app.use((req, res)=>{
  res.sendFile(path.join(__dirname,".","/client/dist","index.html"))
  })