<template>
  <AppLayout>
    <h1>Some Exercise</h1>

    <router-link :to="$route.meta.groupPath">Go to group</router-link>

    <pre>
      {{ $route.path }}
      {{ $route.meta.groupPath }}
    </pre>
  </AppLayout>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";

import AppLayout from "@/layouts/App.vue";

export default {
  components: {
    AppLayout
  },
  props: {
    lets: String
  },
  setup() {
    return {
      APP_ROUTES
    };
  }
};
</script>