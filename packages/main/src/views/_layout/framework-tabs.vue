<template>
    <div class="framework-tabs bg-ffffff p-l16">
        <a-tabs
            v-model:activeKey="activeKey"
            size="small"
            hide-add
            type="editable-card"
            @tab-click="tabClick"
            @edit="edit"
        >
            <a-tab-pane
                v-for="(tab, index) in USE_STORE_TABS.tabs"
                :key="tab.path"
                :tab="tab.title"
                :closable="index !== 0"
            ></a-tab-pane>
            <template #rightExtra>
                <div class="toolbar p-r16">
                    <span title="刷新页面" @click="reload">
                        <l-ify-icon name="zondicons:reload" size="16"></l-ify-icon>
                    </span>
                    <span v-if="USE_STORE_TABS.tabs.length > 1" title="全部关闭" @click="closeAll">
                        <l-ify-icon name="mdi:window-close" size="17" style="top: 4px"></l-ify-icon>
                    </span>
                </div>
            </template>
        </a-tabs>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import useStoreTabs from "@/stores/tabs";
import useStoreKeepalive from "@/stores/keepalive";

const ROUTE = useRoute();
const ROUTER = useRouter();
const USE_STORE_TABS = useStoreTabs();
const USE_STORE_KEEPALIVE = useStoreKeepalive();
const activeKey = ref(USE_STORE_TABS.tabs[0].path);

// 清除 keepalive
const removeKeepAlive = () => {
    ROUTE.meta?.keepAlive && USE_STORE_KEEPALIVE.removeKeepAlives(ROUTE.meta.keepAlive as string);
};

// 添加 keepalive
const addKeepAlive = () => {
    ROUTE.meta?.keepAlive && USE_STORE_KEEPALIVE.addKeepAlives(ROUTE.meta.keepAlive as string);
};

// 切换标签
const tabClick = (path: any) => ROUTER.push(path);

// 删除标签
const edit = (path: any) => {
    // 清除 tab
    if (ROUTE.path === path) {
        const LAST_TABS = USE_STORE_TABS.removeTabs(path);
        USE_STORE_TABS.tabs.length === 1 ? ROUTER.push(USE_STORE_TABS.tabs[0].path) : ROUTER.push(LAST_TABS);
    } else {
        USE_STORE_TABS.removeTabs(path);
        USE_STORE_TABS.tabs.length === 1 && ROUTER.push(USE_STORE_TABS.tabs[0].path);
    }
    // 清除 keepalive
    removeKeepAlive();
};

// 刷新路由
const reload = () => {
    removeKeepAlive();
    ROUTER.push(`/framework/redirect?keepalive=${ROUTE.meta.keepAlive}`);
};

// 关闭全部标签
const closeAll = () => {
    USE_STORE_TABS.resetTabs();
    ROUTER.push(USE_STORE_TABS.tabs[0].path);
};

// 设置标签页
const changeTabs = (): void => {
    if (ROUTE.name === "/framework/redirect") return;
    USE_STORE_TABS.changeTabs({
        path: ROUTE.path,
        title: ROUTE.meta?.title,
        hidden: ROUTE.meta?.hidden ?? false,
    });
    activeKey.value = ROUTE.path;
    addKeepAlive();
};

watch(
    () => ROUTE.path,
    () => changeTabs(),
);

onMounted(() => changeTabs());
</script>

<style lang="scss" scoped>
.framework-tabs
    :deep(.ant-tabs-top > .ant-tabs-nav, .ant-tabs-bottom > .ant-tabs-nav, .ant-tabs-top
        > div
        > .ant-tabs-nav, .ant-tabs-bottom > div > .ant-tabs-nav) {
    margin: 2px 0 0 0;
}

.framework-tabs
    :deep(.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card
        > div
        > .ant-tabs-nav
        .ant-tabs-tab, .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top
        > div
        > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before) {
    border-bottom: 1px solid rgba(240, 242, 245, 1);
}

.framework-tabs :deep(.ant-tabs-tab-remove) {
    margin-left: 1px;
    font-size: 11px;
}

.toolbar {
    span {
        cursor: pointer;
        padding: 4px;
        &:hover {
            opacity: 0.85;
        }
    }
}
</style>
