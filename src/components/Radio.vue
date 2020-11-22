<template>
  <div v-for="(element, index) in group" :key="index">
    <label :for="element.id">
      {{ element.value }}

      <input
        type="radio"
        :id="element.id"
        :name="name"
        :value="element.value"
        :checked="element.value === value"
        @change="
          event => (event.target.checked ? $emit('change', element.value) : '')
        "
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type RadioElement = {
  name: string;
  value: string | number;
};

export default defineComponent({
  inheritAttrs: false,
  props: {
    group: { type: Array as PropType<RadioElement[]>, required: true },
    name: { type: String, required: true },
    value: { type: String, required: true }
  }
});
</script>

<style lang="scss" scoped>
label {
  display: block;
  text-align: middle;
}
</style>
