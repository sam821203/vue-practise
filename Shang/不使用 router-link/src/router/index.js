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
                            // 如果要使用 params 傳參數，就需要來路由這去把path 加上 : 冒號
                            // path: 'detail/:id/:title',
                            path: 'detail',
                            component: Detail,
                            // 路由 props 第一種寫法，值為物件。該物件中的所有 key-value 都會以 props 的形式傳給此組件 (Detail 組件)
                            // 這種方法不常用，因為資料都是寫死的
                            // props: {
                            //     a: 1,
                            //     b: 2,
                            // },

                            // 路由 props 第二種寫法，值為布林值，若為 true，則會把該組件收到的所有收到的 params 參數，以 props 的形式傳給該組件
                            // 只能傳遞 params 參數，不能用 query 參數
                            // props: true,

                            // 路由 props 第三種寫法，值為函數，返回物件
                            // 該函數接收 $route 作為參數
                            // 解構賦值寫法
                            // props({ query: { id, title } }) {
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                }
                            },
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
