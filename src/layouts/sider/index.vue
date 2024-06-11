<template>
  <div :class="getCollapsed? 'menu' : 'collMenu'">
    <Logo :collapse="getCollapsed"/>
    <Siderbar />

  </div>
</template>
<script lang="ts" setup>
import Siderbar from "./sidebar.vue";
import Logo from "./logo.vue"
import {useSetting} from "~hooks/useSetting.ts";
import {watch} from "vue";
const {getCollapsed} = useSetting()
watch(getCollapsed, () => {

})
</script>
<style lang="scss" scope>
@mixin baseMenu($width) {
  height: 100vh;
  background-color: #545c64 !important;
  overflow: hidden !important;
  width: $width !important;
}
.menu {

  @include baseMenu(calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding)*2));
}
.collMenu{
  @include baseMenu(200px);
}
</style>
