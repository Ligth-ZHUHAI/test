import Vue from 'vue'
import App from './App.vue'

// 导入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 注册elementUI
Vue.use(ElementUI);


// 导入路由对象
import router from '@/router/router.js'

// 注入Vue
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
