import {api, MapleRequestApis} from "maple-request";

const product = {
    old_retailProductList: api.get("/platform/agent/retailProfit/getRetailProfitGoods"), // 零售商品列表
    old_getRetailProfitConfig: api.get("/platform/config/getRetailProfitConfig"), // 获取零售设置页面
    old_setRetailProfitConfig: api.post("/platform/config/setRetailProfitConfig"), // 保存零售设置
    old_addRetailProfitGoods: api.post("/platform/agent/retailProfit/addRetailProfitGoods"), // 提交新增零售商品
    old_editRetailProfitGoods: api.post("/platform/agent/retailProfit/editRetailProfitGoods"), // 编辑零售商品
    old_delRetailProfitGoods: api.post("/platform/agent/retailProfit/delRetailProfitGoods"), // 删除零售商品
    old_getRetailLogs: api.get("/platform/agent/retailProfit/getLogs"), // 获取零售操作日志
    old_proxyProductList: api.get("/platform/agent/agentGoods/index"), // 代理商品列表
    /* =========================== */
    proxyProductGetDetail: api.get("/platform/agent/agentGoods/detail"), // 代理商品列表
    proxyProductAdd: api.post("/platform/agent/agentGoods/add"), // 代理商品列表
    proxyProductEdit: api.post("/platform/agent/agentGoods/edit"), // 代理商品列表
    proxyClassify: api.get("/platform/agent/agentCategory/index"), // 代理分类
    proxyClassifyRemove: api.post("/platform/agent/agentCategory/index"), // 代理删除
    proxyClassifyAdd: api.post("/platform/agent/agentCategory/add"), // 代理删除
    proxyBrandSelectList: api.get("/platform/agent/agentBrand/brandList"), // 可用品牌列表
    proxyProductGetCateTree: api.get("/platform/agent/agentCategory/index"), // 可用品牌列表
    proxyProductLogs: api.get("/platform/agent/agentGoods/getLogs"), // 商品日志
    proxyProductGoodsHandle: api.post("/platform/agent/agentGoods/shelve"),
    proxyProductUpdateProductStock: api.post("/platform/agent/agentGoods/updateProductStock"),
    proxyProductUpdateProductPrice: api.post("/platform/agent/agentGoods/updateProductPrice"),
    proxyPriceAutoList: api.get("/platform/agent/agentGoods/priceAuto"),
    proxyPriceAutoAdd: api.post("/platform/agent/agentGoods/priceAutoAdd"),
    proxyPriceAutoRemove: api.get("/platform/agent/agentGoods/removes"),
    proxyPriceAutoDetail: api.get("/platform/agent/agentGoods/goodsPriceGet"),
    proxyGoodsSearch: api.get("platform/agent/agentGoods/goodsSearch"),
};
const apis: MapleRequestApis = {
    ...product,
    proxyBrandList: api.get("/platform/agent/agentBrand/index"), // 代理品牌
    proxyBrandSelectDefault: api.get("/platform/agent/agentBrand/selectDefault"), // 默认选中
    proxyBrandCardDescribe: api.get("/platform/agent/agentBrand/getCardDescribe"), // 代理品牌  获取展示设置
    proxyBrandAddress: api.get("/app/index/getRegion"), // 代理品牌  获取地址
    proxyBrandAdd: api.post("/platform/agent/agentBrand/add"), // 代理品牌  添加品牌
    proxyBrandEdit: api.post("/platform/agent/agentBrand/edit"), // 代理品牌  编辑品牌
    // proxyBrandEdit2: (id) => api.post('/baseapi/platform/agent/agentBrand/edit'), // 代理品牌  编辑品牌
    proxyBrandDetail: api.get("/platform/agent/agentBrand/get"), // 代理品牌  编辑获取品牌详情

    proxyBrandTabList: api.get("/platform/agent/agentBrand/brandList"), // 代理列表筛选项
    // 品牌下拉列表
    proxyAgentBrandBrandList: api.get("/platform/agent/agentBrand/brandList"),

    proxyLevels: api.get("/baseapi/platform/agent/agentLevel/levelInfo"), // 获取等级列表（无需权限）

    // 筛选条件
    proxyLevelListFilters: api.get("/baseapi/platform/agent/agentLevel/newGetConditions"), // 代理等级 - 等级列表
    proxyLevelConditionsFilters: api.get("/baseapi/platform/agent/agentInviteConfig/newGetConfigConditions"), // 代理等级 - 升级条件
    proxyPerformanceSettlementList: api.get("/platform/agent/topTeamAchievement/settlementList"), // 激励管理 - 顶级团队结算 - 列表数据
    proxyPerformanceSettlementDetail: api.get("/platform/agent/topTeamAchievement/settlementDetail"), // 激励管理 - 顶级团队结算 - 结算详情（查看汇总、结算明细）
    proxyPerformanceSettlementSummaryList: api.get("/platform/agent/topTeamAchievement/summaryList"), // 激励管理 - 顶级团队结算 - 查看汇总列表
    proxyPerformanceSettlementProfit: api.get("/platform/agent/topTeamAchievement/settlementIndex"), // 激励管理 - 顶级团队结算 - 结算明细列表
    proxyAchievementRules: api.get("/platform/agent/topTeamAchievement/getAchievementRules"), // 激励管理 - 获取顶级团队业绩奖
    proxyAchievementRulesSetting: api.post("/platform/agent/topTeamAchievement/setAchievementRules"), // 激励管理 - 设置顶级团队业绩奖

    proxyStimulateSameRecommendFilters: api.get("/baseapi/platform/agent/agentInspire/newGetConditions"), // 激励管理 - 同级推荐激励
    proxyStimulateDifferentRecommendFilters: api.get("/baseapi/platform/agent/agentInspire/newGetConditions"), // 激励管理 - 越级推荐激励
    proxyRecruitSettingFilters: api.get("/baseapi/platform/agent/agentInviteConfig/newGetConfigConditions"), // 代理招募 - 邀请设置

    proxyLevelUpgradeFilters: api.get("/baseapi/platform/agent/Upgrade/newGetConditions"), // 代理等级升级审核过滤条件
    proxyLevelLogFilters: api.get("/baseapi/platform/agent/agent/newGetLogConditions"), // 代理等级  log过滤条件

    proxyAgentListFilters: api.get("/baseapi/platform/agent/agent/newGetConditions"), // 代理商列表过滤条件
    proxyAgentLogFilters: api.get("/baseapi/platform/agent/agent/newGetLogConditions"), // 代理商log过滤条件

    proxyStimulateListFilters: api.get("/baseapi/platform/agent/profit/newGetConditions"), // 激励管理列表过滤条件
    proxyStimulateTeamFilters: api.get("/baseapi/platform/agent/teamTask/newGetConditions"), // 激励管理团队激励过滤条件

    proxyNewGetConditions: api.get("/baseapi/platform/agent/agentPlatform/newGetConditions"), // 总部流水
    proxyGetConditions1: api.get("/baseapi/platform/agent/agentPlatform/newGetConditions1"), // 打款记录
    proxyaGentInviteConfigConditions: api.get("/baseapi/platform/agent/agentInviteConfig/newGetConditions"), // 加入审核
    // 获取代理标签详情
    proxyAgentLevelTagDetail: api.get("/platform/agent/agentLevel/levelTagDetail"),
    // 获取代理标签
    proxyAgentLevelTag: api.get("/platform/agent/agentLevel/getLevelTag"),
    // 等级标签通过
    proxyeditAgentLevelTag: api.get("/platform/agent/agentLevel/editLevelTag"),
    // 代理标签添加
    proxysetAgentLevelupLevel: api.post("/platform/agent/agentLevel/setLevelTag"),
    // 代理等级列表
    proxyAgentLevelList: api.get("/platform/agent/agentLevel/list"),
    // 设置升级等级是否需要全额
    proxyAgentLevelupLevel: api.post("/platform/agent/agentLevel/setLevelUpgradeIsFullPay"),
    // 获取代理等级升级是否全额支付
    proxyLevelUpgradeIsFullPay: api.get("/platform/agent/agentLevel/getLevelUpgradeIsFullPay"),
    // 总部邀请列表
    proxyAgentInviteConfig: api.get("/platform/agent/agentInviteConfig/head"),
    // 添加总部邀请
    proxyAgentInvitegetConfig: api.post("/platform/agent/agentInviteConfig/head"),
    // 修改总部邀请
    proxyAgentInvitegeteditHead: api.post("/platform/agent/agentInviteConfig/editHead"),
    // 总部邀请详情
    proxyAgentInvitegetheadDetail: api.get(
        "https://yapi.syy.dongchali.cn/mock/66/platform/agent/agentInviteConfig/headDetail",
    ),
    // 删除总部邀请
    proxyAgentInvitegethead: api.delete("/platform/agent/agentInviteConfig/head"),
    proxyGradeConfig: api.get("/baseapi/platform/twitter/getConfig"), // 代理等级列表
    // 货品列表
    proxyAgentLevelProdusts: api.get("platform/agent/agentLevel/produsts"),
    // 等级新建
    proxyAgentLevelAddLevel: api.post("platform/agent/agentLevel/addLevel"),
    // sass等级新建
    proxyAgentLevelnewAddLevel: api.post("/platform/agent/agentLevel/newSaveLevel"),
    // 添加套餐
    proxyAgentLevelAdd: api.post("platform/agent/agentLevel/add"),
    // 等级详情
    proxyAgentLevelViewLevel: api.get("/platform/agent/agentLevel/viewLevel"),
    // 套餐详情
    proxyAgentLevelDetail: api.get("/platform/agent/agentLevel/detail"),
    // 等级下拉列表
    proxyAgentLevelGetLevelSelect: api.get("/platform/agent/agentLevel/getLevelSelect"),
    // 修改等级标签
    proxyAgenteditLevelTag: api.post("/platform/agent/agentLevel/editLevelTag"),
    // 获取直属下级-受邀人列表
    proxyAgentGetInvitee: api.get("/platform/agent/agent/getInvitee"),
    // 激励明细列表
    proxyProfitIndex: api.get("/platform/agent/profit/index"),
    // 变更记录列表
    proxyAgentGetLogs: api.get("/platform/agent/agent/getLogs"),
    // sassid变更记录列表
    proxynewAgentGetLogs: api.get("/platform/agent/agent/newGetAgentLog"),
    // 编辑等级
    proxyAgentLevelEditLevel: api.post("/platform/agent/agentLevel/editLevel"),
    // 编辑套餐
    proxyAgentLevelEdit: api.post("/platform/agent/agentLevel/edit"),
    // proxyGradeLogCondition: api.get('/baseapi/platform/agent/agent/getLogCondition'), // 代理等级变更记录
    // 升级审核列表
    proxyUpgradeIndex: api.get("/platform/agent/Upgrade/index"),
    // 升级审核-审核通过
    proxyUpgradePass: api.get("/platform/agent/Upgrade/pass"),
    // 获取代理标签
    proxyLevelTag: api.get("/platform/agent/agentLevel/getLevelTag"),

    // 代理类目
    proxyAgentCategoryAdd: api.post("/platform/agent/agentCategory/add"), // 代理类目新增
    proxyAgentCategoryEdit: api.post("/platform/agent/agentCategory/edit"), // 代理类目编辑
    proxyAgentCategoryGet: api.get("/platform/agent/agentCategory/get"), // 代理类目单条查询
    proxyAgentCategoryRemove: api.post("/platform/agent/agentCategory/remove"), // 代理类目单条删除
    proxyAgentCategoryPage: api.get("/platform/agent/agentCategory/index"), // 代理类目列表

    // -------------------代理库存模块开始 ------------------ //
    proxyAgentStockPage: api.get("/platform/agent/agentStock/index"), // 云库存列表
    proxyInventoryWarning: api.get("/platform/agent/agentStock/inventoryWarning"), // 代理库存预警
    proxyAgentStockList: api.get("/platform/agent/agentStock/getAgentStockList"), // 库存详情
    proxyAgentGoodsList: api.get("/platform/agent/agentStock/agentGoodsList"), // 代理商库存列表
    proxyAgentGoodsAgentList: api.get("/platform/agent/agentStock/goodsAgentList"), // 代理商查询
    proxyAgentAdjustStock: api.get("/platform/agent/agentStock/adjustStock"), // 调整库存 - 确定接口
    proxyAgentGetStockDetail: api.get("/platform/agent/agentStock/getStockDetail"), // 调整库存-商品详情
    proxyAgentGetAgentDetail: api.get("/platform/agent/agentStock/getAgentDetail"), // 代理商库存-详情
    proxyAgentStockChangeRecord: api.get("/platform/agent/agentStock/changeRecord"), // 代理商库存-变更记录
    proxyAgentStockUpdStock: api.post("/platform/agent/agentStock/updStock"), // 代理商库存-多个货品库同同时保存
    // ---------------------代理库存呢模块结束-------------------------------- //

    proxyAgentSearchList: api.get("/platform/agent/agent/findAgent"), // 获取同品牌的代理
    // 代理商列表
    proxyAgentIndex: api.get("/platform/agent/agent/index"),
    // sassid代理商列表
    proxyAgentIndexsass: api.get("/platform/agent/agent/getAgentList"),
    // sassid代理商列表详情
    proxyAgentIndexDetail: api.get("/platform/agent/agent/getAgentDetail"),
    // 代理商详情
    proxyAgentDetail: api.get("/platform/agent/agent/detail"),
    // 变更等级
    proxyAgentChangeLevel: api.post("/platform/agent/agent/changeLevel"),
    // 变更邀请人
    proxyAgentChangeInviter: api.post("/platform/agent/agent/changeInvite"),
    // 变更上级
    proxyAgentChangeSup: api.post("/platform/agent/agent/changeSup"),
    // 变更授权期
    proxyAgentChangeAuthTime: api.post("/platform/agent/agent/changeAuthTime"),
    // 变更手机号
    proxyAgentChangechangeMobile: api.post("/platform/agent/agent/changeMobile"),
    // 激励类型下拉列表
    proxyProfitSearchList: api.get("/platform/agent/profit/searchList"),
    // 代理激励配置
    proxyAgentInspireGetConfig: api.get("/platform/agent/agentInspire/getConfig"),
    // 设置代理激励配置
    proxyAgentInspireSetConfig: api.post("/platform/agent/agentInspire/setConfig"),
    // 团队激励列表
    proxyTeamTaskIndex: api.get("/platform/agent/teamTask/index"),
    proxyAgentGoodsGetBaseList: api.get("/platform/agent/agentGoods/getBaseList"),
    // 团队激励 新增任务
    proxyTeamTaskAdd: api.post("/platform/agent/teamTask/add"),
    // 任务详情
    proxyTeamTaskTaskDetail: api.get("/platform/agent/teamTask/taskDetail"),
    proxyStimulateEditTask: api.post("/baseapi/platform/agent/teamTask/edit"), // 团队激励 编辑任务
    proxyStimulateGetTask: api.get("/baseapi/platform/agent/teamTask/get"), // 团队激励列表
    proxyStimulateTeamTaskDetail: api.get("/baseapi/platform/agent/teamTask/teamTaskDetail"), // 团队激励列表
    // 加入审核列表
    proxyAgentInviteConfigIndex: api.get("/platform/agent/agentInviteConfig/index"),
    // 加入审核-审核通过
    proxyAgentPass: api.post("/platform/agent/agent/pass"),
    // 加入审核-审核驳回
    proxyAgentReject: api.post("/platform/agent/agent/reject"),
    // 换货订单-驳回
    exchangeAgentOrderRejct: api.post("/platform/agent/agentOrder/reject"),
    // 邀请信息获取
    proxyAgentInviteConfigGetData: api.get("/platform/agent/agentInviteConfig/getData"),
    // 邀请设置
    proxyAgentInviteConfigSetData: api.post("/platform/agent/agentInviteConfig/setData"),
    proxyFinanceChangeStatus: api.get("/platform/agent/agentPlatform/account"), // 财务 打款状态修改
    // 区域服务商
    proxyAgentAreaGetConditions: api.get("/baseapi/platform/agent/earning/areaGetConditions"), // 获取结算列表搜索
    proxyAgentAccountIndex: api.get("/platform/agent/earning/accountIndex"), // 获取结算列表
    proxyAgentAccountGet: api.get("/platform/agent/earning/accountGet"), // 获取结算详情
    proxyAgentAreaGet: api.get("/platform/agent/agentArea/get"), // 获取结算单数据
    proxyAgentAreaAdd: api.post("/platform/agent/agentArea/add"), // 结算-确认结算
    proxyAgentAreaGetNum: api.get("/platform/agent/agentArea/getNum"), // 获取服务商数量
    proxyFacilitatorGetInfo: api.get("/platform/agent/facilitator/getInfo"), // 服务商获取
    proxyFacilitatorSetInfo: api.post("/platform/agent/facilitator/setInfo"), // 服务商设置
    proxyFacilitatorFilters: api.get("/platform/agent/facilitator/newGetServiceConditions"), // 服务商列表过滤
    proxyFacilitatorList: api.get("/platform/agent/facilitator/list"), // 服务商列表
    proxyFacilitatorEarningFilters: api.get("/platform/agent/earning/getConditions"), // 服务商收益列表过滤
    proxyFacilitatorEarningList: api.get("/platform/agent/earning/index"), // 服务商收益列表
    // 服务商区域选择列表
    proxyFacilitatorGetRegions: api.get("/platform/agent/facilitator/getRegions"),
    // 设为服务商
    proxyFacilitatorAdd: api.post("/platform/agent/facilitator/add"),
    proxyFacilitatorCancel: api.post("/platform/agent/facilitator/cancel"), // 取消服务商
    proxyFacilitatorDetail: api.get("/platform/agent/facilitator/getServiceDetail"), // 服务商详情
    proxyFacilitatorAbout: api.get("/platform/agent/facilitator/getFacilitatorData"), // 上级/下级服务商
    proxyFacilitatorLog: api.get("/platform/agent/facilitator/getChangeLog"), // 设为服务商
    // 服务商类型下拉列表
    proxyFacilitatorGetAreaInfo: api.get("/platform/agent/facilitator/getAreaInfo"),
    getAgentOrderGrand: api.get("/baseapi/platform/agent/agentOrder/getGrand"), // 获取采购订单

    /** ****************订单**************** */
    proxyFinanceFlowList: api.get("/platform/agent/agentPlatform/index"),
    getOrderProxyDetail: api.get("/platform/agent/agentOrder/detail"), // 订单详情

    getProxyOrderStock: api.get("/platform/agent/agentOrder/getGrand"), // 获取采购订单
    getTakeOrderList: api.get("platform/agent/agentOrder/getTakeOrderList"), // 提货订单
    proxyFinanceLogList: api.get("/platform/agent/agentPlatform/payment"), // 财务 打款记录
    proxyFinanceAgentLogList: api.get("/platform/agent/agentPlatform/paymentRecord"), // 财务 代理打款记录
    order_purchaseOrder_passOrReject: api.get("platform/agent/agentOrder/subordinateAffirm"), // 采购订单审核操作
    order_affirmCloudOrder_passOrReject: api.post("/platform/agent/agentOrder/affirmCloudOrder"), // 云库存订单确认操作
    get_CloudOrderMoney: api.post("/platform/agent/agentOrder/payCloudOrderMoney"), // 云库存订单付款操作
    affirmExchangeCloudOrder: api.post("/platform/agent/agentOrder/affirmExchangeCloudOrder"), // 换货列表云库存确认
    payExchangeCloudOrderMoney: api.post("/platform/agent/agentOrder/payExchangeCloudOrderMoney"), // 换货列表云库存付款
    // 提货订单通过/驳回
    agentOrder_affirm: api.get("/platform/agent/agentOrder/affirm"),
    changeFreight: api.post("/platform/agent/agentOrder/changeFreight"), // 调整运费
    getMoney: api.get("/platform/agent/agentOrder/getMoney"), // 确认付款
    getInvestmentMoney: api.get("/platform/agent/agentOrder/getInvestmentMoney"), // 招商订单付款
    updateTracki: api.post("/platform/agent/agentOrder/updateTrack"), // 编辑物流
    getRowLogisticsList: api.get("/platform/order/getDeliveryLogi"),
    carryUp: api.post("/platform/agent/agentOrder/carryUp"), // 确认自提
    getExchange: api.get("/platform/agent/agentOrder/getExchange"), // 换货订单
    isGet: api.post("/platform/agent/agentOrder/isGet"), // 签收退货
    getFirst: api.get("platform/agent/agentOrder/getFirst"), // 招商订单
    orderLogAll: api.get("/platform/agent/agentOrder/orderLogAll"), // 订单日志列表-全部
    proxyOrderDelivery: api.post("/platform/agent/agentOrder/orderDelivery"), // 发货
    proxyaffirmOrder: api.post("/platform/agent/agentOrder/affirmOrder"), // 确认订单
    proxysubordinateAffirmSaas: api.get("/platform/agent/agentOrder/subordinateAffirmSaas"), // 驳回订单
    proxyOrderviewTrack: api.get("/platform/agent/agentOrder/viewTrack"),
    getProxyLogistics: api.get("/baseapi/platform/order/getLogistics"),
    getProxyRtailOrderStock: api.get("/baseapi/platform/retailOrder/index"), // 获取代理零售订单列表
    getReatilOrderProxyDetail: api.get("/baseapi/platform/retailOrder/detail"), // 获取代理零售订单详情
    retailOrder_getForwarding: api.get("/platform/agent/retailOrder/getForwarding "), // 获取转代发设置
    retailOrder_setForwarding: api.post("/platform/agent/retailOrder/setForwarding"), // 设置转代发配置
    retailOrder_reject: api.post("/baseapi/platform/retailOrder/reject"), // 转代发驳回
};
export default apis;
