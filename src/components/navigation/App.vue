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
