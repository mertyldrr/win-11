import { useState } from "react";
import edge from "../../assets/desktop/edge.png";
import recyclebin from "../../assets/desktop/recyclebin.png";
import vscode from "../../assets/desktop/vscode.png";
import { DraggableItem } from "../DraggableItem";
import { Sidebar } from "../taskbar/news/Sidebar";

import "./Desktop.css";

export const Desktop = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);

  return (
    <div className="bg-win11 bg-cover relative h-[calc(100vh-3rem)]">
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
            Recycle Bin
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
            VSCode
          </button>
        </DraggableItem>
        <DraggableItem>
          <button
            onClick={() => setIsSelected3(true)}
            className={`h-full w-full flex flex-col justify-center items-center cursor-default text-sm ${
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
            Edge
          </button>
        </DraggableItem>
      </div>
      <Sidebar />
    </div>
  );
};
