import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index";
import Login from "../views/login";
import Member from "../views/member";
import Goods from "../views/goods";
import Staff from "../views/staff";
import Supplier from "../views/supplier";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/index",
    name: "index",
    component: Index
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
