import { createApp } from "vue";
import App from "~/App.vue";
import router from "~/router";
import { store } from "~/store";
import { setupRouterGuard } from "~router/guard";
import "~assets/styles/index.scss";
import 'element-plus/dist/index.css'
import "~mock/index.js"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from "./components/SvgIcon/index.vue"
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const app = createApp(App);
const pinia = createPinia();
//注册全局icons组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component("SvgIcons", SvgIcon)
// 注册路由
async function startRouter() {
  app.use(router);
  setupRouterGuard(router);
}
pinia.use(piniaPluginPersistedstate)
app.use(store);
startRouter();
app.mount("#app");
