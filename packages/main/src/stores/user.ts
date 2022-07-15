import {defineStore} from "pinia";

interface IUser {
    name: string;
    age: number;
}

const useStoreUser = defineStore("STORE_USER", {
    state: () => {
        return {
            user: {
                name: "lean",
                age: 1,
            },
        };
    },
    actions: {
        changeUser(user: IUser) {
            this.user = {...this.user, ...user};
        },
    },
});
export default useStoreUser;
