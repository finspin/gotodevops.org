import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
