import {
  getToken,
  setToken,
  removeToken,

  setUserName,
  removeUserName
} from '../../utils/auth'
import {
  removeAuth
} from '../../utils/auth'
import server from '../../server/user/server'

const user = {
  state: {
    token: '',
    name: '', // 名字
    avatar: '', // 头像
    userId: '', // 用户ID
    roles: null // 权限
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERID: (state, id) => {
      state.userId = id
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({
      commit
    }, loginData) {
      // const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        server.authLogin(loginData, (data) => {
          setToken(data.token)
          setUserName(data.longName)
          commit('SET_NAME', data.loginName)
          resolve()
        })
      })
    },

    // 获取用户权限信息
    GetInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        server.getUserInfo({
          id: getToken() // 用户id
        }, (res) => {
          resolve(res)
        })
      })
    },

    // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        server.authLogOut({}, (res) => {
          removeToken()
          removeAuth()
          removeUserName()
          resolve()
        })
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default users