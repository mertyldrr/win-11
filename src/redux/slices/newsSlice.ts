import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  isSidebarActive: false,
  news: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNewsSidebarActive(state, action) {
      const isActive = action.payload;
      state.isSidebarActive = isActive;
    },
    setNews(state, action) {
      state.news = action.payload;
    },
  },
});

export const { setNewsSidebarActive, setNews } = newsSlice.actions;
export default newsSlice.reducer;

export const selectIsSidebarActive = (state: RootState) =>
  state.news.isSidebarActive;
