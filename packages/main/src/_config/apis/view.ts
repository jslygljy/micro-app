import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    /** 是否已经设置过首页新手导航 */
    indexTourIsUse: api.get("/baseapi/platform/beginnerGuidance/indexIsUsed"),
    /** 设置首页新手导航为已使用 */
    setIndexTourToUsed: api.get("/baseapi/platform/beginnerGuidance/indexUse"),
    /** 首页新手导航 */
    indexTour: api.get("/baseapi/platform/beginnerGuidance/index"),
    /** 商品管理模块新手导航 */
    productTour: api.get("/baseapi/platform/beginnerGuidance/product"),
    /** 代理模块新手导航 */
    proxyTour: api.get("/platform/beginnerGuidance/agent"),
    // ----------------------------------------------- 预览视图页面 --------------------------------------//
    // 首页
    memberRankList: api.get("/baseapi/platform/tongji/member"), // 会员消费排名
    commissionRankList: api.get("/baseapi/platform/tongji/ranking"), // 佣金排行
    addTodayData: api.get("/baseapi/platform/tongji/newmember"), // 今日新增
    summaryTotal: api.get("/baseapi/platform/tongji/total"), // 汇总
    saleslists: api.get("/baseapi/platform/tongji/saleslists"), // 商品排行
    summaryToday: api.get("/baseapi/platform/tongji/today"), // 今日汇总
    getMemberView: api.get("/baseapi/platform/tongji/order"), // 今日汇总

    // 订单
    getOrderView: api.get("/baseapi/platform/order/getOrderOverView"),
    getAfterOrderView: api.get("/baseapi/platform/afterMarket/statistical"),
    // 会员概览
    getMemberCore: api.get("/baseapi/platform/tongji/memberslist"),
    // 商品概览
    getProView: api.get("/baseapi/platform/statisticsGoods/general"),
    // -----------------------------------------------E 预览视图页面 --------------------------------------//
};

export default apis;
