<template>
  <AppLayout>
    <h1>App Home</h1>

    <div>
      {{ ExperienceStore.total }} XP | Lvl. {{ ExperienceStore.level }} |
      Remaining: {{ ExperienceStore.remaining }}
    </div>

    <button @click.prevent="ExperienceStore.addToLevel(2000)">Add</button>
  </AppLayout>
</template>

<script lang="ts">
import AppLayout from "@/layouts/App.vue";
import { useExperienceStore } from "@/store/experience";

export default {
  components: {
    AppLayout
  },
  setup() {
    const ExperienceStore = useExperienceStore();

    return {
      ExperienceStore
    };
  }
};
</script>
