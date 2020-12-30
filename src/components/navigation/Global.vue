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
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
