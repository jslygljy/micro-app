import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const market: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "market",
        path: "/market",
        meta: {
            title: "营销管理",
            icon: "ico-menu-market",
            permission: "80000",
        },
        children: [
            {
                component: () => import("@/views/overview/marketing/index.vue"),
                name: "market-overview",
                path: "/market/overview",
                meta: {
                    title: "营销概览",
                    roleType: [0, 1],
                },
            },
            {
                component: LayoutParentMenu,
                name: "coupon-parent",
                path: "/market/coupon",
                meta: {
                    title: "优惠券",
                    permission: "80100",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/coupon/index.vue"
                            ),
                        name: "coupon",
                        path: "/market/coupon",
                        meta: {
                            title: "优惠券列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () => import("@/views/market/coupon/store/index.vue"),
                        name: "coupon-store",
                        path: "/market/coupon/store",
                        meta: {
                            title: "适用门店",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/edit" */ "@/views/market/coupon/edit/edit.vue"
                            ),
                        name: "coupon-edit",
                        path: "/market/coupon/edit",
                        meta: {
                            title: "新增/编辑",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/setting" */ "@/views/market/coupon/setting/index.vue"
                            ),
                        name: "coupon-setting",
                        path: "/market/coupon/setting",
                        meta: {
                            title: "调整商品",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "sendcoupons-parent",
                path: "/market/sendcoupons",
                meta: {
                    title: "发券宝",
                    permission: "80200",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/sendcoupons/list" */ "@/views/market/sendcoupons/index.vue"
                            ),
                        name: "sendcoupons",
                        path: "/market/sendcoupons",
                        meta: {
                            title: "活动列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/sendcoupons/edit" */ "@/views/market/sendcoupons/edit/edit.vue"
                            ),
                        name: "sendcoupons-edit",
                        path: "/market/sendcoupons/edit",
                        meta: {
                            title: "新增/编辑劵活动",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "returncoupons-parent",
                path: "/market/returncoupons",
                meta: {
                    title: "满额返券",
                    permission: "80900",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/returncoupons/list" */ "@/views/market/retrun-coupons/index.vue"
                            ),
                        name: "returncoupons",
                        path: "/market/returncoupons",
                        meta: {
                            title: "满额返券活动列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/returncoupons/edit" */ "@/views/market/retrun-coupons/edit/edit.vue"
                            ),
                        name: "returncoupons-edit",
                        path: "/market/returncoupons/edit",
                        meta: {
                            title: "新增/编辑劵活动",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/returncoupons/setting" */ "@/views/market/retrun-coupons/setting/index.vue"
                            ),
                        name: "returncoupons-setting",
                        path: "/market/returncoupons/setting",
                        meta: {
                            title: "调整商品",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "limitbuy-parent",
                path: "/market/limitbuy",
                meta: {
                    title: "限时抢购",
                    permission: "80500",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/limitbuy/index" */ "@/views/market/limitbuy/index.vue"
                            ),
                        name: "limitbuy",
                        path: "/market/limitbuy",
                        meta: {
                            title: "抢购列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/limitbuy/edit" */ "@/views/market/limitbuy/edit/edit.vue"
                            ),
                        name: "limitbuy-edit",
                        path: "/market/limitbuy/edit",
                        meta: {
                            title: "新增/编辑商品",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "groupActivities-parent",
                path: "/market/groupActivities",
                meta: {
                    title: "多人拼团",
                    permission: "80400",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/groupActivities" */ "@/views/market/group-activities/index.vue"
                            ),
                        name: "groupActivities",
                        path: "/market/groupActivities",
                        meta: {
                            title: "拼团列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/groupActivities/edit" */ "@/views/market/group-activities/edit/edit.vue"
                            ),
                        name: "groupActivities-edit",
                        path: "/market/groupActivities/edit",
                        meta: {
                            title: "新增/编辑商品",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "new-parent",
                path: "/market/new",
                meta: {
                    title: "新人专享",
                    permission: "80600",
                },
                children: [
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/market/new/list" */ "@/views/market/new/index.vue"),
                        name: "new",
                        path: "/market/new",
                        meta: {
                            title: "专享列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/new/edit" */ "@/views/market/new/edit/edit.vue"
                            ),
                        name: "new-edit",
                        path: "/market/new/edit",
                        meta: {
                            title: "新增/编辑商品",
                            hidden: true,
                        },
                    },
                    {
                        name: "new-inventory",
                        path: "/market/new/inventory",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/new/inventory" */ "@/views/market/new/inventory/inventory.vue"
                            ),
                        meta: {
                            title: "调整库存",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "special-parent",
                path: "/market/special",
                meta: {
                    title: "营销专区",
                    permission: "80300",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/special/list" */ "@/views/market/special/index.vue"
                            ),
                        name: "special",
                        path: "/market/special",
                        meta: {
                            title: "专区列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/special/edit" */ "@/views/market/special/edit/edit.vue"
                            ),
                        name: "special-edit",
                        path: "/market/special/edit",
                        meta: {
                            title: "新增/编辑专区",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "members-first-single",
                path: "/market/members-first-single",
                meta: {
                    title: "会员首单激励",
                    permission: "80700",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/members-first-single/index" */ "@/views/market/members-first-single/index.vue"
                            ),
                        name: "_members-first-single",
                        path: "/market/members-first-single",
                        meta: {
                            title: "会员首单激励",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "superSpellGroup-parent",
                path: "/market/superSpellGroup",
                meta: {
                    title: "超级拼团",
                    permission: "80800",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/super-spell-group" */ "@/views/market/super-spell-group/index.vue"
                            ),
                        name: "superSpellGroup",
                        path: "/market/superSpellGroup",
                        meta: {
                            title: "拼团列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/super-spell-group/edit" */ "@/views/market/super-spell-group/edits/edit.vue"
                            ),
                        name: "superSpellGroup-edits",
                        path: "/market/superSpellGroup/edits",
                        meta: {
                            title: "新增/编辑",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "integral-activities-prent",
                path: "/market/integral-activities/parent",
                redirect: "/market/integral-activities",
                meta: {
                    title: "积分活动",
                    permission: "81000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/integral-activities" */ "@/views/market/integral-activities/index.vue"
                            ),
                        name: "integral-activities",
                        path: "/market/integral-activities",
                        meta: {
                            title: "活动列表",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/integral-activities/detail" */ "@/views/market/integral-activities/activities.vue"
                            ),
                        name: "integral-activities-detail",
                        path: "/market/integral-activities/detail/:type/:id",
                        meta: {
                            title: "新增活动",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/integral-activities/data-statisical" */ "@/views/market/integral-activities/data-statisical.vue"
                            ),
                        name: "integral-activities-statisical",
                        path: "/market/integral-activities/data-statisical",
                        meta: {
                            title: "数据",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                name: "member-day",
                path: "/market/member-day",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/market/market/member-day" */ "@/views/market/member-day/index.vue"
                    ),
                meta: {
                    title: "会员日营销",
                },
            },
            {
                name: "member-day-add",
                path: "/market/member-day/member-day-add",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/market/market/member-day/member-day-add" */ "@/views/market/member-day/member-day-add/index.vue"
                    ),
                meta: {
                    title: "新增会员日营销",
                    hidden: true,
                },
            },
            {
                component: LayoutParentMenu,
                name: "bargain-parent",
                path: "/market/bargain",
                meta: {
                    title: "砍价",
                    permission: "83000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/bargain" */ "@/views/market/bargain/index.vue"
                            ),
                        name: "bargain",
                        path: "/market/bargain",
                        meta: {
                            title: "砍价列表",
                            hidden: true,
                            permission: "83000",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/bargain/edit" */ "@/views/market/bargain/edit/edit.vue"
                            ),
                        name: "bargain-edit",
                        path: "/market/bargain/edit",
                        meta: {
                            title: "新增/编辑商品",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "market-freebie",
                path: "/market/freebie",
                meta: {
                    title: "赠品",
                    permission: "82000",
                },
                redirect: "/market/freebie/index",
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/freebie/index" */ "@/views/market/freebie/online/index.vue"
                            ),
                        name: "coupon",
                        path: "/market/freebie/index",
                        meta: {
                            title: "赠品",
                            hidden: true,
                            permission: "82000",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modulesmarket/freebie/online/components/inventory" */ "@/views/market/freebie/online/amend-good/index.vue"
                            ),
                        name: "market-freebie-amend-good",
                        path: "/market/freebie/amend-good",
                        meta: {
                            title: "修改商品",
                            hidden: true,
                            permission: "82007",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/online/create/index.vue"
                            ),
                        name: "market-freebie-create",
                        path: "/market/freebie/create",
                        meta: {
                            title: "新建",
                            hidden: true,
                            permission: "82001",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/online/detail/index.vue"
                            ),
                        name: "market-freebie-detail",
                        path: "/market/freebie/detail",
                        meta: {
                            title: "查看",
                            hidden: true,
                            permission: "82003",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/online/edit/index.vue"
                            ),
                        name: "market-freebie-edit",
                        path: "/market/freebie/edit",
                        meta: {
                            title: "编辑",
                            hidden: true,
                            permission: "82002",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/online/examine/index.vue"
                            ),
                        name: "market-freebie-examine",
                        path: "/market/freebie/examine",
                        meta: {
                            title: "审核",
                            hidden: true,
                            permission: "82010",
                        },
                    },
                    // {
                    //     component: () =>
                    //         import(
                    //             /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/modify-goods/index.vue"
                    //         ),
                    //     name: "market-freebie-modify-goods",
                    //     path: "/market/freebie/modify-goods",
                    //     meta: {
                    //         title: "修改商品",
                    //         hidden: true,
                    //     },
                    // },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/freebie/online/exception-product" */ "@/views/market/freebie/online/exception-product/index.vue"
                            ),
                        name: "market-freebie-exception-product",
                        path: "/market/freebie/exception-product",
                        meta: {
                            title: "例外商品",
                            hidden: true,
                            permission: "82000",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/freebie/online/superimposed-goods" */ "@/views/market/freebie/online/superimposed-goods/index.vue"
                            ),
                        name: "market-freebie-superimposed-goods",
                        path: "/market/freebie/superimposed-goods",
                        meta: {
                            title: "叠加商品",
                            hidden: true,
                            permission: "82000",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "market-freebiezgz",
                path: "/market/freebiezgz",
                meta: {
                    title: "赠品",
                    permission: "82000",
                    hidden: true,
                },
                redirect: "/market/freebiezgz/index",
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/freebie/index" */ "@/views/market/freebie/zgz/index.vue"
                            ),
                        name: "coupon",
                        path: "/market/freebiezgz/index",
                        meta: {
                            title: "赠品",
                            hidden: true,
                            permission: "82000",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modulesmarket/freebie/zgz/components/inventory" */ "@/views/market/freebie/zgz/amend-good/index.vue"
                            ),
                        name: "market-freebiezgz-amend-good",
                        path: "/market/freebiezgz/amend-good",
                        meta: {
                            title: "修改商品",
                            hidden: true,
                            permission: "82007",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/zgz/create/index.vue"
                            ),
                        name: "market-freebiezgz-create",
                        path: "/market/freebiezgz/create",
                        meta: {
                            title: "新建",
                            hidden: true,
                            permission: "82001",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/zgz/detail/index.vue"
                            ),
                        name: "market-freebiezgz-detail",
                        path: "/market/freebiezgz/detail",
                        meta: {
                            title: "查看",
                            hidden: true,
                            permission: "82003",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/zgz/edit/index.vue"
                            ),
                        name: "market-freebiezgz-edit",
                        path: "/market/freebiezgz/edit",
                        meta: {
                            title: "编辑",
                            hidden: true,
                            permission: "82002",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/coupon/list" */ "@/views/market/freebie/zgz/examine/index.vue"
                            ),
                        name: "market-freebiezgz-examine",
                        path: "/market/freebiezgz/examine",
                        meta: {
                            title: "审核",
                            hidden: true,
                            permission: "82010",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "buy-more-discount",
                path: "/market/buy-more-discount",
                meta: {
                    title: "多买优惠",
                    permission: "84000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/buy-more-discount/index" */ "@/views/market/buy-more-discount/index.vue"
                            ),
                        name: "buy-more-discount-index",
                        path: "/market/buy-more-discount",
                        meta: {
                            title: "多买优惠",
                            hidden: true,
                            permission: "84004",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/buy-more-discount/add" */ "@/views/market/buy-more-discount/add.vue"
                            ),
                        name: "buy-more-discount-add",
                        path: "/market/buy-more-discount/add",
                        meta: {
                            title: "新建活动",
                            hidden: true,
                            permission: "84001",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/buy-more-discount/edit" */ "@/views/market/buy-more-discount/edit.vue"
                            ),
                        name: "buy-more-discount-edit",
                        path: "/market/buy-more-discount/edit/:id/:type",
                        meta: {
                            title: "编辑",
                            hidden: true,
                            permission: ["84002", "84003"],
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/buy-more-discount/edit-appoint-product" */ "@/views/market/buy-more-discount/edit-appoint-product.vue"
                            ),
                        name: "buy-more-discount-edit-appoint-product",
                        path: "/market/buy-more-discount/edit-appoint-product/:id",
                        meta: {
                            title: "修改商品",
                            hidden: true,
                            permission: "84006",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/buy-more-discount/edit-exception-product" */ "@/views/market/buy-more-discount/edit-exception-product.vue"
                            ),
                        name: "buy-more-discount-edit-exception-product",
                        path: "/market/buy-more-discount/edit-exception-product/:id",
                        meta: {
                            title: "例外商品配置",
                            hidden: true,
                            permission: "84009",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "discount-parent",
                path: "/market/discount",
                meta: {
                    title: "满减",
                    permission: "85000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/discount" */ "@/views/market/discount/index.vue"
                            ),
                        name: "discount",
                        path: "/market/discount",
                        meta: {
                            title: "满减活动列表",
                            hidden: true,
                            permission: "85003",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/discount/add" */ "@/views/market/discount/add.vue"
                            ),
                        name: "discount-add",
                        path: "/market/discount/add",
                        meta: {
                            title: "新增",
                            hidden: true,
                            permission: "85001",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/discount/edit" */ "@/views/market/discount/edit.vue"
                            ),
                        name: "discount-edit",
                        path: "/market/discount/edit/:id/:type",
                        meta: {
                            title: "编辑",
                            hidden: true,
                            permission: ["85002", "85004"],
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/discount/edit-appoint-product" */ "@/views/market/discount/edit-appoint-product.vue"
                            ),
                        name: "discount-edit-appoint-product",
                        path: "/market/discount/edit-appoint-product/:id",
                        meta: {
                            title: "修改商品",
                            hidden: true,
                            permission: "85012",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/discount/edit-exception-product" */ "@/views/market/discount/edit-exception-product.vue"
                            ),
                        name: "discount-edit-exception-product",
                        path: "/market/discount/edit-exception-product/:id",
                        meta: {
                            title: "例外商品配置",
                            hidden: true,
                            permission: "85013",
                        },
                    },
                ],
            },
            // 下单立减 Order reduction
            {
                component: LayoutParentMenu,
                name: "order-reduction-parent",
                path: "/market/order-reduction",
                meta: {
                    title: "下单立减",
                    permission: "86000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/order-reduction" */ "@/views/market/order-reduction/index.vue"
                            ),
                        name: "order-reduction",
                        path: "/market/order-reduction",
                        meta: {
                            title: "下单立减列表",
                            hidden: true,
                            permission: "86005",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/order-reduction/add" */ "@/views/market/order-reduction/add.vue"
                            ),
                        name: "order-reduction-add",
                        path: "/market/order-reduction/add",
                        meta: {
                            title: "新增",
                            hidden: true,
                            permission: "86001",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/market/order-reduction/edit" */ "@/views/market/order-reduction/edit.vue"
                            ),
                        name: "order-reduction-edit",
                        path: "/market/order-reduction/edit/:id/:type",
                        meta: {
                            title: "编辑",
                            hidden: true,
                            permission: ["86001", "86003"],
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/market/order-reduction/edit-appoint-product" */ "@/views/market/order-reduction/edit-appoint-product.vue"
                            ),
                        name: "order-reduction-edit-appoint-product",
                        path: "/market/order-reduction/edit-appoint-product/:id",
                        meta: {
                            title: "修改商品",
                            hidden: true,
                            permission: "86011",
                        },
                    },
                ],
            },
        ],
    },
];

export default market;
