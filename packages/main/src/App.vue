<template>
    <a-config-provider :locale="locale">
        <Framework></Framework>
    </a-config-provider>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref} from "vue";
import Framework from "@/views/_layout/framework.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import useStoreKeepalive from "@/stores/keepalive";

const USE_STORE_KEEPALIVE: any = useStoreKeepalive();

const locale = zhCN;

const loading = ref(true);
setTimeout(() => (loading.value = false), 600);
</script>
