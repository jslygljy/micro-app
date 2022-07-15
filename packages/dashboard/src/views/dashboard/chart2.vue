<template>
    <div style="height: 260px">
        <l-echarts :option="option"></l-echarts>
    </div>
</template>

<script setup lang="ts">
import type {EChartsOption} from "echarts";

const option: EChartsOption = {
    tooltip: {
        trigger: "axis",
    },
    grid: {
        left: "2%",
        right: "2%",
        top: "2%",
        bottom: "2%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
        type: "value",
    },
    series: [
        {
            name: "Email",
            type: "line",
            stack: "Total",
            smooth: true,
            data: [119, 76, 246, 270, 57, 225, 122],
        },
        {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            smooth: true,
            data: [96, 214, 205, 98, 265, 218, 12],
        },
        {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            smooth: true,
            data: [50, 74, 295, 269, 74, 274, 253],
        },
        {
            name: "Direct",
            type: "line",
            stack: "Total",
            smooth: true,
            data: [245, 172, 6, 50, 47, 86, 31],
        },
        {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            smooth: true,
            data: [117, 19, 237, 166, 158, 166, 259],
        },
    ],
};
</script>
