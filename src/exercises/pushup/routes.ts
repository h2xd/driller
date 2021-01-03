import { ExerciseTreeRouter } from "@/router/ExerciseTreeRouter";
import { usePushUpExperienceStore } from "@/exercises/pushup/store";

const PushUpRouter = new ExerciseTreeRouter({
  key: "pushup",
  path: "/pushup",
  name: "PushUp",
  store: usePushUpExperienceStore
});

PushUpRouter.register({ key: "classic", name: "Classic", path: "/classic" });
PushUpRouter.register({ key: "delta", name: "Delta", path: "/delta" });
PushUpRouter.register({ key: "spinx", name: "Spinx", path: "/spinx" });

export const PUSHUP_PATHS = PushUpRouter.exportPaths();
export const pushUpRouter = PushUpRouter.exportRoutes();
