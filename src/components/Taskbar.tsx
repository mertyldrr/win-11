import { ReactComponent as EdgeLogo } from "../assets/taskbar/edgeLogo.svg";
import { ReactComponent as SpotifyLogo } from "../assets/taskbar/spotifyLogo.svg";
import { ReactComponent as NetflixLogo } from "../assets/taskbar/netflixLogo.svg";

import { SiWindows11 } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import { FcOpenedFolder } from "react-icons/fc";
export const Taskbar = () => {
  return (
    <div className="flex flex-row space-x-6 justify-center items-center w-full h-14 bg-blue-200">
      <SiWindows11 className="w-8 h-8 text-blue-600" />
      <FiSearch className="rotate-90 w-8 h-8" />
      <FcOpenedFolder className="w-8 h-8" />
      <EdgeLogo className="w-8 h-8" />
      <SpotifyLogo className="w-8 h-8" />
      <NetflixLogo className="w-8 h-8" />
    </div>
  );
};
