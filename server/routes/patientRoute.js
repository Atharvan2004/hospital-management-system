import express from "express";
import { editPatient,getReport,getReportList } from "../controllers/patientController.js";
import { validateToken } from "../utils/genToken.js";

const PRouter = express.Router()

PRouter.route("/editPatient/:id").post(validateToken, editPatient)   //done
PRouter.route("/getReport/:id").get(validateToken, getReport)   //done
PRouter.route("/getReports").post(validateToken,getReportList)  //done

export default PRouter