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
