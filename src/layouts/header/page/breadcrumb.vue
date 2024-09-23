<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(list, index) in levelList" :key="index">
        <span>{{ list.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
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
.breadcrumb {
  margin-left: 10px;
  font-size: 16px !important;
}
</style>
