import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const store: any[] = [
    {
        component: LayoutParentMenu,
        name: "store",
        path: "/store",
        meta: {
            title: "店铺管理",
            icon: "ico-menu-store",
            // agentShowPage: true,
            permission: "60000",
        },
        children: [
            {
                component: () =>
                    import(/* webpackChunkName: "modules/store/hotword" */ "@/views/store/hotword/index.vue"),
                name: "hotword",
                path: "/store/hotword",
                meta: {
                    title: "热搜词",
                    permission: "60100",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/store/recommend" */ "@/views/store/recommend/index.vue"),
                name: "recommend",
                path: "/store/recommend",
                meta: {
                    title: "推荐商品",
                    permission: "60200",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/store/mallPage" */ "@/views/store/mall-page/index.vue"),
                name: "mallPage",
                path: "/store/mallPage",
                meta: {
                    title: "页面装修",
                    permission: "60400",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/store/tradeTemp" */ "@/views/store/trade-temp/index.vue"),
                name: "tradeTemp",
                path: "/store/tradeTemp",
                meta: {
                    title: "行业模板",
                    permission: "61101",
                },
            },
            {
                component: LayoutParentMenu,
                name: "store-config",
                path: "/store/config/suspension-window",
                meta: {
                    title: "功能页配置",
                    permission: "60300",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/suspension-window/index.vue"
                            ),
                        name: "suspension-window",
                        path: "/store/config/suspension-window",
                        meta: {
                            title: "悬浮窗",
                            permission: "60320",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/home-dialog/index.vue"
                            ),
                        name: "home-dialog",
                        path: "/store/config/home-dialog",
                        meta: {
                            title: "首页弹框装修",
                            permission: "60320",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/product-detail/index.vue"
                            ),
                        name: "product-detail_renovation",
                        path: "/store/config/product-detail_renovation",
                        meta: {
                            title: "商品详情装修",
                            permission: "60330",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/member/index.vue"
                            ),
                        name: "member",
                        path: "/store/config/member",
                        meta: {
                            title: "会员专区装修",
                            permission: "60340",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/user-center/index.vue"
                            ),
                        name: "user-center",
                        path: "/store/config/user-center",
                        meta: {
                            title: "个人中心装修",
                            permission: "60380",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/pay-succeed/index.vue"
                            ),
                        name: "pay-succeed",
                        path: "/store/config/pay-succeed",
                        meta: {
                            title: "支付完成页",
                            permission: "60395",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/initiation/index.vue"
                            ),
                        name: "initiation",
                        path: "/store/config/initiation",
                        meta: {
                            title: "入会礼装修",
                            hidden: true,
                        },
                    },

                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/product-share/index.vue"
                            ),
                        name: "product-share",
                        path: "/store/config/product-share",
                        meta: {
                            title: "商品分享装修",
                            permission: "60360",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/store/config" */ "@/views/store/config/store-user-center/index.vue"
                            ),
                        name: "store-user-center",
                        path: "/store/config/store-user-center",
                        meta: {
                            title: "门店个人中心",
                            permission: "60390",
                        },
                    },
                ],
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/store/smoke-deploy" */ "@/views/store/smoke-deploy/index.vue"),
                name: "smoke-deploy",
                path: "/store/smoke-deploy",
                meta: {
                    title: "产品介绍配置",
                    permission: "60390",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/store/select-model" */ "@/views/store/mall-page/select-model/select-model.vue"
                    ),
                name: "select-model",
                path: "/store/mallPage/select-model",
                meta: {
                    title: "选择模板",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/logistics/list" */ "@/views/store/logistics/express-manage/express-manage.vue"
                    ),
                name: "store-logistics-express-manage",
                path: "/store/logistics/express-manage",
                meta: {
                    title: "快递管理",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/logistics/list" */ "@/views/store/logistics/freight-model/freight-model.vue"
                    ),
                name: "store-logistics-freight-model",
                path: "/store/logistics/freight-model",
                meta: {
                    title: "运费模板",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/logistics/list" */ "@/views/store/logistics/same-city-delivery/same-city-delivery.vue"
                    ),
                name: "store-logistics-same-city-delivery",
                path: "/store/logistics/same-city-delivery",
                meta: {
                    title: "同城配送",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/logistics/list" */ "@/views/store/logistics/index.vue"),
                name: "store-logistics-parent",
                path: "/store/logistics/list",
                meta: {
                    title: "物流配送",
                    permission: "60500",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/pageLink/list" */ "@/views/store/page-link/index.vue"),
                name: "store-page-link",
                path: "/store/pageLink/list",
                meta: {
                    title: "页面链接",
                    permission: "61300",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/store/shop/list" */ "@/views/store/shop/index.vue"),
                name: "store-shop-list",
                path: "/store/shop/list",
                meta: {
                    title: "门店管理",
                    permission: "190700",
                },
            },
        ],
    },
];

export default store;
