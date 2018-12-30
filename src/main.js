import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUmbrellaBeach, faCloud, faSnowflake, faFilter, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUmbrellaBeach, faCloud, faSnowflake, faCalendarAlt, faQuestionCircle, faFilter, faEnvelope);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
