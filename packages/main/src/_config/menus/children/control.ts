import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const controlPermission: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "control",
        path: "/control",
        redirect: "/control/overview",
        meta: {
            title: "管控管理",
            icon: "ico-menu-control",
            permission: "20000",
            roleType: [1, 2],
        },
        children: [
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/overview/control/index" */ "@/views/overview/control/index.vue"
                    ),
                name: "control-overview",
                path: "/control/overview",
                meta: {
                    title: "管控概览",
                    permission: "20100",
                    roleType: [1],
                },
            },
            {
                path: "/control/store",
                name: "control-store",
                component: () =>
                    import(/* webpackChunkName: "modules/control/store/index" */ "@/views/control/store/index.vue"),
                meta: {
                    title: "门店管理",
                    permission: "20200",
                },
            },
            {
                path: "/control/store/add",
                name: "control-store-add",
                component: () =>
                    import(/* webpackChunkName: "modules/control/store/add" */ "@/views/control/store/add.vue"),
                meta: {
                    title: "门店新增",
                    hidden: true,
                },
            },
            {
                path: "/control/store/edit/:type/:id",
                name: "control-store-edit",
                component: () =>
                    import(/* webpackChunkName: "modules/control/store/edit" */ "@/views/control/store/edit.vue"),
                meta: {
                    title: "门店编辑",
                    hidden: true,
                },
            },
            {
                path: "/control/partner",
                name: "control-partner",
                component: () =>
                    import(/* webpackChunkName: "modules/control/partner/index" */ "@/views/control/partner/index.vue"),
                meta: {
                    title: "合伙人管理",
                    permission: "20303",
                },
            },
            {
                path: "/control/partner/edit/:type/:id",
                name: "control-partner-edit",
                component: () =>
                    import(/* webpackChunkName: "modules/control/partner/edit" */ "@/views/control/partner/edit.vue"),
                meta: {
                    title: "合伙人详情",
                    hidden: true,
                },
            },
            {
                component: LayoutParentMenu,
                name: "control-parent",
                path: "/control/goods",
                meta: {
                    title: "权限管理",
                    permission: "20400",
                },
                children: [
                    {
                        path: "/control/goods",
                        name: "control-goods",
                        component: () =>
                            import(/* webpackChunkName: "modules/control/goods" */ "@/views/control/goods/index.vue"),
                        meta: {
                            title: "商品权限",
                            permission: "20401",
                        },
                    },
                    {
                        path: "/control/goods/add-modify",
                        name: "control-add-modify",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/control/add-modify" */ "@/views/control/goods/add-modify/index.vue"
                            ),
                        meta: {
                            title: "新增商品权限",
                            hidden: true,
                        },
                    },
                    {
                        path: "/control/business",
                        name: "control-business",
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/control/business" */ "@/views/control/business/index.vue"
                            ),
                        meta: {
                            title: "业务权限",
                            permission: "20501",
                        },
                    },
                ],
            },
        ],
    },
];

export default controlPermission;
