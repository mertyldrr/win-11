import { useState } from "react";
import { DatePicker } from "../taskbar/date/DatePicker";
import { StartMenu } from "../taskbar/startmenu/StartMenu";
import { Widgets } from "../taskbar/widgets/Widgets";

import { edge, recycleBin, vscode, pdf } from "../../constants";

import { Frame } from "./Frame";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addApp, selectApps } from "../../redux/slices/appSlice";
import "./Desktop.css";

export const Desktop = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const apps = useSelector(selectApps);
  const dispatch = useDispatch();

  const openApp = (name: string) => {
    if (apps.some((app) => app.name === name)) return;
    const randomId = uuidv4();
    dispatch(
      addApp({
        id: randomId,
        name,
        isActive: true,
        isSelected: true,
        isMinimized: false,
        isFullscreen: false,
      })
    );
  };

  return (
    <div className="relative h-[calc(100vh-3rem)] w-screen">
      <div className="desktop-grid absolute grid grid-flow-col w-full h-full">
        <button
          onClick={() => setIsSelected(true)}
          className={`h-full w-full flex flex-col justify-center items-center cursor-default text-sm ${
            isSelected
              ? "bg-blue-500 bg-opacity-20"
              : "hover:bg-blue-500 hover:bg-opacity-20"
          }`}
        >
          <img className="w-12 h-12" src={recycleBin} alt=""></img>
          <p className="desktop-text-shadow py-1 text-xs text-white drop-shadow-md">
            Recycle Bin
          </p>
        </button>
        <button
          onClick={() => openApp("vscode")}
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
          onClick={() => openApp("edge")}
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
          onClick={() => openApp("pdf")}
          className={`h-full w-full flex flex-col justify-center items-center cursor-default ${
            isSelected3
              ? "bg-blue-500 bg-opacity-20"
              : "hover:bg-blue-500 hover:bg-opacity-20"
          }`}
        >
          <img className="w-12 h-12" src={pdf} alt=""></img>
          <p className="desktop-text-shadow text-xs py-1 text-white">
            mert_cv.pdf
          </p>
        </button>
      </div>

      <div className="w-full h-full">
        {apps.map((app) => {
          if (!app.isActive) return null;
          return (
            <Frame
              key={app.id}
              id={app.id}
              appName={app.name}
              url={"https://www.bing.com"}
              isMinimized={app.isMinimized}
              isFullscreen={app.isFullscreen}
            />
          );
        })}
      </div>
      <Widgets />
      <StartMenu />
      <DatePicker />
    </div>
  );
};
