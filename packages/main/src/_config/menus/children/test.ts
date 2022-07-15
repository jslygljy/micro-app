import {ExtendRouteConfig} from "./model/extendRouteConfig";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

const test: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "test",
        path: "/test",
        meta: {
            title: "测试列表",
            icon: "ico-menu-system",
            permission: "120000",
        },
        children: [
            {
                component: () => import(/* webpackChunkName: "modules/system/account" */ "@/views/test/list/index.vue"),
                name: "test-list",
                path: "/test/list",
                meta: {
                    title: "课程列表",
                    alive: true,
                    permission: "120100",
                },
            },
            {
                component: () => import(/* webpackChunkName: "modules/system/account" */ "@/views/test/form/form.vue"),
                name: "test-form",
                path: "/test/form",
                meta: {
                    title: "发布单次课程",
                    hidden: true,
                    permission: "120100",
                },
            },
        ],
    },
];

export default test;
