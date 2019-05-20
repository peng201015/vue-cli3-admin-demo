import order from "../views/outstock/order"
import audit from "../views/outstock/audit"
const router = [{
    path: "/outstock_order",
    name: "outstock_order",
    component: order,
    meta: { title: '出库订单' }
}, {
    path: "/outstock_audit",
    name: "outstock_audit",
    component: audit,
    meta: { title: '订单复核' }
}]

export default router