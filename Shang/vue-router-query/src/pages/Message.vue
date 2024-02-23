<template lang="">
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!-- 跳轉錄由，並攜帶 query 參數到子路由 -->
                <!-- to 字串寫法 -->
                <!-- <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{ msg.title }}</router-link> -->
                <!-- to 物件寫法，裡面可以寫兩個屬性，path 和 query-->
                <router-link
                    :to="{
                        name: 'detail',
                        query: {
                            id: msg.id,
                            title: msg.title,
                        },
                    }"
                    >{{ msg.title }}</router-link
                >
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                { id: 1, title: 'Message 01' },
                { id: 2, title: 'Message 02' },
                { id: 3, title: 'Message 03' },
            ],
        }
    },
}
</script>
<style lang=""></style>
