
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './style.css'
import requset from './router/index'
const app = createApp(App)
app.use(ElementPlus)
app.use(requset)
app.mount('#app')
