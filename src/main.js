import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/flexible';


Vue.config.productionTip = false;
Vue.use(ElementUI)//全局使用ElementUI


Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
/*// 全局默认设置,还可设置请求头headers等
Axios.defaults.baseURL = 'url'*/

/*axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';*/


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
