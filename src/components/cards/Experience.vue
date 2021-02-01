<template>
  <Card>
    <div :class="$style.container">
      <ProgressBar :class="$style.experienceBar" :progress="store.progress" />
      <div :class="$style.currentLevel">
        {{ $t("app.level.short") }}.: {{ store.level }}
      </div>
      <div :class="$style.nextLevel">
        {{ $t("app.level.short") }}.: {{ store.nextLevel }}
      </div>

      <div :class="$style.experiencePoints">
        <AnimatedNumber :number="store.remainingToNextLevel" />
        /
        <AnimatedNumber :number="store.requiredExperienceToNextLevel" />
        {{ $t("app.experience.short") }}
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import { APP_ROUTES } from "@/router";
import { createExperienceStore } from "@/stores/createExperienceStore";

import AnimatedNumber from "@/components/base/AnimatedNumber.ts";
import Card from "@/components/cards/Index.vue";
import ProgressBar from "@/components/base/ProgressBar.vue";

export default defineComponent({
  components: {
    AnimatedNumber,
    Card,
    ProgressBar
  },
  props: {
    store: {
      type: Object as PropType<typeof createExperienceStore>,
      required: true
    }
  },
  setup() {
    return {
      APP_ROUTES
    };
  }
});
</script>

<style lang="scss" module>
@import "../../styles/vars";

.container {
  display: grid;
  grid-template-rows: repeat(2, 1rem);
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: $themeSpacingXS;
  grid-template-areas: "bar bar bar bar bar" "currentLevel experiencePoints experiencePoints experiencePoints nextLevel";
  font-size: $themeFontSizeS;
}

.experienceBar {
  grid-area: bar;
}

.currentLevel {
  grid-area: currentLevel;
}

.nextLevel {
  grid-area: nextLevel;
  justify-self: right;
}

.experiencePoints {
  grid-area: experiencePoints;
  justify-self: center;
}
</style>
