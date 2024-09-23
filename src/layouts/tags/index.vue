<template>
  <div class="tags-list">
    <el-tabs
        type="card"
        v-model="tabActive"
        class="tag-view-content user-none"
        @tab-change="handleTabChange"
        @tab-remove="closeTag"
    >
      <el-tab-pane
          v-for="item in getTagsViewList"
          :key="item.fullPath"
          :name="item.fullPath"
          :closable="item.fullPath !== '/dashboard/analysis'"
      >
        <template #label>
          <div @contextmenu.prevent="openMenu($event, item.fullPath)">
            <span>{{ item.meta.title }}</span>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
    <transition name="slide-fade">
      <Context-list
          :list="openMenuList"
          :tagViewLength="getTagsViewList.length"
          :="contextmenuParams"
          v-model:visible="visible"
          @handleClick="handleOption"
      />
    </transition>
  </div>
</template>
<script lang="ts" setup>


import {useRouter, useRoute} from 'vue-router'
import {ref, watch} from "vue";
import {useUserUseTagsView} from "~store/modules/tagsView.ts"
import {storeToRefs} from "pinia";
import ContextList from './contextmenu.vue'

const useTagsView = useUserUseTagsView()
const {getTagsViewList} = storeToRefs(useTagsView)
const route = useRoute();
const router = useRouter()
let tabActive = ref<any>('');
let visible = ref<boolean>(false)
let currentPath = ref<string>('')
// 存储x轴y轴
const contextmenuParams = ref({
  left: 0,
  top: 0,
})
useTagsView.updateTagsView()
watch(
    () => route.fullPath,
    () => {
      let {meta, name, fullPath} = route
      tabActive.value = fullPath //路径赋值
      useTagsView.addTabsView({
        fullPath,
        meta,
        name,
      })
    },
    {
      immediate: true,
    },
)
const handleTabChange = (fullPath: string) => {
  router.push(fullPath)
}
const closeTag = (fullPath: string) => {
  useTagsView.removeTabsView(
      fullPath,
      route.fullPath === fullPath,
      handleTabChange
  )
}

//所有方法
const handleOption = (index: number, isHas: boolean) => {
  let fullPath = isHas ? currentPath.value : Route.fullPath //当前路由参数
  switch (index) {
    case 0:
      useTagsView.refreshTagsView(fullPath, router)//刷新事件
      handleTabChange(fullPath)
      break
    case 1:
      useTagsView.closeOtherTagsView(fullPath)
      handleTabChange(fullPath) //跳转到对应的路由
      break
    case 2:
      useTagsView.closeTagsViewOnSide(fullPath, 'left')
      handleTabChange(fullPath) //跳转到对应的路由
      break
    case 3:
      useTagsView.closeTagsViewOnSide(fullPath, 'right')
      handleTabChange(fullPath) //跳转到对应的路由
      break
    case 4:
      useTagsView.closeAllTagsView() //关闭全部
      handleTabChange('/dashboard')
      break
  }
}
//双击右键值数据
const openMenuList = ref<{ icon: string; name: string }[]>([
  {
    icon: 'Refresh',
    name: '刷新',
  },
  {
    icon: 'Close',
    name: '关闭其他',
  },
  {
    icon: 'Back',
    name: '关闭左侧',
  },
  {
    icon: 'Right',
    name: '关闭右侧',
  },
  {
    icon: 'Close',
    name: '关闭全部',
  },
])
const openMenu = ({x, y}: MouseEvent, fullPath: string) => {
  contextmenuParams.value = {
    left: x, // X轴
    top: y, // Y轴
  }
  visible.value = true //打开菜单
  currentPath.value = fullPath // 路径存起
}
</script>
<style lang="scss" scoped>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
