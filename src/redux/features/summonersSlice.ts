import { createSlice } from "@reduxjs/toolkit";
import { ISummoner } from "../../components/Summoner/Summoner";

const initialState: ISummoner[] = [];

const summonersSlice = createSlice({
  name: "summoners",
  initialState,
  reducers: {
    loadList: (summoners, action) => action.payload,
  },
});

export const { loadList: loadListActionCreator } = summonersSlice.actions;
export default summonersSlice.reducer;
