import edge from "./assets/desktop/edge.png";
import pdf from "./assets/desktop/pdf.svg";
import vscode from "./assets/desktop/vscode.png";
import netflix from "./assets/taskbar/netflixLogo.svg";
import spotify from "./assets/taskbar/spotifyLogo.svg";
import { Edge } from "./components/apps/edge/Edge";
import { Pdf } from "./components/apps/pdf/Pdf";
import { Vscode } from "./components/apps/vscode/Vscode";

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
  }
};

export const renderApp = (appName: string) => {
  switch (appName) {
    case "edge":
      return <Edge url="" />;
    case "vscode":
      return <Vscode />;
    case "pdf":
      return <Pdf />;
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
  }
};
