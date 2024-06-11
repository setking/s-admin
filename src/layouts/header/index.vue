<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-left">
        <Collapse />
        <Breadcrumb />
      </div>

      <User />
    </nav>
  </header>
</template>
<script lang="ts" setup>
import User from "./page/user.vue";
import Breadcrumb from  "./page/breadcrumb.vue"
import Collapse from "./page/collapse.vue";
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
    .nav-left{
      display: flex;
      align-items: center;
    }
  }
}
</style>
