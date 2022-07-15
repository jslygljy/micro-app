import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const order: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "order",
        path: "/order",
        meta: {
            title: "订单管理",
            icon: "ico-menu-order",
            permission: "40000",
        },
        children: [
            {
                component: () =>
                    import(/* webpackChunkName: "modules/overview/order/index" */ "@/views/overview/order/index.vue"),
                name: "order-overview",
                path: "/order/overview",
                meta: {
                    title: "订单概览",
                    permission: "41000",
                },
            },
            {
                name: "order-all",
                path: "/order/logistics-order/index",
                component: LayoutParentMenu,
                meta: {
                    title: "综合订单",
                    permission: "42000",
                },
                children: [
                    /** 物流订单----start */
                    {
                        name: "logistics-order",
                        path: "/order/logistics-order/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/logistics-order" */ "@/views/order/order-all/logistics-order/logistics-order.vue"
                            ),
                        meta: {
                            title: "物流订单",
                            permission: "42100",
                        },
                    },
                    {
                        name: "logistics-details",
                        path: "/order/logistics-order/logistics-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/logistics-details" */ "@/views/order/order-all/logistics-order/logistics-details/logistics-details.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "order-send",
                        path: "/order/logistics-order/order-send",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/order-send" */ "@/views/order/order-all/logistics-order/order-send/order-send.vue"
                            ),
                        meta: {
                            title: "订单发货",
                            hidden: true,
                        },
                    },
                    {
                        name: "express-details",
                        path: "/order/logistics-order/express-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/express-details" */ "@/views/order/order-all/logistics-order/express-details/express-details.vue"
                            ),
                        meta: {
                            title: "物流详情",
                            hidden: true,
                        },
                    },
                    /** 物流订单----end */
                    /** 自提订单----start */
                    {
                        name: "self-takeup-list",
                        path: "/order/self-takeup-list/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/self-takeup-order" */ "@/views/order/order-all/self-takeup-list/self-takeup-list.vue"
                            ),
                        meta: {
                            title: "自提订单",
                            permission: "42200",
                        },
                    },
                    {
                        name: "self-takeup-details",
                        path: "/order/self-takeup-list/self-takeup-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/logistics-details" */ "@/views/order/order-all/self-takeup-list/self-takeup-details/self-takeup-details.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            hidden: true,
                        },
                    },
                    /** 自提订单----end */
                    /** 到店消费----start */
                    {
                        name: "shop-shopping",
                        path: "/order/shop-shopping/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/shop-shopping" */ "@/views/order/order-all/shop-shopping/index.vue"
                            ),
                        meta: {
                            title: "到店消费",
                            permission: "42500",
                        },
                    },
                    {
                        name: "shop-shopping-details",
                        path: "/order/shop-shopping/details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/shop-shopping/details" */ "@/views/order/order-all/shop-shopping/details/index.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            hidden: true,
                        },
                    },
                    /** 到店消费----end */
                    /** 同城配送订单----start */
                    {
                        name: "local-delivery-order",
                        path: "/order/local-delivery-order/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/local-delivery-order" */ "@/views/order/order-all/local-delivery-order/index.vue"
                            ),
                        meta: {
                            title: "同城配送订单",
                            permission: "42600",
                        },
                    },
                    {
                        name: "local-delivery-order-send",
                        path: "/order/local-delivery-order/order-send",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/local-delivery-order/order-send" */ "@/views/order/order-all/local-delivery-order/order-send/order-send.vue"
                            ),
                        meta: {
                            title: "订单发货",
                            hidden: true,
                        },
                    },
                    {
                        name: "local-delivery-express-details",
                        path: "/order/local-delivery-order/express-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/local-delivery-order/express-details" */ "@/views/order/order-all/local-delivery-order/express-details/express-details.vue"
                            ),
                        meta: {
                            title: "物流详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "local-delivery-order-details",
                        path: "/order/local-delivery-order/details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/local-delivery-order/details" */ "@/views/order/order-all/local-delivery-order/details/index.vue"
                            ),
                        meta: {
                            title: "订单详情",
                            hidden: true,
                        },
                    },
                    /** 同城配送订单----end */
                ],
            },
            /* 代理2.3新增代理订单   线上商城2.2.8去除代理订单 */
            // {
            //     name: "proxy-order",
            //     path: "/order/order-proxy/index",
            //     component: LayoutParentMenu,
            //     meta: {
            //         title: "代理订单",
            //         // role: 0,
            //         permission: "131000"
            //     },
            //     children: [
            //         {
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/order/order-proxy/retail/index" */ "@/views/order/order-proxy/retail-index.vue"
            //                 ),
            //             name: "proxy-order-retail",
            //             path: "/order/order-proxy/retail",
            //             meta: {
            //                 title: "零售订单",
            //                 permission: "131700"
            //             }
            //         },
            //         {
            //             name: "proxy-retail-details",
            //             path: "/order/order-proxy/retail-details",
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/order/order-proxy/retail/details" */ "@/views/order/order-proxy/detail/retail-details.vue"
            //                 ),
            //             meta: {
            //                 title: "零售订单详情",
            //                 desc: "代理订单详情",
            //                 hidden: true
            //             }
            //         },
            //         {
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/order/order-proxy/retail/order-send" */ "@/views/order/order-proxy/retail-order-send.vue"
            //                 ),
            //             name: "retail-order-send",
            //             path: "/order/order-proxy/retail/order-send",
            //             meta: {
            //                 title: "订单发货",
            //                 hidden: true
            //             }
            //         },
            //         {
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/order/order-proxy/retail-sales-after/index" */ "@/views/order/order-proxy/retail-sales-after.vue"
            //                 ),
            //             name: "retail-sales-after",
            //             path: "/order/order-proxy/retail-sales-after",
            //             meta: {
            //                 title: "零售售后",
            //                 permission: "131800"
            //             }
            //         },
            //         {
            //             name: "retail-sales-after-detail",
            //             path: "/order/order-proxy/retail-sales-after-detail",
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/order/order-proxy/retail-sales-after/details" */ "@/views/order/order-proxy/retail-sales-after-detail/retail-sales-after-detail.vue"
            //                 ),
            //             meta: {
            //                 title: "零售售后详情",
            //                 hidden: true
            //             }
            //         },
            //         {
            //             name: "retail-express-details",
            //             path:
            //                 "/order/order-proxy/retail-sales-after-detail/express-details",
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/order/order-proxy/retail-sales-after/express-details" */ "@/views/order/order-proxy/retail-sales-after-detail/express-details/express-details.vue"
            //                 ),
            //             meta: {
            //                 title: "零售售后物流详情",
            //                 hidden: true
            //             }
            //         },
            //         {
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/order/order-proxy/history" */ "@/views/order/order-proxy/history/index.vue"
            //                 ),
            //             name: "proxy-order-history",
            //             path: "/order/order-proxy/history",
            //             meta: {
            //                 title: "订单记录",
            //                 permission: "131501"
            //             }
            //         }
            //         // {
            //         //     name: "proxy-order-set",
            //         //     path: "/order/order-proxy/set",
            //         //     component: () =>
            //         //         import(
            //         //             /* webpackChunkName: "modules/order/order-proxy/set" */ "@/views/order/order-proxy/set/index.vue"
            //         //         ),
            //         //     meta: {
            //         //         title: "订单设置"
            //         //     }
            //         // },
            //         /* 代理2.3暂时注释多余路由 */
            //         // {
            //         //     name: "proxy-logistics-details",
            //         //     path: "/order/order-proxy/logistics-details",
            //         //     component: () =>
            //         //         import(
            //         //             /* webpackChunkName: "modules/order/order-proxy/logistics-details" */ "@/views/order/order-proxy/detail/logistics-details.vue"
            //         //         ),
            //         //     meta: {
            //         //         title: "物流详情",
            //         //         hidden: true
            //         //     }
            //         // },
            //         // {
            //         //     name: "proxy-self-takeup-details",
            //         //     path: "/order/order-proxy/self-takeup-details",
            //         //     component: () =>
            //         //         import(
            //         //             /* webpackChunkName: "modules/order/order-proxy/self-takeup-details" */ "@/views/order/order-proxy/detail/self-takeup-details.vue"
            //         //         ),
            //         //     meta: {
            //         //         title: "自提详情",
            //         //         hidden: true
            //         //     }
            //         // },
            //         // {
            //         //     name: "proxy-cloud-stock-details",
            //         //     path: "/order/order-proxy/cloud-stock-details",
            //         //     component: () =>
            //         //         import(
            //         //             /* webpackChunkName: "modules/order/order-proxy/cloud-stock-details" */ "@/views/order/order-proxy/detail/cloud-stock-details.vue"
            //         //         ),
            //         //     meta: {
            //         //         title: "云库存详情",
            //         //         hidden: true
            //         //     }
            //         // },
            //         // {
            //         //     name: "proxy-express-details",
            //         //     path: "/order/order-proxy/logistics-order/express-details",
            //         //     component: () =>
            //         //         import(
            //         //             /* webpackChunkName: "modules/order/order-proxy/express-details" */ "@/views/order/order-proxy/express-details/express-details.vue"
            //         //         ),
            //         //     meta: {
            //         //         title: "物流详情",
            //         //         hidden: true
            //         //     }
            //         // },
            //     ]
            // },
            /* 代理2.3 新增 */
            {
                name: "shipments-delivery-parent",
                path: "/order/shipments/shipments-delivery",
                component: LayoutParentMenu,
                meta: {
                    title: "发货管理",
                    permission: "44000",
                },
                children: [
                    {
                        name: "shipments-delivery",
                        path: "/order/shipments/shipments-delivery",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/shipments/shipments-delivery" */ "@/views/order/shipments/shipments-delivery/index.vue"
                            ),
                        meta: {
                            title: "批量发货",
                            permission: "44100",
                        },
                    },
                    {
                        name: "shipments-order",
                        path: "/order/shipments/shipments-order",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/shipments/shipments-order" */ "@/views/order/shipments/shipments-order/index.vue"
                            ),
                        meta: {
                            title: "批量打单",
                            permission: "44200",
                        },
                    },
                    {
                        name: "shipments-recard",
                        path: "/order/shipments/shipments-recard",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/shipments/shipments-recard" */ "@/views/order/shipments/shipments-recard/index.vue"
                            ),
                        meta: {
                            title: "发货记录",
                            permission: "44300",
                        },
                    },
                ],
            },
            {
                name: "sale-after-parent",
                path: "/order/sale-after/sale-after",
                component: LayoutParentMenu,
                meta: {
                    title: "售后管理",
                    permission: "43000",
                },
                children: [
                    {
                        name: "sale-after",
                        path: "/order/sale-after/sale-after",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/sale-after" */ "@/views/order/sale-after/sale-after.vue"
                            ),
                        meta: {
                            title: "售后管理",
                            hidden: true,
                        },
                    },
                    {
                        name: "sale-after-details",
                        path: "/order/sale-after/sale-after-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/sale-after/sale-after-details" */ "@/views/order/sale-after/sale-after-details/sale-after-details.vue"
                            ),
                        meta: {
                            title: "售后详情",
                            hidden: true,
                        },
                    },
                    {
                        name: "sale-after-express-details",
                        path: "/order/sale-after/express-details",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/order/express-details" */ "@/views/order/sale-after/express-details/express-details.vue"
                            ),
                        meta: {
                            title: "物流详情",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                name: "order-recard",
                path: "/order/order-recard",
                component: () =>
                    import(/* webpackChunkName: "modules/order/order-recard" */ "@/views/order/order-recard/index.vue"),
                meta: {
                    title: "订单记录",
                    permission: "45000",
                },
            },
        ],
    },
];

export default order;
