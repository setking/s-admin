<template>
  <div class="active">
    <div>
      <SideBar />
    </div>
    <div class="container">
      <Header />
      <Tags />
      <Content :key="getRefreshKey"/>
<!--       <Footer />-->
    </div>
  </div>
</template>
<script lang="ts" setup>
import Header from "./header/index.vue";
import Tags from "./tags/index.vue";
import Content from "./content/index.vue";
// import Footer from "./footer/index.vue";
import SideBar from "./sider/index.vue";
import {useUserUseTagsView} from "~store/modules/tagsView.ts"
import {storeToRefs} from "pinia";

const useTagsView = useUserUseTagsView()
const {getRefreshKey} = storeToRefs(useTagsView)
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
