import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";
import store from "@/store";

const member: any[] = [
    {
        component: LayoutParentMenu,
        name: "member",
        path: "/member",
        meta: {
            title: "会员管理",
            icon: "ico-menu-member",
            permission: "50000",
        },
        children: [
            {
                component: () =>
                    import(/* webpackChunkName: "modules/overview/vip/index" */ "@/views/overview/vip/index.vue"),
                name: "member-overview",
                path: "/member/overview",
                meta: {
                    title: "会员概览",
                    permission: "50100",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/member/member-management/index" */ "@/views/member/member-management/index.vue"
                    ),
                name: "member-management",
                path: "/member/member-management",
                meta: {
                    title: "会员列表",
                    permission: "50200",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/member/member-management/detail" */ "@/views/member/member-management/detail.vue"
                    ),
                name: "member-management-detail",
                path: "/member/member-management/detail",
                meta: {
                    title: "会员详情",
                    hidden: true,
                },
            },
            {
                path: "/member/level-management/setting",
                name: "member-level-management-setting",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/member/level-management/setting" */ "@/views/member/level-management/setting/index.vue"
                    ),
                meta: {
                    title: "等级列表",
                    hidden: false,
                    permission: "50500",
                },
            },
            {
                path: "/member/level-management/handle",
                name: "member-level-management-handle",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/member/level-management/handle" */ "@/views/member/level-management/handle/index.vue"
                    ),
                meta: {
                    title: "等级新建",
                    hidden: true,
                },
            },
            {
                name: "level-management-attract-investment",
                path: "/member/level-management/attract-investment",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/member/level-management/attract-investment" */

                        "@/views/member/level-management/attract-investment/index.vue"
                    ),
                meta: {
                    title: "招商专区",
                    hidden: true,
                },
            },
            {
                component: LayoutParentMenu,
                name: "revenue-management",
                path: "/member/revenue-management/retail-revenue",
                meta: {
                    title: "收益管理",
                    hidden: false,
                    permission: "50600",
                },
                children: [
                    {
                        path: "/member/revenue-management/retail-revenue",
                        name: "member-revenue-management-retail-revenue",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/revenue-management" */ "@/views/member/revenue-management/retail-revenue/index.vue"
                            ),
                        meta: {
                            title: "零售收益",
                            hidden: false,
                            permission: "50610",
                        },
                    },
                    {
                        path: "/member/revenue-management/investment-income",
                        name: "member-revenue-management-investment-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/investment-income" */ "@/views/member/revenue-management/investment-income/index.vue"
                            ),
                        meta: {
                            title: "招商收益",
                            permission: "50620",
                            hidden: false,
                        },
                    },
                    {
                        path: "/member/revenue-management/team-income",
                        name: "member-revenue-management-team-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/team-income" */ "@/views/member/revenue-management/team-income/index.vue"
                            ),
                        meta: {
                            title: "团队收益",
                            permission: "50630",
                            hidden: false,
                        },
                    },
                    {
                        path: "/member/revenue-management/cultivation-income",
                        name: "member-revenue-management-cultivation-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/cultivation-income" */ "@/views/member/revenue-management/cultivation-income/index.vue"
                            ),
                        meta: {
                            title: "培养收益",
                            permission: "50640",
                            hidden: false,
                        },
                    },
                    {
                        path: "/member/revenue-management/tutoring-income",
                        name: "member-revenue-management-tutoring-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/revenue-management" */ "@/views/member/revenue-management/tutoring-income/index.vue"
                            ),
                        meta: {
                            title: "辅导收益",
                            permission: "50650",
                            hidden: false,
                        },
                    },
                    {
                        path: "/member/revenue-management/income-config",
                        name: "member-revenue-income-config",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/income-config" */ "@/views/member/revenue-management/income-config/index.vue"
                            ),
                        meta: {
                            title: "收益配置",
                            permission: "50660",
                            hidden: false,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "rights-configuration",
                path: "/member/rights-configuration/common-interests",
                meta: {
                    title: "权益配置",
                    hidden: false,
                    permission: "50700",
                },
                children: [
                    {
                        path: "/member/rights-configuration/common-interests",
                        name: "member-rights-configuration-common-interests",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/revenue-management" */ "@/views/member/rights-configuration/common-interests/index.vue"
                            ),
                        meta: {
                            title: "普通权益",
                            hidden: false,
                            permission: "50710",
                        },
                    },
                    {
                        path: "/member/rights-configuration/updates-interests",
                        name: "member-rights-configuration-updates-interests",
                        component: () => import("@/views/member/rights-configuration/updates-interests/index.vue"),
                        meta: {
                            title: "升级权益",
                            hidden: false,
                            permission: "50720",
                        },
                    },
                    {
                        path: "/member/rights-configuration/service-interests",
                        name: "member-rights-configuration-service-interests",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/rights-configuration/service-interests" */ "@/views/member/rights-configuration/service-interests/index.vue"
                            ),
                        meta: {
                            title: "服务权益",
                            hidden: false,
                            permission: "50730",
                        },
                    },
                ],
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/member/integra-task" */ "@/views/member/integra-task/index.vue"
                    ),
                name: "integra-task",
                path: "/member/integra-task",
                meta: {
                    title: "积分任务",
                    hidden: false,
                    permission: "50800",
                },
            },
            {
                component: LayoutParentMenu,
                name: "member-region-partner",
                path: "/member/region-partner/list",
                meta: {
                    title: "区域合伙人",
                    hidden: false,
                    permission: "50400",
                    agentUrlShowPage: true,
                },
                children: [
                    {
                        path: "/member/region-partner/list",
                        name: "member-region-partner-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/region-partner/list" */ "@/views/member/region-partner/list/index.vue"
                            ),
                        meta: {
                            title: "区域列表",
                            hidden: false,
                            permission: "50410",
                        },
                    },
                    {
                        path: "/member/region-partner/detail",
                        name: "member-region-partner-detail",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/region-partner/detail" */ "@/views/member/region-partner/detail/index.vue"
                            ),
                        meta: {
                            title: "区域合伙人详情",
                            hidden: true,
                        },
                    },
                    {
                        path: "/member/region-partner/list/city-list",
                        name: "member-region-partner-city-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/region-partner/list/city-list" */ "@/views/member/region-partner/list/city-list.vue"
                            ),
                        meta: {
                            title: "编辑市级区域",
                            hidden: true,
                        },
                    },
                    {
                        path: "/member/region-partner/list/area-list",
                        name: "member-region-partner-area-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/region-partner/list/area-list" */ "@/views/member/region-partner/list/area-list.vue"
                            ),
                        meta: {
                            title: "编辑区级区域",
                            hidden: true,
                        },
                    },
                    {
                        path: "/member/region-partner/setting",
                        name: "member-region-partner-setting",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/region-partner/setting" */ "@/views/member/region-partner/setting/index.vue"
                            ),
                        meta: {
                            title: "区域配置",
                            hidden: false,
                            permission: "50420",
                        },
                    },
                    {
                        path: "/member/region-partner/income",
                        name: "member-region-partner-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/region-partner/income" */ "@/views/member/region-partner/income/index.vue"
                            ),
                        meta: {
                            title: "区域收益",
                            hidden: false,
                            permission: "50430",
                        },
                    },
                    {
                        path: "/member/region-partner/log",
                        name: "member-region-partner-log",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/region-partner/log" */ "@/views/member/region-partner/log/index.vue"
                            ),
                        meta: {
                            title: "区域日志",
                            hidden: false,
                            permission: "50440",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "member-shareholder-partner",
                path: "/member/shareholder-partner/list",
                meta: {
                    title: "股东合伙人",
                    permission: "50300",
                    agentUrlShowPage: true,
                },
                children: [
                    {
                        path: "/member/shareholder-partner/list",
                        name: "member-shareholder-partner-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/shareholder-partner/list" */ "@/views/member/shareholder-partner/list/index.vue"
                            ),
                        meta: {
                            title: "股东列表",
                            permission: "50310",
                        },
                    },
                    {
                        path: "/member/shareholder-partner/detail",
                        name: "member-shareholder-partner-detail",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/shareholder-partner/detail" */ "@/views/member/shareholder-partner/detail/index.vue"
                            ),
                        meta: {
                            title: "股东合伙人详情",
                            hidden: true,
                        },
                    },
                    {
                        path: "/member/shareholder-partner/detail-month",
                        name: "member-shareholder-partner-detail-month",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/shareholder-partner/detail-month" */ "@/views/member/shareholder-partner/detail/detail-month.vue"
                            ),
                        meta: {
                            title: "月结订单明细",
                            hidden: true,
                        },
                    },
                    {
                        path: "/member/shareholder-partner/setting",
                        name: "member-shareholder-partner-setting",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/shareholder-partner/setting" */ "@/views/member/shareholder-partner/setting/index.vue"
                            ),
                        meta: {
                            title: "股东配置",
                            permission: "50320",
                        },
                    },
                    {
                        path: "/member/shareholder-partner/income",
                        name: "member-shareholder-partner-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/shareholder-partner/income" */ "@/views/member/shareholder-partner/income/index.vue"
                            ),
                        meta: {
                            title: "股东收益",
                            permission: "50330",
                        },
                    },
                    {
                        path: "/member/shareholder-partner/partner-log",
                        name: "member-shareholder-partner-log",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/shareholder-partner/partner-log" */ "@/views/member/shareholder-partner/partner-log/index.vue"
                            ),
                        meta: {
                            title: "股东日志",
                            permission: "50340",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "member-revenue-flow",
                path: "/member/revenue-flow/order",
                meta: {
                    title: "收益流水",
                    permission: "50900",
                    // agentUrlShowPage: true
                },
                children: [
                    {
                        path: "/member/revenue-flow/order",
                        name: "/member-revenue-flow-order",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/revenue-flow/order" */ "@/views/member/revenue-flow/order/order.vue"
                            ),
                        meta: {
                            title: "订单收益",
                            permission: "50910",
                        },
                    },
                    {
                        path: "/member/revenue-flow/monthly",
                        name: "/member-revenue-flow-monthly",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/revenue-flow/monthly" */ "@/views/member/revenue-flow/monthly/monthly.vue"
                            ),
                        meta: {
                            title: "月结收益",
                            permission: "50920",
                        },
                    },
                    {
                        path: "/member/revenue-flow/culture",
                        name: "/member-revenue-flow-culture",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/member/revenue-flow/culture" */ "@/views/member/revenue-flow/culture/culture.vue"
                            ),
                        meta: {
                            title: "培养收益",
                            permission: "50930",
                        },
                    },
                ],
            },
            // {
            //     path: "/member/integral-rule",
            //     name: "member-integral-rule",
            //     component: () =>
            //         import(
            //             /* webpackChunkName: "modules/member/region-partner/setting" */ "@/views/member/integral-rule/index.vue"
            //         ),
            //     meta: {
            //         title: "积分规则",
            //         hidden: false,
            //         permission: "51200"
            //     }
            // },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/member/settle-account" */ "@/views/member/settle-account/index.vue"
                    ),
                name: "settle-account",
                path: "/member/settle-account",
                meta: {
                    title: "结算配置",
                    permission: "51100",
                },
            },
        ],
    },
];

export default member;
