<template>
  <div class="box">
    <el-card class="box-card">
      <login-form />
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import LoginForm from "./loginForm.vue";
import { ElCard } from "element-plus";
</script>
<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  position: relative;
  .box-card {
    position: absolute;
    left: 40%;
    top: 40%;
  }
}
</style>
