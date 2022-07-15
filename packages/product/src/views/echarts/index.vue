<template>
    <a-row :gutter="[16, 16]">
        <a-col :span="8">
            <a-card title="实时概览">
                <chart1></chart1>
            </a-card>
        </a-col>
        <a-col :span="8">
            <a-card title="占比图">
                <chart2></chart2>
            </a-card>
        </a-col>
        <a-col :span="8">
            <a-card title="占比图">
                <chart3></chart3>
            </a-card>
        </a-col>
        <a-col :span="24">
            <a-card title="折线图">
                <chart4></chart4>
            </a-card>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import chart1 from "./chart1.vue";
import chart2 from "./chart2.vue";
import chart3 from "./chart3.vue";
import chart4 from "./chart4.vue";
</script>
