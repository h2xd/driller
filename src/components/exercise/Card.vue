<template>
  <router-link :to="$props.exercise.route.path">{{
    $props.exercise.key
  }}</router-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ExerciseTreeCollection } from "@/router/ExerciseTreeRouter";

export default defineComponent({
  props: {
    exercise: {
      type: Object as PropType<ExerciseTreeCollection>
    }
  }
});
</script>

<style lang="scss" scoped></style>
