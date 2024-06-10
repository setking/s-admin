<template>
  <section>
    <router-view>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.fullPath" />
      </template>
    </router-view>
  </section>
</template>
<script lang="ts" setup></script>
