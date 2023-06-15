const { createApp } = Vue;

createApp({
  data() {
    return {
      name: 'Sam',
      age: 29,
      imageUrl: 'https://imagecompressor.com/images/imagecompressor/logo.svg'
    }
  },
  methods: {
    randomNum() {
      return Math.random();
    },

  }
}).mount('#assignment');