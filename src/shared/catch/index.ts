import { createStorage as create } from "./storageCatch";
import { systemKey } from "./sys";
const createCatchOption = (storage: Storage, options: any = {}) => {
  return {
    storage,
    prefixKey: systemKey(),
    ...options,
  };
};
export const WebStorage = create(createCatchOption(sessionStorage));
export const createStorage = (
  storage: Storage = sessionStorage,
  options: any = {}
) => {
  return create(createCatchOption(storage, options));
};
export const createSessionStorage = (options: any = {}) => {
  return createStorage(sessionStorage, options);
};
export const createLocalStorage = (options: any = {}) => {
  return createStorage(localStorage, options);
};
export default WebStorage;
