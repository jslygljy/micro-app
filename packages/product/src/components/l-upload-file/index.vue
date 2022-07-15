<template>
    <div class="l-upload-file">
        <a-upload
            v-bind="defaultConfig"
            v-model:file-list="fileLists"
            :before-upload="beforeUpload"
            @preview="handlePreview"
            @change="handleChange"
        >
            <div v-if="fileLists.length < defaultConfig.maxCount">
                <template v-if="defaultConfig.listType === 'picture-card'">
                    <span class="plus" style="font-size: 20px; font-weight: 500; color: #888888">+</span>
                </template>
                <template v-else>
                    <a-button class="flex">
                        <l-ify-icon name="carbon:add" size="20" style="margin-left: -6px"></l-ify-icon>
                        选择文件
                    </a-button>
                </template>
            </div>
        </a-upload>
        <a-modal :visible="preview.visible" :title="preview.title" :footer="null" @cancel="handlePreviewCancel">
            <img alt="example" style="width: 100%" :src="preview.image" />
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import {message, Upload} from "ant-design-vue";
import {reactive, ref} from "vue";

const props = defineProps<{config?: any}>();
const emit = defineEmits(["file:change"]);

const defaultConfig = {
    action: "http://yapi.syy.dongchali.cn/mock/730/upload",
    listType: "picture-card",
    maxCount: 1,
    accept: "",
    data: {},
    headers: {},
    method: "post",
    multiple: false,
    withCredentials: true,
    ...props.config,
};
const fileLists = ref(props.config?.fileList ?? []);
const preview = reactive({
    visible: false,
    image: "",
    title: "",
});

/**
 * 文件上传之前
 */
const beforeUpload = (file: {size: number}): string | boolean => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
        return Upload.LIST_IGNORE;
    }
    return true;
};

/**
 * 上传文件
 */
const handleChange = () => {
    // 根据服务器返回的数据结构处理
    const FILE_LIST = fileLists.value.filter((item: any) => item.status === "done" && item.response.status);
    emit("file:change", FILE_LIST);
};

/**
 * 预览文件
 */
const handlePreview = (file: any) => {
    // 根据服务器返回的数据结构处理
    preview.visible = true;
    preview.image = file.response.url;
    preview.title = file.response.name;
};

/**
 * 取消预览文件
 */
const handlePreviewCancel = () => {
    preview.visible = false;
    preview.title = "";
};
</script>
