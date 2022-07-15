import {api, MapleRequestApis} from "maple-request";

const dataStatistics: MapleRequestApis = {
    /** 数据概览 */
    // 交易看板（统计数据）
    orderIndex: api.get("/baseapi/platform/statistics/order/total"),
    // -交易看板（echarts）
    orderTrend: api.get("/baseapi/platform/statistics/statistics/orderTrend"),
    // 商品看板
    goodsBoard: api.get("/baseapi/platform/statistics/index/goods"),
    // 用户看板
    userMember: api.get("/baseapi/platform/statistics/index/member"),
    // 会员看板
    memberTwitter: api.get("/baseapi/platform/statistics/index/twitter"),

    /** 交易统计 */
    // 交易转化
    orderChange: api.get("/baseapi/platform/statistics/order/change"),
    // 订单结构
    orderPart: api.get("/baseapi/platform/statistics/order/part"),
    // 交易趋势
    orderTrendDeal: api.get("/baseapi/platform/statistics/order/trend"),
    // 客单价分布
    orderPrice: api.get("/baseapi/platform/statistics/order/price"),
    // 订单地域分布
    orderArea: api.get("/baseapi/platform/statistics/order/area"),

    /** 商品概况 */
    // 商品概况
    goodsTotal: api.get("/baseapi/platform/statistics/goods/total"),
    // 商品数据
    goodsGetData: api.get("/baseapi/platform/statistics/goods/getData"),
    // 商品转化
    goodsChange: api.get("/baseapi/platform/statistics/goods/change"),
    // 商品趋势
    goodsTrend: api.get("/baseapi/platform/statistics/goods/trend"),
    // 商品单价分布
    goodsPrice: api.get("/baseapi/platform/statistics/goods/price"),
    // 商品分析
    goodsAnalysis: api.get("/baseapi/platform/statistics/goods/analysis"),

    /** 用户统计 */
    // 用户概况
    memberTotal: api.get("/baseapi/platform/statistics/member/total"),
    // 用户趋势
    memberTrend: api.get("/baseapi/platform/statistics/member/trend"),
    // 用户区域
    memberArea: api.get("/baseapi/platform/statistics/member/area"),
    // 用户构成
    memberPart: api.get("/baseapi/platform/statistics/member/part"),
    // 用户留存
    memberRetained: api.get("/baseapi/platform/statistics/member/retained"),

    /** 会员统计 */
    // 会员概况
    profitTotal: api.get("/baseapi/platform/statistics/profit/total"),
    // 会员趋势
    profitTrend: api.get("/baseapi/platform/statistics/profit/trend"),
    // 收益类型
    profit_finish: api.get("/baseapi/platform/statistics/profit/finish"),
    profit_part: api.get("/baseapi/platform/statistics/profit/part"),
    // 会员结构
    profitLevel: api.get("/baseapi/platform/statistics/profit/level"),
    // 会员区域
    profitArea: api.get("/baseapi/platform/statistics/profit/area"),
    // 分销转化
    profitChange: api.get("/baseapi/platform/statistics/profit/change"),
    // 商品分享
    profitRank: api.get("/baseapi/platform/statistics/profit/rank"),

    /** 售后统计 */
    // 售后概览
    afterTotal: api.get("/baseapi/platform/statistics/after/total"),
    // 售后趋势
    afterTrend: api.get("/baseapi/platform/statistics/after/trend"),
    // 售后分析
    afterAnalysis: api.get("/baseapi/platform/statistics/after/analysis"),
    // 售后商品
    afterRank: api.get("/baseapi/platform/statistics/after/rank"),

    /** 直播统计 */
    // 直播概况
    liveTotal: api.get("/baseapi/platform/statistics/live/total"),
    // 直播数据
    liveTrend: api.get("/baseapi/platform/statistics/live/trend"),
    // 直播转化
    liveChange: api.get("/baseapi/platform/statistics/live/change"),
    // 带货商品统计
    liveGoods: api.get("/baseapi/platform/statistics/live/goods"),
    // 主播统计
    liveAnchor: api.get("/baseapi/platform/statistics/live/anchor"),

    /** 售后看板 */

    /** 营销看板 */
    // 营销概况
    activityTotal: api.get("/baseapi/platform/statistics/activity/total"),
    // 营销活动
    activityPart: api.get("/baseapi/platform/statistics/activity/part"),
    // 营销转化
    activityChange: api.get("/baseapi/platform/statistics/activity/change"),
    // 营销活动趋势
    activityTrend: api.get("/baseapi/platform/statistics/activity/trend"),
    // 商品单价分布
    activityPrice: api.get("/baseapi/platform/statistics/activity/price"),

    // 订单报表
    orderReport: api.get("/baseapi/platform/statistics/order/report"),
    // 订单报表导出
    // orderExport: api.open(
    //     "/baseapi/platform/statistics/order/export",
    //     window.localStorage.getItem("syy_domain") as any
    // ),
    orderExport: api.get("/baseapi/platform/statistics/order/export"),
    // 订单报表-批量导出
    orderExportReport: api.get("/baseapi/platform/export/orderReport"),
    // 商品报表
    goodsReport: api.get("/baseapi/platform/statistics/goods/report"),
    // 商品报表导出
    goodsExport: api.get("/baseapi/platform/statistics/goods/export"),
    goodsExportGoodsReport: api.get("/baseapi/platform/export/goodsReport"),
    // 数据统计-商品统计-导出商品报表
    // 用户报表
    userReport: api.get("/baseapi/platform/statistics/member/user_report"),
    // 用户报表导出
    memberUserExport: api.get("/baseapi/platform/statistics/member/user_export"),
    // 数据统计-用户统计-用户报表-导出用户报表
    memberExportUserReport: api.get("/baseapi/platform/export/userReport"),
    // 积分订单报表
    integralReport: api.get("/baseapi/platform/statistics/integral/report"),
    // 积分订单报表导出
    integralExport: api.get("/baseapi/platform/statistics/integral/export"),
    // 数据统计-用户统计-积分订单报表-导出报表
    integralExportIntegralOrderReport: api.get("/baseapi/platform/export/integralOrderReport"),
    // 会员报表
    memberReport: api.get("/baseapi/platform/statistics/member/report"),
    // 会员报表导出
    memberExport: api.get("/baseapi/platform/statistics/member/export"),
    memberExportMemberReport: api.get("/baseapi/platform/export/memberReport"),
    // 收益报表
    profitReport: api.get("/baseapi/platform/statistics/profit/report"),
    // 收益报表导出
    exportProfit: api.get("/baseapi/platform/exportReport/exportProfit"),
    // 数据统计-会员统计-收益报表-收益报表导出
    exportProfitReport: api.get("/baseapi/platform/export/profitReport"),
    // 售后报表
    afterReport: api.get("/baseapi/platform/statistics/after/report"),
    // 售后报表导出
    exportAfter: api.get("/baseapi/platform/exportReport/exportAfter"),
    // 数据统计-售后统计-售后报表-导出
    exportAfterReport: api.get("/baseapi/platform/export/afterReport"),
    // 营销报表
    statisticsReport: api.get("/baseapi/platform/statistics/statistics/report"),
    // 营销报表导出
    activityExport: api.get("/baseapi/platform/statistics/activity/export"),
    // 数据统计-营销统计-营销报表-导出
    exportActivityReport: api.get("/baseapi/platform/export/activityReport"),
    // 优惠券报表
    couponReport: api.get("/baseapi/platform/statistics/statistics/coupon_report"),
    // 优惠券报表导出
    couponExport: api.get("/baseapi/platform/statistics/statistics/coupon_export"),
    // 优惠券报表导出
    exportCouponReport: api.get("/baseapi/platform/export/couponReport"),
    // 直播报表
    liveReport: api.get("/baseapi/platform/statistics/live/report"),
    // 直播报表导出
    liveExport: api.get("/baseapi/platform/statistics/live/export"),
    // 直播报表导出
    exportLiveReport: api.get("/baseapi/platform/export/liveReport"),
    // 财务报表
    moneyReport: api.get("/baseapi/platform/statistics/money/report"),
    // 财务报表导出
    exportFinance: api.get("/baseapi/platform/exportReport/exportFinance"),
    // 财务报表导出
    exportFinanceReport: api.get("/baseapi/platform/export/financeReport"),
};
export default dataStatistics;
