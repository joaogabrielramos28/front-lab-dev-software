import { useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/components/ui/use-toast";
import { Service } from "@/services";
import { useNavigate } from "react-router-dom";
import { StorageKeys, useLocalStorage } from "@/hooks/useLocalStorage";

export const useRegisterController = () => {
  const { setItem } = useLocalStorage();
  const service = new Service();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { control, handleSubmit } = useForm<RegisterSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(RegisterSchema),
  });

  const handleRegister = async (data: RegisterSchemaType) => {
    try {
      const response = await service.CreateAccount({
        email: data.email,
        name: data.name,
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
    handleRegister,
  };
};
