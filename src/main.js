import { createApp } from 'vue';
import router from '@/router/router';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import components from '@/components/UI/index.js'

import './style.css';
import './reset.css'


const app = createApp(App);
const pinia = createPinia();

components.forEach(component => {
  app.component(component.name, component);
});

const storedRoute = localStorage.getItem('activePage');
if (storedRoute && storedRoute !== '/') {
  router.push(storedRoute).catch(() => { });
}

app.use(router);
app.use(pinia);
app.mount('#app');
