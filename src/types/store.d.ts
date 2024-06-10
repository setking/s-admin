export interface UserInfo {
  username: string;
  password: string;
  homePath?: string | undefined;
}
export interface LoginInfo {
  username: string | undefined;
  password: string | undefined;
  rePassword: string | undefined;
}
export interface Menu {
  name: string;

  icon?: string;

  img?: string;

  path: string;

  // path contains param, auto assignment.
  paramPath?: string;

  disabled?: boolean;

  children?: Menu[];

  orderNo?: number;

  roles?: RoleEnum[];

  meta?: Partial<RouteMeta>;

  tag?: MenuTag;

  hideMenu?: boolean;
}
