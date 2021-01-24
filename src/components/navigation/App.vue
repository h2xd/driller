<template>
  <router-link :to="APP_ROUTES.home">
    <HomeIcon />
    Home</router-link
  >
  |
  <router-link :to="APP_ROUTES.challenges"><TaskIcon />Challenges</router-link>
  | <router-link :to="APP_ROUTES.profile">Profile</router-link> |
  <router-link :to="APP_ROUTES.friends"><FriendIcon />Friends</router-link> |
  <router-link :to="APP_ROUTES.settings"><SettingsIcon />Settings</router-link>
  |
</template>

<script lang="ts">
import { APP_ROUTES } from "@/router";

import FriendIcon from "@/assets/svg/friends.svg?inline";
import HomeIcon from "@/assets/svg/home.svg?inline";
import SettingsIcon from "@/assets/svg/settings.svg?inline";
import TaskIcon from "@/assets/svg/task.svg?inline";

export default {
  components: {
    FriendIcon,
    HomeIcon,
    SettingsIcon,
    TaskIcon
  },
  setup() {
    return {
      APP_ROUTES
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/vars";

a {
  font-weight: bold;
  color: $themeColorBackground500;

  &.router-link-exact-active {
    color: $themeColorAccent500;
  }
}
</style>
