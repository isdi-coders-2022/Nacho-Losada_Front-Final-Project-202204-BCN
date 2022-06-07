import axios from "axios";
import {
  deleteSummonerActionCreator,
  loadListActionCreator,
} from "../features/summonersSlice";
import { loadOffActionCreator, loadOnActionCreator } from "../features/uiSlice";
import { AppDispatch } from "../store/store";

export const loadSummonersThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadOnActionCreator());
    const {
      data: { summoners },
    } = await axios.get(`${process.env.REACT_APP_API_URL}summoners`);

    dispatch(loadListActionCreator(summoners));
    dispatch(loadOffActionCreator());
  } catch {
    dispatch(loadOffActionCreator());
  }
};

export const deleteSummonerThunk =
  (idToDelete: string) => async (dispatch: AppDispatch) => {
    await axios.delete(
      `${process.env.REACT_APP_API_URL}summoners/${idToDelete}`
    );
    dispatch(deleteSummonerActionCreator(idToDelete));
  };
