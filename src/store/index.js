import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import tagsView from './tagsView/tagsView'
import permission from './permission/index'


export default new Vuex.Store({
    modules: {
        tagsView,
        permission
    }
})