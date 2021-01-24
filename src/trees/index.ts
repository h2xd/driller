import { ExerciseIndex } from "@/@types/exercise";
import { PushUpRouter } from "./pushup";

const PushUpIndex = PushUpRouter.exportIndex();

export const exerciseTreeMap: Record<
  ExerciseIndex["key"],
  ExerciseIndex["value"]
> = {
  [PushUpIndex.key]: PushUpIndex.value
};
