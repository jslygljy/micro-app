
<template>
  token:{{globalActions}}
  <button v-on:click="handle1">按钮1</button>
  <button v-on:click="handle2">按钮2</button>
  <router-view />
</template>
<script lang="ts" setup>
import { ref,onMounted,inject } from 'vue'
import action from "@/action";
let actions = action.actions;

const handle1 = ()=>{
  actions.setGlobalState({token:'按钮1'});
}
const handle2 = ()=>{
  actions.setGlobalState({token:'按钮2'});
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
