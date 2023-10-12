import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
//引入ele样式
import '@/style/common.css'
import '@/style/style.scss'
import pinia from '@/store/index.ts'

createApp(App).use(router).use(pinia).mount('#app')
