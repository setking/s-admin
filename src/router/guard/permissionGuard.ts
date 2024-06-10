import { Router, RouteRecordRaw } from "vue-router";
import { SettingEnum } from "~shared/enums";
import { useUserStoreWithOut } from "~store/modules/user";
import { usePermissionStoreWithOut } from "~store/modules/permission";
import { RootRoutes } from "~router/modules";
import { MODEL_NOT_FOUND } from "~router/model";

interface UsePath {
  path: string;
  replace: boolean;
  query?: Recordable<string>;
}
const LOGIN_PATH = SettingEnum.BASE_LOGIN;

const ROOT_PATH = RootRoutes.path;

const whitePathList: SettingEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  const userStore = useUserStoreWithOut();
  const permissionStore = usePermissionStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    if (
      from.path === ROOT_PATH &&
      to.path === SettingEnum.BASE_LOGIN &&
      userStore.getUserInfo.homePath &&
      userStore.getUserInfo.homePath === SettingEnum.BASE_HOME
    ) {
      debugger;
      next(userStore.getUserInfo.homePath);
      return;
    }
    const token = userStore.getToken;
    if (whitePathList.includes(to.path as SettingEnum)) {
      if (to.path === LOGIN_PATH && token) {
        console.log("is login");
      }
      next();
      return;
    }
    if (!token) {
      const redirectData: UsePath = {
        path: LOGIN_PATH,
        replace: true,
      };
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        };
        next(redirectData);
        return;
      }
    }
    if (permissionStore.getDynamicRoutes) {
      next();
      return;
    }
    const routes = await permissionStore.buildFrontMenuList();
    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });
    router.addRoute(MODEL_NOT_FOUND as unknown as RouteRecordRaw);
    permissionStore.setDynamicRoutes(true);
    if (to.name === MODEL_NOT_FOUND.name) {
      next({ path: to.fullPath, replace: true, query: to.query });
    } else {
      const redirectPath = (from.query.redirect || to.path) as string;
      const redirect = decodeURIComponent(redirectPath);
      const nextData =
        to.path === redirect ? { ...to, replace: true } : { path: redirect };
      next(nextData);
    }
  });
}
