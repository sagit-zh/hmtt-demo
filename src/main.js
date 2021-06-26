import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/reset.css'
import '@/styles/iconfont.css'

import {
	Toast,
	Notify
} from 'vant';
Vue.use(Toast);
Vue.use(Notify)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
