import { createTreeStore } from "@/stores/createTreeStore";
import { createExerciseStore } from "@/stores/createExerciseStore";

export type ExerciseTree = {
  id: string;
  path: string;
  store: ReturnType<typeof createTreeStore>;
};

export type ExerciseData = {
  id: string;
  path: string;
  experiencePerInteraction: number;
  type: ExerciseType;
  tree: ExerciseTree;
  unlockConditions: ExerciseUnlockCondition[];
};

export type Exercise = {
  store: ReturnType<typeof createExerciseStore>;
} & ExerciseData;

export enum ExerciseType {
  TIME = "time",
  REPETITION = "repetition"
}

type ExerciseUnlockCondition = {
  openAtLevel: number;
  store: ReturnType<typeof createTreeStore>;
};

export type ExerciseHistory = {
  hlc: string;
  interactions: number;
  experience: number;
  exercise: ExerciseData;
};
