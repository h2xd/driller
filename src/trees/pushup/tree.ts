import { ExerciseTree } from "@/@types/exercise";
import { usePushUpTreeStore } from "./store";

export const PushUpTree: ExerciseTree = {
  id: "pushup",
  path: "/pushup",
  store: usePushUpTreeStore
};
