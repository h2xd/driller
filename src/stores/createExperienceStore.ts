import { defineStore } from "pinia";

import { loadFromLocalStorage } from "@/utils/localStorage";

type ExperienceState = {
  total: number;
};

type ExperienceStoreOptions = ExperienceStoreLevelOptions & {
  id: string;
  defaultState: ExperienceState;
};

type ExperienceStoreLevelOptions = {
  baseDemandPerLevel: number;
  levelProgression: number;
};

function roundLevelExperience(
  level: number,
  options: ExperienceStoreLevelOptions
) {
  const { levelProgression, baseDemandPerLevel } = options;

  return Math.floor(
    Math.abs(baseDemandPerLevel * (level - 1) * levelProgression)
  );
}

function evaluateLevel(
  total: number,
  options: ExperienceStoreLevelOptions
): number {
  let level = 0;

  while (total > roundLevelExperience(level, options)) {
    level += 1;
  }

  return level;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function createExperienceStore(options: ExperienceStoreOptions) {
  const { baseDemandPerLevel, levelProgression, defaultState, id } = options;

  const utilOptions = {
    baseDemandPerLevel,
    levelProgression: Math.log(levelProgression) + 1
  };

  return defineStore({
    id,
    state: () => loadFromLocalStorage<ExperienceState>(id, defaultState),
    getters: {
      remainingToNextLevel() {
        return roundLevelExperience(this.level, utilOptions) - this.total;
      },
      nextLevelAt() {
        return roundLevelExperience(this.level, utilOptions);
      },
      nextLevel() {
        return this.level + 1;
      },
      level() {
        return evaluateLevel(this.total, utilOptions);
      }
    },
    actions: {
      addToLevel(xp: number) {
        this.total += xp;
      }
    }
  });
}
