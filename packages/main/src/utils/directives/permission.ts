import {DirectiveBinding} from "vue";
import useStorePermission from "@/stores/permission";

export default {
    name: "permission",
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        const USE_STORE_PERMISSION = useStorePermission();
        const {permissions} = USE_STORE_PERMISSION;

        if (Array.isArray(binding.value) && binding.value.every((v: string) => typeof v === "string")) {
            const HAS = binding.value.every((v: string) => (permissions as Array<string>).includes(v));
            !HAS && el.parentNode && el.parentNode.removeChild(el);
        } else {
            console.error(`v-permission: ${binding.instance?.$el.baseURI} parameter must be an Array<string>.`);
            el.parentNode && el.parentNode.removeChild(el);
        }
    },
};
