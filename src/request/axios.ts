import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { handleAuthError, handleNetworkError } from "./errMsg";

const service = axios.create();
////防抖处理
// const debounceCancel = new Map();
// service.interceptors.request.use(
//   (config: InternalAxiosRequestConfig) => {
//     // 存储防抖唯一信息
//     const tokenKey = `${config.method}-${config.url}`;
//     const cancel = debounceCancel.get(tokenKey);
//     if (cancel) {
//       cancel();
//     }
//     return new Promise((resolve, reject) => {
//       const timer = setTimeout(() => {
//         clearTimeout(timer);
//         resolve(config);
//       }, 800);
//       debounceCancel.set(tokenKey, () => {
//         clearTimeout(timer);
//         reject(new Error("取消请求"));
//       });
//     });
//   },
//   (error: any) => {
//     Promise.reject(error);
//   }
// );
// 节流处理;
let lastTime = new Date().getTime();
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.method === "post") {
      const nowTime = new Date().getTime();
      if (nowTime - lastTime < 800) {
        return Promise.reject(new Error("节流处理中，稍后再试"));
      }
      lastTime = nowTime;
      return config;
    } else {
      return config;
    }
  },
  (error: any) => {
    Promise.reject(error);
  }
);
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    handleAuthError(response.data.code);
    return Promise.resolve(response.data.data);
  },
  (error: any) => {
    handleNetworkError(error);
    return Promise.reject(error);
  }
);

export default service;
