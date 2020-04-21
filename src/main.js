import Vue from 'vue'
import App from './App.vue'

import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import axios from "axios"
import VueAxios from "vue-axios";
Vue.prototype.$http = axios
Vue.use(axios, VueAxios)
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'font-awesome/css/font-awesome.min.css'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use($)




Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#app')
