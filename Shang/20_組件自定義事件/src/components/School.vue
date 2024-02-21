<template lang="">
    <div class="school">
        <h2>學校地址：{{ address }}</h2>
        <button type="button" @click="sendSchoolName">把學校名給 App</button>
    </div>
</template>
<script>
export default {
    name: 'School',
    props: ['schoolNameEmit'],
    data() {
        return {
            name: 'Cheers',
            address: '台中市',
        }
    },
    methods: {
        sendSchoolName() {
            this.schoolNameEmit(this.name)
        },
    },
}
</script>
<style scoped>
.school {
    background-color: rgb(112, 112, 112);
    padding: 5px;
}
</style>
