import { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsDatepickerActive } from "../../../redux/slices/datepickerSlice";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Datepicker.css";

export const DatePicker = () => {
  const [selected, setSelected] = useState<Date>();
  const isDatepickerActive = useSelector(selectIsDatepickerActive);
  return (
    <div
      className={`datepicker-container absolute bottom-3 right-3 rounded-lg transform ease-out duration-500 ${
        isDatepickerActive ? "translate-x-0 " : "datepicker-animation"
      }`}
    >
      <DayPicker mode="single" selected={selected} onSelect={setSelected} />
    </div>
  );
};
