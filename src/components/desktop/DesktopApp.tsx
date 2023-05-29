import { useState } from "react";
import { useAppDispatch } from "../../hooks";
import { openApp } from "../../utils";

type Props = {
  name: string;
  icon: string;
  url?: string;
  launchName?: string;
};

export const DesktopApp = ({ name, icon, url, launchName }: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useAppDispatch();

  const onAppClick = () => {
    if (!launchName) return;
    openApp(launchName, dispatch, url);
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
