import home from "@/views/index.vue";
import Login from "../views/login/index";
import dashboard from "./dashboard"
import instock from "./instock"
import outstock from "./outstock"
import product from "./product"

const router = [{
  path: "/",
  name: "home",
  component: home,
  redirect: "/dashboard",
  children: [
    ...instock,
    ...outstock,
    ...dashboard,
    ...product
  ]
}, {
  path: "/login",
  name: "login",
  component: Login,
  meta: {
    title: '用户登录'
  }
}]

export default router