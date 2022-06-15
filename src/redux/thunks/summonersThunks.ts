import axios from "axios";
import { toast } from "react-toastify";
import { IFormData } from "../../components/CreateSummoner/CreateSummonerForm";
import CustomToast from "../../components/CustomToast/CustomToast";
import { errorIcon, warningIcon, successIcon } from "../../utils/icons";
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
  (idToDelete: string, summonerName: string) =>
  async (dispatch: AppDispatch) => {
    const succesLoginText = `: "-Adiosito ${summonerName}."`;
    const token = localStorage.getItem("token");

    if (token) {
      try {
        dispatch(loadOnActionCreator());
        await axios.delete(
          `${process.env.REACT_APP_API_URL}summoners/${idToDelete}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
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
          '"-No se ha podido borrar al invocador. Inténtalo de nuevo."';

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

export const createSummonerThunk =
  (formData: IFormData) => async (dispatch: AppDispatch) => {
    dispatch(loadOnActionCreator());
    const token = localStorage.getItem("token");
    const successLoginText = `"-Has creado a ${formData.summonerName}"`;

    if (token) {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}summoners/`,
          formData,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(CustomToast(successIcon, successLoginText), {
          position: "bottom-center",
          hideProgressBar: true,
          progress: undefined,
        });

        dispatch(loadOffActionCreator());
      } catch (error) {
        const errorLoginText =
          '"-No se ha podido crear al invocador. Inténtalo de nuevo."';

        toast.error(CustomToast(errorIcon, errorLoginText), {
          position: "bottom-center",
          hideProgressBar: true,
          progress: undefined,
        });
        dispatch(loadOffActionCreator());
      }
    } else {
      const warnngText = '"-Tienes que estar loggeado para crear un invocador"';

      toast.warning(CustomToast(warningIcon, warnngText), {
        position: "bottom-center",
        hideProgressBar: true,
        progress: undefined,
      });
      dispatch(loadOffActionCreator());
    }
  };

export const editSummonerThunk =
  (editingSummonerId: string, formData: IFormData) =>
  async (dispatch: AppDispatch) => {
    dispatch(loadOnActionCreator());
    const token = localStorage.getItem("token");
    const succesLoginText = `"-Has editado a ${formData.summonerName} correctamente"`;

    if (token) {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}summoners/edit/${editingSummonerId}`,
          formData,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(CustomToast(successIcon, succesLoginText), {
          position: "bottom-center",
          hideProgressBar: true,
          progress: undefined,
        });

        dispatch(loadOffActionCreator());
      } catch (error) {
        const errorLoginText =
          '"-No se ha podido editar al invocador. Inténtalo de nuevo."';

        toast.error(CustomToast(errorIcon, errorLoginText), {
          position: "bottom-center",
          hideProgressBar: true,
          progress: undefined,
        });
        dispatch(loadOffActionCreator());
      }
    } else {
      const warningText =
        '"-Tienes que estar loggeado para editar un invocador"';

      toast.warning(CustomToast(warningIcon, warningText), {
        position: "bottom-center",
        hideProgressBar: true,
        progress: undefined,
      });
      dispatch(loadOffActionCreator());
    }
  };
