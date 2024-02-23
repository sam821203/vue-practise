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
                    // meta 可以用來放額外訊息
                    meta: {
                        isAuth: true,
                        title: '訊息頁面',
                    },
                    /* 
                        1.獨享路由守衛 beforeEnter
                        2.只有前置，沒有後置
                        3.雖然沒有後置，但是可以搭配 afterEach 來使用
                    */
                    beforeEnter: (to, from, next) => {
                        console.log('beforeEnter')
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'Cheers') {
                                next()
                            } else {
                                alert('學校名稱不對，無法進入')
                            }
                        } else {
                            next()
                        }
                    },
                },
                {
                    name: 'newsName',
                    path: 'news',
                    component: News,
                    // meta 可以用來放額外訊息
                    meta: {
                        isAuth: true,
                        title: '新聞頁面',
                    },
                },
            ],
        },
    ],
})

/* 
    1.router 前置路由守衛：會在每一次路由切換前被調用，初始化時也會調用
    2.在這裡使用，就是全局前置路由守衛
    3.接收三個參數：to, from, next
    4.to, from 分別代表將要進入的路由對象和將要離開的路由對象
    5.next 是一個函數，調用後才會進入下一個階段
    6.this.route 上的 meta 可以用來放額外訊息
*/
// router.beforeEach((to, from, next) => {
//     console.log('beforeEach')
//     // 比起要一個個 to.path 來判斷路由，直接判斷 meta 裡設定的權限會更方便
//     if (to.meta.isAuth) {
//         // 從 localStorage 中確認說，目前學校是否為 Cheers
//         if (localStorage.getItem('school') === 'Cheers') {
//             next()
//         } else {
//             alert('學校名稱不對，無法進入')
//         }
//     } else {
//         next()
//     }
// })

/* 
    1.router 後置路由守衛：會在每一次路由切換後被調用，初始化時也會調用 
    2.沒有 next 參數，因為已經切換完成了
    3.如果能走到這裡，就代表已經切換完成了，此時可以設置 title
*/
router.afterEach((to, from) => {
    console.log('afterEach')
    document.title = to.meta.title ? to.meta.title : '主頁'
})

export default router
