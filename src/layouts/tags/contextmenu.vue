<template>
  <div v-if="visible" class="context-menu" :style="{ left: left + 'px', top: top + 'px' }">
    <ul>
      <li
          v-for="(item,index) in list"
          :key="item.icon"
          @click="$emit('handleClick', index, true)"
          v-show="!(index === 1 && tagViewLength === 1)"
      >
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import {watch} from 'vue'

const $props = withDefaults(
    defineProps<{
      list: { icon: string; name: string }[]
      tagViewLength: number
      visible: boolean
      left: number
      top: number
    }>(),
    {
      visible: false,
    },
)


const $emit = defineEmits(['update:visible', 'handleClick'])
watch(
    () => $props.visible,
    (newValue) => {
      if (newValue) {
        document.body.addEventListener('click', closeMenu)
      } else {
        document.body.removeEventListener('click', closeMenu)
      }
    },
)
//关闭右键事情Tabs
const closeMenu = () => $emit('update:visible', false)

</script>
<style lang="scss" scoped>
ul {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    list-style-type: none;
    padding: 3px 20px 5px 20px;
    cursor: pointer;
    &:hover {
      background: rebeccapurple;
      color: #ffffff;
    }
  }

}
.context-menu {
  position: absolute;
  border: 1px solid gainsboro;
  border-radius: 5px;
  text-align: center;
  background: #ffffff;
  z-index: 999;
}
</style>
