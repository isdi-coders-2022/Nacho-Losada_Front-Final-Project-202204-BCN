import axios from "axios";
import { loadListActionCreator } from "../features/summonersSlice";
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
