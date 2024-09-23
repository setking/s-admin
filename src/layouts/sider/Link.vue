<template>
  <component :is="type" v-bind="linkProps()">
    <slot />
  </component>
</template>

<script setup>
import {computed} from "vue"
const props = defineProps({
  to: {
    type: [String, Object],
    required: true
  }
})


const type = computed(() => {
  return 'router-link'
})

function linkProps() {
  return {
    to: props.to
  }
}
</script>
