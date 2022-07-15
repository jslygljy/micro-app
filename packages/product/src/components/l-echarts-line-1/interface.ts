export interface IDataItem {
    name: string;
    color: string;
    area: string;
    data: Array<number>;
}

export interface IData {
    xAxis: {
        data: Array<string>;
    };
    yAxis: {
        name: string;
    };
    data: Array<IDataItem>;
}
