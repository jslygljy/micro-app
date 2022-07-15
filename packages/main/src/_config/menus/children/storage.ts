import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const storage: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "storage",
        path: "/storage",
        meta: {
            title: "仓储管理",
            icon: "ico-menu-storage",
            permission: "180000",
        },
        children: [
            {
                name: "storage-allot-parent",
                path: "/storage/allot",
                component: LayoutParentMenu,
                meta: {
                    title: "调拨管理",
                    permission: "180100",
                },
                children: [
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/storage/allot" */ "@/views/storage/allot/index.vue"),
                        name: "storage-allot",
                        path: "/storage/allot",
                        meta: {
                            title: "调拨管理",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/storage/allot" */ "@/views/storage/allot/allot-set.vue"
                            ),
                        name: "storage-allot-set",
                        path: "/storage/allot/set",
                        meta: {
                            title: "调拨设置",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                name: "storage-settle-parent",
                path: "/storage/settle",
                component: LayoutParentMenu,
                meta: {
                    title: "结算管理",
                    permission: "180200",
                },
                children: [
                    {
                        component: () =>
                            import(/* webpackChunkName: "modules/storage/settle" */ "@/views/storage/settle/index.vue"),
                        name: "storage-settle",
                        path: "/storage/settle",
                        meta: {
                            title: "结算管理",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/storage/settle" */ "@/views/storage/settle/settlement.vue"
                            ),
                        name: "storage-settlement",
                        path: "/storage/settle/settlement/:type/:id",
                        meta: {
                            title: "结算配置",
                            hidden: true,
                        },
                    },
                ],
            },
            {
                name: "storage-invoice-parent",
                path: "/storage/invoice",
                component: LayoutParentMenu,
                meta: {
                    title: "结算清单",
                    permission: "180300",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/storage/invoice" */ "@/views/storage/invoice/index.vue"
                            ),
                        name: "storage-invoice",
                        path: "/storage/invoice",
                        meta: {
                            title: "结算清单",
                            hidden: true,
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/storage/invoice" */ "@/views/storage/invoice/invoice-detail.vue"
                            ),
                        name: "storage-invoice",
                        path: "/storage/invoice/invoiceDetail",
                        meta: {
                            title: "门店详情",
                            hidden: true,
                        },
                    },
                ],
            },
            // 1.1.3 被砍需求
            // {
            //     name: "storage-breakage",
            //     path: "/storage/breakageRecord",
            //     component: LayoutParentMenu,
            //     meta: {
            //         title: "报损记录"
            //     },
            //     children: [
            //         {
            //             name: "storage-breakage-record",
            //             path: "/storage/breakage-record",
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/storage/breakageRecord" */ "@/views/storage/breakage-record/index.vue"
            //                 ),
            //             meta: {
            //                 title: "报损记录",
            //                 hidden: true
            //             }
            //         },
            //         {
            //             component: () =>
            //                 import(
            //                     /* webpackChunkName: "modules/storage/breakageRecordDetail" */ "@/views/storage/breakage-record/record-detail.vue"
            //                 ),
            //             name: "storage-record-detail",
            //             path: "/storage/breakage-record/detail",
            //             meta: {
            //                 title: "报损详情",
            //                 hidden: true
            //             }
            //         }
            //     ]
            // }
        ],
    },
];
export default storage;
