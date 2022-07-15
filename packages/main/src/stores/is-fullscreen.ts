import {defineStore} from "pinia";
import storage from "@/utils/local-storage";
import {useEnvValue} from "@/hooks/useEnvValue";

const useStoreIsFullScreen = defineStore("STORE_PERMISSION)", {
    state: () => {
        return {
            IS_FULL_SCREEN: storage.get(`${useEnvValue("VITE_LOCAL_STORAGE_PREFIX")}_IS_FULL_SCREEN`) ?? false,
        };
    },
    actions: {
        changeFullScreen() {
            this.IS_FULL_SCREEN = !this.IS_FULL_SCREEN;
            storage.set(`${useEnvValue("VITE_LOCAL_STORAGE_PREFIX")}_IS_FULL_SCREEN`, this.IS_FULL_SCREEN);
            console.log("this.IS_FULL_SCREEN:::", this.IS_FULL_SCREEN);
        },
    },
});
export default useStoreIsFullScreen;
