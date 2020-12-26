import { RouteRecordRaw } from "vue-router";

const APP_PATH = "/app";

export const APP_ROUTES = {
  settings: `${APP_PATH}/settings`
};

export const appRoutes: Array<RouteRecordRaw> = [
  {
    path: APP_ROUTES.settings,
    name: "App/Settings",
    component: () =>
      import(/* webpackChunkName: "app-settings" */ "@/views/app/Settings.vue")
  }
];
