<template>
  <AppLayout>
    <h1>Some Exercise Group</h1>

    <router-link :to="APP_ROUTES.home">Go to home</router-link>
    <ExperienceCard :store="ExerciseExperienceStore.experience" />

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
import ExperienceCard from "@/components/cards/Experience.vue";

export default defineComponent({
  components: {
    AppLayout,
    ExerciseCard,
    ExperienceCard
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

    console.log(ExerciseExperienceStore);

    return {
      ExerciseExperienceStore,
      APP_ROUTES
    };
  }
});
</script>
