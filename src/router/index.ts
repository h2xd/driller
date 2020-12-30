import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import { appRoutes } from "@/router/app";

export const DEFAULT_ROUTES = {
  home: "/",
  about: "/about"
};

const routes: Array<RouteRecordRaw> = [
  {
    path: DEFAULT_ROUTES.home,
    name: "Home",
    component: Home
  },
  {
    path: DEFAULT_ROUTES.about,
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  ...appRoutes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
export * from "./app";
