import Vue from 'vue'
import App from './App.vue'
import { NavbarPlugin } from 'bootstrap-vue'
import { VBScrollspyPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(NavbarPlugin)
Vue.use(VBScrollspyPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
