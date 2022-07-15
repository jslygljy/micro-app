import {api, MapleRequestApis} from "maple-request";
import servers from "@/_config/servers";

const apis: MapleRequestApis = {
    // 获取导出列表
    getExportUrlList: api.get("/baseapi/platform/export/getResultList"),
    // 获取导出的URL
    getExportUrl: api.get("/baseapi/platform/export/getExportUrl"),
    // 文件管理列表页 云端
    fileGetyunFolderList: api.post("/baseapi/platform/upload/getInfo"),

    // 文件上传 云端
    fileUploadyunfile: api.post("/baseapi/platform/upload/postUpload"),

    // 创建文件夹 云端
    fileCreateyunFolder: api.post("/baseapi/platform/upload/postInfo"),

    // 文件夹重命名
    filerRenameyunFolder: api.post("/baseapi/platform/upload/getInfo"),

    // 文件夹树结构 云端
    filegGetyundirtree: api.post("/baseapi/platform/upload/getInfo"),

    // 文件批量删除 云端
    fileDeleteyunImg: api.post("/baseapi/platform/upload/postInfo"),

    // 文件移动 云端
    fileMoveyunfolder: api.post("/baseapi/platform/upload/postInfo"),

    // 文件搜索 云端
    fileSearchyunfolder: api.post("/baseapi/platform/upload/getInfo"),

    // 文件管理列表页
    fileGetFolderList: api.get("/admin/image", servers.file),

    // 创建文件夹接口
    fileCreateFolder: api.post("/admin/image/mkdir", servers.file),

    // 删除文件夹
    fileDeleteFolderList: api.post("/admin/image/remove", servers.file),

    // 图片上传接口 暂时只有单张上传
    fileImageUpload: api.post("/admin/image/imageUpload", servers.file),

    // 顶部导航下拉框数据
    fileGetdirTree: api.post("/admin/image/dirTree", servers.file),

    // 文件移动接口
    fileMoveFolderlist: api.post("/admin/image/move", servers.file),

    // 文件夹重命名
    fileRenameFolder: api.post("/admin/image/rename", servers.file),

    // 本地资源库 图片url重构造
    fileGetHomeData: api.get("/admin/home", servers.file),

    // T云 OSS 处理大文件上传
    TFileUpload: api.post("file/upload", servers.tFile),
};

export default apis;
