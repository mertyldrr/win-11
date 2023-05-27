import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectApps, addApp } from "../../redux/slices/appSlice";
import { v4 as uuidv4 } from "uuid";

type Props = {
  name: string;
  icon: string;
  launchName?: string;
};

export const DesktopApp = ({ name, icon, launchName }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  const apps = useSelector(selectApps);
  const dispatch = useDispatch();

  const openApp = (name: string) => {
    if (apps.some((app) => app.name === name)) return;
    const randomId = uuidv4();
    dispatch(
      addApp({
        id: randomId,
        name,
        isActive: true,
        isSelected: true,
        isMinimized: false,
        isFullscreen: false,
      })
    );
  };

  const onAppClick = () => {
    if (!launchName) return;
    openApp(launchName);
    setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={() => onAppClick()}
      className={`h-full w-full flex flex-col justify-center items-center cursor-default text-sm ${
        isSelected
          ? "bg-blue-500 bg-opacity-20 hover:bg-blue-500 hover:bg-opacity-20"
          : "hover:bg-blue-500 hover:bg-opacity-20"
      }`}
    >
      <img className="w-12 h-12" src={icon} alt="" />
      <p className="desktop-text-shadow text-xs py-1 text-white">{name}</p>
    </button>
  );
};
