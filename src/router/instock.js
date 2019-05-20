import Notice from "../views/instock/Notice"
import Scan from "../views/instock/Scan"
const router = [{
    path: "/instock_scan",
    name: "instock_scan",
    component: Scan,
    meta: { title: '扫描入库' }
}, {
    path: "/instock_notice",
    name: "instock_notice",
    component: Notice,
    meta: { title: '入库审核' }
}]

export default router