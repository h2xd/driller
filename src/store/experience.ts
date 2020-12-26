import { defineStore } from "pinia";

const lsEntry = localStorage.getItem("state:experience");

type ExperienceState = {
  total: number;
};

export const useExperienceStore = defineStore({
  id: "experience",
  state: (): ExperienceState =>
    lsEntry
      ? (JSON.parse(lsEntry) as ExperienceState)
      : {
          total: 0
        },
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
