import Vue from 'vue'
import Router from 'vue-router'
import home from "./home"

const routes = [...home]
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