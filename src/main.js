import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // Related to App imported above
}).$mount('#app') // Check in index.html
