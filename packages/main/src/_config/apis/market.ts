import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    // -----------------------------------------------S 限时抢购 --------------------------------------//
    /** * 限时抢购-商品列表  ** */
    market_product_list: api.get("/baseapi/platform/goods/index"),
    /** * 限时抢购-列表  ** */
    market_limit_list: api.get("/baseapi/platform/limitActivity/getList"),
    /** * 限时抢购-新增  ** */
    market_limit_add: api.post("/baseapi/platform/limitActivity/createData"),
    /** * 限时抢购-详情  ** */
    market_limit_details: api.get("/baseapi/platform/limitActivity/getDetail"),
    /** * 限时抢购-编辑  ** */
    market_limit_edit: api.post("/baseapi/platform/limitActivity/updateData"),
    /** * 限时抢购-上架  ** */
    market_limit_enable: api.post("/baseapi/platform/limitActivity/putaway"),
    /** * 限时抢购-下架  ** */
    market_limit_disable: api.post("/baseapi/platform/limitActivity/takedown"),
    /** * 限时抢购-通过  ** */
    market_limit_pass: api.post("/baseapi/platform/limitActivity/pass"),
    /** * 限时抢购-驳回  ** */
    market_limit_reject: api.post("/baseapi/platform/limitActivity/reject"),
    /** * 限时抢购-删除  ** */
    market_limit_remove: api.post("/baseapi/platform/limitActivity/removeData"),
    /** * 限时抢购-提交 ** */
    market_limit_submit: api.post("/baseapi/platform/limitActivity/submitData"),
    /** * 限时抢购-获取活动货品库存量信息 ** */
    market_limit_getSkuStock: api.get("/baseapi/platform/limitActivity/getSkuStock"),
    /** * 限时抢购-修改库存  ** */
    market_limit_updateProductCount: api.post("/baseapi/platform/limitActivity/adjustStock"),
    /** * 限时抢购-获取日志  ** */
    market_limit_getLogs: api.get("/baseapi/platform/limitActivity/getLogs"),
    /** * 限时抢购-获取日志  ** */
    getGoodsProductByGoodsIds: api.get("/baseapi/platform/goods/getGoodsProductByGoodsIds"),
    // -----------------------------------------------E 限时抢购 --------------------------------------//

    // -----------------------------------------------S 拼团活动 --------------------------------------//
    /** * 拼团活动-列表 ** */
    market_group_list: api.get("/baseapi/platform/groupActivity/getList"),
    /** * 拼团活动- 详情** */
    market_group_details: api.get("/baseapi/platform/groupActivity/getDetail"),
    /** * 拼团活动 - 新增** */
    market_group_add: api.post("/baseapi/platform/groupActivity/createData"),
    /** * 拼团活动 -编辑** */
    market_group_edit: api.put("/baseapi/platform/groupActivity/updateData"),
    /** * 拼团活动 -上架** */
    market_group_enable: api.put("/baseapi/platform/groupActivity/putaway"),
    /** * 拼团活动 下架** */
    market_group_disable: api.put("/baseapi/platform/groupActivity/takedown"),
    /** * 拼团活动 提交** */
    market_group_submit: api.put("/baseapi/platform/groupActivity/submitData"),
    /** * 拼团活动 审核** */
    market_group_pass: api.put("/baseapi/platform/groupActivity/pass"),
    /** * 拼团活动 驳回** */
    market_group_reject: api.put("/baseapi/platform/groupActivity/reject"),
    /** * 拼团活动 删除** */
    market_group_remove: api.delete("/baseapi/platform/groupActivity/removeData"),
    /** * 拼团活动 获取活动库存** */
    market_group_getSkuStock: api.get("/baseapi/platform/groupActivity/getSkuStock"),
    /** * 拼团活动 修改货品库存** */
    market_group_updateProductCount: api.post("/baseapi/platform/groupActivity/adjustStock"),
    /** * 拼团活动 日志** */
    market_group_getLogs: api.get("/baseapi/platform/groupActivity/getLogs"),
    /** * 拼团活动 开团记录** */
    market_group_getGroupRecord: api.get("/baseapi/platform/groupActivity/getGroupRecord"),
    /** * 拼团活动 开团订单** */
    market_group_getGroupTeamOrder: api.get("/baseapi/platform/groupActivity/getGroupTeamOrder"),
    // -----------------------------------------------E 拼团活动 --------------------------------------//

    // -----------------------------------------------S 新人专享 --------------------------------------//
    /** * 新人专享-列表 ** */
    market_new_list: api.get("/baseapi/platform/activityPeople/getList"),
    /** * 新人专享-详情 ** */
    market_new_details: api.get("/baseapi/platform/activityPeople/getDetail"),
    /** * 新人专享-商品详情列表** */
    market_new_goodsList: api.get("/baseapi/platform/activityPeople/goodsList"),
    /** * 新人专享-商品sku列表** */
    market_new_getSku: api.get("/baseapi/platform/goods/getSku"),
    /** * 新人专享-新增商品 ** */
    market_new_addGoods: api.post("/baseapi/platform/activityPeople/addGoods"),
    /** * 新人专享-编辑活动商品 ** */
    market_new_updateGoodsData: api.post("/baseapi/platform/activityPeople/updateGoodsData"),
    /** * 新人专享-删除活动商品 ** */
    market_new_removeGoods: api.delete("/baseapi/platform/activityPeople/removeGoods"),
    /** * 新人专享-新增 ** */
    market_new_add: api.post("/baseapi/platform/activityPeople/createData"),
    /** * 新人专享-编辑 ** */
    market_new_edit: api.post("/baseapi/platform/activityPeople/updateData"),
    /** * 新人专享-上架** */
    market_new_putaway: api.put("/baseapi/platform/activityPeople/putaway"),
    /** * 新人专享-下架** */
    market_new_takedown: api.put("/baseapi/platform/activityPeople/takedown"),
    /** * 新人专享-通过** */
    market_new_pass: api.put("/baseapi/platform/activityPeople/pass"),
    /** * 新人专享-驳回 ** */
    market_new_reject: api.put("/baseapi/platform/activityPeople/reject"),
    /** * 新人专享-删除 ** */
    market_new_remove: api.delete("/baseapi/platform/activityPeople/removeData"),
    /** * 新人专享-提交 ** */
    market_new_submit: api.put("/baseapi/platform/activityPeople/submitData"),
    /** * 新人专享-获取货品库存 ** */
    market_new_SpecStock: api.get("/baseapi/platform/activityPeople/getActivitySpecStock"),
    /** * 新人专享-修改库存 ** */
    market_new_adjustStock: api.post("/baseapi/platform/activityPeople/adjustStock"),
    /** * 新人专享-日志 ** */
    market_new_getLogs: api.get("/baseapi/platform/activityPeople/getLogs"),
    // -----------------------------------------------E 新人专享 --------------------------------------//

    // -----------------------------------------------S 营销专区 --------------------------------------//
    /** * 营销专区-列表 ** */
    market_special_list: api.get("/baseapi/platform/marketZone/index"),
    /** * 营销专区- 新增   ** */
    market_special_add: api.post("/baseapi/platform/marketZone/add"),
    /** * 营销专区- / 编辑  ** */
    market_special_edit: api.post("/baseapi/platform/marketZone/edit"),
    /** * 营销专区- 详情  ** */
    market_special_details: api.get("/baseapi/platform/marketZone/get"),
    /** * 营销专区-上架 ** */
    market_special_isUp: api.post("/baseapi/platform/marketZone/isUp"),
    /** * 营销专区-下架 ** */
    market_special_isDown: api.post("/baseapi/platform/marketZone/isDown"),
    /** * 营销专区-删除 ** */
    market_special_remove: api.post("/baseapi/platform/marketZone/remove"),
    market_vip_level: api.get("/baseapi/platform/marketZone/getVisibleLevel"),
    // -----------------------------------------------E 营销专区 --------------------------------------//
    // -----------------------------------------------S 优惠券 ---------------------------------//
    // 新增优惠券按钮是否开启
    superShop_isCoupon: api.get("/baseapi/platform/superShop/isCoupon"),
    /** * 优惠券- 列表  ** */
    market_coupon_list: api.get("/baseapi/platform/coupon/index"),
    /** * 优惠券- 调整优惠券数量  ** */
    market_coupon_changeNum: api.post("/baseapi/platform/coupon/changeNum"),
    /** * 优惠券- 发放记录  ** */
    market_coupon_receiveIndex: api.get("/baseapi/platform/coupon/receiveIndex"),
    getCouponLink: api.get("/baseapi/platform/coupon/getCouponLink"),
    // 创建卷码弹窗
    market_coupon_createCodePopover: api.get("/baseapi/platform/coupon/createCodePopover"),
    // 适用门店配置
    market_coupon_StoreConfig: api.post("/baseapi/platform/coupon/applyStoreConfig"),
    // 适用门店获取配置
    market_coupon_getApplyStoreConfig: api.get("/baseapi/platform/coupon/getApplyStoreConfig"),
    // 创建卷码弹窗
    market_coupon_createCode: api.post("/baseapi/platform/coupon/createCode"),
    /** * 优惠券- 新增  ** */
    market_coupon_add: api.post("/baseapi/platform/coupon/add"),
    /** * 优惠券- 编辑  ** */
    market_coupon_edit: api.post("/baseapi/platform/coupon/edit"),
    /** * 优惠券- 详情  ** */
    market_coupon_details: api.get("/baseapi/platform/coupon/get"),
    /** * 优惠券- 启用 禁用** */
    market_coupon_checkOperate: api.get("/baseapi/platform/coupon/checkOperate"),
    /** * 优惠券- 删除商品** */
    market_coupon_removeGoods: api.get("/baseapi/platform/coupon/removeGoods"),
    /** * 优惠券- 添加商品** */
    market_coupon_addGoods: api.post("/baseapi/platform/coupon/addGoods"),
    /** * 优惠券- 调整商品列表** */
    market_coupon_goodsList: api.get("/baseapi/platform/coupon/couponGoodsList"),
    /** * 优惠券- 获取下拉配置** */
    market_coupon_getConfig: api.get("/baseapi/platform/coupon/getConfig"),
    /** * 优惠券- 获取发券方式 - 生成小程序码id ** */
    market_coupon_getAppletId: api.post("/baseapi/platform/common/setPosterSharing"),
    /** * 优惠券- 获取发券方式 - 生成端链 ** */
    market_coupon_shortUrl: api.post("/baseapi/platform/common/createShortUrl"),
    // -----------------------------------------------E 优惠券 ---------------------------------//
    // -----------------------------------------------S 发券宝 --------------------------------------//
    /** * 发券宝- 列表 ** */
    market_sendcoupons_list: api.get("/baseapi/platform/sendcoupons/list"),
    /** * 发券宝- 用户列表  ** */
    market_member_simpleIndex: api.get("/baseapi/platform/member/getMember"),
    /** * 发券宝- 新增编辑 ** */
    market_sendcoupons_save: api.post("/baseapi/platform/sendcoupons/save"),
    /** * 发券宝- 导入指定用户 ** */
    market_sendcoupons_import: api.post("/baseapi/platform/sendcoupons/appointUserImport"),
    /** * 发券宝- 导出模板 ** */
    market_sendcoupons_export: api.get("/baseapi/platform/sendcoupons/getTemplate"),
    /** * 发券宝- 详情 ** */
    market_sendcoupons_detail: api.get("/baseapi/platform/sendcoupons/detail"),
    /** * 发券宝- 删除 ** */
    market_sendcoupons_remove: api.post("/baseapi/platform/sendcoupons/del"),
    /** * 发券宝- 提交 ** */
    market_sendcoupons_submit: api.post("/baseapi/platform/sendcoupons/commit"),
    /** * 发券宝- 上架 ** */
    market_sendcoupons_up: api.post("/baseapi/platform/sendcoupons/up"),
    /** * 发券宝- 下架 ** */
    market_sendcoupons_down: api.post("/baseapi/platform/sendcoupons/down"),
    /** * 发券宝- 通过 ** */
    market_sendcoupons_pass: api.post("/baseapi/platform/sendcoupons/pass"),
    /** * 发券宝- 驳回 ** */
    market_sendcoupons_reject: api.post("/baseapi/platform/sendcoupons/reject"),
    /** * 发券宝- 日志记录 ** */
    market_sendcoupons_getlog: api.get("/baseapi/platform/sendcoupons/log"),
    /** * 发券宝- 获取等级列表 ** */
    market_getlevel: api.get("/baseapi/platform/member/level"),
    // -----------------------------------------------E 发券宝 --------------------------------------//

    // 会员首单激励
    marketFirstSingleIndex: api.get("/baseapi/platform/twitterEncourage/index"), // 会员首单激励列表
    marketFirstSingleAdd: api.post("/baseapi/platform/twitterEncourage/add"), // 会员首单激励添加
    marketFirstSingleEdit: api.post("/baseapi/platform/twitterEncourage/edit"), // 会员首单激励编辑
    marketFirstSingleRemove: api.get("/baseapi/platform/twitterEncourage/remove"), // 会员首单激励废除
    marketFirstSingleGet: api.get("/baseapi/platform/twitterEncourage/get"), // 会员首单激励详情
    marketFirstSingleCheckSub: api.get("/baseapi/platform/twitterEncourage/checkSub"), // 会员首单激励提交
    marketFirstSingleCheckPass: api.get("/baseapi/platform/twitterEncourage/checkPass"), // 会员首单激励审核通过  审核
    marketFirstSingleCheckUp: api.get("/baseapi/platform/twitterEncourage/checkUp"), // 会员首单激励上架
    marketFirstSingleCheckDown: api.get("/baseapi/platform/twitterEncourage/checkDown"), // 会员首单激励下架
    marketFirstSingleCheckReturn: api.get("/baseapi/platform/twitterEncourage/checkReturn"), // 会员首单激励驳回

    // ----------------------------------------------- S超级拼团活动 --------------------------------------//
    /** * 商品列表 ** */
    super_product_list: api.get("/baseapi/platform/goods/index"),
    /** * 超级拼团活动-列表 ** */
    super_group_list: api.get("/baseapi/platform/groupSuperActivity/getList"),
    /** * 超级拼团活动-详情** */
    super_group_details: api.get("/baseapi/platform/groupSuperActivity/getDetail"),
    /** * 超级拼团活动 - 新增** */
    super_group_add: api.post("/baseapi/platform/groupSuperActivity/createData"),
    /** * 超级拼团活动 -编辑** */
    super_group_edit: api.put("/baseapi/platform/groupSuperActivity/updateData"),
    /** * 超级拼团活动 -上架** */
    super_group_enable: api.put("/baseapi/platform/groupSuperActivity/putaway"),
    /** * 超级拼团活动 下架** */
    super_group_disable: api.put("/baseapi/platform/groupSuperActivity/takedown"),
    /** * 超级拼团活动 提交** */
    super_group_submit: api.put("/baseapi/platform/groupSuperActivity/submitData"),
    /** * 超级拼团活动 审核通过** */
    super_group_pass: api.put("/baseapi/platform/groupSuperActivity/pass"),
    /** * 超级拼团活动 驳回** */
    super_group_reject: api.put("/baseapi/platform/groupSuperActivity/reject"),
    /** * 超级拼团活动 删除** */
    super_group_remove: api.delete("/baseapi/platform/groupSuperActivity/removeData"),
    /** * 超级拼团活动 获取活动库存** */
    super_group_getSkuStock: api.get("/baseapi/platform/groupSuperActivity/getSkuStock"),
    /** * 超级拼团活动 修改货品库存** */
    super_group_updateProductCount: api.post("/baseapi/platform/groupSuperActivity/adjustStock"),
    /** * 超级拼团活动 操作日志** */
    super_group_getLogs: api.get("/baseapi/platform/groupSuperActivity/getLogs"),
    /** * 超级拼团活动 开团记录** */
    super_group_getGroupRecord: api.get("/baseapi/platform/groupSuperActivity/getGroupRecord"),
    /** * 超级拼团活动 开团订单** */
    super_group_getGroupTeamOrder: api.get("/baseapi/platform/groupSuperActivity/getGroupTeamOrder"),
    // -----------------------------------------------S 满额返券 --------------------------------------//
    /** * 满额返券-列表 ** */
    market_retruncoupons_list: api.get("/baseapi/platform/activityFullLimitReturnCoupon/getList"),
    /** * 满额返券-调整商品** */
    market_retruncoupons_goodsList: api.get("/baseapi/platform/activityFullLimitReturnCoupon/adjustGoodsList"),
    /** * 满额返券-添加商品** */
    market_retruncoupons_addGoods: api.post("/baseapi/platform/activityFullLimitReturnCoupon/addGoods"),

    /** * 满额返券 - 新增** */
    market_retruncoupons_add: api.post("/baseapi/platform/activityFullLimitReturnCoupon/createData"),
    /** * 满额返券 -编辑** */
    market_retruncoupons_edit: api.put("/baseapi/platform/activityFullLimitReturnCoupon/updateData"),
    /** * 满额返券- 详情 ** */
    market_retruncoupons_detail: api.get("/baseapi/platform/activityFullLimitReturnCoupon/getDetail"),
    /** * 满额返券 -上架** */
    market_retruncoupons_enable: api.put("/baseapi/platform/activityFullLimitReturnCoupon/putaway"),
    /** * 满额返券 下架** */
    market_retruncoupons_disable: api.put("/baseapi/platform/activityFullLimitReturnCoupon/takedown"),
    /** * 满额返券 提交** */
    market_retruncoupons_submit: api.put("/baseapi/platform/activityFullLimitReturnCoupon/submitData"),
    /** * 满额返券 审核** */
    market_retruncoupons_pass: api.put("/baseapi/platform/activityFullLimitReturnCoupon/pass"),
    /** * 满额返券 驳回** */
    market_retruncoupons_reject: api.put("/baseapi/platform/activityFullLimitReturnCoupon/reject"),
    /** * 满额返券 删除** */
    market_retruncoupons_remove: api.delete("/baseapi/platform/activityFullLimitReturnCoupon/removeData"),
    /** * 满额返券 日志** */
    market_retruncoupons_getLogs: api.get("/baseapi/platform/activityFullLimitReturnCoupon/getLogs"),
    /** * 满额返券  参与用户** */
    market_retruncoupons_getGroupRecord: api.get("/baseapi/platform/activityFullLimitReturnCoupon/getJoinRecord"),
    // -----------------------------------------------E 拼团活动 --------------------------------------//
    integralActivityList: api.get("/baseapi/platform/integralActivity/list"), // 积分活动列表
    downActivity: api.post("/baseapi/platform/integralActivity/down"), // 下架积分活动
    deleteActivity: api.delete("/baseapi/platform/integralActivity/delete"), // 删除
    addActivity: api.post("/baseapi/platform/integralActivity/add"), // 添加积分活动
    updateActivity: api.put("/baseapi/platform/integralActivity/edit"), // 编辑积分活动
    detailActivity: api.get("/baseapi/platform/integralActivity/detail"), // 积分活动详情
    downQR: api.get("/baseapi/platform/integralActivity/getXcxCode"), // 二维码信息
    coPartnerShops: api.get("/baseapi/platform/integralActivity/coPartnerShops"), // 门店列表
    activityStatistics: api.get("/baseapi/platform/statistics/integralActivity/activityStatistics"), // 活动统计
    intergalActivityTrend: api.get("/baseapi/platform/statistics/integralActivity/activityTrend"), // 活动趋势
    storeStatistics: api.get("/baseapi/platform/statistics/integralActivity/storeStatistics"), // 门店统计
    storeExport: api.get("/baseapi/platform/statistics/integralActivity/storeExport"), // 门店导出
    // 设置会员日
    setMemberDay: api.get("/baseapi/platform/activityMember/setMemberDay"),
    // 获取会员日
    getMemberDay: api.get("/baseapi/platform/activityMember/getMemberDay"),
    // 营销日活动列表
    getActivityMemberList: api.get("/baseapi/platform/activityMember/getList"),
    // 设置权重
    editMemberWeight: api.get("/baseapi/platform/activityMember/editWeight"),
    // 营销日活动详情
    MenmberDayDetail: api.get("/baseapi/platform/activityMember/detail"),
    // 提交会员日审核
    commitMemberDay: api.get("/baseapi/platform/activityMember/commit"),
    // 编辑活动
    editMemberDay: api.post("/baseapi/platform/activityMember/edit"),
    // 活动上下架
    memberUpOrDown: api.get("/baseapi/platform/activityMember/upOrDown"),
    // 创建会员日活动
    createDataMember: api.post("/baseapi/platform/activityMember/createData"),
    // 删除数据
    removeMemberDay: api.get("/baseapi/platform/activityMember/remove"),

    // ----------------------------------------------- 赠品v2.2.5 --------------------------------------//
    // 赠品活动列表
    activityGiftList: api.get("/baseapi/platform/activityGift/list"),
    // 删除活动赠品
    activityGiftRemove: api.delete("/baseapi/platform/activityGift/remove"),
    // 上架活动
    putAwayGift: api.put("/baseapi/platform/activityGift/putAway"),
    // 下架活动
    takeDownGift: api.put("/baseapi/platform/activityGift/takeDown"),
    // 活动日志
    activityGiftGetLogs: api.get("/baseapi/platform/activityGift/getLogs"),
    // 赠品参与明细
    activityGiftparticipateDetail: api.get("/baseapi/platform/activityGift/participateDetail"),
    // 提交活动
    activityGifSubmit: api.put("/baseapi/platform/activityGift/submitData"),
    // 赠品活动信息-修改库存列表
    inventoryGiftList: api.get("/baseapi/platform/activityGift/goodsInfo/list"),
    // 修改库存
    changeStockGift: api.put("/baseapi/platform/activityGift/changeStock"),
    // 添加商品列表
    addGoodsGiftList: api.get("/baseapi/platform/activityGift/goods/list"),
    // 修改添加商品
    updateGoodsGift: api.put("/baseapi/platform/activityGift/goods/batchUpdate"),
    // 赠品活动-新增
    activityGiftCreate: api.post("/baseapi/platform/activityGift/create"),
    // 赠品活动-详情
    activityGiftDetail: api.get("/baseapi/platform/activityGift/detail"),
    // 赠品活动-商品列表
    activityGoodsList: api.get("/baseapi/platform/activityGift/goods/list"),
    // 赠品活动-分类列表
    activityClassifyList: api.get("/baseapi/platform/activityGift/classify/list"),
    // 赠品活动-商品列表-批量删除
    activityClassifyListDelete: api.delete("/baseapi/platform/activityGift/goods/remove"),
    // 赠品活动-商品列表-批量添加
    activityClassifyListAdd: api.post("/baseapi/platform/activityGift/goods/create"),
    // 赠品活动-审核通过
    activityGiftPass: api.put("/baseapi/platform/activityGift/pass"),
    // 赠品活动-驳回
    activityGiftReject: api.put("/baseapi/platform/activityGift/reject"),
    // 赠品活动-分类数据
    activityDetailClassifyList: api.get("/baseapi/platform/activityGift/classify/list"),
    // 赠品活动-赠品数据
    activityGoodsInfoList: api.get("/baseapi/platform/activityGift/goodsInfo/list"),
    // 赠品活动-编辑
    activityEdit: api.put("/baseapi/platform/activityGift/update"),
    // 赠品活动-分类-新增
    activityClassifyCreate: api.post("/baseapi/platform/activityGift/classify/create"),
    // 赠品活动-分类-删除
    activityClassifyDelete: api.delete("/baseapi/platform/activityGift/classify/remove"),
    // 批量审核提交
    batchGiftSubmitData: api.put("/baseapi/platform/activityGift/batchSubmitData"),
    // 批量上架
    batchGiftPutAway: api.put("/baseapi/platform/activityGift/batchPutAway"),
    // -----------------------------------------------S 砍价 --------------------------------------//
    // 砍价活动列表
    getBargainList: api.get("/baseapi/platform/bargainActivity/getList"),
    // 砍价活动-下架
    bargainTakedown: api.put("/baseapi/platform/bargainActivity/takedown"),
    // 砍价活动-上架
    bargainPutaway: api.put("/baseapi/platform/bargainActivity/putaway"),
    // 砍价活动-删除
    bargainRemove: api.delete("/baseapi/platform/bargainActivity/removeData"),
    // 砍价活动-获取库存
    getBargainSkuStock: api.get("/baseapi/platform/bargainActivity/getSkuStock"),
    // 砍价活动-修改库存
    adjustBargainStock: api.post("/baseapi/platform/bargainActivity/adjustStock"),
    // 砍价活动-编辑
    bargainEdit: api.post("/baseapi/platform/bargainActivity/edit"),
    // 砍价活动-新增
    bargainCreate: api.post("/baseapi/platform/bargainActivity/createData"),
    // 砍价活动-详情
    getBargainDetail: api.get("/baseapi/platform/bargainActivity/detail"),
    // 设置砍价配置
    setBargainConfig: api.post("/baseapi/platform/bargainActivity/setConfig"),
    // 获取砍价配置
    getBargainConfig: api.get("/baseapi/platform/bargainActivity/getConfig"),
    // 获取砍价活动明细
    getBargainLog: api.get("/baseapi/platform/bargainActivity/getBargainLog"),
    // 砍价活动日志
    getBargainLogs: api.get("/baseapi/platform/bargainActivity/getLogs"),
    // 砍价活动-提交
    bargainSubmit: api.put("/baseapi/platform/bargainActivity/submitData"),
    // 砍价活动-审核驳回
    bargainReject: api.put("/baseapi/platform/bargainActivity/reject"),
    // 砍价活动-审核通过
    bargainPass: api.put("/baseapi/platform/bargainActivity/pass"),

    // 多买优惠
    moreBuyActivity_getList: api.get("/baseapi/platform/moreBuyActivity/getList"),
    moreBuyActivity_createData: api.post("/baseapi/platform/moreBuyActivity/createData"),
    moreBuyActivity_detail: api.get("/baseapi/platform/moreBuyActivity/detail"),
    moreBuyActivity_removeData: api.delete("/baseapi/platform/moreBuyActivity/removeData"),
    moreBuyActivity_edit: api.post("/baseapi/platform/moreBuyActivity/edit"),
    moreBuyActivity_getLogs: api.get("/baseapi/platform/moreBuyActivity/getLogs"),
    moreBuyActivity_submitData: api.put("/baseapi/platform/moreBuyActivity/submitData"),
    moreBuyActivity_pass: api.put("/baseapi/platform/moreBuyActivity/pass"),
    moreBuyActivity_reject: api.put("/baseapi/platform/moreBuyActivity/reject"),
    moreBuyActivity_orderLogs: api.get("/baseapi/platform/moreBuyActivity/orderLogs"),
    moreBuyActivity_takedown: api.put("/baseapi/platform/moreBuyActivity/takedown"),
    moreBuyActivity_putaway: api.put("/baseapi/platform/moreBuyActivity/putaway"),
    moreBuyActivity_editLimit: api.put("/baseapi/platform/moreBuyActivity/editLimit"),
    moreBuyActivity_exceptionGoodList: api.get("/baseapi/platform/moreBuyActivity/exceptionGoodList"),
    moreBuyActivity_exceptionEdit: api.post("/baseapi/platform/moreBuyActivity/exceptionEdit"),
    moreBuyActivity_goodList: api.get("/baseapi/platform/moreBuyActivity/goodList"),
    moreBuyActivity_saveGood: api.post("/baseapi/platform/moreBuyActivity/saveGood"),

    // ------------------------------------------ v2.3.4版本新增 start ------------------------------------------//
    // 校验该商品在时间范围内是否同时参与了其他活动
    overlayCheck: api.post("/baseapi/platform/groupActivity/overlayCheck"),
    /** ----------------------满减活动-----------------------* */
    // 满减活动列表
    dicount_list: api.get("/baseapi/platform/activity/discount/list"),
    // 满减活动添加
    discount_add: api.post("/baseapi/platform/activity/discount/create"),
    // 满减活动修改
    discount_edit: api.post("/baseapi/platform/activity/discount/update"),
    // 满减活动详情
    discount_detail: api.get("/baseapi/platform/activity/discount/detail"),
    // 满减活动操作日志
    discount_log: api.get("/baseapi/platform/activity/discount/logs"),
    // 满减活动提交
    discount_submit: api.put("/baseapi/platform/activity/discount/submit"),
    // 满减活动审核通过
    discount_pass: api.put("/baseapi/platform/activity/discount/pass"),
    // 满减活动审核驳回
    discount_reject: api.put("/baseapi/platform/activity/discount/reject"),
    // 满减活动修改参与限制
    discount_limit: api.put("/baseapi/platform/activity/discount/limit"),
    // 满减活动修改例外商品
    discount_scope_out: api.put("/baseapi/platform/activity/discount/scope_out"),
    // 满减活动修改指定商品
    discount_scope: api.put("/baseapi/platform/activity/discount/scope"),
    // 满减活动删除
    discount_delete: api.delete("/baseapi/platform/activity/discount/delete"),
    // 满减活动上架
    discount_putaway: api.put("/baseapi/platform/activity/discount/up"),
    // 满减活动下架
    discount_putdown: api.put("/baseapi/platform/activity/discount/down"),
    // 满减活动参与明细（）
    discount_join_order: api.get("/baseapi/platform/activity/discount/join_order"),
    // 获取指定商品、例外商品列表
    get_scope_goods: api.get("/baseapi/platform/activity/discount/scope_goods"),
    // 叠加商品列表
    get_overlay_list: api.get("/baseapi/platform/activityGift/overlay/list"),
    // 叠加商品-添加
    Gift_overlay_create: api.post("/baseapi/platform/activityGift/overlay/create"),
    /** ----------------------下单立减-----------------------* */
    // 下单立减-添加
    single_reduction_add: api.post("/baseapi/platform/activitySingleReduction/addData"),
    // 下单立减-编辑
    single_reduction_edit: api.post("/baseapi/platform/activitySingleReduction/editData"),
    // 下单立减-删除
    single_reduction_delete: api.delete("/baseapi/platform/activitySingleReduction/removeData"),
    // 下单立减-提交
    single_reduction_submit: api.put("/baseapi/platform/activitySingleReduction/submitData"),
    // 下单立减-驳回
    single_reduction_reject: api.put("/baseapi/platform/activitySingleReduction/reject"),
    // 下单立减-通过
    single_reduction_pass: api.put("/baseapi/platform/activitySingleReduction/pass"),
    // 下单立减-上架
    single_reduction_putaway: api.put("/baseapi/platform/activitySingleReduction/putaway"),
    // 下单立减-下架
    single_reduction_takedown: api.put("/baseapi/platform/activitySingleReduction/takedown"),
    // 下单立减-操作日志
    single_reduction_logs: api.get("/baseapi/platform/activitySingleReduction/getLogs"),
    // 下单立减-活动列表
    single_reduction_list: api.get("/baseapi/platform/activitySingleReduction/getList"),
    // 下单立减-参与明细
    single_reduction_order: api.get("/baseapi/platform/activitySingleReduction/getPlaceOrder"),
    // 下单立减-修改商品
    single_reduction_edit_goods: api.post("/baseapi/platform/activitySingleReduction/editGoods"),
    // 下单立减-详情
    single_reduction_detail: api.get("/baseapi/platform/activitySingleReduction/getDetail"),
    // 下单立减-校验
    single_reduction_check: api.get("/baseapi/platform/activitySingleReduction/checkGoods"),
    // 下单立减-参与数量限制
    single_reduction_join_limit: api.put("/baseapi/platform/activitySingleReduction/editLimit"),
    // ------------------------------------------ v2.3.4版本新增 end ------------------------------------------//
    // --------------------------------------正官庄赠品统计--------------------//
    // 活动概况
    zgzActivityStatus: api.get("/baseapi/platform/statistics/giftActivity/overview"),
    // 成本占比
    zgzCostRatio: api.get("/baseapi/platform/statistics/giftActivity/costRatio"),
    // 参与概况
    zgzJoinStatus: api.get("/baseapi/platform/statistics/giftActivity/participateOverview"),
    // 正官庄活动趋势
    zgzActivityTrend: api.get("/baseapi/platform/statistics/giftActivity/trend"),
    // 参与概况导出
    zgzJoinStatusExcel: api.get("/baseapi/platform/export/giftActivityOrder"),
};

export default apis;
