import { defineStore } from "pinia";

import { createExperienceStore } from "@/stores/createExperienceStore";

type TreeStoreOptions = {
  id: string;
  experience: ReturnType<typeof createExperienceStore>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createTreeStore(options: TreeStoreOptions) {
  const { id, experience } = options;

  return defineStore({
    id,
    getters: {
      experience() {
        return experience();
      }
    },
    actions: {
      checkoutExperiencePoints(amount: number) {
        this.experience.addToLevel(amount);
      }
    }
  });
}
