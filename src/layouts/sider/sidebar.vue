<template>
  <el-scrollbar class="theme-dark">
    <el-menu
      default-active="/dashboard/analysis"
      :unique-opened="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b"
      :collapse="getCollapsed"
    >
      <el-menu-item-group>
      <SidebarItem
        v-for="(route, index) in menuList"
        :key="route.path + index"
        :item="route"
        :base-path="route.path"
      />
      </el-menu-item-group>
    </el-menu>
  </el-scrollbar>

</template>
<script lang="ts" setup>
import {ElScrollbar, ElMenu, ElMenuItemGroup} from "element-plus";
import SidebarItem from "./sidebarItem.vue";
import { asyncRoutes } from "~router/modules";
import { useUserStore } from "~store/modules/user";
import {useSetting} from "~hooks/useSetting.ts";
const {getCollapsed} = useSetting()
const useStore = useUserStore();
const menuList = asyncRoutes.concat(useStore.getMenuList as unknown as []);
</script>
<style lang="scss" scoped>
::v-deep .el-scrollbar__wrap {
  margin-right: -6px;
  margin-bottom: -6px;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: scroll;
}
::v-deep .el-menu{
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
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
