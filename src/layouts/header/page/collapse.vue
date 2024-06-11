<template>
  <div @click="isCollapse" class="collapse">
    <el-icon size="20" v-if="isCollapsed">
      <Expand/>
    </el-icon>
    <el-icon :size="20" v-else>
      <fold/>
    </el-icon>
  </div>
</template>
<script lang="ts" setup>
import {ElIcon} from "element-plus"
import {computed, ref} from "vue";
import {useUserSettingWithOut} from "~store/modules/setting.ts";

const userSetting = useUserSettingWithOut()
const isCollapsed = ref<Boolean>(false)
isCollapsed.value = userSetting.getCollapse
const isCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  userSetting.setCollapse(isCollapsed.value)
}
</script>
<style lang="scss" scoped>
.collapse {
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
