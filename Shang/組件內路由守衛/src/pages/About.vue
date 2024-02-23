<template lang="">
    <div>About</div>
</template>
<script>
export default {
    name: 'About',
    /* 
        1.組件內建的路由守衛，必須通過路由規則才會觸發，初始化時不會觸發
        2.只會觸發當前組件的路由守衛，不會觸發其他組件的路由守衛
    */
    // 通過路由規則，進入該組件時被調用
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter')
        next()
    },
    // 通過路由規則，離開該組件時被調用
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave')
        next()
    },
}
</script>
<style lang=""></style>
