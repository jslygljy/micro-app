import {api, MapleRequestApis} from "maple-request";

const batchDelivery = {
    deliveryUpload: api.post("/baseapi/platform/batchDelivery/uploadFile"),
    deliverySend: api.get("/baseapi/platform/batchDelivery/delivery"),
    deliveryDownload: api.get("/baseapi/platform/batchDelivery/downTemplate"),
    deliveryWaitDownload: api.get("/baseapi/platform/batchDelivery/downWaitDelivery"),
    deliveryExportWaitShipOrder: api.get("/baseapi/platform/export/waitShipOrder"), // 订单管理-发货管理-批量发货-导出待发货订单
    deliveryBatchPrint: api.post("/baseapi/platform/order/batchSingle"),
    deliveryMergePrint: api.post("/baseapi/platform/order/mergeOrderSingle"),
};
// 代理订单
const proxyOrder = {
    getProxyRetailOrderStock: api.get("/baseapi/platform/retailOrder/index"), // 获取代理零售订单列表
};
const apis: MapleRequestApis = {
    ...batchDelivery,
    ...proxyOrder,
    // ==================================订单管理======新版A端接口===================================//
    orderType: api.get("/baseapi/platform/order/activityType"), // 订单类型
    logisticsOrderList: api.get("/baseapi/platform/order/logisticsOrder"), // 物流订单列表
    shipmentsOrderExportLogisticsOrder: api.get("/baseapi/platform/export/logisticsOrder"), // 订单管理-发货管理-批量打单-导出订单
    oderExportLogisticsOrder: api.get("/baseapi/platform/export/logisticsOrder"), // 订单管理-综合订单-物流订单-导出
    selfMentionOrder: api.get("/baseapi/platform/order/selfMentionOrder"), // 自提订单列表
    orderExportSelfPickupOrder: api.get("/baseapi/platform/export/selfPickupOrder"), // 订单管理-综合订单-自提订单-导出列表
    getOrderDetail: api.get("/baseapi/platform/order/detail"), // 订单详情
    changePrice: api.post("/baseapi/platform/order/changePrice"), // 修改订单商品优惠后金额
    reducePrice: api.post("/baseapi/platform/order/reducePrice"), // 修改订单价格
    orderCancel: api.post("/baseapi/platform/order/orderCancel"), // 取消订单
    amendOrdersAddress: api.post("/baseapi/platform/order/amendAddress"), // 修改收货地址
    getLogisticsList: api.get("/baseapi/platform/getConfig/getLogisticsList"),
    orderDelivery: api.post("/baseapi/platform/order/orderDelivery"), // 发货
    logisticsTrack: api.get("/baseapi/platform/order/logisticsTrack"), // 物流轨迹查询
    changeLogistics: api.post("/baseapi/platform/order/changeLogistics"), // 修改物流单号
    selfTakeConfirm: api.post("/baseapi/platform/order/selfTakeConfirm"), // 自提
    refundMoney: api.post("/baseapi/platform/after/refundMoney"), // 退款
    order_getDispatchingOrderList: api.get("/baseapi/platform/order/getDispatchingOrderList"), // 同城配送订单列表
    orderExportDispatchingOrder: api.get("/baseapi/platform/export/dispatchingOrder"), // 订单管理-综合订单-同城配送订单-导出
    order_getShopOrderList: api.get("/baseapi/platform/order/getShopOrderList"), // 到店消费订单列表
    orderExportShopOrder: api.get("/baseapi/platform/export/shopOrder"), // 订单管理-综合订单-到店消费-导出
    order_getOrderDetail: api.get("/baseapi/platform/order/getOrderDetail"), // 订单详情（同城配送，到店消费）
    // -----------------售后----------------------------------//
    saleAfter_list: api.get("/baseapi/platform/after/index"), // 售后列表
    saleAfterExportAfterSaleOrder: api.get("/baseapi/platform/export/afterSaleOrder"), // 订单管理-售后管理-导出
    saleAfter_details: api.get("/baseapi/platform/after/get"), // 售后详情
    saleAfter_audit: api.post("/baseapi/platform/after/audit"), // 售后审核
    saleAfter_reject: api.post("/baseapi/platform/after/reject"), // 售后驳回
    saleAfter_returnGoods: api.post("/baseapi/platform/after/returnGoods"), // 售后确认到货并退款
    saleAfter_confirm: api.post("/baseapi/platform/after/confirm"), // 售后确认收货
    saleAfter_sendDelivery: api.post("/baseapi/platform/after/sendDelivery"), // 售后确认发货
    saleAfter_getLogi: api.get("/baseapi/platform/after/getLogi"), // 售后物流详情

    // 发货管理-发货记录
    getShipmentsList: api.get("/baseapi/platform/batchDelivery/getList"),
    // 订单记录
    orderLog: api.get("/baseapi/platform/order/log"),
    // 订单列表下载
    downOrder: api.get("/baseapi/platform/batchDelivery/downOrder"),
    // 发货失败列表
    failList: api.get("/baseapi/platform/batchDelivery/failList"),
    //  发货单下载
    downDelivery: api.get("/baseapi/platform/batchDelivery/downDelivery"),
    // 重新打印
    againPdySingle: api.post("/baseapi/platform/order/againPdySingle"),
    // 添加备注
    addRemark: api.post("/baseapi/platform/order/addRemark"),
};

export default apis;
