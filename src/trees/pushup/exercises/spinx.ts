import { ExerciseData, ExerciseType } from "../../../@types/exerciseTree";
import { usePushUpTreeStore } from "@/trees/pushup/store";

export const SpinxPushUp: ExerciseData = {
  name: "Spinx",
  experiencePerInteraction: 25,
  type: ExerciseType.REPETITION,
  lockConditions: [{ store: usePushUpTreeStore, openAtLevel: 3 }]
};
