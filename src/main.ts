import Vue from 'vue';
import App from './app/App.vue'
import router from './app/router'
import { store, storeTypes } from "./app/store";
import Axios from "axios";

import 'popper.js/dist/umd/popper.min';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap';

import  {library}  from '@fortawesome/fontawesome-svg-core';
import  {fas}  from '@fortawesome/free-solid-svg-icons';
import  {FontAwesomeIcon}  from '@fortawesome/vue-fontawesome';


require('./assets/styles/main.scss');
require('bootstrap/dist/css/bootstrap.min.css');

Vue.prototype.$http = Axios;

library.add(fas);

Vue.component('icon' , FontAwesomeIcon);
Vue.config.productionTip = false


export const InstanceVue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')