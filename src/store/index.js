import Vue from 'vue'
import Vuex from 'vuex'
import tagsView from './tagsView/tagsView'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        tagsView: tagsView
    }
})