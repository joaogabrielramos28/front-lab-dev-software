import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

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
  const { toast } = useToast();
  const [passwords, setPasswords] = useState(INITIAL_PASSWORDS);

  const handleCopyPassword = (password: string) => {
    toast({
      variant: "default",
      title: "Senha copiada com sucesso",
    });
    navigator.clipboard.writeText(password);
  };

  const handleToggleSheet = () => {};

  const generateStrongPassword = () => {};
  return {
    passwords,
    handleCopyPassword,
  };
};
