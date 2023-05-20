import { motion } from "framer-motion";

import {
  win11,
  fileExplorer,
  winStore,
  settings,
  edge,
  widgets,
  spotify,
  netflix,
} from "../../constants";

import { FiSearch } from "react-icons/fi";
import { AiOutlineWifi } from "react-icons/ai";
import { BsVolumeUp } from "react-icons/bs";
import { RiBatteryChargeLine } from "react-icons/ri";
import { DateTime } from "./DateTime";

import { toggleNewsSidebar } from "../../redux/slices/newsSlice";
import { toggleStartModal } from "../../redux/slices/startMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleDatepickerModal } from "../../redux/slices/datepickerSlice";

import "./Taskbar.css";
import { toggleMinimizeApp, selectApps } from "../../redux/slices/appSlice";
import { getIcon } from "../../utils";

export const Taskbar = () => {
  const apps = useSelector(selectApps);

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(toggleNewsSidebar());
  };
  const toggleStartMenu = () => {
    dispatch(toggleStartModal());
  };
  return (
    <div className="absolute bottom-0 w-full h-12 taskbar-bg">
      <div className="flex justify-between w-full h-full">
        <div className="left flex-grow basis-0">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
            onClick={() => toggleSidebar()}
          >
            <img className="w-8 h-8" src={widgets} alt=""></img>
          </motion.button>
        </div>

        <div className="center">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
            onClick={() => toggleStartMenu()}
          >
            <img className="w-8 h-8" src={win11} alt=""></img>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={winStore} alt=""></img>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <FiSearch className="rotate-90 w-8 h-8" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={fileExplorer} alt=""></img>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={edge} alt=""></img>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={spotify} alt=""></img>{" "}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={netflix} alt=""></img>{" "}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={settings} alt=""></img>
          </motion.button>
          {apps
            .filter((app) => app.isMinimized || app.isActive)
            .map((app, index) => {
              const icon = getIcon(app.name, "w-8", "h-8");
              return (
                <motion.button
                  key={index}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => dispatch(toggleMinimizeApp(app.id))}
                  className="h-full cursor-default bg-gray-100 bg-opacity-70 px-4 mr-1 border-b-blue-400 relative"
                >
                  {icon}
                  <div className="border-b-2 w-11/12 mx-auto border-blue-400 absolute bottom-1 rounded-b-full left-0 right-0" />
                </motion.button>
              );
            })}
        </div>
        <div className="right flex flex-grow basis-0 justify-end items-center">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2"
          >
            <RiBatteryChargeLine className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2"
          >
            <AiOutlineWifi className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2"
          >
            <BsVolumeUp className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2"
            onClick={() => dispatch(toggleDatepickerModal())}
          >
            <DateTime showDate={true} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
