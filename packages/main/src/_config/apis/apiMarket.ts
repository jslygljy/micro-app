import {api, MapleRequestApis} from "maple-request";

const apiMarket: MapleRequestApis = {
    // 获取面单统计详情
    platformApiMarketGetSingleStatistics: api.get("/baseapi/platform/apiMarket/getSingleStatistics"),
    // 面单明细
    platformApiMarketGetSingleList: api.get("/baseapi/platform/apiMarket/getSingleList"),
    // 获取物流轨迹
    platformApiMarketGetLogisticsInfo: api.get("/baseapi/platform/apiMarket/getLogisticsInfo"),

    // 获取物流查询详情
    getLogisticsStatistics: api.get("/baseapi/platform/apiMarket/getLogisticsStatistics"),
    // 物流明细
    platformApiMarketGetLogisticsList: api.get("/baseapi/platform/apiMarket/getLogisticsList"),

    // 获取短信统计详情
    getMessageStatistics: api.get("/baseapi/platform/apiMarket/getMessageStatistics"),
    // 导出短信统计列表
    exportMessageStatistics: api.get("/baseapi/platform/export/shortMessage"),
    // 获取短信列表
    getMessageList: api.get("/baseapi/platform/apiMarket/getMessageList"),

    // 获取银行卡列表
    getBankStatistics: api.get("/baseapi/platform/apiMarket/getBankStatistics"),
    // 银行卡明细
    getBankList: api.get("/baseapi/platform/apiMarket/getBankList"),
    // 获取银行字典
    getBank: api.get("/baseapi/platform/apiMarket/getBank"),

    // 获取实名认证列表
    getRealNameStatistics: api.get("/baseapi/platform/apiMarket/getRealNameStatistics"),
    // 实名认证明细
    getRealNameList: api.get("/baseapi/platform/apiMarket/getRealNameList"),
    getFacedRole: api.get("/baseapi/platform/apiMarket/isFaceId"), // 人脸核身权限
    openFace: api.post("/baseapi/platform/apiMarket/openFaceId"), // 开通人脸核身
    closeFace: api.post("/baseapi/platform/apiMarket/closeFaceId"), // 关闭人脸核身
    getFumanFace: api.get("/baseapi/platform/apiMarket/faceIdList"), // 人脸核身
    getFunmanFaceDetail: api.get("/baseapi/platform/apiMarket/faceIdDetail"), // 人脸核身明细
};
export default apiMarket;
