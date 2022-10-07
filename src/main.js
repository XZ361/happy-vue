// webpack识别的入口文件
import { createApp } from "vue";
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')