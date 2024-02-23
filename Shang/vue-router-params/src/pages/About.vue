<template lang="">
    <div>About</div>
</template>
<script>
export default {
    name: 'About',
    beforeDestroy() {
        // 在切換路由組件時，錢一個組件會被銷毀
        console.log('About beforeDestroy')
    },
}
</script>
<style lang=""></style>
