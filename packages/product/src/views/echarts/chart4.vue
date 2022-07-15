<template>
    <l-echarts-line1 :height="460" :data="data"></l-echarts-line1>
</template>

<script setup lang="ts">
import {IData} from "@/components/l-echarts-line-1/interface";

const data: IData = {
    xAxis: {
        data: [
            "2022-03-17",
            "2022-03-18",
            "2022-03-19",
            "2022-03-20",
            "2022-03-21",
            "2022-03-22",
            "2022-03-23",
            "2022-03-24",
            "2022-03-25",
            "2022-03-26",
            "2022-03-27",
            "2022-03-28",
        ],
    },
    yAxis: {
        name: "商品数",
    },
    data: [
        {
            name: "上架",
            color: "#72AEFF",
            area: "rgba(58, 77, 233, 0.2)",
            data: [1, 20, 80, 20, 5, 30, 100, 1, 20, 80, 20, 5, 30, 100],
        },
        {
            name: "动销",
            color: "#FFBD58",
            area: "rgba(255, 189, 88, 0.2)",
            data: [5, 100, 17, 69, 22, 31, 5, 100, 17, 69, 22, 31, 17, 69],
        },
        {
            name: "浏览",
            color: "#35D6D7",
            area: "rgba(53, 214, 215, 0.2)",
            data: [0, 20, 80, 75, 1, 55, 0, 20, 80, 75, 1, 55, 80, 75],
        },
    ],
};
</script>
