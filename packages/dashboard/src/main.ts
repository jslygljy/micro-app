import { createApp } from "vue";
import App from "@/App.vue";
import routes from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { createRouter, createWebHistory } from "vue-router";
import { setShareMainComponent } from "./shareMainComponent";
import actions from "./action";

let router: any = null;
let instance: any = null;
let history: any = null;

function render(props: any = {}) {
  const { container, globModule } = props;
  // actions.setActions(globModule.actions);
  if (props) actions.setActions(props);
  history = createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/dashboard" : "/"
  );
  router = createRouter({
    history,
    routes,
  });
  instance = createApp(App);
  instance.use(router);
  // Setup directive
  globModule.utils.setupDirectives(instance, globModule.utils.directives);

  instance.mount(
    container ? container.querySelector("#app") : document.getElementById("app")
  );
  if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log("我正在作为子应用运行");
  }
}

renderWithQiankun({
  mount(props) {
    render(props);
    console.log(props.globModule.actions.getGlobalState(), 111);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount() {
    instance.unmount();
    instance._container.innerHTML = "";
    history.destroy(); // 不卸载  router 会导致其他应用路由失败
    router = null;
    instance = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
