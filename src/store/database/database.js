/**
 * 下拉选择和搜索的状态管理
 */
import {
    INIT_DATA
} from './mutation-types'

const state = {
    goodsList: [], //商品
    expressList: [], //快递
    customerList: [], //客户
    ownerList: [], //货主
    provideList: [] //供应商
}

const TYPE_GOODS = 'goods';
const TYPE_EXPRESS = 'express';
const TYPE_CUSTOMER = 'customer';
const TYPE_OWNER = 'owner';
const TYPE_PROVIDE = 'provide';

const mutations = {
    /**
     * 初始化数据
     * @param {*} state 
     * @param {*} payload 
     */
    [INIT_DATA](state, payload) {
        let {
            type,
            data
        } = payload;
        if (type == TYPE_GOODS) {
            state.goodsList = data;
        } else if (type == TYPE_EXPRESS) {
            state.expressList = data;
        } else if (type == TYPE_CUSTOMER) {
            state.customerList = data;
        } else if (type == TYPE_OWNER) {
            state.ownerList = data;
        } else if (type == TYPE_PROVIDE) {
            state.provideList = data;
        }
    }
}


export default {
    state,
    mutations
}