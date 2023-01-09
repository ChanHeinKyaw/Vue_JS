import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JobView from "../views/jobs/JobView.vue";
import JobDetail from "../views/jobs/JobDetail.vue";
import NotFound from "../views/jobs/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobView,
  },
  {
    path: "/jobdetail/:id",
    name: "jobdetail",
    component: JobDetail,
    props: true,
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //catchAll
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
