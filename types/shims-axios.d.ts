import { InternalAxiosRequestConfig } from "axios";
/**
 * 自定义扩展axios模块
 * @author Maybe
 */
export {};
declare module "axios" {
  export interface AxiosInstance {
    <T = any>(config: InternalAxiosRequestConfig): Promise<T>;
    request<T = any>(config: InternalAxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T>;
    delete<T = any>(
      url: string,
      config?: InternalAxiosRequestConfig
    ): Promise<T>;
    head<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T>;
    post<T = any>(
      url: string,
      data?: any,
      config?: InternalAxiosRequestConfig
    ): Promise<T>;
    put<T = any>(
      url: string,
      data?: any,
      config?: InternalAxiosRequestConfig
    ): Promise<T>;
    patch<T = any>(
      url: string,
      data?: any,
      config?: InternalAxiosRequestConfig
    ): Promise<T>;
  }
}
