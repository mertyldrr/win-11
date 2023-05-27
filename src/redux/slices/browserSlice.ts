import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultBrowserUrl } from "../../constants";
import { RootState } from "../../store";

type BrowserState = {
  browserHistory: string[];
  searchText: string;
  currentIndex: number;
  isForwardActive: boolean;
  isBackActive: boolean;
};

const initialState: BrowserState = {
  browserHistory: [],
  searchText: defaultBrowserUrl,
  currentIndex: -1,
  isForwardActive: false,
  isBackActive: false,
};

const browserSlice = createSlice({
  name: "browser",
  initialState,
  reducers: {
    setBrowserHistory(state, action: PayloadAction<string>) {
      const previousUrl = state.browserHistory[state.currentIndex];
      const url = action.payload;
      // do not add when prevUrl and url are same, we are already on that page
      if (previousUrl !== url) {
        state.browserHistory.push(url);
        state.searchText = url;
        state.currentIndex++;
        if (state.currentIndex < state.browserHistory.length - 1) {
          state.isForwardActive = true;
        } else {
          state.isForwardActive = false;
        }

        if (state.currentIndex > 0) {
          state.isBackActive = true;
        } else {
          state.isBackActive = false;
        }
      }
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    goBack(state) {
      state.currentIndex--;
      state.searchText = state.browserHistory[state.currentIndex];
      if (state.currentIndex > 0) {
        state.isBackActive = true;
      } else {
        state.isBackActive = false;
      }
      state.isForwardActive = true;
    },
    goForward(state) {
      state.currentIndex++;
      state.searchText = state.browserHistory[state.currentIndex];
      if (state.currentIndex < state.browserHistory.length - 1) {
        state.isForwardActive = true;
      } else {
        state.isForwardActive = false;
      }
      state.isBackActive = true;
    },
  },
});

export const { setBrowserHistory, goBack, goForward } = browserSlice.actions;
export default browserSlice.reducer;

export const selectSearchText = (state: RootState) => state.browser.searchText;
export const selectIsBackActive = (state: RootState) =>
  state.browser.isBackActive;
export const selectIsForwardActive = (state: RootState) =>
  state.browser.isForwardActive;
