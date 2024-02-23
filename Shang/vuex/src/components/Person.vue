<template lang="">
    <div>
        <h1>人員列表</h1>
        <input type="text" placeholder="請輸入名字" />
        <button>添加</button>
        <ul>
            <li v-for="person in personList">{{ person.name }}</li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Person',
    computed: {
        ...mapState(['personList']),
    },
}
</script>
<style lang=""></style>
