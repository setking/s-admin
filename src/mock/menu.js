import Mock from 'mockjs';
import {LAYOUT} from "~router/layout";
export const menulist = Mock.mock('/api/menu', 'get', {
    code: 200,
    data: {
        menu: [
            {
                path: "/permission",
                name: "Permission",
                component: 'LAYOUT',
                redirect: "/permission/web/page",
                meta: {
                    orderNo: 4,
                    icon: "Key",
                    title: "权限配置",
                },
                children: [
                    {
                        path: "web",
                        name: "Web",
                        component: 'ParentLayout',
                        meta: {
                            orderNo: 5,
                            title: "前端配置",
                        },
                        children: [
                            {
                                path: "page",
                                name: "Page",
                                component: "permission/web/page",
                                meta: {
                                    orderNo: 6,
                                    title: "页面权限",
                                },
                            },
                            {
                                path: "button",
                                name: "Button",
                                component: "permission/web/button",
                                meta: {
                                    orderNo: 7,
                                    title: "按钮权限",
                                },
                            },
                            {
                                path: "test",
                                name: "Test",
                                component: "ParentLayout",
                                meta: {
                                    orderNo: 8,
                                    title: "权限",
                                },
                                children: [
                                    {
                                        path: "tests",
                                        name: "Tests",
                                        component: "permission/web/test",
                                        meta: {
                                            orderNo: 9,
                                            title: "权限测试",
                                        },
                                    }
                                ]
                            },
                        ]
                    },

                ],
            },
            {
                path: "/menu",
                name: "Menu",
                component: 'LAYOUT',
                redirect: "menu/menu1/menu2/menu3",
                meta: {
                    orderNo: 10,
                    icon: "Coin",
                    title: "多级菜单",
                },
                children: [
                    {
                        path: "menu1",
                        name: "menu1",
                        component: 'ParentLayout',
                        meta: {
                            orderNo: 12,
                            title: "菜单2",
                        },
                        children: [

                            {
                                path: "menu2",
                                name: "menu2",
                                component: 'ParentLayout',
                                meta: {
                                    orderNo: 14,
                                    title: "菜单3",
                                },
                                children: [
                                    {
                                        path: "",
                                        name: "Menu3",
                                        component: 'ParentLayout',
                                        meta: {
                                            orderNo: 15,
                                            title: "菜单3",
                                        },
                                        children: [
                                            {
                                                path: "menu4",
                                                name: "Menu4",
                                                component: 'menu/menu1/menu2/menu3',
                                                meta: {
                                                    orderNo: 13,
                                                    title: "菜单2",
                                                },
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },

                ],
            },
            {
                path: "/element",
                name: "Element",
                component: 'LAYOUT',
                redirect: "/element/table",
                meta: {
                    orderNo: 16,
                    icon: "List",
                    title: "表格",
                },
                children: [
                    {
                        path: "table",
                        name: "Table",
                        component: "element/table",
                        meta: {
                            orderNo: 17,
                            title: "表格"
                        }
                    }
                ]
            },
            {
                path: "/form",
                name: "Form",
                component: 'LAYOUT',
                redirect: "/form/formFix",
                meta: {
                    title: "表单",
                    icon: "List",
                },
                children: [
                    {
                        path: "formFix",
                        name: "Form",
                        component: "form/formFix",
                        meta: {
                            orderNo: 18,
                            title: "表单"
                        }
                    }
                ]
            },
        ],

    },
});
