import { Nullable } from "element-plus/es/components/cascader-panel/src/node.mjs";
import { defineStore } from "pinia";
import router from "~router/index";
import { SettingEnum } from "~shared/enums";
import { store } from "~store/index";
import type { LoginInfo, UserInfo } from "~types/store";
import { usePermissionStoreWithOut } from "~store/modules/permission";
import { RouteRecordRaw } from "vue-router";
const permissionStore = usePermissionStoreWithOut();
import { ApiLogin } from "~request/api/index.ts";
import { getUserCache, setUserCache,clearUserCache } from "~shared/catch/user";
import { CacheSetting } from "~shared/catch/cacheEnum";
import { MODEL_NOT_FOUND } from "~router/model";
interface UserState {
  token?: string;
  userInfo: Nullable<UserInfo>;
  menuList: RouteRecordRaw | [];
}
export const useUserStore = defineStore({
  id: "use-userInfo",
  state: (): UserState => ({
    userInfo: null,
    token: undefined,
    menuList: [],
  }),
  getters: {
    getUserInfo(state): UserInfo {
      return (
        state.userInfo ||
        getUserCache<UserInfo>(CacheSetting.USER_INFO_KEY) ||
        {}
      );
    },
    getToken(state): string {
      return state.token || getUserCache<string>(CacheSetting.TOKEN_KEY);
    },
    getMenuList() {
      return getUserCache<RouteRecordRaw | unknown>(CacheSetting.MENU_LIST);
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token ? token : "";
      setUserCache(CacheSetting.TOKEN_KEY, token);
    },
    setMenuList(list: RouteRecordRaw) {
      this.menuList = list ? list : [];
      setUserCache(CacheSetting.MENU_LIST, list);
    },
    logOut() {
      clearUserCache()
      router.push({name: "login"})
    },
    async login(params: LoginInfo) {
      try {
        ApiLogin.login(params).then((res: any) => {
          console.log("res: " + res.username);
          ApiLogin.userInfo().then((res: any) => {
            this.setToken(res.token);
            ApiLogin.menuList().then((res: any) => {
              this.setMenuList(res.menu);
              return this.afterLogin();
            });
          });
        });
      } catch (err) {
        return Promise.reject(err);
      }
    },
    async afterLogin() {
      if (!permissionStore.getDynamicRoutes) {
        const routes = await permissionStore.buildFrontMenuList();
        routes.forEach((route) => {
          router.addRoute(route as unknown as RouteRecordRaw);
        });
        router.addRoute(MODEL_NOT_FOUND as unknown as RouteRecordRaw);
      }
      permissionStore.setDynamicRoutes(true);
      router.replace(SettingEnum.BASE_HOME);
    },
  },
});
export function useUserStoreWithOut() {
  return useUserStore(store);
}
