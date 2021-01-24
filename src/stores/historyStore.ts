import { defineStore } from "pinia";

import { ExerciseData } from "@/@types/exercise";
import { useGlobalExperienceStore } from "@/stores/globalExperienceStore";
import { loadFromLocalStorage } from "@/utils/localStorage";
import { initialize, increment, pack, HLC, unpack } from "@/utils/hlc";
import { uuidv4 } from "@/utils/uuidv4";

export type HistoryState = {
  history: ExerciseHistory[];
  hlc: HLC;
};

type PackedHistoryState = {
  history: PackedExerciseHistory[];
  hlc: string;
};

export type ExerciseHistory = {
  hlc: HLC;
  interactions: number;
  experience: number;
  exercise: string;
};

type PackedExerciseHistory = {
  hlc: string;
  interactions: number;
  experience: number;
  exercise: string;
};

const DEFAULT_HISTORY_STATE: PackedHistoryState = {
  history: [],
  hlc: pack(initialize(uuidv4()))
};

export function packHistoryStore(state: HistoryState): PackedHistoryState {
  return {
    hlc: pack(state.hlc),
    history: state.history.map(entry => {
      return {
        ...entry,
        hlc: pack(entry.hlc)
      };
    })
  };
}

export function unpackHistoryState(
  packedState: PackedHistoryState
): HistoryState {
  return {
    hlc: unpack(packedState.hlc),
    history: packedState.history.map(entry => {
      return {
        ...entry,
        hlc: unpack(entry.hlc)
      };
    })
  };
}

const HISTORY_STORE_ID = "driller:history";

export const useHistoryStore = defineStore({
  id: HISTORY_STORE_ID,
  state: () => {
    const lsData = loadFromLocalStorage<PackedHistoryState>(HISTORY_STORE_ID, {
      ...DEFAULT_HISTORY_STATE
    });

    return unpackHistoryState(lsData);
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
          hlc: { ...this.hlc },
          exercise: `${options.exercise.tree.id}:${options.exercise.id}`
        }
      ];

      GlobalExperienceStore.addToLevel(options.experience);
    }
  }
});
