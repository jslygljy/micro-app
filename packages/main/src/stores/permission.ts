import {defineStore} from "pinia";

const useStorePermission = defineStore("STORE_PERMISSION)", {
    state: () => {
        return {
            permissions: ["all"],
        };
    },
    actions: {},
});
export default useStorePermission;
