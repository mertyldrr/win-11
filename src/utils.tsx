import { edge, pdf, netflix, spotify } from "./constants";
import { Edge } from "./components/apps/edge/Edge";
import { Pdf } from "./components/apps/pdf/Pdf";

export const getIcon = (appName: string, w: string, h: string) => {
  switch (appName) {
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
