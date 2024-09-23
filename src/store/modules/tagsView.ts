import {defineStore} from "pinia";
import {store} from "~/store";
import {nextTick} from "vue";

interface TagsView {
    tagsViewList: any[],
    refreshKey: number
}

interface TagsViewType {
    fullPath: string,
    meta: string,
    name: string
}

export const useTagsView = defineStore({
    id: "use-TagsView",
    state: (): TagsView => ({
        tagsViewList: [],
        refreshKey: 0
    }),
    getters: {
        getTagsViewList(state): any[] {
            return state.tagsViewList;
        },
        getRefreshKey(state): number {
            return state.refreshKey;
        }
    },
    actions: {
        addTabsView(tagsItem: TagsViewType) {
            let row = this.tagsViewList.find((v) => v.fullPath === tagsItem.fullPath)
            if (!row) this.tagsViewList.push(tagsItem)
        },
        removeTabsView(
            fullPath: string,
            isCurrent: boolean,
            callback: (val: string) => void,
        ) {
            //如果不符合直接就删除
            if (isCurrent) {
                this.tagsViewList.forEach((item, index) => {
                    if (item.fullPath === fullPath) {
                        let navIndex =
                            this.tagsViewList[index + 1] || this.tagsViewList[index - 1]

                        if (navIndex) callback(navIndex.fullPath) //跳转到对应的路由
                    }
                })
            }
            this.changeTags(fullPath)
        },
        changeTags(fullPath: string) {
            this.tagsViewList = this.tagsViewList.filter(
                (v) => v.fullPath !== fullPath
            ) //删除面包屑每一项
        },
        closeOtherTagsView(fullPath: string) {
            this.tagsViewList = this.tagsViewList.filter((item) => {
                return item.meta.fixation || item.fullPath === fullPath
            })
        },
        closeTagsViewOnSide(fullPath: string, type: 'left' | 'right') {
            // 找到当前index
            let currentIndex = this.tagsViewList.findIndex(
                (item) => item.fullPath === fullPath,
            )

            // 判断一下必须存在才会执行
            if (currentIndex !== -1) {
                let range =
                    type === 'left'
                        ? [0, currentIndex]
                        : [currentIndex + 1, this.tagsViewList.length]

                // 是左侧还是右侧 item.meta.noClosable固定留下的
                this.tagsViewList = this.tagsViewList.filter((item, index) => {
                    return index < range[0] || index >= range[1] || item.fixation
                })
            }
        },
        closeAllTagsView() {
            this.tagsViewList = this.tagsViewList.filter((item) => {
                return item.meta.fixation
            })
        },
        refreshTagsView() {
            nextTick(() => {
                if (this.refreshKey === 0) {
                    this.refreshKey += 1
                } else if (this.refreshKey === 10) {
                    this.refreshKey -= 1
                }
            })
        },
        updateTagsView() {
            let hasAnalysis = this.getTagsViewList.find(tag => {
                return tag.name === "Analysis"
            })
            if (!hasAnalysis) {
                let matched = {fullPath: "/dashboard/analysis", meta: {title: "首页"}}
                this.getTagsViewList.unshift(matched)
            }
        }
    },
    // pinia持久化插件属性
    persist: true
});

export function useUserUseTagsView() {
    return useTagsView(store);
}
