import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const live: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "order",
        path: "/order",
        meta: {
            title: "订单管理",
            icon: "ico-menu-order",
            permission: "20001",
        },
        children: [
            {
                name: "order-view",
                path: "/order/order-view/index",
                component: () =>
                    import(/* webpackChunkName: "modules/order/order-view" */ "@/views/order/order-view/index.vue"),
                meta: {
                    title: "订单概览",
                    permission: "20151",
                },
            },
            {
                name: "order-all",
                path: "/order/order-all/index",
                component: LayoutParentMenu,
                meta: {
                    title: "综合订单",
                    permission: "20002",
                },
                children: [
                    {
                        name: "logistics-order",
                        path: "/order/logistics-order/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/logistics-order" */ "@/views/order/order-all/index.vue"
                            ),
                        meta: {
                            title: "物流订单",
                            permission: "20007",
                        },
                    },
                    {
                        name: "self-takeup-order",
                        path: "/order/self-takeup-order/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/self-takeup-order" */ "@/views/order/order-all/self-takeup-list.vue"
                            ),
                        meta: {
                            title: "自提订单",
                            permission: "20008",
                        },
                    },
                ],
            },
            {
                name: "order-after",
                path: "/order/order-after/index",
                component: () =>
                    import(/* webpackChunkName: "modules/order/order-after" */ "@/views/order/order-after/index.vue"),
                meta: {
                    title: "售后管理",
                    permission: "20101",
                },
            },
            {
                component: LayoutParentMenu,
                name: "order-proxy",
                path: "/order/order-proxy/index",
                meta: {
                    title: "代理订单",
                    permission: "20202",
                    agentShowPage: true,
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/order-proxy-" */ "@/views/order/order-proxy/order-type/purchaseList.vue"
                            ),
                        name: "purchaseList",
                        path: "/order/order-proxy/purchaseList",
                        meta: {
                            title: "采购订单",
                            permission: "20605",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/order-proxy" */ "@/views/order/order-proxy/order-type/takeOrderList.vue"
                            ),
                        name: "takeOrderList",
                        path: "/order/order-proxy/takeOrderList",
                        meta: {
                            title: "提货订单",
                            permission: "206010",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/order-proxy" */ "@/views/order/order-proxy/order-type/exchangeList.vue"
                            ),
                        name: "exchangeList",
                        path: "/order/order-proxy/exchangeList",
                        meta: {
                            title: "换货订单",
                            permission: "206011",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/order-proxy" */ "@/views/order/order-proxy/order-type/getFirstList.vue"
                            ),
                        name: "getFirstList",
                        path: "/order/order-proxy/getFirstList",
                        meta: {
                            title: "招商订单",
                            permission: "20604",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/order-proxy" */ "@/views/order/order-proxy/order-type/retailOrderList.vue"
                            ),
                        name: "retailOrderList",
                        path: "/order/order-proxy/retailOrderList",
                        meta: {
                            title: "零售订单",
                            permission: "20601",
                        },
                    },
                ],
            },
        ],
    },
];

export default live;
