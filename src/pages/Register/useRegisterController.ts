import { useForm } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/components/ui/use-toast";
import { Service } from "@/services";
import { useNavigate } from "react-router-dom";

export const useRegisterController = () => {
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
      await service.CreateAccount({
        email: data.email,
        name: data.name,
        password: data.password,
      });

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
