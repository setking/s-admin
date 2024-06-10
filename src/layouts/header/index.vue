<template>
  <header class="header">
    <nav class="nav">
      <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(list, index) in levelList" :key="index">
            <span>{{ list.meta.title }}</span>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
      <User />
    </nav>
  </header>
</template>
<script lang="ts" setup>
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
import User from "./page/user.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
const route = useRoute();
const matched = ref<any>();
let levelList = ref<any>();
watch(route, (nex: any) => {
  breadcrumbSet(nex);
});
function isDashboard(route: any) {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  return name.trim() === "Index";
}
const breadcrumbSet = (nex: any) => {
  matched.value = nex.matched.filter(
    (item: any) => item.meta && item.meta.title
  );
  const first = matched.value[0];

  if (!isDashboard(first)) {
    matched.value = [{ path: "/index", meta: { title: "首页" } }].concat(
      matched.value
    );
  }
  levelList.value = matched.value.filter(
    (item: any) =>
      item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
};
breadcrumbSet(route);
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;
  .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 60px 10px 10px;
  }
}
</style>
