import express from "express"
import { asyncErrorHandler } from "../middleware/asyncErrorHandler"

const getPatient = asyncErrorHandler((req,res)=>{

    const query = req.body.query
    

})