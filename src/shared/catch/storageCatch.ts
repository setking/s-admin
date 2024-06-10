export const createStorage = ({ storage = sessionStorage, prefixKey = "" }) => {
  const WebStorage = class WebStorage {
    private storage: Storage;
    private prefixKey?: string;

    constructor() {
      this.storage = storage;
      this.prefixKey = prefixKey;
    }
    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase();
    }
    set(key: string, value: any) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
      });
      console.log("stringifyValue", JSON.parse(stringData).value);
      this.storage.setItem(this.getKey(key), stringData);
    }
    get(key: string) {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return;
      try {
        const data = JSON.parse(val);
        const { value } = data;
        return value;
      } catch (err) {
        return err;
      }
    }
    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }
    clear(): void {
      this.storage.clear();
    }
  };
  return new WebStorage();
};
