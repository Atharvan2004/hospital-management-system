import express from "express"
import { createReport, searchTreatedPatients, viewAppointment } from "../controllers/doctorController.js"
import { validateToken } from "../utils/genToken.js"
import { getPatient } from "../controllers/generalController.js";

const DRouter = express.Router()

DRouter.route("/newReport/:id").post(validateToken,createReport); //done
DRouter.route("/search/:id").post(validateToken,getPatient);  //repeated in general Route
DRouter.route("/searchTreatedPatients").post(validateToken,searchTreatedPatients);
DRouter.route("/viewAppointment").post(validateToken,viewAppointment);
// DRouter.route("/newReport/:id").post(validateToken,createReport);  

export {DRouter}