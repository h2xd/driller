<template>
  <div class="card">
    <slot name="default" />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/vars";

.card {
  padding: $themeSpacingM;
  margin-bottom: $themeSpacingM;
}
</style>
