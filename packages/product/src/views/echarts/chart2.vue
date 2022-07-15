<template>
    <l-echarts-pie-2 :data="data"></l-echarts-pie-2>
</template>

<script setup lang="ts">
import {IData} from "@/components/l-echarts-pie-2/interface";

const data: IData = {
    name: "占比",
    colorList: ["#FA3AA6", "#9580FF", "#FCAA80", "#3F72FE", "#34D5D6"],
    data: [
        {value: 706, name: "抖音呵呵旗舰店"},
        {value: 735, name: "天猫旗舰店"},
        {value: 580, name: "京东旗舰店"},
        {value: 484, name: "有赞静安店"},
        {value: 300, name: "有赞虹口店"},
    ],
};
</script>
