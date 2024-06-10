import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { basicRoutes } from "./modules";
const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
});
export default router;
