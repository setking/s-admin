import { createApp } from "vue";
import App from "~/App.vue";
import router from "~/router";
import { store } from "~/store";
import { setupRouterGuard } from "~router/guard";
import "~assets/styles/index.scss";
import "~mock/index.js"
import * as ElementPlusIcons from "@element-plus/icons"
import SvgIcon from "./components/SvgIcon/index.vue"
const app = createApp(App);
//注册全局icons组件
for (const [key, component] of Object.entries(ElementPlusIcons)) {
  app.component(key, component)
}
app.component("SvgIcons", SvgIcon)
// 注册路由
async function startRouter() {
  app.use(router);
  setupRouterGuard(router);
}
app.use(store);
startRouter();
app.mount("#app");
