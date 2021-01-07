<template>
  <div>
    <GlobalNavigation />
    <slot name="default" />
  </div>
</template>

<script lang="ts">
import GlobalNavigation from "@/components/navigation/Default.vue";

export default {
  components: {
    GlobalNavigation
  }
};
</script>

<style lang="scss"></style>
