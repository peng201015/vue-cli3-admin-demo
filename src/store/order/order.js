import {
    RECORD_ORDER,
    DEL_ORDER
} from './mutation-types.js'

const TYPE_IN = 'in'; //入库类型
const TYPE_OUT = 'out'; //出库类型

const state = {
    instockNo: {},
    outstockNo: {}
}

const mutations = {
    /**
     * 记录订单
     * @param {*} state 
     * @param {*} payload 
     */
    [RECORD_ORDER](state, payload) {
        if (payload.type == TYPE_IN) {
            state.instockNo = payload.info;
        } else if (payload.type == TYPE_OUT) {
            state.outstockNo = payload.info;
        }
    },
    /**
     * 删除订单
     * @param {*} state 
     * @param {*} payload 
     */
    [DEL_ORDER](state, payload) {
        if (payload.type == TYPE_IN) {
            state.instockNo = {};
        } else if (payload.type == TYPE_OUT) {
            state.outstockNo = {};
        }
    }
}

export default {
    state,
    mutations
}