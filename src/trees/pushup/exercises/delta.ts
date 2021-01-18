import { ExerciseData, ExerciseType } from "../../../@types/exerciseTree";
import { usePushUpTreeStore } from "@/trees/pushup/store";

export const DeltaPushUp: ExerciseData = {
  name: "Delta",
  experiencePerInteraction: 15,
  type: ExerciseType.REPETITION,
  lockConditions: [{ store: usePushUpTreeStore, openAtLevel: 2 }]
};
