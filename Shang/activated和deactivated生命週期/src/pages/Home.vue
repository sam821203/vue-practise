<template lang="">
    <div>
        <div>Home</div>
        <ul>
            <li>
                <router-link to="/home/news">News</router-link>
            </li>
            <li>
                <router-link to="/home/message">Message</router-link>
            </li>
        </ul>
        <!-- 
            1.keep-alive 能緩存組件裡的資料，不會銷毀組件
            2.只有 include 的組件能緩存
            3.這裡的 News 指的是 router.js 裡的組件名 (component)，不是 name
            4.keep-alive 必須包裹 router-view 展示的地方，而不是組件裡
         -->
        <!-- <keep-alive include="News"> -->
        <!-- 多個組件就用陣列來寫 -->
        <keep-alive :include="['News', 'Message']">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
export default {
    name: 'Home',
    mounted() {},
}
</script>
<style lang=""></style>
