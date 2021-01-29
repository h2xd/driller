<template>
  <router-view />
</template>

<script lang="ts">
import { writeToLocalStorage } from "@/utils/localStorage";
import { useGlobalExperienceStore } from "@/stores/globalExperienceStore";
import { packHistoryStore, useHistoryStore } from "@/stores/historyStore";
import { usePushUpExperienceStore } from "@/trees/pushup/store";
import { useI18n } from "vue-i18n";
import { watch } from "vue";

export default {
  setup() {
    const $i18n = useI18n();

    const ExperienceStore = useGlobalExperienceStore();
    const HistoryStore = useHistoryStore();
    const PushUpStore = usePushUpExperienceStore();

    ExperienceStore.$subscribe(({ storeName }, state) => {
      console.log(storeName, state);
      writeToLocalStorage(storeName, state);
    });

    HistoryStore.$subscribe(({ storeName }, state) => {
      console.log(storeName, state);

      writeToLocalStorage(storeName, packHistoryStore(state));
    });

    PushUpStore.$subscribe(({ storeName }, state) => {
      console.log(storeName, state);
      writeToLocalStorage(storeName, state);
    });

    watch($i18n.locale, value => {
      writeToLocalStorage("locale", { value });
    });
  }
};
</script>

<style lang="scss">
@import "./styles/theme";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: $themeSpacingS;
}

a {
  color: $themeColorLink;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    opacity: 0.6;
  }
}
</style>
