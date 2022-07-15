import {RouteConfig} from "vue-router";
import LayoutParentMenu from "@/resources/components/layout-parent-menu/layout-parent-menu.vue";
// import { Progress } from "element-ui";
const domain = process.env.domain || "local";
console.log("======domain=========", domain);
interface ExtendRouteConfig extends RouteConfig {
    name?: string;
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

const devTools: ExtendRouteConfig[] = [
    {
        component: LayoutParentMenu,
        name: "dev-tools",
        path: "/dev-tools",
        meta: {
            title: "开发者工具",
            icon: "el-icon-s-grid",
            hidden: domain !== "development",
        },
        children: [
            {
                name: "dev-tools-index",
                path: "/dev-tools/index",
                meta: {
                    title: "介绍",
                },
                component: () => import(/* webpackChunkName: "modules/dev-tools/ui" */ "@/views/dev-tools/index.vue"),
            },
            {
                component: LayoutParentMenu,
                name: "dev-tools-ui",
                path: "/dev-tools/ui",
                redirect: "/dev-tools/ui/index",
                meta: {
                    title: "组件",
                },
                children: [
                    {
                        name: "dev-tools-ui-index",
                        path: "/dev-tools/ui/index",
                        meta: {
                            title: "UI",
                        },
                        component: () =>
                            import(/* webpackChunkName: "modules/dev-tools/ui" */ "@/views/dev-tools/ui/index.vue"),
                    },
                    {
                        name: "dev-tools-ui-button",
                        path: "/dev-tools/ui/button",
                        meta: {
                            title: "按钮",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/ui" */ "@/views/dev-tools/ui/button/index.vue"
                            ),
                    },
                    {
                        name: "dev-tools-ui-send-code",
                        path: "/dev-tools/ui/send-code",
                        meta: {
                            title: "发送验证码",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/ui" */ "@/views/dev-tools/ui/send-code/index.vue"
                            ),
                    },
                    {
                        name: "dev-tools-ui-step",
                        path: "/dev-tools/ui/step",
                        meta: {
                            title: "步骤条",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/ui" */ "@/views/dev-tools/ui/step/index.vue"
                            ),
                    },
                    {
                        name: "dev-tools-ui-notify",
                        path: "/dev-tools/ui/notify",
                        meta: {
                            title: "消息提醒",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/ui" */ "@/views/dev-tools/ui/notify/index.vue"
                            ),
                    },
                    {
                        name: "dev-tools-ui-Highlight",
                        path: "/dev-tools/ui/Highlight",
                        meta: {
                            title: "文字高亮",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/ui" */ "@/views/dev-tools/ui/highlight/index.vue"
                            ),
                    },
                    {
                        name: "dev-tools-ui-CountTo",
                        path: "/dev-tools/ui/CountTo",
                        meta: {
                            title: "数字滚动",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/ui" */ "@/views/dev-tools/ui/count-to/index.vue"
                            ),
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/validate-form" */ "@/views/dev-tools/validate-form/index.vue"
                            ),
                        name: "dev-tools-validate-form",
                        path: "/dev-tools/validate-form",
                        meta: {
                            title: "表单验证",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/select-goods-modal" */ "@/views/dev-tools/select-goods-modal/index.vue"
                            ),
                        name: "dev-tools-select-goods-modal",
                        path: "/dev-tools/select-goods-modal",
                        meta: {
                            title: "选择商品modal",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/upload-image" */ "@/views/dev-tools/upload-image/index.vue"
                            ),
                        name: "dev-tools-upload-image",
                        path: "/dev-tools/upload-image",
                        meta: {
                            title: "上传图片modal",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/ui/area-loading" */ "@/views/dev-tools/ui/area-loading/index.vue"
                            ),
                        name: "dev-tools-ui-area-loading",
                        path: "/dev-tools/ui/area-loading",
                        meta: {
                            title: "区域loading",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/deep-validator" */ "@/views/dev-tools/deep-validator/index.vue"
                            ),
                        name: "dev-tools-deep-validator",
                        path: "/dev-tools/deep-validator",
                        meta: {
                            title: "表单深度校验",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "dev-tools-details",
                path: "/dev-tools/details",
                redirect: "/dev-tools/details/frame-view",
                meta: {
                    title: "内容页",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/ui/dialog-detail" */ "@/views/dev-tools/ui/dialog-detail/index.vue"
                            ),
                        name: "dev-tools-ui-dialog-detail",
                        path: "/dev-tools/ui/dialog-detail",
                        meta: {
                            title: "详情展示",
                        },
                    },
                    {
                        name: "dev-tools-details-edit",
                        path: "/dev-tools/details/edit",
                        meta: {
                            title: "详情/编辑页",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/details" */ "@/views/dev-tools/details/edit.vue"
                            ),
                    },
                    {
                        name: "dev-tools-details-frame-view",
                        path: "/dev-tools/details/frame-view",
                        meta: {
                            title: "详情页",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/frame-view" */ "@/views/dev-tools/frame-view/index.vue"
                            ),
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/frame-form-dialog" */ "@/views/dev-tools/frame-form-dialog/index.vue"
                            ),
                        name: "dev-tools-details-frame-form-dialog",
                        path: "/dev-tools/details/frame-form-dialog",
                        meta: {
                            title: "弹框详情",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/frame-text-dialog" */ "@/views/dev-tools/frame-text-dialog/index.vue"
                            ),
                        name: "dev-tools-details-frame-text-dialog",
                        path: "/dev-tools/details/frame-text-dialog",
                        meta: {
                            title: "弹框文本",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "dev-tools-list",
                path: "/dev-tools/frame-list-view",
                meta: {
                    title: "列表页",
                },
                children: [
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/frame-list-view" */ "@/views/dev-tools/frame-list-view/index.vue"
                            ),
                        name: "dev-tools-frame-list-view",
                        path: "/dev-tools/frame-list-view",
                        meta: {
                            title: "旧版列表",
                        },
                    },

                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/table-list-view" */ "@/views/dev-tools/table-list-view/index.vue"
                            ),
                        name: "dev-tools-table-list-view",
                        path: "/dev-tools/table-list-view",
                        meta: {
                            title: "标准列表",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/table-list-view-custom-table" */ "@/views/dev-tools/table-list-view-custom-table/index.vue"
                            ),
                        name: "table-list-view-custom-table",
                        path: "/dev-tools/table-list-view-custom-table",
                        meta: {
                            title: "自定义表格",
                        },
                    },
                    {
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/table-list-view-multiple-choice" */ "@/views/dev-tools/table-list-view-multiple-choice/index.vue"
                            ),
                        name: "table-list-view-multiple-choice",
                        path: "/dev-tools/table-list-view-multiple-choice",
                        meta: {
                            title: "多选操作表格",
                        },
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "dev-tools-directives",
                path: "/dev-tools/directives",
                redirect: "/dev-tools/directives-copy2clipboard",
                meta: {
                    title: "指令",
                },
                children: [
                    {
                        name: "dev-tools-directives-copy2clipboard",
                        path: "/dev-tools/directives-copy2clipboard",
                        meta: {
                            title: "复制到粘贴板",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/directives-copy2clipboard" */ "@/views/dev-tools/directives-copy2clipboard/index.vue"
                            ),
                    },
                ],
            },
            {
                component: LayoutParentMenu,
                name: "dev-tools-purview",
                path: "/dev-tools/purview",
                redirect: "/dev-tools/purview/role",
                meta: {
                    title: "权限",
                },
                children: [
                    {
                        name: "dev-tools-purview_role",
                        path: "/dev-tools/purview/role",
                        meta: {
                            title: "角色权限",
                        },
                        component: () =>
                            import(
                                /* webpackChunkName: "modules/dev-tools/directives-copy2clipboard" */ "@/views/dev-tools/purview/index.vue"
                            ),
                    },
                ],
            },
            {
                name: "scan-code-gun",
                path: "/dev-tools/scan-code-gun",
                meta: {
                    title: "扫码枪",
                },
                component: () =>
                    import(
                        /* webpackChunkName: "views/dev-tools/scan-code-gun" */ "@/views/dev-tools/scan-code-gun/index.vue"
                    ),
            },
            {
                name: "page-config",
                path: "/dev-tools/page-config",
                meta: {
                    title: "页面配置",
                },
                component: () =>
                    import(
                        /* webpackChunkName: "views/dev-tools/scan-code-gun" */ "@/views/dev-tools/page-config/index.vue"
                    ),
            },
        ],
    },
];
// 开发环境才抛出
export default process.env.domain == "development" ? devTools : [];
export {ExtendRouteConfig};
