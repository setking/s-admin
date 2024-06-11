<template>
  <div class="logo-main">
    <Transition name="fade">
    <span v-if="collapse">
       <img class="logo" src="../../assets/img/bird.jpg">
    </span>
      <span v-else>
      admin
    </span>
    </Transition>
  </div>

</template>
<script lang="ts" setup>
const props = defineProps({
  collapse: {
    type: Boolean,
    required: true,
    default: false
  }
})
</script>
<style lang="scss" scope>
.logo-main {
  width: 100%;
  text-align: center !important;
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  font-size: 24px;

  .logo {
    width: 50px;
    height: 30px;
  }
}
</style>
