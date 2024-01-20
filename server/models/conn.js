import { connect } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

async function conn() {
    await connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((error) => {
            console.log("error connecting to db " + error);
        })
}

export {conn};