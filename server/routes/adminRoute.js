import express from "express"
import { registerDoctor, registerPatient, registerStaff } from "../controllers/adminController.js"

const ARouter = express.Router()

ARouter.route("/registerD").post(registerDoctor)  //done
ARouter.route("/registerS").post(registerStaff)     //done
ARouter.route("/registerP").post(registerPatient)   //done

export default ARouter