<template>
  <div class="menu">
    <div class="logo">admin</div>
    <Siderbar />
  </div>
</template>
<script lang="ts" setup>
import Siderbar from "./sidebar.vue";
</script>
<style lang="scss" scope>
.menu {
  height: 100vh;
  width: 200px !important;
  background-color: #545c64 !important;
  overflow: hidden !important;
}
.logo {
  width: 100%;
  text-align: center !important;
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
}
</style>
