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
