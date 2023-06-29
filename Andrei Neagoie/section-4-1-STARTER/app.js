let app = Vue.createApp({

})

app.component('hello', {
  template: `<h1>{{ message }}</h1>`,
  data() {
    return {
      message: 'Hello world!'
    }
  }
})

app.mount('#app');

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   },
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// })
// vm2.mount('#app2')