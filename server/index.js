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


const app = express();
const port = process.env.PORT || 3000;
await conn();


app.use(cors({ origin: 'http://localhost:5173', credentials: true , exposedHeaders: ["set-cookie"], }))
app.use(cookieParser());
app.use((req, res, next) => {
  // Allow requests from specific origins (replace '*' with your frontend URL)
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials (cookies)

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
if (!global.__dirname) {
  global.__dirname = process.cwd();
}
app.use(express.static(path.join(__dirname,".","/client/dist")))
app.use(express.static("public"));
app.use((req, res)=>{
  res.sendFile(path.join(__dirname,".","/client/dist","index.html"))
  })
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
