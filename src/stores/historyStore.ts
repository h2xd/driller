import { defineStore } from "pinia";

import { loadFromLocalStorage } from "@/utils/localStorage";
import { ExerciseData, ExerciseHistory } from "@/@types/exercise";
import { initialize, increment, pack, HLC, unpack } from "@/utils/hlc";
import { uuidv4 } from "@/utils/uuidv4";
import { useGlobalExperienceStore } from "@/stores/globalExperienceStore";

export type HistoryState = {
  history: ExerciseHistory[];
  hlc: HLC | string;
};

const DEFAULT_HISTORY_STATE: HistoryState = {
  history: [],
  hlc: initialize(uuidv4())
};

const HISTORY_STORE_ID = "driller:history";

export const useHistoryStore = defineStore({
  id: HISTORY_STORE_ID,
  state: () => {
    const lsData = loadFromLocalStorage<HistoryState>(HISTORY_STORE_ID, {
      ...DEFAULT_HISTORY_STATE
    });

    return {
      ...lsData,
      hlc: typeof lsData.hlc === "string" ? unpack(lsData.hlc) : lsData.hlc
    };
  },
  getters: {},
  actions: {
    logExercise(options: {
      exercise: ExerciseData;
      interactions: number;
      experience: number;
    }) {
      const GlobalExperienceStore = useGlobalExperienceStore();

      this.hlc = increment(this.hlc);

      this.history = [
        ...this.history,
        {
          experience: options.experience,
          interactions: options.interactions,
          hlc: pack(this.hlc),
          exercise: options.exercise
        }
      ];

      GlobalExperienceStore.addToLevel(options.experience);
    }
  }
});
