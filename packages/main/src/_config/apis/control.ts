import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    // 是否已经选择行业模板
    isTemplete: api.get("/baseapi/platform/industryTemp/verity"),

    // 门店列表
    superShop_getList: api.get("/baseapi/platform/superShop/getList"),
    // 开关店
    superShop_openCloseShop: api.post("/baseapi/platform/superShop/openCloseShop"),
    // 门店修改商品权限
    superShop_updateGoodsAuthority: api.post("/baseapi/platform/superShop/updateGoodsAuthority"),
    // 门店业务权限修改
    superShop_updateBusinessAuthority: api.post("/baseapi/platform/superShop/updateBusinessAuthority"),
    // 添加门店
    superShop_add: api.post("/baseapi/platform/superShop/add"),
    // 获取门店详情
    superShop_getInfo: api.get("/baseapi/platform/superShop/getInfo"),
    // 门店地址限制区域
    superShop_getAreaList: api.get("/baseapi/platform/superShop/getAreaList"),
    // 编辑门店
    superShop_edit: api.post("/baseapi/platform/superShop/edit"),
    // 获取门店流水统计
    superShop_getOrderStatisticsInfo: api.get("/baseapi/platform/superShop/getOrderStatisticsInfo"),
    // 获取门店流水列表
    superShop_getOrderLogList: api.get("/baseapi/platform/superShop/getOrderLogList"),
    // 导出门店列表
    superShop_export: api.get("/baseapi/platform/superShop/export"),
    // 业务权限下拉列表
    copartner_getBusinessAuthorityList: api.get("/baseapi/platform/copartner/getBusinessAuthorityList"),
    // 商品权限下拉列表
    copartner_getGoodsAuthorityList: api.get("/baseapi/platform/copartner/getGoodsAuthorityList"),
    // 设置业务权限
    copartner_setBusinessAuthority: api.post("/baseapi/platform/copartner/setBusinessAuthority"),
    // 设置商品权限
    copartner_setGoodsAuthority: api.post("/baseapi/platform/copartner/setGoodsAuthority"),
    // 重置密码
    superShop_resetPassword: api.post("/baseapi/platform/superShop/resetPassword"),
    // 合伙人重置密码
    copartner_editPassword: api.post("/baseapi/platform/copartner/editPassword"),
    // 获取区域制配置
    copartner_getAreaConfig: api.get("/baseapi/platform/copartner/getAreaConfig"),
    // 区域制配置
    copartner_setAreaConfig: api.post("/baseapi/platform/copartner/setAreaConfig"),
    // 合伙人列表
    copartner_getCopartnerList: api.get("/baseapi/platform/copartner/getCopartnerList"),
    // 编辑修改合伙人
    copartner_editCopartner: api.post("/baseapi/platform/copartner/editCopartner"),
    // 合伙人下所有合伙人已有门店数量
    copartner_getPartnerInfo: api.get("/baseapi/platform/copartner/getPartnerInfo"),
    // 合伙人详情
    copartner_getCopartnerDetail: api.get("/baseapi/platform/copartner/getCopartnerDetail"),
    // 权限管理-->业务权限列表
    controlBusinessRightsGroupList: api.get("/baseapi/platform/rightsGroup/index"),
    // 权限管理-->业务权限详情
    controlBusinessRightsGroupGet: api.get("/baseapi/platform/rightsGroup/get"),
    // 权限管理-->业务权限添加
    controlBusinessRightsGroupAdd: api.post("/baseapi/platform/rightsGroup/add"),
    // 权限管理-->业务权限修改
    controlBusinessRightsGroupEdit: api.post("/baseapi/platform/rightsGroup/edit"),
    // 权限管理-->业务权限启用
    controlBusinessRightsGroupEnable: api.post("/baseapi/platform/rightsGroup/enable"),
    // 权限管理-->业务权限禁用
    controlBusinessRightsGroupDisable: api.post("/baseapi/platform/rightsGroup/disable"),

    // 权限管理-->商品权限列表
    controlGoodsAuthorityGetList: api.get("/baseapi/platform/goodsAuthority/getList"),
    // 权限管理-->商品权限列表详情
    controlGoodsAuthorityGetInfo: api.get("/baseapi/platform/goodsAuthority/getInfo"),
    // 权限管理-->商品权限列表添加。编辑
    controlGoodsAuthorityAdd: api.post("/baseapi/platform/goodsAuthority/add"),
    // 权限管理-->商品权限列表添加。编辑
    controlGoodsAuthorityEdit: api.post("/baseapi/platform/goodsAuthority/edit"),
    // 权限管理-->商品权限列表启用、禁用
    controlGoodsAuthorityEnableDisable: api.post("/baseapi/platform/goodsAuthority/enableDisable"),

    // 权限管理-->商品权限列表详情-->指定品牌数据
    controlGoodsAuthorityGetBrand: api.get("/baseapi/platform/goodsAuthority/getBrand"),
    // 权限管理-->商品权限列表详情-->指定分类商品下拉框
    controlGoodsAuthorityGetCategory: api.get("/baseapi/platform/goodsAuthority/getCategory"),
    // 权限管理-->商品权限列表详情-->添加商品列表
    controlGoodsAuthorityGetGoodsList: api.get("/baseapi/platform/goodsAuthority/getGoodsList"),

    // 权限管理-->商品权限列表详情-->指定商品列表
    controlGoodsAuthorityGetShopGoodsList: api.get("/baseapi/platform/goodsAuthority/getShopGoodsList"),
    // 权限管理-->商品权限列表详情-->指定商品列表移除
    controlGoodsAuthorityRemoveShopGoods: api.post("/baseapi/platform/goodsAuthority/removeShopGoods"),
    // 权限管理-->商品权限列表详情-->指定商品列表选择、取消（合伙人角色）
    controlGoodsAuthoritySelectGoods: api.post("/baseapi/platform/goodsAuthority/selectGoods"),

    // 权限管理-->商品权限列表详情-->添加商品列表添加
    controlGoodsAuthorityAddShopGoods: api.post("/baseapi/platform/goodsAuthority/addShopGoods"),
    // 门店开店发送账号短信
    superShop_send_messages: api.post("/baseapi/platform/superShop/send_messages"),
};

export default apis;
