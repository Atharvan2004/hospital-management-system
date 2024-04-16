import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    staffsignInStart: (state) => {
      state.loading = true;
    },
    staffsignInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    staffsignInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    staffupdateUserStart: (state) => {
      state.loading = true;
    },
    staffupdateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    staffupdateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    staffdeleteUserStart: (state) => {
      state.loading = true;
    },
    staffdeleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    staffdeleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    staffsignOutUserStart: (state) => {
      state.loading = true;
    },
    staffsignOutUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    staffsignOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  staffsignInSuccess,
  staffsignInFailure,
  staffupdateUserFailure,
  staffupdateUserSuccess,
  staffupdateUserStart,
  staffdeleteUserFailure,
  staffdeleteUserSuccess,
  staffdeleteUserStart,
  staffsignOutUserFailure,
  staffsignOutUserSuccess,
  staffsignOutUserStart,} = staffSlice.actions;

export default staffSlice.reducer;