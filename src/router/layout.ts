export const LAYOUT = () => import("~layouts/index.vue");
export const EXCEPTION = () => import("~views/exception/index.vue");
export const PARENT_VIEW = () => import("~components/parentView/index.vue");
export const INNER_LINK = () => import("~components/innerLink/index.vue");
export const MODEL_NOT_FOUND_NAME = "PageNotFound";
export const PARENT_LAYOUT = "ParentLayout";
export const REDIRECT_NAME = "Redirect";
// 匹配views里面所有的.vue文件
const modules = import.meta.glob("../views/**/*.vue");
export const loadView = (view: any) => {
    let res;
    for (const path in modules) {
        const dir = path.split("views/")[1].split("/index.vue")[0];
        if (dir === view) {
            res = () => modules[path]();
        }
    }
    return res;
};
