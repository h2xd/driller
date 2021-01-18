import { ExerciseTreeRouter } from "@/router/ExerciseTreeRouter";
import { PUSHUP_STORE_KEY, usePushUpTreeStore } from "@/trees/pushup/store";
import { ClassicPushUp } from "@/trees/pushup/exercises/classic";
import { DeltaPushUp } from "@/trees/pushup/exercises/delta";
import { SpinxPushUp } from "@/trees/pushup/exercises/spinx";
import { ExerciseTree } from "@/@types/exerciseTree";
import { APP_PATH } from "@/router/paths";

const pushUpHomePath = `${APP_PATH}/pushup`;

const PushUpRouter = new ExerciseTreeRouter({
  key: "pushup",
  path: pushUpHomePath,
  name: "PushUp",
  storeKey: PUSHUP_STORE_KEY,
  exercise: ExerciseTree.PUSHUP,
  store: usePushUpTreeStore
});

export const PUSHUP_KEYS = {
  CLASSIC: "classic",
  DELTA: "delta",
  SPINX: "spinx"
};

export const PUSHUP_PATHS = {
  home: pushUpHomePath,
  [PUSHUP_KEYS.CLASSIC]: `${pushUpHomePath}/classic`,
  [PUSHUP_KEYS.DELTA]: `${pushUpHomePath}/delta`,
  [PUSHUP_KEYS.SPINX]: `${pushUpHomePath}/spinx`
} as const;

PushUpRouter.register(
  { key: PUSHUP_KEYS.CLASSIC, path: PUSHUP_PATHS[PUSHUP_KEYS.CLASSIC] },
  ClassicPushUp
);
PushUpRouter.register(
  { key: PUSHUP_KEYS.DELTA, path: PUSHUP_PATHS[PUSHUP_KEYS.DELTA] },
  DeltaPushUp
);
PushUpRouter.register(
  { key: PUSHUP_KEYS.SPINX, path: PUSHUP_PATHS[PUSHUP_KEYS.SPINX] },
  SpinxPushUp
);

export const pushUpRouter = PushUpRouter.exportRoutes();
