require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from '../plugins/vuetify'
import router from './routes'
import Index from './index'

Vue.use(VueRouter)
Vue.use(Vuetify)

const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
    router,
    components: {
      'index': Index
    }
});
