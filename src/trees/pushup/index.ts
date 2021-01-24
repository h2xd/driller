import { ExerciseTreeRouter } from "@/router/ExerciseTreeRouter";
import { PushUpTree } from "./tree";
import { ClassicPushUp } from "@/trees/pushup/exercises/classic";
import { DeltaPushUp } from "@/trees/pushup/exercises/delta";
import { SpinxPushUp } from "@/trees/pushup/exercises/spinx";

export const PushUpRouter = new ExerciseTreeRouter({
  exercises: [ClassicPushUp, DeltaPushUp, SpinxPushUp],
  exerciseTree: PushUpTree
});
