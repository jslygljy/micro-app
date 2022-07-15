<script setup>
import { ref,onMounted,inject } from 'vue'
import actions from "../action";
defineProps({
  msg: String
})

const handle1 = ()=>{
  actions?.setGlobalState({token:'vite子应用 ：子传父按钮1'});
}
const handle2 = ()=>{
  actions?.setGlobalState({token:'vite子应用 ：子传父按钮2'});
}

//
let token = ref(actions?.actions?.actions?.getGlobalState());
onMounted(() => {
  actions?.onGlobalStateChange((state, prevState) => {
    token.value = state
  });
  // inject('$pager').next({
  //   from: "vite",
  //   token: "但若不见你，阳光也无趣"
  // });
});

</script>

<template>
  <h1>{{ msg }}</h1>
  <p>token:{{token?.token}}</p>

  <button @click="handle1">子传父vue3</button>
  <button @click="handle2">子传父vite</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
