import express from "express";
import { bookAppointment, editPatient,getAppointment,getReport,getReportList } from "../controllers/patientController.js";
import { validateToken } from "../utils/genToken.js";

const PRouter = express.Router()

PRouter.route("/editPatient/:id").post(validateToken, editPatient)   //done
PRouter.route("/getReport/:id").post(validateToken, getReport)   //done
PRouter.route("/getReports").post(validateToken,getReportList)  //done
PRouter.route("/bookAppointment/:id").post(validateToken,bookAppointment)  //done
PRouter.route("/getAppointment").post(validateToken,getAppointment)  //done

export default PRouter