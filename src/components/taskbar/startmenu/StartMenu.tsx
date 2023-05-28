import psyduck from "../../../assets/startmenu/psyduck.png";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlinePoweroff } from "react-icons/ai";
import { pinnedApps, recommendedApps } from "../../../constants";
import "./StartMenu.css";
import { selectIsStartMenuActive } from "../../../redux/slices/modalSlice";
import { useAppSelector } from "../../../hooks";

export const StartMenu = () => {
  const isStartMenuActive = useAppSelector(selectIsStartMenuActive);
  return (
    <div
      className={`container absolute bottom-3 left-0 right-0 flex flex-col pt-6 rounded-lg mx-auto transform ease-out duration-500 ${
        isStartMenuActive ? "translate-x-0 " : "startmenu-animation"
      }`}
    >
      <div className="px-8">
        <div className="flex justify-between items-center px-8">
          <span className="font-medium text-sm">Pinned</span>
          <div className="bg-white cursor-pointer px-2 py-0.5 rounded-sm flex items-center justify-between shadow-md">
            <span className="text-xs">All apps</span>
            <FaChevronRight className="w-4 h-2" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center py-6">
          {pinnedApps.map((app) => (
            <button
              className="pinned-app hover:bg-white hover:bg-opacity-80 rounded-sm"
              key={app.name}
            >
              <img className="w-8 h-8" src={app.icon} alt="" />
              <p className="pinned-app-text">{app.name}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="px-12">
        <div className="px-4">
          <span className="font-medium text-sm">Recommended</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 py-4">
          {recommendedApps.map((app) => (
            <button
              className="hover:bg-white hover:bg-opacity-80 rounded-sm w-full flex justify-start items-center px-4 py-3 cursor-default"
              key={app.name}
            >
              <img className="w-8 h-8" src={app.icon} alt="" />
              <p className="recommended-app-text">{app.name}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="px-12 flex justify-between w-full border-t border-gray-400 bg-gray-100 bg-opacity-60 rounded-b-lg py-2">
        <div className="hover:bg-white hover:bg-opacity-80 rounded-sm p-4 py-2 flex justify-between items-center">
          <img className="w-8 h-8" src={psyduck} alt="" />
          <p className="text-xs ml-2 cursor-default">Mert</p>
        </div>
        <button className="hover:bg-white hover:bg-opacity-80 rounded-sm px-4 py-2">
          <AiOutlinePoweroff className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
