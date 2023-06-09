import netflix from "./assets/taskbar/netflixLogo.svg";
import spotify from "./assets/taskbar/spotifyLogo.svg";
import edge from "./assets/taskbar/edge.png";
import fileExplorer from "./assets/taskbar/fileExplorer.png";
import settings from "./assets/taskbar/settings.png";
import winStore from "./assets/taskbar/winStore.png";

import calculator from "./assets/startmenu/calculator.png";
import camera from "./assets/startmenu/camera.png";
import whiteboard from "./assets/startmenu/board.png";
import mail from "./assets/startmenu/mail.png";
import github from "./assets/startmenu/github.png";
import xbox from "./assets/startmenu/xbox.png";
import teams from "./assets/startmenu/teams.png";
import terminal from "./assets/startmenu/terminal.png";
import paint from "./assets/startmenu/paint.png";
import discord from "./assets/startmenu/discord.png";
import twitter from "./assets/startmenu/twitter.png";
import notepad from "./assets/startmenu/notepad.png";

import mycom from "./assets/bookmarks/mycom.png";
import weather from "./assets/desktop/weather.png";
import ring from "./assets/desktop/ring.svg";
import recyclebin from "./assets/desktop/recyclebin.png";
import vscode from "./assets/desktop/vscode.png";
import pdf from "./assets/desktop/pdf.svg";

import { BsNewspaper } from "react-icons/bs";
import { SiMicrosoftbing } from "react-icons/si";
import { BiBasketball } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";

export const sandboxUrl =
  "https://codesandbox.io/p/github/mertyldrr/win-11/master?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhw4lmhg00is3t6nifej3tkg%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clhw4lmhg00is3t6nifej3tkg%2522%253A%257B%2522id%2522%253A%2522clhw4lmhg00is3t6nifej3tkg%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clhw4kcbk00c23t6n1bhaut0p%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clhw4kcbk00c23t6n1bhaut0p%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D";

export const defaultBrowserUrl = "https://www.bing.com";

export const desktopApps = [
  {
    name: "Recycle Bin",
    icon: recyclebin,
  },
  {
    name: "Visual Studio Code",
    launchName: "vscode",
    icon: vscode,
  },
  {
    name: "mert_cv.pdf",
    launchName: "pdf",
    icon: pdf,
  },
  {
    name: "Microsoft Edge",
    launchName: "edge",
    icon: edge,
  },
  {
    name: "Lord of the Rings",
    launchName: "lotr",
    icon: ring,
    url: "https://mertyldrr.github.io/lotr/",
  },
  {
    name: "Weather App",
    launchName: "weather",
    icon: weather,
    url: "https://mertyldrr.github.io/weather-app/",
  },
  {
    name: "Notepad",
    launchName: "notepad",
    icon: notepad,
  },
];

export const pinnedApps = [
  { name: "Browser", icon: edge },
  { name: "Calculator", icon: calculator },
  { name: "Settings", icon: settings },
  { name: "Camera", icon: camera },
  { name: "File Explorer", icon: fileExplorer },
  { name: "Spotify", icon: spotify },
  { name: "Netflix", icon: netflix },
  { name: "Whiteboard", icon: whiteboard },
  { name: "Twitter", icon: twitter },
  { name: "Xbox", icon: xbox },
  { name: "Terminal", icon: terminal },
  { name: "Discord", icon: discord },
  { name: "Mail", icon: mail },
  { name: "GitHub", icon: github },
  { name: "Paint", icon: paint },
  { name: "Store", icon: winStore },
  { name: "Teams", icon: teams },
  { name: "Notepad", icon: notepad },
];

export const recommendedApps = [
  { name: "Mail", icon: mail },
  { name: "GitHub", icon: github },
  { name: "Xbox", icon: xbox },
  { name: "Store", icon: winStore },
  { name: "Twitter", icon: twitter },
  { name: "Spotify", icon: spotify },
];

export const quickSearchLinks = [
  {
    label: "News",
    launchName: "news",
    url: "https://www.bing.com/search?q=news",
    icon: BsNewspaper,
  },
  {
    label: "Nba Playoffs",
    launchName: "nba",
    url: "https://www.bing.com/search?q=nba playoffs",
    icon: BiBasketball,
  },
  {
    label: "Bing Chat",
    launchName: "bing",
    url: "https://www.bing.com/search?form=MY0291&OCID=MY0291&q=Bing+AI&showconv=1",
    icon: SiMicrosoftbing,
  },
  {
    label: "Stocks Today",
    launchName: "stocks",
    url: "https://www.bing.com/search?q=stocks today",
    icon: AiOutlineStock,
  },
];

export const bookmarks = [
  { name: "Portfolio", link: "https://cv.mertyildirir.com", icon: mycom },
  { name: "Lotr App", link: "https://mertyldrr.github.io/lotr/", icon: ring },
  {
    name: "Weather App",
    link: "https://mertyldrr.github.io/weather-app/",
    icon: weather,
  },
];
