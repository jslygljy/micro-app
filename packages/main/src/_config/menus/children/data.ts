import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const order: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "data",
        path: "/data",
        meta: {
            title: "数据统计",
            icon: "ico-menu-data",
            permission: "70000",
        },
        children: [
            {
                component: () =>
                    import(/* webpackChunkName: "modules/data/dataSurvey" */ "@/views/data/dataSurvey/index.vue"),
                name: "dataSurvey",
                path: "/data/dataSurvey",
                meta: {
                    title: "数据概览",
                    alive: false,
                    permission: "70100",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/data/transaction" */ "@/views/data/transaction/index.vue"),
                name: "transaction",
                path: "/data/transaction",
                meta: {
                    title: "交易统计",
                    alive: false,
                    permission: "70200",
                },
            },
            {
                component: () => import(/* webpackChunkName: "modules/data/goods" */ "@/views/data/goods/index.vue"),
                name: "goods",
                path: "/data/goods",
                meta: {
                    title: "商品统计",
                    alive: false,
                    permission: "70300",
                },
            },
            {
                component: () => import(/* webpackChunkName: "modules/data/user" */ "@/views/data/user/index.vue"),
                name: "user",
                path: "/data/user",
                meta: {
                    title: "用户统计",
                    alive: false,
                    permission: "70400",
                },
            },
            {
                component: () => import(/* webpackChunkName: "modules/data/member" */ "@/views/data/member/index.vue"),
                name: "dataMember",
                path: "/data/member",
                meta: {
                    title: "会员统计",
                    alive: false,
                    permission: "70500",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/data/sellAfter" */ "@/views/data/sellAfter/index.vue"),
                name: "sellAfter",
                path: "/data/sellAfter",
                meta: {
                    title: "售后统计",
                    alive: false,
                    permission: "70600",
                },
            },
            {
                component: () =>
                    import(/* webpackChunkName: "modules/data/marketing" */ "@/views/data/marketing/index.vue"),
                name: "marketing",
                path: "/data/marketing",
                meta: {
                    title: "营销统计",
                    alive: false,
                    permission: "70700",
                },
            },
            {
                component: () => import(/* webpackChunkName: "modules/data/live" */ "@/views/data/live/index.vue"),
                name: "dataLive",
                path: "/data/live",
                meta: {
                    title: "直播统计",
                    alive: false,
                    permission: "70800",
                },
            },
        ],
    },
];

export default order;
