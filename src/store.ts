import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./redux/slices/newsSlice";
import appReducer from "./redux/slices/appSlice";
import browserReducer from "./redux/slices/browserSlice";
import modalReducer from "./redux/slices/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    news: newsReducer,
    apps: appReducer,
    browser: browserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
