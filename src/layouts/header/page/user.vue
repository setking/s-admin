<template>
  <el-dropdown>
    <span class="el-dropdown-link"> admin </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="logOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { useUserStore } from "~store/modules/user.ts";
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";

const userStore = useUserStore();
const logOut = () => {
  userStore.logOut();
};
</script>
<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
