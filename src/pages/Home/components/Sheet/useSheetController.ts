import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SheetSchema, SheetSchemaType } from "./schema";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import { GetPasswordsResponse, Service } from "@/services";
import { generatePassword } from "@/utils/generatePassword";
import { useEffect } from "react";

type useSheetControllerProps = {
  editingPassword: GetPasswordsResponse;
};

export const useSheetController = ({
  editingPassword,
}: useSheetControllerProps) => {
  const service = new Service();
  const { toast } = useToast();
  const { auth } = useAuth();
  const { control, setValue, handleSubmit, reset } = useForm<SheetSchemaType>({
    resolver: yupResolver(SheetSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const createPass = async ({ email, password, name }: SheetSchemaType) => {
    try {
      await service.CreatePasswords({
        codcli: auth?.codcli || 0,
        email,
        name,
        password,
      });
      reset();
      window.location.reload();
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: e.message,
      });
    }
  };
  const updatePass = async ({ email, password, name }: SheetSchemaType) => {
    try {
      await service.UpdatePasswords({
        codPass: editingPassword.id_position,
        codcli: auth?.codcli || 0,
        email,
        name,
        password,
      });
      reset();
      window.location.reload();
    } catch (e: any) {
      toast({
        variant: "destructive",
        title: e.message,
      });
    }
  };

  const generateStrongPassword = () => {
    const strongPassword = generatePassword(18);
    setValue("password", strongPassword);
  };

  useEffect(() => {
    if (editingPassword) {
      setValue("name", editingPassword.name);
      setValue("password", editingPassword.password);
    }
  }, [editingPassword]);

  return {
    control,
    createPass,
    generateStrongPassword,
    handleSubmit,
    reset,
    updatePass,
  };
};
