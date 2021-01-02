<template>
  <AppLayout>
    <h1>App Home</h1>

    <h2>Stats</h2>

    <table>
      <tbody>
        <tr>
          <th>Level</th>
          <td>{{ ExperienceStore.level }}</td>
        </tr>
        <tr>
          <th>XP</th>
          <td>{{ ExperienceStore.total }}</td>
        </tr>
        <tr>
          <th>Next Level</th>
          <td>{{ ExperienceStore.nextLevel }}</td>
        </tr>
        <tr>
          <th>Next Level At</th>
          <td>{{ ExperienceStore.nextLevelAt }}</td>
        </tr>
        <tr>
          <th>Remaining</th>
          <td>{{ ExperienceStore.remainingToNextLevel }}</td>
        </tr>
      </tbody>
    </table>

    <ul>
      <li v-for="(group, groupName) in APP_ROUTES.exercises" :key="groupName">
        <div>{{ groupName }}</div>
        <ul>
          <li v-for="(exercise, exerciseKey) in group" :key="exercise">
            <router-link :to="exercise">{{ exerciseKey }}</router-link>
          </li>
        </ul>
      </li>
    </ul>

    <button @click.prevent="ExperienceStore.addToLevel(20)">Add 20</button>
    <button @click.prevent="ExperienceStore.addToLevel(200)">Add 200</button>
    <button @click.prevent="ExperienceStore.addToLevel(2000)">Add 2000</button>
  </AppLayout>
</template>

<script lang="ts">
import AppLayout from "@/layouts/App.vue";
import { useGlobalExperienceStore } from "@/stores/globalExperienceStore";
import { APP_ROUTES } from "@/router";

export default {
  components: {
    AppLayout
  },
  setup() {
    const ExperienceStore = useGlobalExperienceStore();

    return {
      APP_ROUTES,
      ExperienceStore
    };
  }
};
</script>
