<template lang="">
    <div>
        <ul>
            <li :style="{ opacity }"></li>
            <li>
                <input type="text" />
            </li>
            <li>
                <input type="text" />
            </li>
            <li>
                <input type="text" />
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'News',
    data() {
        return {
            opacity: 1,
        }
    },
    // 激活與失活：路由獨有的生命鉤子
    activated() {
        console.log('News activated 激活')
    },
    deactivated() {
        console.log('News deactivated 失活')
    },
}
</script>
<style lang=""></style>
