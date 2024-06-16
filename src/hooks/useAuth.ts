import { useState } from "react";
import { StorageKeys, useLocalStorage } from "./useLocalStorage";

type Auth = {
  codcli: number;
  name: string;
  is_admin: boolean;
};

export const useAuth = () => {
  const { getItem } = useLocalStorage();
  const [auth, setAuth] = useState<Auth | null>(() => {
    const storage = getItem(StorageKeys.USER);

    if (!storage) {
      return null;
    }

    return storage;
  });

  return {
    auth,
    setAuth,
  };
};
