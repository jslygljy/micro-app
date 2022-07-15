
<template>
  <router-link to="/productList">产品列表</router-link> |
  <router-link to="/productAdd">产品编辑</router-link>
  token:{{globalActions}}
  <br>
  <button v-on:click="handle1">按钮3</button>
  <button v-on:click="handle2">按钮4</button>
  <router-view />
</template>

<script lang="ts" setup>
import { ref,onMounted,inject } from 'vue'
import action from "@/action";
let actions = action.actions;

const handle1 = ()=>{
  actions.setGlobalState({token:'按钮3'});
}
const handle2 = ()=>{
  actions.setGlobalState({token:'按钮4'});
}
let globalActions = ref(actions.globModule.actions.getGlobalState());
onMounted(() => {
  actions.onGlobalStateChange((state: any) => {
    globalActions.value = state
  });
});
</script>

<style scoped>
a {
 color: goldenrod;
}
.imgs{
  background-color: black;
}
</style>
