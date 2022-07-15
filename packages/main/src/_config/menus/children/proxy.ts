import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";
// import { component } from "vue/types/umd";

const proxy: any[] = [
    {
        component: LayoutParentMenu,
        name: "proxy",
        path: "/proxy",
        meta: {
            title: "代理管理",
            icon: "ico-menu-proxy",
            permission: "130000",
            agentShowPage: true,
        },
        children: [
            {
                component: () =>
                    import(/* webpackChunkName: "modules/proxy/tour/index" */ "@/views/proxy/tour/index.vue"),
                name: "proxy-tour",
                path: "/proxy/tour",
                meta: {
                    title: "代理引导",
                    // role: 0
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/proxy/brand/index" */ "@/views/proxy/brand/index.vue"),
                name: "proxy-brand",
                path: "/proxy/brand",
                meta: {
                    title: "代理品牌",
                    permission: "132101",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/proxy/brand/index" */ "@/views/proxy/retail-profit-set/index.vue"
                    ),
                name: "retail-profit-set",
                path: "/proxy/retail-profit-set",
                meta: {
                    title: "零售收益设置",
                    permission: "139800",
                },
            },
            {
                component: LayoutParentMenu,
                name: "proxy-product",
                path: "/proxy/product/list",
                meta: {
                    title: "代理商品",
                    permission: "133001",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/product/list/index/index" */ "@/views/proxy/product/list/index/index.vue"
                            ),
                        name: "proxy-product-list",
                        path: "/proxy/product/list",
                        meta: {
                            title: "代理商品",
                            permission: "133001",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy-category/index" */ "@/views/proxy/proxy-category/index.vue"
                            ),
                        name: "proxy-proxy-category",
                        path: "/proxy/proxy-category",
                        meta: {
                            title: "代理类目",
                            permission: "134001",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/change-product/index" */ "@/views/proxy/change-product/index.vue"
                            ),
                        name: "proxy-change-product",
                        path: "/proxy/change-product",
                        meta: {
                            title: "调整代理商品",
                            permission: "135001",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "proxy-inventory",
                path: "/proxy/proxy-inventory/cloud-inventory",
                meta: {
                    title: "代理库存",
                    permission: "136000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/proxy-inventory/cloud-inventory/index" */ "@/views/proxy/proxy-inventory/cloud-inventory/index.vue"
                            ),
                        name: "cloud-inventory",
                        path: "/proxy/proxy-inventory/cloud-inventory",
                        meta: {
                            title: "云库存",
                            permission: "136101",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/proxy-inventory/cloud-inventory/index" */ "@/views/proxy/proxy-inventory/cloud-inventory/proxy-search/index.vue"
                            ),
                        name: "cloud-proxy-search",
                        path: "/proxy/proxy-inventory/cloud-inventory/proxy-search",
                        meta: {
                            title: "代理商查询",
                            hidden: true,
                            // permission: "136102"
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/proxy-inventory/cloud-inventory/index" */ "@/views/proxy/proxy-inventory/cloud-inventory/agent-inventory/index.vue"
                            ),
                        name: "agent-inventory",
                        path: "/proxy/proxy-inventory/agent-inventory",
                        meta: {
                            title: "代理库存预警",
                            permission: "136204",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/proxy-inventory/cloud-inventory/index" */ "@/views/proxy/proxy-inventory/cloud-inventory/agent-inventory/components/Inventory-details.vue"
                            ),
                        name: "Inventory-details",
                        path: "/proxy/proxy-inventory/Inventory-details",
                        meta: {
                            title: "库存详情",
                            hidden: true,
                            permission: "136204",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/proxy-inventory/cloud-inventory/index" */ "@/views/proxy/proxy-inventory/cloud-inventory/change-record/index.vue"
                            ),
                        name: "cloud-change-record",
                        path: "/proxy/proxy-inventory/cloud-inventory/change-record",
                        meta: {
                            title: "变更记录",
                            hidden: true,
                            // permission: "136104"
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/proxy-inventory/proxy-merchants-inventory/index" */ "@/views/proxy/proxy-inventory/proxy-merchants-inventory/index.vue"
                            ),
                        name: "proxy-merchants-inventory",
                        path: "/proxy/proxy-inventory/proxy-merchants-inventory",
                        meta: {
                            title: "代理商库存",
                            permission: "136200",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/proxy-inventory/proxy-merchants-inventory/index" */ "@/views/proxy/proxy-inventory/proxy-merchants-inventory/change-record/index.vue"
                            ),
                        name: "proxy-merchants-inventory-record",
                        path: "/proxy/proxy-inventory/proxy-merchants-inventory/change-record",
                        meta: {
                            title: "变更记录",
                            hidden: true,
                            // permission: "136203"
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/proxy-inventory/proxy-merchants-inventory/index" */ "@/views/proxy/proxy-inventory/proxy-merchants-inventory/inventory-detail/index.vue"
                            ),
                        name: "proxy-merchants-inventory-detial",
                        path: "/proxy/proxy-inventory/proxy-merchants-inventory/inventory-detail",
                        meta: {
                            title: "库存详情",
                            hidden: true,
                            // permission: "136202"
                        },
                    },
                ],
            },
            {
                name: "proxy-order-default",
                path: "/proxy/order/stock",
                component: LayoutParentMenu,
                meta: {
                    title: "代理订单",
                    // role: 0,
                    permission: "131000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/stock-index" */ "@/views/proxy/order/stock-index.vue"
                            ),
                        name: "proxy-order-stock",
                        path: "/proxy/order/stock",
                        meta: {
                            title: "采购订单",
                            permission: "131101",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/index" */ "@/views/proxy/order/take-index.vue"
                            ),
                        name: "proxy-order-take",
                        path: "/proxy/order/take",
                        meta: {
                            title: "提货订单",
                            permission: "131201",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/index" */ "@/views/proxy/order/change-index.vue"
                            ),
                        name: "proxy-order-change",
                        path: "/proxy/order/change",
                        meta: {
                            title: "换货订单",
                            permission: "131301",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/index" */ "@/views/proxy/order/business-index.vue"
                            ),
                        name: "proxy-order-business",
                        path: "/proxy/order/business",
                        meta: {
                            title: "招商订单",
                            permission: "131401",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/index" */ "@/views/proxy/order/retail-index.vue"
                            ),
                        name: "proxy-order-retail",
                        path: "/proxy/order/retail",
                        meta: {
                            title: "零售订单",
                            permission: "131700",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/retail/order-send" */ "@/views/proxy/order/retail-order-send.vue"
                            ),
                        name: "retail-order-send",
                        path: "/proxy/order/retail/order-send",
                        meta: {
                            title: "订单发货",
                            hidden: true,
                        },
                    },
                    {
                        name: "retail-sales-after-detail",
                        path: "/proxy/order/retail-sales-after-detail",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/sale-after/sale-after-details" */ "@/views/proxy/order/retail-sales-after-detail/retail-sales-after-detail.vue"
                            ),
                        meta: {
                            title: "售后详情",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/index" */ "@/views/proxy/order/retail-sales-after.vue"
                            ),
                        name: "retail-sales-after",
                        path: "/proxy/order/retail-sales-after",
                        meta: {
                            title: "零售售后",
                            permission: "131800",
                        },
                    },
                    {
                        name: "proxy-order-set",
                        path: "/proxy/order/set",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/set" */ "@/views/proxy/order/set/index.vue"
                            ),
                        meta: {
                            title: "订单设置",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/history" */ "@/views/proxy/order/history/index.vue"
                            ),
                        name: "proxy-order-history",
                        path: "/proxy/order/history",
                        meta: {
                            title: "订单记录",
                            permission: "131501",
                        },
                    },
                    {
                        name: "proxy-logistics-details",
                        path: "/proxy/order/logistics-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/order/logistics-details" */ "@/views/proxy/order/detail/logistics-details.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "proxy-self-takeup-details",
                        path: "/proxy/order/self-takeup-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/self-takeup-details" */ "@/views/proxy/order/detail/self-takeup-details.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "proxy-cloud-stock-details",
                        path: "/proxy/order/cloud-stock-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/cloud-stock-details" */ "@/views/proxy/order/detail/cloud-stock-details.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "proxy-express-details",
                        path: "/proxy/order/logistics-order/express-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/express-details" */ "@/views/proxy/order/express-details/express-details.vue"
                            ),
                        meta: {
                            title: "物流详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "retail-express-details",
                        path: "/proxy/order/retail-sales-after-detail/express-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/express-details" */ "@/views/proxy/order/retail-sales-after-detail/express-details/express-details.vue"
                            ),
                        meta: {
                            title: "物流详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "proxy-retail-details",
                        path: "/proxy/order/retail-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/retail-details" */ "@/views/proxy/order/detail/retail-details.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            desc: "代理订单详情",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "proxy-agent-list",
                path: "/proxy/agent",
                redirect: "/proxy/agent/agent-list",
                meta: {
                    title: "代理商",
                    permission: "137000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/agent/agent/index" */ "@/views/proxy/agent/agent/index.vue"
                            ),
                        name: "proxy-agent-agent-index",
                        path: "/proxy/agent/agent-list",
                        meta: {
                            title: "代理商列表",
                            permission: "137100",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/agent/agent/detail" */ "@/views/proxy/agent/agent/detail.vue"
                            ),
                        name: "proxy-agent-agent-detail",
                        path: "/proxy/agent/agent-list/:id",
                        meta: {
                            title: "代理商详情",
                            hidden: true,
                            // permission: "137101"
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/agent/level/index" */ "@/views/proxy/agent/level/index.vue"
                            ),
                        name: "proxy-agent-level-index",
                        path: "/proxy/agent/level",
                        meta: {
                            title: "等级列表",
                            permission: "137201",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/agent/level/edit" */ "@/views/proxy/agent/level/edit.vue"
                            ),
                        name: "proxy-agent-level-edit",
                        path: "/proxy/agent/level/:type/:id",
                        meta: {
                            title: "等级新建",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/agent/join-review/index" */ "@/views/proxy/agent/join-review/index.vue"
                            ),
                        name: "proxy-agent-join-review-index",
                        path: "/proxy/agent/join-review",
                        meta: {
                            title: "加入审核",
                            permission: "137301",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/agent/join-review/proxy-invite-set" */ "@/views/proxy/agent/join-review/proxy-invite-set.vue"
                            ),
                        name: "proxy-invite-set",
                        path: "/proxy/agent/join-review/proxy-invite-set",
                        meta: {
                            title: "代理邀请设置",
                            hidden: true,
                            // permission: "137303"
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/agent/join-review/invite-agent" */ "@/views/proxy/agent/join-review/invite-agent.vue"
                            ),
                        name: "proxy-invite-agent",
                        path: "/proxy/agent/join-review/invite-agent",
                        meta: {
                            title: "邀请代理商",
                            hidden: true,
                            // permission: "137305"
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/agent/upgrade-review/index" */ "@/views/proxy/agent/upgrade-review/index.vue"
                            ),
                        name: "proxy-upgrade-review",
                        path: "/proxy/agent/upgrade-review",
                        meta: {
                            title: "升级审核",
                            permission: "137401",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "proxy-profit-index",
                path: "/proxy/profit-index",
                meta: {
                    title: "区域服务商",
                    permission: "138000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/service-list" */ "@/views/proxy/service-list/list.vue"
                            ),
                        name: "proxy-service-list",
                        path: "/proxy/service-list",
                        meta: {
                            title: "服务商列表",
                            permission: "138100",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/service-detail" */ "@/views/proxy/service-list/detail.vue"
                            ),
                        name: "proxy-service-detail",
                        path: "/proxy/service-detail",
                        meta: {
                            title: "服务商详情",
                            hidden: true,
                            // permission: "138102"
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/service-list/profit-index" */ "@/views/proxy/service-list/profit-index.vue"
                            ),
                        name: "proxy-service-profit-index",
                        path: "/proxy/service-profit-index",
                        meta: {
                            title: "收益结算",
                            permission: "138300",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/service-list/service-set" */ "@/views/proxy/service-list/service-set.vue"
                            ),
                        name: "proxy-service-set",
                        path: "/proxy/service-set",
                        meta: {
                            title: "服务商设置",
                            permission: "138400",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "proxy-excitation",
                path: "/proxy/excitation",
                redirect: "/proxy/excitation/settlement",
                meta: {
                    title: "激励管理",
                    permission: "139000",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/settlement/index" */ "@/views/proxy/excitation/settlement/index.vue"
                            ),
                        name: "excitation-settlement",
                        path: "/proxy/excitation/settlement",
                        meta: {
                            title: "激励结算",
                            permission: "139100",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/replenishment/index" */ "@/views/proxy/excitation/replenishment/index.vue"
                            ),
                        name: "excitation-replenishment",
                        path: "/proxy/excitation/replenishment",
                        meta: {
                            title: "同级补货激励",
                            permission: "139200",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/same-level/index" */ "@/views/proxy/excitation/same-level/index.vue"
                            ),
                        name: "excitation-same-level",
                        path: "/proxy/excitation/same-level",
                        meta: {
                            title: "同级推荐激励",
                            permission: "139300",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/leapfrog/index" */ "@/views/proxy/excitation/leapfrog/index.vue"
                            ),
                        name: "excitation-leapfrog",
                        path: "/proxy/excitation/leapfrog",
                        meta: {
                            title: "越级推荐奖励",
                            permission: "139400",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/team/index" */ "@/views/proxy/excitation/team/index.vue"
                            ),
                        name: "excitation-team",
                        path: "/proxy/excitation/team",
                        meta: {
                            title: "团队激励",
                            permission: "139501",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/team/add" */ "@/views/proxy/excitation/team/add.vue"
                            ),
                        name: "excitation-team-add",
                        path: "/proxy/excitation/team/:brandId",
                        meta: {
                            title: "添加任务",
                            // permission: "139502",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/team/detail" */ "@/views/proxy/excitation/team/detail.vue"
                            ),
                        name: "excitation-team-detail",
                        path: "/proxy/excitation/team/detail/:id",
                        meta: {
                            title: "任务详情",
                            // permission: "139503",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/top-team-award/index" */ "@/views/proxy/excitation/top-team-award/index.vue"
                            ),
                        name: "excitation-top-team-award",
                        path: "/proxy/excitation/top-team-award",
                        meta: {
                            title: "顶级团队奖励",
                            permission: "139600",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/performance-settlement/index" */ "@/views/proxy/excitation/performance-settlement/index.vue"
                            ),
                        name: "excitation-performance-settlement",
                        path: "/proxy/excitation/performance-settlement",
                        meta: {
                            title: "顶级团队结算",
                            permission: "139700",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/performance-settlement/summary" */ "@/views/proxy/excitation/performance-settlement/summary.vue"
                            ),
                        name: "excitation-performance-settlement-summary",
                        path: "/proxy/excitation/performance-settlement/summary",
                        meta: {
                            title: "查看汇总",
                            permission: "139702",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/excitation/performance-settlement/detail" */ "@/views/proxy/excitation/performance-settlement/detail.vue"
                            ),
                        name: "excitation-performance-settlement-detail",
                        path: "/proxy/excitation/performance-settlement/detail",
                        meta: {
                            title: "结算明细",
                            permission: "139703",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "proxy-finance-flow",
                path: "/proxy/finance/flow",
                meta: {
                    title: "财务中心",
                    permission: "139900",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/finance/flow" */ "@/views/proxy/finance/flow.vue"
                            ),
                        name: "proxy-finance-flow-c",
                        path: "/proxy/finance/flow",
                        meta: {
                            title: "总部流水",
                            permission: "139910",
                        },
                    },
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/proxy/finance/log" */ "@/views/proxy/finance/log.vue"),
                        name: "proxy-finance-log",
                        path: "/proxy/finance/log",
                        meta: {
                            title: "打款记录",
                            permission: "139920",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/proxy/finance/log" */ "@/views/proxy/finance/agentLog.vue"
                            ),
                        name: "proxy-finance-agentLog",
                        path: "/proxy/finance/agentLog",
                        meta: {
                            title: "代理打款记录",
                            permission: "139930",
                        },
                    },
                ],
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/proxy/brand/brand-handle" */ "@/views/proxy/brand/handle-brand.vue"
                    ),
                name: "proxy-brand-handle",
                path: "/proxy/brand-handle",
                meta: {
                    title: "编辑品牌",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/proxy/product/add-product/add-product" */ "@/views/proxy/product/add-product/add-product.vue"
                    ),
                name: "proxy-add-product",
                path: "/proxy/product/add-product",
                meta: {
                    title: "新增商品",
                    hidden: true,
                },
            },
        ],
    },
];

export default proxy;
