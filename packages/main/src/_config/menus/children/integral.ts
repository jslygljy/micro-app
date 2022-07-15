import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const market: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "integral",
        path: "/integral",
        meta: {
            title: "积分商城",
            icon: "ico-menu-market",
            permission: "150000",
        },
        children: [
            {
                component: () => import("@/views/overview/integral/index.vue"),
                name: "integral-overview",
                path: "/integral/overview",
                meta: {
                    title: "积分商城",
                    permission: "150100",
                },
            },
            {
                component: () => import("@/views/integral/edit/index.vue"),
                name: "integral-edit",
                path: "/integral/edit",
                meta: {
                    title: "新增/查看",
                    hidden: true,
                },
            },
            {
                component: () => import("@/views/integral/config/index.vue"),
                name: "integral-config",
                path: "/integral/config",
                meta: {
                    title: "积分商城配置",
                    permission: "150200",
                },
            },
            {
                component: () => import("@/views/integral/order/index.vue"),
                name: "integral-overview",
                path: "/integral/order",
                meta: {
                    title: "积分订单",
                    permission: "150300",
                },
            },

            {
                name: "integral-logistics-details",
                path: "/integral/order/integral-order/integral-details",
                component: () =>
                    import("@/views/integral/order/components/integral-order/logistics-details/logistics-details.vue"),
                meta: {
                    title: "订单详情",
                    hidden: true,
                },
            },
            {
                name: "integral-self-takeup-details",
                path: "/integral/order/integral-self-takeup-list/integral-self-takeup-details",
                component: () =>
                    import(
                        "@/views/integral/order/components/self-takeup-list/self-takeup-details/self-takeup-details.vue"
                    ),
                meta: {
                    title: "订单详情",
                    hidden: true,
                },
            },
            {
                name: "integral-order-send",
                path: "/integral/order/integral-order/order-send",
                component: () => import("@/views/integral/order/components/integral-order/order-send/order-send.vue"),
                meta: {
                    title: "订单发货",
                    hidden: true,
                },
            },
            {
                name: "integral-express-details",
                path: "/integral/order/integral-order/express-details",
                component: () =>
                    import("@/views/integral/order/components/integral-order/express-details/express-details.vue"),
                meta: {
                    title: "物流详情",
                    hidden: true,
                },
            },
            {
                component: () => import("@/views/integral/adjustment/index.vue"),
                name: "integral-adjustment",
                path: "/integral/adjustment",
                meta: {
                    title: "商品积分调整",
                    permission: "150400",
                },
            },
            {
                name: "integral-adjustment-logs",
                path: "/integral/adjustment/option-log",
                component: () => import("@/views/integral/adjustment/option-log.vue"),
                meta: {
                    title: "操作日志",
                    hidden: true,
                },
            },
        ],
    },
];

export default market;
