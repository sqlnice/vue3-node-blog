import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import 'element-plus/lib/theme-chalk/index.css';
import '@/styles/reset.less';
createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
78;
