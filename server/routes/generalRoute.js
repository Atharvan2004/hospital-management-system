import express from "express";
import { getPatient, loginAdmin, loginUser, searchPatients, viewProfile } from "../controllers/generalController.js";
import { validateToken } from "../utils/genToken.js";


const GRouter = express.Router()

GRouter.route("/search").post(searchPatients)   //done
// GRouter.route("/getPatientList").post(searchPatients)
GRouter.route("/search/:id").get(getPatient)  //done
GRouter.route("/login").post(loginUser)  //done
GRouter.route("/profile").get(validateToken, viewProfile)  //done
GRouter.route("/loginAdmin").post(loginAdmin) 

export default GRouter