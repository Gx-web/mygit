import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

let bus = new Vue();

Vue.prototype.$bus = bus;

new Vue({
  render: h => h(App),
}).$mount('#app')
