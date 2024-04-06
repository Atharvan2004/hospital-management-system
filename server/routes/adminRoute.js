import express from "express"
import { registerDoctor, registerPatient, registerStaff } from "../controllers/adminController.js"
import { validateToken } from "../utils/genToken.js"

const ARouter = express.Router()

ARouter.route("/registerD").post(validateToken,registerDoctor)  //done   //here validate token is
ARouter.route("/registerS").post(validateToken,registerStaff)     //done
ARouter.route("/registerP").post(validateToken,registerPatient)   //done

export default ARouter