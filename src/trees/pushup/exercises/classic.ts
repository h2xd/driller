import { Exercise, ExerciseType } from "@/@types/exercise";
import { usePushUpExperienceStore } from "@/trees/pushup/store";

export const ClassicPushUp: Exercise = {
  key: "classic",
  name: "Classic",
  path: "/classic",
  experiencePerInteraction: 10,
  type: ExerciseType.REPETITION,
  lockConditions: [{ store: usePushUpExperienceStore, openAtLevel: 0 }]
};
