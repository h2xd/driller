import { defineStore } from "pinia";
import { loadFromLocalStorage } from "@/utils/localStorage";

export const EXERCISE_TREE_STORE_KEY = "exercises";

// eslint-disable-next-line @typescript-eslint/ban-types
type ExerciseTreeStage = {};

export const useExerciseTreeStore = defineStore({
  id: EXERCISE_TREE_STORE_KEY,
  state: () =>
    loadFromLocalStorage<ExerciseTreeStage>(EXERCISE_TREE_STORE_KEY, {})
});
