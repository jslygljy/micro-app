import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const channels: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "channels",
        path: "/channels",
        meta: {
            title: "渠道管理",
            icon: "ico-menu-channels",
            permission: "140000",
        },
        children: [
            {
                name: "poly-pool",
                path: "/channels/poly-pool/connect-set/index",
                component: LayoutParentMenu,
                meta: {
                    title: "聚水潭对接",
                },
                children: [
                    {
                        name: "connect-set",
                        path: "/channels/poly-pool/connect-set/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/channels/poly-pool/connect-set" */ "@/views/channels/poly-pool/connect-set/connect-set.vue"
                            ),
                        meta: {
                            title: "对接设置",
                        },
                    },
                    {
                        name: "sync-product-list",
                        path: "/channels/poly-pool/sync-product-list/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/channels/poly-pool/sync-product-list" */ "@/views/channels/poly-pool/sync-product-list/sync-product-list.vue"
                            ),
                        meta: {
                            title: "同步商品列表",
                        },
                    },
                    {
                        name: "add-product",
                        path: "/channels/poly-pool/add-product/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/channels/poly-pool/add-product" */ "@/views/channels/poly-pool/add-product/add-product.vue"
                            ),
                        meta: {
                            title: "添加同步商品",
                            hidden: true,
                        },
                    },
                    {
                        name: "push-order-list",
                        path: "/channels/poly-pool/push-order-list/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/channels/poly-pool/push-order-list" */ "@/views/channels/poly-pool/push-order-list/push-order-list.vue"
                            ),
                        meta: {
                            title: "推送订单列表",
                        },
                    },
                ],
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/channels/wxApp" */ "@/views/channels/wxApp/index.vue"),
                name: "channels-wxApp",
                path: "/channels/wxApp",
                meta: {
                    title: "微信授权",
                    permission: "140100",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/channels/auto-reply" */ "@/views/channels/auto-reply/index.vue"
                    ),
                name: "channels-auto-reply",
                path: "/channels/auto-reply",
                meta: {
                    title: "自动回复",
                    permission: "140200",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/channels/custom" */ "@/views/channels/custom/index.vue"),
                name: "channels-custom",
                path: "/channels/custom",
                meta: {
                    title: "自定义菜单",
                    permission: "140300",
                },
            },
        ],
    },
];
export default channels;
