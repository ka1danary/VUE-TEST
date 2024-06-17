import { createApp, watch, computed } from 'vue';
import App from '@/App.vue';
import router from '@/router/router';
import { createPinia } from 'pinia';
import components from '@/components/UI/index.js';
import { useLanguageStore } from '@/store/LanguageStore';
import { createI18n } from 'vue-i18n';


import ru from '@/i18n/locale/ru.json';
import en from '@/i18n/locale/en.json';

import './style.css';
import './reset.css';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

const languageStore = useLanguageStore();
const locale = computed(() => languageStore.locale);

const i18n = createI18n({
  locale: locale.value,
  messages: {
    en: en,
    ru: ru,
  },
  legacy: false,
  globalInjection: true,
});

watch(locale, (newLocale) => {
  i18n.global.locale.value = newLocale;
});

components.forEach((component) => {
  app.component(component.name, component);
});

const storedRoute = localStorage.getItem('activePage');
if (storedRoute && storedRoute !== '/') {
  router.push(storedRoute).catch(() => { });
}

app.use(router);
app.use(i18n);

app.mount('#app');
