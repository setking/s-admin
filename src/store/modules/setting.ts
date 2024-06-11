import { defineStore } from "pinia";
import {store} from "~/store";

interface UseCollapse {
    isCollapse: Boolean
}
export const useUserSetting = defineStore({
    id: "use-userSetting",
    state: (): UseCollapse => ({
        isCollapse: false,
    }),
    getters: {
        getCollapse(state): UseCollapse {
            return (
                state.isCollapse
            );
        },
    },
    actions: {
        setCollapse(isCollapse: Boolean) {
            this.isCollapse = isCollapse;
        },
        resetUse() {
            this.isCollapse = false;
        }
    },
});
export function useUserSettingWithOut() {
    return useUserSetting(store);
}
