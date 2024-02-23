<template lang="">
    <div>
        <hr />
        <div>Detail</div>
        <div>編號：{{ id }}</div>
        <div>名稱：{{ title }}</div>
    </div>
</template>
<script>
export default {
    name: 'detail',
    props: ['id', 'title'],
    mounted() {
        // 取得父路由傳過來的參數
        console.log('Detail 參數', this.$route)
    },
}
</script>
<style lang=""></style>
