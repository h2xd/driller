import { Exercise } from "@/@types/exercise";
import { usePushUpExperienceStore } from "@/trees/pushup/store";

export const SpinxPushUp: Exercise = {
  key: "spinx",
  name: "Spinx",
  path: "/spinx",
  unlockConditions: [{ store: usePushUpExperienceStore, level: 4 }]
};
