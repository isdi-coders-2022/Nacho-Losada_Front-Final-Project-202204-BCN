import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
  },
  reducers: {
    loadOn: () => ({ loading: true }),
    loadOff: () => ({ loading: false }),
  },
});

export const { loadOn: loadOnActionCreator, loadOff: loadOffActionCreator } =
  uiSlice.actions;
export default uiSlice.reducer;
