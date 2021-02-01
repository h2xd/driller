<template>
  <div :class="[$style.container, $style[type] && $style[type]]">
    <div :class="$style.bar" :style="{ '--bar-width': $props.progress }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

enum ProgressBarType {
  PRIMARY = "primary",
  MINIMAL = "minimal"
}

export default defineComponent({
  props: {
    progress: Number,
    type: {
      type: String as PropType<ProgressBarType>,
      default: ProgressBarType.PRIMARY
    }
  }
});
</script>

<style lang="scss" module>
@import "../../styles/vars";

%barBase {
  position: absolute;
  background-color: $themeColorAccent100;
  width: calc(var(--bar-width) * 100%);
  transition: all 300ms ease-in-out;
}

.container {
  width: 100%;
  background-color: $themeColorBackground200;
  position: relative;
  height: $themeSpacingM;
  @extend %barBase;
}

.bar {
  border-radius: 1rem;
  height: 100%;
  @extend %barBase;
}

.container.minimal {
  height: $themeSpacingXXS;

  .bar {
    border-radius: 0;
  }
}
</style>
