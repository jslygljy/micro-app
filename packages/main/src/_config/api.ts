import {api, MapleRequestApis} from "maple-request";
import servers from "@/_config/servers";
import systemApi from "./apis/system";
import marketApi from "./apis/market";
import renovatApi from "./apis/renovat";
import liveApi from "./apis/live";
import financial from "./apis/financial";
import channels from "./apis/channels";
import distribution from "./apis/distribution";
import product from "./apis/product";
import proxy from "./apis/proxy";
import member from "./apis/member";
import file from "./apis/file";
import order from "./apis/order";
import view from "./apis/view";
import store from "./apis/store";
import apiMarket from "./apis/apiMarket";
import dataStatistics from "./apis/dataStatistics";
import overview from "./apis/overview";
import control from "./apis/control";
import integral from "./apis/integral";
import storage from "./apis/storage";
import thirdPlatform from "./apis/thirdPlatform";

const apis: MapleRequestApis = {
    association: api.get("/login", servers.association), // 社群跳转链接获取
    getConfigureInfo: api.get("/api/app/tcloud-sso/user/getConfigureInfo", servers.console), // 获取用户代理商信息
    platformInfo: api.get("/admin/platformInfo", servers.dongchali), // 获取洞察力信息
    getDclIsLive: api.get("/baseapi/platform/common/getDclIsLive"), // 获取洞察力是否开启直播
    checkAssociation: api.get("/check", servers.association), // 社群跳转链接获取
    loginByMultiple: api.post("/baseapi/platform/auth/accountLogin"),
    loginByMultipleGetToken: api.get("/baseapi/platform/auth/getInfo"), // 多门店根据token获取信息
    isFirstLogin: api.get("/baseapi/platform/superShop/isFirstLogin"), // 是否首次登陆
    updatePassword: api.post("/baseapi/platform/admin/editPassword"), // 修改密码
    login: api.post(
        "/api/app/tcloud-sso/account/loginCheck?loginName=${loginName}&password=${password}&secode=",
        servers.console,
    ), // 登录
    getAccessToken: api.post("/baseapi/platform/auth/login"), // 获取AccessToken
    getServerUrl: api.get("/admin/getUserDomain", servers.manager), // 获取数据访问域名
    checkoutOld: api.get("/admin/checkoutOld", servers.manager), // 获取数据访问域名
    openCloudShop: api.post("/api/app/obor-nginx-php/tweb/CloudShop/open", servers.console), // 开通服务
    getIsAgent: api.get("/baseapi/platform/common/getIsAgent"), // 查看是否代理
    getUrl: api.get("/platform/common/getUrl"), // 获取url
    getAllMenu: api.post("/api/app/aggregateservice-web/api/Home/GetAllMenu", servers.console), // 产品列表
    getShortcutMenu: api.post("api/app/aggregateservice-web/api/Home/GetShortcutMenu", servers.console), // 头部获取已选
    setShortcutMenu: api.post("api/app/aggregateservice-web/api/Home/SetShortcutMenu", servers.console), // 头部设置已选
    getProductUrl: api.post("/aggregateservice-web/api/Home/GetProductUrl", servers.console), // 获取产品与服务
    getListMessage: api.post("/api/app/aggregateservice-web/api/message/listMessage", servers.console), // 获取未读消息数
    getQueryHeadMenuList: api.post("/api/app/tcloud-account/employeeRole/queryHeadMenuList", servers.console), // 获取菜单权限
    getTwitter: api.get("baseapi/platform/twitter/find"), // 推客列表
    getArea: api.get("/baseapi/platform/region/get"), // 获取省市区
    shopConfig: api.get("/baseapi/platform/shopConfig/shopConfig"), // 获取新手任务
    shopStatus: api.get("/baseapi/platform/shopConfig/getShopPush"),
    shopPut: api.put("/baseapi/platform/shopConfig/pushShop"),
};

export default {
    ...apis,
    ...systemApi,
    ...channels,
    ...financial,
    ...distribution,
    ...product,
    ...marketApi,
    ...renovatApi,
    ...liveApi,
    ...proxy,
    ...member,
    ...file,
    ...order,
    ...view,
    ...store,
    ...apiMarket,
    ...dataStatistics,
    ...overview,
    ...control,
    ...integral,
    ...storage,
    ...thirdPlatform,
};
