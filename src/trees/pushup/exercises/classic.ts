import { Exercise } from "@/@types/exercise";
import { usePushUpExperienceStore } from "@/trees/pushup/store";

export const ClassicPushUp: Exercise = {
  key: "classic",
  name: "Classic",
  path: "/classic",
  unlockConditions: [{ store: usePushUpExperienceStore, level: 0 }]
};
