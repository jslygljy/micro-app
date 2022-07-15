import localStorage from "./local-storage";
import directives from "./directives";
import type {App} from "vue";
/*
 ** 判断数据类型, 返回值为 Object  Array  Number String
 */
const dataType = (value: any): string => {
    const result = Object.prototype.toString.call(value);
    return result.replace(/[^a-zA-Z]/g, " ").split(" ")[2];
};

export const setupDirectives = (app: App, directives: any) => {
    directives.forEach((directive: any) => directive.name && app.directive(directive.name, directive));
};

// 自动导入当前目录下的路由配置
const utils = {
    localStorage,
    dataType,
    directives,
    setupDirectives,
};
export default utils;
