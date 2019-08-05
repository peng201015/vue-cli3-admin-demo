import product from "../views/product/index"
const router = {
    path: "/product",
    name: "product",
    component: product,
    meta: { 
        title: '商品中心',
        icon:"el-icon-rank"
    }
}

export default router