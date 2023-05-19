import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type App = {
  id: string;
  name: string;
  isActive: boolean;
  isSelected: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
};

type AppState = {
  apps: App[];
};

const initialState: AppState = {
  apps: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addApp(state, action: PayloadAction<App>) {
      state.apps.push(action.payload);
    },
    removeApp(state, action: PayloadAction<string>) {
      const idToRemove = action.payload;
      state.apps = state.apps.filter((app) => app && app.id !== idToRemove);
    },
    minimizeApp(state, action: PayloadAction<string>) {
      const idToMinimize = action.payload;
      // find the app
      const appIndex = state.apps.findIndex(
        (app) => app && app.id === idToMinimize
      );
      if (appIndex !== -1) {
        // update minimized value
        state.apps[appIndex].isMinimized = !state.apps[appIndex].isMinimized;
      }
    },
    maximizeApp(state, action: PayloadAction<string>) {
      const idToMaximize = action.payload;
      // find the app
      const appIndex = state.apps.findIndex(
        (app) => app && app.id === idToMaximize
      );
      if (appIndex !== -1) {
        // update maximized value
        state.apps[appIndex].isFullscreen = !state.apps[appIndex].isFullscreen;
      }
    },
  },
});

export const { addApp, removeApp, minimizeApp, maximizeApp } = appSlice.actions;
export default appSlice.reducer;

export const selectApps = (state: RootState) => state.apps.apps;
