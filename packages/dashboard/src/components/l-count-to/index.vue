<template>
    <span v-if="format" v-number-format="{money: output, style: 'decimal'}" class="l-count-to"></span>
    <span v-else class="l-count-to">{{ output.toFixed(2) }}</span>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {TransitionPresets, useTransition} from "@vueuse/core";

const props = withDefaults(
    defineProps<{
        // 是否格式化
        format?: boolean;
        // 开始值
        start?: number;
        // 结束值
        end?: number | string;
        // 持续时间
        duration?: number;
    }>(),
    {
        format: true,
        start: 0,
        end: 0,
        duration: 1200,
    },
);

const start = ref(props.start);
const end = Number(props.end) ?? 0;
const output = useTransition(start, {
    duration: props.duration,
    transition: TransitionPresets.easeInOutCubic,
});
start.value = end;
</script>
