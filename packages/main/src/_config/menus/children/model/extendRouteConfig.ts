import {RouteConfig} from "vue-router";

export interface ExtendRouteConfig extends RouteConfig {
    name?: string;
    key?: string;
    meta?: {
        /** 显示的标签 */
        title: string;
        /** 授权标记 */
        permission?: string;
        /** 图标（iconfont的类名） */
        icon?: string;
        /** 图标（图片的module） */
        image?: NodeRequire;
        /** 不显示在菜单中 */
        hidden?: boolean;
        /** 是否缓存 */
        alive?: boolean;
        /** 一顿骚操作后可见 */
        konami?: boolean;
        [key: string]: any;
    };
}
