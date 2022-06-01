import axios from "axios";
import { AppDispatch } from "../store/store";

interface RegisterFormData {
  username: string;
  password: string;
  name: string;
  email: string;
}

export const registerUserThunk =
  (formData: RegisterFormData) => async (dispatch: AppDispatch) => {
    await axios.post(
      `${process.env.REACT_APP_API_URL}user/register`,
      formData,
      {
        headers: {
          "Access-Control-Allow-Origin":
            "https://nacho-losada-back-final-project-202204.onrender.com/",
        },
      }
    );
  };
