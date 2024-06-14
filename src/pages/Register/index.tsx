import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainLayout } from "@/layouts/main";

export const Register = () => {
  return (
    <MainLayout>
      <section className=" w-full h-full flex items-center justify-center">
        <div className="container flex flex-col gap-4">
          <h1 className="text-3xl text-white font-bold ">Crie sua conta</h1>
          <label className="text-sm  text-white font-medium">E-mail</label>
          <Input
            className=" bg-transparent max-w-[1020px]"
            placeholder="Digite seu e-mail"
          />
          <label className="text-sm  text-white font-medium">Senha</label>
          <Input
            className=" bg-transparent max-w-[1020px]"
            placeholder="Digite sua senha"
          />
          <label className="text-sm  text-white font-medium">
            Confirme sua senha
          </label>
          <Input
            className=" bg-transparent max-w-[1020px]"
            placeholder="Digite sua confirmação de senha"
          />

          <Button variant="secondary" className="mt-4 w-48">
            Criar conta
          </Button>
          <a className="text-green-500 text-xs underline cursor-pointer hover:opacity-70 transition-opacity">
            Já possui uma conta? Faça o login.
          </a>
        </div>
      </section>
    </MainLayout>
  );
};
