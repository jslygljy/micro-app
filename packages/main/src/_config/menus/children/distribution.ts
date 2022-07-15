import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const Log = () => import(/* webpackChunkName: "modules/distribution/log" */ "@/views/distribution/log/index.vue");

const distribution: any[] = [
    {
        component: LayoutParentMenu,
        name: "distribution",
        path: "/distribution",
        meta: {
            title: "分销管理",
            icon: "ico-menu-distribution",
            permission: "100001",
        },
        children: [
            {
                component: LayoutParentMenu,
                name: "distribution-twitter-manage",
                path: "/distribution/twitter-manage/list",
                meta: {
                    title: "推客管理",
                    permission: "100002",
                },
                children: [
                    {
                        path: "/distribution/twitter-manage/list",
                        name: "distribution-twitter-manage-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/list" */ "@/views/distribution/twitter-manage/list/index.vue"
                            ),
                        meta: {
                            title: "推客列表",
                            permission: "100003",
                        },
                    },
                    {
                        path: "/distribution/twitter-manage/income",
                        name: "distribution-twitter-manage-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/income" */ "@/views/distribution/twitter-manage/income/index.vue"
                            ),
                        meta: {
                            title: "推客收益",
                            permission: "100007",
                        },
                    },
                    {
                        path: "/distribution/twitter-manage/setting",
                        name: "distribution-twitter-manage-setting",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/setting" */ "@/views/distribution/twitter-manage/setting/index.vue"
                            ),
                        meta: {
                            title: "推客配置",
                            permission: "100006",
                        },
                    },
                    {
                        path: "/distribution/twitter-manage/handle",
                        name: "distribution-twitter-manage-handle",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/handle" */ "@/views/distribution/twitter-manage/handle/index.vue"
                            ),
                        meta: {
                            title: "",
                            hidden: true,
                        },
                    },
                    {
                        path: "/distribution/twitter-manage/log",
                        name: "distribution-twitter-manage-log",
                        component: Log,
                        meta: {
                            title: "推客日志",
                            permission: "100008",
                        },
                    },
                ],
            },
            {
                path: "/distribution/twitter-manage/detail",
                name: "distribution-twitter-manage-detail",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/distribution/twitter-manage/detail" */ "@/views/distribution/twitter-manage/detail/index.vue"
                    ),
                meta: {
                    title: "推客详情",
                    hidden: true,
                },
                children: [
                    {
                        path: "/distribution/twitter-manage/detail",
                        name: "distribution-twitter-manage-detail-pages-subordinate",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/detail-pages/subordinate" */ "@/views/distribution/twitter-manage/detail-pages/subordinate.vue"
                            ),
                    },
                    {
                        path: "/distribution/twitter-manage/detail-pages/earnings",
                        name: "distribution-twitter-manage-detail-pages-earnings",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/detail-pages/earnings" */ "@/views/distribution/twitter-manage/detail-pages/earnings.vue"
                            ),
                    },
                    {
                        path: "/distribution/twitter-manage/detail-pages/list",
                        name: "distribution-twitter-manage-detail-pages-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/detail-pages/subordinate" */ "@/views/distribution/twitter-manage/detail-pages/list.vue"
                            ),
                    },
                    {
                        path: "/distribution/twitter-manage/detail-pages/flow",
                        name: "distribution-twitter-manage-detail-pages-flow",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/detail-pages/subordinate" */ "@/views/distribution/twitter-manage/detail-pages/flow.vue"
                            ),
                    },
                    {
                        path: "/distribution/twitter-manage/detail-pages/log",
                        name: "distribution-twitter-manage-detail-pages-log",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/twitter-manage/detail-pages/subordinate" */ "@/views/distribution/twitter-manage/detail-pages/log.vue"
                            ),
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "distribution-team-manage",
                path: "/distribution/team-manage/list",
                meta: {
                    title: "团队管理",
                    permission: "100402",
                },
                redirect: {name: "distribution-team-manage-list"},
                children: [
                    {
                        path: "/distribution/team-manage/list",
                        name: "distribution-team-manage-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/team-manage/list" */ "@/views/distribution/team-manage/list/index.vue"
                            ),
                        meta: {
                            title: "团队列表",
                            permission: "100403",
                        },
                    },
                    {
                        path: "/distribution/team-manage/setting",
                        name: "distribution-team-manage-setting",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/team-manage/setting" */ "@/views/distribution/team-manage/setting/index.vue"
                            ),
                        meta: {
                            title: "团队配置",
                        },
                    },
                    {
                        path: "/distribution/team-manage/income",
                        name: "distribution-team-manage-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/team-manage/income/index" */ "@/views/distribution/team-manage/income/index.vue"
                            ),
                        meta: {
                            title: "团队收益",
                            permission: "100409",
                        },
                    },
                    {
                        path: "/distribution/team-manage/log",
                        name: "distribution-team-manage-log",
                        component: Log,
                        meta: {
                            title: "操作日志",
                        },
                    },
                ],
            },
            {
                path: "/distribution/team-manage/detail",
                name: "distribution-team-manage-detail",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/distribution/team-manage/detail" */ "@/views/distribution/team-manage/detail/index.vue"
                    ),
                meta: {
                    title: "团队详情",
                    hidden: true,
                },
                children: [
                    {
                        path: "/distribution/team-manage/detail",
                        name: "distribution-team-manage-detail-pages-earnings",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/team-manage/detail-pages/earnings" */ "@/views/distribution/team-manage/detail-pages/earnings.vue"
                            ),
                    },
                    {
                        path: "/distribution/team-manage/detail-pages/personnel",
                        name: "distribution-team-manage-detail-pages-personnel",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/team-manage/detail-pages/personnel" */ "@/views/distribution/team-manage/detail-pages/personnel.vue"
                            ),
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "distribution-shareholder-partner",
                path: "/distribution/shareholder-partner/list",
                meta: {
                    title: "股东合伙人",
                    permission: "100105",
                },
                children: [
                    {
                        path: "/distribution/shareholder-partner/list",
                        name: "distribution-shareholder-partner-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/shareholder-partner/list" */ "@/views/distribution/shareholder-partner/list/index.vue"
                            ),
                        meta: {
                            title: "股东列表",
                            permission: "100105",
                        },
                    },
                    {
                        path: "/distribution/shareholder-partner/income",
                        name: "distribution-shareholder-partner-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/shareholder-partner/income" */ "@/views/distribution/shareholder-partner/income/index.vue"
                            ),
                        meta: {
                            title: "股东收益",
                            permission: "100108",
                        },
                    },
                    {
                        path: "/distribution/shareholder-partner/setting",
                        name: "distribution-shareholder-partner-setting",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/shareholder-partner/setting" */ "@/views/distribution/shareholder-partner/setting/index.vue"
                            ),
                        meta: {
                            title: "股东配置",
                        },
                    },
                    {
                        path: "/distribution/shareholder-partner/log",
                        name: "distribution-shareholder-partner-log",
                        component: Log,
                        meta: {
                            title: "操作日志",
                        },
                    },
                ],
            },
            {
                path: "/distribution/shareholder-partner/detail",
                name: "distribution-shareholder-partner-detail",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/distribution/shareholder-partner/detail" */ "@/views/distribution/shareholder-partner/detail/index.vue"
                    ),
                meta: {
                    title: "股东合伙人详情",
                    hidden: true,
                },
            },
            {
                path: "/distribution/shareholder-partner/detail-month",
                name: "distribution-shareholder-partner-detail-month",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/distribution/shareholder-partner/detail-month" */ "@/views/distribution/shareholder-partner/detail/detail-month.vue"
                    ),
                meta: {
                    title: "月结订单明细",
                    hidden: true,
                },
            },
            {
                component: LayoutParentMenu,
                name: "distribution-region-partner",
                path: "/distribution/region-partner/list",
                meta: {
                    title: "区域合伙人",
                    permission: "100198",
                },
                children: [
                    {
                        path: "/distribution/region-partner/list",
                        name: "distribution-region-partner-list",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/region-partner/index" */ "@/views/distribution/region-partner/list/index.vue"
                            ),
                        meta: {
                            title: "合伙人列表",
                            permission: "100109",
                        },
                    },
                    {
                        path: "/distribution/region-partner/detail",
                        name: "distribution-region-partner-detail",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/region-partner/detail" */ "@/views/distribution/region-partner/detail/index.vue"
                            ),
                        meta: {
                            title: "合伙人详情",
                            permission: "100109",
                            hidden: true,
                        },
                    },
                    {
                        path: "/distribution/region-partner/city-list",
                        name: "distribution-region-partner-list-city",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/region-partner/city-list" */ "@/views/distribution/region-partner/list/city-list.vue"
                            ),
                        meta: {
                            title: "市级页面",
                            permission: "100109",
                            hidden: true,
                        },
                    },
                    {
                        path: "/distribution/region-partner/area-list",
                        name: "distribution-region-partner-list-area",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/region-partner/area-list" */ "@/views/distribution/region-partner/list/area-list.vue"
                            ),
                        meta: {
                            title: "区级页面",
                            permission: "100109",
                            hidden: true,
                        },
                    },
                    {
                        path: "/distribution/region-partner/setting",
                        name: "distribution-region-partner-setting",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/region-partner/setting" */ "@/views/distribution/region-partner/setting/index.vue"
                            ),
                        meta: {
                            title: "合伙人配置",
                            permission: "100112",
                        },
                    },
                    {
                        path: "/distribution/region-partner/income",
                        name: "distribution-region-partner-income",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/distribution/region-partner/income" */ "@/views/distribution/region-partner/income/index.vue"
                            ),
                        meta: {
                            title: "合伙人收益",
                            permission: "100111",
                        },
                    },
                    {
                        path: "/distribution/region-partner/log",
                        name: "distribution-region-partner-log",
                        component: Log,
                        meta: {
                            title: "合伙人日志",
                        },
                    },
                ],
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/distribution/adjustment/list" */ "@/views/distribution/adjustment/list/index.vue"
                    ),
                name: "distribution-adjustment",
                path: "/distribution/adjustment/list",
                meta: {
                    title: "商品收益调整",
                },
            },
            {
                path: "/distribution/adjustment/log",
                name: "distribution-adjustment-log",
                component: Log,
                meta: {
                    title: "操作日志",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/distribution/distribution-first-order-award/list" */ "@/views/distribution/first-order-award/list/index.vue"
                    ),
                name: "distribution-first-order-award",
                path: "/distribution/first-order-award/list",
                meta: {
                    title: "推客首单激励",
                },
            },
        ],
    },
];

export default distribution;
