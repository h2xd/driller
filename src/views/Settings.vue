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

enum Gender {
  MALE = "male",
  FEMALE = "female",
  DIVERS = "divers"
}

export default defineComponent({
  components: {
    Input,
    Radio
  },
  setup() {
    const age = ref(1);
    const height = ref(1);
    const weight = ref(1);
    const radioGroup = ref([
      { id: "male", value: Gender.MALE },
      { id: "female", value: Gender.FEMALE },
      { id: "divers", value: Gender.DIVERS }
    ]);

    const selectedGender = ref(Gender.MALE);

    const genderConsumption = {
      [Gender.MALE]: 5,
      [Gender.FEMALE]: -161,
      [Gender.DIVERS]: 0
    };

    const bmr = computed(
      () =>
        10 * weight.value +
        6.25 * height.value -
        5 * age.value +
        genderConsumption[selectedGender.value]
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
