<template>
    <div class="bg-ffffff p-16 m-b16">
        <a-space>
            <a-button @click="() => (deepConfig.border = !deepConfig.border)">显示/隐藏边框</a-button>
            <a-input v-model:value="deepConfig.borderColor" placeholder="设置边框颜色"></a-input>
        </a-space>
    </div>
    <div class="bg-ffffff p-16">
        <l-table-edit :config="deepConfig" @update:table:edit="updateTableEdit"></l-table-edit>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {notification} from "ant-design-vue";
import config from "./config";

const deepConfig = ref(config);

const updateTableEdit = (data: any) => {
    notification.success({
        message: "操作提示",
        description: `${JSON.stringify(data)}`,
    });
};
</script>

<style scoped></style>
