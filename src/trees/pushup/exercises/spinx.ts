import { Exercise, ExerciseData, ExerciseType } from "@/@types/exercise";
import { createExerciseStore } from "@/stores/createExerciseStore";
import { PushUpTree } from "../tree";
import { usePushUpTreeStore } from "../store";

export const SpinxPushUpData: ExerciseData = {
  id: "spinx",
  path: "/spinx",
  experiencePerInteraction: 25,
  type: ExerciseType.REPETITION,
  tree: PushUpTree,
  unlockConditions: [{ store: usePushUpTreeStore, openAtLevel: 3 }]
};

export const SpinxPushUpStore = createExerciseStore({
  exercise: SpinxPushUpData
});

export const SpinxPushUp: Exercise = {
  ...SpinxPushUpData,
  store: SpinxPushUpStore
};
