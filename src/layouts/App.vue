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

<style lang="scss" scoped></style>
