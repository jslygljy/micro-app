import {defineStore} from "pinia";

const useStoreCommon = defineStore("STORE_COMMON)", {
    state: () => {
        return {
            version: "v1.0",
        };
    },
    actions: {
        changeVersion(v: string) {
            this.version = v;
        },
    },
});
export default useStoreCommon;
