import express from "express";
import { bookAppointment, editPatient,getReport,getReportList } from "../controllers/patientController.js";
import { validateToken } from "../utils/genToken.js";

const PRouter = express.Router()

PRouter.route("/editPatient/:id").post(validateToken, editPatient)   //done
PRouter.route("/getReport/:id").get(validateToken, getReport)   //done
PRouter.route("/getReports").post(validateToken,getReportList)  //done
PRouter.route("/bookAppointment").post(validateToken,bookAppointment)  //done

export default PRouter