import { RouteRecordRaw } from "vue-router";

const APP_PATH = "/app";

export const APP_ROUTES = {
  home: `${APP_PATH}`,
  settings: `${APP_PATH}/settings`
};

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
  }
];
