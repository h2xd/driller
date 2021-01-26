<template>
  <svg :height="height" :width="width">
    <circle
      class="circle"
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
    maxCircumference: { type: Number, default: 360 }
  },
  setup(props) {
    const normalizedRadius = computed(() => props.radius - props.stroke * 2);
    const circumference = computed(() => normalizedRadius.value * 2 * Math.PI);

    const strokeDashoffset = computed(
      () =>
        circumference.value -
        (props.progress / 360) * props.maxCircumference * circumference.value
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
      width,
      height
    };
  }
});
</script>

<style lang="scss" scoped>
.circle {
  transition: all 300ms ease-in-out;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
