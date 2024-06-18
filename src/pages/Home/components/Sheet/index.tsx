import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowsClockwise } from "@phosphor-icons/react";
import { useSheetController } from "./useSheetController";
import { Controller } from "react-hook-form";
import { GetPasswordsResponse } from "@/services";

type SheetPasswordProps = {
  editingPassword: GetPasswordsResponse;
  open: boolean;
  onClose: () => void;
};

export const SheetPassword = ({
  editingPassword,
  open,
  onClose,
}: SheetPasswordProps) => {
  const {
    control,
    createPass,
    generateStrongPassword,
    handleSubmit,
    reset,
    updatePass,
  } = useSheetController({ editingPassword });

  const handleClose = () => {
    onClose();
    reset();
  };

  const isEditing = editingPassword.id_position;

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Criar nova senha</SheetTitle>
          <SheetDescription>
            Preencha os campos referente a sua nova senha.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          <div className=" flex flex-col gap-2">
            <label className="text-sm  text-white font-medium">Nome</label>

            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    {...field}
                    className=" bg-transparent max-w-[1020px]"
                    placeholder="Digite o nome do site da sua senha"
                  />
                  {fieldState.error && (
                    <span className="text-red-500 text-xs">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className=" flex flex-col gap-2">
            <label className="text-sm  text-white font-medium">E-mail</label>

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    {...field}
                    className=" bg-transparent max-w-[1020px]"
                    placeholder="Digite o email da sua conta"
                  />
                  {fieldState.error && (
                    <span className="text-red-500 text-xs">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm  text-white font-medium">Senha</label>
            <div className="flex gap-4 ">
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Input
                      {...field}
                      className=" bg-transparent max-w-[1020px]"
                      placeholder="Digite a senha da sua conta"
                    />
                    {fieldState.error && (
                      <span className="text-red-500 text-xs">
                        {fieldState.error.message}
                      </span>
                    )}
                  </>
                )}
              />
              <Button
                onClick={generateStrongPassword}
                variant="secondary"
                className=" bg-green-500 hover:bg-green-500 hover:opacity-75 transition-opacity"
              >
                <ArrowsClockwise weight="bold" size={24} color="white" />
              </Button>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              onClick={
                isEditing ? handleSubmit(updatePass) : handleSubmit(createPass)
              }
              className="mt-6"
              variant="secondary"
              type="submit"
            >
              {isEditing ? "Editar senha" : "Adicionar senha"}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
