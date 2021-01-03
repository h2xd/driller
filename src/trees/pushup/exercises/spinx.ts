import { Exercise, ExerciseType } from "@/@types/exercise";
import { usePushUpExperienceStore } from "@/trees/pushup/store";

export const SpinxPushUp: Exercise = {
  key: "spinx",
  name: "Spinx",
  path: "/spinx",
  experiencePerInteraction: 25,
  type: ExerciseType.REPETITION,
  lockConditions: [{ store: usePushUpExperienceStore, openAtLevel: 3 }]
};
