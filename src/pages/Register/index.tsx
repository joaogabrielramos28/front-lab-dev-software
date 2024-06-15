import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainLayout } from "@/layouts/main";
import { useRegisterController } from "./useRegisterController";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

export const Register = () => {
  const { control, handleRegister, handleSubmit } = useRegisterController();
  return (
    <MainLayout>
      <section className=" w-full h-full flex items-center justify-center">
        <div className="container flex flex-col gap-4">
          <h1 className="text-3xl text-white font-bold ">Crie sua conta</h1>
          <label className="text-sm  text-white font-medium">Nome</label>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  className=" bg-transparent max-w-[1020px]"
                  placeholder="Digite seu nome"
                />
                {fieldState.error && (
                  <span className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </>
            )}
          />
          <label className="text-sm  text-white font-medium">E-mail</label>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  className=" bg-transparent max-w-[1020px]"
                  placeholder="Digite seu e-mail"
                />
                {fieldState.error && (
                  <span className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </>
            )}
          />
          <label className="text-sm  text-white font-medium">Senha</label>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  type="password"
                  className=" bg-transparent max-w-[1020px]"
                  placeholder="Digite sua senha"
                />
                {fieldState.error && (
                  <span className="text-red-500 text-xs">
                    {fieldState.error.message}
                  </span>
                )}
              </>
            )}
          />
          <label className="text-sm  text-white font-medium">
            Confirme sua senha
          </label>

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  type="password"
                  className=" bg-transparent max-w-[1020px]"
                  placeholder="Digite sua confirmação de senha"
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
            variant="secondary"
            className="mt-4 w-48"
            onClick={handleSubmit(handleRegister)}
          >
            Criar conta
          </Button>
          <Link
            to="/"
            className="text-green-500 text-xs underline cursor-pointer hover:opacity-70 transition-opacity"
          >
            Já possui uma conta? Faça o login.
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};
