<template lang="">
    <div class="app">
        <Category title="美食">
            <!-- scope 屬性可以把子層傳過來值拿來運用 -->
            <template scope="data">
                <ul>
                    <li v-for="(item, index) in data.foodsData" :key="index">{{ item }}</li>
                </ul>
            </template>
        </Category>
        <Category title="美食">
            <template scope="{ foodsData }">
                <ol>
                    <li v-for="(item, index) in foodsData" :key="index">{{ item }}</li>
                </ol>
            </template>
        </Category>
        <Category title="美食">
            <template scope="{ foodsData }">
                <h4 v-for="(item, index) in foodsData" :key="index">{{ item }}</h4>
            </template>
        </Category>
        <Category title="美食">
            <!-- slot-scope 是較新的寫法 -->
            <template slot-scope="{ foodsData }">
                <h5 v-for="(item, index) in foodsData" :key="index">{{ item }}</h5>
            </template>
        </Category>
    </div>
</template>
<script>
import Category from './components/Category'

export default {
    name: 'App',
    components: {
        Category,
    },
}
</script>
<style scoped>
.app {
    display: flex;
    justify-content: space-between;
    background-color: black;
}

.foot {
    display: flex;
    justify-content: space-around;
}
</style>
