import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    getPartnerAllotList: api.get("/baseapi/platform/partnerAllot/index"), // 调拨列表
    getAllotDetail: api.get("/baseapi/platform/partnerAllot/detail"), // 调拨详情
    rejectAllot: api.post("/baseapi/platform/partnerAllot/reject"), // 调拨驳回
    passAllot: api.post("/baseapi/platform/partnerAllot/pass"), // 调拨通过
    getConfigAllot: api.get("/baseapi/platform/partnerAllot/getConfig"), // 调拨配置 详情
    editConfigAllot: api.post("/baseapi/platform/partnerAllot/configEdit"), // 调拨配置 编辑
    // 结算管理 少一个禁用
    settleConfigDetail: api.get("/baseapi/platform/partnerSettle/getConfig"), // 结算配置详情
    settleConfigEdit: api.post("/baseapi/platform/partnerSettle/editConfig"), // 编辑结算配置
    getPartnerSettleList: api.get("/baseapi/platform/partnerSettle/templateIndex"), // 结算列表
    createSettleTemplate: api.post("/baseapi/platform/partnerSettle/templateCreate"), // 创建结算模板
    editSettleTemplate: api.post("/baseapi/platform/partnerSettle/templateEdit"), // 编辑结算模板
    detailSettleTemplate: api.get("/baseapi/platform/partnerSettle/templateDetail"), // 结算模板详情
    settleAddShop: api.post("/baseapi/platform/partnerSettle/goodsAdd"), // 添加商品
    settleEditShop: api.post("/baseapi/platform/partnerSettle/goodsEdit"), // 编辑商品价格
    settleDeleteShop: api.post("/baseapi/platform/partnerSettle/goodsDelete"), // 删除商品
    settleShopList: api.get("/baseapi/platform/partnerSettle/templateGoodsIndex"), // 商品列表

    // 结算清单
    getSettleList: api.get("/baseapi/platform/partnerSettle/index"), // 结算列表

    reminders: api.post("/baseapi/platform/partnerSettle/reminders"), // 催款
    superShopDetail: api.get("/baseapi/platform/partnerSettle/superShopDetail"), // 门店详情
    superShopeOrder: api.get("/baseapi/platform/partnerSettle/superShopOrderIndex"), // 订单明细
    superShopOrderDetail: api.get("/baseapi/platform/partnerSettle/superShopOrderDetail"), // 订单明细详情
    superShopClearn: api.get("/baseapi/platform/partnerSettle/superShopSettleIndex"), // 结算明细
    superShopClearingDetail: api.get("/baseapi/platform/partnerSettle/superShopSettleDetail"), // 结算明细详情
    superShopClearingDetailList: api.get("/baseapi/platform/partnerSettle/superShopSettleGoodsDetail"), // 结算明细商品列表

    superShopSettlePass: api.get("/baseapi/platform/partnerSettle/superShopSettlePass"), // 结算明细通过
    superShopSettleReject: api.get("/baseapi/platform/partnerSettle/superShopSettleReject"), // 结算明细驳回

    superShopDeduction: api.get("/baseapi/platform/partnerSettle/superShopDeductionIndex"), // 抵扣明细
    superShopDeductionDetail: api.get("/baseapi/platform/partnerSettle/superShopDeductionDetail"), // 抵扣明细详情
};
export default apis;
