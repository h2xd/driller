<template>
  <Input label="Age" name="age" v-model="age" />
  <Input label="Height" name="height" v-model="height" />
  <Input label="Weight" name="weight" v-model="weight" />
  <Radio :group="genderGroup" name="gender" /> bmr:{{ bmr }}
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Input from "@/components/Input.vue";
import Radio from "@/components/Radio.vue";

export default defineComponent({
  components: {
    Input,
    Radio
  },
  setup() {
    const age = ref(1);
    const height = ref(1);
    const weight = ref(1);
    const genderGroup = [
      { label: "Male", checked: true, value: "male" },
      { label: "Female", checked: false, value: "female" }
    ];

    const bmr = computed(
      () => 10 * weight.value + 6.25 * height.value - 5 * age.value + 5
    );

    return {
      age,
      height,
      weight,
      genderGroup,
      bmr
    };
  }
});
</script>
