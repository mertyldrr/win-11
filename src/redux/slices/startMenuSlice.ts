import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  isStartModalActive: false,
};

const startMenuSlice = createSlice({
  name: "startMenu",
  initialState,
  reducers: {
    toggleStartModal(state) {
      state.isStartModalActive = !state.isStartModalActive;
    },
  },
});

export const { toggleStartModal } = startMenuSlice.actions;
export default startMenuSlice.reducer;

export const selectIsStartModalActive = (state: RootState) =>
  state.startMenu.isStartModalActive;
