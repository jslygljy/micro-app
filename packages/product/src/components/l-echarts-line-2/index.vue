<template>
    <div :style="{height: `${height ?? 300}px`}">
        <l-echarts :option="option"></l-echarts>
    </div>
</template>

<script setup lang="ts">
import type {EChartsOption} from "echarts";
import {tooltip} from "@/utils/echarts";
import {IData} from "./interface";

const props = defineProps<{
    height?: number;
    data: Array<IData>;
}>();

const option: EChartsOption = {
    tooltip: {
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
        formatter: (params) => tooltip(params),
    },
    legend: {
        icon: "circle",
        align: "right",
        left: "10px",
        itemWidth: 10,
        itemGap: 16,
        textStyle: {
            height: 10,
            color: "#5E6066",
            rich: {
                a: {
                    verticalAlign: "middle",
                },
            },
        },
        data: ["今日", "昨日"],
    },
    grid: {
        top: "45px",
        left: "10px",
        right: "10px",
        bottom: "10px",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"],
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        type: "value",
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: props.data.map((item: IData) => {
        return {
            type: "line",
            smooth: true,
            showSymbol: false,
            symbolSize: 10,
            name: item.name,
            data: item.data,
            color: item.color,
            emphasis: {
                itemStyle: {
                    color: "#ffffff",
                    borderColor: item.color,
                    borderWidth: 4,
                },
            },
            lineStyle: {
                width: 4,
            },
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0.2,
                            color: item.area,
                        },
                        {
                            offset: 1,
                            color: "rgba(255, 255, 255, 0.4)",
                        },
                    ],
                },
            },
        };
    }),
};
</script>
