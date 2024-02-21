<template lang="">
    <div class="category">
        <h3>{{ title }} 分類</h3>
        <slot name="center">Default1</slot>
        <slot name="footer">Default2</slot>
    </div>
</template>
<script>
export default {
    name: 'Category',
    props: ['title'],
    data() {
        return {}
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
