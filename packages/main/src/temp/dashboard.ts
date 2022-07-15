import Framework from "@/views/_layout/framework.vue";

export default {
    path: "/dashboard",
    name: "/dashboard",
    sort: 1,
    redirect: "/dashboard/index",
    component: Framework,
    children: [
        {
            path: "index",
            name: "/dashboard/index",
            component: () => import(/* webpackChunkName: "dashboard" */ "../dashboard/src/components/index.vue"),
            meta: {
                title: "控制台",
                keepAlive: "DashboardIndex",
                icon: "dashicons:dashboard",
            },
        },
    ],
};
