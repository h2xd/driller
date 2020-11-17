<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      type="number"
      min="1"
      v-bind="$attrs"
      v-model="$attrs.modelValue"
      :name="name"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    name: String,
    label: String,
    value: Object
  }
});
</script>

<style lang="scss" scoped>
label {
  display: block;
  text-align: middle;
}
</style>
