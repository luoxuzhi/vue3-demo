// import { createApp } from 'vue'
import * as Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
let app = Vue.createApp(App)
// console.log('Vue :>> ', Vue)
// console.log('app :>> ', app)
// createApp(App)
app
	.use(router)
	.use(store)
	.mount('#app')
