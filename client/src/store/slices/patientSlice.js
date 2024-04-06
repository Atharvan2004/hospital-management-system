import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    
    patientsignInStart: (state) => {
      state.loading = true;
    },
    patientsignInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    patientsignInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    patientupdateUserStart: (state) => {
      state.loading = true;
    },
    patientupdateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    patientupdateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    patientdeleteUserStart: (state) => {
      state.loading = true;
    },
    patientdeleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    patientdeleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    patientsignOutUserStart: (state) => {
      state.loading = true;
    },
    patientsignOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    patientsignOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    
  },
});

export const {signInStart,
  patientsignInSuccess,
  patientsignInFailure,
  patientupdateUserFailure,
  patientupdateUserSuccess,
  patientupdateUserStart,
  patientdeleteUserFailure,
  patientdeleteUserSuccess,
  patientdeleteUserStart,
  patientsignOutUserFailure,
  patientsignOutUserSuccess,
  patientsignOutUserStart,} = patientSlice.actions;

export default patientSlice.reducer;