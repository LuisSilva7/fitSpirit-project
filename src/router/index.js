import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/frontoffice/HomeView.vue";
import AboutView from "../views/frontoffice/AboutView.vue";
import IniciativesView from "../views/frontoffice/IniciativesView.vue";
import LoginView from "@/views/frontoffice/LoginView.vue";
import SignupView from "@/views/frontoffice/SignupView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/iniciatives",
      name: "iniciatives",
      component: IniciativesView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
  ],
});

export default router;
