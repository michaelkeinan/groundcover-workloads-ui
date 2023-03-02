import Vue from "vue";
import VueRouter from "vue-router";
import WorkloadsView from "../views/WorkloadsView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "workloads",
      component: WorkloadsView,
    },
  ],
});

export default router;
