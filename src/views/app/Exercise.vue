<template>
  <AppLayout>
    <h1>{{ $props.exerciseKey }}</h1>

    <router-link :to="$props.treePath">Go to {{ $props.treeKey }}</router-link>

    <pre>
      {{ $route.path }}
    </pre>

    <div>Unlocked: {{ !ExerciseStore.locked }}</div>

    <div v-if="!ExerciseStore.locked">
      <div>Amount you did: {{ ExerciseStore.value }}</div>

      <button @click="ExerciseStore.increase(1)">One More (+)</button>
      <button @click="ExerciseStore.decrease(1)">One Less (-)</button>

      <button @click="ExerciseStore.checkout()">Save to store</button>

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
    </div>
    <div>{{ $props.exerciseKey }} is locked get more buffed</div>
  </AppLayout>
</template>

<script lang="ts">
import { PropType } from "vue";

import { APP_ROUTES } from "@/router";
import { useClock } from "@/utils/useClock";
import { ExerciseTreeRoute } from "@/router/ExerciseTreeRouter";

import AppLayout from "@/layouts/App.vue";

export default {
  components: {
    AppLayout
  },
  props: {
    treeKey: String as PropType<ExerciseTreeRoute["props"]["treeKey"]>,
    treeStore: Function as PropType<ExerciseTreeRoute["props"]["treeStore"]>,
    treePath: String as PropType<ExerciseTreeRoute["props"]["treePath"]>,
    exerciseKey: String as PropType<ExerciseTreeRoute["props"]["exerciseKey"]>,
    exerciseStore: Function as PropType<
      ExerciseTreeRoute["props"]["exerciseStore"]
    >
  },
  setup(props: ExerciseTreeRoute["props"]) {
    const ExerciseStore = props.exerciseStore();

    const clock = useClock();

    return {
      ExerciseStore,
      clock,
      APP_ROUTES
    };
  }
};
</script>
