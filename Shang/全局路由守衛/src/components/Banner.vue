<template lang="">
    <div>
        <div>Banner</div>
        <button @click="back">後退一步</button>
        <button @click="forward">前進一步</button>
        <button @click="go">GO~</button>
    </div>
</template>
<script>
export default {
    name: 'Banner',
    methods: {
        back() {
            this.$router.back()
        },
        forward() {
            this.$router.forward()
        },
        // go 傳入的數字，會連續走該數字的步數
        go() {
            this.$router.go(2)
        },
    },
}
</script>
<style lang=""></style>
