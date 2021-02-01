<template>
  <div :class="$style.container">
    <ProgressBar
      :class="$style.experienceBar"
      type="minimal"
      :progress="store.progress"
    />

    <div :class="$style.experiencePoints">
      <AnimatedNumber :number="store.remainingToNextLevel" />
      /
      <AnimatedNumber :number="store.requiredExperienceToNextLevel" />
      {{ $t("app.experience.short") }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import { APP_ROUTES } from "@/router";
import { createExperienceStore } from "@/stores/createExperienceStore";

import ProgressBar from "@/components/base/ProgressBar.vue";
import AnimatedNumber from "@/components/base/AnimatedNumber.ts";

export default defineComponent({
  components: {
    AnimatedNumber,
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
  position: sticky;
  grid-template-rows: $themeSpacingXXS 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: $themeSpacingXS;
  grid-template-areas: "bar" "experiencePoints";
  font-size: $themeFontSizeS;
  top: 0;
  left: 0;
}

.experienceBar {
  grid-area: bar;
}

.experiencePoints {
  grid-area: experiencePoints;
  justify-self: center;
  font-size: $themeFontSizeXXS;
}
</style>
