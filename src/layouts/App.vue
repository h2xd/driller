<template>
  <AppNavigation />
  <slot name="default" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSettingsStore } from "@/stores/settingsStore";
import AppNavigation from "@/components/navigation/App.vue";

export default defineComponent({
  components: {
    AppNavigation
  },
  setup() {
    const SettingsStore = useSettingsStore();
    SettingsStore.$subscribe((_, state) => {
      window.document.body.className = `theme-${state.colorTheme}`;
    });
  }
});
</script>

<style lang="scss">
@import "../styles/vars.scss";
@import "../styles/themes/colors/classic.scss";
@import "../styles/themes/colors/light.scss";

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: $themeColorBackground100;
  color: $themeColorText;
  padding: $themeSpacingXXL;
}

.theme-dark {
  @extend %classicThemeColorClass;
}

.theme-light {
  @extend %lightThemeColorClass;
}
</style>
