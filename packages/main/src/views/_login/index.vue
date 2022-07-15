<template>
    <div class="login">
        <div class="content">
            <h3>登录系统</h3>
            <!-- form -->
            <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish">
                <a-form-item name="username" :rules="[{required: true, message: '请输入用户名'}]">
                    <a-input v-model:value="formState.username" placeholder="请输入用户名" />
                </a-form-item>
                <a-form-item name="password" :rules="[{required: true, message: '请输入密码'}]">
                    <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                </a-form-item>
                <a-form-item name="remember">
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" block html-type="submit">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
        <!-- 背景 -->
        <div class="bg"></div>
    </div>
</template>
<script setup lang="ts">
import {reactive} from "vue";
import {useRouter} from "vue-router";

interface FormState {
    username: string;
    password: string;
    remember: boolean;
}
const ROUTER = useRouter();
const formState = reactive<FormState>({
    username: "lismill",
    password: "lismill",
    remember: true,
});
const onFinish = (values: any) => {
    ROUTER.push("/dashboard");
    console.log("success:", values);
};
</script>

<style scoped lang="scss">
.login {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("@/assets/images/login/bg.jpg") center no-repeat #4c87bf;
    background-size: "cover";
    &:after {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: inherit;
        filter: blur(2.5px);
    }
    .bg {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.35);
        z-index: 999;
    }

    .content {
        position: fixed;
        top: 50%;
        right: 20%;
        width: 300px;
        margin: -200px 0 0 0;
        padding: 24px 24px 14px 24px;
        border-radius: 8px;
        background-color: #ffffff;
        z-index: 9999;
        h3 {
            margin: 0 0 32px 0;
            font-size: 22px;
            font-weight: 600;
        }
        input {
            width: 100%;
        }
    }
}
</style>
