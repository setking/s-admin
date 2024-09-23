<template>
  <div v-if="!item.hidden">
    <template
        v-if="onlyItem(item, item.children) && (!onlyOneChild.children || onlyOneChild.oneChild)">
      <app-link class="link-press" v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item class="menu-item" :index="resolvePath(onlyOneChild.path)">
          <template #title>
            <el-icon v-if="item.meta && item.meta.icon">
              <Component :is="item.meta.icon"/>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </app-link>
    </template>

    <el-sub-menu v-else :index="resolvePath(item.path)" teleported>
      <template v-if="item.meta" #title>
        <el-icon v-if="item.meta.icon">
          <Component :is="item.meta.icon"/>
        </el-icon>
        <span v-if="item.meta">{{ item.meta ? item.meta.title : "" }}</span>
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
import {ElSubMenu, ElMenuItem, ElIcon} from "element-plus";
import {ref} from "vue"
import AppLink from "./Link.vue"
import {getNormalPath} from "~shared/base.ts";

const onlyOneChild = ref({});
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

function onlyItem(parent: any, children: any[]) {
  if (!children) children = []
  const hasChild = children.filter(item => {
    onlyOneChild.value = item
    return true
  })
  if (hasChild.length === 1) {
    return true
  }
  if (hasChild.length === 0) {
    onlyOneChild.value = {...parent, path: '', oneChild: true}
    return true
  }
  return false
}

const resolvePath = (path: string) => {
  if (path) {
    return props.basePath + "/" + path;
  }
  return props.basePath;
};
</script>
<style lang="scss" scoped>
.link-press {
  text-decoration: none;
}
</style>
