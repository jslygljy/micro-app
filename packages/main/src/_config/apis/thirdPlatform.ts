import {api, MapleRequestApis} from "maple-request";
import servies from "../servers";
/** 三方平台-会员管理 */
const memberApi: MapleRequestApis = {
    platformLevelIindexZGZ: api.get("/member/level", servies.third), // 待合并已合并列表
    // distributionGetUsedActivityZGZ: api.get(
    //     "/marketZone/getUsedActivity",
    //     servies.third
    // ), // 获取营销专区 可用活动下拉框
    distributionGetLevelListZGZ: api.get("/member/levelList", servies.third), // 等级列表
    distributionTwitterLevelCtrlZGZ: api.post("/twitterLevel/setConfig", servies.third), // 推客配置开启关闭
    distributionLevelDisableZGZ: api.post("/member/levelDisable", servies.third), // 禁用会员等级
    distributionLevelEnableZGZ: api.post("/member/levelEnable", servies.third), // 启用会员等级
    distributionLevelGetZGZ: api.get("/member/levelGet", servies.third), // 等级详情
    distributionLevelAddZGZ: api.post("/member/levelAdd", servies.third), // 添加等级
    distributionLevelEditZGZ: api.post("/member/levelEdit", servies.third), // 编辑等级
    memberEquityGetLevelListZGZ: api.get("/memberEquity/getLevelList", servies.third), // 普通/升级权益列表
    memberEquityGeneralSaveZGZ: api.post("/memberEquity/generalSave", servies.third), // 普通权益保存
    memberEquityUpgradeSaveZGZ: api.post("/memberEquity/upgradeSave", servies.third), // 升级权益保存
};
/** 三方平台-积分配置 */
const integraApi: MapleRequestApis = {
    platformConfigGetIntegralZGZ: api.get("/config/getIntegral", servies.third), // 一次性任务
    platformConfigSetIntegralZGZ: api.post("/config/setIntegral", servies.third), // 一次性任务
    setRuleZGZ: api.post("/baseapi/platform/config/integral/rule"), // 积分规则设置
    getRuleZGZ: api.get("/baseapi/platform/config/integral/rule"), // 积分规则查询
};
/** 三方平台-会员日营销 */
const memberDayApi: MapleRequestApis = {
    getActivityMemberListZGZ: api.get("/activityMember/getList", servies.third), // 营销日活动列表
    memberUpOrDownZGZ: api.get("/activityMember/upOrDown", servies.third), // 活动上下架
    commitMemberDayZGZ: api.get("/activityMember/commit", servies.third), // 提交会员日审核
    removeMemberDayZGZ: api.get("/activityMember/remove", servies.third), // 删除数据
    editMemberWeightZGZ: api.get("/activityMember/editWeight", servies.third), // 设置权重
    getMemberDayZGZ: api.get("/activityMember/getMemberDay", servies.third), // 获取会员日
    setMemberDayZGZ: api.get("/activityMember/setMemberDay", servies.third), // 设置会员日
    editMemberDayZGZ: api.post("/activityMember/edit", servies.third), // 编辑活动
    createDataMemberZGZ: api.post("/activityMember/createData", servies.third), // 创建会员日活动
    MenmberDayDetailZGZ: api.get("/activityMember/detail", servies.third), // 营销日活动详情
};

/** 三方平台-积分订单--正官庄v3.1新增 */
const integralOrderApi: MapleRequestApis = {
    getIntegralOrderList: api.get("/integral-order/index", servies.third), // 积分订单列表
    getIntegralOrderDetail: api.get("/integral-order/detail", servies.third), // 积分订单详情
    getIntegralLogisticsTrack: api.get("/integral-order/getLogisticsTrack", servies.third), // 物流信息
    setIntegralOrderDeliver: api.post("/integral-order/deliver", servies.third), // 积分订单发货
    setIntegralOrderChangeExpress: api.post("/integral-order/changeExpress", servies.third), // 积分订单修改物流
    setIntegralOrderRemark: api.post("/integral-order/remark", servies.third), // 添加/修改备注
    getIntegralOrderExportList: api.get("/integral-order/exportIntegralOrder", servies.third), // 列表下载
    getExpressList: api.get("/express/syyExpressList", servies.third), // 快递列表
};

/** 三方平台-发货管理--正官庄v3.1新增 */
const deliveryApis: MapleRequestApis = {
    getDeliveryOrderExport: api.get("/integral-order/exportWaitShipIntegralOrder", servies.third), // 导出代发货订单
    getDeliveryRecord: api.get("/integral-order/export/deliver-record", servies.third), // 发货记录下载
    getExportOrder: api.get("/batchDelivery/exportOrder", servies.third), // 发货订单导出
    getExportExpress: api.get("/batchDelivery/exportExpress", servies.third), // 发货单导出
    batchDeliveryUploadFile: api.post("/batchDelivery/uploadFile", servies.third), // 批量发货文件数据存储
    batchDeliverySend: api.post("/batchDelivery/delivery", servies.third), // 批量发货
    batchDeliveryGetList: api.get("/batchDelivery/getList", servies.third), // 发货记录列表
    batchDeliveryFailList: api.get("/batchDelivery/failList", servies.third), // 查看失败原因
};

const apis: MapleRequestApis = {
    getMergeList: api.get("/member/mergeIndex", servies.third), // 待合并已合并列表
    mergeVip: api.post("/member/batchMerge", servies.third), // 合并会员
    concelMerge: api.post("/member/batchUnmerge", servies.third), // 取消合并
    vipList: api.get("/member/index", servies.third), // 会员列表
    getVipLevel: api.get("/member/getLevelList", servies.third), // 会员等级列表
    exportVip: api.get("/member/export", servies.third), // 导出会员
    exportIdVip: api.get("/export/member", servies.third), // 会员导出exportId
    setMerge: api.post("/member/setMater", servies.third), // 设置主账号
    getVipDetail: api.get("/member/detail", servies.third), // 会员详情
    getMemberOrderList: api.get("/order/memberOrders", servies.third), // 用户订单列表
    getOperationList: api.get("/member/operateLog", servies.third), // 获取操作日志
    addMobile: api.post("/member/addMobile", servies.third), // 添加电话
    getMobileList: api.get("/member/mobiles", servies.third), // 电话列表
    editMobile: api.post("/member/updateMobile", servies.third), // 修改电话
    shopList: api.get("/shop", servies.third), // 获取商户列表
    getOrderList: api.get("/order", servies.third), // 获取订单列表
    getSubMember: api.get("/member/subMembers", servies.third), // 子账号列表
    getThreeOrderDetail: api.get("/order/detail", servies.third), // 订单详情
    exportOrder: api.get("/order/export", servies.third), // 订单导出
    exportIdOrder: api.get("/export/order", servies.third), // 订单导出exportId     // 订单维度
    exportIdOrderItem: api.get("/export/orderItem", servies.third), // 订单导出exportId  // /export/orderItem商品维度
    shopOverview: api.get("/statistics/shopOverview", servies.third), // 店铺概括
    threeOrderTrend: api.get("/statistics/orderTrend", servies.third), // 订单趋势
    rePurhaseTrend: api.get("/statistics/rePurhaseTrend", servies.third), // 复购趋势
    threeMemberTrend: api.get("/statistics/memberTrend", servies.third), // 会员趋势
    integralType: api.get("/integral/type", servies.third), // 积分类型
    integralList: api.get("/integral/index", servies.third), // 积分列表
    integralSummary: api.get("/integral/summary", servies.third), // 积分汇总
    thirdPlatformIntegralLog: api.get("/export/integralLog", servies.third), // 会员流水导出
    thirdIntegralUpdate: api.post("/integral/update", servies.third), // 会员积分调整
    getMonthlyReport: api.get("/report/getMonthlyReport", servies.third), // 下载列表
    ...memberApi,
    ...integraApi,
    ...memberDayApi,
    ...integralOrderApi,
    ...deliveryApis,
};
export default apis;
