import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamsMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams'
    },
    // domain.com / teams
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        // /teams/t1
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamsMembers,
          props: true,
        },
      ]
      // alias: '/'
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      }
    },
    // {
    //   path: '/teams/:teamId',
    //   component: TeamsMembers,
    //   props: true,
    // },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0
    }
  }
});

const app = createApp(App)

app.use(router);

app.mount('#app');
