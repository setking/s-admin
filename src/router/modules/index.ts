import { SettingEnum } from "~shared/enums";
import type { RouteRecordRaw } from "vue-router";
import { REDIRECT_ROUTE } from "~router/model";
const modules = import.meta.glob("./***/*.ts", { eager: true });
const moduleRoutes: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = (modules as Recordable)[key].default || {};
  const mods = Array.isArray(mod) ? [...mod] : [mod];
  moduleRoutes.push(...mods);
});
export const asyncRoutes = [...moduleRoutes];
export const RootRoutes = {
  path: "/",
  name: "Root",
  redirect: SettingEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};
export const LoginRoutes = {
  path: "/login",
  name: "login",
  component: () => import("~views/login/index.vue"),
  meta: {
    title: "登录",
  },
};

export const basicRoutes = [RootRoutes, LoginRoutes, REDIRECT_ROUTE];
