import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import CustomToast from "../../components/CustomToast/CustomToast";
import { loadOffActionCreator, loadOnActionCreator } from "../features/uiSlice";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

interface RegisterFormData {
  username: string;
  password: string;
  name: string;
  email: string;
}

interface LoginFormData {
  username: string;
  password: string;
}

const successIcon = "/icons/success-ico.webp";
const errorIcon = "/icons/error-ico.webp";

const errorLoginText = ': "-Algo ha salido mal. Inténtalo de nuevo."';

export const registerUserThunk =
  (formData: RegisterFormData) => async (dispatch: AppDispatch) => {
    const succesLoginText = ': "-Te has registrado correctamente."';

    try {
      dispatch(loadOnActionCreator());

      await axios.post(
        `${process.env.REACT_APP_API_URL}user/register`,
        formData,
        {
          headers: {
            "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_URL}`,
          },
        }
      );

      dispatch(loadOffActionCreator());
      toast.success(CustomToast(successIcon, succesLoginText), {
        position: "bottom-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch {
      dispatch(loadOffActionCreator());

      toast.error(CustomToast(errorIcon, errorLoginText), {
        position: "bottom-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

export const loginUserThunk =
  (formData: LoginFormData) => async (dispatch: AppDispatch) => {
    const succesLoginText = ': "-Te has logueado correctamente."';

    try {
      dispatch(loadOnActionCreator());

      const {
        data: { token },
      } = await axios.post(
        `${process.env.REACT_APP_API_URL}user/login`,
        formData
      );

      localStorage.setItem("token", token);
      const userInfo = jwtDecode(token);

      dispatch(loadOffActionCreator());
      toast.success(CustomToast(successIcon, succesLoginText), {
        position: "bottom-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(loginActionCreator(userInfo));
    } catch {
      dispatch(loadOffActionCreator());
      toast.error(CustomToast(errorIcon, errorLoginText), {
        position: "bottom-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
