import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const live: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "live",
        path: "/live",
        meta: {
            title: "直播管理",
            icon: "ico-menu-live",
            permission: "110000",
            isDclLive: true,
        },
        children: [
            {
                component: LayoutParentMenu,
                name: "anchor-manage",
                path: "/live/anchor-manage/anchor-list",
                meta: {
                    title: "主播列表",
                    permission: "110100",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/live/anchor-manage/anchor-list" */ "@/views/live/anchor-manage/anchor-list/index.vue"
                            ),
                        name: "anchor-list",
                        path: "/live/anchor-manage/anchor-list",
                        meta: {
                            title: "主播列表",
                            hidden: true,
                            permission: "110100",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/live/anchor-manage/live-history" */ "@/views/live/anchor-manage/live-history/index.vue"
                            ),
                        name: "live-history",
                        path: "/live/anchor-manage/live-history",
                        meta: {
                            title: "直播历史",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                name: "live-list",
                path: "/live/live-list/index",
                component: () =>
                    import(/* webpackChunkName: "modules/live/live-list/index" */ "@/views/live/live-list/index.vue"),
                meta: {
                    title: "直播列表",
                    permission: "110300",
                },
            },
            {
                name: "live-product-parent",
                path: "/live/live-product/index",
                component: LayoutParentMenu,
                meta: {
                    title: "播品管理",
                    permission: "110400",
                },
                children: [
                    {
                        name: "live-product",
                        path: "/live/live-product/index",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/live/live-product/index" */ "@/views/live/live-product/index.vue"
                            ),
                        meta: {
                            title: "播品列表",
                            permission: "110400",
                            hidden: true,
                        },
                    },
                    {
                        name: "live-produc-edit",
                        path: "/live/live-product/edit",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/live/live-product/edit/index" */ "@/views/live/live-product/edit/index.vue"
                            ),
                        meta: {
                            title: "新增/编辑播品",
                            hidden: true,
                        },
                    },
                    {
                        name: "live-product-inventory",
                        path: "/live/live-product/inventory",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/live/live-product/inventory" */ "@/views/live/live-product/inventory/inventory.vue"
                            ),
                        meta: {
                            title: "调整库存",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                path: "/live/authorize-anchor",
                name: "authorize-anchor",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/live/authorize-anchor/index" */ "@/views/live/authorize-anchor/index.vue"
                    ),
                meta: {
                    title: "授权主播",
                    permission: "110200",
                },
            },
            {
                path: "/live/live-income",
                name: "live-income",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/live/live-income/index" */ "@/views/live/live-income/index.vue"
                    ),
                meta: {
                    title: "直播收益",
                    permission: "110600",
                },
            },
            {
                name: "handle-log",
                path: "/live/handle-log/index",
                component: () =>
                    import(/* webpackChunkName: "modules/live/handle-log/index" */ "@/views/live/handle-log/index.vue"),
                meta: {
                    title: "操作日志",
                    permission: "110500",
                },
            },
        ],
    },
];

export default live;
