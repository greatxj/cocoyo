
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'

import Vuetify from 'vuetify'
import {router} from './router/app/index';
import store from './store/app';
import Home from './Home.vue';
import HttpPlugin from './libs/app_http'


Vue.use(Vuetify)
Vue.use(HttpPlugin);

const app = new Vue({
    el: '#app',
    store: store,
    router: router,
    render: h => h(Home),
});
