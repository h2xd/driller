import { createExperienceStore } from "@/stores/createExperienceStore";

type ExerciseUnlockCondition = {
  level: number;
  store: ReturnType<typeof createExperienceStore>;
};

export type Exercise = {
  key: string;
  name: string;
  path: string;
  unlockConditions: ExerciseUnlockCondition[];
};
