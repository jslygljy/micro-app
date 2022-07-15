import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const system: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "system",
        path: "/system",
        meta: {
            title: "系统设置",
            icon: "ico-menu-system",
            permission: "120000",
        },
        children: [
            {
                component: () =>
                    import(/* webpackChunkName: "modules/system/account" */ "@/views/system/account/index.vue"),
                name: "system-account",
                path: "/system/account",
                meta: {
                    title: "账户管理",
                    alive: true,
                    permission: "120100",
                },
            },
            {
                component: LayoutParentMenu,
                name: "system-role-parent",
                path: "/system/role-index",
                meta: {
                    title: "角色管理",
                    permission: "120200",
                },
                children: [
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/system/role-index" */ "@/views/system/role/index.vue"),
                        name: "system-role-index",
                        path: "/system/role-index",
                        meta: {
                            title: "角色管理",
                            hidden: true,
                            permission: "120200",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/set-role" */ "@/views/system/role/set-role.vue"
                            ),
                        name: "system-role-set-role",
                        path: "/system/role-index/set-role",
                        meta: {
                            title: "设置权限",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "system-general-configuration",
                path: "/system/general-configuration/store",
                meta: {
                    title: "通用配置",
                    permission: "120300",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/general-configuration/store" */ "@/views/system/general-configuration/store.vue"
                            ),
                        name: "system-general-configuration-store",
                        path: "/system/general-configuration/store",
                        meta: {
                            title: "店铺配置",
                            permission: "120370",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/general-configuration/product" */ "@/views/system/general-configuration/product.vue"
                            ),
                        name: "system-general-configuration-product",
                        path: "/system/general-configuration/product",
                        meta: {
                            title: "商品配置",
                            permission: "120310",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/general-configuration/order" */ "@/views/system/general-configuration/order.vue"
                            ),
                        name: "system-general-configuration-order",
                        path: "/system/general-configuration/order",
                        meta: {
                            title: "订单配置",
                            permission: "120340",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/agent-retail/index" */ "@/views/system/agent-retail/index.vue"
                            ),
                        name: "system-general-agent-retail",
                        path: "/system/agent-retail/index",
                        meta: {
                            title: "代理零售配置",
                        },
                    },
                ],
            },

            {
                component: LayoutParentMenu,
                name: "message-push",
                path: "/system/message-push/station-message-manage",
                meta: {
                    title: "消息推送",
                    permission: "120430",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/message-push/station-message-manage" */ "@/views/system/message-push/message-send/index.vue"
                            ),
                        name: "message-send",
                        path: "/system/message-push/message-send",
                        meta: {
                            title: "消息通知",
                            permission: "120450",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/message-push/station-message-manage" */ "@/views/system/message-push/station-message-manage/index.vue"
                            ),
                        name: "station-message-manage",
                        path: "/system/message-push/station-message-manage",
                        meta: {
                            title: "站内信管理",
                            permission: "120431",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/message-push/sms-message-manage" */ "@/views/system/message-push/sms-message-manage/index.vue"
                            ),
                        name: "sms-message-manage",
                        path: "/system/message-push/sms-message-manage",
                        meta: {
                            title: "短信消息管理",
                            permission: "120440",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/system/message-push/components/view-config" */ "@/views/system/message-push/components/view-config/index.vue"
                            ),
                        name: "view-config",
                        path: "/system/message-push/components/view-config",
                        meta: {
                            title: "短信消息管理",
                            hidden: true,
                            // permission: "120400"
                        },
                    },
                ],
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/system/store" */ "@/views/system/store/index.vue"),
                name: "system-store",
                path: "/system/store",
                meta: {
                    title: "门店设置",
                    permission: "120700",
                    roleType: [3],
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/system/login-log" */ "@/views/system/login-log/index.vue"),
                name: "system-login-log",
                path: "/system/login-log",
                meta: {
                    title: "登录日志",
                    permission: "120500",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/system/operate" */ "@/views/system/operate/index.vue"),
                name: "system-operate",
                path: "/system/operate",
                meta: {
                    title: "操作日志",
                    permission: "120600",
                },
            },
            // {
            //     component: () => import(/* webpackChunkName: "modules/system/log-message" */ '@/views/system/log-message/index.vue'),
            //     name: 'log-message',
            //     path: '/system/log-message',
            //     meta: {
            //         title: "短信物流配置",
            //         permission: '90601',
            //     },
            // },
            // {
            //     component: () => import(/* webpackChunkName: "modules/system/pay-control" */ '@/views/system/pay-control/index.vue'),
            //     name: 'pay-control',
            //     path: '/system/pay-control',
            //     meta: {
            //         title: "支付配置",
            //     },
            // },
            // {
            //     component: () => import(/* webpackChunkName: "modules/system" */ '@/views/system/log-storage/index.vue'),
            //     name: 'log-storage',
            //     path: '/system/log-storage',
            //     meta: {
            //         title: "仓储配置"
            //     },
            // },
            // {
            //     component: () => import(/* webpackChunkName: "modules/system" */ '@/views/system/sugar/index.vue'),
            //     name: 'sugar',
            //     path: '/system/sugar',
            //     meta: {
            //         title: "劳务配置"
            //     },
            // },
            // {
            //     component: () => import(/* webpackChunkName: "modules/system" */ '@/views/system/safety/index.vue'),
            //     name: 'safety',
            //     path: '/system/safety',
            //     meta: {
            //         title: "平安配置"
            //     },
            // },
        ],
    },
];

export default system;
