<template>
  <div v-for="(element, index) in group" :key="index">
    <label :for="name">{{ element.label }}</label>
    <input
      type="radio"
      :name="name"
      :value="element.value"
      v-model="element.checked"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type RadioElement = {
  name: string;
  label: string;
  value: string | number;
  checked: boolean;
};

export default defineComponent({
  inheritAttrs: false,
  props: {
    group: { type: Array as PropType<RadioElement[]>, required: true },
    name: String
  }
});
</script>

<style lang="scss" scoped>
label {
  display: block;
  text-align: middle;
}
</style>
