<template>
  <div class="nav">
    <router-link :to="APP_ROUTES.home">Home</router-link> |
    <router-link :to="APP_ROUTES.settings">Settings</router-link>
  </div>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";

export default {
  setup() {
    return {
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
    color: $themeColorBackground500;

    &.router-link-exact-active {
      color: $themeColorAccent500;
    }
  }
}
</style>
