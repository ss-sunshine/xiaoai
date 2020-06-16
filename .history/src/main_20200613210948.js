import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueParticles from 'vue-particles'
import JsonExcel from 'vue-json-excel'
import VCharts from 'v-charts'

Vue.use(VCharts)
Vue.component('downloadExcel', JsonExcel)
Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
