import { Exercise, ExerciseType } from "@/@types/exercise";
import { usePushUpTreeStore } from "@/trees/pushup/store";

export const DeltaPushUp: Exercise = {
  key: "delta",
  name: "Delta",
  path: "/delta",
  experiencePerInteraction: 15,
  type: ExerciseType.REPETITION,
  lockConditions: [{ store: usePushUpTreeStore, openAtLevel: 2 }]
};
