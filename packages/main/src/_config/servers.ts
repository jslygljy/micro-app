const domain = process.env.domain || "local";
// const host = process.env.host || "default";

// const devHosterName = host === "default" ? "ci" : process.env.host;
// const testHosterName = host === "default" ? "st1" : process.env.host;
const servers: {[key: string]: any} = {};

switch (domain) {
    case "local":
    case "development": {
        servers.kb = ``; // A端接口主要域名https://testTshopProMaxpr202.presyy.nbseo.cn
        servers.console = `https://preapiconsole.71360.com`; // 登录/文件管理 域名
        servers.buy = "https://prebuy.71360.com";
        servers.mainFront = "https://preconsole.71360.com"; // 主控制台域名
        // servers.mock = `https://yapi.xinrenleitech.com/mock/81/1.0`; // mock server 暂时没用
        // servers.mock = `https://yapi.syy.dongchali.cn/mock/27`; // mock server 新版本mock接口
        servers.KSH_URL = `presyy.nbseo.cn/ksh/#/`; // 商城装修模块跳转装修页面的路径
        servers.H5_URL = `presyy.nbseo.cn/h5/`; // H5_URL预览二维码时的路径
        // servers.mock = `https://yapi.syy.dongchali.cn/mock/460/`;
        servers.mock = `https://192.168.28.159:88`; // 多门店2.1.9.2 mock接口
        servers.file = servers.console; // 上传文件
        servers.association = "https://presyysqadminapi.71360.com";
        servers.manager = "https://presyymanager.71360.com/";
        servers.dongchali = "https://prewww.dongchali.net/";
        servers.tingyun = "//wkbrs2.tingyun.com/js/im6G788sdz0.js";
        servers.tFile = `https://preapiconsole.71360.com/`;
        servers.third = "http://member-import.88360.com/";
        servers.acting = "//presyyagent.71360.com"; // 代理域名
        break;
    }
    case "test": {
        servers.kb = ``; // A端接口主要域名
        servers.console = `https://preapiconsole.71360.com`;
        servers.buy = "https://prebuy.71360.com";
        servers.mainFront = "https://preconsole.71360.com"; // 主控制台域名
        servers.KSH_URL = `presyy.nbseo.cn/ksh/#/`;
        servers.H5_URL = `presyy.nbseo.cn/h5/`;
        servers.mock_URL = `https://devsyy001.presyy.nbseo.cn`;
        servers.file = servers.console; // 上传文件
        servers.association = "https://presyysqadminapi.71360.com";
        servers.manager = "https://presyymanager.71360.com/";
        servers.dongchali = "https://prewww.dongchali.net/";
        servers.tingyun = "//wkbrs2.tingyun.com/js/im6G788sdz0.js";
        servers.tFile = `https://preapiconsole.71360.com/`;
        servers.third = "http://member-import.88360.com/";
        servers.acting = "//presyyagent.71360.com"; // 代理域名
        break;
    }
    case "uat": {
        servers.kb = ``;
        servers.console = `https://api.71360.com/`;
        servers.buy = "https://buy.71360.com";
        servers.mainFront = "https://console.71360.com"; // 主控制台域名
        servers.KSH_URL = `v2.syy.nbseo.cn/ksh/#/`;
        servers.H5_URL = `v2.syy.nbseo.cn/h5/`;
        servers.file = `https://img01.71360.com`; // 上传文件
        servers.association = "https://syysqapi.71360.com";
        servers.manager = "https://uatsyymanager.71360.com/";
        servers.dongchali = "https://www.dongchali.net/";
        servers.tingyun = "//wkbrs2.tingyun.com/js/im6G788sdz0.js";
        servers.tFile = `https://fileupload.71360.com/`;
        servers.third = "http://member-import.88360.com/";
        servers.acting = "//uatsyyagent.71360.com"; // 代理域名
        break;
    }
    case "production": {
        servers.kb = ``;
        servers.console = `https://api.71360.com/`;
        servers.buy = "https://buy.71360.com";
        servers.mainFront = "https://console.71360.com"; // 主控制台域名
        // servers.KSH_URL = `syy.dongchali.cn/ksh/#/`;
        servers.KSH_URL = `v2.syy.nbseo.cn/ksh/#/`;
        servers.H5_URL = `syy.dongchali.cn/h5/`;
        servers.file = `https://img01.71360.com`; // 上传文件
        servers.association = "https://syysqapi.71360.com";
        servers.manager = "https://syymanager.71360.com/";
        servers.dongchali = "https://www.dongchali.net/";
        servers.tingyun = "//wkbrs2.tingyun.com/js/im6G788sdz0.js";
        servers.tFile = `https://preapiconsole.71360.com/`;
        servers.tFile = `https://fileupload.71360.com/`;
        servers.third = "https://member-import.71360.com/";
        servers.acting = "//syyagent.71360.com"; // 代理域名
        break;
    }
    default: {
        break;
    }
}

export default servers;
