import request from "~request/axios";

// 登录
interface ResponseType<P = {}> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface User {
  token: string;
  expires: number;
}
export const login = (data: {}) => {
  return request<ResponseType<User>>({
    url: "/api/user",
    method: "Get",
    data: data,
  });
};
export const userInfo = () => {
  return request<ResponseType<User>>({
    url: "/api/user/info",
    method: "Get",
  });
};

export const menuList = () => {
  return request<ResponseType<User>>({
    url: "/api/menu",
    method: "Get",
  });
};
