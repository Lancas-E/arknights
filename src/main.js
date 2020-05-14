import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(Router);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
