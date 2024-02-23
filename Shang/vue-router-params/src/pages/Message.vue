<template lang="">
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
                <!-- 字串寫法 -->
                <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{ msg.title }}</router-link> -->
                <!-- 物件寫法：如果是使用 params，就一定要用 name 配置，不能用 path -->
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
