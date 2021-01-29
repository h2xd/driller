<template>
  <AppLayout>
    <h1>{{ $props.exercise.id }}</h1>

    <pre>
      {{ $route.path }}
    </pre>

    <ExperienceCard :store="ExerciseTreeStore.experience" />

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
    <div v-else>{{ $props.exercise.id }} is locked get more buffed</div>
  </AppLayout>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import { Exercise, ExerciseTree } from "@/@types/exercise";
import { APP_ROUTES } from "@/router";
import { useClock } from "@/utils/useClock";

import AppLayout from "@/layouts/App.vue";
import ExperienceCard from "@/components/cards/Experience.vue";

export default defineComponent({
  components: {
    AppLayout,
    ExperienceCard
  },
  props: {
    tree: {
      required: true,
      type: Object as PropType<ExerciseTree>
    },
    exercise: {
      required: true,
      type: Object as PropType<Exercise>
    }
  },
  setup(props) {
    const ExerciseStore = props.exercise.store();
    const ExerciseTreeStore = props.tree.store();

    const clock = useClock();

    return {
      ExerciseTreeStore,
      ExerciseStore,
      clock,
      APP_ROUTES
    };
  }
});
</script>
