import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const product: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "product",
        path: "/product",
        meta: {
            title: "商品管理",
            icon: "ico-menu-product",
            permission: "30000",
        },
        children: [
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/overview/product/index" */ "@/views/overview/product/index.vue"
                    ),
                name: "product-overview",
                path: "/product/overview",
                meta: {
                    title: "商品概览",
                    permission: "30100",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/product/list/all" */ "@/views/product/list/index/index.vue"),
                name: "product-list",
                path: "/product/list",
                meta: {
                    title: "商品列表",
                    permission: "30200",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/store-price" */ "@/views/product/store-price/index.vue"
                    ),
                name: "product-store-price",
                path: "/product/store-price",
                meta: {
                    title: "门店价格",
                    hidden: true,
                    // permission: "30212"
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/product-classify/classify-list/classify-list" */ "@/views/product/product-classify/classify-list/classify-list.vue"
                    ),
                name: "classify-list",
                path: "/product/product-classify/classify-list",
                meta: {
                    title: "分类列表",
                    permission: "30500",
                },
            },
            {
                name: "product-classifyEquity",
                path: "/product/classifyEquity",
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/classify-equity" */ "@/views/product/classify-equity/index.vue"
                    ),
                meta: {
                    title: "分类权益",
                    permission: "30400",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/product/brand/index" */ "@/views/product/brand/index.vue"),
                name: "product-brand",
                path: "/product/brand",
                meta: {
                    title: "品牌管理",
                    permission: "30300",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/evaluation/index" */ "@/views/product/evaluation/index.vue"
                    ),
                name: "product-evaluation",
                path: "/product/evaluation",
                meta: {
                    title: "商品评价",
                    permission: "30600",
                },
            },
            /* 代理2.3新增 */
            /** 2.2.8去除代理零售收益， 系统设置模块新增代理零售配置 */
            // {
            //     component: () =>
            //         import(
            //             /* webpackChunkName: "modules/product/retail-profit-set" */ "@/views/product/retail-profit-set/index.vue"
            //         ),
            //     name: "retail-profit-set",
            //     path: "/product/retail-profit-set",
            //     meta: {
            //         title: "代理零售收益"
            //         // permission: "139800"
            //     }
            // },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/update/add" */ "@/views/product/add-product/add-product.vue"
                    ),
                name: "add-product",
                path: "/product/add-product",
                meta: {
                    title: "新增商品",
                    hidden: true,
                    // permission: "30202"
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/product-classify/classify-list/edit-classify/edit-classify" */ "@/views/product/product-classify/classify-list/edit-classify/edit-classify.vue"
                    ),
                name: "edit-classify",
                path: "/product/product-classify/edit-classify",
                meta: {
                    title: "新增/编辑分类",
                    hidden: true,
                    // permission: "30504"
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/product-classify/select-classify" */ "@/views/product/product-classify/select-classify.vue"
                    ),
                name: "select-classify",
                path: "/product/product-classify/select-classify",
                meta: {
                    title: "选择分类",
                    // permission: "30506",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/income-change" */ "@/views/product/income-change/index.vue"
                    ),
                name: "income-change-index",
                path: "/product/income-change/index",
                meta: {
                    title: "商品收益调整",
                    permission: "30700",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/product-classify/advert-list/advert-list" */ "@/views/product/product-classify/advert-list/advert-list.vue"
                    ),
                name: "advert-list",
                path: "/product/product-classify/advert-list",
                meta: {
                    title: "广告列表",
                    permission: "30800",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/unpacking-inventory/index" */ "@/views/product/unpacking-inventory/index.vue"
                    ),
                name: "unpacking-inventory",
                path: "/product/unpacking-inventory",
                meta: {
                    title: "拆包库存",
                    permission: "31400",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/store-inventory/index" */ "@/views/product/store-inventory/index.vue"
                    ),
                name: "store-inventory",
                path: "/product/store-inventory",
                meta: {
                    title: "门店库存",
                    hidden: true,
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/product-classify/advert-list/edit-advert/edit-advert" */ "@/views/product/product-classify/advert-list/edit-advert/edit-advert.vue"
                    ),
                name: "edit-advert",
                path: "/product/product-classify/editAdvert",
                meta: {
                    title: "新增/编辑广告",
                    hidden: true,
                    // permission: "30801"
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/brand/edit-brand/edit-brand" */ "@/views/product/brand/edit-brand/edit-brand.vue"
                    ),
                name: "edit-brand",
                path: "/product/edit-brand",
                meta: {
                    title: "新增/编辑品牌",
                    hidden: true,
                    // permission: "30801"
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/income-change/log" */ "@/views/product/income-change/log.vue"
                    ),
                name: "income-change-log",
                path: "/product/income-change/log",
                meta: {
                    title: "操作日志",
                    hidden: true,
                    // permission: "30702"
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/product/list/all" */ "@/views/product/hide-list/index.vue"),
                name: "hide-list",
                path: "/product/hide-list",
                meta: {
                    title: "商品隐藏列表",
                },
            },
            {
                component: () =>
                    import(
                        /* webpackChunkName: "modules/product/update/add" */ "@/views/product/hide-list/add-goods/index.vue"
                    ),
                name: "add-goods",
                path: "/product/add-goods",
                meta: {
                    title: "新增商品",
                    hidden: true,
                },
            },
        ],
    },
];

export default product;
