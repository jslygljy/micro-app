import {api, MapleRequestApis} from "maple-request";

const common = {
    // 获取操作人列表
    getAdminList: api.get("/baseapi/platform/admin/getList"),
    // 获取收益列表
    distributionGetProfitList: api.get("/baseapi/platform/profit/profitLog"),
    // 获取收益占比
    distributionProfitRatioGet: api.get("/baseapi/platform/gudonPartner/getConfig"),
    // 获取日志类型
    distributionLogTypeGet: api.get("/baseapi/platform/twitter/getType"),
};
const investment = {
    // 招商产品列表
    distributionInvestmentGetList: api.get("/baseapi/platform/investment/getList"),

    // 获取编辑招商产品详情
    distributionInvestmentGetSpecsListByGoodsID: api.get("/baseapi/platform/investment/getSpecsListByGoodsID"),
    // 保存编辑招商产品详情
    distributionInvestmentAddEditSpecs: api.post("/baseapi/platform/investment/addEditSpecs"),
    // 获取添加产品的商品列表
    distributionInvestmentGetGoodsList: api.get("/baseapi/platform/investment/getGoodsList"),
    // 添加、更新招商产品
    distributionInvestmentGetAdd: api.post("/baseapi/platform/investment/add"),
    // 招商产品上下架
    distributionInvestmentUpDown: api.post("/baseapi/platform/investment/upDown"),
    // 招商产品删除
    distributionInvestmentRemove: api.post("/baseapi/platform/investment/remove"),
    // ----------------2.3.5新增招商专区海报---------------------//
    // 设置海报
    distributionSetConfig: api.post("/baseapi/platform/investment/setConfig"),
    // 获取默认海报图片
    distributionGetDefaultImage: api.get("/baseapi/platform/investment/getDefaultImage"),
    // 获取招商专区海报
    distributionGetConfig: api.get("/baseapi/platform/investment/getConfig"),
};
const level = {
    // 等级列表
    distributionGetLevelList: api.get("/baseapi/platform/member/levelList"),
    // 等级详情
    distributionLevelGet: api.get("/baseapi/platform/member/levelGet"),
    // 添加等级
    distributionLevelAdd: api.post("/baseapi/platform/member/levelAdd"),
    // 编辑等级
    distributionLevelEdit: api.post("/baseapi/platform/member/levelEdit"),
    // 会员等级下拉框
    distributionLevelSelect: api.get("/baseapi/platform/member/level"),
    // 禁用会员等级
    distributionLevelDisable: api.post("/baseapi/platform/member/levelDisable"),
    // 启用会员等级
    distributionLevelEnable: api.post("/baseapi/platform/member/levelEnable"),
    // 获取营销专区 可用活动下拉框
    distributionGetUsedActivity: api.get("/baseapi/platform/marketZone/getUsedActivity"),

    // 搜索推客
    distributionFindTwitter: api.get("/baseapi/platform/twitter/find"),
    // 修改上级
    distributionSetSuperior: api.post("/baseapi/platform/twitter/setSuperior"),
    // 保存推客等级
    distributionSetLevel: api.post("/baseapi/platform/twitter/setLevel"),
    // 推客日誌
    distributionGetTwitterLog: api.get("/baseapi/platform/twitter/log"),
    // 获取收益详情
    distributionMemberDetail: api.get("/baseapi/platform/profit/get"),
    // 推客等级列表
    distributionTwitterLevelList: api.get("/baseapi/platform/twitterLevel/getList"),
    // 推客等级详情
    distributionTwitterLevelDetail: api.get("/baseapi/platform/twitterLevel/get"),
    // 推客等级列表(下拉)
    distributionTwitterLevel: api.get("/baseapi/platform/twitterLevel/level"),
    // 添加推客等级
    distributionTwitterAddLevel: api.post("/baseapi/platform/twitterLevel/add"),
    // 编辑推客等级
    distributionTwitterEditLevel: api.post("/baseapi/platform/twitterLevel/edit"),
    // 禁用推客等级
    distributionTwitterDisabledLevel: api.post("/baseapi/platform/twitterLevel/disable"),
    // 启用推客等级
    distributionTwitterEnableLevel: api.post("/baseapi/platform/twitterLevel/enable"),
    // 推客配置开启关闭
    distributionTwitterLevelCtrl: api.post("/baseapi/platform/twitterLevel/setConfig"),
    // 推客折扣开启关闭
    distributionTwitterDiscountCtrl: api.post("/baseapi/platform/twitterLevel/setDiscount"),
    // 获取推客下拉专区活动列表
    distributionActiveAreaList: api.get("/baseapi/platform/special/getActivityList"),
};
const team = {
    // 查看团队列表
    distributionTeamListGet: api.get("/baseapi/platform/team/index"),
    // 修改上级团队
    distributionSuperiorEdit: api.post("/baseapi/platform/team/editSuperior"),
    // 团队详情
    distributionTeamDetailGet: api.get("/baseapi/platform/team/get"),
    // 团队成员
    distributionTeamPersonnelGet: api.get("/baseapi/platform/team/getTeamPeople"),
    // 搜索团队
    distributionTeamListSearch: api.get("/baseapi/platform/team/getTeamIndex"),
    // 获取团队分组/类型(基础)
    distributionTeamGroupGet: api.get("/baseapi/platform/teamConfig/getBaseGroup"),
    // 修改团队配置
    distributionEditTeamConfig: api.post("/baseapi/platform/teamConfig/edit"),
    // 添加团队
    distributionTeamAdd: api.post("/baseapi/platform/team/add"),
    // 修改团队
    distributionTeamEdit: api.post("/baseapi/platform/team/edit"),
    // 查看团队组开关
    distributionTeamGetConfig: api.get("/baseapi/platform/teamConfig/getConfig"),
    // 团队组开关设置
    distributionTeamConfigSet: api.post("/baseapi/platform/teamConfig/setConfig"),
    // 团队组列表
    distributionTeamConfigListGet: api.get("/baseapi/platform/teamConfig/index"),
    // 删除团队组
    distributionTeamConfigRemove: api.post("/baseapi/platform/teamConfig/remove"),
    // 添加团队组
    distributionTeamConfigAdd: api.post("/baseapi/platform/teamConfig/add"),
    // 编辑团队组
    distributionTeamConfigEdit: api.post("/baseapi/platform/teamConfig/edit"),
    // 团队收益
    distributionTeamIncomeGet: api.get("/baseapi/platform/team/getProfitList"),
    // 获取收益详情
    distributionTeamIncomeDetail: api.get("/baseapi/platform/team/getProfitDetail"),
    // 团队日誌
    distributionTeamLogGet: api.get("/baseapi/platform/team/log"),
};
const shareholder = {
    // 股东合伙人列表
    distributionShareholderListGet: api.get("/baseapi/platform/gudonPartner/memberlist"),
    // 股东合伙人详情
    distributionShareholderDetailGet: api.get("/baseapi/platform/gudonPartner/partnerDetail"),
    // 新增/修改合伙人
    distributionShareholderChange: api.post("/baseapi/platform/gudonPartner/changetype"),
    // 股东收益
    distributionShareholderProfitListGet: api.get("/baseapi/platform/gudonPartner/partnerProfitList"),
    // 股东收益详情
    distributionShareholderProfitDetailGet: api.get("/baseapi/platform/gudonPartner/partnerProfitDetail"),

    // 股东收益 - 月
    distributionShareholderIncomeMonthGet: api.get("/baseapi/platform/gudonPartner/profitMonth"),
    // 股东收益 - 实时
    distributionShareholderIncomeTimeGet: api.get("/baseapi/platform/gudonPartner/profitNow"),
    // 订单明细
    distributionShareholderOrderDetailGet: api.get("/baseapi/platform/gudonPartner/profitMonthDetail"),
    // 收益明细
    distributionShareholderIncomeMonthDetailGet: api.get("/baseapi/platform/gudonPartner/profitDetail"),
    // 获取股东合伙人配置
    distributionShareholderConfigGet: api.get("/baseapi/platform/gudonPartner/getTypelist"),
    // 保存股东合伙人配置
    distributionShareholderConfigSet: api.post("/baseapi/platform/gudonPartner/edit"),
    // 日志
    distributionShareholderLogGet: api.get("/baseapi/platform/gudonPartner/logList"),
    // 日志类型
    distributionShareholderLogTypeGet: api.get("/baseapi/platform/gudonPartner/getPartnerLogType"),
    // 操作人
    distributionShareholderOperatorGet: api.get("/baseapi/platform/gudonPartner/getOperatorList"),
    // 获取推客列表
    distributionShareholderTwitterGet: api.get("/baseapi/platform/gudonPartner/getTwitter"),
};

const area = {
    // 区域合伙人列表（按合伙人）
    distributionGetPartnerList: api.get("/baseapi/platform/partner/index"),
    // 区域合伙人配置 详情
    distributionGetPartnerSettingDetail: api.get("/baseapi/platform/partner/getAreaPartner"),
    // 区域合伙人详情
    distributionGetPartnerInfo: api.get("/baseapi/platform/partner/getPartnerInfo"),
    // 区域合伙人详情表格
    distributionGetPartnerTable: api.get("/baseapi/platform/partner/get"),
    // 区域合伙人修改
    distributionEditPartnerTable: api.post("/baseapi/platform/partner/edit"),
    // 添加合伙人类型
    distributionAddPartner: api.post("/baseapi/platform/partner/add"),
    // 获取收益占比
    distributionGetPartnerConfig: api.get("/baseapi/platform/gudonPartner/getConfig"),
    // 合伙人配置 删除自定义
    distributionRemovePartnerConfig: api.post("/baseapi/platform/partner/remove"),
    // 合伙人配置 添加自定义区域
    distributioSetAreaPartner: api.post("/baseapi/platform/partner/setAreaPartner"),
    // 合伙人收益
    distributionGetPartnerEarn: api.get("/baseapi/platform/partner/profitOrderList"),
    // 合伙人收益明细
    distributioGetProfitOrderDetail: api.get("/baseapi/platform/partner/profitOrderDetail"),
    // 合伙人日志
    distributionGetPartnerLogs: api.get("/baseapi/platform/partner/getLogs"),
    // 合伙人l类型下拉框
    distributionGetPartnerLogsType: api.get("/baseapi/platform/partner/getLogsType"),
    // 商品收益调整列表
    distributionGetPartnerGoods: api.get("/baseapi/platform/goodspartner/index"),
    // 商品收益添加商品联想列表
    distributionGetGoods: api.get("/baseapi/platform/goodspartner/getgoods"),
    // 商品收益添加商品
    distributionSetGoods: api.post("/baseapi/platform/goodspartner/set"),
    // 商品收益批量取消
    distributionRemoveGoods: api.get("/baseapi/platform/goodspartner/remove"),
    // 获取商品详情
    distributionGetGoodsDetail: api.get("/baseapi/platform/goodspartner/get"),
    // 商品收益日志列表
    distributionGetGoodsLoglist: api.get("/baseapi/platform/goodspartner/loglist"),
    // 商品收益日志列表下拉
    distributionGetGoodsType: api.get("/baseapi/platform/goodspartner/gettype"),
    // 推客首单激励列表
    distributionGetTwitterEncourageList: api.get("/baseapi/platform/twitterEncourage/index"),
    // 推客首单激励添加
    distributionAddTwitter: api.post("/baseapi/platform/twitterEncourage/add"),
    // 推客首单激励详情
    distributionTwitterDetail: api.get("/baseapi/platform/twitterEncourage/get"),
    // 推客首单激励通过
    distributionTwitterCheckPass: api.get("/baseapi/platform/twitterEncourage/checkPass"),
    // 推客首单激励上架
    distributionTwitterCheckUp: api.get("/baseapi/platform/twitterEncourage/checkUp"),
    // 推客首单激励下架
    distributionTwitterCheckDown: api.get("/baseapi/platform/twitterEncourage/checkDown"),
    // 推客首单激励提交
    distributionTwitterCheckSub: api.get("/baseapi/platform/twitterEncourage/checkSub"),
    // 推客首单激励刪除
    distributionTwitterRemove: api.get("/baseapi/platform/twitterEncourage/remove"),
    // 推客首单激励驳回
    distributionTwitterCheckReturn: api.get("/baseapi/platform/twitterEncourage/checkReturn"),
    // 推客首单激励修改
    distributionEditTwitter: api.post("/baseapi/platform/twitterEncourage/edit"),
};

const apis: MapleRequestApis = {
    // 公共
    ...common,
    // 招商管理
    ...investment,
    // 等级管理
    ...level,
    // 团队管理
    ...team,
    // 股东合伙人
    ...shareholder,
    // 区域合伙人
    ...area,
};

export default apis;
