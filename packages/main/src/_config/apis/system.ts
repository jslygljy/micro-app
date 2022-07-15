import {api, MapleRequestApis} from "maple-request";

const store = {
    systemStoreChangeConfig: api.post("/baseapi/platform/superShop/addEditConfig"),
    systemStoreGetInfo: api.get("/baseapi/platform/superShop/getConfigInfo"),
    systemStoreUpDown: api.post("/baseapi/platform/superShop/upDown"),
};
const generalConf = {
    systemStoreGet: api.get("/baseapi/platform/protocol/get"),
    systemStoreChange: api.post("/baseapi/platform/protocol/add"),
    systemOrderGet: api.get("/baseapi/platform/orderConfig/get"),
    systemOrderChange: api.post("/baseapi/platform/orderConfig/add"),
    systemProductGet: api.get("/baseapi/platform/goodsConfig/get"),
    systemProductChange: api.post("/baseapi/platform/goodsConfig/add"),
};
/* 代理零售配置 */
const agentRetail = {
    /** 获取配置 */
    getRetailConfig: api.get("/baseapi/platform/config/getRetailConfig"),
    /** 保存配置 */
    setRetailConfig: api.post("/baseapi/platform/config/setRetailConfig"),
};
const apis: MapleRequestApis = {
    /* 店铺设置 */
    ...store,
    /* 通用配置 */
    ...generalConf,
    /* 代理零售配置 */
    ...agentRetail,
    /** ****  账号管理 */
    systemAdminIndex: api.get("/baseapi/platform/admin/index"),
    systemAdminGet: api.get("/baseapi/platform/admin/get"),
    systemAdminRemove: api.get("/baseapi/platform/admin/remove"),
    systemAdminDisable: api.get("/baseapi/platform/admin/disable"),
    systemAdminEnable: api.get("/baseapi/platform/admin/enable"),
    systemAdminEdit: api.post("/baseapi/platform/admin/edit"),
    systemAdminResetPassword: api.post("/baseapi/platform/admin/resetPassword"),
    systemAdminAddInfo: api.post("/baseapi/platform/admin/addInfo"),
    /** ****  角色管理 */
    systemRoleIndex: api.get("/baseapi/platform/role/index"),
    systemRoleGetRoleList: api.get("/baseapi/platform/role/getRoleList"),
    systemRoleGet: api.get("/baseapi/platform/role/get"),
    systemRoleAdd: api.post("/baseapi/platform/role/add"),
    systemRoleEdit: api.post("/baseapi/platform/role/edit"),
    systemRoleRemove: api.get("/baseapi/platform/role/remove"),
    systemRolePermissions: api.get("/baseapi/platform/role/permissions"),
    systemRoleEditNodes: api.post("/baseapi/platform/role/editNodes"),

    /** ****  登录日志 */
    systemLogLoginIndex: api.get("/baseapi/platform/log/loginIndex"),
    /** ****  操作日志 */
    systemOperaIndex: api.get("/baseapi/platform/log/opreaIndex"),
    systemOperanewGetConditions: api.get("/baseapi/platform/log/newGetConditions"),

    /** ****  短信物流配置 */
    systemLogMessageNoteGet: api.get("/baseapi/platform/config/noteTrackGetConfig"),
    systemLogMessageNoteSet: api.post("/baseapi/platform/config/noteTrackSetConfig"),
    /** **** 支付配置 */
    systemPayControlGet: api.get("/baseapi/platform/payConfig/get"),
    systemPayControlSet: api.post("/baseapi/platform/payConfig/set"),
    /** **** 消息通知 */
    systemMessageSendGetTemplateList: api.get("/baseapi/platform/msgTemp/getTemplateList"),
    systemMessageSendSetTemplateList: api.post("/baseapi/platform/msgTemp/templateSet"),
    // systemMessageSendSetTemplateList: api.post('/platform/msgTemp/templateSet'),
    /**
     * 线上商城V2.3.7
     */
    // 获取站内信表格数据
    getMessageConfigList: api.get("/baseapi/platform/messageConfig/getMessageConfigList"),
    // 保存站内信配置
    setMessageConfigData: api.post("/baseapi/platform/messageConfig/saveData"),

    // 短信详情
    getMessageShortConfigDetail: api.get("/baseapi/platform/messageShortConfig/getMessageShortConfigDetail"),
    // 配置时间段
    setMessageShortConfigSet: api.post("/baseapi/platform/messageShortConfig/messageShortConfigSet"),
    // 获取短信配置列表
    getMessageShortConfigList: api.get("/baseapi/platform/messageShortConfig/getMessageShortConfigList"),
    // 短信配置开启和禁用
    setMessageShortConfigEdit: api.post("/baseapi/platform/messageShortConfig/messageShortConfigEdit"),
};

export default apis;
