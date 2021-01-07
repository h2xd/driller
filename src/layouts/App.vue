<template>
  <AppNavigation />
  <slot name="default" />
</template>

<script lang="ts">
import AppNavigation from "@/components/navigation/App.vue";

export default {
  components: {
    AppNavigation
  }
};
</script>

<style lang="scss">
@import "../styles/vars.scss";

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: $themeColorBackground;
  color: $themeColorText;

  padding: $themeSpacingM;
}
</style>
