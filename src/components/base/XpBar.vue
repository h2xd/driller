<template>
  <div class="container">
    <div class="bar" :style="{ '--bar-width': $props.progress }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    progress: Number
  }
});
</script>

<style lang="scss" scoped>
@import "../../styles/vars";

%barBase {
  border-radius: 1rem;
  height: 1rem;
}
.container {
  width: 100%;
  background-color: $themeColorBackground200;
  position: relative;
  @extend %barBase;
}
.bar {
  position: absolute;
  background-color: $themeColorAccent100;
  width: calc(var(--bar-width) * 100%);
  transition: all 300ms ease-in-out;
  @extend %barBase;
}
</style>
