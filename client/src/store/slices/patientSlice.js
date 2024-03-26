import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const patientSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    
  },
});

export const {} = patientSlice.actions;

export default patientSlice.reducer;