import { createApp } from 'vue';
import App from '@/App.vue';

import router from '@/router/router';
import { createPinia } from 'pinia'; // Импорт createPinia из библиотеки pinia
import './style.css';
import './reset.css'
import components from '@/components/UI/index.js'

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);
});

const storedRoute = localStorage.getItem('activePage');
if (storedRoute && storedRoute !== '/') {
  router.push(storedRoute).catch(() => {});
}

app.use(router);

const pinia = createPinia();

app.use(pinia);

app.mount('#app');
