import { RouteRecordRaw } from "vue-router";
import { PushUpRouter } from "@/trees/pushup";
import { APP_PATH } from "@/router/paths";

export const APP_ROUTES = {
  home: `${APP_PATH}`,
  settings: `${APP_PATH}/settings`,
  challenges: `${APP_PATH}/challenges`,
  friends: `${APP_PATH}/friends`,
  profile: `${APP_PATH}/profile`,
  exercises: {
    pushup: PushUpRouter.exportPaths()
  }
} as const;

export const appRoutes: Array<RouteRecordRaw> = [
  {
    path: APP_ROUTES.home,
    name: "App/Home",
    component: () =>
      import(/* webpackChunkName: "app-home" */ "@/views/app/Home.vue")
  },
  {
    path: APP_ROUTES.settings,
    name: "App/Settings",
    component: () =>
      import(/* webpackChunkName: "app-settings" */ "@/views/app/Settings.vue")
  },
  {
    path: APP_ROUTES.challenges,
    name: "App/Challenges",
    component: () =>
      import(
        /* webpackChunkName: "app-challenges" */ "@/views/app/Challenges.vue"
      )
  },
  {
    path: APP_ROUTES.friends,
    name: "App/Friends",
    component: () =>
      import(/* webpackChunkName: "app-friends" */ "@/views/app/Friends.vue")
  },
  {
    path: APP_ROUTES.profile,
    name: "App/Profile",
    component: () =>
      import(/* webpackChunkName: "app-profile" */ "@/views/app/Profile.vue")
  },
  ...PushUpRouter.exportRoutes()
];
