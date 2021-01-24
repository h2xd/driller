<template>
  <AppLayout>
    Profile

    <ul>
      <li v-for="entry in HistoryStore.history" :key="entry.hlc">
        {{ entry.exercise }} :: {{ entry.experience }}XP |
        {{ entry.interactions }}x -
        {{ new Date(entry.hlc.ts).toISOString() }}
      </li>
    </ul>
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useHistoryStore } from "@/stores/historyStore";

import AppLayout from "@/layouts/App.vue";

export default defineComponent({
  components: {
    AppLayout
  },
  setup() {
    const HistoryStore = useHistoryStore();

    return {
      HistoryStore
    };
  }
});
</script>
