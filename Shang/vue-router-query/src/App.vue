<template lang="">
    <div>
        <Banner />
        <div>
            <router-link active-class="active" to="/home">Home</router-link>
            <router-link active-class="active" :to="{ name: 'about' }">About</router-link>
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
