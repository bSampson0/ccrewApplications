import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ApplicantData from "../views/ApplicantData.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/applicants",
    name: "Applicants",
    component: () => import("../views/Applicants.vue")
  },
  {
    path: "/applicantData/:date",
    name: "applicantData",
    component: ApplicantData
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
