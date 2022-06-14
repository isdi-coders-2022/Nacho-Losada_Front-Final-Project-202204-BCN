import { configureStore } from "@reduxjs/toolkit";
import ownSummonersReducer from "../features/ownSummonersSlice";
import summonersReducer from "../features/summonersSlice";
import uiReducer from "../features/uiSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    summoners: summonersReducer,
    ownSummoners: ownSummonersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
