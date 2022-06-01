import axios from "axios";

interface RegisterFormData {
  username: string;
  password: string;
  name: string;
  email: string;
}

export const registerUserThunk = async (formData: RegisterFormData) => {
  await axios.post(`${process.env.REACT_APP_API_URL}user/register`, formData, {
    headers: {
      "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_URL}`,
    },
  });
};
