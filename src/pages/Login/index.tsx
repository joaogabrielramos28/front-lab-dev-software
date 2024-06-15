import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainLayout } from "@/layouts/main";
import { useLoginController } from "./useLoginController";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {
  const { control, handleLogin, handleSubmit } = useLoginController();
  return (
    <MainLayout>
      <section className=" w-full h-full flex items-center justify-center">
        <div className="container flex flex-col gap-4">
          <h1 className="text-3xl text-white font-bold ">Entrar na conta</h1>
          <label className="text-sm  text-white font-medium">E-mail</label>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <Input
                  {...field}
                  required
                  className=" bg-transparent max-w-[1020px]"
                  placeholder="Digite seu e-mail"
                />
                {fieldState.error && (
                  <span className="text-red-500 text-xs ">
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
                  required
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
          <Button
            variant="secondary"
            className="mt-4 w-48"
            onClick={handleSubmit(handleLogin)}
          >
            Entrar
          </Button>
          <Link
            to="/register"
            className="text-green-500 text-xs underline cursor-pointer hover:opacity-70 transition-opacity"
          >
            Não possui uma conta? Registre-se
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};
