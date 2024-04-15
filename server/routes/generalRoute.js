import express from "express";
import { getDoctors, getPatient, loginAdmin, loginUser, searchDoctors, searchPatients, viewProfile } from "../controllers/generalController.js";
import { validateToken } from "../utils/genToken.js";


const GRouter = express.Router()

GRouter.route("/search").post(searchPatients)   //done
// GRouter.route("/getPatientList").post(searchPatients)
GRouter.route("/search/:id").get(getPatient)  //done
GRouter.route("/searchDoctor").post(searchDoctors);
GRouter.route("/login").post(loginUser)  //done
GRouter.route("/profile").post(validateToken, viewProfile)  //done
GRouter.route("/loginAdmin").post(loginAdmin) 
GRouter.route("/getDoctors").post(getDoctors) //done

export default GRouter