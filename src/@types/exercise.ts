import { createExperienceStore } from "@/stores/createExperienceStore";

type ExerciseLockCondition = {
  openAtLevel: number;
  store: ReturnType<typeof createExperienceStore>;
};

export enum ExerciseType {
  TIME = "time",
  REPETITION = "repetition"
}

export type Exercise = {
  key: string;
  name: string;
  path: string;
  experiencePerInteraction: number;
  type: ExerciseType;
  lockConditions: ExerciseLockCondition[];
};
