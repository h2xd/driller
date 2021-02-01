<template>
  <AppLayout>
    <h1>App Home {{ $t("hello") }}</h1>

    <h2>Stats</h2>

    <ExperienceCard :store="ExperienceStore" />

    <ul>
      <li v-for="(group, groupName) in APP_ROUTES.exercises" :key="groupName">
        <router-link :to="group.home">{{ groupName }}</router-link>
      </li>
    </ul>

    <button @click.prevent="ExperienceStore.addToLevel(20)">Add 20</button>
    <button @click.prevent="ExperienceStore.addToLevel(200)">Add 200</button>
    <button @click.prevent="ExperienceStore.addToLevel(2000)">Add 2000</button>
  </AppLayout>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";
import { useGlobalExperienceStore } from "@/stores/globalExperienceStore";

import AppLayout from "@/layouts/App.vue";
import ExperienceCard from "@/components/cards/Experience.vue";

export default {
  components: {
    AppLayout,
    ExperienceCard
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
