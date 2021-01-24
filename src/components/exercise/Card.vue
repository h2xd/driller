<template>
  <router-link :to="path">{{ $props.exercise.id }}</router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Exercise } from "@/@types/exercise";
import { getExercisePath } from "@/utils/extractPath";

export default defineComponent({
  props: {
    exercise: {
      required: true,
      type: Object as PropType<Exercise>
    }
  },
  setup(props) {
    const path = computed(() => {
      return getExercisePath(props.exercise);
    });

    return {
      path
    };
  }
});
</script>

<style lang="scss" scoped></style>
