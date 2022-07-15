import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const financial: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "financial",
        path: "/financial/statistics",
        meta: {
            title: "财务管理",
            icon: "ico-menu-financial",
            permission: "90000",
        },
        children: [
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/financial/statistics" */ "@/views/financial/financial-statistics/index.vue"
                    ),
                name: "financial-statistics",
                path: "/financial/statistics",
                meta: {
                    title: "财务统计",
                    permission: "90700",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/financial/my-account" */ "@/views/financial/my-account/index.vue"
                    ),
                name: "my-account-collection",
                path: "/financial/my-account-collection",
                meta: {
                    title: "我的账户",
                    permission: "90600",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/financial/my-account" */ "@/views/financial/my-account/my-bank/my-bank.vue"
                    ),
                name: "my-account-bank",
                path: "/financial/my-account-bank",
                meta: {
                    title: "我的银行卡",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/financial/flow" */ "@/views/financial/flow/index.vue"),
                name: "financial-flow",
                path: "/financial/flow",
                meta: {
                    title: "平台流水",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/financial/settlement-details" */ "@/views/financial/flow-details/index.vue"
                    ),
                name: "flow-details",
                path: "/financial/flow-details",
                meta: {
                    title: "流水明细",
                    permission: "90200",
                },
            },
            {
                component: LayoutParentMenu,
                name: "withdrew-check-index",
                path: "/financial/withdrew-check-index",
                redirect: "/financial/withdraw-check/pending-check",
                meta: {
                    title: "提现审核",
                    permission: "90300",
                    hidden: false,
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/financial/withdraw-check/pending-check" */ "@/views/financial/withdraw-check/pending-check.vue"
                            ),
                        name: "pending-check",
                        path: "/financial/withdraw-check/pending-check",
                        meta: {
                            title: "待审核",
                            permission: "90401",
                            hidden: false,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/financial/withdraw-check/pending-collect" */ "@/views/financial/withdraw-check/pending-collect.vue"
                            ),
                        name: "pending-collect",
                        path: "/financial/withdraw-check/pending-collect",
                        meta: {
                            title: "待汇总",
                            permission: "90405",
                            hidden: false,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/financial/withdraw-check/pending-pay" */ "@/views/financial/withdraw-check/pending-pay.vue"
                            ),
                        name: "pending-pay",
                        path: "/financial/withdraw-check/pending-pay",
                        meta: {
                            title: "待打款",
                            permission: "90407",
                            hidden: false,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/financial/withdraw-check/check-detail" */ "@/views/financial/withdraw-check/check-detail.vue"
                            ),
                        name: "check-detail",
                        path: "/financial/withdraw-check/check-detail",
                        meta: {
                            title: "审核详情",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/financial/settlement-details" */ "@/views/financial/settlement-details/index.vue"
                    ),
                name: "settlement-details",
                path: "/financial/settlement-details",
                meta: {
                    title: "提现明细",
                    permission: "90500",
                    hidden: false,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/financial/config" */ "@/views/financial/financial-config/config.vue"
                    ),
                name: "financial-config",
                path: "/financial/financialConfig",
                meta: {
                    title: "提现配置",
                    permission: "90300",
                    hidden: false,
                },
            },

            {
                component: LayoutParentMenu,
                name: "financial-retail",
                path: "/financial/retail-index",
                meta: {
                    title: "提现记录",
                    hidden: true,
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/financial/retail-index" */ "@/views/financial/withdraw/retail-index.vue"
                            ),
                        name: "financial-retail-index",
                        path: "/financial/retail-index",
                        meta: {
                            title: "零售提现记录",
                            hidden: false,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/financial/agen-index" */ "@/views/financial/withdraw/agen-index.vue"
                            ),
                        name: "financial-agen-index",
                        path: "/financial/agen-index",
                        meta: {
                            title: "代理提现记录",
                            hidden: false,
                        },
                    },
                ],
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/financial/pay" */ "@/views/financial/pay/index.vue"),
                name: "financial-pay",
                path: "/financial/pay",
                meta: {
                    title: "打款记录",
                    hidden: true,
                },
            },
        ],
    },
];
export default financial;
