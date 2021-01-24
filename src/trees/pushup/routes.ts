import { ExerciseTreeRouter } from "@/router/ExerciseTreeRouter";
import { PushUpTree } from "@/trees/pushup/store";
import { ClassicPushUp } from "@/trees/pushup/exercises/classic";
import { DeltaPushUp } from "@/trees/pushup/exercises/delta";
import { SpinxPushUp } from "@/trees/pushup/exercises/spinx";

const PushUpRouter = new ExerciseTreeRouter({
  exercises: [ClassicPushUp, DeltaPushUp, SpinxPushUp],
  exerciseTree: PushUpTree
});

export const pushUpRouter = PushUpRouter.exportRoutes();
export const pushUpPaths = PushUpRouter.exportPaths();
