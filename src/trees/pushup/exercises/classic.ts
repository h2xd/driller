import { ExerciseData, ExerciseType } from "../../../@types/exerciseTree";
import { usePushUpTreeStore } from "@/trees/pushup/store";

export const ClassicPushUp: ExerciseData = {
  name: "Classic",
  experiencePerInteraction: 10,
  type: ExerciseType.REPETITION,
  lockConditions: [{ store: usePushUpTreeStore, openAtLevel: 0 }]
};
