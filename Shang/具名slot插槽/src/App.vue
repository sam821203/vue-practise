<template lang="">
    <div class="app">
        <Category title="美食">
            <img slot="center" src="./assets/eat.jpg" width="200" alt="" />
            <a slot="footer" href="#">click</a>
        </Category>
        <Category title="遊戲">
            <ul slot="center">
                <li v-for="(item, index) in games" :key="index">{{ item }}</li>
            </ul>
            <div slot="footer" class="foot">
                <a href="#">單機遊戲</a>
                <a href="#">網路遊戲</a>
            </div>
        </Category>
        <Category title="電影">
            <img slot="center" src="./assets/eat.jpg" width="200" alt="" />
            <template v-slot:footer>
                <div class="foot">
                    <a href="#">電影1</a>
                    <a href="#">電影2</a>
                    <a href="#">電影3</a>
                </div>
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
    data() {
        return {
            foods: ['apple', 'banana', 'orange'],
            games: ['game1', 'game2', 'game3'],
            films: ['film1', 'film2', 'film3'],
        }
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
