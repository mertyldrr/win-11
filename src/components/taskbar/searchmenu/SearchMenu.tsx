import calculator from "../../../assets/startmenu/calculator.png";
import terminal from "../../../assets/startmenu/terminal.png";
import github from "../../../assets/startmenu/github.png";
import xbox from "../../../assets/startmenu/xbox.png";
import discord from "../../../assets/startmenu/discord.png";

import { FiSearch } from "react-icons/fi";

import { selectIsSearchMenuActive } from "../../../redux/slices/modalSlice";
import { quickSearchLinks } from "../../../constants";
import { SearchMenuLink } from "./SearchMenuLink";
import { useAppSelector } from "../../../hooks";
import "./SearchMenu.css";

export const SearchMenu = () => {
  const isSearchMenuActive = useAppSelector(selectIsSearchMenuActive);
  return (
    <div
      className={`searchmenu-container absolute bottom-3 left-0 right-0 bg-black flex flex-col pt-6 rounded-lg mx-auto px-8 transform ease-out duration-500 ${
        isSearchMenuActive ? "translate-x-0 " : "searchmenu-animation"
      }`}
    >
      <div className="flex flex-row items-center px-2 py-1 mb-4 bg-gray-50 rounded-md">
        <FiSearch size={16} className="mt-[1px]" />

        <input
          className="w-full bg-gray-50 placeholder:text-xs placeholder: pl-2 outline-none"
          type="text"
          placeholder="Type here to search"
        />
      </div>
      <div className="flex flex-row tabs-text space-x-6 pb-3 text-gray-600">
        <button className="tabs-text">All</button>
        <button>Apps</button>
        <button>Documents</button>
        <button>Web</button>
        <button>More</button>
      </div>
      <span className="font-medium text-sm">Top Apps</span>
      <div className="flex flex-row space-x-6 py-4 justify-evenly">
        <button className="top-app bg-white hover:bg-opacity-50 rounded-sm">
          <img className="w-8 h-8" src={calculator} alt="" />
          <span className="top-app-text">Calculator</span>
        </button>
        <button className="top-app bg-white hover:bg-opacity-50 rounded-sm">
          <img className="w-8 h-8" src={github} alt="" />
          <span className="top-app-text">GitHub</span>
        </button>
        <button className="top-app bg-white hover:bg-opacity-50 rounded-sm">
          <img className="w-8 h-8" src={terminal} alt="" />
          <span className="top-app-text">Terminal</span>
        </button>
        <button className="top-app bg-white hover:bg-opacity-50 rounded-sm">
          <img className="w-8 h-8" src={xbox} alt="" />
          <span className="top-app-text">Xbox</span>
        </button>
        <button className="top-app bg-white hover:bg-opacity-60 rounded-sm">
          <img className="w-8 h-8" src={discord} alt="" />
          <span className="top-app-text">Discord</span>
        </button>
      </div>
      <span className="font-medium text-sm">Quick Search</span>

      <div className="py-4 flex flex-col space-y-2">
        {quickSearchLinks.map((searchLink) => (
          <SearchMenuLink
            label={searchLink.label}
            launchName={searchLink.launchName}
            Icon={searchLink.icon}
            url={searchLink.url}
          />
        ))}
      </div>
    </div>
  );
};
