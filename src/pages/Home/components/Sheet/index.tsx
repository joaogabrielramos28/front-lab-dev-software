import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowsClockwise } from "@phosphor-icons/react";

export const SheetPassword = () => {
  return (
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
          <Input
            className=" bg-transparent max-w-[1020px]"
            placeholder="Digite o nome do site da sua senha"
          />
        </div>
        <div className=" flex flex-col gap-2">
          <label className="text-sm  text-white font-medium">E-mail</label>
          <Input
            className=" bg-transparent max-w-[1020px]"
            placeholder="Digite o email da sua conta"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm  text-white font-medium">Senha</label>
          <div className="flex gap-4 ">
            <Input
              className=" bg-transparent max-w-[1020px]"
              placeholder="Digite a senha da sua conta"
            />
            <Button
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
          <Button className="mt-6" variant="secondary" type="submit">
            Adicionar senha
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};
