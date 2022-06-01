import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    logged: localStorage.getItem("token") ? true : false,
  },
  reducers: {},
});

export default userSlice.reducer;
