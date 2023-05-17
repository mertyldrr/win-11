import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./redux/slices/newsSlice";
import startMenuReducer from "./redux/slices/startMenuSlice";
import datepickerReducer from "./redux/slices/datepickerSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    startMenu: startMenuReducer,
    datepicker: datepickerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
