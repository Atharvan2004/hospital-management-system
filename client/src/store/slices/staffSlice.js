import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const staffSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    
  },
});

export const {} = staffSlice.actions;

export default staffSlice.reducer;