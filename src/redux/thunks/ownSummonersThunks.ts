import axios from "axios";
import { loadOwnListActionCreator } from "../features/ownSummonersSlice";
import { loadOffActionCreator, loadOnActionCreator } from "../features/uiSlice";
import { AppDispatch } from "../store/store";

export const loadOwnSummonersThunk =
  (name: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    try {
      dispatch(loadOnActionCreator());

      const {
        data: { ownSummoners },
      } = await axios.get(`${process.env.REACT_APP_API_URL}user/my-summoners`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: {
          name: name,
        },
      });

      dispatch(loadOwnListActionCreator(ownSummoners));
      dispatch(loadOffActionCreator());
    } catch {
      dispatch(loadOffActionCreator());
    }
  };
