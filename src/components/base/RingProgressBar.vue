<template>
  <svg :height="height" :width="width">
    <circle
      class="circle background"
      stroke="white"
      fill="transparent"
      :stroke-dasharray="strokeDashArray"
      :style="{ strokeDashoffset: fullStrokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
    <circle
      class="circle foreground"
      stroke="white"
      fill="transparent"
      :stroke-dasharray="strokeDashArray"
      :style="{ strokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    radius: { type: Number, required: true },
    progress: { type: Number, required: true },
    stroke: { type: Number, default: 2 },
    maxCircumference: { type: Number, default: 360 },
    backgroundCircle: { type: Boolean, default: true },
    circleClass: { type: String, default: "" },
    backgroundCircleClass: { type: String, default: "" }
  },
  setup(props) {
    const normalizedRadius = computed(() => props.radius - props.stroke * 2);
    const circumference = computed(() => normalizedRadius.value * 2 * Math.PI);

    const strokeDashoffset = computed(
      () =>
        circumference.value -
        (props.progress / 360) * props.maxCircumference * circumference.value
    );
    const fullStrokeDashoffset = computed(
      () =>
        circumference.value -
        (1 / 360) * props.maxCircumference * circumference.value
    );

    const strokeDashArray = computed(
      () => `${circumference.value} ${circumference.value}`
    );

    const width = props.radius * 2;
    const height = props.radius * 2;

    return {
      normalizedRadius,
      strokeDashoffset,
      strokeDashArray,
      fullStrokeDashoffset,
      width,
      height
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/vars";

.circle {
  transition: all 300ms ease-in-out;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.background {
  stroke: $themeColorBackground500;
}

.foreground {
  stroke: $themeColorAccent100;
}
</style>
