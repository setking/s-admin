<template>
  <div>
    <template v-if="isMnuItem(item)">
      <el-menu-item class="menu-item" :index="resolvePath(item.children)">
        <template #title
          ><span>{{ item.meta.title }}</span></template
        >
      </el-menu-item>
    </template>

    <el-sub-menu v-if="isMenu(item)" :index="toStrings(item.meta.orderNo)">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="(child, index) in item.children"
        :key="child.path + index"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-sub-menu>
  </div>
</template>
<script lang="ts" setup>
import { ElSubMenu, ElMenuItem, ElMenuItemGroup } from "element-plus";
import { RouteRecordRaw } from "vue-router";
import { toStrings } from "~shared/base";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  basePath: {
    type: String,
    default: "",
  },
});
interface SiberBarMenu {
  path: string;
  children: [];
  component: any;
  meta: object;
  redirect?: string;
  name: string;
}

const isMenu = (menu: SiberBarMenu | Record<string, any>) => {
  if (menu.children && menu.children.length > 0) {
    return true;
  }
};
const isMnuItem = (children: SiberBarMenu | Record<string, any>) => {
  if (!children.children) {
    return true;
  }
};
const resolvePath = (path: string, routeQuery: any = {}) => {
  if (path) {
    return props.basePath + "/" + path;
  }
  return props.basePath;
};
</script>
<style lang="scss" scoped>
.menu-item {
  width: 100%;
}
</style>
