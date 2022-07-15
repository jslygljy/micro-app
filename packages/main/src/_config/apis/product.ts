import {api, MapleRequestApis} from "maple-request";

const income = {
    incomeList: api.get("/baseapi/platform/goodspartner/index"),
    incomeGet: api.get("/baseapi/platform/goodspartner/get"),
    incomeLog: api.get("/baseapi/platform/goodspartner/loglist"),
    incomeLogType: api.get("/baseapi/platform/goodspartner/gettype"),
    incomeRemove: api.post("/baseapi/platform/goodspartner/remove"),
    incomeGetGoods: api.get("/baseapi/platform/goodspartner/getgoods"),
    incomeAddIncome: api.post("/baseapi/platform/goodspartner/set"),
};
// 零售收益设置
const profitConfig = {
    getRetailProfitConfig: api.get("/baseapi/platform/config/getRetailProfitConfig"), // 获取零售设置页面
    setRetailProfitConfig: api.post("/baseapi/platform/config/setRetailProfitConfig"), // 保存零售设置
    retailProductList: api.get("/baseapi/platform/agent/get_profit_goods"), // 零售商品列表
    proxyProductList: api.get("/baseapi/platform/agent/get_retail_goods"), // 代理商品列表
    saveRetailProfitGoods: api.post("/baseapi/platform/agent/save_goods"), // 保存编辑零售商品
    // addRetailProfitGoods: api.post(
    //     "/baseapi/platform/agent/retailProfit/addRetailProfitGoods"
    // ), // 提交新增零售商品
    // editRetailProfitGoods: api.post(
    //     "/baseapi/platform/agent/retailProfit/editRetailProfitGoods"
    // ), // 编辑零售商品

    delRetailProfitGoods: api.post("/baseapi/platform/agent/del_profit_goods"), // 删除零售商品
    getRetailLogs: api.get("/baseapi/platform/agent/log"), // 获取零售操作日志
    /* ======================= */
};
const apis: MapleRequestApis = {
    // 收益调整
    ...income,
    // 零售收益设置
    ...profitConfig,
    // 多门店 - 门店价格
    productStorePrice: api.get("/baseapi/platform/goods/priceIndex"), // 商品货品列表
    productStorePriceSpec: api.get("/baseapi/platform/goods/specIndex"), // 商品规格列表（多店版）
    /* ================ 商品列表 ================ */
    productCodeByGoodsId: api.get("/baseapi/platform/goods/getProductCodeByGoodsId"), // 总部权限==查看条码
    saveSingleProductBarcodeData: api.post("/baseapi/platform/goods/saveSingleProductBarcodeData"), // 单个商品新增或者编辑条码
    productExportGoods: api.get("/baseapi/platform/export/goods"), // 商品管理-商品列表-导出商品接口
    productGoodsIndex: api.get("/baseapi/platform/goods/index"), // 商品列表
    productGetDetail: api.get("/baseapi/platform/goods/get"), // 查看详情
    productGetCateTree: api.get("/baseapi/platform/category/getCateTree"), // 类目
    productGoodsEnable: api.post("/baseapi/platform/goods/enable"), // 操作 上架
    productGoodsDisable: api.post("/baseapi/platform/goods/disable"), // 操作 下架
    productAdd: api.post("/baseapi/platform/goods/add"), // 添加商品
    productEdit: api.post("/baseapi/platform/goods/edit"), // 修改商品
    changGoodsSort: api.post("/baseapi/platform/goods/changGoodsSort"), // 修改排序序数
    productUpdateProductPrice: api.post("/baseapi/platform/goods/updateProductPrice"), // 修改价格
    productUpdateProductStock: api.post("/baseapi/platform/goods/updateProductStock"), // 修改库存
    productStoreUnwrapSetting: api.post("/baseapi/platform/goods/storeUnwrapSetting"), // 拆包设置递交接口
    importProductBarcode: api.post("/baseapi/platform/goods/importProductBarcode"), // 导入货品条码
    getTemplate: api.get("/baseapi/platform/goods/getTemplate"), // 获取导入模板

    productCommentIndex: api.post("/baseapi/platform/comment/list"), // 商品评价列表
    productCommentReply: api.post("/baseapi/platform/comment/reply"), // 商品评价
    productCommentEnable: api.post("/baseapi/platform/comment/enable"), // 审核通过
    productCommentDisable: api.post("/baseapi/platform/comment/disable"), // 审核驳回
    productUpdateCategory: api.post("/baseapi/platform/goods/updateCategory"), // 修改分类
    productGetHandleLog: api.get("/baseapi/platform/goods/getLogs"), // 操作日志
    /* ================ 商品列表 ================ */

    /* ================ 商品品牌 ================ */
    productGoodsbrandList: api.get("/baseapi/platform/goodsbrand/index"), // 品牌列表
    productGoodsbrandDetails: api.get("/baseapi/platform/goodsbrand/get"), // 品牌详情
    productGoodsbrandAdd: api.post("/baseapi/platform/goodsbrand/add"), // 品牌新增
    productGoodsbrandEdit: api.post("/baseapi/platform/goodsbrand/edit"), // 品牌编辑
    productGoodsbrandEnable: api.post("/baseapi/platform/goodsbrand/enable"), // 品牌启用
    productGoodsbrandDisable: api.post("/baseapi/platform/goodsbrand/disable"), // 品牌禁用
    productGoodsbrandRemove: api.post("/baseapi/platform/goodsbrand/remove"), // 品牌删除
    /* ================ 商品品牌 ================ */

    /* ================ 商品分类 ================ */
    productAdvertList: api.post("/baseapi/platform/advert/list"), // 广告位列表
    productAdvertDetails: api.get("/baseapi/platform/advert/getOneInfo"), // 广告详情
    productAdvertAdd: api.post("/baseapi/platform/advert/add"), // 广告添加
    productAdvertEdit: api.post("/baseapi/platform/advert/edit"), // 广告编辑
    productAdvertEnable: api.post("/baseapi/platform/advert/enable"), // 上架
    productAdvertDisable: api.post("/baseapi/platform/advert/disable"), // 下架
    productTypecategoryGetConfig: api.get("/baseapi/platform/category/getConfig"), // 获取分类等级
    productTypecategorySetConfig: api.post("/baseapi/platform/category/setConfig"), // 添加或修改商品分类等级
    productTypecategoryList: api.get("/baseapi/platform/category/index"), // 商品类目列表
    productTypecategoryParentList: api.get("/baseapi/platform/category/getParent"), // 商品一级类目列表
    productTypeCategoryAdd: api.post("/baseapi/platform/category/add"), // 商品类目-新增保存
    productTypeCategoryEdit: api.post("/baseapi/platform/category/edit"), // 商品类目-编辑保存
    productTypeCategoryEnable: api.post("/baseapi/platform/category/enable"), // 商品类目-启用
    productTypeCategoryDisable: api.post("/baseapi/platform/category/disable"), // 商品类目-禁用
    productTypecategoryRemove: api.post("/baseapi/platform/category/remove"), // 商品类目-删除
    productTypeCategoryDetails: api.get("/baseapi/platform/category/get"), // 商品类目-详情
    productEditHidden: api.post("/baseapi/platform/category/editHidden"), // 商品类目-隐藏/显示
    /* ================ 商品分类 ================ */

    // -----------------新接口----------------//
    productGoodsPreset: api.get("/baseapi/platform/goods/preset"), // 查看预设
    productGoodsSetPreset: api.post("/baseapi/platform/goods/setPreset"), // 保存预设
    productGetProfit: api.get("/baseapi/platform/goods/getProfit"), // 查看佣金
    productSetProfit: api.post("/baseapi/platform/goods/setProfit"), // 设置佣金
    productGetProductCategory: api.get("/baseapi/platform/category/getParent"), // 获取商品类目

    specialList: api.get("/baseapi/platform/special/getList"), // 获取活动专区列表
    getPageList: api.get("/baseapi/platform/theme/pageList"), // 获取活动专区列表

    equitiesIndex: api.get("/baseapi/platform/equities/index"), // 分类权益列表
    equitiesAdd: api.post("/baseapi/platform/equities/add"), // 分类权益添加
    equitiesRemove: api.get("/baseapi/platform/equities/remove"), // 分类权益删除
    equitiesDisable: api.get("/baseapi/platform/equities/disable"), // 分类权益禁用
    equitiesEnable: api.get("/baseapi/platform/equities/enable"), // 分类权益启用
    equitiesGet: api.get("/baseapi/platform/equities/get"), // 分类权益详情
    equitiesEdit: api.post("/baseapi/platform/equities/edit"), // 分类权益修改
    categoryAdd: api.post("/baseapi/platform/equities/categoryAdd"), // 分类权益绑定
    categoryTree: api.get("/baseapi/platform/equities/categoryTree"), // 分类树
    /** =============== 商品管理-拆包、门店库存 ================ */
    unwrapInventory: api.get("/baseapi/platform/goods/unwrapInventory"), // 拆包库存列表
    storeUnwrapInventory: api.get("/baseapi/platform/goods/storeUnwrapInventory"), // 门店拆包商品库存列表
    storeUnwrapInventoryDetail: api.get("/baseapi/platform/goods/storeUnwrapInventoryDetail"), // 门店拆包商品库存列表詳情
    goodsHiddenAddOrEdit: api.post("/baseapi/platform/goodsHidden/addOrEdit"), // 添加/编辑隐藏商品
    goodsHiddenRemove: api.post("/baseapi/platform/goodsHidden/remove"), // 移除隐藏商品
    goodsIndex: api.get("/baseapi/platform/goods/index"), // 隐藏商品列表
};
export default apis;
