// 該文件專門用創建路由器
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入組件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

Vue.use(VueRouter)

// 創建路由器並導出
export default new VueRouter({
    routes: [
        {
            // name 可以省略直接寫路經
            name: 'about',
            path: '/about',
            component: About,
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            // children 的 path 就不需要加 / 了
            children: [
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                        },
                    ],
                },
                {
                    path: 'news',
                    component: News,
                },
            ],
        },
    ],
})
