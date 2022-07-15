// 注册app
import {registerMicroApps, start} from "qiankun";
import store from "@/stores/common";
import actions from "./action";
import utils from "@/utils/index";
let globModule = {
    store,
    actions,
    utils,
};

// 加载状态
const loader = (loadding: boolean) => {
    console.log(loadding);
};

const microApps = [
    {
        path: "/dashboard/",
        name: "dashboard",
        sort: 1,
        entry: "//localhost:8001/",
        container: "#container",
        activeRule: "/dashboard/",
        children: [
            {
                name: "/dashboard/",
                meta: {
                    title: "控制台",
                    keepAlive: "DashboardIndex",
                    icon: "dashicons:dashboard",
                },
            },
        ],
    },
    {
        path: "/product",
        name: "product",
        entry: "//localhost:8002/",
        container: "#container",
        activeRule: "/product",
        sort: 2,
        meta: {
            title: "产品",
            keepAlive: "productIndex",
        },
        children: [
            {
                path: "",
                name: "/product/productList",
                meta: {
                    title: "产品列表",
                    keepAlive: "productIndex",
                },
            },
            {
                path: "/add",
                name: "/product/productAdd",
                meta: {
                    title: "新增产品",
                    keepAlive: "productAdd",
                },
            },
        ],
    },
];

// async function getMenu() {
//     const data = await getAppConfigApi();
//     if (data) {
//         const _res = data.data || [];
//         store.dispatch("menu/setUserMenu", _res);

//         // 处理子应用注册数据
//         let defaultApp = null;
//         _res.forEach((i: any) => {
//             microApps.push({
//                 name: i.module,
//                 entry: i.entry,
//                 container: "#container",
//                 activeRule: i.routerBase,
//             });
//             if (i.defaultRegister) defaultApp = i.routerBase;
//         });
//     }
// }
const apps = microApps.map((item) => {
    return {
        ...item,
        loader,
        props: {
            globModule,
        },
    };
});

console.log(apps);
// 注册
registerMicroApps(apps, {
    // 加载前
    beforeLoad: (app: any) => {
        // 加载微应用前，加载进度条
        console.log("before load app.name====>>>>>", app.name);
        return Promise.resolve(app);
    },
    // 挂载前
    beforeMount: (app) => {
        // 加载微应用前，加载进度条
        return Promise.resolve(app);
    },
    // 挂载后
    afterMount: (app) => {
        console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
        return Promise.resolve(app);
    },
});

// 开启
start({
    sandbox: {},
});
export default microApps;
