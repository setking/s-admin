<template>
  <el-scrollbar class="theme-dark">
    <el-menu
      default-active="/dashboard/analysis"
      class="el-menu-vertical-demo scroll-menu"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
      background-color="#545c64"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b"
    >
      <SidebarItem
        v-for="(route, index) in menuList"
        :key="route.path + index"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script lang="ts" setup>
import { ElScrollbar, ElMenu } from "element-plus";
import SidebarItem from "./sidebarItem.vue";
import { asyncRoutes } from "~router/modules";
import { useUserStore } from "~store/modules/user";
const useStore = useUserStore();
const menuList = asyncRoutes.concat(useStore.getMenuList as unknown as []);
console.log(menuList);
const handleOpen = (e: any) => {
  console.log(e);
};
const handleClose = (e: any) => {
  console.log(e);
};
</script>
<style lang="scss" scoped>
::v-deep .el-scrollbar__wrap {
  margin-right: -6px;
  margin-bottom: -6px;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background-color: #545c64;
}

::-webkit-scrollbar-thumb {
  background-color: #545c64;
  border-radius: 3px;
}
</style>
