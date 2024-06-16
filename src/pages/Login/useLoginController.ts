import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Service } from "@/services";
import { useToast } from "@/components/ui/use-toast";
import { StorageKeys, useLocalStorage } from "@/hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const useLoginController = () => {
  const { setItem } = useLocalStorage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const service = new Service();
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = async (data: LoginSchemaType) => {
    try {
      const response = await service.Login({
        email: data.email,
        password: data.password,
      });

      setItem(
        StorageKeys.USER,
        JSON.stringify({
          codcli: response.codcli,
          name: response.name,
          isAdmin: response.is_admin,
        })
      );

      navigate("/home");
    } catch (e) {
      toast({
        title: e.message,
        variant: "destructive",
      });
    }
  };

  return {
    control,
    handleSubmit,
    handleLogin,
  };
};
