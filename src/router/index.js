import Vue from 'vue'
import Router from 'vue-router'
import home from "./home"

const routes = [...home]
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})