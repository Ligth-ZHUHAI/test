// 导入Vue
import Vue from 'vue';

// 导入子组件
import login from '@/view/login/login.vue'

// 导入vue-router
import VueRouter from 'vue-router';

// 注册VueRouter
Vue.use(VueRouter);

// 创建路由对象
let router = new VueRouter({
    // 路由表
    routes:[
        // login
        {
            path:'/',
            component:login
        }
    ]
});

// 导入路由对象
export default router;
