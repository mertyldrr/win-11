import Draggable from "react-draggable";
import { motion, Variants } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  maximizeApp,
  toggleMinimizeApp,
  removeApp,
} from "../../redux/slices/appSlice";
import { useState } from "react";
import { getIcon, getWindowName, renderApp } from "../../utils";
import { minimize, maxmin, close } from "../../constants";

const itemVariants: Variants = {
  start: {
    opacity: 0,
    scale: 0.1,
  },
  end: {
    opacity: 1,
    scale: 1,
  },
  reverseStart: {
    opacity: 1,
    scale: 1,
  },
  reverseEnd: { opacity: 0, scale: 0.1 },
};

type Props = {
  id: string;
  appName: string;
  url: string;
  isMinimized: boolean;
  isFullscreen?: boolean;
};

export const Frame = ({
  id,
  appName,
  url,
  isFullscreen,
  isMinimized,
}: Props) => {
  const dispatch = useDispatch();

  const [isClosed, setIsClosed] = useState<boolean>(false);
  const handleClose = () => {
    setIsClosed(true);

    setTimeout(() => {
      dispatch(removeApp(id));
    }, 500);
  };

  const handleMinimize = () => {
    dispatch(toggleMinimizeApp(id));
  };

  const handleFullscreen = () => {
    dispatch(maximizeApp(id));
  };

  return (
    <motion.div
      variants={itemVariants}
      className="h-full w-full"
      initial={isClosed || isMinimized ? "start" : "reverseEnd"}
      animate={isMinimized || isClosed ? "reverseEnd" : "end"}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Draggable
        axis="both"
        handle=".draggable-handle"
        scale={1}
        bounds="parent"
      >
        <div
          className={`draggable-handle ${
            isFullscreen ? "w-full h-full" : "w-5/6 h-5/6 inset-[7%]"
          } bg-gray-300 touch-none rounded-lg absolute`}
        >
          <div className="flex flex-row justify-between items-center h-9 w-full">
            <div className="flex flex-row space-x-3 justify-center items-center px-2">
              {getIcon(appName, "w-5", "h-5")}

              <p className="text-xs py-1 text-black">
                {getWindowName(appName)}
              </p>
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
          <div className="h-full w-full rounded-b-lg">{renderApp(appName)}</div>
        </div>
      </Draggable>
    </motion.div>
  );
};
