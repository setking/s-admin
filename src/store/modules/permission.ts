import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
import { asyncRoutes } from "~router/modules";
import { Menu } from "~/types/store";
import { filter } from "~shared/filterTree";
import { store } from "..";
import { useUserStore } from "./user";

interface PermissionState {
  // 菜单列表
  frontMenuList: Menu[];
  isDynamicRoute: Boolean;
}
export const usePermissionStore = defineStore({
  id: "use-permission",
  state: (): PermissionState => ({
    frontMenuList: [],
    isDynamicRoute: false,
  }),
  getters: {
    getFrontMenuList(state): Menu[] {
      return state.frontMenuList;
    },
    getDynamicRoutes(state): Boolean {
      return state.isDynamicRoute;
    },
  },
  actions: {
    setFrontMenuList(list: Menu[]) {
      this.frontMenuList = list;
    },
    setDynamicRoutes(types: Boolean) {
      this.isDynamicRoute = types;
    },
    async buildFrontMenuList(): Promise<RouteRecordRaw[]> {
      const useStore = useUserStore();
      let routes: RouteRecordRaw[] = [];
      let afterRoutes = [];
      let newRoutes = useStore.getMenuList;

      //路由过滤器
      const filterRoute = () => {
        return true;
      };
      afterRoutes = filter(true, newRoutes as [], filterRoute);
      afterRoutes = afterRoutes.filter(filterRoute);
      routes = filter(false, asyncRoutes, filterRoute);
      routes = routes.filter(filterRoute);
      routes = routes.concat(afterRoutes)
      return routes;
    },
  },
});
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}
