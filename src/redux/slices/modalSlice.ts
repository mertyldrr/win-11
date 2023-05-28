import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  isStartMenuActive: false,
  isSearchMenuActive: false,
  isNewsSidebarActive: false,
  isDatepickerActive: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleStartMenu(state) {
      state.isStartMenuActive = !state.isStartMenuActive;
      if (state.isSearchMenuActive) {
        state.isSearchMenuActive = false;
      }
    },
    toggleSearchMenu(state) {
      state.isSearchMenuActive = !state.isSearchMenuActive;
      if (state.isStartMenuActive) {
        state.isStartMenuActive = false;
      }
    },
    toggleNewsSidebar(state) {
      state.isNewsSidebarActive = !state.isNewsSidebarActive;
    },
    toggleDatepicker(state) {
      state.isDatepickerActive = !state.isDatepickerActive;
    },
  },
});

export const {
  toggleStartMenu,
  toggleSearchMenu,
  toggleNewsSidebar,
  toggleDatepicker,
} = modalSlice.actions;
export default modalSlice.reducer;

export const selectIsStartMenuActive = (state: RootState) =>
  state.modal.isStartMenuActive;
export const selectIsSearchMenuActive = (state: RootState) =>
  state.modal.isSearchMenuActive;
export const selectIsNewsSidebarActive = (state: RootState) =>
  state.modal.isNewsSidebarActive;
export const selectIsDatepickerActive = (state: RootState) =>
  state.modal.isDatepickerActive;
