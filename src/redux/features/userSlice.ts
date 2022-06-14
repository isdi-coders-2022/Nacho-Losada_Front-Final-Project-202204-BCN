import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action) => ({ ...action.payload, logged: true }),
    logout: (user) => initialState,
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;
export default userSlice.reducer;
