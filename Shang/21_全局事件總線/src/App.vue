<template lang="">
    <div class="app">
        <h1>{{ msg }}</h1>
        <Student />
        <School />
    </div>
</template>
<script>
import Student from './components/Student'
import School from './components/School'

export default {
    name: 'App',
    components: {
        Student,
        School,
    },
    data() {
        return {
            msg: 'Components',
        }
    },
}
</script>
<style scoped>
.app {
    color: white;
    background-color: black;
}
</style>
