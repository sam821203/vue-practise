<template>
  <button type="button" @click="onClickAge">Update Age Event</button>
  <button type="button" @click="ageChangeFn(3)">Update Age CB</button>
  <p>The user is {{ age }} years old</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: 'User',
  props: {
    age: {
      type: [Number, String],
      required: true,
      validator(value) {
        // this.onClickAge()
        return value < 110
      }
    },
    ageChangeFn: Function
  },
  emits: ['age-change'],
  computed: {
    ageDoubled() {
      return this.age * 2
    }
  },
  methods: {
    onClickAge() {
      this.$emit('age-change', 10)
    }
  }
}
</script>