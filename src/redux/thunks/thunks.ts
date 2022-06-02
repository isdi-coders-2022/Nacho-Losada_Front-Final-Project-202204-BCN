import axios from "axios";
import jwtDecode from "jwt-decode";
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

export const registerUserThunk = async (formData: RegisterFormData) => {
  await axios.post(`${process.env.REACT_APP_API_URL}user/register`, formData, {
    headers: {
      "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_URL}`,
    },
  });
};

export const loginUserThunk =
  (formData: LoginFormData) => async (dispatch: AppDispatch) => {
    const {
      data: { token },
    } = await axios.post(
      `${process.env.REACT_APP_API_URL}user/login`,
      formData
    );

    localStorage.setItem("token", token);
    const userInfo = jwtDecode(token);

    dispatch(loginActionCreator(userInfo));
  };
