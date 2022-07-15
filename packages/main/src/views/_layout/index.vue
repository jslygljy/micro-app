<template>
    <!-- <router-view v-slot="{Component}">
        <keep-alive :include="USE_STORE_KEEPALIVE.keepalives">
            <component :is="Component" :key="$route.name" />
        </keep-alive>
    </router-view> -->
    <keep-alive :include="USE_STORE_KEEPALIVE.keepalives">
        <div id="container"></div>
    </keep-alive>
    

</template>
<script setup lang="ts">
import useStoreKeepalive from "@/stores/keepalive";

const USE_STORE_KEEPALIVE: any = useStoreKeepalive();
</script>
<script lang="ts">
export default {name: "Layout"};
</script>
