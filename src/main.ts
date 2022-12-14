import { createApp } from 'vue';
import '@/styles/style.scss';
import { createPinia } from 'pinia';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import Sound from '@/utils/Sound';
import App from './App.vue';
import router from './routes';
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register';

const app = createApp(App);

// Предзагрузка звуков
Sound.init();
app.use(router);
app.use(PerfectScrollbar);
app.use(createPinia());
app.mount('#app');
