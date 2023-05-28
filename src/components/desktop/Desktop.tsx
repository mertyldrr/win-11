import { DatePicker } from "../taskbar/date/DatePicker";
import { StartMenu } from "../taskbar/startmenu/StartMenu";
import { Widgets } from "../taskbar/widgets/Widgets";

import { Frame } from "./Frame";
import { selectApps } from "../../redux/slices/appSlice";
import { desktopApps } from "../../constants";
import { DesktopApp } from "./DesktopApp";
import { SearchMenu } from "../taskbar/searchmenu/SearchMenu";
import { useAppSelector } from "../../hooks";
import "./Desktop.css";

export const Desktop = () => {
  const apps = useAppSelector(selectApps);

  return (
    <div className="relative h-[calc(100vh-3rem)] w-screen">
      <div className="desktop-grid absolute grid grid-flow-col w-full h-full">
        {desktopApps.map((app, index) => (
          <DesktopApp
            key={index}
            name={app.name}
            icon={app.icon}
            url={app.url}
            launchName={app.launchName}
          />
        ))}
      </div>
      {apps.map((app) => {
        if (!app.isActive) return null;
        return (
          <Frame
            key={app.id}
            id={app.id}
            appName={app.name}
            isMinimized={app.isMinimized}
            isFullscreen={app.isFullscreen}
            browserUrl={app.defaultUrl}
          />
        );
      })}
      <Widgets />
      <StartMenu />
      <DatePicker />
      <SearchMenu />
    </div>
  );
};
