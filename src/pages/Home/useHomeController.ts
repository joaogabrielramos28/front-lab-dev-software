import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { StorageKeys, useLocalStorage } from "@/hooks/useLocalStorage";
import { Service } from "@/services";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type Password = {
  name: string;
  email: string;
};

const INITIAL_PASSWORDS = [
  {
    title: "Amazon",
    email: "johnDoe@email.com",
  },
  {
    title: "Twitter",
    email: "johnDoe@email.com",
  },
  {
    title: "Google",
    email: "johnDoe@email.com",
  },
];

export const useHomeController = () => {
  const service = new Service();
  const { auth, setAuth } = useAuth();
  const { removeItem } = useLocalStorage();
  const { toast } = useToast();
  const [passwords, setPasswords] = useState(INITIAL_PASSWORDS);

  const handleCopyPassword = (password: string) => {
    toast({
      variant: "default",
      title: "Senha copiada com sucesso",
    });
    navigator.clipboard.writeText(password);
  };

  const getPasswords = async () => {
    try {
      const response = await service.GetPasswords({
        codcli: auth.codcli,
      });
    } catch (e) {
      toast({
        variant: "destructive",
        title: e.message,
      });
    }
  };

  const handleToggleSheet = () => {};

  const handleLogout = () => {
    removeItem(StorageKeys.USER);
    setAuth(null);
  };

  useEffect(() => {
    getPasswords();
  }, []);
  return {
    passwords,
    auth,
    handleCopyPassword,
    handleLogout,
  };
};
