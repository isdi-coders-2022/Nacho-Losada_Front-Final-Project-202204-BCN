import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    logged: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    login: (user, action) => ({ ...action.payload, logged: true }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;
export default userSlice.reducer;
