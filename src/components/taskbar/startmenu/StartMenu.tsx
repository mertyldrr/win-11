import {
  edge,
  calculator,
  settings,
  camera,
  fileExplorer,
  whiteboard,
  twitter,
  terminal,
  discord,
  mail,
  github,
  paint,
  winStore,
  teams,
  notepad,
  xbox,
  spotify,
  netflix,
} from "../../../constants";

import { FaChevronRight } from "react-icons/fa";

import { useSelector } from "react-redux";
import { selectIsStartModalActive } from "../../../redux/slices/startMenuSlice";

import "./StartMenu.css";

export const StartMenu = () => {
  const isStartMenuActive = useSelector(selectIsStartModalActive);
  return (
    <div
      className={`container absolute bottom-3 left-0 right-0 flex flex-col px-8 py-6 rounded-lg mx-auto transform ease-out duration-500 ${
        isStartMenuActive ? "translate-x-0 " : "startmenu-animation"
      }`}
    >
      <div>
        <div className="flex flex-row justify-between items-center px-8">
          <span className="font-medium text-[14px]">Pinned</span>
          <div className="bg-white cursor-pointer px-2 py-0.5 rounded-sm flex flex-row items-center justify-between shadow-md">
            <span className="text-[10px]">All apps</span>
            <FaChevronRight className="w-4 h-2" />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center py-6">
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={edge} alt="" />
            <p className="pinned-app-text">Browser</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={calculator} alt="" />
            <p className="pinned-app-text">Calculator</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={settings} alt="" />
            <p className="pinned-app-text">Settings</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={camera} alt="" />
            <p className="pinned-app-text">Camera</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={fileExplorer} alt="" />
            <p className="pinned-app-text">File Explorer</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={spotify} alt="" />{" "}
            <p className="pinned-app-text">Spotify</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={netflix} alt="" />{" "}
            <p className="pinned-app-text">Netflix</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={whiteboard} alt="" />
            <p className="pinned-app-text">Whiteboard</p>
          </button>
          <button className="pinned-app  hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={twitter} alt="" />
            <p className="pinned-app-text">Twitter</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={xbox} alt="" />
            <p className="pinned-app-text">Xbox</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={terminal} alt="" />
            <p className="pinned-app-text">Terminal</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={discord} alt="" />
            <p className="pinned-app-text">Discord</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={mail} alt="" />
            <p className="pinned-app-text">Mail</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={github} alt="" />
            <p className="pinned-app-text">GitHub</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={paint} alt="" />
            <p className="pinned-app-text">Paint</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={winStore} alt="" />
            <p className="pinned-app-text">Store</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={teams} alt="" />
            <p className="pinned-app-text">Teams</p>
          </button>
          <button className="pinned-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={notepad} alt="" />
            <p className="pinned-app-text">Notepad</p>
          </button>
        </div>
      </div>
      <div className="px-8">
        <div className="flex flex-row justify-between items-center">
          <span className="font-medium text-[14px]">Recommended</span>
        </div>
        <div className="flex flex-row flex-wrap py-6">
          <button className="recommended-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={mail} alt="" />
            <p className="recommended-app-text">Mail</p>
          </button>
          <button className="recommended-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={github} alt="" />
            <p className="recommended-app-text">GitHub</p>
          </button>
          <button className="recommended-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={xbox} alt="" />
            <p className="recommended-app-text">Xbox</p>
          </button>
          <button className="recommended-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={winStore} alt="" />
            <p className="recommended-app-text">Store</p>
          </button>
          <button className="recommended-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={twitter} alt="" />
            <p className="recommended-app-text">Twitter</p>
          </button>
          <button className="recommended-app hover:bg-white hover:bg-opacity-50 rounded-lg">
            <img className="w-8 h-8" src={spotify} alt="" />
            <p className="recommended-app-text">Spotify</p>
          </button>
        </div>
      </div>
    </div>
  );
};
