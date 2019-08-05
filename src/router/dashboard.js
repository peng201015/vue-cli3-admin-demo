import dashboard from "../views/dashboard/dashboard"
const router = {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    meta: { 
        title: '数据看板',
        icon:"el-icon-star-off"
    }
}

export default router