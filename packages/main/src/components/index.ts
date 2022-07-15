import type {App} from "vue";

// 自动导入当前目录下的文件
const modules = import.meta.globEager("./**/*.vue");
const COMPONENTS = Object.values(modules)
    .map((item) => {
        return {
            name: item.default?.name,
            component: item.default,
        };
    })
    .filter((item) => item.name);

export const setupComponents = (app: App) => {
    COMPONENTS.forEach((component) => component.name && app.component(component.name, component.component));
};
