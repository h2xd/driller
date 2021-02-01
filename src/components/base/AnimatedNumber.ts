import { defineComponent, ref, watch, onBeforeUnmount } from "vue";

export default defineComponent({
  render() {
    return this.displayNumber;
  },
  props: {
    number: {
      type: Number,
      default: 0
    },
    tickDuration: {
      type: Number,
      default: 10
    },
    tickStrength: {
      type: Number,
      default: 20
    }
  },
  setup(props) {
    const interval = ref(0);
    const displayNumber = ref(props.number);

    const clearBoundInterval = () => window.clearInterval(interval.value);

    watch(
      () => props.number,
      () => {
        clearBoundInterval();

        if (props.number === displayNumber.value) {
          return;
        }

        interval.value = window.setInterval(() => {
          if (displayNumber.value != props.number) {
            let change =
              (props.number - displayNumber.value) / props.tickStrength;
            change = change >= 0 ? Math.ceil(change) : Math.floor(change);

            displayNumber.value = displayNumber.value + change;
          }
        }, props.tickDuration);
      }
    );

    onBeforeUnmount(() => clearBoundInterval());

    return {
      displayNumber
    };
  }
});
