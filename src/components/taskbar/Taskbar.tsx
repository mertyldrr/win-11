import { motion } from "framer-motion";

import win11 from "../../assets/taskbar/win11.png";
import fileExplorer from "../../assets/taskbar/fileExplorer.png";
import winStore from "../../assets/taskbar/winStore.png";
import settings from "../../assets/taskbar/settings.png";
import widgets from "../../assets/taskbar/widgets.png";

import { FiSearch } from "react-icons/fi";
import { AiOutlineWifi } from "react-icons/ai";
import { BsVolumeUp } from "react-icons/bs";
import { RiBatteryChargeLine } from "react-icons/ri";
import { DateTime } from "./DateTime";

import {
  toggleStartMenu,
  toggleDatepicker,
  toggleNewsSidebar,
  toggleSearchMenu,
} from "../../redux/slices/modalSlice";
import { toggleMinimizeApp, selectApps } from "../../redux/slices/appSlice";
import { getIcon } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "./Taskbar.css";

export const Taskbar = () => {
  const apps = useAppSelector(selectApps);

  const dispatch = useAppDispatch();

  return (
    <div className="absolute bottom-0 w-full h-12 taskbar-bg">
      <div className="flex justify-between w-full h-full">
        <div className="left flex-grow basis-0">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
            onClick={() => dispatch(toggleNewsSidebar())}
          >
            <img className="w-8 h-8" src={widgets} alt="" />
          </motion.button>
        </div>

        <div className="center">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
            onClick={() => dispatch(toggleStartMenu())}
          >
            <img className="w-8 h-8" src={win11} alt="" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={winStore} alt="" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
            onClick={() => dispatch(toggleSearchMenu())}
          >
            <FiSearch className="rotate-90 w-8 h-8" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={fileExplorer} alt="" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
          >
            <img className="w-8 h-8" src={settings} alt="" />
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
                  <div
                    className={`border-b-2 ${
                      app.isMinimized ? "w-5/12" : "w-11/12"
                    } mx-auto border-blue-400 absolute bottom-1 rounded-b-full left-0 right-0`}
                  />
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
            onClick={() => dispatch(toggleDatepicker())}
          >
            <DateTime showDate={true} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
