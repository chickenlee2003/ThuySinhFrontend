import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';

const myApp = createApp(App);

myApp.use(Quasar)


myApp.use(router);
myApp.mount('#app')
