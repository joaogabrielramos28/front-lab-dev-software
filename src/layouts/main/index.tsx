import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { PropsWithChildren } from "react";

type MainLayout = {
  isLogged?: boolean;
  handleLogout?: () => void;
};

export const MainLayout = ({
  isLogged,
  children,
  handleLogout,
}: PropsWithChildren<MainLayout>) => {
  const { auth } = useAuth();
  return (
    <main className="flex flex-col justify-between min-h-screen scrollbar-w-2 scrollbar scrollbar-track-background scrollbar-thumb-secondary-foreground overflow-y-scroll scrollbar-thumb-rounded-md">
      <div>
        <Header isLogged={isLogged} handleLogout={handleLogout} />
        {isLogged && (
          <div className="px-6 mt-4">
            <span className="text-white text-3xl">
              Ola <strong className="text-green-400">{auth?.name}.</strong>{" "}
              Armazene suas senhas com segurança.
            </span>
          </div>
        )}
      </div>

      {children}

      <Footer />
    </main>
  );
};
