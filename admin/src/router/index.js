import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/AdminLayoutView.vue"),
      children: [{
        path: "home",
        component: () => import("../views/Home.vue"),
      }],
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginAdmin.vue"),
    }
  ],
});

export default router;
