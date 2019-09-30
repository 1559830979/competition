// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css';
import navigation from '@/components/navigation.vue';
import '@/assets/css/base.css';
Vue.use(ElementUI);
Vue.component("navigation",navigation);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})