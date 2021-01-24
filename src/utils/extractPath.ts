import { join } from "path";

import { Exercise, ExerciseTree } from "@/@types/exercise";
import { APP_PATH } from "@/router/paths";

export function getExerciseTreePath(tree: ExerciseTree): string {
  return join(APP_PATH, tree.path);
}

export function getExercisePath(exercise: Exercise): string {
  return join(getExerciseTreePath(exercise.tree), exercise.path);
}
