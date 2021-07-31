import Vue from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import VueRouter from 'vue-router';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');

import { FormGroupPlugin } from 'bootstrap-vue';
Vue.use(FormGroupPlugin);

import { FormInputPlugin } from 'bootstrap-vue';
Vue.use(FormInputPlugin);

import { FormSelectPlugin } from 'bootstrap-vue';
Vue.use(FormSelectPlugin);

import { ButtonPlugin } from 'bootstrap-vue';
Vue.use(ButtonPlugin);

import { FormPlugin } from 'bootstrap-vue';
Vue.use(FormPlugin);
