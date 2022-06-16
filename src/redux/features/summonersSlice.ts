import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISummoner } from "../../types/interfaces";

const initialState: ISummoner[] = [];

const summonersSlice = createSlice({
  name: "summoners",
  initialState,
  reducers: {
    loadList: (summoners, action: PayloadAction<ISummoner[]>) => action.payload,
    deleteSummoner: (summoners, action: PayloadAction<ISummoner["id"]>) =>
      summoners.filter((summoner) => summoner.id !== action.payload),
    createSummoner: (summoners, action: PayloadAction<ISummoner>) => [
      ...summoners,
      action.payload,
    ],
    editSummoner: (summoners, action: PayloadAction<ISummoner>) =>
      summoners.map((summoner) =>
        summoner.id === action.payload.id
          ? { ...action.payload }
          : { ...summoner }
      ),
  },
});

export const {
  loadList: loadListActionCreator,
  deleteSummoner: deleteSummonerActionCreator,
  createSummoner: createSummonerActionCreator,
  editSummoner: editSummonerActionCreator,
} = summonersSlice.actions;
export default summonersSlice.reducer;
