import netflix from "../../../assets/taskbar/netflixLogo.svg";
import spotify from "../../../assets/taskbar/spotifyLogo.svg";

import edge from "../../../assets/taskbar/edge.png";
import fileExplorer from "../../../assets/taskbar/fileExplorer.png";
import settings from "../../../assets/taskbar/settings.png";
import winStore from "../../../assets/taskbar/winStore.png";

import calculator from "../../../assets/startmenu/calculator.png";
import camera from "../../../assets/startmenu/camera.png";
import whiteboard from "../../../assets/startmenu/board.png";
import mail from "../../../assets/startmenu/mail.png";
import github from "../../../assets/startmenu/github.png";
import xbox from "../../../assets/startmenu/xbox.png";
import teams from "../../../assets/startmenu/teams.png";
import terminal from "../../../assets/startmenu/terminal.png";
import paint from "../../../assets/startmenu/paint.png";
import discord from "../../../assets/startmenu/discord.png";
import twitter from "../../../assets/startmenu/twitter.png";
import notepad from "../../../assets/startmenu/notepad.png";
import psyduck from "../../../assets/startmenu/psyduck.png";

import { FaChevronRight } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";

import { useSelector } from "react-redux";
import { selectIsStartModalActive } from "../../../redux/slices/startMenuSlice";

import "./StartMenu.css";

export const StartMenu = () => {
  const isStartMenuActive = useSelector(selectIsStartModalActive);
  return (
    <div
      className={`container absolute bottom-3 left-0 right-0 flex flex-col pt-6 rounded-lg mx-auto transform ease-out duration-500 ${
        isStartMenuActive ? "translate-x-0 " : "startmenu-animation"
      }`}
    >
      <div className="px-8">
        <div className="flex flex-row justify-between items-center px-8">
          <span className="font-medium text-[14px]">Pinned</span>
          <div className="bg-white cursor-pointer px-2 py-0.5 rounded-sm flex flex-row items-center justify-between shadow-md">
            <span className="text-[10px]">All apps</span>
            <FaChevronRight className="w-4 h-2" />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center py-6">
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={edge} alt="" />
            <p className="pinned-app-text">Browser</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={calculator} alt="" />
            <p className="pinned-app-text">Calculator</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={settings} alt="" />
            <p className="pinned-app-text">Settings</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={camera} alt="" />
            <p className="pinned-app-text">Camera</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={fileExplorer} alt="" />
            <p className="pinned-app-text">File Explorer</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={spotify} alt="" />{" "}
            <p className="pinned-app-text">Spotify</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={netflix} alt="" />{" "}
            <p className="pinned-app-text">Netflix</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={whiteboard} alt="" />
            <p className="pinned-app-text">Whiteboard</p>
          </button>
          <button className="pinned-app  hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={twitter} alt="" />
            <p className="pinned-app-text">Twitter</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={xbox} alt="" />
            <p className="pinned-app-text">Xbox</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={terminal} alt="" />
            <p className="pinned-app-text">Terminal</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={discord} alt="" />
            <p className="pinned-app-text">Discord</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={mail} alt="" />
            <p className="pinned-app-text">Mail</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={github} alt="" />
            <p className="pinned-app-text">GitHub</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={paint} alt="" />
            <p className="pinned-app-text">Paint</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={winStore} alt="" />
            <p className="pinned-app-text">Store</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={teams} alt="" />
            <p className="pinned-app-text">Teams</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-sm">
            <img className="w-8 h-8" src={notepad} alt="" />
            <p className="pinned-app-text">Notepad</p>
          </button>
        </div>
      </div>
      <div className="px-12">
        <div className="flex flex-row justify-between items-center px-4">
          <span className="font-medium text-[14px]">Recommended</span>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-x-4 py-4">
          <button className="hover:bg-white hover:bg-opacity-50 rounded-sm w-full flex justify-start items-center px-4 py-3">
            <img className="w-8 h-8" src={mail} alt="" />
            <p className="recommended-app-text">Mail</p>
          </button>
          <button className="hover:bg-white hover:bg-opacity-50 rounded-sm w-full flex justify-start items-center px-4 py-3">
            <img className="w-8 h-8" src={github} alt="" />
            <p className="recommended-app-text">GitHub</p>
          </button>
          <button className="hover:bg-white hover:bg-opacity-50 rounded-sm w-full flex justify-start items-center px-4 py-3">
            <img className="w-8 h-8" src={xbox} alt="" />
            <p className="recommended-app-text">Xbox</p>
          </button>
          <button className="hover:bg-white hover:bg-opacity-50 rounded-sm w-full flex justify-start items-center px-4 py-3">
            <img className="w-8 h-8" src={winStore} alt="" />
            <p className="recommended-app-text">Store</p>
          </button>
          <button className="hover:bg-white hover:bg-opacity-50 rounded-sm w-full flex justify-start items-center px-4 py-3">
            <img className="w-8 h-8" src={twitter} alt="" />
            <p className="recommended-app-text">Twitter</p>
          </button>
          <button className="hover:bg-white hover:bg-opacity-50 rounded-sm w-full flex justify-start items-center px-4 py-3">
            <img className="w-8 h-8" src={spotify} alt="" />
            <p className="recommended-app-text">Spotify</p>
          </button>
        </div>
      </div>
      <div className="px-12 flex flex-row justify-between w-full border-t-[1px] py-2 border-gray-400 bg-gray-100 bg-opacity-60 rounded-b-lg">
        <div className="hover:bg-white hover:bg-opacity-50 rounded-sm p-4 py-2 flex flex-row justify-between items-center">
          <img className="w-8 h-8" src={psyduck} alt="" />
          <p className="text-[12px] ml-2">Mert</p>
        </div>
        <button className="hover:bg-white hover:bg-opacity-50 rounded-sm px-4 py-2">
          <AiOutlinePoweroff className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
