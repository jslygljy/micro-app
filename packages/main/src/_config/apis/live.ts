import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    /** * 主播列表 */
    getAnchorLiveList: api.get("/baseapi/platform/liveAnchor/getAnchorLiveList"),
    /** * 直播历史列表 */
    getAnchorLiveHistory: api.get("/baseapi/platform/liveAnchor/getAnchorLiveHistory"),
    /** * 直播列表 */
    platform_liveRoom_getLiveRooms: api.get("/baseapi/platform/liveRoom/getLiveRooms"),
    /** * 授权主播列表 */
    getAnchorList: api.get("/baseapi/platform/liveAnchor/getAnchorList"),
    // 取消主播授权
    cancelAnchor: api.put("/baseapi/platform/liveAnchor/cancelAnchor"),
    // 新增主播授权
    setAnchorAuth: api.post("/baseapi/platform/liveAnchor/setAnchorAuth"),
    // 播品列表
    liveGoodsGetList: api.get("/baseapi/platform/liveGoods/getList"),
    // 库存列表
    getSkuStock: api.get("/baseapi/platform/liveGoods/getSkuStock"),
    // 调整库存
    batchSetStock: api.put("/baseapi/platform/liveGoods/batchSetStock"),
    // 播品上架
    batchGoodsUp: api.put("/baseapi/platform/liveGoods/batchGoodsUp"),
    // 播品下架
    batchGoodsDown: api.put("/baseapi/platform/liveGoods/batchGoodsDown"),
    // 播品详情
    getGoodsDetail: api.get("/baseapi/platform/liveGoods/getDetail"),
    // 编辑播品
    goodsEditSave: api.put("/baseapi/platform/liveGoods/editSave"),
    // 新增播品
    goodsCreateSave: api.post("/baseapi/platform/liveGoods/createSave"),
    // 操作日志
    getSellLogs: api.get("/baseapi/platform/liveGoods/getSellLogs"),

    /** * 主播管理-筛选  ** */
    live_anchor_conditions: api.get("/baseapi/platform/liveAnchor/newGetConditions"),
    /** * 直播历史-筛选  ** */
    live_history_conditions: api.get("/baseapi/platform/liveAnchor/newGetHistoryConditions"),
    /** * 授权主播-筛选  ** */
    live_anchorLive_conditions: api.get("/baseapi/platform/liveAnchor/newGetLiveConditions"),
    /** * 播品-筛选  ** */
    live_sellGoods_conditions: api.get("/baseapi/platform/sellGoods/newGetConditions"),
    /** * 主播管理-主播列表、授权主播列表  ** */
    live_anchor_list: api.get("/baseapi/platform/liveAnchor/index"),
    /** * --播品管理 -- 筛选条件** */
    live_product_conditions: api.get("/baseapi/platform/sellGoods/newGetConditions"),
    /** * 主播管理-获取主播列表的统计数据  ** */
    live_anchor_count: api.get("/baseapi/platform/liveAnchor/getStatusNum"),
    /** * 主播管理-取消授权主播 ** */
    live_anchor_cancelAuth: api.post("/baseapi/platform/liveAnchor/cancelAuth"),
    /** * 主播管理-授权主播 ** */
    live_anchor_becomeAnchor: api.post("/baseapi/platform/liveAnchor/becomeAnchor"),
    /** * 主播管理-禁播 ** */
    live_anchor_forbidLiveStream: api.post("/baseapi/platform/liveAnchor/forbidLiveStream"),
    /** * 主播管理-直播历史 ** */
    live_anchor_liveHistory: api.get("/baseapi/platform/liveAnchor/liveHistory"),
    /** * 主播管理--获取直播订单列表 ** */
    live_order_list: api.get("/baseapi/platform/order/getRoomOrderList"),
    /** * 直播管理--获取直播列表 ** */
    live_anchor_getRooms: api.get("/baseapi/platform/liveAnchor/getRooms"),
    /** * --播品管理 ** */
    live_sellGoods_list: api.get("/baseapi/platform/sellGoods/getlist"),
    /** * --播品管理 -- 新增播品** */
    live_sellGoods_add: api.post("/baseapi/platform/sellGoods/create"),
    /** * --播品管理 -- 编辑播品** */
    live_sellGoods_edit: api.post("/baseapi/platform/sellGoods/update"),
    /** * --播品管理 -- 详情** */
    live_sellGoods_detail: api.get("/baseapi/platform/sellGoods/detail"),
    /** * --播品管理 -- 上下架** */
    live_sellGoods_isUp: api.post("/baseapi/platform/sellGoods/updown"),
    /** * --播品管理 -- 日志** */
    live_sellGoods_log: api.get("/baseapi/platform/sellGoods/getSellLogs"),
    /** * --播品管理 -- 更新库存** */
    live_sellGoods_setstock: api.post("/baseapi/platform/sellGoods/setstock"),

    // 直播收益汇总
    live_liveProfit_total: api.get("/baseapi/platform/liveProfit/total"),
    // 直播收益列表
    live_liveProfit_index: api.get("/baseapi/platform/liveProfit/index"),
};

export default apis;
