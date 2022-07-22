import Vue from 'vue'
import App from './App.vue'
//import router from './app/router'

import 'popper.js/dist/umd/popper.min';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
