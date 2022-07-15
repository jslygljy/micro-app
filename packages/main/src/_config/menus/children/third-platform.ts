import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const thirdPlatfore: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "third-platfore",
        path: "/third-platform",
        meta: {
            title: "三方平台",
            icon: "ico-menu-three",
            permission: "190000",
        },
        redirect: "/third-platform/statistics",
        children: [
            {
                name: "third-platform-statistics",
                path: "/third-platform/statistics",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/third-platform/statistics" */ "@/views/third-platform/statistics/index.vue"
                    ),
                meta: {
                    title: "统计面板",
                    permission: "190300",
                },
            },
            {
                component: LayoutParentMenu,
                name: "third-platform-order",
                path: "/third-platform/order",
                meta: {
                    title: "订单管理",
                    permission: "190200",
                },
                children: [
                    {
                        name: "third-platform-order-list",
                        path: "/third-platform/order/list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/order/list" */ "@/views/third-platform/order/index.vue"
                            ),
                        meta: {
                            title: "订单列表",
                            permission: "190200",
                        },
                    },
                    {
                        name: "third-platform-order-detail",
                        path: "/third-platform/order-detail",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/order/order-detail" */ "@/views/third-platform/order/order-detail/index.vue"
                            ),
                        meta: {
                            permission: "190201",
                            title: "订单详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "third-platform-integral-order",
                        path: "/third-platform/integral/order",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/integral-order/order" */ "@/views/third-platform/integral-order/logistics-order.vue"
                            ),
                        meta: {
                            title: "积分订单",
                            permission: "190800",
                        },
                    },
                    {
                        name: "third-platform-integral-details",
                        path: "/third-platform/integral/order-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/integral-order/order/details" */ "@/views/third-platform/integral-order/logistics-details/logistics-details.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            hidden: true,
                            permission: "190802",
                        },
                    },
                    {
                        name: "third-platform-integral-send",
                        path: "/third-platform/integral/order-send",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/integral-order/order/send" */ "@/views/third-platform/integral-order/order-send/order-send.vue"
                            ),
                        meta: {
                            title: "订单发货",
                            hidden: true,
                            permission: "190803",
                        },
                    },
                    {
                        name: "third-platform-integral-express-details",
                        path: "/third-platform/integral/express-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/integral-order/order/express-details" */ "@/views/third-platform/integral-order/express-details/express-details.vue"
                            ),
                        meta: {
                            title: "物流详情",
                            hidden: true,
                            permission: "190804",
                        },
                    },
                ],
            },
            // 正官庄v3.1新增
            {
                name: "third-platform-shipments-delivery-parent",
                path: "/third-platform/shipments/shipments-delivery",
                component: LayoutParentMenu,
                meta: {
                    title: "发货管理",
                    permission: "190900",
                },
                children: [
                    {
                        name: "third-platform-shipments-delivery",
                        path: "/third-platform/shipments/shipments-delivery",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/shipments/shipments-delivery" */ "@/views/third-platform/shipments/shipments-delivery/index.vue"
                            ),
                        meta: {
                            title: "批量发货",
                            permission: "190904",
                        },
                    },
                    {
                        name: "third-platform-shipments-recard",
                        path: "/third-platform/shipments/shipments-recard",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/shipments/shipments-recard" */ "@/views/third-platform/shipments/shipments-recard/index.vue"
                            ),
                        meta: {
                            title: "发货记录",
                            permission: "190902",
                        },
                    },
                ],
            },

            {
                component: LayoutParentMenu,
                name: "third-platform-member",
                path: "/third-platform/member",
                meta: {
                    permission: "190100",
                    title: "会员管理",
                },
                redirect: "/third-platform/member/list",
                children: [
                    {
                        name: "third-platform-member-list",
                        path: "/third-platform/member/list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/member" */ "@/views/third-platform/member/index.vue"
                            ),
                        meta: {
                            title: "会员列表",
                            permission: "190101",
                        },
                    },
                    {
                        name: "third-platform-member-detail",
                        path: "/third-platform/member/detail",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/member" */ "@/views/third-platform/member/member-detail.vue"
                            ),
                        meta: {
                            title: "会员详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "third-platform-level-management-setting",
                        path: "/third-platform/level-management/setting",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/member/level-management/setting" */ "@/views/third-platform/member/level-management/setting/index.vue"
                            ),
                        meta: {
                            permission: "190110",
                            title: "等级列表",
                        },
                    },
                    {
                        path: "/third-platform/level-management/handle",
                        name: "third-platform-level-management-handle",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/member/level-management/handle" */ "@/views/third-platform/member/level-management/handle/index.vue"
                            ),
                        meta: {
                            /* 新增，查看，编辑 */
                            permission: ["190111", "190112", "190113"],
                            title: "等级新建",
                            hidden: true,
                        },
                    },
                    {
                        path: "/third-platform/member/common-interests",
                        name: "third-platform-member-common-interests",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/member/common-interests" */ "@/views/third-platform/member/common-interests/index.vue"
                            ),
                        meta: {
                            permission: "190120",
                            title: "普通权益",
                        },
                    },
                    {
                        path: "/third-platform/member/updates-interests",
                        name: "third-platform-member-updates-interests",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/member/updates-interests" */
                                "@/views/third-platform/member/updates-interests/index.vue"
                            ),
                        meta: {
                            permission: "190130",
                            title: "升级权益",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "third-integra-management",
                path: "/third-platform/integra-management",
                meta: {
                    permission: "190500",
                    title: "积分配置",
                },
                redirect: "/third-platform/integra-management/integra-task",
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/integra-management/integra-task" */ "@/views/third-platform/integra-management/integra-task/index.vue"
                            ),
                        name: "third-integra-task",
                        path: "/third-platform/integra-management/integra-task",
                        meta: {
                            permission: "190510",
                            title: "积分任务",
                        },
                    },
                    {
                        path: "/third-platform/integra-management/integral-rule",
                        name: "third-integral-rule",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/third-platform/integra-management/integral-rule" */ "@/views/third-platform/integra-management/integral-rule/index.vue"
                            ),
                        meta: {
                            permission: "51200",
                            title: "积分规则",
                        },
                    },
                ],
            },
            {
                name: "third-member-day",
                path: "/third-platform/member-day",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/third-platform/member-day" */ "@/views/third-platform/member-day/index.vue"
                    ),
                meta: {
                    permission: "190601",
                    title: "会员日营销",
                },
            },
            {
                name: "third-member-day-add",
                path: "/third-platform/member-day-add",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/third-platform/member-day/member-day-add" */ "@/views/third-platform/member-day/member-day-add/index.vue"
                    ),
                meta: {
                    /* 新增，查看，编辑，审核 */
                    permission: ["190602", "190604", "190607", "1906010"],
                    title: "新增会员日营销",
                    hidden: true,
                },
            },
            {
                name: "third-download-center",
                path: "/third-platform/download-center",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/third-platform/member" */ "@/views/third-platform/download-center/index.vue"
                    ),
                meta: {
                    title: "下载中心",
                    permission: "190400",
                },
            },
        ],
    },
];
export default thirdPlatfore;
