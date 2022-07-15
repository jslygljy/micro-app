import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    /* ================ 积分列表 ================ */
    integralEnable: api.post("/baseapi/platform/integralShop/isUp"), // 操作 上架
    integralDisable: api.post("/baseapi/platform/integralShop/isDown"), // 操作 下架
    integralDelete: api.post("/baseapi/platform/integralShop/delete"), // 操作 删除
    integralIndex: api.get("/baseapi/platform/integralShop/index"), // 积分列表
    integralDetail: api.get("/baseapi/platform/integralShop/get"), // 积分详情
    integralGoodsIds: api.get("/baseapi/platform/integralShop/getGoodsId"), // 查询选过的产品

    /* ================ 添加商品 ================ */
    integralAddProduct: api.post("/baseapi/platform/integralShop/add"), // 新增保存
    integralEditProduct: api.post("/baseapi/platform/integralShop/edit"), // 修改保存

    /* ================ 商城配置 ================ */
    integralSetConfig: api.post("/baseapi/platform/integralShop/setConfig"), // 设置配置
    integralGetConfig: api.get("/baseapi/platform/integralShop/getConfig"), // 查看配置

    /* ================ 积分订单 ================ */
    integralOrderList: api.get("/baseapi/platform/integralOrder/orderList"), // 积分订单列表
    integralOrderDetail: api.get("/baseapi/platform/integralOrder/orderDetail"), // 积分订单详情
    integralOrderDelivery: api.post("/baseapi/platform/integralOrder/orderDelivery"), // 发货
    integralOrderCancel: api.post("/baseapi/platform/integralOrder/orderCancel"), // 取消订单
    integralOrderSelfTakeConfirm: api.post("/baseapi/platform/integralOrder/selfTakeConfirm"), // 提货
    integralOrderRefund: api.post("/baseapi/platform/integralOrder/refund"), // 退款
    integralOrderLogisticsDetail: api.get("/baseapi/platform/integralOrder/logisticsDetail"), // 物流详情
    integralOrderChangeLogistics: api.post("/baseapi/platform/integralOrder/changeLogistics"), // 修改物流

    /* ================ 商品积分调整 ================ */
    integralgoodsAdjustList: api.get("/baseapi/platform/goodsIntegralAdjust/getList"), // 积分调整列表
    integralgoodsAdjustGetOne: api.get("/baseapi/platform/goodsIntegralAdjust/getOne"), // 商品积分调整获取单条数据
    integralgoodsAdjustEdit: api.post("/baseapi/platform/goodsIntegralAdjust/edit"), // 商品积分调整新增编辑
    integralgoodsAdjustRemove: api.post("/baseapi/platform/goodsIntegralAdjust/remove"), // 商品积分调整删除单条数据
    integralgoodsAdjustLogList: api.get("/baseapi/platform/goodsIntegralAdjust/logList"), // 商品积分调整操作日志
    integralgoodsAdjustGetType: api.get("/baseapi/platform/goodsIntegralAdjust/getType"), // 获取商品积分调整类型
    integralgoodsAdjustGetGoodIds: api.get("/baseapi/platform/goodsIntegralAdjust/getSelectGoodsIds"), // 获取所有选择过的商品
    exportPointOrder: api.get("/baseapi/platform/export/pointOrder"), // 导出积分订单列表
};

export default apis;
