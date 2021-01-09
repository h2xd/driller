<template>
  <div>
    <button v-if="isThemeSelector('light')" @click="handleThemeSwitch('dark')">
      Light mode
    </button>
    <button v-if="isThemeSelector('dark')" @click="handleThemeSwitch('light')">
      Dark mode
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const theme = ref("dark");

    function handleThemeSwitch(newTheme: string) {
      theme.value = newTheme;
    }

    function isThemeSelector(selectedTheme: string) {
      return theme.value === selectedTheme;
    }

    return {
      handleThemeSwitch,
      isThemeSelector
    };
  }
});
</script>

<style lang="scss" scoped></style>
