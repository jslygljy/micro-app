import {ExtendRouteConfig} from "./children/model/extendRouteConfig";
// import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";

import control from "./children/control";
import product from "./children/product";
// import distribution from "./children/distribution";
import order from "./children/order";
import market from "./children/market";
import live from "./children/live";
import system from "./children/system";
import financial from "./children/financial";
import channels from "./children/channels";
import api from "./children/api";
import devTools from "./children/dev-tools";
import proxy from "./children/proxy";
import member from "./children/member";
import data from "./children/data";
import store from "./children/store";
import intergral from "./children/integral";
import storage from "./children/storage";
import thirdPlatform from "./children/third-platform";
// import overview from "./children/overview";
const menu: ExtendRouteConfig[] = [
    {
        path: "/",
        name: "index",
        component: () => import(/* webpackChunkName: "modules/index/index" */ "@/views/index/index.vue"),
        meta: {
            title: "首页",
            icon: "ico-menu-home",
        },
    },
    ...control,
    ...product,
    ...order,
    ...member,
    ...store,
    ...market,
    ...storage,
    ...live,
    ...thirdPlatform,
    ...data,
    // ...proxy,
    ...intergral,
    ...channels,
    ...financial,
    ...api,
    ...system,
    // ...distribution,
    // ...overview,
    // ...devTools,
];

export default menu;
