import { RouteRecordRaw } from "vue-router";
import {
  EXCEPTION,
  LAYOUT,
  MODEL_NOT_FOUND_NAME,
  REDIRECT_NAME,
} from "./layout";

export const MODEL_NOT_FOUND: RouteRecordRaw = {
  path: "/:path(.*)*",
  name: MODEL_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: "ErrorPage",
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: "/:path(.*)*",
      name: MODEL_NOT_FOUND_NAME,
      component: EXCEPTION,
      meta: {
        title: "ErrorPage",
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
};
export const REDIRECT_ROUTE: RouteRecordRaw = {
  path: "/redirect",
  component: LAYOUT,
  name: "RedirectTo",
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: "/redirect/:path(.*)/:_redirect_type(.*)/:_origin_params(.*)?",
      name: REDIRECT_NAME,
      component: () => import("~views/redirect/index.vue"),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true,
      },
    },
  ],
};
