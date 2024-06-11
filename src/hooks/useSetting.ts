import {useUserSettingWithOut} from "~store/modules/setting.ts";
import {computed} from "vue";
const userSetting = useUserSettingWithOut()
export function useSetting() {
    const getCollapsed = computed(() => userSetting.getCollapse);
    return {
        getCollapsed
    }
}
