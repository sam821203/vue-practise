<template lang="">
    <div class="category">
        <h3>{{ title }} 分類</h3>
        <!-- slot 提供將 data 從子組件傳到父組件的方法，資料會傳使用插槽的使用者 -->
        <slot :foodsData="foods">Default value</slot>
    </div>
</template>
<script>
export default {
    name: 'Category',
    props: ['title'],
    data() {
        return {
            foods: ['apple', 'banana', 'orange'],
        }
    },
    methods: {},
    mounted() {},
}
</script>
<style scoped>
.category {
    background-color: rgb(218, 218, 218);
    width: 200px;
    height: 200px;
    padding: 5px;
}

h3 {
    background-color: rgb(123, 206, 231);
    text-align: center;
}
</style>
