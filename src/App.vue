<template>
  <router-view />
</template>

<script lang="ts">
import { useExperienceStore } from "@/store/experience";
import { writeToLocalStorage } from "@/utils/localStorage";

export default {
  setup() {
    const ExperienceStore = useExperienceStore();

    ExperienceStore.$subscribe(({ storeName }, state) => {
      console.log(storeName, state);
      writeToLocalStorage(storeName, state);
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
