<template>
  <Input label="Age" name="age" v-model="age" />
  <Input label="Height" name="height" v-model="height" />
  <Input label="Weight" name="weight" v-model="weight" />
  <Radio
    :group="radioGroup"
    name="gender"
    :value="selectedGender"
    @change="handleChange"
  />
  bmr:{{ bmr }}
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Input from "@/components/Input.vue";
import Radio from "@/components/Radio.vue";
import { Gender } from "@/@types/gender";
import { calculateBMR } from "@/utils/calculateBMR";

export default defineComponent({
  components: {
    Input,
    Radio
  },
  setup() {
    const age = ref(1);
    const height = ref(1);
    const weight = ref(1);
    const selectedGender = ref(Gender.MALE);
    const radioGroup = ref([
      { id: "male", value: Gender.MALE },
      { id: "female", value: Gender.FEMALE },
      { id: "divers", value: Gender.DIVERS }
    ]);

    const bmr = computed(() =>
      calculateBMR({
        age: age.value,
        gender: selectedGender.value,
        height: height.value,
        weight: weight.value
      })
    );

    function handleChange(value: Gender) {
      selectedGender.value = value;
    }

    return {
      age,
      height,
      weight,
      radioGroup,
      selectedGender,
      handleChange,
      bmr
    };
  }
});
</script>
