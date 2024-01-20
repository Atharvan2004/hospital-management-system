import express from "express";
import cors from "cors"

const app = express();
const port =process.env.PORT  || 3000;
// await conn();
app.use(cors());
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json());
// app.use(express.static(path.join(__dirname,'/client/dist')));


