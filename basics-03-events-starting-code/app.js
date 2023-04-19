const { createApp } = Vue;

createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      // fullName: '',
      lastName: '',
    };
  },
  watch: {
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + "Huang"
    //   }
    // }
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 1000)
        // this.counter = 0;
      }
    }
  },
  computed: {
    fullName() {
      console.log('hi');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm(e) {
      // e.preventDefault();
      alert('Please enter a name');
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputFullName() {
      console.log('hi');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Huang';
    }
  },
}).mount('#events');