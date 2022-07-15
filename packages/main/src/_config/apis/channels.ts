import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    // channelsGetSaasUid: api.get('/app/auth/getSaasUid'),
    // channelsGetAppToken: api.get(Server.tp + '/api/test_test/getAppToken'),
    channelsGetGzhAuth: api.get("/baseapi/platform/wechatApi/getGzhAuth"), // 新接公众号口授权
    channelsgzhInfo: api.get("/baseapi/platform/wechatApi/getGzhInfo"),
    channelsAutoReplyIndex: api.get("/baseapi/platform/wechatApi/getGzhAccountReply"),
    channelsDelete: api.post("/baseapi/platform/wechatApi/setGzhReplyRemove"), // 自动回复删除
    channelsModifySort: api.post("/baseapi/platform/wechatApi/setGzhSortModify"), // 自动回复上下移动
    channelsConfig: api.post("/baseapi/platform/config/setJstConfig"), // 聚水潭对接设置
    channelsAddProduct: api.post("/baseapi/platform/goodsWarehousePush/add"), // 添加仓储同步商品
    channelsDeleteProduct: api.post("/baseapi/platform/goodsWarehousePush/removeData"), // 删除仓储同步商品
    channelsPushOrderList: api.get("/baseapi/platform/goodsWarehousePush/getPushOrderList"), // 获取订单推送列表
    channelshandSyn: api.post("/baseapi/platform/goodsWarehousePush/handSyn"), // 手动同步列表

    synOpenStatus: api.get("/baseapi/platform/goodsWarehousePush/synOpenStatus"), // 获取自动同步状态是否开启
    channelDockingStatus: api.get("/baseapi/platform/config/getShopInfo"), // 获取是否认证成功
    channelsProductList: api.get("/baseapi/platform/goodsWarehousePush/getList"), // 获取同步商品列表

    channelsAdd: api.post("/baseapi/platform/wechatApi/setGzhAccountReply"), // 自动回复保存
    channelsCustomIndex: api.get("/baseapi/platform/wechatApi/getGzhMenu"), // 自定义菜单
    channelsGetUrlConfig: api.get("/baseapi/platform/wechatApi/getUrlConfig"), // 自定义菜单跳转路径（会员H5）
    channelsGetUrlAgentBrandList: api.get("/baseapi/platform/special/getAgentBrand"), // 自定义菜单跳转路径：获取品牌列表（用于代理商H5公众号链接地址拼接）
    channelsCustomAdd: api.post("/baseapi/platform/wechatApi/setGzhMenu"), // 自定义菜单添加
    channelsAppletXcxInfo: api.get("/baseapi/platform/wechatApi/getXcxInfo"), // 新接口小程序授权- 获取
    channelsAppletCommit: api.get("/baseapi/platform/wechatApi/setXcxCodeSubmit"), // 小程序授权- 提交
    channelsAppletSubmitAduit: api.get("/baseapi/platform/wechatApi/setXcxSubmitAduit"), // 小程序授权- 提交审核
    channelsAppletCodePublish: api.get("/baseapi/platform/wechatApi/setXcxCodePublish"), // 小程序授权- 代码发布
    channelsAppletGetQrcode: api.get("/baseapi/platform/wechatApi/getXcxQrcode"), // 小程序授权- 二维码
    channelsGetUserToken: api.get("/baseapi/platform/wechatApi/getXcxAuth"), // 新接小程序授权
    // 过滤器
    // orderNewGetConditions: api.get('/baseapi/platform/order/newGetConditions'),

    // 获取公众号详情
    getGzhInfo: api.get("/baseapi/platform/wechatApi/getGzhInfo"),
    // 重新授权
    getGzhAuth: api.get("/baseapi/platform/wechatApi/getGzhAuth"),

    // 获取小程序详情
    getXcxInfo: api.get("/baseapi/platform/wechatApi/getXcxInfo"),
    // 小程序授权
    getXcxAuth: api.get("/baseapi/platform/wechatApi/getXcxAuth"),
    // 获取小程序码
    getXcxCode: api.get("/baseapi/platform/wechatApi/getXcxCode"),
    // 获取小程序预览二维码
    getXcxQrcode: api.get("/baseapi/platform/wechatApi/getXcxQrcode"),
};

export default apis;
