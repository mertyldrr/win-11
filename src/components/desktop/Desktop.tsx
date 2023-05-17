import { useState } from "react";
import edge from "../../assets/desktop/edge.png";
import recyclebin from "../../assets/desktop/recyclebin.png";
import vscode from "../../assets/desktop/vscode.png";
import { DraggableItem } from "../DraggableItem";
import { DatePicker } from "../taskbar/date/DatePicker";
import { StartMenu } from "../taskbar/startmenu/StartMenu";
import { Widgets } from "../taskbar/widgets/Widgets";

import "./Desktop.css";

export const Desktop = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);

  return (
    <div className="relative h-[calc(100vh-3rem)]">
      <div className="desktop-grid absolute grid grid-flow-col w-full h-full">
        <DraggableItem>
          <button
            onClick={() => setIsSelected(true)}
            className={`h-full w-full flex flex-col justify-center items-center cursor-default text-sm ${
              isSelected
                ? "bg-blue-500 bg-opacity-20"
                : "hover:bg-blue-500 hover:bg-opacity-20"
            }`}
          >
            <img
              className="flex justify-center items-center w-12 h-12"
              src={recyclebin}
              alt=""
            ></img>
            <p className="desktop-text-shadow text-xs text-white drop-shadow-md">
              Recycle Bin
            </p>
          </button>
        </DraggableItem>
        <DraggableItem>
          <button
            onClick={() => setIsSelected2(true)}
            className={`h-full w-full flex flex-col justify-center items-center cursor-default text-sm ${
              isSelected2
                ? "bg-blue-500 bg-opacity-20 hover:bg-blue-500 hover:bg-opacity-20"
                : "hover:bg-blue-500 hover:bg-opacity-20"
            }`}
          >
            <img
              className="flex justify-center items-center w-12 h-12"
              src={vscode}
              alt=""
            ></img>
            <p className="desktop-text-shadow text-xs text-white">VSCode</p>
          </button>
        </DraggableItem>
        <DraggableItem>
          <button
            onClick={() => setIsSelected3(true)}
            className={`h-full w-full flex flex-col justify-center items-center cursor-default ${
              isSelected3
                ? "bg-blue-500 bg-opacity-20"
                : "hover:bg-blue-500 hover:bg-opacity-20"
            }`}
          >
            <img
              className="flex justify-center items-center w-12 h-12"
              src={edge}
              alt=""
            ></img>
            <p className="desktop-text-shadow text-xs text-white">Edge</p>
          </button>
        </DraggableItem>
      </div>
      <Widgets />
      <StartMenu />
      <DatePicker />
    </div>
  );
};
