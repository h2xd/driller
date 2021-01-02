<template>
  <AppLayout>
    <h1>Some Exercise</h1>

    <router-link :to="$route.meta.groupPath">Go to group</router-link>

    <pre>
      {{ $route.path }}
      {{ $route.meta.groupPath }}
    </pre>

    <h2>Clock</h2>
    Running: {{ clock.isRunning }}<br />
    Time: {{ clock.duration }}ms<br />

    <div>
      <button @click="clock.start()">Start</button>
    </div>
    <div v-if="clock.isRunning">
      <button @click="clock.round()">Round</button><br />
      <button @click="clock.stop()">Stop</button>
    </div>
    <button v-if="!clock.isRunning && !clock.isClean" @click="clock.clear()">
      Clear
    </button>

    <ul v-if="!!clock.rounds.length">
      <li v-for="(round, index) in clock.rounds" :key="round.timestamp">
        {{ index + 1 }}. - {{ round.duration }}ms
      </li>
    </ul>
  </AppLayout>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";

import AppLayout from "@/layouts/App.vue";
import { useRoute } from "vue-router";
import { useClock } from "@/utils/useClock";

export default {
  components: {
    AppLayout
  },
  props: {
    lets: String
  },
  setup() {
    const route = useRoute();
    const groupStore = route.meta.groupStore();
    console.log(groupStore);

    const clock = useClock();

    return {
      clock,
      APP_ROUTES
    };
  }
};
</script>
