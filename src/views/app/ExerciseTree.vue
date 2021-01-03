<template>
  <AppLayout>
    <h1>Some Exercise Group</h1>

    <router-link :to="APP_ROUTES.home">Go to home</router-link>

    Exercises in {{ $props.treeKey }}:
    <ul>
      <li v-for="exercise in $props.exercisePaths" :key="exercise.key">
        <ExerciseCard :exercise="exercise" />
      </li>
    </ul>
  </AppLayout>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";

import AppLayout from "@/layouts/App.vue";
import ExerciseCard from "@/components/exercise/Card.vue";
import { PropType } from "vue";
import { TreeRoute } from "@/router/ExerciseTreeRouter";

export default {
  components: {
    AppLayout,
    ExerciseCard
  },
  props: {
    treeKey: String as PropType<TreeRoute["props"]["treeKey"]>,
    treeStore: Function as PropType<TreeRoute["props"]["treeStore"]>,
    exercisePaths: Array as PropType<TreeRoute["props"]["exercisePaths"]>
  },
  setup() {
    return {
      APP_ROUTES
    };
  }
};
</script>
