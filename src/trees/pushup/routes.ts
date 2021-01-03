import { ExerciseTreeRouter } from "@/router/ExerciseTreeRouter";
import { PUSHUP_STORE_KEY, usePushUpTreeStore } from "@/trees/pushup/store";
import { ClassicPushUp } from "@/trees/pushup/exercises/classic";
import { DeltaPushUp } from "@/trees/pushup/exercises/delta";
import { SpinxPushUp } from "@/trees/pushup/exercises/spinx";

const PushUpRouter = new ExerciseTreeRouter({
  key: "pushup",
  path: "/pushup",
  name: "PushUp",
  storeKey: PUSHUP_STORE_KEY,
  store: usePushUpTreeStore
});

PushUpRouter.register(ClassicPushUp);
PushUpRouter.register(DeltaPushUp);
PushUpRouter.register(SpinxPushUp);

export const PUSHUP_PATHS = PushUpRouter.exportPaths();
export const pushUpRouter = PushUpRouter.exportRoutes();
