class Body {
    request: any;

    response: any;

    constructor(req: any, res: any) {
        this.request = req;
        this.response = res;
    }
}

export declare class MapleRequestApiConfig {}

export declare class HttpResponse {
    code: number;

    msg: string;

    data: any;
}

export type ResponseCallback = (data: HttpResponse) => void;

export declare class PromiseHttpResponse {
    then(callback: ResponseCallback): void;
}

export declare class api {
    static get<T, K>(url: string, baseUrl?: string): PromiseHttpResponse;

    static post(): PromiseHttpResponse;
}

/**
 * 接口 [demo↗](https://yapi.syy.dongchali.cn/project/21/interface/api/7111) 的 **请求类型**
 *
 * @分类 [公共分类↗](https://yapi.syy.dongchali.cn/project/21/interface/api/cat_18)
 * @请求头 `GET /demo`
 * @更新时间 `2021-02-04 18:41:41`
 */
export interface DemoRequest {
    name: string;
}

/**
 * 接口 [demo↗](https://yapi.syy.dongchali.cn/project/21/interface/api/7111) 的 **返回类型**
 *
 * @分类 [公共分类↗](https://yapi.syy.dongchali.cn/project/21/interface/api/cat_18)
 * @请求头 `GET /demo`
 * @更新时间 `2021-02-04 18:41:41`
 */
export interface DemoResponse {}

api.get<DemoResponse, DemoResponse>("123").then((data) => {});

api.get("12312");

api.post().then((data) => {});
