import { DirectiveBinding } from "vue";

const loadingDirective = {
  name: "loading",
  updated(el: HTMLElement, bind: DirectiveBinding) {
    const loading: any = el.querySelector(".l-loading");
    if (!loading) return;
    bind.value
      ? (loading.style.display = "block")
      : (loading.style.display = "none");
  },
  mounted(el: HTMLElement, bind: DirectiveBinding) {
    if (bind.value) {
      if (!el.style.position) {
        // eslint-disable-next-line no-param-reassign
        el.style.position = "relative";
      }
      const loadingHtml = document.createElement("div");
      const loadingIcon = document.createElement("div");
      loadingHtml.className = "l-loading";
      loadingIcon.className = "l-loading-icon";
      // 阻止事件穿透
      loadingHtml.onclick = (e) => {
        e.stopPropagation();
      };
      loadingHtml.appendChild(loadingIcon);
      el.appendChild(loadingHtml);
    }
  },
};
export default loadingDirective;
