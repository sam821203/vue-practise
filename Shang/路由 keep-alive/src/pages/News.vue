<template lang="">
    <div>
        <ul>
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
    beforeDestroy() {
        console.log('News beforeDestroy')
    },
}
</script>
<style lang=""></style>
