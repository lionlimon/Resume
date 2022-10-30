import {
  createRouter, createWebHistory, RouteRecordRaw,
} from 'vue-router';
import HomePage from '@/pages/HomePage';
import GreetingsPage from '@/pages/GreetingsPage';
import AboutPage from '@/pages/AboutPage';
import StackPage from '@/pages/StackPage';

type ChildrenMeta = {
  meta: {
    ru: {
      name: string
    }
  }
}

export const homePageChildren: (RouteRecordRaw & ChildrenMeta)[] = [
  {
    path: '/',
    name: 'greetings',
    component: GreetingsPage,
    meta: {
      ru: {
        name: 'Привет',
      },
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: {
      ru: {
        name: 'Обо мне',
      },
    },
  },
  {
    path: '/stack',
    name: 'stack',
    component: StackPage,
    meta: {
      ru: {
        name: 'Технологический стек',
      },
    },
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: 'home',

    children: homePageChildren,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
