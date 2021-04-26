import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import client from './client'
import './index.css'

const app = createApp(App)
app.use(store)
app.config.globalProperties.$http = client
app.mount('#app')
