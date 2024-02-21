<template lang="">
    <div class="school">
        <h2>學校名稱：{{ name }}</h2>
        <h2>學校地址：{{ address }}</h2>
    </div>
</template>
<script>
export default {
    name: 'School',
    props: ['schoolNameEmit'],
    data() {
        return {
            name: 'Cheers',
            address: '台中市',
        }
    },
    mounted() {
        this.$bus.$on('hello', (data) => {
            console.log('School 組件收到了來自 App 組件的 hello 事件', data)
        })
    },
    beforeDestroy() {
        // 解除綁定
        this.$bus.$off('hello')
    },
}
</script>
<style scoped>
.school {
    background-color: rgb(112, 112, 112);
    padding: 5px;
}
</style>
