import { CacheSetting } from "./cacheEnum";
import { Persistent, BasicKey } from "./persistent";
export function getToken() {
  return getUserCache(CacheSetting.TOKEN_KEY);
}

export function getUserCache<T>(key: BasicKey) {
  const func = Persistent.getLocal;
  return func(key) as T;
}
export function setUserCache(key: BasicKey, value: any) {
  const func = Persistent.setLocal;
  return func(key, value, true);
}
export function clearUserCache(immediate = true) {
  const func = Persistent.clearLocal;
  return func(immediate);
}
