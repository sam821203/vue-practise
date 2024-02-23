import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'aboutName',
            path: '/about',
            component: About,
            meta: {
                isAuth: true,
                title: '關於我們',
            },
        },
        {
            name: 'homeName',
            path: '/home',
            component: Home,
            meta: {
                title: '主頁',
            },
            children: [
                {
                    name: 'messageName',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detailName',
                            path: 'detail',
                            component: Detail,
                        },
                    ],
                    meta: {
                        isAuth: true,
                        title: '訊息頁面',
                    },
                },
                {
                    name: 'newsName',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新聞頁面',
                    },
                },
            ],
        },
    ],
})

export default router
