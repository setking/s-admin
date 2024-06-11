import { LAYOUT } from "~router/layout";
const dashboard = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/analysis",
  meta: {
    orderNo: 1,
    icon: "Menu",
    title: "仪表盘",
  },
  children: [
    {
      path: "analysis",
      name: "Analysis",
      component: () => import("~views/dashboard/analysis/index.vue"),
      meta: {
        orderNo: 2,
        title: "数据分析",
      },
    },
    // {
    //   path: "work",
    //   name: "Work",
    //   component: () => import("~views/dashboard/work/index.vue"),
    //   meta: {
    //     orderNo: 3,
    //     title: "工作台",
    //   },
    // },
  ],
};
export default dashboard;
