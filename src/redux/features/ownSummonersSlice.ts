import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISummoner } from "../../types/interfaces";

const initialState: ISummoner[] = [];

const ownSummonersSlice = createSlice({
  name: "ownSummoners",
  initialState,
  reducers: {
    loadOwnList: (ownSummoners, action: PayloadAction<ISummoner[]>) =>
      action.payload,
  },
});

export const { loadOwnList: loadOwnListActionCreator } =
  ownSummonersSlice.actions;
export default ownSummonersSlice.reducer;
