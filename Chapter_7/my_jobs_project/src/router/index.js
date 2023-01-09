import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JobView from "../views/jobs/JobView.vue";
import JobDetail from "../views/jobs/JobDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => AboutView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => JobView,
  },
  {
    path: "/jobdetail",
    name: "jobdetail",
    component: () => JobDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
