import { defineStore } from "pinia";

import { loadFromLocalStorage } from "@/utils/localStorage";

export type SettingsState = {
  colorTheme: string;
};

const SETTINGS_STORE_ID = "driller:settings";
const defaultState: SettingsState = { colorTheme: "dark" };

export const useSettingsStore = defineStore({
  id: SETTINGS_STORE_ID,
  state: () =>
    loadFromLocalStorage<SettingsState>(SETTINGS_STORE_ID, defaultState),
  getters: {},
  actions: {
    changeColorTheme(newColorTheme: SettingsState["colorTheme"]) {
      console.log(newColorTheme);
      this.colorTheme = newColorTheme;
    }
  }
});
