const { createApp } = Vue;

createApp({
  data() {
    return {
      counter: 0,
    }
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 1000)
    }
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return 'Not there yet!';
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return 'Too much!';
      }
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  }
}).mount('#assignment');