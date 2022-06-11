import { configureStore } from "@reduxjs/toolkit";
import summonersReducer from "../features/summonersSlice";
import uiReducer from "../features/uiSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    summoners: summonersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
