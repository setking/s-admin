import { createLocalStorage, createSessionStorage } from "./index";
import { Caches } from "./cache";
import { CacheSetting } from "./cacheEnum";
import { UserInfo } from "~/types/store";
import { toRaw } from "vue";
import { RouteRecordRaw } from "vue-router";
interface BasicCache {
  [CacheSetting.TOKEN_KEY]: string | number | null | undefined;
  [CacheSetting.USER_INFO_KEY]: UserInfo;
  [CacheSetting.MENU_LIST]: RouteRecordRaw;
}

// System default cache time, in seconds
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

type Nullable<T> = T | null;
type LocalStore = BasicCache;
// type SessionStore = BasicCache;
type LocalKeys = keyof LocalStore;
// type SessionKeys = keyof SessionStore;

const lSet = createLocalStorage();
const sSet = createSessionStorage();
const localCache = new Caches(DEFAULT_CACHE_TIME);
const sessionCache = new Caches(DEFAULT_CACHE_TIME);

export type BasicKey = keyof BasicCache;
function initCaches() {
  const localCacheData = lSet.get(CacheSetting.LOCAL_CACHE_KEY);
  const sessionCacheData = sSet.get(CacheSetting.SESSION_CACHE_KEY);
  localCacheData && localCache.resetCache(localCacheData);
  sessionCacheData && sessionCache.resetCache(sessionCacheData);
}
export class Persistent {
  static getLocal<T>(key: LocalKeys) {
    return localCache.get(key)?.value as Nullable<T>;
  }
  static setLocal(
    key: LocalKeys,
    value: LocalStore[LocalKeys],
    immediate = false
  ): void {
    localCache.set(key, toRaw(value));
    immediate && lSet.set(CacheSetting.LOCAL_CACHE_KEY, localCache.getCache);
  }
  static clearLocal(immediate: boolean = false): void {
    sessionCache.clear();
    immediate && lSet.clear();
  }
}

initCaches();
