import home from "@/views/index.vue";
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
}]

export default router