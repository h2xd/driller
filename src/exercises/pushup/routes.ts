import { RouteRecordRaw } from "vue-router";
import { createExerciseGroupRouteFactory } from "@/router/exercises";

const {
  groupPath,
  createGroupRoute,
  createPath,
  createRoute
} = createExerciseGroupRouteFactory("/pushup", "PushUp");

export const internalPushUpPaths = {
  classic: createPath("/classic"),
  delta: createPath("/delta"),
  spinx: createPath("/spinx")
} as const;

export const PUSHUP_PATHS = {
  ...groupPath,
  ...internalPushUpPaths
} as const;

export const pushUpRouter: Array<RouteRecordRaw> = [
  createGroupRoute(internalPushUpPaths),
  createRoute(PUSHUP_PATHS.classic, "Classic"),
  createRoute(PUSHUP_PATHS.delta, "Delta"),
  createRoute(PUSHUP_PATHS.spinx, "Spinx")
];
