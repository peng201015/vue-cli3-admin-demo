import Vue from 'vue'
import Router from 'vue-router'

import home from "@/views/index.vue";
import login from "@/views/login/index";
import dashboard from "./dashboard"
import instock from "./instock"
import outstock from "./outstock"
import product from "./product"

export const routes = [{
  path: "/",
  name: "home",
  component: home,
  redirect: "/dashboard",
  children: [
    dashboard,
    instock,
    outstock,
    product
  ]
}, {
  path: "/login",
  name: "login",
  component: login,
  meta: {
    title: '用户登录'
  }
}]

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem("user");
  if (to.path == '/login' || user) {
    next()
  } else {
    next('/login')
  }
})

export default router;