import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type NewsState = {
  isSidebarActive: boolean;
  news: Article[];
};

const initialState: NewsState = {
  isSidebarActive: false,
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    toggleNewsSidebar(state) {
      state.isSidebarActive = !state.isSidebarActive;
    },
    setNews(state, action: PayloadAction<Article[]>) {
      state.news = action.payload;
    },
  },
});

export const { toggleNewsSidebar, setNews } = newsSlice.actions;
export default newsSlice.reducer;

export const selectNews = (state: RootState) => state.news.news;
export const selectIsSidebarActive = (state: RootState) =>
  state.news.isSidebarActive;
