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

      doctorsignInStart: (state) => {
        state.loading = true;
      },
      doctorsignInSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
      doctorsignInFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      doctorupdateUserStart: (state) => {
        state.loading = true;
      },
      doctorupdateUserSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
      doctorupdateUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      doctordeleteUserStart: (state) => {
        state.loading = true;
      },
      doctordeleteUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      doctordeleteUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      doctorsignOutUserStart: (state) => {
        state.loading = true;
      },
      doctorsignOutUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      doctorsignOutUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
    
  },
});

export const {
  doctorsignInStart,
  doctorsignInSuccess,
  doctorsignInFailure,
  doctorupdateUserFailure,
  doctorupdateUserSuccess,
  doctorupdateUserStart,
  doctordeleteUserFailure,
  doctordeleteUserSuccess,
  doctordeleteUserStart,
  doctorsignOutUserFailure,
  doctorsignOutUserSuccess,
  doctorsignOutUserStart,
} = doctorSlice.actions;

export default doctorSlice.reducer;