import { defineStore } from "pinia";

import { loadFromLocalStorage } from "@/utils/localStorage";
import { Exercise, ExerciseType } from "@/@types/exercise";

export type ExerciseState = {
  value: number;
};

type ExerciseStoreOptions = {
  id: string;
  defaultState: ExerciseState;
} & Pick<Exercise, "experiencePerInteraction" | "lockConditions" | "type">;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createExerciseStore(options: ExerciseStoreOptions) {
  const {
    defaultState,
    id,
    lockConditions,
    type,
    experiencePerInteraction
  } = options;

  return defineStore({
    id,
    state: () => loadFromLocalStorage<ExerciseState>(id, defaultState),
    getters: {
      locked() {
        return lockConditions
          .map(condition => {
            const store = condition.store();

            return store.experience.level >= condition.openAtLevel;
          })
          .some(conditionIsMet => !conditionIsMet);
      }
    },
    actions: {
      increase(amount: number) {
        if (amount > 0) {
          this.value += amount;
        }
      },
      decrease(amount: number) {
        if (amount > 0) {
          this.value -= amount;

          if (this.value < 0) {
            this.value = 0;
          }
        }
      },
      checkout() {
        if (this.value === 0) {
          return;
        }

        lockConditions.forEach(condition => {
          const store = condition.store();
          let amount = 0;

          if (type === ExerciseType.REPETITION) {
            amount = this.value * experiencePerInteraction;
          } else {
            console.info("TODO: implement time handling");
          }

          store.checkoutExperiencePoints(amount);
        });
      }
    }
  });
}
