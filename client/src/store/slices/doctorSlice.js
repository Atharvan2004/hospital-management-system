import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    
  },
});

export const {} = doctorSlice.actions;

export default doctorSlice.reducer;