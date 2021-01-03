<template>
  <AppLayout>
    <h1>Some Exercise Group</h1>

    <router-link :to="APP_ROUTES.home">Go to home</router-link>

    Exercises in this group:
    <ul>
      <li
        v-for="(exercise, exerciseKey) in $route.meta.exercises"
        :key="exercise"
      >
        <router-link :to="exercise">{{ exerciseKey }}</router-link>
      </li>
    </ul>

    <pre>
      {{ $route.path }}
      {{ $route.meta }}
    </pre>
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
