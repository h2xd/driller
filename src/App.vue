<template>
  <router-view />
</template>

<script lang="ts">
import { writeToLocalStorage } from "@/utils/localStorage";
import { useGlobalExperienceStore } from "@/stores/globalExperienceStore";
import { usePushUpExperienceStore } from "@/trees/pushup/store";
import { useI18n } from "vue-i18n";
import { watch } from "vue";

export default {
  setup() {
    const $i18n = useI18n();

    const ExperienceStore = useGlobalExperienceStore();
    const PushUpStore = usePushUpExperienceStore();

    ExperienceStore.$subscribe(({ storeName }, state) => {
      console.log(storeName, state);
      writeToLocalStorage(storeName, state);
    });

    PushUpStore.$subscribe(({ storeName }, state) => {
      console.log(storeName, state);
      writeToLocalStorage(storeName, state);
    });

    watch($i18n.locale, value => {
      writeToLocalStorage("locale", { value });
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
