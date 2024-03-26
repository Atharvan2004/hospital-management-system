import { configureStore } from '@reduxjs/toolkit'
import  resultReducer  from './slices/searchResult'
import staffSlice from './slices/staffSlice'
import doctorSlice from './slices/doctorSlice'
import patientSlice from './slices/patientSlice'

export const store = configureStore({
  reducer: {
    result:resultReducer,
    staff:staffSlice,
    doctor:doctorSlice,
    patient:patientSlice
  },
})