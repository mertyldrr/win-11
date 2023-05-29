import Draggable from "react-draggable";
import {
  maximizeApp,
  toggleMinimizeApp,
  removeApp,
} from "../../redux/slices/appSlice";
import { getIcon, getWindowName, renderApp } from "../../utils";
import close from "../../assets/ui/close.png";
import maxmin from "../../assets/ui/maxmin.png";
import minimize from "../../assets/ui/minimize.png";
import { useAppDispatch } from "../../hooks";

type Props = {
  id: string;
  appName: string;
  isMinimized: boolean;
  isFullscreen?: boolean;
  browserUrl?: string;
};

export const Frame = ({
  id,
  appName,
  isFullscreen,
  isMinimized,
  browserUrl,
}: Props) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(removeApp(id));
  };

  const handleMinimize = () => {
    dispatch(toggleMinimizeApp(id));
  };

  const handleFullscreen = () => {
    dispatch(maximizeApp(id));
  };

  const ruleFullscreen = isFullscreen
    ? "w-full h-full inset-[0%]"
    : "w-5/6 h-5/6 inset-[7%]";
  const ruleMinimize = isMinimized ? "hidden" : "block";

  return (
    <Draggable axis="both" handle=".draggable-handle" scale={1}>
      <div
        className={`${ruleFullscreen} ${ruleMinimize} rounded-lg absolute d`}
      >
        <div className="draggable-handle flex flex-row justify-between items-center h-9 w-full bg-gray-300">
          <div className="flex flex-row space-x-3 justify-center items-center px-2">
            {getIcon(appName, "w-5", "h-5")}

            <p className="text-xs py-1 text-black">{getWindowName(appName)}</p>
          </div>
          <div className="flex flex-row h-full">
            <button
              onClick={handleMinimize}
              className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-4"
            >
              <img className="w-4 h-4" src={minimize} alt=""></img>
            </button>
            <button
              onClick={handleFullscreen}
              className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-4"
            >
              <img className="w-4 h-4" src={maxmin} alt=""></img>
            </button>
            <button
              onClick={handleClose}
              className="h-full cursor-default hover:bg-gray-400 hover:bg-opacity-40 px-4"
            >
              <img className="w-4 h-4" src={close} alt=""></img>
            </button>
          </div>
        </div>
        <div className="h-full w-full">{renderApp(appName, browserUrl)}</div>
      </div>
    </Draggable>
  );
};
