// 自动导入当前目录下的文件
const modules = import.meta.globEager("./*.ts");
const directives = Object.values(modules).map((routes) => routes.default);

export default directives;
