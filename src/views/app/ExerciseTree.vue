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
    <XpBar :progress="xp.progress" />

    <ul>
      <li v-for="exercise in $props.exercises" :key="exercise.id">
        <ExerciseCard :exercise="exercise" />
      </li>
    </ul>
  </AppLayout>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import { Exercise, ExerciseTree } from "@/@types/exercise";
import { APP_ROUTES } from "@/router";

import AppLayout from "@/layouts/App.vue";
import ExerciseCard from "@/components/exercise/Card.vue";
import XpBar from "@/components/base/XpBar.vue";

export default defineComponent({
  components: {
    AppLayout,
    ExerciseCard,
    XpBar
  },
  props: {
    tree: {
      required: true,
      type: Object as PropType<ExerciseTree>
    },
    exercises: {
      required: true,
      type: Array as PropType<Exercise[]>
    }
  },
  setup(props) {
    const ExerciseExperienceStore = props.tree.store();

    return {
      xp: ExerciseExperienceStore.experience,
      APP_ROUTES
    };
  }
});
</script>
