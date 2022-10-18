import {
  createRouter, createWebHashHistory, RouteRecordRaw,
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
    }],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
