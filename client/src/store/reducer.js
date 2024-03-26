import { combineReducers } from "@reduxjs/toolkit";
import doctorSlice from "./slices/doctorSlice";
import patientSlice from "./slices/patientSlice";
import staffSlice from "./slices/staffSlice";


const rootReducer=combineReducers({
    doctor:doctorSlice,
    patient:patientSlice,
    staff:staffSlice
    
});

export default rootReducer;