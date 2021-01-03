<template>
  <AppLayout>
    <h1>Some Exercise Group</h1>

    <router-link :to="APP_ROUTES.home">Go to home</router-link>

    Exercises in {{ $route.meta.treeKey }}:
    <ul>
      <li v-for="exercise in $route.meta.exercisePaths" :key="exercise.key">
        <ExerciseCard :exercise="exercise" />
      </li>
    </ul>
  </AppLayout>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";

import AppLayout from "@/layouts/App.vue";
import ExerciseCard from "@/components/exercise/Card.vue";

export default {
  components: {
    AppLayout,
    ExerciseCard
  },
  setup() {
    return {
      APP_ROUTES
    };
  }
};
</script>
