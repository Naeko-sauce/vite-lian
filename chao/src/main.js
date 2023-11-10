
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import requset from './router/index'
const app = createApp(App)
app.use(requset)
app.mount('#app')
