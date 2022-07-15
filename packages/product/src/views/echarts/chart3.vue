<template>
    <a-row :gutter="[16, 0]">
        <a-col :span="12">
            <a-row type="flex" align="middle">
                <a-col :span="12"><l-echarts-pie-1 :data="data"></l-echarts-pie-1></a-col>
                <a-col :span="12">
                    <div class="echarts-info m-l8">
                        <p class="name">支付人数</p>
                        <p class="value">1234</p>
                        <p class="yesterday">昨日全天：8000</p>
                    </div>
                </a-col>
            </a-row>
        </a-col>
        <a-col :span="12">
            <a-row type="flex" align="middle">
                <a-col :span="12"><l-echarts-pie-1 :data="data"></l-echarts-pie-1></a-col>
                <a-col :span="12">
                    <div class="echarts-info m-l8">
                        <p class="name">支付订单数</p>
                        <p class="value">56876</p>
                        <p class="yesterday">昨日全天：8000</p>
                    </div>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import {IData} from "@/components/l-echarts-pie-1/interface";

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
<style scoped lang="scss">
.echarts-info {
    p.name {
        font-size: 14px;
        font-weight: 500;
        color: #565960;
        line-height: 20px;
    }
    p.value {
        margin: 3px 0;
        font-size: 24px;
        font-weight: bold;
        color: #121314;
        line-height: 28px;
    }
    p.yesterday {
        color: #5e6066;
        line-height: 17px;
    }
}
</style>
