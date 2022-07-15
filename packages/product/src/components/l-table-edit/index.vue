<template>
    <div
        v-if="deepConfig.data && deepConfig.columns"
        class="l-table-edit"
        :style="{
            border: deepConfig.border
                ? `${deepConfig?.borderColor ? `1px solid ${deepConfig.borderColor}` : '1px solid #1a73e8'}`
                : '',
            padding: deepConfig.border ? '16px' : '',
        }"
    >
        <!-- 编辑模式 -->
        <a-form ref="formRef" :model="form">
            <template v-if="!deepConfig.readOnly">
                <!-- 添加按钮 -->
                <a-button
                    v-if="deepConfig.headerButton !== false && !deepConfig.disabled"
                    class="m-b16 m-r8"
                    @click="addRow"
                >
                    添加数据
                </a-button>
                <!-- 操作按钮 -->
                <a-button v-if="!deepConfig.disabled" type="primary" class="m-b16 m-r8" @click="onCheck">
                    确认数据
                </a-button>
                <a-button
                    v-if="deepConfig.disabled"
                    class="success m-b16"
                    type="primary"
                    @click="deepConfig.disabled = false"
                >
                    编辑数据
                </a-button>
            </template>
            <!-- 头部提示 -->
            <div v-if="deepConfig.headerTips" class="m-b16" v-html="deepConfig.headerTips"></div>
            <!-- 表格 -->
            <a-table
                :data-source="deepConfig.data"
                :columns="deepConfig.columns"
                :pagination="false"
                v-bind="deepConfig.others"
            >
                <!-- 内容 -->
                <template #bodyCell="{column, text, index}">
                    <!-- 序号 -->
                    <template v-if="['#', '序号'].includes(column.title)">{{ index + 1 }}</template>
                    <!-- 默认列 -->
                    <template v-else>
                        <template v-if="column.type">
                            <!-- input -->
                            <a-form-item
                                v-if="column.type === 'input'"
                                :name="`${column.dataIndex}[${index}]`"
                                :rules="column.rules"
                            >
                                <a-input
                                    v-model:value="form[`${column.dataIndex}[${index}]`]"
                                    :allow-clear="true"
                                    :placeholder="`请输入${column.title}`"
                                    :disabled="deepConfig.disabled || deepConfig.readOnly"
                                    v-bind="column.others"
                                    @change="onChange(column, index)"
                                />
                            </a-form-item>
                            <!-- date -->
                            <a-form-item
                                v-if="column.type === 'date'"
                                :name="`${column.dataIndex}[${index}]`"
                                :rules="column.rules"
                            >
                                <a-date-picker
                                    v-model:value="form[`${column.dataIndex}[${index}]`]"
                                    class="w-100"
                                    :placeholder="`请选择${column.title}`"
                                    :disabled="deepConfig.disabled || deepConfig.readOnly"
                                    v-bind="column.others"
                                    @change="onChange(column, index)"
                                />
                            </a-form-item>
                            <!-- daterange -->
                            <a-form-item
                                v-if="column.type === 'daterange'"
                                :name="`${column.dataIndex}[${index}]`"
                                :rules="column.rules"
                            >
                                <a-range-picker
                                    v-model:value="form[`${column.dataIndex}[${index}]`]"
                                    :placeholder="[`开始${column.title}`, `结束${column.title}`]"
                                    :disabled="deepConfig.disabled || deepConfig.readOnly"
                                    class="w-100"
                                    v-bind="column.others"
                                    @change="onChange(column, index)"
                                />
                            </a-form-item>
                            <!-- select -->
                            <a-form-item
                                v-if="column.type === 'select'"
                                :name="`${column.dataIndex}[${index}]`"
                                :rules="column.rules"
                            >
                                <a-select
                                    v-model:value="form[`${column.dataIndex}[${index}]`]"
                                    :allow-clear="true"
                                    :placeholder="`请选择${column.title}`"
                                    :disabled="deepConfig.disabled || deepConfig.readOnly"
                                    class="w-100"
                                    v-bind="column.others"
                                    @change="onChange(column, index)"
                                >
                                    <a-select-option
                                        v-for="option in column.options"
                                        :key="option.label"
                                        :value="option.value"
                                    >
                                        {{ option.label }}
                                    </a-select-option>
                                </a-select>
                            </a-form-item>
                            <!-- upload -->
                            <!-- input -->
                            <a-form-item
                                v-if="column.type === 'upload'"
                                :name="`${column.dataIndex}[${index}]`"
                                :rules="column.rules"
                            >
                                <l-upload-file
                                    :config="{
                                        ...column.others,
                                        disabled: deepConfig.disabled || deepConfig.readOnly,
                                    }"
                                    @file:change="(fileList) => (form[`${column.dataIndex}[${index}]`] = fileList)"
                                ></l-upload-file>
                            </a-form-item>
                            <!-- operate -->
                            <template v-if="column.type === 'operate'">
                                <span v-if="deepConfig.disabled" class="operate-disabled">删除</span>
                                <template v-else>
                                    <template v-if="deepConfig.readOnly">
                                        <span class="operate-disabled">删除</span>
                                    </template>
                                    <template v-else>
                                        <a-popconfirm
                                            placement="topRight"
                                            title="确定删除数据么?"
                                            @confirm="deleteRow(index)"
                                        >
                                            <a class="link">删除</a>
                                        </a-popconfirm>
                                    </template>
                                </template>
                            </template>
                        </template>
                        <template v-else>{{ text }}</template>
                    </template>
                </template>
            </a-table>
            <!-- 添加数据 -->
            <template v-if="!deepConfig.readOnly">
                <a-button
                    v-if="deepConfig.footerButton !== false && !deepConfig.disabled"
                    class="m-t16"
                    block
                    type="dashed"
                    @click="addRow"
                >
                    添加数据
                </a-button>
            </template>
            <!-- 底部提示 -->
            <div v-if="deepConfig.footerTips" class="m-t16" v-html="deepConfig.footerTips"></div>
        </a-form>
    </div>
</template>
<script setup lang="ts">
import {ref, reactive} from "vue";
import type {FormInstance} from "ant-design-vue";

const props = defineProps<{
    config: any;
}>();
const emit = defineEmits(["update:table:edit"]);
const formRef: any = ref<FormInstance>();
const form: any = reactive({});
const deepConfig = reactive(props.config);

/**
 * 添加数据
 */
const addRow = () => {
    if (deepConfig.readOnly) return;
    deepConfig.data.push({});
};

/**
 * 删除数据
 */
const deleteRow = (index: number) => {
    if (deepConfig.readOnly) return;
    deepConfig.data.splice(index, 1);
};

/**
 * 表单切换
 */
const onChange = (column: any, index: number) => {
    const DATA = form[`${[column.dataIndex]}[${index}]`];
    deepConfig.data[index][column.dataIndex] = DATA;
};

/**
 * 校验表单
 * 校验通过提交数据
 */
const onCheck = async () => {
    if (deepConfig.readOnly) return;
    try {
        await formRef.value.validate();
        deepConfig.disabled = true;
        emit("update:table:edit", deepConfig.data);
    } catch (error) {
        // pass
    }
};
</script>

<style lang="scss" scoped>
.w-100 {
    width: 100%;
}
.l-table-edit {
    .ant-table-cell a.link {
        margin-right: 12px;
        color: #1a73e8;
        font-size: 13px;
        &:last-child {
            margin-right: 0;
        }
    }
    .ant-table-cell .operate-disabled {
        cursor: not-allowed;
        color: #999999;
    }
    :deep(.ant-form-item) {
        margin-bottom: 0;
    }
    :deep(.ant-form-item-with-help .ant-form-item-explain) {
        position: absolute;
        top: 30px;
        font-size: 12px;
        min-height: 12px;
    }

    :deep(.ant-upload-list.ant-upload-list-picture-card),
    :deep(.ant-upload-list-picture-card-container),
    :deep(.ant-upload.ant-upload-select.ant-upload-select-picture-card),
    :deep(.ant-upload.ant-upload-select-picture-card) {
        width: 60px;
        height: 60px;
    }
    :deep(.ant-upload-list-picture .ant-upload-list-item),
    :deep(.ant-upload-list-picture-card .ant-upload-list-item) {
        padding: 4px;
    }

    :deep(.ant-form-item-has-error span.plus),
    :deep(.ant-form-item-has-error .ant-upload.ant-upload-select.ant-upload-select-picture-card) {
        color: #e74e3d !important;
        border-color: #e74e3d;
    }
}
</style>
