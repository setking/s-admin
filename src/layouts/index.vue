<template>
  <div class="active">
    <div>
      <SideBar />
    </div>
    <div class="container">
      <Header />
      <Content />
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "./header/index.vue";
import Content from "./content/index.vue";
import Footer from "./footer/index.vue";
import SideBar from "./sider/index.vue";
</script>
<style lang="scss" scoped>
.active {
  width: 100vw;
  height: 100vh;
  display: flex;
  .container {
    width: 100%;
  }
}
</style>
