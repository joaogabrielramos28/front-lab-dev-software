import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { StorageKeys, useLocalStorage } from "@/hooks/useLocalStorage";
import { GetPasswordsResponse, Service } from "@/services";
import { useEffect, useState } from "react";

export const useHomeController = () => {
  const service = new Service();
  const { auth, setAuth } = useAuth();
  const { removeItem } = useLocalStorage();
  const { toast } = useToast();
  const [passwords, setPasswords] = useState<GetPasswordsResponse[]>([]);
  const [editingPassword, setIsEditingPassword] =
    useState<GetPasswordsResponse>({} as GetPasswordsResponse);
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  const [isConfirmModal, setIsConfirmModal] = useState(false);

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
        codcli: auth?.codcli || 0,
      });

      setPasswords(response);
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: e.message,
      });
    }
  };

  const handleDeletePass = async (id: number) => {
    try {
      await service.DeletePassword({
        codPass: id,
      });

      const filteredPass = passwords.filter((item) => item.id_position !== id);

      setPasswords(filteredPass);
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: e.message,
      });
    }
  };
  const handleDeleteAccount = async () => {
    try {
      await service.DeleteAccount({
        codcli: auth?.codcli || 0,
      });

      handleLogout();
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: e.message,
      });
    }
  };

  const handleLogout = () => {
    removeItem(StorageKeys.USER);
    setAuth(null);
  };

  const handleToggleSheet = () => {
    setSheetIsOpen((prev) => !prev);
    setIsEditingPassword({} as GetPasswordsResponse);
  };

  const handleToggleDeleteModal = () => {
    setIsConfirmModal((prev) => !prev);
  };

  useEffect(() => {
    getPasswords();
  }, []);
  return {
    passwords,
    auth,
    handleCopyPassword,
    handleLogout,
    handleDeletePass,
    editingPassword,
    setIsEditingPassword,
    handleToggleSheet,
    sheetIsOpen,
    handleToggleDeleteModal,
    isConfirmModal,
    handleDeleteAccount,
  };
};
