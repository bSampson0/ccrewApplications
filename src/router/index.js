import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ApplicantData from "../views/ApplicantData.vue";
import Applicants from "../views/Applicants.vue";
import Login from "../views/Login.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/applicants",
    name: "Applicants",
    component: Applicants,
    meta: { requiresAuth: true }
  },
  {
    path: "/applicantData/:date",
    name: "ApplicantData",
    component: ApplicantData
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthorized = store.state.loggedin;
  if (requiresAuth && !isAuthorized) {
    next("/login");
  } else {
    next();
  }
});

export default router;
