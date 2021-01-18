import { createTreeStore } from "@/stores/createTreeStore";

type ExerciseLockCondition = {
  openAtLevel: number;
  store: ReturnType<typeof createTreeStore>;
};

export enum ExerciseTree {
  PUSHUP = "pushup"
}

export enum ExerciseType {
  TIME = "time",
  REPETITION = "repetition"
}

export type ExerciseData = {
  name: string;
  experiencePerInteraction: number;
  type: ExerciseType;
  lockConditions: ExerciseLockCondition[];
};

export type ExerciseHistory = {
  hlc: string;
  interactions: number;
  experience: number;
  exercise: ExerciseTree;
};
