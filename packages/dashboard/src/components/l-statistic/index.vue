<template>
    <a-row class="l-statistic" type="flex" justify="space-between" align="bottom">
        <a-col v-for="item in props.data" :key="item.title" :span="props.span" class="m-t12 m-b10 flex flex-y-end">
            <!-- icon -->
            <img v-if="!!item.status" :src="up" class="m-r20" width="50" />
            <img v-else :src="down" class="m-r20" width="50" />

            <div class="data">
                <div class="tooltip">
                    {{ item.title }}
                    <a-tooltip v-if="item.tips" placement="top">
                        <template #title>{{ item.tips }}</template>
                        <l-ify-icon
                            name="ant-design:question-circle-filled"
                            color="#8c8c8c"
                            size="16"
                            class="cursor-pointer"
                        ></l-ify-icon>
                    </a-tooltip>
                </div>
                <div class="value">
                    <l-count-to :end="item.value"></l-count-to>
                </div>
            </div>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import up from "./images/up.png";
import down from "./images/down.png";
interface IData {
    title: string;
    value: string | number;
    status: 1 | 0;
    tips?: string;
}

const props = withDefaults(
    defineProps<{
        data: Array<IData>;
        span: string;
    }>(),
    {
        span: "6",
    },
);
</script>

<style scoped lang="scss">
.l-statistic {
    .data {
        .value {
            font-size: 24px;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
                sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
            line-height: 1.75;
        }
    }
}
</style>
