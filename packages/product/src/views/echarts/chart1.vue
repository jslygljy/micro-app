<template>
    <l-echarts-line-2 :data="data"></l-echarts-line-2>
</template>
<script setup lang="ts">
import {IData} from "@/components/l-echarts-line-2/interface";

const data: Array<IData> = [
    {
        name: "今日",
        color: "#1251FF",
        area: "rgba(80, 153, 255, 0.22)",
        data: [
            {
                time: "08:00",
                value: 132,
            },
            {
                time: "09:00",
                value: 101,
            },
            {
                time: "10:00",
                value: 164,
            },
            {
                time: "11:00",
                value: 90,
            },
            {
                time: "12:00",
                value: 230,
            },
            {
                time: "13:00",
                value: 10,
            },
            {
                time: "14:00",
                value: 100,
            },
            {
                time: "15:00",
                value: 300,
            },
        ],
    },
    {
        name: "昨日",
        color: "#04CCCD",
        area: "rgba(4, 204, 205, 0.22)",
        data: [
            {
                name: "08:00",
                value: 20,
            },
            {
                name: "09:00",
                value: 182,
            },
            {
                name: "10:00",
                value: 191,
            },
            {
                name: "11:00",
                value: 0,
            },
            {
                name: "12:00",
                value: 160,
            },
            {
                name: "13:00",
                value: 330,
            },
            {
                name: "14:00",
                value: 190,
            },
            {
                name: "15:00",
                value: 90,
            },
        ],
    },
];
</script>
