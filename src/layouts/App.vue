<template>
  <div class="layout">
    <header class="header">
      <AppNavigation />
    </header>
    <main class="main">
      <slot name="default" />
    </main>
    <footer class="footer">
      <a href="https://github.com/h2xd/driller">
        Open Source Project &gt;3 on GitHub
      </a>
    </footer>
  </div>
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

$headerSize: 4rem;
$bodyMaxWidth: 50rem;

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: $themeColorBackground100;
  color: $themeColorText;
}

.layout {
  display: grid;
  max-width: $bodyMaxWidth;
  margin: 0 auto;
  grid-template-areas: "main" "footer" "header";
  grid-template-rows: 1fr auto $headerSize;
  grid-template-columns: 1fr;
  grid-row-gap: $themeSpacingS;
}

.header {
  grid-area: header;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: $headerSize;
  max-width: $bodyMaxWidth;
}

.main {
  grid-area: main;
  min-height: 80vh;
  padding: $themeSpacingM;
}

.footer {
  grid-area: footer;
  padding: $themeSpacingM;
}

.theme-dark {
  @extend %classicThemeColorClass;
}

.theme-light {
  @extend %lightThemeColorClass;
}
</style>
