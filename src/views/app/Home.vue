<template>
  <AppLayout>
    <h1>App Home</h1>

    <div>
      {{ ExperienceStore.total }} XP | Lvl. {{ ExperienceStore.level }} |
      Remaining: {{ ExperienceStore.remaining }}
    </div>

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
import { useExperienceStore } from "@/stores/experience";
import { APP_ROUTES } from "@/router";

export default {
  components: {
    AppLayout
  },
  setup() {
    const ExperienceStore = useExperienceStore();

    return {
      APP_ROUTES,
      ExperienceStore
    };
  }
};
</script>
