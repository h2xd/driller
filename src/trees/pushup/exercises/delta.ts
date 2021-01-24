import { Exercise, ExerciseData, ExerciseType } from "@/@types/exercise";
import { PushUpTree, usePushUpTreeStore } from "@/trees/pushup/store";
import { createExerciseStore } from "@/stores/createExerciseStore";

export const DeltaPushUpData: ExerciseData = {
  id: "delta",
  path: "/delta",
  experiencePerInteraction: 15,
  type: ExerciseType.REPETITION,
  tree: PushUpTree,
  unlockConditions: [{ store: usePushUpTreeStore, openAtLevel: 2 }]
};

export const DeltaPushUpStore = createExerciseStore({
  exercise: DeltaPushUpData
});

export const DeltaPushUp: Exercise = {
  ...DeltaPushUpData,
  store: DeltaPushUpStore
};
