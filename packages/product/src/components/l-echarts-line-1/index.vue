<template>
    <div :style="{height: `${height ?? 300}px`}">
        <l-echarts :option="option"></l-echarts>
    </div>
</template>

<script setup lang="ts">
import type {EChartsOption} from "echarts";
import {tooltip} from "@/utils/echarts";
import {IData, IDataItem} from "./interface";

const props = defineProps<{
    height?: number;
    data: IData;
}>();

const option: EChartsOption = {
    tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: "#BFBFBF",
                type: "solid",
                width: 2,
            },
        },
        borderWidth: 0,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        formatter(params) {
            return tooltip(params);
        },
    },
    legend: {
        bottom: 0,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 16,
        icon: "circle",
        textStyle: {
            color: "#85878A",
            height: 10,
            rich: {
                a: {
                    verticalAlign: "middle",
                },
            },
        },
    },
    grid: {
        top: "45px",
        left: "1%",
        right: "2%",
        bottom: "8%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: props.data.xAxis.data,
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: "#BFBFBF",
            },
        },
        axisPointer: {
            show: true,
            lineStyle: {
                color: "#BFBFBF",
                width: 2,
            },
        },
        axisLabel: {
            color: "#8C8C8C",
            lineHeight: 25,
        },
        axisLine: {
            lineStyle: {
                color: "#BFBFBF",
            },
        },
    },
    yAxis: {
        type: "value",
        name: props.data.yAxis.name,
        nameLocation: "end",
        nameGap: 20,
        min: 0,
        max: 100,
        interval: 20,
        nameTextStyle: {
            color: "#AAABAF",
            fontSize: 12,
            padding: [0, 0, 0, -30],
        },
        axisLabel: {
            color: "#8C8C8C",
        },
        axisTick: {
            lineStyle: {
                type: "dotted",
                color: "#FCBA55",
            },
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
            },
        },
    },
    series: props.data.data.map((item: IDataItem) => {
        return {
            type: "line",
            smooth: true,
            showSymbol: false,
            symbolSize: 10,
            color: item.color,
            name: item.name,
            sampling: "average",
            data: item.data,
            lineStyle: {
                color: item.color,
                width: 3,
            },
            emphasis: {
                itemStyle: {
                    color: "#ffffff",
                    borderColor: item.color,
                    borderWidth: 4,
                },
            },
            areaStyle: {
                color: {
                    colorStops: [
                        {
                            offset: 0,
                            color: item.area,
                        },
                        {
                            offset: 1,
                            color: "rgba(255, 255, 255, 0.4)",
                        },
                    ],
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                },
            },
        };
    }),
};
</script>
