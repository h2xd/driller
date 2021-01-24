import { defineStore } from "pinia";

import { loadFromLocalStorage } from "@/utils/localStorage";
import { ExerciseData, ExerciseType } from "@/@types/exercise";
import { useHistoryStore } from "@/stores/historyStore";

export type ExerciseState = {
  value: number;
};

type ExerciseStoreOptions = {
  exercise: ExerciseData;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createExerciseStore(options: ExerciseStoreOptions) {
  const { exercise } = options;

  return defineStore({
    id: exercise.id,
    state: () => loadFromLocalStorage<ExerciseState>(exercise.id, { value: 0 }),
    getters: {
      locked() {
        return exercise.unlockConditions
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

        let amount = 0;

        if (exercise.type === ExerciseType.REPETITION) {
          amount = this.value * exercise.experiencePerInteraction;
        } else {
          console.info("TODO: implement time handling");
        }

        const history = useHistoryStore();

        history.logExercise({
          experience: amount,
          exercise: options.exercise,
          interactions: this.value
        });

        exercise.unlockConditions.forEach(condition => {
          const store = condition.store();

          store.checkoutExperiencePoints(amount);
        });
      }
    }
  });
}
