import edge from "../../assets/desktop/edge.png";
import close from "../../assets/ui/close.png";
import maxmin from "../../assets/ui/maxmin.png";
import minimize from "../../assets/ui/minimize.png";

import { DraggableItem } from "../DraggableItem";
import { Edge } from "../apps/Edge";

type Props = {
  url: string;
};

export const Frame = ({ url }: Props) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center absolute">
      <DraggableItem>
        <div className="flex flex-row justify-between items-center h-9 w-4/5 bg-slate-200">
          <div className="flex flex-row space-x-3 justify-center items-center px-2">
            <img className="w-5 h-5" src={edge} alt=""></img>
            <p className="text-xs py-1 text-black">Microsoft Edge</p>
          </div>
          <div className="flex flex-row h-full">
            <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-4">
              <img className="w-4 h-4" src={minimize} alt=""></img>
            </button>
            <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-4">
              <img className="w-4 h-4" src={maxmin} alt=""></img>
            </button>
            <button className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-4">
              <img className="w-4 h-4" src={close} alt=""></img>
            </button>
          </div>
        </div>
        <Edge />
      </DraggableItem>
    </div>
  );
};
