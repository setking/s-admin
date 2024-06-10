import Mock from 'mockjs';
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
                    icon: "ion:grid-outline",
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
            }
        ],
    },
});
