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
    setNews(state, action: PayloadAction<Article[]>) {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;

export const selectNews = (state: RootState) => state.news.news;
