<template lang="">
    <div>
        <div>Detail</div>
        <div>編號：{{ $route.query.id }}</div>
        <div>名稱：{{ $route.query.title }}</div>
    </div>
</template>
<script>
export default {
    name: 'Detail',
    mounted() {
        // 取得父路由傳過來的參數
        console.log(this.$route.query)
    },
}
</script>
<style lang=""></style>
