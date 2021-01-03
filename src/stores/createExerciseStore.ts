import { defineStore } from "pinia";

import { loadFromLocalStorage } from "@/utils/localStorage";
import { Exercise } from "@/@types/exercise";

type ExerciseState = {
  value: number;
};

type ExerciseStoreOptions = {
  id: string;
  defaultState: ExerciseState;
} & Pick<Exercise, "experiencePerInteraction" | "lockConditions" | "type">;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createExerciseStore(options: ExerciseStoreOptions) {
  const { defaultState, id, lockConditions } = options;

  return defineStore({
    id,
    state: () => loadFromLocalStorage<ExerciseState>(id, defaultState),
    getters: {
      locked() {
        return lockConditions
          .map(condition => {
            const store = condition.store();

            return store.level >= condition.openAtLevel;
          })
          .some(conditionIsMet => !conditionIsMet);
      }
    }
  });
}
