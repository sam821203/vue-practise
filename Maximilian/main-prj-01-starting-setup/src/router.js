import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/artists', component: null },
    {
      path: '/artists/:id', component: null, children: [
        { path: '/contact', component: null }
      ]
    },
    { path: '/register', component: null },
    { path: '/register', component: null },
  ],
});

export default router;