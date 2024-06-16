export enum StorageKeys {
  USER = "@User:SavePass",
}

export const useLocalStorage = () => {
  const getItem = (key: StorageKeys) => {
    const storageItem = localStorage.getItem(key);

    if (!storageItem) {
      return null;
    }

    const data = JSON.parse(storageItem);

    return data;
  };

  const setItem = (key: StorageKeys, data: string) => {
    localStorage.setItem(key, data);
  };

  const removeItem = (key: StorageKeys) => {
    localStorage.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};
