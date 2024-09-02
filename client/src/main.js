import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faSun, faMoon, faThermometerHalf, faTint, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCloud, faSun, faMoon, faThermometerHalf, faTint, faClock);
const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
