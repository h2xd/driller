<template>
  <nav class="container">
    <ul class="navigation">
      <li class="entry">
        <RouterLink class="link" :to="APP_ROUTES.home">
          <HomeIcon class="link-icon" />
          <span class="link-text">
            Home
          </span>
        </RouterLink>
      </li>
      <li class="entry">
        <RouterLink class="link" :to="APP_ROUTES.challenges">
          <TaskIcon class="link-icon" />
          <span class="link-text">
            Challenges
          </span>
        </RouterLink>
      </li>
      <li class="entry profile">
        <RouterLink class="link" :to="APP_ROUTES.profile">
          <RingProgressBar
            :radius="24"
            :progress="ExperienceStore.progress"
            :max-circumference="270"
          />
          <span class="link-text">
            Profile
          </span>
        </RouterLink>
      </li>
      <li class="entry">
        <RouterLink class="link" :to="APP_ROUTES.friends">
          <FriendIcon class="link-icon" />
          <span class="link-text">
            Friends
          </span>
        </RouterLink>
      </li>
      <li class="entry">
        <RouterLink class="link" :to="APP_ROUTES.settings">
          <SettingsIcon class="link-icon" />
          <span class="link-text">
            Settings
          </span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";

import { useGlobalExperienceStore } from "@/stores/globalExperienceStore";

import RingProgressBar from "@/components/base/RingProgressBar.vue";

import FriendIcon from "@/assets/svg/friends.svg?inline";
import HomeIcon from "@/assets/svg/home.svg?inline";
import SettingsIcon from "@/assets/svg/settings.svg?inline";
import TaskIcon from "@/assets/svg/task.svg?inline";

export default {
  components: {
    RingProgressBar,
    FriendIcon,
    HomeIcon,
    SettingsIcon,
    TaskIcon
  },
  setup() {
    const ExperienceStore = useGlobalExperienceStore();

    return {
      APP_ROUTES,
      ExperienceStore
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars";

.container {
}

$firstRowSize: 1rem;

.navigation {
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr)) 1.5fr repeat(
      2,
      minmax(10px, 1fr)
    );
  grid-template-rows: $firstRowSize 1fr;
}

.entry {
  grid-row: 2;
  background-color: $themeColorBackground;

  &.profile {
    grid-row: 1 / span 2;
    border-radius: $firstRowSize $firstRowSize 0 0;
  }
}

$activeColor: $themeColorAccent500;
$inactiveColor: $themeColorBackground500;

.link {
  display: grid;
  grid-template-rows: repeat(2, minmax(10px, 1fr));
  align-items: center;
  justify-items: center;
  height: calc(100% - 0.5rem);
  padding: 0.4rem 0 0.1rem;
  box-sizing: border-box;

  color: $inactiveColor;
  font-weight: bold;
  text-decoration: none;

  &.router-link-exact-active {
    color: $activeColor;

    .link-icon {
      fill: $activeColor;
    }
  }
}

.link-icon {
  fill: $inactiveColor;
  grid-row: 1;
}

.link-text {
  grid-row: 2;
  font-size: 0.75rem;
}

.profile {
  .link {
    grid-template-rows: $firstRowSize repeat(2, minmax(10px, 1fr));
  }

  .link-icon {
    grid-row: 2;
  }

  .link-text {
    grid-row: 3;
  }
}
</style>
