import { combineReducers } from "@reduxjs/toolkit";
import doctorSlice from "./slices/doctorSlice";
import patientSlice from "./slices/patientSlice";
import staffSlice from "./slices/staffSlice";
import { resultSlice } from "./slices/searchResult";


const rootReducer=combineReducers({
    doctor:doctorSlice,
    patient:patientSlice,
    staff:staffSlice,
    result:resultSlice
    
});

export default rootReducer;