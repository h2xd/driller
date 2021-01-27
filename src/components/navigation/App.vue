<template>
  <nav class="container">
    <ul class="navigation">
      <li class="entry">
        <RouterLink class="link" :to="APP_ROUTES.home">
          <HomeIcon class="link-icon" />
          <span class="link-text">
            {{ $t("app.menu.home") }}
          </span>
        </RouterLink>
      </li>
      <li class="entry">
        <RouterLink class="link" :to="APP_ROUTES.challenges">
          <TaskIcon class="link-icon" />
          <span class="link-text">
            {{ $t("app.menu.challenges") }}
          </span>
        </RouterLink>
      </li>
      <li class="entry profile">
        <RouterLink class="link" :to="APP_ROUTES.profile">
          <div class="progress-ring">
            <RingProgressBar
              :radius="24"
              :progress="ExperienceStore.progress"
              :max-circumference="270"
              :stroke="3"
            />
            <span class="level">{{ ExperienceStore.level }}</span>
          </div>
          <span class="link-text">
            {{ $t("app.menu.profile") }}
          </span>
        </RouterLink>
      </li>
      <li class="entry">
        <RouterLink class="link" :to="APP_ROUTES.friends">
          <FriendIcon class="link-icon" />
          <span class="link-text">
            {{ $t("app.menu.friends") }}
          </span>
        </RouterLink>
      </li>
      <li class="entry">
        <RouterLink class="link" :to="APP_ROUTES.settings">
          <SettingsIcon class="link-icon" />
          <span class="link-text">
            {{ $t("app.menu.settings") }}
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

$activeColor: $themeColorAccent100;
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

%positionInRing {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.progress-ring {
  grid-row: 1 / span 2;
  line-height: 0;
  position: relative;

  svg {
    transform: translate(-50%, -50%) rotate(225deg);
    transform-origin: 50% 50%;
    @extend %positionInRing;
  }
}

.level {
  color: $themeColorAccent100;
  font-size: 0.8rem;
  @extend %positionInRing;
}
</style>
