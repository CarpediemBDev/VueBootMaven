import { createApp } from 'vue'
import App from './App.vue'
import axios  from 'axios'

const app = createApp(App)

// axios를 전역으로 등록
app.config.globalProperties.$axios = axios

app.mount('#app')