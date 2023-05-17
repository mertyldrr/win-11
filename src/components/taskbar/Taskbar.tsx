import { ReactComponent as SpotifyLogo } from "../../assets/taskbar/spotifyLogo.svg";
import { ReactComponent as NetflixLogo } from "../../assets/taskbar/netflixLogo.svg";

import win11 from "../../assets/taskbar/win11.png";
import fileExplorer from "../../assets/taskbar/fileExplorer.png";
import winStore from "../../assets/taskbar/winStore.png";
import settings from "../../assets/taskbar/settings.png";
import edge from "../../assets/taskbar/edge.png";
import widgets from "../../assets/taskbar/widgets.png";

import { FiSearch } from "react-icons/fi";
import { AiOutlineWifi } from "react-icons/ai";
import { BsVolumeUp } from "react-icons/bs";
import { RiBatteryChargeLine } from "react-icons/ri";
import { DateTime } from "./DateTime";

import {
  selectIsSidebarActive,
  setNewsSidebarActive,
} from "../../redux/slices/newsSlice";
import {
  selectIsStartModalActive,
  setIsStartModalActive,
} from "../../redux/slices/startMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleDatepickerModal } from "../../redux/slices/datepickerSlice";

import "./Taskbar.css";

export const Taskbar = () => {
  const isSidebarActive = useSelector(selectIsSidebarActive);
  const isStartMenuActive = useSelector(selectIsStartModalActive);

  const dispatch = useDispatch();
  const toggleSidebar = (isSidebarActive: boolean) => {
    const newIsActive = !isSidebarActive;
    dispatch(setNewsSidebarActive(newIsActive));
  };
  const toggleStartMenu = (isStartMenuActive: boolean) => {
    const newIsActive = !isStartMenuActive;
    dispatch(setIsStartModalActive(newIsActive));
  };
  return (
    <div className="absolute bottom-0 w-full h-12 taskbar-bg">
      <div className="flex justify-between w-full h-full">
        <div className="left flex-grow basis-0">
          <button
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
            onClick={() => toggleSidebar(isSidebarActive)}
          >
            <img className="w-8 h-8" src={widgets} alt=""></img>
          </button>
        </div>

        <div className="center">
          <button
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-4"
            onClick={() => toggleStartMenu(isStartMenuActive)}
          >
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
          <button
            className="h-full cursor-default hover:bg-blue-500 hover:bg-opacity-20 px-2"
            onClick={() => dispatch(toggleDatepickerModal())}
          >
            <DateTime showDate={true} />
          </button>
        </div>
      </div>
    </div>
  );
};
