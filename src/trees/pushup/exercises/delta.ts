import { Exercise } from "@/@types/exercise";
import { usePushUpExperienceStore } from "@/trees/pushup/store";

export const DeltaPushUp: Exercise = {
  key: "delta",
  name: "Delta",
  path: "/delta",
  unlockConditions: [{ store: usePushUpExperienceStore, level: 2 }]
};
