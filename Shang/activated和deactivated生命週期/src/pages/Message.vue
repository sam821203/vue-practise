<template lang="">
    <div>
        <ul>
            <li v-for="msg in messageList" :key="msg.id">
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
    methods: {},
}
</script>
<style lang=""></style>
