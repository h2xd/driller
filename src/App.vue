<template>
  <router-view />
</template>

<script lang="ts">
import { ROUTES } from "@/router";
import { APP_ROUTES } from "@/router/app";

export default {
  setup() {
    return {
      ROUTES,
      APP_ROUTES
    };
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
