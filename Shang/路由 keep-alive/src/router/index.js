import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About,
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
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
