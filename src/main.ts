import Vue from 'vue';
import App from './app/App.vue'

//import router from './app/router'

import 'popper.js/dist/umd/popper.min';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap';

require('./assets/styles/main.scss');
require('bootstrap/dist/css/bootstrap.min.css');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
