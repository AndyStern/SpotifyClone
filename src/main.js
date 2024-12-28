import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Sidebar from './components/Sidebar.vue';
import Topbar from './components/Topbar.vue';

/* 导入element-ui样式
*/
import 'element-ui/lib/theme-chalk/index.css'

/* element-ui所有组件
*/
import ElementUI from 'element-ui'
import axios from 'axios'//引入axios
// 引入Mock文件
import './plugins/mock.js';


Vue.prototype.$axios = axios;//把axios挂载到vue上
Vue.use(ElementUI);

Vue.config.productionTip = false


Vue.component('Sidebar', Sidebar);
Vue.component('Topbar', Topbar);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
