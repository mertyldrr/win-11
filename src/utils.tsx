import { ReactComponent as PdfLogo } from "./assets/desktop/pdf.svg";
import { ReactComponent as NetflixLogo } from "./assets/taskbar/netflixLogo.svg";
import { edge } from "./constants";
import { ReactComponent as SpotifyLogo } from "./assets/taskbar/spotifyLogo.svg";
import { Edge } from "./components/apps/edge/Edge";
import { Pdf } from "./components/apps/pdf/Pdf";

export const getIcon = (appName: string, w: string, h: string) => {
  switch (appName) {
    case "netflix":
      return <NetflixLogo className={`${w} ${h}`} />;
    case "edge":
      return <img className={`${w} ${h}`} src={edge} alt="" />;
    case "spotify":
      return <SpotifyLogo className={`${w} ${h}`} />;
    case "pdf":
      return <PdfLogo className={`${w} ${h}`} />;
  }
};

export const renderApp = (appName: string) => {
  switch (appName) {
    case "edge":
      return <Edge url="s" />;
    case "pdf":
      return <Pdf />;
  }
};

export const getWindowName = (appName: string) => {
  switch (appName) {
    case "edge":
      return "Microsoft Edge";
    case "pdf":
      return "Adobe Acrobat";
  }
};
