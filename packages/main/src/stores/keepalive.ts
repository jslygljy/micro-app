import {defineStore} from "pinia";
import {KEEPALIVE_ROUTES} from "@/router";

const useStoreKeepalive = defineStore("STORE_KEEPALIVE)", {
    state: () => {
        return {
            keepalives: KEEPALIVE_ROUTES,
        };
    },
    actions: {
        addKeepAlives(keepalive: string) {
            !this.keepalives.find((item) => item === keepalive) && this.keepalives.push(keepalive);
        },
        removeKeepAlives(keepalive: string | Array<any>) {
            typeof keepalive === "string"
                ? (this.keepalives = this.keepalives.filter((item) => item !== keepalive))
                : (this.keepalives = this.keepalives.filter(
                      (item) => !keepalive.some((itemParams: any) => itemParams === item),
                  ));
        },
    },
});
export default useStoreKeepalive;
