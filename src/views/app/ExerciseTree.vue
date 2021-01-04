<template>
  <AppLayout>
    <h1>Some Exercise Group</h1>

    <router-link :to="APP_ROUTES.home">Go to home</router-link>

    <h2>Stats</h2>

    <table>
      <tbody>
        <tr>
          <th>Level</th>
          <td>{{ xp.level }}</td>
        </tr>
        <tr>
          <th>XP</th>
          <td>{{ xp.total }}</td>
        </tr>
        <tr>
          <th>Next Level</th>
          <td>{{ xp.nextLevel }}</td>
        </tr>
        <tr>
          <th>Next Level At</th>
          <td>{{ xp.nextLevelAt }}</td>
        </tr>
        <tr>
          <th>Remaining</th>
          <td>{{ xp.remainingToNextLevel }}</td>
        </tr>
      </tbody>
    </table>
    <XpBar :progress="xp.progress"/>

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
import XpBar from "@/components/base/XpBar.vue"

export default {
  components: {
    AppLayout,
    ExerciseCard,
    XpBar
  },
  props: {
    treeKey: String as PropType<TreeRoute["props"]["treeKey"]>,
    treeStore: Function as PropType<TreeRoute["props"]["treeStore"]>,
    exercisePaths: Array as PropType<TreeRoute["props"]["exercisePaths"]>
  },
  setup(props: TreeRoute["props"]) {
    const ExerciseExperienceStore = props.treeStore();

    return {
      xp: ExerciseExperienceStore.experience,
      APP_ROUTES
    };
  }
};
</script>
