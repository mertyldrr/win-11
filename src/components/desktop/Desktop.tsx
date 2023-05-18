import { useState } from "react";
import { DatePicker } from "../taskbar/date/DatePicker";
import { StartMenu } from "../taskbar/startmenu/StartMenu";
import { Widgets } from "../taskbar/widgets/Widgets";

import { ReactComponent as PdfLogo } from "../../assets/desktop/pdf.svg";

import edge from "../../assets/desktop/edge.png";
import recyclebin from "../../assets/desktop/recyclebin.png";
import vscode from "../../assets/desktop/vscode.png";

import { Frame } from "./Frame";
import "./Desktop.css";

export const Desktop = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);

  return (
    <div className="relative h-[calc(100vh-3rem)] w-screen overflow-hidden">
      <div className="desktop-grid absolute grid grid-flow-col w-full h-full">
        <button
          onClick={() => setIsSelected(true)}
          className={`h-full w-full flex flex-col justify-center items-center cursor-default text-sm ${
            isSelected
              ? "bg-blue-500 bg-opacity-20"
              : "hover:bg-blue-500 hover:bg-opacity-20"
          }`}
        >
          <img className="w-12 h-12" src={recyclebin} alt=""></img>
          <p className="desktop-text-shadow py-1 text-xs text-white drop-shadow-md">
            Recycle Bin
          </p>
        </button>
        <button
          onClick={() => setIsSelected2(true)}
          className={`h-full w-full flex flex-col justify-center items-center cursor-default text-sm ${
            isSelected2
              ? "bg-blue-500 bg-opacity-20 hover:bg-blue-500 hover:bg-opacity-20"
              : "hover:bg-blue-500 hover:bg-opacity-20"
          }`}
        >
          <img className="w-12 h-12" src={vscode} alt=""></img>
          <p className="desktop-text-shadow text-xs py-1 text-white">VSCode</p>
        </button>
        <button
          onClick={() => setIsSelected3(true)}
          className={`h-full w-full flex flex-col justify-center items-center cursor-default ${
            isSelected3
              ? "bg-blue-500 bg-opacity-20"
              : "hover:bg-blue-500 hover:bg-opacity-20"
          }`}
        >
          <img className="w-12 h-12" src={edge} alt=""></img>
          <p className="desktop-text-shadow text-xs py-1 text-white">Edge</p>
        </button>
        <button
          onClick={() => setIsSelected3(true)}
          className={`h-full w-full flex flex-col justify-center items-center cursor-default ${
            isSelected3
              ? "bg-blue-500 bg-opacity-20"
              : "hover:bg-blue-500 hover:bg-opacity-20"
          }`}
        >
          <PdfLogo className="w-12 h-12" />
          <p className="desktop-text-shadow text-xs py-1 text-white">
            mert_cv.pdf
          </p>
        </button>
      </div>
      <Frame url={"https://www.bing.com/"} />
      <Widgets />
      <StartMenu />
      <DatePicker />
    </div>
  );
};
