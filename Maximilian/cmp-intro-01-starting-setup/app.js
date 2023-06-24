const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      friends: [
        {
          id: 'manual',
          name: 'Manual Lorenz',
          phone: '01234 5678 991',
          email: 'manual@lorem.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@gmail.com',
        }
      ]
    }
  },
});

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manual',
        name: 'Manual Lorenz',
        phone: '01234 5678 991',
        email: 'manual@lorem.com',
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');