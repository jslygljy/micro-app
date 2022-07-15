import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    // 订单概览
    overviewOrderIndex: api.get("/baseapi/platform/statistics/statistics/orderIndex"),
    // 订单趋势看板
    overviewOrderTrend: api.get("/baseapi/platform/statistics/statistics/orderTrend"),
    // 订单统计
    overviewOrderCount: api.get("/baseapi/platform/index/orderCount"),
    // 营销概览
    overviewMarket: api.get("/baseapi/platform/statistics/statistics/activityIndex"),
    // 营销活动类型
    overviewMarketPart: api.get("/baseapi/platform/statistics/statistics/activityPart"),
    // 首页概览
    overviewIndex: api.get("/baseapi/platform/statistics/statistics/index"),
    // 商品概览
    overviewProduct: api.get("/baseapi/platform/statistics/statistics/goodsIndex"),
    // 会员概览
    overviewMember: api.get("/baseapi/platform/statistics/statistics/memberIndex"),
    // 商品趋势
    overviewProductTrend: api.get("/baseapi/platform/statistics/statistics/goodsTrend"),
    // 会员收益
    overviewMemberProfit: api.get("/baseapi/platform/statistics/statistics/profitPart"),
    // 最新事项
    overviewTodoNew: api.get("/baseapi/platform/index/newItem"),
    // 订单管理
    overviewTodoOrder: api.get("/baseapi/platform/index/orderCount"),
    // 商品管理
    overviewTodoProduct: api.get("/baseapi/platform/index/goodsCount"),
    // 财务管理
    overviewTodoFinance: api.get("/baseapi/platform/index/financeCount"),
    // 其他
    overviewTodoOther: api.get("/baseapi/platform/index/restsCount"),
    // 其他
    overviewMsgCount: api.get("/baseapi/platform/index/noDealMessageCount"),
    // 其他配置
    overviewRestsConfig: api.get("/baseapi/platform/index/restsConfig"),

    // 管控概览
    overviewStoreIndex: api.get("/baseapi/platform/statistics/statistics/storeIndex"),
};

export default apis;
