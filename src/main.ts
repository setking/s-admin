import { createApp } from "vue";
import App from "~/App.vue";
import router from "~/router";
import { store } from "~/store";
import { setupRouterGuard } from "~router/guard";
import "~assets/styles/index.scss";
import "~mock/index.js"

const app = createApp(App);
async function startRouter() {
  app.use(router);
  setupRouterGuard(router);
}
app.use(store);
startRouter();
app.mount("#app");
