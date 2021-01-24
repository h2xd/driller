import { createTreeStore } from "@/stores/createTreeStore";
import { createExperienceStore } from "@/stores/createExperienceStore";

export const PUSHUP_STORE_KEY = "tree:pushup";

export const usePushUpExperienceStore = createExperienceStore({
  id: PUSHUP_STORE_KEY + ":experience",
  levelProgression: 1.8,
  baseDemandPerLevel: 500,
  defaultState: {
    total: 0
  }
});

export const usePushUpTreeStore = createTreeStore({
  id: PUSHUP_STORE_KEY,
  experience: usePushUpExperienceStore
});
