import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamsMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

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
      meta: { needsAuth: true },
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
      },
      beforeEnter(to, from, next) {
        console.log('user beforeEnter');
        console.log(to, from);
        next();
      },
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
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0
    }
  }
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log('Needs auth');
    next();
  } else {
    next();
  }
  // next('/user');

  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({
  //     name: 'team-members',
  //     params: { teamId: 't2' }
  //   });
  // }

  next();
});

router.afterEach(function (to, from) {
  console.log('Global afterEach');
  console.log(to, from);
})

export default router;