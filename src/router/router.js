import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'


const routes = [
    {
        path : '/',
        name : 'main',
        component : MainPage
    },
    {
        path : '/settings',
        name : 'settings',
        component : SettingsPage
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router