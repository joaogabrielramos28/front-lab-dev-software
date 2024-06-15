import { useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const useLoginController = () => {
  const { control, handleSubmit } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = (data: LoginSchemaType) => {
    console.log(data);
  };

  return {
    control,
    handleSubmit,
    handleLogin,
  };
};
