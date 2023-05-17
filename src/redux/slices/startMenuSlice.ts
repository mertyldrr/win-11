import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  isStartModalActive: false,
};

const startMenuSlice = createSlice({
  name: "startMenu",
  initialState,
  reducers: {
    setIsStartModalActive(state, action) {
      const isActive = action.payload;
      state.isStartModalActive = isActive;
    },
  },
});

export const { setIsStartModalActive } = startMenuSlice.actions;
export default startMenuSlice.reducer;

export const selectIsStartModalActive = (state: RootState) =>
  state.startMenu.isStartModalActive;
