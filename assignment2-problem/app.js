const { createApp } = Vue;

createApp({
  data() {
    return {
      staticNumber: 10,
      outputResult: '',
    }
  },
  methods: {
    showAlert() {
      alert('Show alert');
    },
    showOutputResult(e, para2) {
      this.outputResult = e.target.value + ' ' + para2;
    },
    // enterOutputResult
  },
}).mount('#assignment');