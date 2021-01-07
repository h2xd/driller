<template>
  <div class="nav">
    <router-link :to="DEFAULT_ROUTES.home">Home</router-link> |
    <router-link :to="DEFAULT_ROUTES.about">About</router-link> |
    <router-link :to="APP_ROUTES.home">App</router-link>
  </div>
</template>

<script lang="ts">
import { DEFAULT_ROUTES, APP_ROUTES } from "@/router";

export default {
  setup() {
    return {
      DEFAULT_ROUTES,
      APP_ROUTES
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars";

.nav {
  padding: $themeSpacingM;

  a {
    font-weight: bold;
    color: $themeColorAccent100;

    &.router-link-exact-active {
      color: $themeColorAccent500;
    }
  }
}
</style>
