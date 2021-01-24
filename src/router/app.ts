import { RouteRecordRaw } from "vue-router";
import { pushUpPaths, pushUpRouter } from "@/trees/pushup/routes";
import { APP_PATH } from "@/router/paths";

export const APP_ROUTES = {
  home: `${APP_PATH}`,
  settings: `${APP_PATH}/settings`,
  exercises: {
    pushup: pushUpPaths
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
  ...pushUpRouter
];
