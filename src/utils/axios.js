import axios from 'axios';
import auth from "./auth";
import router from '@/router/index'

const url = {
  baseURL: 'http://www.phonegap100.com',
  testUrl: 'http://xxxxx22222.com/api'
}

let axiosInstance = axios.create({
  baseURL: url.baseURL,
  timeout: 10000
})

// 请求拦截
axiosInstance.interceptors.request.use(config => {
  if (auth.getToken()) {
    config.headers["Authorization"] = auth.getToken();
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;
}, error => {
  return Promise.reject(error)
})

// 响应拦截
axiosInstance.interceptors.response.use(response => {
  return response.data;
}, error => {
  if (error.response && error.response.status) {
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。                
      case 401:
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        });
        break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面                
      case 403:
        this.$notify({
          title: '登录过期',
          message: '登录过期，请重新登录',
          duration: 1000
        })

        // 清除token
        auth.removeToken();
        // store.commit('loginSuccess', null);
        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }, 1000);
        break;

        // 404请求不存在
      case 404:
        this.$notify({
          title: '提示',
          message: '网络请求不存在',
          duration: 1000
        })

        break;
        // 其他错误，直接抛出错误提示
      default:
        this.$notify({
          title: '提示',
          message: error.response.data.message,
          duration: 1000
        })
    }
    return Promise.reject(error.response);
  }
})



export default axiosInstance