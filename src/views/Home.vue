<template>
  <div class="home">
    {{ dima }}
    {{ counter }}
    {{ cube }}
  </div>
  <button v-if="counter < 5" @click="countUp">+</button>
  <button v-else @click="countDown">-</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const counter = ref(2);
    const dima = ref("Human");

    const countUp = () => (counter.value += 1);
    const countDown = () => (counter.value -= 1);
    const cube = computed(() => counter.value ** 2);

    return {
      counter,
      dima,
      countUp,
      countDown,
      cube
    };
  }
});
</script>
