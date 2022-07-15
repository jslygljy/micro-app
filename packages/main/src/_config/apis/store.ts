import {api, MapleRequestApis} from "maple-request";

const template = {
    templateAdd: api.post("/baseapi/platform/delivery/templateAdd"),
    templateEdit: api.post("/baseapi/platform/delivery/templateEdit"),
    templateDetail: api.get("/baseapi/platform/delivery/templateDetail"),
    templateExpressList: api.get("/baseapi/platform/delivery/getExpress"),
    templateExpress: api.get("/baseapi/platform/delivery/getExpress"),
};
const apis: MapleRequestApis = {
    ...template,
    setUserCenter: api.post("/baseapi/platform/shop/setUserCenter"), // 设置个人中心装修
    getUserCenter: api.get("/baseapi/platform/shop/getUserCenter"), // 获取个人中心装修
    getProductShareDetail: api.get("/baseapi/platform/protocol/getDetail"), // 获取商品分享
    setProductShareDetail: api.post("/baseapi/platform/protocol/addDetail"), // 设置商品分享
    offlineCenterConfig_get: api.get("/baseapi/platform/offlineCenterConfig/get"), // 获取门店个人中心配置
    offlineCenterConfig_set: api.post("/baseapi/platform/offlineCenterConfig/set"), // 设置门店个人中心配置
    offlineCenterConfig_reset: api.get("/baseapi/platform/offlineCenterConfig/reset"), // 重置门店个人中心配置

    setIndexConfig: api.post("/baseapi/platform/indexConfig/add"), // 添加首页弹窗(编辑)
    setIndexConfigDetail: api.get("/baseapi/platform/indexConfig/detail"), // 首页弹窗(详情)
    setMemberConfig: api.post("/baseapi/platform/memberConfig/add"), // 添加会员专区装修配置)
    removeMemberConfigDetail: api.get("/baseapi/platform/memberConfig/remove"), // 会员专区装修配置删除
    setMemberConfigDetail: api.get("/baseapi/platform/memberConfig/detail"), // 会员专区装修配置获取
    setGoodsDetailsStyleConfig: api.post("/baseapi/platform/style/setGoodsDetailsStyleConfig"), // 设置商品详情页装修配置
    getGoodsDetailsStyleConfig: api.get("/baseapi/platform/style/getGoodsDetailsStyleConfig"), // 获取商品详情页装修配置
    getCustomizePage: api.get("/baseapi/platform/theme/getCustomizePage"), // 获取悬浮窗配置-自定义页面列表
    getFloatingWindow: api.get("/baseapi/platform/floatingWindow/getConfig"), // 获取悬浮窗配置
    setFloatingWindow: api.post("/baseapi/platform/floatingWindow/setConfig"), // 悬浮窗配置
    // -----------------------------------------------S 热搜词 --------------------------------------//
    /** * 热搜词-列表  ** */
    store_hotword_list: api.get("/baseapi/platform/hotsearch/index"),
    /** * 热搜词-删除  ** */
    store_hotword_remove: api.get("/baseapi/platform/hotsearch/delete"),
    /** * 热搜词-详情 ** */
    store_hotword_details: api.get("/baseapi/platform/hotsearch/get"),
    /** * 热搜词-新增 ** */
    store_hotword_add: api.post("/baseapi/platform/hotsearch/add"),
    /** * 热搜词-编辑 ** */
    store_hotword_edit: api.post("/baseapi/platform/hotsearch/update"),
    /** * 热搜词-推荐打开 ** */
    store_hotword_recommendOpen: api.get("/baseapi/platform/hotsearch/recommendOpen"),
    /** * 热搜词-推荐关闭 ** */
    store_hotword_recommendClose: api.get("/baseapi/platform/hotsearch/recommendClose"),
    // -----------------------------------------------E 热搜词 --------------------------------------//
    // -----------------------------------------------S推荐商品--------------------------------------//
    // 获取推荐配置
    store_recommend_getConfig: api.get("/baseapi/platform/recommend/getConfig"),
    // 保存推荐配置
    store_recommend_saveConfig: api.post("/baseapi/platform/recommend/addEditConfig"),
    // 获取商品列表
    store_recommend_getGoodsList: api.get("/baseapi/platform/recommend/getGoodsList"),
    // 获取推荐商品列表
    store_recommend_getList: api.get("/baseapi/platform/recommend/getList"),
    // 获取推荐商品分类列表 （启用的）
    store_recommend_getCategory: api.get("/baseapi/platform/recommend/getCategory"),
    // 添加推荐商品
    store_recommend_add: api.post("/baseapi/platform/recommend/add"),
    // 移除推荐商品
    store_recommend_remove: api.post("/baseapi/platform/recommend/remove"),
    // 更新推荐商品
    store_recommend_edit: api.post("/baseapi/platform/recommend/edit"),
    // 获取推荐商品排序配置
    store_recommend_getsort: api.get("/baseapi/platform/recommend/getsort"),
    // 页面装修模板列表
    store_mallpage_themeList: api.get("/baseapi/platform/theme/themeList"),
    // 页面装修新增页面
    store_mallpage_addPage: api.post("/baseapi/platform/theme/addPage"),
    // 页面装修改模板
    store_mallpage_changePageTemp: api.post("/baseapi/platform/theme/changePageTemp"),
    /** * 页面装修-删除  ** */
    store_mallPage_remove: api.post("/baseapi/platform/theme/removePage"),
    // 页面装修发布 下架
    store_mallpage_editPage: api.post("/baseapi/platform/theme/editPage"),
    // -----------------------------------------------E推荐商品--------------------------------------//
    // 快递列表
    store_delivery_expressList: api.get("/baseapi/platform/delivery/expressList"),
    // 快递列表
    store_delivery_expressChangeStatus: api.post("/baseapi/platform/delivery/expressChangeStatus"),
    // 运费模板列表
    store_delivery_templateList: api.get("/baseapi/platform/delivery/templateList"),
    // 设置默认模板
    store_delivery_templateDefault: api.post("/baseapi/platform/delivery/templateDefault"),
    // 删除模板
    store_delivery_templateDel: api.post("/baseapi/platform/delivery/templateDel"),
    // 获取自提列表
    store_delivery_addressList: api.get("/baseapi/platform/delivery/addressList"),
    // 获取自提开关状态
    store_delivery_addressSelfStatus: api.get("/baseapi/platform/delivery/addressSelfStatus"),
    // 自提-启用
    store_delivery_addressEnable: api.post("/baseapi/platform/delivery/addressEnable"),
    // 自提-新增
    store_delivery_addressAdd: api.post("/baseapi/platform/delivery/addressAdd"),
    // 自提-编辑
    store_delivery_addressEdit: api.post("/baseapi/platform/delivery/addressEdit"),
    // 自提-禁用
    store_delivery_addressDisable: api.post("/baseapi/platform/delivery/addressDisable"),
    // 自提-删除
    store_delivery_addressDel: api.post("/baseapi/platform/delivery/addressDel"),
    // 设置默认自提
    store_delivery_addressDefault: api.post("/baseapi/platform/delivery/addressDefault"),
    // 开启自提开关状态
    store_delivery_addressOpenSelf: api.post("/baseapi/platform/delivery/addressOpenSelf"),
    // 关闭自提开关状态
    store_delivery_addressOffSelf: api.post("/baseapi/platform/delivery/addressOffSelf"),
    // 获取物流选择
    store_delivery_getExpress: api.get("/baseapi/platform/delivery/getExpress"),
    // 设置物流选择
    store_delivery_setExpress: api.post("/baseapi/platform/delivery/setExpress"),
    // 获取配送或不配送区域
    store_delivery_getConfig: api.get("/baseapi/platform/delivery/getConfig"),
    // 设置配送或不配送区域
    store_delivery_setConfig: api.post("/baseapi/platform/delivery/setConfig"),
    // 同城配送列表
    store_sameCity_list: api.get("/baseapi/platform/deliveryAddress/index"),
    // 同城配送新增
    store_sameCity_add: api.post("/baseapi/platform/deliveryAddress/addData"),
    // 同城配送详情
    store_sameCity_detail: api.get("/baseapi/platform/deliveryAddress/getOne"),
    // 同城配送删除
    store_sameCity_remove: api.post("/baseapi/platform/deliveryAddress/remove"),
    // 同城配送设置默认
    store_sameCity_setDefault: api.post("/baseapi/platform/deliveryAddress/isDefault"),
    /* 获取页面 */
    getKSHPageList: api.get("/baseapi/platform/theme/pageList"),
    setPosterSharing: api.post("/baseapi/platform/common/setPosterSharing"),

    // -----------------------------------------------电子烟行业模板--------------------------------------//
    // 获取行业模板列表
    getPndustryTemplate: api.get("/baseapi/platform/industryTemp/list"),
    // 选择行业模板
    setPndustryTemplate: api.post("/baseapi/platform/industryTemp/choose"),
    // 保存产品介绍配置
    savePndustryTemplate: api.post("/baseapi/platform/product/add"),
    // 获取产品介绍配置信息
    getPndustryTemplatePostData: api.get("/baseapi/platform/product/index"),
    // -----------------------------------------------入会礼装修--------------------------------------//
    // 设置装修
    setJoinGift: api.post("/baseapi/platform/joinGift/setConfig"),
    // 获取装修
    getJoinGift: api.get("/baseapi/platform/joinGift/getConfig"),

    // ----------------------------------------------- 2.3.5新增 会员专区装修api --------------------------------------//
    // 会员专区装修保存
    saveMemberConfig: api.post("/baseapi/platform/memberConfig/setData"),
    // 会员专区装修发布
    publishMemberConfig: api.get("/baseapi/platform/memberConfig/release"),
    // 会员专区装修-恢复默认
    resetMemberConfigOnline: api.get("/baseapi/platform/memberConfig/recoveryDefault"),
    // 会员专区装修-获取详情
    getMemberConfig: api.get("/baseapi/platform/memberConfig/detailNew"),
    // 获取支付成功页面配置
    getPaySucceed: api.get("/baseapi/platform/PageConfig/getInfo"),
    // 设置支付成功页配置
    setPaySucceed: api.post("/baseapi/platform/PageConfig/setData"),
    // -----------------------------------------------门店管理 正官庄3.0新增--------------------------------------//
    setStoreAdd: api.post("/baseapi/platform/store/storeAdd"), // 门店新增
    setStoreDelete: api.post("/baseapi/platform/store/storeDelete"), // 门店删除
    getStoreList: api.get("/baseapi/platform/store/storeList"), // 门店列表
    getWxaCode: api.get("/baseapi/platform/store/getWxaCode"), // 查看小程序码
    getStoreShareUrl: api.get("/baseapi/platform/store/shareUrl"), // 小程序分享链接
    // -----------------------------------------------页面链接-------------------------------------//
    getActivityList: api.get("/baseapi/platform/statistics/activity/getActivityList"), // 获取活动营销列表
    setWebSecurity: api.post("/baseapi/platform/config/setWebSecurity"), // 设置页面链接安全模式
    getWebSecurity: api.get("/baseapi/platform/config/getWebSecurity"), // 获取页面链接安全模式
    createShortUrl: api.post("/baseapi/platform/common/createShortUrl"), // 生成短链
};
export default apis;
