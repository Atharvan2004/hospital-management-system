import express from "express";
import { createReport, editPatient, searchPatients, getPatientReport, newPatient, getPatientDetails } from "../controllers/patientController.js";

const PRouter = express.Router()