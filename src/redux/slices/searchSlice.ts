import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultBrowserUrl } from "../../constants";
import { RootState } from "../../store";

type SearchState = {
  searchText: string;
};

const initialState: SearchState = {
  searchText: defaultBrowserUrl,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;

export const selectSearchText = (state: RootState) => state.search.searchText;
