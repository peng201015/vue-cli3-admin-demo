import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/index.js'

// 引入mock.js
require("./mock.js")

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')