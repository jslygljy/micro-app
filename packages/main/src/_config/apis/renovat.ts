import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    // -----------------------------------------------S 商城页面 --------------------------------------//
    /** * 商城页面-列表  ** */
    renovat_mallPage_condition: api.get("/baseapi/platform/theme/newGetPageConditions"),
    /** * 商城页面-列表  ** */
    renovat_mallPage_list: api.get("/baseapi/platform/theme/pageList"),
    /** * 商城页面-列表  ** */
    renovat_mallPage_remove: api.post("/baseapi/platform/theme/removePage"),
    /** * 商城页面-- 发布 取消发布  ** */
    renovat_mallPage_isUp: api.post("/baseapi/platform/theme/editPage"),
    /** * 商城页面-- 模板列表  ** */
    renovat_mallPage_shopTheme: api.get("/baseapi/platform/theme/shopTheme"),
    /** * 商城页面-- 新增页面  ** */
    renovat_mallPage_add: api.post("/baseapi/platform/theme/addPage"),
    // -----------------------------------------------E 商城页面 --------------------------------------//
    // -----------------------------------------------S 商城页面 --------------------------------------//
    /** * 商城装修--设计师信息  ** */
    renovat_webTemplate_info: api.get("/baseapi/platform/theme/info"),
    /** * 商城装修-模板列表  ** */
    renovat_webTemplate_list: api.get("/baseapi/platform/theme/themeList"),
    /** * 商城装修-- 新增模板  ** */
    renovat_webTemplate_add: api.post("/baseapi/platform/theme/addTheme"),
    /** * 商城装修-- 删除模板  ** */
    renovat_webTemplate_remove: api.post("/baseapi/platform/theme/removeTheme"),
    /** * 商城装修-- 切换模板  ** */
    renovat_webTemplate_change: api.post("/baseapi/platform/theme/choose"),
    // -----------------------------------------------E 商城页面 --------------------------------------//
    // -----------------------------------------------S 推荐商品 --------------------------------------//
    /** * 推荐商品-详情  ** */
    renovat_recommend_details: api.get("/baseapi/platform/recommend/get"),
    /** * 推荐商品-编辑  ** */
    renovat_recommend_edit: api.post("/baseapi/platform/recommend/editCart"),
    // -----------------------------------------------E 推荐商品 --------------------------------------//
    // -----------------------------------------------S 通用配置 --------------------------------------//
    /** * 通用配置-详情  ** */
    renovat_general_details: api.get("/baseapi/platform/protocol/get"),
    /** * 通用配置-保存** */
    renovat_general_save: api.post("/baseapi/platform/protocol/add"),
    // -----------------------------------------------E 推荐商品 --------------------------------------//
};

export default apis;
