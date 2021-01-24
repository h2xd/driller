import { Exercise, ExerciseData, ExerciseType } from "@/@types/exercise";
import { PushUpTree, usePushUpTreeStore } from "@/trees/pushup/store";
import { createExerciseStore } from "@/stores/createExerciseStore";

export const ClassicPushUpData: ExerciseData = {
  id: "classic",
  path: "/classic",
  experiencePerInteraction: 10,
  type: ExerciseType.REPETITION,
  tree: PushUpTree,
  unlockConditions: [{ store: usePushUpTreeStore, openAtLevel: 0 }]
};

export const ClassicPushUpStore = createExerciseStore({
  exercise: ClassicPushUpData
});

export const ClassicPushUp: Exercise = {
  ...ClassicPushUpData,
  store: ClassicPushUpStore
};
