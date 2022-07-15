<template>
    <div class="redirect"><a-spin></a-spin></div>
</template>
<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import useStoreKeepalive from "@/stores/keepalive";

const ROUTER = useRouter();
const ROUTE = useRoute();
const USE_STORE_KEEPALIVE: any = useStoreKeepalive();
USE_STORE_KEEPALIVE.addKeepAlives(ROUTE.query.keepalive);
ROUTER.back();
</script>

<style lang="scss" scoped>
.redirect {
    height: calc(100vh - 132px);
    line-height: calc(100vh - 132px);
    text-align: center;
    background-color: rgba(255, 255, 255, 0.2);
}
</style>
