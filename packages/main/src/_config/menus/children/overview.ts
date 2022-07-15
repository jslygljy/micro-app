import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const overview: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "overview-home",
        path: "/overview/index",
        meta: {
            title: "概览",
            icon: "ico-menu-product",
        },
        children: [
            {
                component: () =>
                    import(/* webpackChunkName: "modules/overview/index/index" */ "@/views/overview/index/index.vue"),
                name: "overview-index",
                path: "/overview/index",
                meta: {
                    title: "首页",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/overview/vip/index" */ "@/views/overview/vip/index.vue"),
                name: "overview-vip",
                path: "/overview/vip",
                meta: {
                    title: "会员",
                },
            },
            // {
            //     component: () => import(/* webpackChunkName: "modules/overview/marketing/index" */ '@/views/overview/marketing/index.vue'),
            //     name: 'overview-marketing',
            //     path: '/overview/marketing',
            //     meta: {
            //         title: "营销",
            //     },
            // },
            // {
            //     component: () =>
            //         import(
            //             /* webpackChunkName: "modules/overview/order/index" */ "@/views/overview/order/index.vue"
            //         ),
            //     name: "overview-order",
            //     path: "/overview/order",
            //     meta: {
            //         title: "订单"
            //     }
            // },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/overview/product/index" */ "@/views/overview/product/index.vue"
                    ),
                name: "overview-product",
                path: "/overview/product",
                meta: {
                    title: "商品",
                },
            },
            // {
            //     component: () => import(/* webpackChunkName: "modules/overview/user/index" */ '@/views/overview/user/index.vue'),
            //     name: 'overview-user',
            //     path: '/overview/user',
            //     meta: {
            //         title: "用户",
            //     },
            // },
        ],
    },
];

export default overview;
