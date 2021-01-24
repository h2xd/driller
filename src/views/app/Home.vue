<template>
  <AppLayout>
    <h1>App Home {{ $t("hello") }}</h1>
    <ThemeSwitch @switch="handleThemeSwitch" />
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
          >{{ locale }}</option
        >
      </select>
    </div>

    <h2>Stats</h2>

    <table>
      <tbody>
        <tr>
          <th>Level</th>
          <td>{{ ExperienceStore.level }}</td>
        </tr>
        <tr>
          <th>XP</th>
          <td>{{ ExperienceStore.total }}</td>
        </tr>
        <tr>
          <th>Next Level</th>
          <td>{{ ExperienceStore.nextLevel }}</td>
        </tr>
        <tr>
          <th>Next Level At</th>
          <td>{{ ExperienceStore.nextLevelAt }}</td>
        </tr>
        <tr>
          <th>Remaining</th>
          <td>{{ ExperienceStore.remainingToNextLevel }}</td>
        </tr>
      </tbody>
    </table>
    <XpBar :progress="ExperienceStore.progress" />

    <ul>
      <li v-for="(group, groupName) in APP_ROUTES.exercises" :key="groupName">
        <router-link :to="group.home">{{ groupName }}</router-link>
      </li>
    </ul>

    <button @click.prevent="ExperienceStore.addToLevel(20)">Add 20</button>
    <button @click.prevent="ExperienceStore.addToLevel(200)">Add 200</button>
    <button @click.prevent="ExperienceStore.addToLevel(2000)">Add 2000</button>

    <ul>
      <li v-for="entry in HistoryStore.history" :key="entry.hlc">
        {{ entry.experience }} | {{ entry.interactions }} | {{ entry.hlc }}
      </li>
    </ul>
  </AppLayout>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";
import { useGlobalExperienceStore } from "@/stores/globalExperienceStore";
import { useSettingsStore } from "@/stores/settingsStore";
import { useHistoryStore } from "@/stores/historyStore";

import AppLayout from "@/layouts/App.vue";
import XpBar from "@/components/base/XpBar.vue";
import ThemeSwitch from "@/components/visual/ThemeSwitch.vue";

export default {
  components: {
    AppLayout,
    XpBar,
    ThemeSwitch
  },
  setup() {
    const ExperienceStore = useGlobalExperienceStore();
    const SettingsStore = useSettingsStore();
    const HistoryStore = useHistoryStore();

    function handleThemeSwitch(newTheme: string) {
      console.log(newTheme);
      SettingsStore.changeColorTheme(newTheme);
    }

    return {
      APP_ROUTES,
      HistoryStore,
      ExperienceStore,
      handleThemeSwitch
    };
  }
};
</script>
