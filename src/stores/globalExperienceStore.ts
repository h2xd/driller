import { createExperienceStore } from "@/stores/createExperienceStore";

export const EXPERIENCE_STORE_KEY = "experience";

export const useGlobalExperienceStore = createExperienceStore({
  id: EXPERIENCE_STORE_KEY,
  levelProgression: 1.6,
  baseDemandPerLevel: 1000,
  defaultState: {
    total: 0
  }
});
