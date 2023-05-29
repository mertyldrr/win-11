import edge from "./assets/desktop/edge.png";
import pdf from "./assets/desktop/pdf.svg";
import vscode from "./assets/desktop/vscode.png";
import netflix from "./assets/taskbar/netflixLogo.svg";
import spotify from "./assets/taskbar/spotifyLogo.svg";
import weather from "./assets/desktop/weather.png";
import ring from "./assets/desktop/ring.svg";
import notepad from "./assets/startmenu/notepad.png";
import { Edge } from "./components/apps/edge/Edge";
import { Pdf } from "./components/apps/pdf/Pdf";
import { Vscode } from "./components/apps/vscode/Vscode";
import { defaultBrowserUrl } from "./constants";
import { Notepad } from "./components/apps/notepad/Notepad";
import { addApp } from "./redux/slices/appSlice";
import { v4 as uuidv4 } from "uuid";
import { Dispatch } from "redux";

export const getIcon = (appName: string, w: string, h: string) => {
  switch (appName) {
    case "vscode":
      return <img className={`${w} ${h}`} src={vscode} alt="" />;
    case "netflix":
      return <img className={`${w} ${h}`} src={netflix} alt="" />;
    case "edge":
      return <img className={`${w} ${h}`} src={edge} alt="" />;
    case "spotify":
      return <img className={`${w} ${h}`} src={spotify} alt="" />;
    case "pdf":
      return <img className={`${w} ${h}`} src={pdf} alt="" />;
    case "lotr":
      return <img className={`${w} ${h}`} src={ring} alt="" />;
    case "weather":
      return <img className={`${w} ${h}`} src={weather} alt="" />;
    case "notepad":
      return <img className={`${w} ${h}`} src={notepad} alt="" />;
    default:
      return <img className={`${w} ${h}`} src={edge} alt="" />;
  }
};

export const renderApp = (appName: string, browserUrl?: string) => {
  switch (appName) {
    case "edge":
      return <Edge url={defaultBrowserUrl} />;
    case "vscode":
      return <Vscode />;
    case "pdf":
      return <Pdf />;
    case "notepad":
      return <Notepad />;
    case "weather":
    case "lotr":
    case "news":
    case "nba":
    case "bing":
    case "stocks":
      return <Edge url={browserUrl} />;
  }
};

export const getWindowName = (appName: string) => {
  switch (appName) {
    case "edge":
      return "Microsoft Edge";
    case "vscode":
      return "Code";
    case "pdf":
      return "Adobe Acrobat";
    case "lotr":
      return "Lord of the Rings";
    case "weather":
      return "Weather App";
    case "notepad":
      return "Notepad";
    default:
      return "Microsoft Edge";
  }
};

export const openApp = (
  name: string,
  dispatch: Dispatch,
  browserUrl?: string
) => {
  const randomId = uuidv4();
  dispatch(
    addApp({
      id: randomId,
      name,
      isActive: true,
      isSelected: true,
      isMinimized: false,
      isFullscreen: false,
      defaultUrl: browserUrl,
    })
  );
};
