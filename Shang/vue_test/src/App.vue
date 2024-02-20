<template lang="">
    <div>
        <Student :name="'曉一'" :sex="'女'" :age="20" />
        <hr />
        <School />
    </div>
</template>
<script>
// 引入組件
import Student from './components/Student'
import School from './components/School'

export default {
    name: 'App',
    components: {
        Student,
        School,
    },
}
</script>
<style lang=""></style>
