import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../views/AmiiboList.vue"),
    },
    {
      path: "/detail/:tail",
      name: "detail",
      component: () => import("../views/AmiiboDetail.vue"),
    },
  ],
});

export default router;
