import express from "express"
import { addMedicine, getMedicine } from "../controllers/staffController.js"
import { validateToken } from "../utils/genToken.js";

const SRouter = express.Router();

SRouter.route("/getMedicine").post(validateToken,getMedicine)  //done
SRouter.route("/addMedicine").post(validateToken,addMedicine)  //done

export default SRouter