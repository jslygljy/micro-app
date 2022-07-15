import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const api: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "api",
        path: "/api",
        meta: {
            title: "API市场",
            icon: "ico-menu-api",
            permission: "100000",
        },
        children: [
            {
                component: LayoutParentMenu,
                name: "apiExpressSheet",
                path: "/api/expressSheet",
                meta: {
                    title: "面单查询",
                    alive: false,
                    permission: "100100",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/api/expressSheet/index" */ "@/views/api/expressSheet/index.vue"
                            ),
                        name: "expressSheet",
                        path: "/api/expressSheet",
                        meta: {
                            title: "面单查询",
                            alive: false,
                            hidden: true,
                            permission: "100100",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/api/expressSheet/detail" */ "@/views/api/expressSheet/detail.vue"
                            ),
                        name: "expressSheet-detail",
                        path: "/api/expressSheet/detail",
                        meta: {
                            title: "面单明细",
                            alive: false,
                            hidden: true,
                            permission: "100102",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "logistics-parent",
                path: "/api/logistics",
                meta: {
                    title: "物流查询",
                    alive: false,
                    permission: "100200",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/api/logistics/index" */ "@/views/api/logistics/index.vue"
                            ),
                        name: "logistics",
                        path: "/api/logistics",
                        meta: {
                            title: "物流查询",
                            alive: false,
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/api/logistics/detail" */ "@/views/api/logistics/detail.vue"
                            ),
                        name: "logistics-detail",
                        path: "/api/logistics/detail",
                        meta: {
                            title: "物流明细",
                            alive: false,
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "api-node",
                path: "/api/node",
                meta: {
                    title: "短信查询",
                    permission: "100300",
                },
                children: [
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/api/node" */ "@/views/api/node/index.vue"),
                        name: "node",
                        path: "/api/node",
                        meta: {
                            title: "短信查询",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "api-realName",
                path: "/api/realName",
                meta: {
                    title: "实名认证",
                    permission: "100400",
                },
                children: [
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/api/realName" */ "@/views/api/realName/index.vue"),
                        name: "realName",
                        path: "/api/realName",
                        meta: {
                            title: "实名认证",
                            hidden: true,
                            permission: "100400",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/api/realName/detail" */ "@/views/api/realName/detail.vue"
                            ),
                        name: "realName-detail",
                        path: "/api/realName/detail",
                        meta: {
                            title: "实名明细",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "api-humanFace",
                path: "/api/humanFace/parent",
                redirect: "/api/humanFace",
                meta: {
                    title: "人脸核身",
                    permission: "100400",
                },
                children: [
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/api/humanFace" */ "@/views/api/humanFace/index.vue"),
                        name: "humanFace",
                        path: "/api/humanFace",
                        meta: {
                            title: "人脸核身",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/api/humanFace/detail" */ "@/views/api/humanFace/detail.vue"
                            ),
                        name: "humanFace-detail",
                        path: "/api/humanFace/detail",
                        meta: {
                            title: "核身明细",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "node-parent",
                path: "/api/bankCard",
                meta: {
                    title: "银行卡",
                    permission: "100500",
                },
                children: [
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/api/bankCard" */ "@/views/api/bankCard/index.vue"),
                        name: "bankCard",
                        path: "/api/bankCard",
                        meta: {
                            title: "银行卡",
                            hidden: true,
                            permission: "100500",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/api/bankCard/detail" */ "@/views/api/bankCard/detail.vue"
                            ),
                        name: "bankCard-detail",
                        path: "/api/bankCard/detail",
                        meta: {
                            title: "银行卡明细",
                            hidden: true,
                        },
                    },
                ],
            },
        ],
    },
];

export default api;
