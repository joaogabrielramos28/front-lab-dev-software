import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SheetSchema, SheetSchemaType } from "./schema";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import { Service } from "@/services";
import { generatePassword } from "@/utils/generatePassword";

export const useSheetController = () => {
  const service = new Service();
  const { toast } = useToast();
  const { auth } = useAuth();
  const { control, setValue, handleSubmit } = useForm<SheetSchemaType>({
    resolver: yupResolver(SheetSchema),
  });

  const createPass = async ({ email, password, name }: SheetSchemaType) => {
    try {
      await service.CreatePasswords({
        codcli: auth?.codcli || 0,
        email,
        name,
        password,
      });
    } catch (e) {
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

  return {
    control,
    createPass,
    generateStrongPassword,
    handleSubmit,
  };
};
