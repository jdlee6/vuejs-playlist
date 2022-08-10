import Vue from 'vue'
import App from './App.vue'

// Recall: we are just abstracting this template in
// a .vue component
// Vue.component('name', {
//   template: '<p> html tags here </p>'
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
