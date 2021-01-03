import { Exercise, ExerciseType } from "@/@types/exercise";
import { usePushUpExperienceStore } from "@/trees/pushup/store";

export const DeltaPushUp: Exercise = {
  key: "delta",
  name: "Delta",
  path: "/delta",
  experiencePerInteraction: 15,
  type: ExerciseType.REPETITION,
  lockConditions: [{ store: usePushUpExperienceStore, openAtLevel: 2 }]
};
