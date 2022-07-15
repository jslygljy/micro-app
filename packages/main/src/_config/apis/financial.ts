import {api, MapleRequestApis} from "maple-request";

const apis: MapleRequestApis = {
    /** ****  平台流水 */
    financialWater: api.get("/baseapi/platform/platform/water"),
    financialPlatformnewGetConditions: api.get("/baseapi/platform/platform/newGetConditions"),
    /** ****  提现配置 */
    financialGetRules: api.get("/baseapi/platform/wallet/getRules"),
    financialSetRules: api.post("/baseapi/platform/wallet/setRules"),
    financialWalletnewGetConditions: api.get("/baseapi/platform/wallet/newGetConditions"),
    financialWalletnewGetConditions1: api.get("/baseapi/platform/wallet/newGetConditions1"),
    /** ****  提现记录 */
    financialWithdrawIndex: api.get("/baseapi/platform/wallet/index"),
    financialWithdrawAudit: api.post("/baseapi/platform/wallet/audit"),
    financialWithdrawGet: api.get("/baseapi/platform/wallet/get"),
    /** ****  打款记录 */
    financialWithdrawConfirmIndex: api.get("/baseapi/platform/wallet/confirmIndex"),
    /** ****  流水明细 */
    finanicialGetFlowDetail: api.get("/baseapi/platform/bill/index"),
    /** ****  流水明细 */
    exportFinanceFlow: api.get("/baseapi/platform/export/financeFlow"),
    /** ****  待审核列表 */
    finanicialGetPendingCheck: api.get("/baseapi/platform/wallet/index"),
    /** ****  一键审核 */
    finanicialAllAudit: api.post("/baseapi/platform/wallet/allAudit"),
    /** ****  批量审核 */
    finanicialMultipleAudit: api.post("/baseapi/platform/wallet/audit"),
    /** ****  一键审核计算金额和笔数 */
    finanicialAllAuditCaculate: api.post("/baseapi/platform/wallet/calculateSumAndCount"),
    /** ****  提现申请详情 */
    finanicialGetPayDetail: api.get("/baseapi/platform/wallet/get"),
    /** ****  待汇总列表 */
    finanicialPedingCollect: api.get("/baseapi/platform/bill/indexCollect"),
    /** ****  待打款 */
    finanicialPendingPay: api.get("/baseapi/platform/wallet/waitRemitPayment"),
    /** ****  提现明细列表 */
    finanicialGetSettlementDetails: api.get("/baseapi/platform/bill/withdraw"),
    /** ****  提现明细列表 */
    finanicialExportWithdrawDetail: api.get("/baseapi/platform/export/withdrawDetail"),
    /** ****  批量结算 */
    finanicialBatchSettle: api.post("/baseapi/platform/bill/audit"),
    /** ****  一键汇总 */
    finanicialFastAllAudit: api.post("/baseapi/platform/bill/allAudit"),
    /** ****  导出打款记录列表 */
    finanicialExportRemit: api.get("/baseapi/platform/wallet/exportRemit"),
    /** ****  提现审核-待打款-导出列表 */
    walletExportRemit: api.get("/baseapi/platform/export/waitShipPayment"),
    /** ****  导出打款记录列表 */
    exportWaitShipPayment: api.get("/baseapi/platform/export/waitShipPayment"),
    /** ****  导出打款记录明细 */
    finanicialExportRemitInfo: api.get("/baseapi/platform/wallet/exportRemitInfo"),
    /** ****  导出打款记录明细 */
    exportExportRemitInfo: api.get("/baseapi/platform/export/exportRemitInfo"),
    /** ****  打款 */
    financialWithdrawConfirm: api.post("/baseapi/platform/wallet/confirm"),
    /**  提现审核-待打款-查看失败原因 */
    wallet_failedPaymentList: api.get("/baseapi/platform/wallet/failedPaymentList"),
    /**  提现审核-待打款-批量退回钱包 */
    wallet_withdrawBackBalance: api.post("/baseapi/platform/wallet/withdrawBackBalance"),
    /** 财务概况 */
    // 财务概况
    moneyTotal: api.get("/baseapi/platform/statistics/money/total"),
    // 收入趋势
    moneyTrend: api.get("/baseapi/platform/statistics/money/trend"),
    // 提现趋势
    moneyWithdraw: api.get("/baseapi/platform/statistics/money/withdraw"),
    // ------------------------------------多门店-------------------------------//

    // 门店是否开启收账
    financial_superShop_isAccountReceivable: api.get("/baseapi/platform/superShop/isAccountReceivable"),
    // 我的账户（非单独收账）-流水明细
    financial_flow_detail: api.get("/baseapi/platform/superShopData/flowDetails"),
    // 我的账户（单独收账）-收益明细
    financial_profit_index: api.get("/baseapi/platform/superShopData/profitIndex"),
    // 我的账户（单独收账）-提现记录
    financial_withdraw_index: api.get("/baseapi/platform/superShopData/withdrawIndex"),
    // 我的账户（单独收账）-提现操作
    financial_withdraw_withdraw: api.post("/baseapi/platform/superShopData/withdraw"),
    // 我的账户（单独收账）-获取银行卡列表
    financial_withdraw_superShopBank: api.get("/baseapi/platform/superShopData/superShopBank"),
    // 我的账户（单独收账）-获取银行卡列表
    financial_withdraw_handleMoney: api.post("/baseapi/platform/superShopData/handleMoney"),
    // 我的账户（单独收账）-实名认证
    financial_withdraw_certification: api.post("/baseapi/platform/superShopData/certification"),
    // 我的账户（单独收账）-添加银行卡
    financial_withdraw_bindBank: api.post("/baseapi/platform/superShopData/bindBank"),
    // 我的账户（单独收账）-添加银行卡
    financial_withdraw_removeBank: api.post("/baseapi/platform/superShopData/removeBank"),
    // 我的账户（单独收账）-发送验证码
    financial_verify_index: api.get("/baseapi/app/verify/index"),
    // 我的账户（单独收账）-汇总信息
    financial_superShopData_shopData: api.get("/baseapi/platform/superShopData/shopData"),
    // 我的账户（单独收账）-添加修改提现密码
    financial_superShopData_setPassWord: api.post("/baseapi/platform/superShopData/setPassWord"),
};

export default apis;
