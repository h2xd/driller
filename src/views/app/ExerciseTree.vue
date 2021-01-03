<template>
  <AppLayout>
    <h1>Some Exercise Group</h1>

    <router-link :to="APP_ROUTES.home">Go to home</router-link>

    Exercises in {{ $route.meta.treeKey }}:
    <ul>
      <li v-for="exercise in $route.meta.exercisePaths" :key="exercise.key">
        <router-link :to="exercise.route.path">{{ exercise.key }}</router-link>
      </li>
    </ul>
  </AppLayout>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";

import AppLayout from "@/layouts/App.vue";

export default {
  components: {
    AppLayout
  },
  setup() {
    return {
      APP_ROUTES
    };
  }
};
</script>
