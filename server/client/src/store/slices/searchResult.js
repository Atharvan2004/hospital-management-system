import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    changeData: (state,action) => {
      state.value = action.payload
    },
  },
});
export const { changeData} = resultSlice.actions;

export default resultSlice.reducer;
