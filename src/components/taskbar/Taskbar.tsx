import { ReactComponent as SpotifyLogo } from "../../assets/taskbar/spotifyLogo.svg";
import { ReactComponent as NetflixLogo } from "../../assets/taskbar/netflixLogo.svg";
import win11 from "../../assets/taskbar/win11.png";
import fileExplorer from "../../assets/taskbar/fileExplorer.png";
import winStore from "../../assets/taskbar/winStore.png";
import settings from "../../assets/taskbar/settings.png";
import edge from "../../assets/taskbar/edge.png";

import { FiSearch } from "react-icons/fi";
import { AiOutlineWifi } from "react-icons/ai";
import { BsVolumeUp } from "react-icons/bs";
import { RiBatteryChargeLine } from "react-icons/ri";
import { DateTime } from "./DateTime";

export const Taskbar = () => {
  return (
    <div className="absolute bottom-0 w-full h-12 bg-blue-200">
      <div className="flex justify-between w-full h-full">
        <div className="left flex-grow basis-0" />
        <div className="center">
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4">
            <img className="w-8 h-8" src={win11} alt=""></img>
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4">
            <img className="w-8 h-8" src={winStore} alt=""></img>
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4">
            <FiSearch className="rotate-90 w-8 h-8" />
          </button>

          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4">
            <img className="w-8 h-8" src={fileExplorer} alt=""></img>
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4">
            <img className="w-8 h-8" src={edge} alt=""></img>
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4">
            <SpotifyLogo className="w-8 h-8" />
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4">
            <NetflixLogo className="w-8 h-8" />
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4">
            <img className="w-8 h-8" src={settings} alt=""></img>
          </button>
        </div>
        <div className="right flex flex-grow basis-0 justify-end items-center">
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2">
            <RiBatteryChargeLine className="w-6 h-6" />
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2">
            <AiOutlineWifi className="w-6 h-6" />
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2">
            <BsVolumeUp className="w-6 h-6" />
          </button>
          <button className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2">
            <DateTime />
          </button>
        </div>
      </div>
    </div>
  );
};
