import { createExperienceStore } from "@/stores/createExperienceStore";

export const PUSHUP_STORE_KEY = "tree:pushup";

export const usePushUpExperienceStore = createExperienceStore({
  id: PUSHUP_STORE_KEY,
  levelProgression: 1.8,
  baseDemandPerLevel: 500,
  defaultState: {
    total: 0
  }
});
