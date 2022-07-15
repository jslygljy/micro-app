const {localStorage} = window;
/**
 * localStorage 获取
 * @param key
 * @returns
 */
const get = (key: string) => {
    try {
        if (!key) return "";
        const v = localStorage.getItem(key);
        if ((v?.startsWith("{") && v.endsWith("}")) || (v?.startsWith("[") && v.endsWith("]"))) {
            return JSON.parse(v);
        }
        if (v === "true" || v === "false") {
            return v === "true";
        }
        return v;
    } catch (err) {
        return "";
    }
};

/**
 * localStorage 设置
 * @param key
 * @param value
 */
const set = (key: string, value: string | boolean | object) => {
    let v = "";
    switch (typeof value) {
        case "object":
            v = JSON.stringify(value);
            break;
        case "boolean":
            v = String(value);
            break;
        default:
            v = value;
            break;
    }

    localStorage.setItem(key, v);
};

/**
 * localStorage 删除
 * @param key
 * @returns
 */
const remove = (key: string) => {
    return localStorage.removeItem(key);
};

/**
 * localStorage 清空
 * @returns
 */
const clear = () => {
    return localStorage.clear();
};

export default {
    get,
    set,
    remove,
    clear,
};
