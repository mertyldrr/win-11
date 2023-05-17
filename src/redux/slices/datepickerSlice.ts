import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  isDatepickerActive: false,
};

const datepickerSlice = createSlice({
  name: "datepicker",
  initialState,
  reducers: {
    toggleDatepickerModal(state) {
      state.isDatepickerActive = !state.isDatepickerActive;
    },
  },
});

export const { toggleDatepickerModal } = datepickerSlice.actions;
export default datepickerSlice.reducer;

export const selectIsDatepickerActive = (state: RootState) =>
  state.datepicker.isDatepickerActive;
