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
    toggleNewsSidebar(state) {
      state.isSidebarActive = !state.isSidebarActive;
    },
    setNews(state, action) {
      state.news = action.payload;
    },
  },
});

export const { toggleNewsSidebar, setNews } = newsSlice.actions;
export default newsSlice.reducer;

export const selectIsSidebarActive = (state: RootState) =>
  state.news.isSidebarActive;
