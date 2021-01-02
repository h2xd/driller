import { defineStore } from "pinia";
import { loadFromLocalStorage } from "@/utils/localStorage";

export const EXPERIENCE_STORE_KEY = "experience";

type ExperienceState = {
  total: number;
};

export const useExperienceStore = defineStore({
  id: EXPERIENCE_STORE_KEY,
  state: () =>
    loadFromLocalStorage<ExperienceState>(EXPERIENCE_STORE_KEY, {
      total: 0
    }),
  getters: {
    level() {
      return Math.abs(Math.floor(this.total / 525));
    },
    remaining() {
      return this.level * 525 + 525 - this.total;
    }
  },
  actions: {
    addToLevel(xp: number) {
      this.total += xp;
    }
  }
});
