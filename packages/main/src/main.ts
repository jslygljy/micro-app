import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "@/App.vue";
import router from "@/router";
import "./registApp.ts";

// import {setupComponents} from "@/components/index";
// import {setupDirectives} from "./utils/directives";
import "virtual:svg-icons-register";
import "ant-design-vue/dist/antd.less";
import "@/assets/styles";

// app
const app = createApp(App);

// pinia
const pinia = createPinia();

// Setup component
// setupComponents(app);

// // Setup directive
// setupDirectives(app);

app.use(router).use(pinia).mount("#root-app");
