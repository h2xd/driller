<template>
  <Input label="Age" name="age" v-model="age" />
  <Input label="Height" name="height" v-model="height" />
  <Input label="Weight" name="weight" v-model="weight" />
  bmr:{{ bmr }}
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Input from "@/components/Input.vue";

export default defineComponent({
  components: {
    Input
  },
  setup() {
    const age = ref(1);
    const height = ref(1);
    const weight = ref(1);

    const bmr = computed(
      () => 10 * weight.value + 6.25 * height.value - 5 * age.value + 5
    );

    return {
      age,
      height,
      weight,
      bmr
    };
  }
});
</script>
