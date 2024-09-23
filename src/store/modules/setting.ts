import { defineStore } from "pinia";
import { store } from "~/store";

interface UseCollapse {
  isCollapse: boolean | false;
}
export const useUserSetting = defineStore({
  id: "use-userSetting",
  state: (): UseCollapse => ({
    isCollapse: false,
  }),
  getters: {
    getCollapse(state): boolean {
      return state.isCollapse;
    },
  },
  actions: {
    setCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse;
    },
    resetUse() {
      this.isCollapse = false;
    },
  },
});
export function useUserSettingWithOut() {
  return useUserSetting(store);
}
