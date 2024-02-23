<template lang="">
    <div>
        <div>Home</div>
        <ul>
            <li>
                <!-- 如果是二級路由，就需要把複層路由也寫上 -->
                <router-link to="/home/news">News</router-link>
            </li>
            <li>
                <router-link to="/home/message">Message</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Home',
    mounted() {
        console.log('Home mounted')
        // $route 是該組件 vc 上的，每個組件的都會不一樣
        console.log(this.$route)
        // $router 只有一個，整個應用只有一個路由器
        console.log(this.$router)
    },
}
</script>
<style lang=""></style>
