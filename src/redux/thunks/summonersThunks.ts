import axios from "axios";
import { toast } from "react-toastify";
import CustomToast from "../../components/CustomToast/CustomToast";
import {
  deleteSummonerActionCreator,
  loadListActionCreator,
} from "../features/summonersSlice";
import { loadOffActionCreator, loadOnActionCreator } from "../features/uiSlice";
import { AppDispatch } from "../store/store";

const warningIcon = "/icons/warning-ico.webp";
const errorIcon = "/icons/error-ico.webp";

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
  (idToDelete: string, summonerName: string) =>
  async (dispatch: AppDispatch) => {
    const succesLoginText = `: "-Adiosito ${summonerName}."`;
    const token = localStorage.getItem("token");

    if (token) {
      try {
        dispatch(loadOnActionCreator());
        await axios.delete(
          `${process.env.REACT_APP_API_URL}summoners/${idToDelete}`
        );

        toast.success(CustomToast(warningIcon, succesLoginText), {
          position: "bottom-center",
          hideProgressBar: true,
          progress: undefined,
        });

        dispatch(deleteSummonerActionCreator(idToDelete));
        dispatch(loadOffActionCreator());
      } catch (error) {
        const errorLoginText =
          ': "-No se ha podido borrar al invocador. Inténtalo de nuevo."';

        toast.error(CustomToast(errorIcon, errorLoginText), {
          position: "bottom-center",
          hideProgressBar: true,
          progress: undefined,
        });
        dispatch(loadOffActionCreator());
      }
    } else {
      const warningText =
        '"-Tienes que estar loggeado para borrar a un invocador"';

      toast.warning(CustomToast(warningIcon, warningText), {
        position: "bottom-center",
        hideProgressBar: true,
        progress: undefined,
      });
      dispatch(loadOffActionCreator());
    }
  };
