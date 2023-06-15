const { createApp } = Vue;

createApp({
  data() {
    return {
      inputClass: '',
      paraIsVisible: true,
      inputBackgroundColor: '',
    }
  },
  computed: {
    addInputClass() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.paraIsVisible === true,
        hidden: this.paraIsVisible === false,
      }
    }
  },
  methods: {
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    }
  }
}).mount('#assignment')