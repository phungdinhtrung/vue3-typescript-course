import { createApp } from 'vue'

import App from './App.vue'
import PrimeVue from 'primevue/config';
import Router from '@/router/index'
import i18n from '@/plugins/i18n'

import '@/assets/style.css'


const app = createApp(App)
app.use(i18n);
app.use(Router);
app.use(PrimeVue);
app.mount('#app')