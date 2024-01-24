import express from "express"
import { asyncErrorHandler } from "../middleware/asyncErrorHandler"
import { findPatientByQuery } from "../utils/findPatient";

const searchPatients = asyncErrorHandler(async (req, res) => {

    try {
        const query = req.body.query;
        const patientList = await findPatientByQuery(query).catch((err) => {
            console.log(err)
        });
        res.status(201).json({
            success: true,
            patientList
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err
        })
    }

})