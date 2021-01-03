<template>
  <AppLayout>
    <h1>Some Exercise Group</h1>

    <router-link :to="APP_ROUTES.home">Go to home</router-link>

    <h2>Stats</h2>

    <table>
      <tbody>
        <tr>
          <th>Level</th>
          <td>{{ ExerciseExperienceStore.level }}</td>
        </tr>
        <tr>
          <th>XP</th>
          <td>{{ ExerciseExperienceStore.total }}</td>
        </tr>
        <tr>
          <th>Next Level</th>
          <td>{{ ExerciseExperienceStore.nextLevel }}</td>
        </tr>
        <tr>
          <th>Next Level At</th>
          <td>{{ ExerciseExperienceStore.nextLevelAt }}</td>
        </tr>
        <tr>
          <th>Remaining</th>
          <td>{{ ExerciseExperienceStore.remainingToNextLevel }}</td>
        </tr>
      </tbody>
    </table>

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
  setup(props: TreeRoute["props"]) {
    const ExerciseExperienceStore = props.treeStore();

    return {
      ExerciseExperienceStore,
      APP_ROUTES
    };
  }
};
</script>
