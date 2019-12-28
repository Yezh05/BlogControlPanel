import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import './plugins/element.js'
import store from './store'
Vue.config.productionTip = false

new Vue({
 ElementUI,
 router,
 store,
 render: h => h(App),
 mounted: () => {
 }
}).$mount('#app')
