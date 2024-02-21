<template lang="">
    <div>
        <!-- <h2 @click="showName">學校名稱：{{ name }}</h2> -->
        <h2>學校地址：{{ address }}</h2>
    </div>
</template>
<script>
// import { mixin1 } from '../mixin'

export default {
    // name 最好跟文件名稱一樣 (School.vue)
    name: 'School',
    data() {
        return {
            name: 'Cheers',
            address: '台中市',
        }
    },
    // mixins: [mixin1],
    methods: {},
}
</script>
<style lang=""></style>
