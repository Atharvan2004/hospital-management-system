import express from "express"
import { registerDoctor, registerPatient, registerStaff } from "../controllers/adminController.js"
import { validateAdmin, validateToken } from "../utils/genToken.js"

const ARouter = express.Router()

ARouter.route("/registerD").post(validateAdmin,registerDoctor)  //done   //here validate token is
ARouter.route("/registerS").post(validateAdmin,registerStaff)     //done
ARouter.route("/registerP").post(validateAdmin,registerPatient)   //done

export default ARouter