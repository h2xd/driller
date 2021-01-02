import { ref, Ref, reactive, ShallowUnwrapRef } from "vue";

type Clock = {
  isRunning: Ref<boolean>;
  isClean: Ref<boolean>;
  duration: Ref<number>;
  start: () => void;
  stop: () => void;
  round: () => void;
  clear: () => void;
  rounds: {
    duration: number;
  }[];
};

export function useClock(): ShallowUnwrapRef<Clock> {
  const duration = ref(0);
  const intervalRef = ref(0);
  const isRunning = ref(false);
  const isClean = ref(true);
  const startAt = ref(0);
  const stopedAt = ref(0);

  const roundAt = ref(0);
  const rounds: Clock["rounds"] = [];

  return reactive({
    isRunning: isRunning,
    isClean: isClean,
    duration: duration,
    start: () => {
      isClean.value = false;
      isRunning.value = true;
      if (startAt.value === 0) {
        startAt.value = Date.now();
        roundAt.value = startAt.value;
      } else {
        startAt.value = startAt.value + Date.now() - stopedAt.value;
        roundAt.value = roundAt.value + Date.now() - stopedAt.value;
      }
      intervalRef.value = window.setInterval(
        () => (duration.value = Date.now() - startAt.value),
        10
      );
    },
    stop: () => {
      window.clearInterval(intervalRef.value);
      isClean.value = false;
      stopedAt.value = Date.now();
      isRunning.value = false;
    },
    round: () => {
      rounds.push({
        duration: Date.now() - roundAt.value
      });
      isClean.value = false;
      roundAt.value = Date.now();
    },
    clear: () => {
      isClean.value = true;
      isRunning.value = false;
      duration.value = 0;
      startAt.value = 0;
      stopedAt.value = 0;
    },
    rounds
  });
}
