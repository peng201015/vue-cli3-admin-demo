
import {routes} from '../../router/index'

const permission = {
    state: {
        routers:routes[0].children
    },
    getters:{
        permission_routers: state => state.routers
    },
    mutations: {
        SET_ROUTERS:(state,routers) => {
            state.routers = constantRouterMap.concat(routers)
        }
    }
}

export default permission