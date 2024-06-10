import { LAYOUT, loadView, PARENT_VIEW, INNER_LINK } from "./../router/layout";
interface TreeHelperConfig {
  id: string;
  children: string;
}
const defaultInfo: TreeHelperConfig = {
  id: "id",
  children: "children",
};
const getConfig = (config: Partial<TreeHelperConfig>) =>
  Object.assign({}, defaultInfo, config);
export function filter<T = any>(
    isAfter: Boolean = false,
  tree: T[],
  func: (n: T) => boolean,
  config: Partial<TreeHelperConfig> = {}
): T[] {
  config = getConfig(config);
  const children = config.children as string;
  function filters(list: T[]) {
    return list
      .map((node: any) => ({ ...node }))
      .filter((node) => {
        node[children] = node[children] && filters(node[children]);
        if (isAfter) {
          afterFilter(node);
        }
        return func(node) || (node[children] && node[children].length);
      });
  }
  return filters(tree);
}
function afterFilter(node: any) {
  if (node.component === "LAYOUT") {
    node.component = LAYOUT;
  } else if (node.component === "InnerLink") {
    node.component = INNER_LINK;
  } else if (node.component === "ParentLayout") {
    node.component = PARENT_VIEW;
  } else {
    node.component = loadView(node.component);
  }
}
