<template>
    <div class="framework">
        <a-layout>
            <!-- a-layout-sider -->
            <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
                <framework-sider :collapsed="collapsed"></framework-sider>
            </a-layout-sider>
            <!-- a-layout -->
            <a-layout>
                <!-- a-layout-header -->
                <a-layout-header>
                    <framework-header v-model:collapsed="collapsed"></framework-header>
                </a-layout-header>
                <!-- framework-tabs -->
                <!-- <framework-tabs></framework-tabs> -->
                <!-- a-layout-content -->
                <a-layout-content>
                    <div class="m-r14">
                        <framework-content></framework-content>
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import storage from "@/utils/local-storage";

import FrameworkSider from "./framework-sider.vue";
import FrameworkHeader from "./framework-header.vue";
import FrameworkTabs from "./framework-tabs.vue";
import FrameworkContent from "./index.vue";

const collapsed = ref(storage.get(`${import.meta.env.VITE_LOCAL_STORAGE_PREFIX}_COLLAPSED`) ?? true);
</script>
