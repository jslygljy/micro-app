import {api, MapleRequestApis} from "maple-request";

const memberDetail = {
    memberDetailIntType: api.get("/baseapi/platform/member/integralType"), // 积分类型下拉
    memberDetailProfitSum: api.get("/baseapi/platform/member/profitSum"), // 收益汇总
    memberDetailStatus: api.get("/baseapi/platform/order/platform/order/getStatusList"), // 获取订单状态
    memberDetailSub: api.get("/baseapi/platform/member/detail"), // 会员详情
    memberDisableSub: api.post("/baseapi/platform/member/disable"), // 禁用会员
    memberEnableSub: api.post("/baseapi/platform/member/enable"), // 启用会员
    memberDetailSubList: api.get("/baseapi/platform/member/subList"), // 下级会员列表
    memberDetailExportSubList: api.get("/baseapi/platform/export/subList"), // 会员管理-会员详情-导出下级
    memberDetailWithdraw: api.get("/baseapi/platform/withdraw/index"), // 提现列表
    memberDetailWalletFlow: api.get("/baseapi/platform/memberProfit/walletFlowTwo"), // 钱包流水列表
    memberDetailIntFlow: api.get("/baseapi/platform/member/integralRecord"), // 积分记录列表
    memberDetailLog: api.get("/baseapi/platform/member/log"), // 用户日志列表
    memberDetailOrderList: api.get("/baseapi/platform/member/orderList"), // 用户订单列表
    memberDetailRetail: api.get("/baseapi/platform/memberProfit/retailIndex"), // 零售收益
    memberExportRetailProfitDetail: api.get("/baseapi/platform/export/retailProfitDetail"), // 零售收益
    memberDetailInvestment: api.get("/baseapi/platform/memberProfit/investmentIndex"), // 招商收益
    memberExportInvestmentProfitDetail: api.get("/baseapi/platform/export/investmentProfitDetail"), // 招商收益
    memberDetailTeam: api.get("/baseapi/platform/memberProfit/teamIndex"), // 团队收益
    memberExportTeamProfitDetail: api.get("/baseapi/platform/export/teamProfitDetail"), // 团队收益
    memberDetailTrain: api.get("/baseapi/platform/memberProfit/cultureIndex"), // 培养收益
    memberExportCultureProfitDetail: api.get("/baseapi/platform/export/cultureProfitDetail"), // 培养收益
    memberDetailTutorship: api.get("/baseapi/platform/memberProfit/coachIndex"), // 辅道收益
    memberExportCoachProfitDetail: api.get("/baseapi/platform/export/coachProfitDetail"), // 辅道收益
    memberDetailShareholderMonth: api.get("/baseapi/platform/memberProfit/shareHolderMonthIndex"), // 股东合伙人收益(月结)
    memberExportShareholderPartnerProfitDetail: api.get("/baseapi/platform/export/shareholderPartnerProfitDetail"), // 股东合伙人收益(月结)
    memberDetailShareholderTime: api.get("/baseapi/platform/memberProfit/shareHolderIndex"), // 股东合伙人收益(实时)
    memberDetailArea: api.get("/baseapi/platform/memberProfit/areaIndex"), // 区域合伙人收益
    memberExportAreaPartnerProfitDetail: api.get("/baseapi/platform/export/areaPartnerProfitDetail"), // 区域合伙人收益
    memberBuyProfit: api.get("/baseapi/platform/memberProfit/sellIndex"), // 卖货收益
    memberExportBuyProfit: api.get("/baseapi/platform/export/sellIndex"), // 卖货收益导出
    memberProfit_liveIndex: api.get("/baseapi/platform/memberProfit/liveIndex"), // 直播收益
    memberExportLiveProfitDetail: api.get("/baseapi/platform/export/liveProfitDetail"), // 直播收益
    memberProfit_otherIndex: api.get("/baseapi/platform/memberProfit/otherIndex"), // 其他收益
    memberExportOtherProfitDetail: api.get("/baseapi/platform/export/otherProfitDetail"), // 其他收益
    memberProfit_walletCollection: api.get("/baseapi/platform/memberProfit/walletCollection"), // 钱包流水汇总
};

const goldFlow = {
    goldLogType: api.get("/baseapi/platform/goldLog/getType"), // 金币流水类型
    goldLogList: api.get("/baseapi/platform/goldLog/index"), // 金币流水列表
};
/**
 * 结算配置
 */
const settleAcount = {
    setSettleAccountConfig: api.post("/baseapi/platform/settlementConfig/setConfig"), // 设置配置
    getSettleAccountConfig: api.get("/baseapi/platform/settlementConfig/getConfig"), // 获取配置
    getSettleAccountLog: api.get("/baseapi/platform/settlementConfig/getLog"), // 获取配置修改记录
    getAdminListSettlementConfig: api.get("/baseapi/platform/settlementConfig/getAdminList"), // 获取后台用户列表
};
const apis: MapleRequestApis = {
    ...memberDetail,
    ...goldFlow,
    ...settleAcount,
    platformMemberCreate: api.post("/baseapi/platform/member/create"), // 新建会员
    platformMemberIndex: api.get("/baseapi/platform/member/index"), // 会员管理列表
    platformExportMember: api.get("/baseapi/platform/export/member"), // 会员管理列表
    platformMemberGet: api.get("/baseapi/platform/member/get"), // 会员详情
    platformMembernewGetConditions: api.get("/baseapi/platform/member/newGetConditions"), // 会员管理搜索
    platformMembernewIntegral: api.get("/baseapi/platform/search/newIntegral"), // 会员管理积分搜索
    platformMembernewGetProfitConditions: api.get("/baseapi/platform/member/newGetProfitConditions"), // 会员管理消费搜索
    platformMemberChangeLevel: api.post("/baseapi/platform/member/setLevel"), // 修改等级
    platformMemberChangeBalance: api.post("/baseapi/platform/member/changeBalance"), // 修改余额
    platformMemberSetSuperior: api.post("/baseapi/platform/member/setSuperior"), // 修改上级
    platformGetsimpleIndex: api.get("/baseapi/platform/member/simpleIndex"), // 上级列表
    platformGetTwitterGetConfig: api.get("/baseapi/platform/twitter/getConfig"), // 推客等级
    platformMemberChangeIntegral: api.post("/baseapi/platform/member/changeIntegral"), // 赠送积分
    platformGetTwitterSetLevel: api.post("/baseapi/platform/twitter/setLevel"), // 推客等级
    platformMemberIntegralLog: api.get("/baseapi/platform/member/integralLog"), // 积分明细
    platformMemberProMfitLog: api.get("/baseapi/platform/member/profitLog"), // 消费明细
    platformMemberLoginLog: api.get("/baseapi/platform/member/loginLog"), // 活动情况
    platformLevelIindex: api.get("/baseapi/platform/member/level"), // 等级管理
    // 会员等级下拉列表
    plaformMemberLevel: api.get("/baseapi/platform/member/level"),
    plaformMemberLevelOne: api.get("/baseapi/platform/member/levelOne"),
    platformLevelIGet: api.get("/baseapi/platform/level/get"), // 等级详情
    platformLevelIGetActivity: api.get("/baseapi/platform/ticketActivity/getActivity"), // 等级券活动
    platformLevelUpdate: api.post("/baseapi/platform/level/update"), // 等级详情保存
    platformLevelEnable: api.get("/baseapi/platform/level/enable"), // 等级启用
    platformLevelDisable: api.get("/baseapi/platform/level/disable"), // 等级禁用
    platformConfigSetIntegral: api.post("/baseapi/platform/config/setIntegral"), // 一次性任务
    platformConfigGetIntegral: api.get("/baseapi/platform/config/getIntegral"), // 一次性任务

    // 收益管理
    platformProfitConfigRetailGet: api.get("/baseapi/platform/profitConfig/retailGet"), // 获取零售收益
    platformProfitConfigRetailEdit: api.post("/baseapi/platform/profitConfig/retailEdit"), // 零售收益配置
    platformProfitConfigInvestmentGet: api.get("/baseapi/platform/profitConfig/investmentGet"), // 获取招商收益
    platformProfitConfigInvestmentEdit: api.post("/baseapi/platform/profitConfig/investmentEdit"), // 招商收益配置
    platformProfitConfigTeamGet: api.get("/baseapi/platform/profitConfig/teamGet"), // 获取团队收益
    platformProfitConfigTeamEdit: api.post("/baseapi/platform/profitConfig/teamEdit"), // 团队收益配置
    platformProfitConfigCultureGet: api.get("/baseapi/platform/profitConfig/cultureGet"), // 获取培养收益
    platformProfitConfigCultureEdit: api.post("/baseapi/platform/profitConfig/cultureEdit"), // 培养收益配置
    platformProfitConfigCoachGet: api.get("/baseapi/platform/profitConfig/coachGet"), // 获取辅导收益
    platformProfitConfigCoachEdit: api.post("/baseapi/platform/profitConfig/coachEdit"), // 辅导收益配置
    platformProfitConfigEditData: api.post("/baseapi/platform/profitConfig/editData"), // 收益管理的头部配置

    // ---------------------2.3.5新增收益配置------------------------------//
    getProfitConfig: api.get("/baseapi/platform/config/getProfitConfig"), // 获取隐私配置
    setProfitConfig: api.post("/baseapi/platform/config/setProfitConfig"), // 设置隐私配置
    getAliasConfig: api.get("/baseapi/platform/config/getAliasConfig"), // 获取别名配置
    setAliasConfig: api.post("/baseapi/platform/config/setAliasConfig"), // 修改收益别名

    memberEquityGetList: api.get("/baseapi/platform/memberEquity/getList"), // 服务权益列表
    memberEquitySaveData: api.post("/baseapi/platform/memberEquity/saveData"), // 服务权益添加
    memberEquityAbleStatus: api.get("/baseapi/platform/memberEquity/ableStatus"), // 服务权益启用
    memberEquityUnableStatus: api.get("/baseapi/platform/memberEquity/unableStatus"), // 服务权益禁用
    memberEquityRelevanceLevel: api.put("/baseapi/platform/memberEquity/relevanceLevel"), // 服务权益关联等级
    memberEquityGetDetail: api.get("/baseapi/platform/memberEquity/getDetail"), // 服务权益详情
    memberEquityUpdateData: api.put("/baseapi/platform/memberEquity/updateData"), // 服务权益编辑
    memberEquityGetLevelList: api.get("/baseapi/platform/memberEquity/getLevelList"), // 普通/升级权益列表
    memberEquityGeneralSave: api.post("/baseapi/platform/memberEquity/generalSave"), // 普通权益保存

    //  升级权益
    memberEquityUpgradeSave: api.post("/baseapi/platform/memberEquity/upgradeSave"), // 升级权益保存

    /** 收益流水 */
    memberOrderBalance: api.get("/baseapi/platform/profit/orderBalance"), // 订单收益列表
    /* 订单收益-导出明细 */
    memberExportOrderProfit: api.get("/baseapi/platform/export/orderProfit"),
    memberOrderDetail: api.get("/baseapi/platform/profit/orderBalanceInfo"), // 订单收益详情
    memberMonthlyIncome: api.get("/baseapi/platform/profit/monthlyIncome"), // 月结收益
    memberMonthlyIncomeDetail: api.get("/baseapi/platform/profit/monthlyIncomeDetail"), // 月结收益详情
    memberCultureIncome: api.get("/baseapi/platform/profit/cultureIncome"), // 培养收益
    memberIncomeSummary: api.get("/baseapi/platform/profit/incomeSummary"), // 收益流水统计
    getRule: api.get("/baseapi/platform/config/integral/rule"), // 积分规则查询
    setRule: api.post("/baseapi/platform/config/integral/rule"), // 积分规则设置
};
export default apis;
