import {
  createRouter, createWebHistory, RouteRecordRaw,
} from 'vue-router';
import HomePage from '@/pages/HomePage';
import GreetingsPage from '@/pages/GreetingsPage';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: 'home',

    children: [{
      path: '/',
      name: 'greetings',
      component: GreetingsPage,
    }, {
      path: '/loading',
      name: 'loading',
      component: GreetingsPage,
    }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
