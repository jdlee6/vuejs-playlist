import Vue from 'vue'
import App from './App.vue'
// import Fruits from './Fruits.vue'

// Register component globally
// Vue.component('fruits', Fruits);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
