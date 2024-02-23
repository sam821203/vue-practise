<template lang="">
    <div>
        <Banner />
        <div>
            <!-- vue 中借住 router-link 來實現路由跳轉 -->
            <router-link replace active-class="active" to="/home">Home</router-link>
            <router-link replace active-class="active" :to="{ name: 'aboutName' }">About</router-link>
        </div>
        <div>
            <!-- 指定組件的呈現位置 -->
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Banner from './components/Banner'
export default {
    name: 'App',
    components: {
        Banner,
    },
}
</script>
<style>
.active {
    color: white;
    background-color: tomato;
}
</style>
